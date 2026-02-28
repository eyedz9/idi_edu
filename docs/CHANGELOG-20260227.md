# IDI Website Changelog — 2026-02-27

**Session scope:** Image replacements, animation refinements, document updates, hero image standardization, and client copy edits from `IDI-site-edits-20260218.md`
**Base commit:** `26da585` (image_fix_001)

---

## Summary of Changes

| # | Area | Type | Description |
|---|------|------|-------------|
| 1 | Campus Section | IMAGE | Swapped hero and accent images; campus.jpeg now leads, palm trees in accent |
| 2 | Campus Section | IMAGE | Replaced accent image with `/images/npb.avif` (Newport Beach coastal) |
| 3 | Campus Section | STYLE | Added `object-right` to campus image for right alignment |
| 4 | Gallery Section | ENHANCE | Added persistent info bars with student name and program to all cards |
| 5 | Gallery Section | ANIMATION | Smoother enter animations; removed exit (reverse) animations |
| 6 | Documents | ASSET | Downloaded real School Catalog and Performance Fact Sheet from idi.edu |
| 7 | Consumer Info Bar | FIX | PDF links now open in new browser tab (`target="_blank"`) |
| 8 | Hero Images | ADD | Added hero background images to 6 pages that were missing them |
| 9 | Programs Data | DELETE | Removed course descriptions from AA, BA, and MIA programs |
| 10 | Campus Life | UPDATE | Updated NKBA and NEWH student chapter descriptions |
| 11 | Apply Page | ADD | Added itemized per-program registration fee breakdown |
| 12 | Tuition Data | UPDATE | Updated registration fees and recalculated totals |
| 13 | FAFSA Code | FIX | Corrected school code from 041863 to 016930 in `public/llms.txt` |

---

## Change 1: Campus Section — Image Swap

**Files:** `src/components/sections/campus-section.tsx`

- Large left-side image changed from Unsplash palm trees to `/images/campus.jpeg` (IDI campus photo)
- Small accent image below "Visit Our Campus" button changed to `/images/npb.avif` (Newport Beach coastal view)
- Added `object-right` class to campus image for right-aligned positioning

---

## Change 2: Gallery Section — Info Bars & Animations

**Files:** `src/components/sections/gallery-section.tsx`

### Info Bars
- Each gallery card now has a **persistent** bottom info bar (previously hover-only)
- Left side: project category (pink accent) + description
- Right side: student name + program name
- Added student/program data to all 5 gallery items:
  - Maria Gonzalez — BA in Interior Design
  - James Chen — AA in Interior Design
  - Aisha Patel — BA in Interior Design
  - Lucas Rivera — Master of Interior Architecture
  - Sophie Nakamura — AA in Interior Design

### Animation Changes
- Smoother entrance: `power2.out` easing with `y: 40` fade-up + clip-path reveal
- **Removed exit animations**: `toggleActions` changed from `"play reverse none reverse"` to `"play none none none"` on header and cards
- Info bars animate up within card timeline (staggered `-=0.4`)
- Subtle `group-hover:scale-105` on images for interactivity

---

## Change 3: Real PDF Documents

**Files:** `public/documents/idi-catalog.pdf`, `public/documents/school-performance-fact-sheet.pdf`

- Replaced placeholder PDFs (~700 bytes) with real documents from idi.edu:
  - **School Catalog**: IDI Catalog 2024-25 (12.2 MB) — source: `idi.edu/wp-content/uploads/2025/12/3005601-IDI-Catalog-2024-25.pdf`
  - **Performance Fact Sheet**: BA SPFS 2023-2024 (210 KB) — source: `idi.edu/wp-content/uploads/2025/12/3005601-SPFS-2023-2024_BA-2.pdf`

---

## Change 4: PDF Links Open in New Tab

**Files:** `src/components/sections/consumer-info-bar.tsx`

- Consumer info bar PDF links (School Catalog, Performance Fact Sheet) now use `<a target="_blank" rel="noopener noreferrer">` instead of Next.js `<Link>`
- All other pages already had `target="_blank"` — this was the only missing location

---

## Change 5: Hero Images Added to 6 Pages

All 6 pages now follow the standard hero pattern: full-bleed `next/image` with `fill` + `priority`, two gradient overlays (horizontal + vertical), `relative z-10` on content.

