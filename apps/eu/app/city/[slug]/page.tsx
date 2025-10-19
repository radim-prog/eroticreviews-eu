import { getLocale, isCcTLDDomain } from "@/lib/locale";
import Link from "next/link";
import { cities, profiles, categories, countries } from "@eroticreviews/schema/data";
import { notFound } from "next/navigation";

export default async function CityPage({ params }: { params: { slug: string } }) {
  const locale = await getLocale();
  const isCcTLD = await isCcTLDDomain();
  const { slug } = params;

  // Find city by slug
  const city = cities.find(c => {
    const citySlug = c.slug[locale as keyof typeof c.slug] || c.slug.en;
    return citySlug === slug;
  });

  if (!city) {
    notFound();
  }

  // Get profiles for this city
  const cityProfiles = profiles.profiles.filter(p => p.city_id === city.id);

  const cityName = city.name[locale as keyof typeof city.name] || city.name.en;
  const country = countries.find(c => c.id === city.country_id);
  const countryName = country?.name[locale as keyof typeof country.name] || country?.name.en;

  const langPrefix = isCcTLD ? '' : (locale === 'en' ? '' : `/${locale}`);

  const t: Record<string, string> = {
    'en': 'Profiles in',
    'cs': 'Profily v',
    'de': 'Profile in',
    'es': 'Perfiles en',
    'fr': 'Profils à',
    'nl': 'Profielen in'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href={langPrefix || '/'} className="text-purple-600 hover:underline">
            ← {locale === 'en' ? 'Back to Home' : locale === 'cs' ? 'Zpět na hlavní stránku' : locale === 'de' ? 'Zurück zur Startseite' : locale === 'fr' ? 'Retour à l\'accueil' : locale === 'nl' ? 'Terug naar home' : 'Back to Home'}
          </Link>
          <h1 className="text-4xl font-bold text-purple-900 mt-4">
            {t[locale] || t['en']} {cityName}
          </h1>
          <p className="text-gray-600 mt-2">{countryName}</p>
        </div>
      </header>

      {/* Profiles Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {cityProfiles.length} {locale === 'en' ? 'profiles available' : locale === 'cs' ? 'dostupných profilů' : locale === 'de' ? 'verfügbare Profile' : locale === 'fr' ? 'profils disponibles' : locale === 'nl' ? 'beschikbare profielen' : 'profiles'}
        </h2>

        {cityProfiles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {locale === 'en' ? 'No profiles available yet' : locale === 'cs' ? 'Zatím žádné profily' : locale === 'de' ? 'Noch keine Profile verfügbar' : locale === 'fr' ? 'Aucun profil disponible pour le moment' : locale === 'nl' ? 'Nog geen profielen beschikbaar' : 'No profiles yet'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityProfiles.map(profile => {
              const profileTitle = profile.title[locale as keyof typeof profile.title] || profile.title.en;
              const profileSlug = profile.slug_current[locale as keyof typeof profile.slug_current] || profile.slug_current.en;
              const profileDesc = profile.description[locale as keyof typeof profile.description] || profile.description.en;

              return (
                <Link
                  key={profile.globalID}
                  href={`${langPrefix}/profile/${profileSlug}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
                >
                  {/* Placeholder Image */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-7xl">💋</div>
                  </div>

                  {/* Profile Info */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition">
                      {profileTitle}
                    </h3>

                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <span>{profile.attributes.age} {locale === 'en' ? 'years' : locale === 'cs' ? 'let' : locale === 'de' ? 'Jahre' : locale === 'fr' ? 'ans' : locale === 'nl' ? 'jaar' : 'years'}</span>
                      <span>•</span>
                      <span>{profile.attributes.height_cm} cm</span>
                    </div>

                    {profile.verification.status === 'verified' && (
                      <div className="inline-flex items-center gap-1 mt-3 text-green-600 text-sm font-semibold">
                        ✓ {locale === 'en' ? 'Verified' : locale === 'cs' ? 'Ověřeno' : locale === 'de' ? 'Verifiziert' : locale === 'fr' ? 'Vérifié' : locale === 'nl' ? 'Geverifieerd' : 'Verified'}
                      </div>
                    )}

                    <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                      {profileDesc}
                    </p>

                    <div className="mt-4 text-purple-600 font-semibold group-hover:underline">
                      {locale === 'en' ? 'View Profile' : locale === 'cs' ? 'Zobrazit profil' : locale === 'de' ? 'Profil ansehen' : locale === 'fr' ? 'Voir le profil' : locale === 'nl' ? 'Bekijk profiel' : 'View Profile'} →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
