# QA Agent 4 -- Mobile Layout QA (Round 2 Retest)

**Viewport:** 375x812 (iPhone 13/14 portrait)
**Tested:** 19 pages at `localhost:3001`
**Date:** 2026-02-16
**Browser:** Chrome (via MCP automation)

---

## Executive Summary

### Round 1 Issues -- Retest Status

| Round 1 Issue | Status | Details |
|---|---|---|
| Horizontal overflow (79px on ALL pages) | **FIXED** | `overflow-x-hidden` on body; scrollWidth = clientWidth on all 19 pages |
| Footer links 17px tall | **FIXED** | All footer links now min 44px height across all pages |
| Carousel dots 10px | **IMPROVED** | Testimonial buttons now 42x42px (was 10px); 2px short of 44px target |
| Body text 10-12px | **NOT FIXED** | Still 12px on all pages (should be 14px+ for mobile readability) |
| Tuition tables clipping | **FIXED** | All 8 tables now wrapped in `overflow-x: auto` containers with visible scrollbar |
| Landscape hero invisible | **FIXED** | Hero now visible in landscape (812x375); hero height 690px requires scrolling but content is accessible |

### New Issues Found

- 6 images on homepage extend past viewport edge (hidden by `overflow-x-hidden` but not properly constrained)
- Section label text uses `text-xs` (12px) globally -- 32 to 69 elements per page below 14px minimum

---

## Per-Page Audit Results

### Automated Metrics (375x812)

| Page | Overflow | Footer Min H | Small Text (<14px) | Min Body Font | Tables | Overflow Images |
|---|---|---|---|---|---|---|
| `/` | 0px | 44px | 32 | 12px | 0 | 6 |
| `/about` | 0px | 44px | 10 | 12px | 0 | 0 |
| `/about/accreditation` | 0px | 44px | 15 | 12px | 0 | 0 |
| `/about/faculty` | 0px | 44px | 45 | 12px | 0 | 0 |
| `/about/history` | 0px | 44px | 5 | 12px | 0 | 0 |
| `/about/staff` | 0px | 44px | 19 | 12px | 0 | 0 |
| `/admissions` | 0px | 44px | 5 | 12px | 0 | 0 |
| `/admissions/apply` | 0px | 44px | 8 | 12px | 0 | 0 |
| `/admissions/financial-aid` | 0px | 44px | 6 | 12px | 0 | 0 |
| `/admissions/tuition` | 0px | 44px | 1 | 12px | 8 | 0 |
| `/campus-life` | 0px | 44px | 13 | 12px | 0 | 0 |
| `/contact` | 0px | 44px | 5 | 12px | 0 | 0 |
| `/disclosures` | 0px | 44px | 2 | 12px | 0 | 0 |
| `/programs` | 0px | 44px | 19 | 12px | 0 | 0 |
| `/programs/associate-of-arts` | 0px | 44px | 69 | 12px | 0 | 0 |
| `/programs/bachelor-of-arts` | 0px | 44px | 43 | 12px | 0 | 0 |
| `/programs/certificate` | 0px | 44px | 24 | 12px | 0 | 0 |
| `/programs/compare` | 0px | 44px | 6 | 12px | 1 | 0 |
| `/programs/master-interior-architecture` | 0px | 44px | 42 | 12px | 0 | 0 |

---

## Detailed Findings

### 1. Horizontal Overflow -- FIXED

| Page | Issue | Details | Severity |
|---|---|---|---|
| ALL 19 pages | No horizontal overflow | scrollWidth = clientWidth = 485px on all pages | **PASS** |

**Root cause fix:** `overflow-x-hidden` class applied to body in `src/app/layout.tsx` line 80.

**Note:** While the scrollbar is suppressed, 6 images on the homepage still physically render past the 485px boundary (extending to 503-528px). These are hidden by overflow-x-hidden but ideally should be properly width-constrained.

---

### 2. Footer Touch Targets -- FIXED

| Page | Issue | Details | Severity |
|---|---|---|---|
| ALL 19 pages | Footer links meet 44px minimum | Min height = 44px across all pages | **PASS** |

Previously footer links were only 17px tall. Now all are 44px+, meeting WCAG 2.5.8 touch target guidelines.

---

### 3. Carousel / Testimonial Dots -- IMPROVED (Minor Remaining)

| Page | Issue | Details | Severity |
|---|---|---|---|
| `/` (Homepage) | Testimonial nav buttons 42x42px | "Show testimonial 2" and "Show testimonial 3" buttons are 42x42px, 2px below 44px minimum | Low |

Was 10px in Round 1, now 42x42px. Substantially improved but technically 2px under the 44px WCAG target.

---

### 4. Body Text Size -- NOT FIXED

