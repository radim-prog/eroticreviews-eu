import { redirect } from 'next/navigation';
// import { adminAuth } from '@/lib/firebase-admin'; // TEMPORARY: Disabled for demo
import { cookies } from 'next/headers';

async function verifyAdmin() {
  // 🚧 TEMPORARY: Auth disabled for development/demo
  // TODO: Re-enable Firebase auth before production

  // Return fake admin user for demo
  return {
    uid: 'demo-admin-123',
    email: 'demo@admin.com',
    displayName: 'Demo Admin'
  };

  /* ORIGINAL CODE - COMMENTED OUT FOR DEMO:
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session');

  if (!sessionCookie) {
    return null;
  }

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie.value, true);
    const user = await adminAuth.getUser(decodedClaims.uid);

    // Check if user email is in admin list
    const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim()) || [];
    if (!user.email || !adminEmails.includes(user.email)) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Admin verification error:', error);
    return null;
  }
  */
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adminUser = await verifyAdmin();

  if (!adminUser) {
    redirect('/prihlaseni?redirect=/admin');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                Admin Panel - EroticReviews.EU
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {adminUser.email}
              </span>
              <a
                href="/api/auth/logout"
                className="text-sm text-red-600 hover:text-red-700"
              >
                Odhlásit se
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 py-3">
            <a
              href="/admin"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Dashboard
            </a>
            <a
              href="/admin/profily"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Profily
            </a>
            <a
              href="/admin/organizace"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Organizace
            </a>
            <a
              href="/admin/recenze"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Recenze
            </a>
            <a
              href="/admin/uzivatele"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Uživatelé
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