| Page | File | Image |
|------|------|-------|
| `/admissions/tuition` | `src/app/admissions/tuition/page.tsx` | Unsplash `photo-1554224155-8d04cb21cd6e` — workspace with materials |
| `/admissions/financial-aid` | `src/app/admissions/financial-aid/page.tsx` | Unsplash `photo-1434030216411-0b793f4b4173` — student with documents |
| `/admissions/register` | `src/app/admissions/register/page.tsx` | Unsplash `photo-1523050854058-8df90110c9f1` — graduation ceremony |
| `/about/staff` | `src/app/about/staff/page.tsx` | Unsplash `photo-1521737711867-e3b97375f902` — team collaborating |
| `/programs/compare` | `src/app/programs/compare/page.tsx` | Unsplash `photo-1618221195710-dd6b41faaea6` — interior design |
| `/disclosures` | `src/app/disclosures/page.tsx` | Unsplash `photo-1450101499163-c8848c66ca85` — documents and compliance |

---

## Change 6: Course Descriptions Removed

**Files:** `src/data/programs.ts`, `src/app/programs/[slug]/page.tsx`

Per client copy edits (`IDI-site-edits-20260218.md`), all course descriptions were struck through for deletion.

- **Associate of Arts**: 22 courses removed → `courses: []`
- **Bachelor of Arts**: 9 courses removed → `courses: []`
- **Master of Interior Architecture**: 8 courses removed → `courses: []`
- **Certificate Course**: Kept intact (16 lectures + 8 studios, not struck through)

The program detail page (`[slug]/page.tsx`) now guards the Curriculum section: it only renders if the program is avocational (Certificate) or has courses in the array. AA, BA, and MIA program pages skip the section entirely.

---

## Change 7: NKBA & NEWH Descriptions Updated

**Files:** `src/app/campus-life/page.tsx`

Both organizations already existed. Descriptions updated to match client's exact wording:

- **NKBA**: Now begins with "The National Kitchen & Bath Association (NKBA) Student Chapter is the leading trade association..."
- **NEWH**: Now begins with "The Network of Executive Women in Hospitality (NEWH) is an international organization..."

---

## Change 8: Registration Fees Itemized

**Files:** `src/app/admissions/apply/page.tsx`, `src/data/tuition.ts`

### Apply Page
- New "Registration Fees" section with per-program breakdown:
  - $95 — Avocational Certificate Course
  - $100 — Associate of Arts Degree in Interior Design
  - $100 — Bachelor of Arts Degree in Interior Design
  - $100 — Master of Interior Architecture Degree
  - $250 — International Students
- FAQ answer for "Is there a registration fee?" updated with itemized amounts

### Tuition Data
Updated registration fees and recalculated totals:

| Program | Old Reg Fee | New Reg Fee | Total Charges | Est. Cost |
|---------|-------------|-------------|---------------|-----------|
| Certificate | $200 | $95 | $2,795 → $2,690 | $3,045 → $2,940 |
| AA | $200 | $100 | $40,600 → $40,500 | $43,100 → $43,000 |
| BA | $200 | $100 | $20,850 → $20,750 | $23,350 → $23,250 |
| MIA | $100 | $100 | No change | No change |

---

## Change 9: FAFSA School Code Corrected

**Files:** `public/llms.txt`

- Changed FAFSA School Code from `041863` to `016930`
- This was the only remaining occurrence in source/public files

---

## Items Already Implemented (No Changes Needed)

These items from `IDI-site-edits-20260218.md` were already completed in previous sessions:

- BPPE School Code removal — already absent from `src/`
- Federal School Code removal — already absent from `src/`
- Faculty placeholder names — already replaced with 18 real faculty members
- Staff placeholder names — already replaced with real staff data
- Date unification (May 11) — already consistent

---

## Files Modified

```
public/documents/idi-catalog.pdf                    (replaced)
public/documents/school-performance-fact-sheet.pdf   (replaced)
public/llms.txt                                      (FAFSA code fix)
src/app/admissions/apply/page.tsx                    (registration fees)
src/app/admissions/financial-aid/page.tsx            (hero image)
src/app/admissions/register/page.tsx                 (hero image)
src/app/admissions/tuition/page.tsx                  (hero image)
src/app/about/staff/page.tsx                         (hero image)
src/app/campus-life/page.tsx                         (NKBA/NEWH descriptions)
src/app/disclosures/page.tsx                         (hero image)
src/app/programs/compare/page.tsx                    (hero image)
src/app/programs/[slug]/page.tsx                     (curriculum guard)
src/components/sections/campus-section.tsx            (image swap + alignment)
src/components/sections/consumer-info-bar.tsx         (PDF new tab)
src/components/sections/gallery-section.tsx           (info bars + animations)
src/data/programs.ts                                 (course removal)
src/data/tuition.ts                                  (registration fees)
```
