import { Person, Review } from "@/lib/types";

/**
 * Generuje Schema.org markup pro Person profily
 * Podporuje: escort (divka), masérka (maserka), domina, digitální modelka
 */
export function generatePersonSchema(person: Person, reviews: Review[] = []) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": person.name,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": person.location,
      "addressCountry": "CZ",
    },
    "description": person.short_claim,
    // Agregované hodnocení (pokud existují recenze)
    ...(person.reviews_count > 0 && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": person.avg_rating.toFixed(1),
        "reviewCount": person.reviews_count,
        "bestRating": 5,
        "worstRating": 1,
      }
    }),
    // Recenze (max 5 pro schema.org)
    ...(reviews.length > 0 && {
      "review": reviews.slice(0, 5).map(r => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": r.author_alias,
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": r.rating,
          "bestRating": 5,
          "worstRating": 1,
        },
        "reviewBody": r.body,
        "datePublished": r.created_at.toISOString().split('T')[0],
      }))
    }),
    // URL profilu
    "url": `${baseUrl}/profil/${person.slug}`,
    // Jazyky
    "knowsLanguage": person.languages.map(lang => ({
      "@type": "Language",
      "name": lang,
    })),
  };
}
