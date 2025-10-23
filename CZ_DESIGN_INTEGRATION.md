# CZ Design Integration do EU Projektu

**Datum:** 2025-10-23
**Branch:** design-from-cz
**Autor:** Claude Code

## 🎯 Cíl

Přenést **designově správný CZ projekt** do **technicky pokročilého EU projektu** bez ztráty funkcionality.

- ✅ **CZ** = Správný design, jednoduchá funkcionalita (demo data)
- ✅ **EU** = Firebase backend, Admin panel, Like systém, Review moderation
- 🎯 **Výsledek** = CZ design + EU funkcionalita

## 📦 Co bylo zkopírováno

### 1. Komponenty (`apps/eu/components/`)

**Z CZ zkopírováno:**
- ✅ `AgeVerification.tsx` - 18+ modal s localStorage
- ✅ `CategoryPage.tsx` - Univerzální kategorie page
- ✅ `SessionProvider.tsx` - NextAuth wrapper
- ✅ `StarRating.tsx` - Hvězdičkové hodnocení (size: number | "sm" | "lg")
- ✅ `layout/Header.tsx` - Navigace + 8 kategorií + mobile menu
- ✅ `layout/Footer.tsx` - Footer se linky, legal, copyright

**EU si zachovává:**
- ✅ `LikeButton.tsx` - Oblíbené profily (Firebase sync)
- ✅ `ProfilePage.tsx` - Instagram/Telegram style profil

### 2. Data & Types

**Zkopírováno:**
- ✅ `lib-cz/` - Celá CZ lib složka (demo-data.ts, utils.ts, validation.ts)
- ✅ `types/` - NextAuth type definitions (User, Session, JWT s custom fields)

**EU si zachovává:**
- ✅ `lib/firebase.ts` - Client SDK
- ✅ `lib/firebase-admin.ts` - Server SDK
- ✅ `hooks/useLikes.ts` - Custom hook pro likes

### 3. Pages

**Zkopírováno jako reference (s příponou -cz nebo ve složce -cz):**

- ✅ `app/page-cz.tsx` - CZ homepage
  - Browse by City (Podle města)
  - Browse by Category (Podle kategorie)
  - Hero sekce s gradientem

- ✅ `app/layout-cz.tsx` - CZ root layout
  - Header + Footer + AgeVerification
  - SessionProvider wrapper
  - Google Fonts (Inter)

- ✅ `app/(categories-cz)/` - Všechny CZ kategorie
  - `holky-na-sex/` (Escorts)
  - `eroticke-masaze/` (Erotic Massage)
  - `dominy/` (BDSM Dominatrix)
  - `digitalni-modelky/` (Digital Models)
  - `escort-agentury/` (Escort Agencies)
  - `masazni-salony/` (Massage Salons)
  - `bdsm-studia/` (BDSM Studios)
  - `maserky/` (Masérky - alias pro erotic-massage)

- ✅ `app/profil-cz/[slug]/` - CZ profile detail page
- ✅ `app/organizace-cz/[slug]/` - CZ organization detail page

**EU si zachovává (pokročilé funkce):**
- ✅ `app/admin/` - Admin panel (profily, organizace, recenze)
- ✅ `app/oblibene/` - Favorites page
- ✅ `app/prihlaseni/` - Login page
- ✅ `app/api/` - API routes (likes, auth)

### 4. Styling

**Zkopírováno:**
- ✅ `app/globals.css` - CZ verze (s `.text-balance` utility)

**Tailwind config:** Zachována EU verze (kompatibilní)

## 🔧 Další kroky - Integrace

### FÁZE 1: Příprava ✅ HOTOVO
- [x] Záloha EU projektu → `eroticreviews-eu-backup`
- [x] Nová branch → `design-from-cz`
- [x] Zkopírování všech CZ design souborů

### FÁZE 2: Integrace komponent (TODO)

1. **Update EU root layout** (`apps/eu/app/layout.tsx`)
   - Použít CZ Header + Footer + AgeVerification
   - Zachovat EU SessionProvider
   - Zachovat Firebase imports

