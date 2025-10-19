import { adminDb } from '@/lib/firebase-admin';

async function getStats() {
  try {
    // Get counts from Firestore
    const profilesSnapshot = await adminDb.collection('profiles').count().get();
    const organizationsSnapshot = await adminDb.collection('organizations').count().get();
    const reviewsSnapshot = await adminDb.collection('reviews').count().get();
    const usersSnapshot = await adminDb.collection('users').count().get();

    // Get quarantined reviews count
    const quarantinedReviews = await adminDb
      .collection('reviews')
      .where('status', '==', 'quarantine')
      .count()
      .get();

    return {
      profiles: profilesSnapshot.data().count,
      organizations: organizationsSnapshot.data().count,
      reviews: reviewsSnapshot.data().count,
      users: usersSnapshot.data().count,
      quarantinedReviews: quarantinedReviews.data().count,
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    return {
      profiles: 0,
      organizations: 0,
      reviews: 0,
      users: 0,
      quarantinedReviews: 0,
    };
  }
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600 mb-2">
            Profily
          </div>
          <div className="text-3xl font-bold text-gray-900">
            {stats.profiles}
          </div>
          <a
            href="/admin/profily"
            className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block"
          >
            Zobrazit všechny →
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600 mb-2">
            Organizace
          </div>
          <div className="text-3xl font-bold text-gray-900">
            {stats.organizations}
          </div>
          <a
            href="/admin/organizace"
            className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block"
          >
            Zobrazit všechny →
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600 mb-2">
            Recenze
          </div>
          <div className="text-3xl font-bold text-gray-900">
            {stats.reviews}
          </div>
          {stats.quarantinedReviews > 0 && (
            <div className="text-sm text-red-600 mt-1">
              {stats.quarantinedReviews} v karanténě
            </div>
          )}
          <a
            href="/admin/recenze"
            className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block"
          >
            Moderovat →
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600 mb-2">
            Uživatelé
          </div>
          <div className="text-3xl font-bold text-gray-900">
            {stats.users}
          </div>
          <a
            href="/admin/uzivatele"
            className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block"
          >
            Spravovat →
          </a>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Rychlé akce
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/admin/profily/novy"
            className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Nový profil
          </a>

          <a
            href="/admin/organizace/nova"
            className="flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Nová organizace
          </a>

          <a
            href="/admin/recenze?filter=quarantine"
            className="flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Moderovat karanténu
          </a>
        </div>
      </div>

      {/* System Info */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Systémové informace
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-600">Environment:</span>{' '}
            <span className="text-gray-900">{process.env.NODE_ENV}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">Firebase Project:</span>{' '}
            <span className="text-gray-900">
              {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
