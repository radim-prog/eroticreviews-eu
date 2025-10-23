import { Organization, Review } from "@/lib/types";

/**
 * Generuje Schema.org markup pro Organization
 * Podporuje: escort agentury
 */
export function generateOrganizationSchema(org: Organization, reviews: Review[] = []) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": org.name,
    "description": org.description.substring(0, 200) + "...",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": org.contacts?.address || "",
      "addressLocality": org.location,
      "addressCountry": "CZ",
    },
    // Kontaktní informace
    ...(org.contacts?.phone && { "telephone": org.contacts.phone }),
    ...(org.contacts?.email && { "email": org.contacts.email }),
    ...(org.contacts?.web && { "url": org.contacts.web }),
    // Agregované hodnocení
    ...(org.reviews_count > 0 && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": org.avg_rating.toFixed(1),
        "reviewCount": org.reviews_count,
        "bestRating": 5,
        "worstRating": 1,
      }
    }),
    // Recenze (max 5)
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
        },
        "reviewBody": r.body,
        "datePublished": r.created_at.toISOString().split('T')[0],
      }))
    }),
    // URL profilu
    "sameAs": `${baseUrl}/organizace/${org.slug}`,
  };
}
