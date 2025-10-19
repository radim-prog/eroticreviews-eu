import { getLocale, isCcTLDDomain, getDomain } from "@/lib/locale";
import Link from "next/link";
import { cities, profiles, categories, countries } from "@eroticreviews/schema/data";
import { notFound } from "next/navigation";

export default async function ProfilePage({ params }: { params: { slug: string } }) {
  const locale = await getLocale();
  const isCcTLD = await isCcTLDDomain();
  const domain = await getDomain();
  const { slug } = params;

  // Find profile by slug
  const profile = profiles.profiles.find(p => {
    const profileSlug = p.slug_current[locale as keyof typeof p.slug_current] || p.slug_current.en;
    return profileSlug === slug;
  });

  if (!profile) {
    notFound();
  }

  const profileTitle = profile.title[locale as keyof typeof profile.title] || profile.title.en;
  const profileDesc = profile.description[locale as keyof typeof profile.description] || profile.description.en;

  const city = cities.find(c => c.id === profile.city_id);
  const cityName = city?.name[locale as keyof typeof city.name] || city?.name.en;
  const citySlug = city?.slug[locale as keyof typeof city.slug] || city?.slug.en;

  const country = countries.find(c => c.id === city?.country_id);
  const countryName = country?.name[locale as keyof typeof country.name] || country?.name.en;

  const langPrefix = isCcTLD ? '' : (locale === 'en' ? '' : `/${locale}`);

  // Get domain key for pricing
  const domainKey = domain.includes('.cz') ? 'cz' :
                    domain.includes('.de') ? 'de' :
                    domain.includes('.fr') ? 'fr' :
                    domain.includes('.nl') ? 'nl' :
                    domain.includes('.co.uk') ? 'uk' : 'eu';

  const pricing = profile.offers[domainKey as keyof typeof profile.offers] || profile.offers.eu;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href={langPrefix || '/'} className="text-purple-600 hover:underline">
            ← {locale === 'en' ? 'Back to Home' : locale === 'cs' ? 'Zpět na hlavní stránku' : locale === 'de' ? 'Zurück zur Startseite' : locale === 'fr' ? 'Retour à l\'accueil' : locale === 'nl' ? 'Terug naar home' : 'Back'}
          </Link>
        </div>
      </header>

      {/* Profile Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column - Images */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6">
              {/* Main Image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-9xl">💋</div>
              </div>

              {/* Verified Badge */}
              {profile.verification.status === 'verified' && (
                <div className="bg-green-50 border-t-4 border-green-500 p-4 text-center">
                  <div className="text-green-700 font-bold text-lg flex items-center justify-center gap-2">
                    <span className="text-2xl">✓</span>
                    {locale === 'en' ? 'Verified Profile' : locale === 'cs' ? 'Ověřený profil' : locale === 'de' ? 'Verifiziertes Profil' : locale === 'fr' ? 'Profil vérifié' : locale === 'nl' ? 'Geverifieerd profiel' : 'Verified'}
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    {new Date(profile.verification.date).toLocaleDateString(locale)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">

              {/* Title & Location */}
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {profileTitle}
              </h1>

              <div className="flex items-center gap-2 text-lg text-gray-600 mb-6">
                <span>📍</span>
                <Link href={`${langPrefix}/city/${citySlug}`} className="hover:text-purple-600">
                  {cityName}, {countryName}
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">{profile.attributes.age}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {locale === 'en' ? 'Years' : locale === 'cs' ? 'Let' : locale === 'de' ? 'Jahre' : locale === 'fr' ? 'Ans' : locale === 'nl' ? 'Jaar' : 'Years'}
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">{profile.attributes.height_cm}</div>
                  <div className="text-sm text-gray-600 mt-1">cm</div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">{profile.attributes.weight_kg}</div>
                  <div className="text-sm text-gray-600 mt-1">kg</div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">{profile.attributes.breast}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {locale === 'en' ? 'Breast' : locale === 'cs' ? 'Prsa' : locale === 'de' ? 'Brust' : locale === 'fr' ? 'Poitrine' : locale === 'nl' ? 'Borst' : 'Size'}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {locale === 'en' ? 'About' : locale === 'cs' ? 'O mně' : locale === 'de' ? 'Über mich' : locale === 'fr' ? 'À propos' : locale === 'nl' ? 'Over mij' : 'About'}
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {profileDesc}
                </p>
              </div>

              {/* Pricing */}
              {pricing && (
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-8">
                  <h3 className="text-xl font-bold mb-2">
                    {locale === 'en' ? 'Rates' : locale === 'cs' ? 'Ceník' : locale === 'de' ? 'Preise' : locale === 'fr' ? 'Tarifs' : locale === 'nl' ? 'Tarieven' : 'Rates'}
                  </h3>
                  <div className="text-2xl font-bold">
                    {pricing.pricing_note}
                  </div>
                </div>
              )}

              {/* Contact Button */}
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl transition text-lg">
                📞 {locale === 'en' ? 'Contact' : locale === 'cs' ? 'Kontaktovat' : locale === 'de' ? 'Kontakt' : locale === 'fr' ? 'Contacter' : locale === 'nl' ? 'Contact' : 'Contact'}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                {locale === 'en' ? 'Always meet in a safe public place first' :
                 locale === 'cs' ? 'Vždy se nejdříve setkejte na bezpečném veřejném místě' :
                 locale === 'de' ? 'Treffen Sie sich immer zuerst an einem sicheren öffentlichen Ort' :
                 locale === 'fr' ? 'Rencontrez toujours dans un lieu public sûr d\'abord' :
                 locale === 'nl' ? 'Ontmoet altijd eerst op een veilige openbare plaats' : 'Safety first'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