| Page | Issue | Details | Severity |
|---|---|---|---|
| ALL 19 pages | Section labels at 12px | `text-xs` class (12px) used for section eyebrow labels, metadata, etc. | Medium |
| `/programs/associate-of-arts` | 69 elements under 14px | Course listings, metadata labels, section headers all 12px | Medium |
| `/programs/bachelor-of-arts` | 43 elements under 14px | Same pattern as associate-of-arts | Medium |
| `/programs/master-interior-architecture` | 42 elements under 14px | Same pattern | Medium |
| `/about/faculty` | 45 elements under 14px | Faculty titles, department labels at 12px | Medium |
| `/programs/certificate` | 24 elements under 14px | Course details at 12px | Medium |

**Details:** The 12px text is used consistently for:
- Section eyebrow labels ("EXPLORE OUR PROGRAMS", "CURRICULUM", "WHY IDI?", etc.)
- Duration/Units/Tuition metadata labels
- Course IDs and unit counts
- Faculty title/department text
- Badge text ("Classes Starting May 5")

These use Tailwind's `text-xs` class which maps to `font-size: 0.75rem` (12px). For mobile readability, these should be at minimum `text-sm` (14px).

---

### 5. Tuition Tables -- FIXED

| Page | Issue | Details | Severity |
|---|---|---|---|
| `/admissions/tuition` | Tables scrollable | All 8 tables wrapped in `overflow-x: auto` containers; visible scrollbar shown | **PASS** |
| `/programs/compare` | Comparison table scrollable | 1 table with `overflow-x: auto` wrapper | **PASS** |

Previously tables clipped content on mobile. Now all tables have horizontal scroll affordance with visible scrollbar.

---

### 6. Landscape Mode (812x375) -- IMPROVED

| Page | Issue | Details | Severity |
|---|---|---|---|
| `/` | Hero visible in landscape | Hero content (heading, CTA) accessible; hero height 690px in 195px viewport requires significant scrolling | Low |
| `/` | No horizontal overflow in landscape | scrollWidth = clientWidth = 783px | **PASS** |

Previously the hero was invisible in landscape. Now the hero section is visible with the staircase image, "DESIGN YOUR FUTURE" heading, and CTA buttons all accessible. The hero is tall (690px) relative to the landscape viewport height (195px), meaning users must scroll ~3.5x to see the full hero. This is functional but could be optimized with a reduced hero height in landscape orientation via `@media (orientation: landscape)`.

---

### 7. Hamburger Menu -- PASS

| Page | Issue | Details | Severity |
|---|---|---|---|
| ALL pages | Hamburger menu functional | Slide-out panel with all nav items, dropdown accordions for Programs/Admissions, Call and Apply CTAs | **PASS** |
| ALL pages | Menu item touch targets | All nav links 45-57px height, well above 44px minimum | **PASS** |

Hamburger menu opens correctly, shows all navigation items including sub-items when accordions are expanded. Close (X) button works. Phone number and "Apply Now" CTA are accessible.

---

### 8. Homepage Overflow Images -- NEW ISSUE

| Page | Issue | Details | Severity |
|---|---|---|---|
| `/` | 6 images extend past viewport | Images render at right edge 503-528px (viewport is 485px); hidden by overflow-x-hidden | Low |

These images are in gallery/card sections and extend 18-43px beyond the viewport boundary. While `overflow-x-hidden` prevents a scrollbar, the images should ideally be constrained with `max-w-full` or contained within their parent elements.

Image alts: "Bold red living...", "Elegant restaur...", "Interior design...", "Dramatic vaulte...", "Modern bedroom...", "Palm trees at s..."

---

## Summary of Remaining Issues

### Must Fix (Medium Severity)
1. **Body text at 12px on all 19 pages** -- Section labels, metadata, and eyebrow text use `text-xs` (12px). Should be minimum `text-sm` (14px) for mobile readability per WCAG guidelines. Affects 2-69 elements per page, worst on program detail pages.

### Should Fix (Low Severity)
2. **Testimonial nav buttons 42x42px** -- 2px below 44px WCAG target. Quick fix: increase padding or min-height.
3. **Homepage images extend past viewport** -- 6 images render past the edge (hidden by overflow). Add `max-w-full` to constrain.
4. **Landscape hero excessively tall** -- 690px hero in 195px viewport. Consider `@media (orientation: landscape) { min-height: auto; }` to reduce scrolling.

### Fixed in Round 2
- Horizontal overflow on all pages (was 79px, now 0px)
- Footer link touch targets (was 17px, now 44px)
- Tuition table clipping (now has scroll affordance)
- Landscape hero visibility (now visible, was invisible)
- Carousel dots substantially enlarged (was 10px, now 42px)
