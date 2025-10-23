import { getAllReviews, getAllPeople, getAllOrganizations } from '@/lib-cz/demo-data';
import Link from 'next/link';

interface PageProps {
  searchParams: Promise<{ filter?: string }>;
}

async function getReviews(filter?: string) {
  // 🎯 Using DEMO DATA instead of Firebase
  const allReviews = getAllReviews();
  const allPeople = getAllPeople();
  const allOrgs = getAllOrganizations();

  // Combine profiles for lookups
  const allProfiles = [...allPeople, ...allOrgs];

  // Simulate quarantine (reviews with rating < 2)
  const reviewsWithProfiles = allReviews.map(review => {
    const profile = allProfiles.find(p => p.id === review.target_id);
    const status = review.rating < 2 ? 'quarantine' : 'published';
    return {
      ...review,
      profile,
      status,
    };
  });

  // Apply filter
  if (filter === 'quarantine') {
    return reviewsWithProfiles.filter(r => r.status === 'quarantine');
  } else if (filter === 'published') {
    return reviewsWithProfiles.filter(r => r.status === 'published');
  }

  // Sort by newest first
  return reviewsWithProfiles.sort((a, b) =>
    b.created_at.getTime() - a.created_at.getTime()
  );
}

export default async function AdminReviewsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const reviews = await getReviews(params.filter);

  const allReviews = await getReviews();
  const quarantineCount = allReviews.filter(r => r.status === 'quarantine').length;
  const publishedCount = allReviews.filter(r => r.status === 'published').length;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Recenze ({reviews.length})
        </h2>
        {quarantineCount > 0 && (
          <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-semibold">
            ⚠️ {quarantineCount} v karanténě
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="mb-6 bg-white rounded-lg shadow">
        <div className="flex gap-0 border-b">
          <Link
            href="/admin/recenze"
            className={`px-6 py-3 border-b-2 transition-colors ${
              !params.filter
                ? 'border-blue-600 text-blue-600 font-semibold bg-blue-50'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Všechny ({allReviews.length})
          </Link>
          <Link
            href="/admin/recenze?filter=published"
            className={`px-6 py-3 border-b-2 transition-colors ${
              params.filter === 'published'
                ? 'border-green-600 text-green-600 font-semibold bg-green-50'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Publikované ({publishedCount})
          </Link>
          <Link
            href="/admin/recenze?filter=quarantine"
            className={`px-6 py-3 border-b-2 transition-colors ${
              params.filter === 'quarantine'
                ? 'border-red-600 text-red-600 font-semibold bg-red-50'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Karanténa ({quarantineCount})
          </Link>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => {
          const isOrg = review.profile && 'establishment_name' in review.profile;
          const linkPrefix = isOrg ? '/organizace' : '/profil';

          return (
            <div
              key={review.id}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 ${
                review.status === 'quarantine'
                  ? 'border-l-4 border-red-500'
                  : 'border-l-4 border-green-500'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Profile Info */}
                    <div className="flex items-center gap-2">
                      <div className="text-2xl">
                        {isOrg ? '🏢' : '👤'}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {review.profile?.name || 'Neznámý profil'}
                        </h3>
                        {review.profile && (
                          <Link
                            href={`${linkPrefix}/${review.profile.slug}`}
                            target="_blank"
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            /{review.profile.slug} →
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center ml-auto">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-lg font-bold text-gray-900">
                        {review.rating}.0
                      </span>
                    </div>
                  </div>

                  {/* Author & Date */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div>
                      <span className="font-medium">Autor:</span>{' '}
                      {review.author_name || 'Anonymní'}
                    </div>
                    <div>
                      <span className="font-medium">Datum:</span>{' '}
                      {review.created_at.toLocaleDateString('cs-CZ', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-3">
                    <p className="text-gray-700 leading-relaxed">
                      {review.comment}
                    </p>
                  </div>

                  {/* Quarantine Warning */}
                  {review.status === 'quarantine' && (
                    <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="text-sm font-semibold text-red-900 mb-1">
                        ⚠️ Důvod karantény:
                      </div>
                      <div className="text-sm text-red-700">
                        Nízké hodnocení ({review.rating}/5) - vyžaduje manuální kontrolu
                      </div>
                    </div>
                  )}
                </div>

                {/* Status Badge */}
                <div className="ml-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${
                      review.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {review.status === 'published' ? '✓ Publikováno' : '⚠️ Karanténa'}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {review.status === 'quarantine' && (
                  <>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      ✓ Schválit a publikovat
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                      ✗ Odstranit
                    </button>
                  </>
                )}
                {review.status === 'published' && (
                  <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium">
                    ⚠️ Přesunout do karantény
                  </button>
                )}
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                  Upravit
                </button>
                <Link
                  href={review.profile ? `${linkPrefix}/${review.profile.slug}#recenze` : '#'}
                  target="_blank"
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Zobrazit na webu
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-12 text-gray-500 bg-white rounded-lg shadow">
          {params.filter === 'quarantine'
            ? '🎉 Žádné recenze v karanténě!'
            : params.filter === 'published'
            ? '📝 Žádné publikované recenze.'
            : '📝 Žádné recenze.'}
        </div>
      )}

      {/* Summary Stats */}
      {reviews.length > 0 && (
        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Statistiky
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-gray-600 mb-1">Celkem recenzí</div>
              <div className="text-2xl font-bold text-gray-900">
                {allReviews.length}
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-1">Publikované</div>
              <div className="text-2xl font-bold text-green-600">
                {publishedCount}
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-1">V karanténě</div>
              <div className="text-2xl font-bold text-red-600">
                {quarantineCount}
              </div>
            </div>
            <div>
              <div className="text-gray-600 mb-1">Průměrné hodnocení</div>
              <div className="text-2xl font-bold text-yellow-600">
                {(allReviews.reduce((acc, r) => acc + r.rating, 0) / allReviews.length).toFixed(1)} ⭐
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
