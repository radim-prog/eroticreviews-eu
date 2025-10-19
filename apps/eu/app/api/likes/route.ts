import { NextRequest, NextResponse } from 'next/server';
import { adminDb, adminAuth } from '@/lib/firebase-admin';
import { cookies } from 'next/headers';

async function verifyUser(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session');

    if (!sessionCookie) {
      return null;
    }

    const decodedClaims = await adminAuth.verifySessionCookie(
      sessionCookie.value,
      true
    );

    return decodedClaims;
  } catch (error) {
    console.error('User verification error:', error);
    return null;
  }
}

// GET - Get user's liked profiles
export async function GET(request: NextRequest) {
  const user = await verifyUser(request);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const userDoc = await adminDb.collection('users').doc(user.uid).get();

    if (!userDoc.exists) {
      return NextResponse.json({ liked_profiles: [] }, { status: 200 });
    }

    const userData = userDoc.data();
    const likedProfiles = userData?.liked_profiles || [];

    return NextResponse.json({ liked_profiles: likedProfiles }, { status: 200 });
  } catch (error) {
    console.error('Error fetching liked profiles:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Add profile to likes
export async function POST(request: NextRequest) {
  const user = await verifyUser(request);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { profileId } = await request.json();

    if (!profileId) {
      return NextResponse.json(
        { error: 'Missing profileId' },
        { status: 400 }
      );
    }

    // Check if profile exists
    const profileDoc = await adminDb
      .collection('profiles')
      .where('globalID', '==', profileId)
      .limit(1)
      .get();

    if (profileDoc.empty) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    // Get or create user document
    const userRef = adminDb.collection('users').doc(user.uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      // Create user document if it doesn't exist
      await userRef.set({
        user_id: user.uid,
        firebase_uid: user.uid,
        email: user.email || '',
        liked_profiles: [profileId],
        activity: {
          created_date: new Date().toISOString(),
          last_activity_date: new Date().toISOString(),
        },
        reputation: {
          level: 'bronze',
          points: 0,
          review_count: 0,
        },
        status: 'active',
      });
    } else {
      // Update existing user document
      const userData = userDoc.data();
      const likedProfiles = userData?.liked_profiles || [];

      if (!likedProfiles.includes(profileId)) {
        await userRef.update({
          liked_profiles: [...likedProfiles, profileId],
          'activity.last_activity_date': new Date().toISOString(),
        });
      }
    }

    return NextResponse.json(
      { success: true, message: 'Profile liked' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error liking profile:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE - Remove profile from likes
export async function DELETE(request: NextRequest) {
  const user = await verifyUser(request);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const profileId = searchParams.get('profileId');

    if (!profileId) {
      return NextResponse.json(
        { error: 'Missing profileId' },
        { status: 400 }
      );
    }

    const userRef = adminDb.collection('users').doc(user.uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userData = userDoc.data();
    const likedProfiles = userData?.liked_profiles || [];

    await userRef.update({
      liked_profiles: likedProfiles.filter((id: string) => id !== profileId),
      'activity.last_activity_date': new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Profile unliked' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error unliking profile:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
