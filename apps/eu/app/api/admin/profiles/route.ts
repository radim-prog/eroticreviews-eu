import { NextRequest, NextResponse } from 'next/server';
import { adminDb, adminAuth } from '@/lib/firebase-admin';
import { cookies } from 'next/headers';

async function verifyAdmin(request: NextRequest) {
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
    const user = await adminAuth.getUser(decodedClaims.uid);

    // Check if user email is in admin list
    const adminEmails = process.env.ADMIN_EMAILS?.split(',').map((e) => e.trim()) || [];
    if (!user.email || !adminEmails.includes(user.email)) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Admin verification error:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  const adminUser = await verifyAdmin(request);

  if (!adminUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();

    // Validate required fields
    if (!data.globalID || !data.title || !data.slug_current) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if globalID already exists
    const existingProfile = await adminDb
      .collection('profiles')
      .where('globalID', '==', data.globalID)
      .limit(1)
      .get();

    if (!existingProfile.empty) {
      return NextResponse.json(
        { error: 'Profile with this globalID already exists' },
        { status: 409 }
      );
    }

    // Create profile in Firestore
    const profileRef = await adminDb.collection('profiles').add({
      ...data,
      activity: {
        ...data.activity,
        created_date: new Date().toISOString(),
        last_activity_date: new Date().toISOString(),
        last_updated_by: adminUser.email,
      },
    });

    return NextResponse.json(
      {
        success: true,
        id: profileRef.id,
        message: 'Profile created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating profile:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const adminUser = await verifyAdmin(request);

  if (!adminUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const category = searchParams.get('category');
    const status = searchParams.get('status');

    let query = adminDb
      .collection('profiles')
      .orderBy('activity.last_updated_date', 'desc');

    if (category) {
      query = query.where('category_ids', 'array-contains', category);
    }

    if (status) {
      query = query.where('status', '==', status);
    }

    const snapshot = await query.limit(limit).get();

    const profiles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ profiles }, { status: 200 });
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
