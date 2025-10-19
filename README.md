# EroticReviews.EU - Version 4.0

Multi-domain, multi-locale adult services directory according to ER 4.0 specification.

## 🌍 Architecture

### Domains
- **eroticreviews.eu** (mothership) - EN default, i18n subpaths (/{lang})
- **eroticreviews.cz** - Czech (cs-CZ)
- **eroticreviews.de** - German (de-DE)
- **eroticreviews.es** - Spanish (es-ES)
- **eroticreviews.fr** - French (fr-FR)
- **eroticreviews.nl** - Dutch (nl-NL)
- **eroticreviews.uk** - English GB (en-GB)

### Monorepo Structure

```
eroticreviews-eu/
├── apps/
│   ├── eu/           ✅ Next.js 15 + i18n middleware
│   ├── cz/           🔜 Next.js 15 (cs-CZ)
│   ├── de/           🔜 Next.js 15 (de-DE)
│   ├── es/           🔜 Next.js 15 (es-ES)
│   ├── fr/           🔜 Next.js 15 (fr-FR)
│   ├── nl/           🔜 Next.js 15 (nl-NL)
│   └── uk/           🔜 Next.js 15 (en-GB)
│
├── packages/
│   ├── schema/       ✅ SEO utilities
│   │   ├── src/
│   │   │   ├── slug.ts           (Per-locale slug generation)
│   │   │   ├── head-tags.ts      (Canonical, hreflang, robots, OG)
│   │   │   └── index.ts
│   │   └── data/
│   │       ├── countries.json    (2 countries in 6 languages)
│   │       ├── cities.json       (3 cities in 6 languages)
│   │       ├── categories.json   (3 categories in 6 languages)
│   │       └── profiles.json     (6 profiles in 6 languages)
│   │
│   ├── ui/           🔜 Shared UI components (Tailwind + shadcn/ui)
│   └── api/          🔜 Headless CMS SDK client
│
└── package.json      (npm workspaces)
```

## ✅ Implemented Features

### 1. Monorepo Setup
- npm workspaces
- Shared packages architecture
- TypeScript strict mode

### 2. @eroticreviews/schema Package

**Slug Generation** (`slug.ts`)
- Per-locale transliteration (CS, DE, ES, FR, NL, EN)
- SEO-safe formatting ([a-z0-9-])
- Stop words removal (optional)
- Banned words/prefixes filter
- GlobalIDshort generation (base36)
- Profile URL building: `/slug-globalIDshort`

**HeadTagBuilder** (`head-tags.ts`)
- Canonical URL logic
  - ccTLD: always self
  - .eu/en: always self
  - .eu/{lang}: canonical → ccTLD if exists, else self
- Hreflang symmetric groups
  - Always: .eu/en (en + x-default)
  - All existing ccTLD equivalents
  - .eu/{lang} only if ccTLD doesn't exist
- Robots meta
  - ccTLD: always index,follow
  - .eu/en: always index,follow
  - .eu/{lang}: noindex,follow if ccTLD exists
- Open Graph + Twitter Cards (i18n)

**Seed Data** (6 languages: en, cs, de, es, fr, nl)
- 2 countries (Czech Republic, Germany)
- 3 cities (Prague, Brno, Berlin)
- 3 categories (Escorts, Massage, BDSM)
- 6 multilingual profiles with:
  - globalID (unique across domains)
  - slug_current (per locale)
  - title & description (6 languages)
  - offers (per ccTLD - CZK/EUR)
  - visibility (per domain)
  - verification status

### 3. /apps/eu (eroticreviews.eu)

**Tech Stack**
- Next.js 15 with App Router + Turbopack
- TypeScript strict mode
- Tailwind CSS
- @eroticreviews/schema integration

**i18n Middleware** (`middleware.ts`)
- URL routing:
  - `/` = EN (default, no prefix)
  - `/{lang}/*` = CS, DE, ES, FR, NL, EN-GB
- Locale detection from pathname
- Headers injection (x-locale, x-is-lang-path)

**Pages**
- ✅ Homepage (multilingual)
  - Browse by City
  - Browse by Category
  - Fully localized UI
- 🔜 /city/[slug] (city detail page)
- 🔜 /profile/[slug] (profile page with Schema.org)

**Locale-first SEO**
- Every URL has one language
- All content (UI, categories, descriptions) fully localized
- No language mixing on single page

## 🚀 Running the Project

### Install Dependencies

```bash
# Root (install all workspaces)
npm install

# Or individual workspace
cd apps/eu && npm install
```

### Development

```bash
# Run EU app
npm run dev:eu

# Or from apps/eu
cd apps/eu && npm run dev
```

### Build

```bash
# Build all apps
npm run build

# Build EU app only
npm run build:eu
```

## 📋 Next Steps

1. ✅ Monorepo structure
2. ✅ /packages/schema (slug + head-tags + seed data)
3. ✅ /apps/eu basic setup + i18n middleware
4. 🔜 /apps/cz (Czech ccTLD)
5. 🔜 City detail page (/city/[slug])
6. 🔜 Profile detail page (/profile/[slug])
7. 🔜 Language/Region switcher component
8. 🔜 Tests (slug transliteration, head-tags)
9. 🔜 Other ccTLD apps (DE, ES, FR, NL, UK)
10. 🔜 /packages/ui (shared components)
11. 🔜 /packages/api (headless CMS client)

## 📖 Specification

Based on **ER 4.0 - Complete Specification** (WebovaArchitektura.pdf)
- Multi-domain architecture (1 EU + 6 ccTLD)
- Multi-locale content (6 languages)
- Locale-first SEO approach
- Hreflang management
- Slug rules per locale
- Username & Identity system
- Monetization (FREE/PREMIUM/ELITE)
- Review moderation system

## 🔗 Key Concepts

### Locale-first SEO
- Each URL = one language
- Zero language mixing
- Per-locale categories, tags, slugs
- Maximize KW coverage per language/region

### GlobalID System
- Profile.globalID = immutable across domains
- Deduplication across ccTLDs
- LocalizedSlugs can differ per language
- URL format: `/profile/{slug}-{globalIDshort}`

### Hreflang Groups (Symmetric)
Always includes:
1. .eu/en (hreflang="en" + "x-default")
2. All existing ccTLD URLs
3. .eu/{lang} only when ccTLD doesn't exist

### Visibility Control
Per entity (Country/City/Category/Profile):
- visibility_eu, visibility_cz, visibility_de, etc.
- Controls which domain shows which content
- Flexible multi-market strategy

## 📚 Documentation

- `/packages/schema/README.md` - Schema package docs
- `WebovaArchitektura.pdf` - Full ER 4.0 spec

## 📝 License

Private - EroticReviews.EU © 2025