2. **Aktualizovat import cesty v CZ komponentách**
   - CategoryPage: `@/lib/demo-data` → `@/lib-cz/demo-data`
   - Header: `@/lib/demo-data` → `@/lib-cz/demo-data`
   - StarRating: zachovat (je univerzální)

3. **Merge CZ homepage do EU**
   - Vzít design z `page-cz.tsx`
   - Přidat EU funkce (Like button, Firebase data loading)

### FÁZE 3: Integrace pages (TODO)

4. **Přejmenovat kategorie složky**
   - `(categories-cz)` → `(categories)`
   - Aktualizovat importy na `@/lib-cz/demo-data`

5. **Merge profil pages**
   - Vzít CZ design z `profil-cz/[slug]/`
   - Přidat EU funkce (Firebase loading, Like button, Real reviews)
   - Zachovat EU `ProfilePage.tsx` komponentu jako základ

6. **Merge organizace pages**
   - Stejný proces jako profil pages

### FÁZE 4: Testování (TODO)

7. **TypeScript check**
   ```bash
   cd ~/Projects/eroticreviews-eu/apps/eu
   npm run type-check
   ```

8. **Build check**
   ```bash
   npm run build
   ```

9. **Dev server test**
   ```bash
   npm run dev
   ```

10. **Funkční testy**
    - Navigace funguje
    - Kategorie pages zobrazují data
    - Profile pages zobrazují data
    - Admin panel funguje
    - Like systém funguje
    - Firebase sync funguje

### FÁZE 5: Cleanup & Commit (TODO)

11. **Odstranit -cz soubory**
    - `page-cz.tsx` → merged do `page.tsx`
    - `layout-cz.tsx` → merged do `layout.tsx`
    - `(categories-cz)/` → přejmenováno na `(categories)/`
    - `profil-cz/`, `organizace-cz/` → merged

12. **Odstranit `lib-cz/`**
    - Po integraci můžeme smazat, nebo nechat jako fallback pro demo data

13. **Final commit**
    ```bash
    git add .
    git commit -m "🎨 Design upgrade: CZ design + EU funkcionalita"
    git push -u origin design-from-cz
    ```

## 📋 Checklist pro integraci

- [ ] EU `layout.tsx` používá CZ Header + Footer
- [ ] EU homepage má CZ design
- [ ] EU kategorie pages mají CZ design
- [ ] EU profil pages mají CZ design + EU funkce
- [ ] TypeScript 0 errors
- [ ] Build úspěšný
- [ ] Dev server běží
- [ ] Admin panel funguje
- [ ] Like systém funguje
- [ ] Firebase sync funguje

## 🚨 Důležité poznámky

**CO ZACHOVAT Z EU:**
- ✅ `lib/firebase.ts` a `lib/firebase-admin.ts` - NEMAZAT!
- ✅ `hooks/useLikes.ts` - NEMAZAT!
- ✅ `components/LikeButton.tsx` - NEMAZAT!
- ✅ `app/admin/` složka - NEMAZAT!
- ✅ `app/api/` složka - NEMAZAT!
- ✅ Všechny Firebase-related soubory - NEMAZAT!

**CO PŘEPSAT Z CZ:**
- ✅ `app/layout.tsx` - použít CZ verzi (ale zachovat EU imports!)
- ✅ `app/page.tsx` - použít CZ design
- ✅ Všechny kategorie pages - použít CZ verzi
- ✅ Profile/Organization detail pages - použít CZ design + přidat EU funkce

## 🔗 Reference

**CZ projekt:** `~/Projects/eroticreviews-cz`
**EU projekt:** `~/Projects/eroticreviews-eu`
**EU backup:** `~/Projects/eroticreviews-eu-backup`

**GitHub:**
- CZ: `radim-prog/eroticreviews-cz` (private)
- EU: `radim-prog/eroticreviews-eu` (private, branch: design-from-cz)

---

**Status:** FÁZE 1 HOTOVO ✅ - Všechny CZ design soubory zkopírované
**Next:** FÁZE 2 - Začít integrovat komponenty do EU layoutu
