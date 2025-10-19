import { getLocale } from "@/lib/locale";
import Link from "next/link";
import { cities, categories, countries } from "@eroticreviews/schema/data";

export default async function HomePage() {
  const locale = await getLocale();
  
  // Filter cities visible on EU domain
  const visibleCities = cities.filter(city => city.visibility.eu);
  
  const translations: Record<string, any> = {
    'en': {
      welcome: 'Welcome to EroticReviews.EU',
      subtitle: 'European Adult Services Directory',
      browseCities: 'Browse by City',
      browseCategories: 'Browse by Category',
      viewProfiles: 'View Profiles'
    },
    'cs': {
      welcome: 'Vítejte na EroticReviews.EU',
      subtitle: 'Evropský adultní katalog',
      browseCities: 'Procházet podle města',
      browseCategories: 'Procházet podle kategorie',
      viewProfiles: 'Zobrazit profily'
    },
    'de': {
      welcome: 'Willkommen bei EroticReviews.EU',
      subtitle: 'Europäisches Erwachsenen-Verzeichnis',
      browseCities: 'Nach Stadt durchsuchen',
      browseCategories: 'Nach Kategorie durchsuchen',
      viewProfiles: 'Profile ansehen'
    },
    'es': {
      welcome: 'Bienvenido a EroticReviews.EU',
      subtitle: 'Directorio Europeo de Servicios para Adultos',
      browseCities: 'Buscar por ciudad',
      browseCategories: 'Buscar por categoría',
      viewProfiles: 'Ver perfiles'
    },
    'fr': {
      welcome: 'Bienvenue sur EroticReviews.EU',
      subtitle: 'Annuaire Européen des Services pour Adultes',
      browseCities: 'Parcourir par ville',
      browseCategories: 'Parcourir par catégorie',
      viewProfiles: 'Voir les profils'
    },
    'nl': {
      welcome: 'Welkom bij EroticReviews.EU',
      subtitle: 'Europese Volwassen Diensten Gids',
      browseCities: 'Bladeren per stad',
      browseCategories: 'Bladeren per categorie',
      viewProfiles: 'Bekijk profielen'
    },
    'en-GB': {
      welcome: 'Welcome to EroticReviews.EU',
      subtitle: 'European Adult Services Directory',
      browseCities: 'Browse by City',
      browseCategories: 'Browse by Category',
      viewProfiles: 'View Profiles'
    }
  };
  
  const t = translations[locale] || translations['en'];
  
  // Get locale-specific slug key
  const getLocaleKey = (locale: string): string => {
    const mapping: Record<string, string> = {
      'en': 'en',
      'cs': 'cs',
      'de': 'de',
      'es': 'es',
      'fr': 'fr',
      'nl': 'nl',
      'en-GB': 'en'
    };
    return mapping[locale] || 'en';
  };
  
  const localeKey = getLocaleKey(locale);
  const langPrefix = locale === 'en' ? '' : `/${localeKey}`;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-purple-900">EroticReviews.EU</h1>
          <p className="text-gray-600 mt-1">{t.subtitle}</p>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          {t.welcome}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </section>
      
      {/* Cities Section */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">{t.browseCities}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCities.map(city => {
            const cityName = city.name[localeKey as keyof typeof city.name] || city.name.en;
            const citySlug = city.slug[localeKey as keyof typeof city.slug] || city.slug.en;
            const country = countries.find(c => c.id === city.country_id);
            const countryName = country?.name[localeKey as keyof typeof country.name] || country?.name.en;
            
            return (
              <Link 
                key={city.id}
                href={`${langPrefix}/city/${citySlug}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 group"
              >
                <div className="text-4xl mb-4">📍</div>
                <h4 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition">
                  {cityName}
                </h4>
                <p className="text-gray-600 mt-2">{countryName}</p>
                <div className="mt-4 text-purple-600 font-semibold group-hover:underline">
                  {t.viewProfiles} →
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">{t.browseCategories}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => {
            const categoryName = category.name[localeKey as keyof typeof category.name] || category.name.en;
            const categorySlug = category.slug[localeKey as keyof typeof category.slug] || category.slug.en;
            
            const icons: Record<string, string> = {
              'escorts': '💃',
              'massage': '💆',
              'bdsm': '⛓️'
            };
            
            return (
              <Link
                key={category.id}
                href={`${langPrefix}/${categorySlug}`}
                className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-white group"
              >
                <div className="text-5xl mb-4">{icons[category.key] || '✨'}</div>
                <h4 className="text-2xl font-bold group-hover:scale-105 transition-transform">
                  {categoryName}
                </h4>
                <div className="mt-4 font-semibold opacity-90 group-hover:opacity-100">
                  {t.viewProfiles} →
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-400">
            © 2025 EroticReviews.EU - European Adult Services Directory
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Locale: {locale} | Domain: .EU
          </p>
        </div>
      </footer>
    </div>
  );
}
