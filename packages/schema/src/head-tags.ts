/**
 * Head Tag Builder for ER 4.0
 * Based on specification Chapter 14
 *
 * Generates:
 * - Canonical URLs
 * - Hreflang tags (symmetric groups)
 * - Robots meta tags
 * - OG/Twitter meta tags
 */

import type { Locale } from './slug';

export type Domain = 'eu' | 'cz' | 'de' | 'es' | 'fr' | 'nl' | 'uk';
export type { Locale };

export interface HrefLangEquivalent {
  locale: Locale;
  url: string;
}

export interface SEOConfig {
  indexable: boolean;
  canonical_target: 'self' | 'ccTLD';
  meta_title?: Record<string, string>; // i18n
  meta_description?: Record<string, string>; // i18n
  og_title?: Record<string, string>;
  og_description?: Record<string, string>;
  og_image?: string;
}

export interface HeadTagBuilderInput {
  domain: Domain;
  locale: Locale;
  path: string;
  equivalents: HrefLangEquivalent[];
  hasCcTLDForLocale: (locale: Locale) => boolean;
  isEuLangPath: boolean; // true if this is .eu/{lang}/...
  seo: SEOConfig;
}

export interface HeadTags {
  canonical: string;
  hreflang: Array<{ hreflang: string; href: string }>;
  robots: string;
  title: string;
  description: string;
  ogTags: Array<{ property: string; content: string }>;
  twitterTags: Array<{ name: string; content: string }>;
}

/**
 * Domain to base URL mapping
 */
const DOMAIN_BASE_URLS: Record<Domain, string> = {
  'eu': 'https://eroticreviews.eu',
  'cz': 'https://eroticreviews.cz',
  'de': 'https://eroticreviews.de',
  'es': 'https://eroticreviews.es',
  'fr': 'https://eroticreviews.fr',
  'nl': 'https://eroticreviews.nl',
  'uk': 'https://eroticreviews.uk'
};

/**
 * Locale to hreflang code mapping
 */
const LOCALE_TO_HREFLANG: Record<Locale, string> = {
  'en': 'en',
  'cs-CZ': 'cs-CZ',
  'de-DE': 'de-DE',
  'es-ES': 'es-ES',
  'fr-FR': 'fr-FR',
  'nl-NL': 'nl-NL',
  'en-GB': 'en-GB'
};

/**
 * Build canonical URL
 */
function buildCanonicalUrl(input: HeadTagBuilderInput): string {
  const baseUrl = DOMAIN_BASE_URLS[input.domain];
  
  // If isEuLangPath and ccTLD exists, canonical points to ccTLD equivalent
  if (input.isEuLangPath && input.seo.canonical_target === 'ccTLD') {
    const equivalent = input.equivalents.find(eq => eq.locale === input.locale);
    if (equivalent) {
      return equivalent.url;
    }
  }
  
  // Otherwise canonical is self
  return `${baseUrl}${input.path}`;
}

/**
 * Build hreflang tags (symmetric groups)
 * 
 * Rules:
 * - Always include .eu/en (with hreflang="en" + hreflang="x-default")
 * - Include all existing ccTLD equivalents
 * - Include .eu/{lang} ONLY if ccTLD doesn't exist for that locale
 */
function buildHrefLangTags(input: HeadTagBuilderInput): Array<{ hreflang: string; href: string }> {
  const tags: Array<{ hreflang: string; href: string }> = [];
  
  // Always add .eu/en as default
  const euEnEquivalent = input.equivalents.find(eq => eq.locale === 'en');
  if (euEnEquivalent) {
    tags.push({ hreflang: 'en', href: euEnEquivalent.url });
    tags.push({ hreflang: 'x-default', href: euEnEquivalent.url });
  }
  
  // Add all ccTLD equivalents
  const ccTLDLocales: Locale[] = ['cs-CZ', 'de-DE', 'es-ES', 'fr-FR', 'nl-NL', 'en-GB'];
  
  for (const locale of ccTLDLocales) {
    const equivalent = input.equivalents.find(eq => eq.locale === locale);
    
    if (equivalent) {
      // ccTLD exists for this locale
      const hreflangCode = LOCALE_TO_HREFLANG[locale];
      tags.push({ hreflang: hreflangCode, href: equivalent.url });
    } else if (!input.hasCcTLDForLocale(locale)) {
      // ccTLD doesn't exist, check for .eu/{lang} equivalent
      const euLangEquivalent = input.equivalents.find(eq => eq.locale === locale);
      if (euLangEquivalent) {
        const hreflangCode = LOCALE_TO_HREFLANG[locale];
        tags.push({ hreflang: hreflangCode, href: euLangEquivalent.url });
      }
    }
  }
  
  return tags;
}

