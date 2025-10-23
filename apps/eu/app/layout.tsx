import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getLocale } from "@/lib/locale";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AgeVerification from "@/components/AgeVerification";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  // Basic metadata - will be enhanced per page
  const titles: Record<string, string> = {
    'en': 'EroticReviews.EU - European Adult Services Directory',
    'cs': 'EroticReviews.EU - Evropský adultní katalog',
    'de': 'EroticReviews.EU - Europäisches Erwachsenen-Verzeichnis',
    'es': 'EroticReviews.EU - Directorio Europeo de Servicios para Adultos',
    'fr': 'EroticReviews.EU - Annuaire Européen des Services pour Adultes',
    'nl': 'EroticReviews.EU - Europese Volwassen Diensten Gids',
    'en-GB': 'EroticReviews.EU - European Adult Services Directory'
  };

  const descriptions: Record<string, string> = {
    'en': 'European directory of verified escorts, erotic massage and BDSM services. Browse profiles, read reviews, find companions across Europe.',
    'cs': 'Evropský adresář ověřených eskort služeb, erotických masáží a BDSM. Procházejte profily, čtěte recenze, najděte společnice po celé Evropě.',
    'de': 'Europäisches Verzeichnis verifizierter Escort-Services, erotischer Massagen und BDSM. Durchsuchen Sie Profile, lesen Sie Bewertungen, finden Sie Begleiter in ganz Europa.',
    'es': 'Directorio europeo de servicios de escort verificados, masajes eróticos y BDSM. Explore perfiles, lea reseñas, encuentre acompañantes en toda Europa.',
    'fr': 'Annuaire européen de services d\'escorte vérifiés, massages érotiques et BDSM. Parcourez les profils, lisez les avis, trouvez des compagnons dans toute l\'Europe.',
    'nl': 'Europese gids van geverifieerde escort services, erotische massages en BDSM. Blader door profielen, lees beoordelingen, vind gezelschap in heel Europa.',
    'en-GB': 'European directory of verified escorts, erotic massage and BDSM services. Browse profiles, read reviews, find companions across Europe.'
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'standard',
      'max-snippet': -1,
      'max-video-preview': -1
    },
    other: {
      // Block AI training and scraping
      'robots': 'noai, noimageai',
      'googlebot': 'noarchive',
    }
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        <AgeVerification />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
