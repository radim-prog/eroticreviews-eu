import { Metadata } from "next";

const SITE_NAME = "EroticReviews.cz";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const DEFAULT_DESCRIPTION = "Nezávislé recenze escort služeb, masáží a BDSM studií v České republice. Najděte ověřené profily a sdílejte své zkušenosti.";

interface SEOConfig {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "profile" | "article";
  noindex?: boolean;
  keywords?: string[];
}

/**
 * Generuje kompletní metadata pro stránku s canonical URL, OG tags a Twitter Card
 */
export function generateMetaTags(config: SEOConfig): Metadata {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    canonical,
    ogImage = `${SITE_URL}/og-image.jpg`,
    ogType = "website",
    noindex = false,
    keywords = [],
  } = config;

  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    // Open Graph
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "cs_CZ",
      type: ogType,
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },

    // Robots
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
      },
    },
  };
}

/**
 * Generuje metadata pro profil osoby
 */
export function generatePersonMeta(person: {
  name: string;
  age: number;
  location: string;
  slug: string;
  short_claim: string;
  type: string;
  avg_rating: number;
  reviews_count: number;
}) {
  const typeLabel =
    person.type === "divka" ? "Escort" :
    person.type === "maserka" ? "Masérka" :
    person.type === "domina" ? "Domina" : "Digitální modelka";

  return generateMetaTags({
    title: `${person.name}, ${person.age} - ${person.location}`,
    description: `${typeLabel} ${person.name} (${person.age} let) v ${person.location}. ${person.short_claim} ⭐ ${person.avg_rating}/5 (${person.reviews_count} recenzí)`,
    canonical: `/profil/${person.slug}`,
    ogType: "profile",
    keywords: [
      person.name,
      typeLabel.toLowerCase(),
      person.location,
      "recenze",
      "zkušenosti",
      "hodnocení",
    ],
  });
}

/**
 * Generuje metadata pro organizaci
 */
export function generateOrganizationMeta(org: {
  name: string;
  location: string;
  slug: string;
  type: string;
  description: string;
  avg_rating: number;
  reviews_count: number;
}) {
  const typeLabel =
    org.type === "podnik" ? "Podnik" :
    org.type === "masazni_salon" ? "Masážní salon" :
    org.type === "bdsm_studio" ? "BDSM studio" : "Escort agentura";

  const shortDesc = org.description.split('\n')[0];

  return generateMetaTags({
    title: `${org.name} - ${org.location}`,
    description: `${typeLabel} ${org.name} v ${org.location}. ${shortDesc} ⭐ ${org.avg_rating}/5 (${org.reviews_count} recenzí)`,
    canonical: `/organizace/${org.slug}`,
    ogType: "website",
    keywords: [
      org.name,
      typeLabel.toLowerCase(),
      org.location,
      "recenze",
      "hodnocení",
    ],
  });
}

/**
 * Generuje metadata pro kategorii
 */
export function generateCategoryMeta(category: {
  title: string;
  description: string;
  slug: string;
  count: number;
}) {
  return generateMetaTags({
    title: category.title,
    description: `${category.description} Aktuálně ${category.count} profilů s ověřenými recenzemi.`,
    canonical: `/${category.slug}`,
    keywords: [
      category.title.toLowerCase(),
      "recenze",
      "česká republika",
      "ověřené profily",
    ],
  });
}

/**
 * Generuje metadata pro stránku s recenzemi
 */
export function generateReviewsPageMeta() {
  return generateMetaTags({
    title: "Všechny recenze",
    description: "Prohlédněte si všechny ověřené recenze escort služeb, masáží a BDSM studií v ČR. Autentické zkušenosti reálných zákazníků.",
    canonical: "/recenze",
    keywords: ["recenze", "hodnocení", "zkušenosti", "escort", "masáže"],
  });
}

/**
 * Generuje metadata pro vyhledávání
 */
export function generateSearchMeta() {
  return generateMetaTags({
    title: "Vyhledávání",
    description: "Vyhledejte escort služby, masérky, BDSM studia a digitální modelky podle lokace, služeb a hodnocení.",
    canonical: "/vyhledavani",
    noindex: true, // Vyhledávací stránky obvykle neindexujeme
  });
}
