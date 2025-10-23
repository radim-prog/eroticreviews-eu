import { getAllOrganizations } from '@/lib-cz/demo-data';
import { ORG_TYPES } from '@/lib-cz/types';
import Link from 'next/link';

async function getOrganizations() {
  // 🎯 Using DEMO DATA instead of Firebase
  const allOrgs = getAllOrganizations();

  // Sort by newest first (created_at desc)
  return allOrgs.sort((a, b) =>
    b.created_at.getTime() - a.created_at.getTime()
  );
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

      {/* Search & Filters */}
      <div className="mb-4 bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vyhledat
            </label>
            <input
              type="text"
              placeholder="Název organizace..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Typ
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">Všechny</option>
              {Object.entries(ORG_TYPES).map(([key, data]) => (
                <option key={key} value={key}>{data.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">Všechny</option>
              <option value="publish">Publikované</option>
              <option value="draft">Koncept</option>
            </select>
          </div>
        </div>
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
                Lokalita
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
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
            {organizations.map((org) => {
              const typeData = ORG_TYPES[org.type];

              return (
                <tr key={org.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-lg">
                        {typeData?.emoji || '🏢'}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {org.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          /{org.slug}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {typeData?.label || org.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {org.address_city || '-'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {org.avg_rating ? (
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">⭐</span>
                        <span className="text-sm font-medium text-gray-900">
                          {org.avg_rating.toFixed(1)}
                        </span>
                        <span className="text-xs text-gray-500 ml-1">
                          ({org.reviews_count})
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">Bez hodnocení</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        org.status === 'publish'
                          ? 'bg-green-100 text-green-800'
                          : org.status === 'draft'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {org.status || 'draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/organizace/${org.slug}`}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Zobrazit
                    </Link>
                    <Link
                      href={`/admin/organizace/${org.id}`}
                      className="text-green-600 hover:text-green-900 mr-4"
                    >
                      Upravit
                    </Link>
                    <button className="text-red-600 hover:text-red-900">
                      Smazat
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {organizations.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Žádné organizace. Vytvořte první organizaci kliknutím na &quot;+ Nová
            organizace&quot;.
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="mt-4 text-sm text-gray-600 flex justify-between items-center">
        <div>
          Celkem zobrazeno: <strong>{organizations.length}</strong> organizací
        </div>
        <div>
          Průměrné hodnocení: <strong>
            {(organizations.reduce((acc, o) => acc + (o.avg_rating || 0), 0) / organizations.filter(o => o.avg_rating).length || 0).toFixed(2)}
          </strong> ⭐
        </div>
      </div>
    </div>
  );
}
