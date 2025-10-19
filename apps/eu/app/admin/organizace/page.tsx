import { adminDb } from '@/lib/firebase-admin';
import Link from 'next/link';

async function getOrganizations() {
  try {
    const orgsSnapshot = await adminDb
      .collection('organizations')
      .orderBy('activity.last_updated_date', 'desc')
      .limit(50)
      .get();

    return orgsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching organizations:', error);
    return [];
  }
}

export default async function AdminOrganizationsPage() {
  const organizations = await getOrganizations();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Organizace ({organizations.length})
        </h2>
        <Link
          href="/admin/organizace/nova"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          + Nová organizace
        </Link>
      </div>

      {/* Organizations Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Název
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Typ
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Město
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Banner Tier
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Recenze
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Akce
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {organizations.map((org: any) => (
              <tr key={org.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {org.name?.cs || org.name?.en || 'Bez názvu'}
                      </div>
                      <div className="text-sm text-gray-500">
                        {org.globalID}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {org.category_ids?.join(', ') || '-'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {org.city_id || '-'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      org.banner_tier === 'platinum'
                        ? 'bg-purple-100 text-purple-800'
                        : org.banner_tier === 'gold'
                        ? 'bg-yellow-100 text-yellow-800'
                        : org.banner_tier === 'silver'
                        ? 'bg-gray-200 text-gray-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {org.banner_tier || 'bronze'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {org.review_stats?.review_count || 0} recenzí
                  </div>
                  {org.review_stats?.average_rating && (
                    <div className="text-sm text-gray-500">
                      ⭐ {org.review_stats.average_rating.toFixed(1)}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      org.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : org.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {org.status || 'draft'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={`/admin/organizace/${org.id}`}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Upravit
                  </Link>
                  <button className="text-red-600 hover:text-red-900">
                    Smazat
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {organizations.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Žádné organizace. Vytvořte první organizaci kliknutím na &quot;+
            Nová organizace&quot;.
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">
          💡 Banner Tier System
        </h3>
        <div className="text-sm text-blue-800 space-y-1">
          <p>
            <strong>Bronze:</strong> 0-9 recenzí nebo 0-4 backlinks
          </p>
          <p>
            <strong>Silver:</strong> 10-29 recenzí nebo 5-14 backlinks
          </p>
          <p>
            <strong>Gold:</strong> 30-99 recenzí nebo 15-49 backlinks
          </p>
          <p>
            <strong>Platinum:</strong> 100+ recenzí nebo 50+ backlinks
          </p>
        </div>
      </div>
    </div>
  );
}
