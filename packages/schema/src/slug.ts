/**
 * Slug Rules for ER 4.0 (per locale, SEO-safe, collision-free)
 * Based on specification Chapter 12
 */

export type Locale = 'en' | 'cs' | 'de' | 'es' | 'fr' | 'nl' | 'en-GB';

/**
 * Per-locale transliteration maps
 */
const TRANSLITERATION_MAPS: Record<Locale, Record<string, string>> = {
  'cs': {
    'á': 'a', 'č': 'c', 'ď': 'd', 'é': 'e', 'ě': 'e', 'í': 'i',
    'ň': 'n', 'ó': 'o', 'ř': 'r', 'š': 's', 'ť': 't', 'ú': 'u',
    'ů': 'u', 'ý': 'y', 'ž': 'z'
  },
  'de': {
    'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss'
  },
  'es': {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
    'ñ': 'n', 'ü': 'u'
  },
  'fr': {
    'à': 'a', 'â': 'a', 'æ': 'ae', 'ç': 'c', 'é': 'e', 
    'è': 'e', 'ê': 'e', 'ë': 'e', 'î': 'i', 'ï': 'i',
    'ô': 'o', 'œ': 'oe', 'ù': 'u', 'û': 'u', 'ü': 'u', 'ÿ': 'y'
  },
  'nl': {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
    'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u'
  },
  'en': {},
  'en-GB': {}
};

/**
 * Common transliterations (all locales)
 */
const COMMON_TRANSLITERATIONS: Record<string, string> = {
  '&': 'and',
  '+': 'plus',
  '@': 'at',
  '%': 'percent',
  '€': 'eur',
  '$': 'dollar',
  '£': 'pound'
};

/**
 * Per-locale stop words (optionally removed from slugs)
 */
const STOP_WORDS: Record<Locale, string[]> = {
  'cs': ['a', 'v', 'na', 'po', 'do', 'pro', 'ze', 's', 'k', 'o'],
  'de': ['der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'und', 'in', 'von', 'zu', 'mit'],
  'es': ['el', 'la', 'los', 'las', 'un', 'una', 'de', 'del', 'en', 'y', 'con', 'por'],
  'fr': ['le', 'la', 'les', 'un', 'une', 'de', 'du', 'des', 'et', 'en', 'dans', 'avec'],
  'nl': ['de', 'het', 'een', 'van', 'in', 'op', 'met', 'voor', 'en', 'aan'],
  'en': ['the', 'a', 'an', 'in', 'on', 'at', 'of', 'and', 'or', 'to'],
  'en-GB': ['the', 'a', 'an', 'in', 'on', 'at', 'of', 'and', 'or', 'to']
};

/**
 * Reserved/banned prefixes
 */
const BANNED_PREFIXES = [
  'eroticreviews-',
  'admin-',
  'api-',
  'www-',
  'test-',
  'demo-'
];

/**
 * Vulgar/reserved words filter (basic list, expand as needed)
 */
const BANNED_WORDS = new Set([
  'admin',
  'api',
  'auth',
  'login',
  'logout',
  'register',
  'profile',
  'profiles',
  'user',
  'users'
]);

interface SlugOptions {
  locale: Locale;
  removeStopWords?: boolean;
  maxLength?: number;
}

/**
 * Normalize Unicode to NFKC form
 */
function normalizeUnicode(str: string): string {
  return str.normalize('NFKC');
}

/**
 * Transliterate string based on locale
 */
function transliterate(str: string, locale: Locale): string {
  const localeMap = TRANSLITERATION_MAPS[locale] || {};
  
  // First apply locale-specific transliterations
  let result = str;
  for (const [char, replacement] of Object.entries(localeMap)) {
    const regex = new RegExp(char, 'gi');
    result = result.replace(regex, replacement);
  }
  
  // Then apply common transliterations
  for (const [char, replacement] of Object.entries(COMMON_TRANSLITERATIONS)) {
    const regex = new RegExp('\\' + char, 'g');
    result = result.replace(regex, replacement);
  }
  
  return result;
}

/**
 * Remove stop words based on locale
 */
function removeStopWords(words: string[], locale: Locale): string[] {
  const stopWords = new Set(STOP_WORDS[locale] || []);
  return words.filter(word => !stopWords.has(word));
}

/**
 * Generate slug from input string
 */
export function generateSlug(input: string, options: SlugOptions): string {
  const { locale, removeStopWords: shouldRemoveStopWords = false, maxLength = 60 } = options;
  
  // 1. Trim and normalize
  let slug = input.trim();
  slug = normalizeUnicode(slug);
  
  // 2. Lowercase
  slug = slug.toLowerCase();
  
  // 3. Transliterate
  slug = transliterate(slug, locale);
  
  // 4. Replace non-alphanumeric with hyphens, keep only [a-z0-9-]
  slug = slug.replace(/[^a-z0-9-]+/g, '-');
  
  // 5. Replace multiple hyphens with single hyphen
  slug = slug.replace(/-+/g, '-');
  
  // 6. Remove hyphens from edges
  slug = slug.replace(/^-+|-+$/g, '');
  
  // 7. Optionally remove stop words
  if (shouldRemoveStopWords) {
    const words = slug.split('-');
    const filtered = removeStopWords(words, locale);
    slug = filtered.join('-');
  }
  
  // 8. Truncate to max length (cut at word boundary)
  if (slug.length > maxLength) {
    const truncated = slug.substring(0, maxLength);
    const lastHyphen = truncated.lastIndexOf('-');
    slug = lastHyphen > 0 ? truncated.substring(0, lastHyphen) : truncated;
  }
  
  // 9. Check for banned prefixes
  for (const banned of BANNED_PREFIXES) {
    if (slug.startsWith(banned)) {
      throw new Error(`Slug cannot start with banned prefix: ${banned}`);
    }
  }
  
  // 10. Check for banned words
  if (BANNED_WORDS.has(slug)) {
    throw new Error(`Slug contains banned word: ${slug}`);
  }
  
  return slug;
}

/**
 * Generate short ID from full ID (for globalIDshort)
 * Uses base36 encoding for URL-safe short IDs
 */
export function generateShortId(fullId: string, length: number = 8): string {
  // Simple hash function to create deterministic short ID
  let hash = 0;
  for (let i = 0; i < fullId.length; i++) {
    const char = fullId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  // Convert to base36 and pad to length
  const shortId = Math.abs(hash).toString(36).substring(0, length);
  return shortId.padEnd(length, '0');
}

/**
 * Build profile URL with slug and globalIDshort
 */
export function buildProfileUrl(title: string, globalId: string, locale: Locale): string {
  const slug = generateSlug(title, { locale });
  const shortId = generateShortId(globalId);
  return `/${slug}-${shortId}`;
}

/**
 * Parse profile slug and extract globalIDshort
 */
export function parseProfileSlug(slug: string): { slug: string; shortId: string } | null {
  const match = slug.match(/^(.+)-([a-z0-9]{8,10})$/);
  if (!match) return null;
  
  return {
    slug: match[1],
    shortId: match[2]
  };
}

/**
 * Validate slug format
 */
export function isValidSlug(slug: string): boolean {
  // Must be [a-z0-9-], no leading/trailing hyphens
  const regex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  return regex.test(slug);
}

export default {
  generateSlug,
  generateShortId,
  buildProfileUrl,
  parseProfileSlug,
  isValidSlug
};
