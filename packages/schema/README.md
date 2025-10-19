# @eroticreviews/schema

Core SEO utilities for ER 4.0 multi-domain, multi-locale architecture.

## Features

- **Slug Generation**: Per-locale transliteration, SEO-safe formatting
- **Head Tag Builder**: Canonical URLs, hreflang tags, robots meta, OG/Twitter tags
- **Locale-first**: Everything fully localized per domain/language

## Usage

### Slug Generation

```typescript
import { generateSlug, buildProfileUrl } from '@eroticreviews/schema';

// Generate slug from title
const slug = generateSlug('Karolína - Luxusní Escort Praha', {
  locale: 'cs-CZ',
  removeStopWords: true,
  maxLength: 60
});
// Result: "karolina-luxusni-escort-praha"

// Build profile URL with globalIDshort
const url = buildProfileUrl('Karolína - Luxusní Escort Praha', 'global-id-123', 'cs-CZ');
// Result: "/karolina-luxusni-escort-praha-4x7k9m2a"
```

### Head Tags

```typescript
import { buildHeadTags } from '@eroticreviews/schema';

const headTags = buildHeadTags({
  domain: 'cz',
  locale: 'cs-CZ',
  path: '/mesto/praha',
  equivalents: [
    { locale: 'en', url: 'https://eroticreviews.eu/city/prague' },
    { locale: 'cs-CZ', url: 'https://eroticreviews.cz/mesto/praha' },
    { locale: 'de-DE', url: 'https://eroticreviews.de/stadt/prag' }
  ],
  hasCcTLDForLocale: (locale) => ['cs-CZ', 'de-DE'].includes(locale),
  isEuLangPath: false,
  seo: {
    indexable: true,
    canonical_target: 'self',
    meta_title: { 'cs-CZ': 'Escort Praha | EroticReviews.cz' },
    meta_description: { 'cs-CZ': 'Nejlepší escort služby v Praze...' }
  }
});

// Results:
// headTags.canonical = "https://eroticreviews.cz/mesto/praha"
// headTags.hreflang = [
//   { hreflang: 'en', href: 'https://eroticreviews.eu/city/prague' },
//   { hreflang: 'x-default', href: 'https://eroticreviews.eu/city/prague' },
//   { hreflang: 'cs-CZ', href: 'https://eroticreviews.cz/mesto/praha' },
//   { hreflang: 'de-DE', href: 'https://eroticreviews.de/stadt/prag' }
// ]
// headTags.robots = "index,follow"
```

## Per-Locale Transliteration

Supports:
- **Czech (cs-CZ)**: á→a, č→c, ř→r, š→s, ž→z, etc.
- **German (de-DE)**: ä→ae, ö→oe, ü→ue, ß→ss
- **Spanish (es-ES)**: á→a, ñ→n, etc.
- **French (fr-FR)**: é→e, è→e, ç→c, œ→oe, etc.
- **Dutch (nl-NL)**: Dutch diacritics
- **English (en, en-GB)**: No transliteration needed

## SEO Rules

### Hreflang Groups (Symmetric)

Always contains:
1. `.eu/en` (with hreflang="en" + "x-default")
2. All existing ccTLD equivalents
3. `.eu/{lang}` ONLY if ccTLD doesn't exist

### Canonical URLs

- **ccTLD**: Always canonical self
- **.eu/en**: Canonical self
- **.eu/{lang}**: 
  - If ccTLD exists → canonical points to ccTLD
  - If ccTLD doesn't exist → canonical self

### Robots Meta

- **ccTLD**: Always `index,follow`
- **.eu/en**: Always `index,follow`
- **.eu/{lang}**:
  - If ccTLD exists → `noindex,follow`
  - If ccTLD doesn't exist → `index,follow` (if seo.indexable=true)

## License

Private - EroticReviews.EU