/**
 * Build robots meta tag
 * 
 * Rules:
 * - ccTLD: always "index,follow"
 * - .eu/en: always "index,follow"
 * - .eu/{lang}: "noindex,follow" if ccTLD exists, "index,follow" if not
 */
function buildRobotsTag(input: HeadTagBuilderInput): string {
  // ccTLD domains are always indexable
  if (input.domain !== 'eu') {
    return 'index,follow';
  }
  
  // .eu/en is always indexable
  if (input.locale === 'en' && !input.isEuLangPath) {
    return 'index,follow';
  }
  
  // .eu/{lang} - check if ccTLD exists
  if (input.isEuLangPath) {
    if (input.hasCcTLDForLocale(input.locale)) {
      return 'noindex,follow';
    } else {
      return input.seo.indexable ? 'index,follow' : 'noindex,follow';
    }
  }
  
  return input.seo.indexable ? 'index,follow' : 'noindex,follow';
}

/**
 * Get localized text from i18n object
 */
function getLocalizedText(i18nObj: Record<string, string> | undefined, locale: Locale, fallback: string): string {
  if (!i18nObj) return fallback;
  return i18nObj[locale] || i18nObj['en'] || fallback;
}

/**
 * Build Open Graph meta tags
 */
function buildOGTags(input: HeadTagBuilderInput, title: string, description: string): Array<{ property: string; content: string }> {
  const baseUrl = DOMAIN_BASE_URLS[input.domain];
  const ogTitle = getLocalizedText(input.seo.og_title, input.locale, title);
  const ogDescription = getLocalizedText(input.seo.og_description, input.locale, description);
  const ogImage = input.seo.og_image || `${baseUrl}/og-image.jpg`;
  
  return [
    { property: 'og:title', content: ogTitle },
    { property: 'og:description', content: ogDescription },
    { property: 'og:url', content: buildCanonicalUrl(input) },
    { property: 'og:image', content: ogImage },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: input.locale.replace('-', '_') }
  ];
}

/**
 * Build Twitter Card meta tags
 */
function buildTwitterTags(input: HeadTagBuilderInput, title: string, description: string): Array<{ name: string; content: string }> {
  const ogImage = input.seo.og_image || `${DOMAIN_BASE_URLS[input.domain]}/og-image.jpg`;
  
  return [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: getLocalizedText(input.seo.og_title, input.locale, title) },
    { name: 'twitter:description', content: getLocalizedText(input.seo.og_description, input.locale, description) },
    { name: 'twitter:image', content: ogImage }
  ];
}

/**
 * Main function: Build all head tags
 */
export function buildHeadTags(input: HeadTagBuilderInput): HeadTags {
  const canonical = buildCanonicalUrl(input);
  const hreflang = buildHrefLangTags(input);
  const robots = buildRobotsTag(input);
  
  const title = getLocalizedText(input.seo.meta_title, input.locale, 'EroticReviews.EU');
  const description = getLocalizedText(input.seo.meta_description, input.locale, 'Adult services directory');
  
  const ogTags = buildOGTags(input, title, description);
  const twitterTags = buildTwitterTags(input, title, description);
  
  return {
    canonical,
    hreflang,
    robots,
    title,
    description,
    ogTags,
    twitterTags
  };
}

export default buildHeadTags;
