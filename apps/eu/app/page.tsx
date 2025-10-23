import Link from "next/link";
import { Search, Star, TrendingUp, Users, Clock, Award, Sparkles } from "lucide-react";
import { PERSON_TYPES, ORG_TYPES } from "@/lib-cz/types";
import { getAllReviews, getAllPeople, getAllOrganizations } from "@/lib-cz/demo-data";
import StarRating from "@/components/StarRating";

export default function Home() {
  // Get latest reviews (sorted by date, limit 6)
  const allReviews = getAllReviews();
  const latestReviews = [...allReviews]
    .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
    .slice(0, 6);

  // Get top rated profiles (people + orgs combined, sorted by rating, limit 6)
  const allPeople = getAllPeople();
  const allOrgs = getAllOrganizations();
  const allProfiles = [...allPeople, ...allOrgs];
  const topRatedProfiles = allProfiles
    .filter(p => p.avg_rating && p.reviews_count && p.reviews_count >= 3)
    .sort((a, b) => (b.avg_rating || 0) - (a.avg_rating || 0))
    .slice(0, 6);

  // Get newest profiles (last 30 days, limit 6)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const newestProfiles = allProfiles
    .filter(p => p.created_at >= thirtyDaysAgo)
    .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
    .slice(0, 6);
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nezávislé recenze<br />
            <span className="text-blue-600">erotických služeb</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Nejrozsáhlejší katalog a recenze profesionálních erotických služeb v České republice.
            Ověřené hodnocení od skutečných návštěvníků.
          </p>

          {/* Vyhledávací box */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <form className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Hledat podle jména, lokality, služeb..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Link
                href="/vyhledavani"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200"
              >
                Pokročilé vyhledávání
              </Link>
            </form>
          </div>

          {/* Rychlé statistiky */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-600">Profilů</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Recenzí</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-3xl font-bold text-blue-600">4.2</div>
              <div className="text-sm text-gray-600">Průměr</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated Profily */}
      {topRatedProfiles.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-900">Nejlépe hodnocené</h2>
            </div>
            <Link href="/top-rated" className="text-blue-600 hover:text-blue-700 font-semibold">
              Zobrazit všechny →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedProfiles.map((profile) => {
              const isOrg = 'establishment_name' in profile;
              const linkPrefix = isOrg ? '/organizace' : '/profil';

              return (
                <Link
                  key={profile.id}
                  href={`${linkPrefix}/${profile.slug}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-yellow-50 to-yellow-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                      {isOrg ? '🏢' : '👤'}
                    </div>
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      TOP
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {profile.name}
                    </h3>
                    {profile.avg_rating && (
                      <div className="mb-2">
                        <StarRating rating={profile.avg_rating} size={16} />
                        <span className="text-sm text-gray-600 ml-2">
                          ({profile.reviews_count || 0} recenzí)
                        </span>
                      </div>
                    )}
                    {'location' in profile && profile.location && (
                      <p className="text-sm text-gray-600">📍 {profile.location}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Kategorie osob */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Osoby</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(PERSON_TYPES).map(([key, data]) => (
            <Link
              key={key}
              href={`/${data.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-200 overflow-hidden group"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition duration-200">
                  <Users className="w-8 h-8 text-blue-600 group-hover:text-white transition duration-200" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.label}</h3>
                <p className="text-gray-600">{data.description}</p>
                <div className="mt-4 text-blue-600 font-semibold group-hover:text-blue-700">
                  Zobrazit profily →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Kategorie organizací */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Podniky & Salony</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(ORG_TYPES).map(([key, data]) => (
            <Link
              key={key}
              href={`/${data.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-200 overflow-hidden group"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 transition duration-200">
                  <TrendingUp className="w-8 h-8 text-purple-600 group-hover:text-white transition duration-200" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.label}</h3>
                <p className="text-gray-600">{data.description}</p>
                <div className="mt-4 text-purple-600 font-semibold group-hover:text-purple-700">
                  Zobrazit podniky →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Nově přidané profily */}
      {newestProfiles.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl font-bold text-gray-900">Nově přidané</h2>
            </div>
            <Link href="/nove-profily" className="text-blue-600 hover:text-blue-700 font-semibold">
              Zobrazit všechny →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newestProfiles.map((profile) => {
              const isOrg = 'establishment_name' in profile;
              const linkPrefix = isOrg ? '/organizace' : '/profil';
              const daysAgo = Math.floor((new Date().getTime() - profile.created_at.getTime()) / (1000 * 60 * 60 * 24));

              return (
                <Link
                  key={profile.id}
                  href={`${linkPrefix}/${profile.slug}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                      {isOrg ? '🏢' : '👤'}
                    </div>
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      {daysAgo === 0 ? 'DNES' : `${daysAgo}d`}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {profile.name}
                    </h3>
                    {profile.avg_rating && (
                      <div className="mb-2">
                        <StarRating rating={profile.avg_rating} size={16} />
                        <span className="text-sm text-gray-600 ml-2">
                          ({profile.reviews_count || 0} recenzí)
                        </span>
                      </div>
                    )}
                    {'location' in profile && profile.location && (
                      <p className="text-sm text-gray-600">📍 {profile.location}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Nejnovější recenze */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold text-gray-900">Nejnovější recenze</h2>
            </div>
            <Link href="/recenze" className="text-blue-600 hover:text-blue-700 font-semibold">
              Zobrazit všechny →
            </Link>
          </div>
          {latestReviews.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
              <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Zatím zde nejsou žádné recenze. Buďte první, kdo přidá recenzi!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestReviews.map((review) => {
                // Find the profile being reviewed
                const profile = allProfiles.find(p => p.id === review.target_id);
                const isOrg = profile && 'establishment_name' in profile;
                const linkPrefix = isOrg ? '/organizace' : '/profil';

                return (
                  <Link
                    key={review.id}
                    href={profile ? `${linkPrefix}/${profile.slug}#recenze` : '#'}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-2xl">
                          {isOrg ? '🏢' : '👤'}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {profile?.name || 'Neznámý profil'}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <StarRating rating={review.rating} size={14} />
                              <span className="text-sm text-gray-500">
                                {new Date(review.created_at).toLocaleDateString('cs-CZ')}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {review.comment}
                        </p>
                        {review.author_name && (
                          <p className="text-xs text-gray-400 mt-2">
                            od {review.author_name}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA sekce */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sdílejte své zkušenosti
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Pomozte ostatním najít kvalitní služby a sdílejte svoje recenze
          </p>
          <Link
            href="/recenze/nova"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 shadow-lg"
          >
            Napsat recenzi
          </Link>
        </div>
      </section>
    </div>
  );
}
