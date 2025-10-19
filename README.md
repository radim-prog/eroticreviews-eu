# EroticReviews.EU - Version 4.0

**Status:** 🔴 OFFLINE - Weby vypnuty kvůli nedokončenému vývoji
**Last Updated:** 2025-10-19 20:05 UTC

> ⚠️ **IMPORTANT:** Weby eroticreviews.eu a eroticreviews.cz jsou momentálně OFFLINE (502 Bad Gateway).
> Aplikace byla vypnuta, aby se veřejnosti nezobrazovala nedokončená verze.
> Pro instrukce jak zapnout/vypnout viz [SHUTDOWN.md](./SHUTDOWN.md)

Multi-domain, multi-locale adult services directory with Firebase backend, admin panel, reviews, and reputation system.

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

## ✨ Features (PHASE 1 - COMPLETE)

### Core Functionality
- ✅ **7 Categories** (4 Profile types + 3 Organization types)
- ✅ **Multi-language** support (6 languages: en, cs, de, es, fr, nl)
- ✅ **Firebase Integration** (Auth, Firestore, Storage)
- ✅ **Admin Panel** with full CRUD operations
- ✅ **Review System** with reputation & quarantine
- ✅ **Like System** (Favorite profiles)
- ✅ **Instagram/Telegram Style** profile design

### Profile Types
1. **Escorts** (Holky na sex)
2. **Erotic Massage** (Erotické masáže)
3. **BDSM Dominatrix** (Dominy)
4. **Digital Models** (OnlyFans, Cam girls)

### Organization Types
1. **Escort Agencies** (Escort agentury)
2. **Massage Salons** (Masážní salony)
3. **BDSM Studios** (BDSM studia)

### 🚨 Content Policy
**CRITICAL:** No prices allowed anywhere on the website
- Automatic detection in reviews → quarantine
- Admin moderation system
- All pricing data removed from profiles (34 profiles cleaned)

## ✅ Technical Implementation

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
- 2 countries, 13 cities
- 7 categories (4 profiles + 3 organizations)
- 34 multilingual profiles (✅ pricing removed)
- 29 services across 4 categories
- Organizations template
- Reviews template
- Users template

### 3. Firebase Backend

**Authentication:**
- Google Sign-in integration
- Session cookies (5-day expiry)
- Admin role verification

**Firestore Database:**
- `profiles` - 34 profiles, no pricing
- `organizations` - Templates with banner tier system
- `reviews` - With quarantine & content policy check
- `users` - Handle system + liked_profiles
- `categories` - 7 categories with i18n
- `services` - 29 services with i18n

**Security Rules:**
- Public read for profiles, organizations, reviews
- Admin-only write for content
- User isolation for likes
- Review moderation workflow

**Storage:**
- Profile photos (up to 25MB)
- Organization photos
- Review photos
- User avatars
- Validated file types & sizes

### 4. Admin Panel

**Pages:**
- `/admin` - Dashboard with stats & quick actions
- `/admin/profily` - Profiles CRUD (listing, create, edit)
- `/admin/organizace` - Organizations CRUD with banner tiers
- `/admin/recenze` - Review moderation with quarantine filter
- `/admin/uzivatele` - User management

**Features:**
- Real-time stats from Firestore
- Quarantine monitoring for reviews
- Content Policy enforcement
- Multi-language profile creation
- Verification status management

### 5. Like System

**Components:**
- `LikeButton.tsx` - Reusable button (3 sizes)
- `useLikes.ts` - React hook with Firebase sync
- `/oblibene` - Favorites page

**Features:**
- ❤️ One-click like/unlike
- Real-time Firestore sync
- Auto-redirect to login if not authenticated
- Optimistic UI updates
- Grid layout for favorites

### 6. Profile Redesign (Instagram/Telegram Style)

**ProfilePage.tsx:**
- 🔵 Circular profile photo with gradient border
- ✅ Verified badge (blue checkmark)
- 📊 Stats row (Photos, Reviews, Rating)
- 🏷️ Info pills (categories, attributes)
- 📱 Tabs (About, Gallery, Reviews)
- 📸 Gallery grid (3:4 portrait aspect ratio)
- ⭐ Feed-style review cards
- 💬 Telegram-style action buttons

### 7. /apps/eu (eroticreviews.eu)

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

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Firebase account
- npm or yarn

### 1. Install Dependencies

```bash
cd apps/eu
npm install
```

### 2. Firebase Setup

1. Create Firebase project at https://console.firebase.google.com
2. Enable Authentication (Google provider)
3. Enable Firestore Database
4. Enable Storage
5. Copy credentials

### 3. Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

ADMIN_EMAILS=admin@example.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Deploy Firebase Rules

```bash
firebase deploy --only firestore:rules
firebase deploy --only storage:rules
firebase deploy --only firestore:indexes
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6. Access Admin Panel

1. Navigate to `/admin`
2. Sign in with Google (must be in `ADMIN_EMAILS`)
3. Access dashboard, CRUD, and moderation

## 📦 API Endpoints

- `/api/admin/profiles` - GET, POST (admin only)
- `/api/likes` - GET, POST, DELETE (authenticated users)
- `/api/auth/session` - POST (create session)
- `/api/auth/logout` - GET (destroy session)

## 📋 PHASE 2 - Next Steps

### Priorita 1 - SEO & Performance
1. ✅ ~~Data models~~ DONE
2. ✅ ~~Firebase config~~ DONE
3. ✅ ~~Admin panel~~ DONE
4. ✅ ~~Like system~~ DONE
5. ✅ ~~Profile redesign~~ DONE
6. 🔜 Schema.org implementation (Person, LocalBusiness, Review)
7. 🔜 Hreflang groups pro multi-domain
8. 🔜 Sitemap generation
9. 🔜 Performance optimization

### Priorita 2 - Features
10. 🔜 Search & Filters (services, location, category)
11. 🔜 Banner reward system automation
12. 🔜 Review photos upload
13. 🔜 Business responses to reviews
14. 🔜 /apps/cz (Czech ccTLD)
15. 🔜 Other ccTLD apps (DE, ES, FR, NL, UK)

### Priorita 3 - Polish
16. 🔜 Email notifications
17. 🔜 User profile pages
18. 🔜 Activity tracking & quarantine expiry
19. 🔜 Language/Region switcher component
20. 🔜 Tests (unit + e2e)

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
- **[SHUTDOWN.md](./SHUTDOWN.md)** - Jak vypnout/zapnout weby (VPS + lokální)
- **[VPS-SETUP.md](./VPS-SETUP.md)** - VPS setup instrukce
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment guide (Vercel, VPS)
- **[PROGRESS.md](./PROGRESS.md)** - Detailní progress report

## 🔴 Aktuální stav projektu

**OFFLINE (2025-10-19):**
- ✅ PHASE 1 dokončena (všechny hlavní funkce)
- 🔴 Weby vypnuty kvůli nedokončenému vývoji
- 📝 Potřeba dokončit před dalším spuštěním:
  - Firebase napojení
  - Admin panel funkční
  - Review systém testovaný
  - Content policy implementována

**Jak zapnout weby:**
```bash
# Viz detaily v SHUTDOWN.md
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98
cd /root/eroticreviews-eu/apps/eu
npm run build
pm2 start "npm start" --name er-eu
```

## 📝 License

Private - EroticReviews.EU © 2025
