/**
 * i18n Middleware for .EU domain
 * Based on ER 4.0 spec Chapter 4
 * 
 * Rules:
 * - / (no prefix) = EN (default)
 * - /{lang}/* = CS, DE, ES, FR, NL, EN-GB
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
  
  const { locale, isLangPath, pathWithoutLocale } = getLocaleFromPathname(pathname);
  
  // Store locale in headers for consumption by pages
  const response = NextResponse.next();
  response.headers.set('x-locale', locale);
  response.headers.set('x-is-lang-path', isLangPath.toString());
  
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
