/**
 * Locale utilities for EU app
 */

import { headers } from 'next/headers';

export type Locale = 'en' | 'cs' | 'de' | 'es' | 'fr' | 'nl' | 'en-GB';

/**
 * Get current locale from middleware headers
 */
export async function getLocale(): Promise<Locale> {
  const headersList = await headers();
  const locale = headersList.get('x-locale') || 'en';
  return locale as Locale;
}

/**
 * Check if current path is a /{lang}/... path
 */
export async function isLangPath(): Promise<boolean> {
  const headersList = await headers();
  const isLang = headersList.get('x-is-lang-path');
  return isLang === 'true';
}

/**
 * Get current domain from middleware headers
 */
export async function getDomain(): Promise<string> {
  const headersList = await headers();
  return headersList.get('x-domain') || '';
}

/**
 * Check if current domain is a ccTLD (country-code top-level domain)
 * ccTLD domains don't use /lang/ prefixes in URLs
 */
export async function isCcTLDDomain(): Promise<boolean> {
  const domain = await getDomain();
  const ccTLDs = ['.cz', '.de', '.fr', '.nl', '.co.uk', '.es'];
  return ccTLDs.some(tld => domain.endsWith(tld));
}

/**
 * Get locale metadata (for display)
 */
export function getLocaleMetadata(locale: Locale) {
  const metadata: Record<Locale, { name: string; nativeName: string; code: string }> = {
    'en': { name: 'English', nativeName: 'English', code: 'en' },
    'cs': { name: 'Czech', nativeName: 'Čeština', code: 'cs-CZ' },
    'de': { name: 'German', nativeName: 'Deutsch', code: 'de-DE' },
    'es': { name: 'Spanish', nativeName: 'Español', code: 'es-ES' },
    'fr': { name: 'French', nativeName: 'Français', code: 'fr-FR' },
    'nl': { name: 'Dutch', nativeName: 'Nederlands', code: 'nl-NL' },
    'en-GB': { name: 'English (UK)', nativeName: 'English (UK)', code: 'en-GB' }
  };
  
  return metadata[locale];
}
