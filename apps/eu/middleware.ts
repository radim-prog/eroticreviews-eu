/**
 * i18n Middleware for Multi-Domain EroticReviews 4.0
 * Based on ER 4.0 spec Chapter 4
 *
 * Rules:
 * - .eu domain: / (no prefix) = EN, /{lang}/* = CS, DE, ES, FR, NL, EN-GB
 * - ccTLD domains: automatic locale based on domain (.cz = CS, .de = DE, etc.)
 * - Indexation controlled by ccTLD existence
 */

import { NextRequest, NextResponse } from 'next/server';

export type Locale = 'en' | 'cs' | 'de' | 'es' | 'fr' | 'nl' | 'en-GB';

const SUPPORTED_LOCALES: Locale[] = ['en', 'cs', 'de', 'es', 'fr', 'nl', 'en-GB'];
const DEFAULT_LOCALE: Locale = 'en';

// Map URL locale paths to locale codes
const LOCALE_PATH_MAP: Record<string, Locale> = {
  'en': 'en',
  'cs': 'cs',
  'de': 'de',
  'es': 'es',
  'fr': 'fr',
  'nl': 'nl',
  'en-gb': 'en-GB'
};

// Map ccTLD domains to their locale
const DOMAIN_LOCALE_MAP: Record<string, Locale> = {
  'eroticreviews.cz': 'cs',
  'www.eroticreviews.cz': 'cs',
  'eroticreviews.de': 'de',
  'www.eroticreviews.de': 'de',
  'eroticreviews.es': 'es',
  'www.eroticreviews.es': 'es',
  'eroticreviews.fr': 'fr',
  'www.eroticreviews.fr': 'fr',
  'eroticreviews.nl': 'nl',
  'www.eroticreviews.nl': 'nl',
  'eroticreviews.co.uk': 'en-GB',
  'www.eroticreviews.co.uk': 'en-GB',
};

/**
 * Extract locale from pathname
 */
function getLocaleFromPathname(pathname: string): { locale: Locale; isLangPath: boolean; pathWithoutLocale: string } {
  // Check if path starts with /{lang}/
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length === 0) {
    return { locale: DEFAULT_LOCALE, isLangPath: false, pathWithoutLocale: '/' };
  }
  
  const firstSegment = segments[0].toLowerCase();
  const mappedLocale = LOCALE_PATH_MAP[firstSegment];
  
  if (mappedLocale) {
    // This is a /{lang}/... path
    const pathWithoutLocale = '/' + segments.slice(1).join('/');
    return { locale: mappedLocale, isLangPath: true, pathWithoutLocale };
  }
  
  // Default EN (no prefix)
  return { locale: DEFAULT_LOCALE, isLangPath: false, pathWithoutLocale: pathname };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('/favicon.ico') ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2|ttf|eot)$/)
  ) {
    return NextResponse.next();
  }

  // Get hostname (e.g., eroticreviews.cz, eroticreviews.eu, localhost)
  const hostname = request.headers.get('host') || '';

  // Check if this is a ccTLD domain with fixed locale
  const domainLocale = DOMAIN_LOCALE_MAP[hostname];

  let locale: Locale;
  let isLangPath: boolean;
  let pathWithoutLocale: string;

  if (domainLocale) {
    // ccTLD domain - use fixed locale, ignore URL prefixes
    locale = domainLocale;
    isLangPath = false; // ccTLD domains don't use /lang/ prefixes
    pathWithoutLocale = pathname;
  } else {
    // .eu domain or localhost - use URL-based locale detection
    const result = getLocaleFromPathname(pathname);
    locale = result.locale;
    isLangPath = result.isLangPath;
    pathWithoutLocale = result.pathWithoutLocale;
  }

  // Store locale in headers for consumption by pages
  const response = NextResponse.next();
  response.headers.set('x-locale', locale);
  response.headers.set('x-is-lang-path', isLangPath.toString());
  response.headers.set('x-domain', hostname);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
