# QA Agent 2 -- Desktop Layout QA (Round 2 Retest)

**Viewport:** 1440x900
**Browser:** Chrome (via Claude-in-Chrome MCP)
**Date:** 2026-02-16
**Server:** http://localhost:3001
**Total Pages Tested:** 19/19

---

## Round 1 Retest Results

| Issue from Round 1 | Status | Notes |
|---|---|---|
| Hero section blank on cold load (GSAP race) | FIXED | "DESIGN YOUR FUTURE" visible immediately on load |
| Student work gallery invisible (opacity ~0) | FIXED | Gallery images fully visible, renders correctly |
| Stats counters showing "0" | PARTIAL FIX | Counters animate but land on wrong/garbled values (see below) |
| /about/faculty returning 404 | FIXED | Page loads correctly, faculty grid renders with photos |
| /about/staff returning 404 | FIXED | Page loads correctly, staff directory renders with photos |

---

## Full Page-by-Page Results

| Page | Overflow | Broken Images | Issue | Details | Severity |
|---|---|---|---|---|---|
| `/` (Homepage) | None | 0/20 (after lazy load) | Stats counters wrong values | "33+" Years (should be 40+), "3" Programs (should be 4), "13:1" Ratio (should be 15:1), "835s" Graduates (garbled suffix "s") | High |
| `/` (Homepage) | None | -- | Student work gallery large gap | ~400px of empty vertical space between "Inspired Spaces, Crafted Here" heading/description and the first visible gallery image; left portion of gallery area appears empty | Medium |
| `/about` | None | 0/10 | None | Clean render, breadcrumbs working, 4 sub-page cards visible | -- |
| `/about/accreditation` | None | 0/9 | None | Hero with background image, "Our Accreditations" section visible | -- |
| `/about/faculty` | None | 0/14 | None | FIXED from R1 (was 404). Faculty grid with photos in 3-column layout | -- |
| `/about/staff` | None | 0/13 | None | FIXED from R1 (was 404). Staff directory with photos and role info | -- |
| `/about/history` | None | 0/12 | None | Timeline and "Four Decades of Growth" section render correctly | -- |
| `/admissions` | None | 0/9 | None | Hero with enrollment badge, "Five Steps to IDI" section visible | -- |
| `/admissions/apply` | None | 0/6 | None | "Start Your Application" CTA prominent, Spring/Summer 2026 badge | -- |
| `/admissions/financial-aid` | None | 0/5 | None | Financial Aid Overview section renders correctly | -- |
| `/admissions/tuition` | None | 0/5 | None | Certificate Course tuition section visible on scroll | -- |
| `/campus-life` | None | 0/19 | None | Full-width hero background, campus photos render well | -- |
| `/contact` | None | 0/6 | None | Map placeholder visible, "Visit Our Campus" with address | -- |
| `/disclosures` | None | 0/5 | None | Documents & Disclosures page with PDF download icon visible | -- |
| `/programs` | None | 0/10 | None | Hero with living room background, "Find Your Program" section | -- |
| `/programs/associate-of-arts` | None | 0/9 | None | Program stats bar (Duration, Units, Tuition, Accreditation) correct | -- |
| `/programs/bachelor-of-arts` | None | 0/9 | None | ACCSC + CIDA accreditation badge shown correctly | -- |
| `/programs/certificate` | None | 0/9 | None | 12 weeks, 10 units, $2,400 tuition -- all correct | -- |
| `/programs/compare` | None | 0/5 | None | 4-column comparison table renders all programs side by side | -- |
| `/programs/master-interior-architecture` | None | 0/9 | None | MIA program details correct (12-15 months, 45 units, $22,500) | -- |

---

## Issues Summary

### HIGH Severity

#### 1. Homepage Stats Counters -- Wrong/Garbled Final Values
- **Page:** `/`
- **Location:** Stats counter bar (below student work gallery, above "Student Stories")
- **Expected values:** 40+ Years, 4 Programs, 15:1 Ratio, ~2000+ Graduates
- **Actual values:**
  - "33+" YEARS of Excellence -- should be ~42+ (founded 1984, current year 2026)
  - "3" PROGRAMS Certificate to Master's -- should be 4 (Certificate, AA, BA, MIA)
  - "13:1" RATIO Student-to-Faculty -- design system says 15:1
  - "835s" GRADUATES & Counting -- lowercase "s" suffix is a rendering bug; the suffix character should be "+" not "s"
- **Root cause (likely):** Counter animation target values are hardcoded incorrectly, and the GSAP count-up animation has a suffix rendering bug that appends wrong characters
- **Severity:** HIGH -- these are factual accuracy issues on the homepage

### MEDIUM Severity

#### 2. Homepage Student Work Gallery -- Large Empty Gap
- **Page:** `/`
- **Location:** Between the "STUDENT WORK / Inspired Spaces, Crafted Here" heading and the gallery grid
- **Details:** Approximately 400px of empty vertical space with no visible content. The gallery images only begin appearing in the lower-right quadrant of the gallery section. The left and upper portions of the grid appear empty on initial scroll.
- **Note:** The gallery IS now visible (fixed from Round 1 where opacity was stuck near 0), but the layout has an excessive gap suggesting some gallery items may not be rendering or there is a CSS grid gap issue.
- **Severity:** MEDIUM -- content is technically visible but layout appears broken

---

## Global Observations

### What is Working Well
- **No horizontal overflow** on any of the 19 pages at 1440x900
- **Zero broken images** across all pages after lazy loading completes
- **Sticky header** works consistently -- stays fixed on scroll, readable at all scroll positions
- **Footer** renders correctly on all pages with address, links, social icons, accreditation logos
- **Breadcrumb navigation** present and functional on all interior pages
- **All 19 pages resolve** (no 404s) -- faculty and staff pages fixed from Round 1
- **Program detail pages** are well-structured with consistent stat bars
- **Compare Programs** table renders cleanly in a 4-column layout
- **Plum Luxe design system** is consistent across all pages (colors, typography, spacing)
- **Hero sections** all have proper background images and text overlay
- **PDF download icon** (Adobe Acrobat) visible on disclosures-related pages

### Minor Notes
- The "N" badge in bottom-left corner (Next.js dev indicator) is visible on all pages -- expected in dev mode
- The first stat widget in the programs section ("17+" then "33+" on re-check) shows "YEARS OF EXCELLENCE" which appears to be a different counter from the main stats bar counter; the values are inconsistent between the two locations
- Testimonial carousel has pagination dots and renders cleanly
