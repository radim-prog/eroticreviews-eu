import { adminDb } from '@/lib/firebase-admin';
import Link from 'next/link';

async function getProfiles() {
  try {
    const profilesSnapshot = await adminDb
      .collection('profiles')
      .orderBy('activity.last_updated_date', 'desc')
      .limit(50)
      .get();

    return profilesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return [];
  }
}

export default async function AdminProfilesPage() {
  const profiles = await getProfiles();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Profily ({profiles.length})
        </h2>
        <Link
          href="/admin/profily/novy"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          + Nový profil
        </Link>
      </div>

      {/* Profiles Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Profil
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kategorie
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Město
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Verifikace
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Akce
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {profiles.map((profile: any) => (
              <tr key={profile.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {profile.title?.cs || profile.title?.en || 'Bez názvu'}
                      </div>
                      <div className="text-sm text-gray-500">
                        {profile.globalID}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {profile.category_ids?.join(', ') || '-'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {profile.city_id || '-'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      profile.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : profile.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {profile.status || 'draft'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      profile.verification?.status === 'verified'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {profile.verification?.status || 'unverified'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={`/admin/profily/${profile.id}`}
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

        {profiles.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Žádné profily. Vytvořte první profil kliknutím na &quot;+ Nový
            profil&quot;.
          </div>
        )}
      </div>
    </div>
  );
}
