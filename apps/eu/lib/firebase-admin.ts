import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

let app: App | undefined;

// 🚧 TEMPORARY: Only initialize Firebase if env vars are present (for demo mode)
const hasFirebaseConfig =
  process.env.FIREBASE_PROJECT_ID &&
  process.env.FIREBASE_CLIENT_EMAIL &&
  process.env.FIREBASE_PRIVATE_KEY;

if (hasFirebaseConfig && !getApps().length) {
  app = initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  });
} else if (hasFirebaseConfig) {
  app = getApps()[0];
}

// Export safely - will throw errors if Firebase not configured and these are accessed
export const adminAuth = app ? getAuth(app) : null as any;
export const adminDb = app ? getFirestore(app) : null as any;
export const adminStorage = app ? getStorage(app) : null as any;

// Helper to check if user is admin
export async function isAdmin(email: string): Promise<boolean> {
  const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim()) || [];
  return adminEmails.includes(email);
}

// Helper to verify Firebase ID token
export async function verifyIdToken(idToken: string) {
  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    return decodedToken;
  } catch (error) {
    console.error('Error verifying ID token:', error);
    return null;
  }
}

export default app;
