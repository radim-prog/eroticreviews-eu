import { adminDb } from '@/lib/firebase-admin';
import Link from 'next/link';

async function getReviews(filter?: string) {
  try {
    let query = adminDb
      .collection('reviews')
      .orderBy('metadata.created_date', 'desc');

    if (filter === 'quarantine') {
      query = query.where('status', '==', 'quarantine');
    } else if (filter === 'published') {
      query = query.where('status', '==', 'published');
    }

    const reviewsSnapshot = await query.limit(50).get();

    return reviewsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

interface PageProps {
  searchParams: Promise<{ filter?: string }>;
}

export default async function AdminReviewsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const reviews = await getReviews(params.filter);

  const quarantineCount = reviews.filter((r: any) => r.status === 'quarantine')
    .length;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Recenze ({reviews.length})
        </h2>
        {quarantineCount > 0 && (
          <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg">
            ⚠️ {quarantineCount} v karanténě
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="mb-6 flex gap-4 border-b">
        <Link
          href="/admin/recenze"
          className={`px-4 py-2 border-b-2 ${
            !params.filter
              ? 'border-blue-600 text-blue-600 font-semibold'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Všechny
        </Link>
        <Link
          href="/admin/recenze?filter=published"
          className={`px-4 py-2 border-b-2 ${
            params.filter === 'published'
              ? 'border-blue-600 text-blue-600 font-semibold'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Publikované
        </Link>
        <Link
          href="/admin/recenze?filter=quarantine"
          className={`px-4 py-2 border-b-2 ${
            params.filter === 'quarantine'
              ? 'border-red-600 text-red-600 font-semibold'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Karanténa {quarantineCount > 0 && `(${quarantineCount})`}
        </Link>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review: any) => (
          <div
            key={review.id}
            className={`bg-white rounded-lg shadow p-6 ${
              review.status === 'quarantine'
                ? 'border-l-4 border-red-500'
                : review.status === 'published'
                ? 'border-l-4 border-green-500'
                : 'border-l-4 border-gray-300'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {review.title?.cs || review.title?.en || 'Bez názvu'}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating?.overall
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Profil:</span>{' '}
                  {review.target?.name || review.target?.globalID}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Autor:</span>{' '}
                  {review.author?.display_name} ({review.author?.handle})
                  <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded text-xs">
                    {review.author?.reputation_level}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Datum návštěvy:</span>{' '}
                  {review.visit_date}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    review.status === 'published'
                      ? 'bg-green-100 text-green-800'
                      : review.status === 'quarantine'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {review.status}
                </span>
                {review.verification?.status === 'verified' && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    ✓ Verified
                  </span>
                )}
              </div>
            </div>

            {/* Review Content */}
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed">
                {review.content?.cs || review.content?.en}
              </p>
            </div>

            {/* Quarantine Reason */}
            {review.quarantine?.is_quarantined && review.quarantine?.reason && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-sm font-semibold text-red-900 mb-1">
                  Důvod karantény:
                </div>
                <div className="text-sm text-red-700">
                  {review.quarantine.reason}
                </div>
              </div>
            )}

            {/* Content Policy Flags */}
            {review.content_policy_check && (
              <div className="mb-4 flex gap-3 text-sm">
                {review.content_policy_check.has_pricing && (
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded">
                    🚫 Obsahuje ceny
                  </span>
                )}
                {review.content_policy_check.has_contact_info && (
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded">
                    🚫 Obsahuje kontakt
                  </span>
                )}
                {review.content_policy_check.is_spam && (
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded">
                    🚫 Spam
                  </span>
                )}
              </div>
            )}

            {/* Engagement */}
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
              <div>
                👍 {review.engagement?.helpful_votes || 0} helpful
              </div>
              <div>
                👎 {review.engagement?.not_helpful_votes || 0} not helpful
              </div>
              {review.engagement?.report_count > 0 && (
                <div className="text-red-600">
                  ⚠️ {review.engagement.report_count} reports
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {review.status === 'quarantine' && (
                <>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                    ✓ Schválit a publikovat
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                    ✗ Odstranit
                  </button>
                </>
              )}
              {review.status === 'published' && (
                <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm">
                  ⚠️ Přesunout do karantény
                </button>
              )}
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                Upravit
              </button>
            </div>
          </div>
        ))}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-12 text-gray-500 bg-white rounded-lg shadow">
          {params.filter === 'quarantine'
            ? '🎉 Žádné recenze v karanténě!'
            : 'Žádné recenze.'}
        </div>
      )}
    </div>
  );
}
