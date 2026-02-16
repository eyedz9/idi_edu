# QA Report: Desktop Layout (1440x900)

**Agent:** QA Agent 2 -- Desktop Layout
**Viewport:** 1440x900
**Date:** 2026-02-16
**Target:** localhost:3000
**Pages Tested:** 19/19

---

## Summary

- **Critical Issues:** 3
- **Warning Issues:** 3
- **Info Issues:** 2

---

## Findings

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| `/` (Homepage) | Student Work gallery images invisible | The "Inspired Spaces, Crafted Here" section contains 5 images in a CSS grid, but GSAP ScrollTrigger animations leave all grid items at near-zero or zero opacity (measured: 0.26, 0.09, 0.02, 0, 0). The entire gallery area (~928px tall) appears as an empty dark void. | Critical |
| `/` (Homepage) | Hero section blank on initial load | On first page load, the hero section ("DESIGN YOUR FUTURE") rendered as completely empty/dark -- no heading, no CTA buttons, no hero image visible. On subsequent navigation back to the page, the hero rendered correctly. Indicates a GSAP animation initialization race condition. | Critical |
| `/about/faculty` | 404 -- Page not found | Navigating to `/about/faculty` returns a Next.js 404 error page. The About page links to this URL from its "Faculty" card, creating a dead link. The page route file is missing or misconfigured. | Critical |
| `/about/staff` | 404 -- Page not found | Navigating to `/about/staff` returns a Next.js 404 error page. The About page links to this URL from its "Staff Directory" card, creating a dead link. The page route file is missing or misconfigured. | Critical |
| `/` (Homepage) | Years of Excellence counter shows incorrect value on first load | The animated counter in the programs section initially displayed "0+" (first load) then "3+" (scroll past), eventually reaching "35+" on a second page visit. The counter animation appears to not trigger reliably on first scroll-through. Founded in 1984, the value should target approximately 40+. | Warning |
| `/` (Homepage) | Footer accreditation logos low contrast | ACCSC, BPPE, and CIDA logos in the footer use `opacity: 0.6` with `brightness(0) invert(1)` filter. While technically visible as faint white logos against the dark plum background, they are hard to read and could benefit from higher opacity (0.8+) for accessibility. | Warning |
| `/` (Homepage) | Student Work section heading low contrast | The "Inspired Spaces, Crafted Here" heading and description text use a muted gray color that blends into the dark plum background, making it less readable than headings in other sections. | Info |
| All pages | No horizontal overflow detected | Tested `scrollWidth > clientWidth` on every page via JavaScript -- all pages pass at 1440px width. No horizontal scrollbar present. | Info (Pass) |
| `/about` | No issues detected | Hero image, breadcrumbs, mission section, and 4-card grid (History, Accreditation, Faculty, Staff) all render correctly. 0 broken images, no overflow. | Info (Pass) |
| `/about/accreditation` | No issues detected | Hero with background image, breadcrumbs, accreditation cards all render correctly. 0 broken images, no overflow. | Info (Pass) |
| `/about/history` | No issues detected | Hero section with "Founded 1984" badge, timeline milestones section renders correctly. 0 broken images, no overflow. | Info (Pass) |
| `/admissions` | No issues detected | Hero with enrollment date badge ("Spring/Summer 2026"), "Five Steps to IDI" enrollment section all render correctly. 0 broken images, no overflow. | Info (Pass) |
| `/admissions/apply` | No issues detected | Hero with "Now Enrolling" badge, "Start Your Application" CTA button all render correctly. 0 broken images, no overflow. | Info (Pass) |
| `/admissions/financial-aid` | No issues detected | Hero (gradient only, no background image -- by design), Financial Aid Overview section renders correctly. 0 broken images, no overflow. | Info (Pass) |
| `/admissions/tuition` | No issues detected | Hero section, Certificate/AA/BA/MIA tuition breakdown tables all render correctly. 0 broken images, no overflow. | Info (Pass) |
| `/campus-life` | No issues detected | Hero with campus building image, all 19 images loaded successfully. Layout clean at 1440px. No overflow. | Info (Pass) |
| `/contact` | No issues detected | Hero image, Google Maps embed, contact info (phone, fax, email), office hours, social links all render correctly. 0 broken images, no overflow. | Info (Pass) |
| `/disclosures` | No issues detected | Hero section, document listings render correctly. Breadcrumbs present. 0 broken images, no overflow. | Info (Pass) |
| `/programs` | No issues detected | Hero with background image, program cards section renders correctly. 0 broken images, no overflow. | Info (Pass) |
| `/programs/associate-of-arts` | No issues detected | Program stats bar (Duration, Units, Tuition, Accreditation), breadcrumbs, hero all render correctly. 0 broken images, no overflow. | Info (Pass) |
| `/programs/bachelor-of-arts` | No issues detected | Program stats bar, breadcrumbs, hero all render correctly. 0 broken images, no overflow. | Info (Pass) |
| `/programs/certificate` | No issues detected | Program stats bar, breadcrumbs, hero all render correctly. 0 broken images, no overflow. | Info (Pass) |
| `/programs/compare` | No issues detected | Comparison table with all 4 programs side-by-side renders correctly at 1440px. All columns fit without horizontal scroll. 0 broken images, no overflow. | Info (Pass) |
| `/programs/master-interior-architecture` | No issues detected | Program stats bar, breadcrumbs, hero all render correctly. 0 broken images, no overflow. | Info (Pass) |

---

## Sticky Header Behavior

Tested on multiple pages by scrolling. The navigation header remains sticky at the top of the viewport across all pages. The header contains:
- IDI logo (left)
- Navigation links: Programs, Admissions, Campus Life, About, Contact
- Phone number: (949) 675-4451
- "Request Info" link
- "Apply Now" pink CTA button

All elements remain visible and properly positioned during scroll. No z-index conflicts observed with page content.

---

## Footer Consistency

The footer renders consistently across all working pages with:
- IDI logo and tagline
- Quick Links column (Programs, Admissions, Campus Life, About)
- Resources column (Disclosures, Financial Aid, Privacy Policy, Accreditation)
- Stay Connected section with social icons and email subscription
- Copyright line: "2026 Interior Designers Institute. All rights reserved."
- Accreditation logos row (ACCSC, BPPE, CIDA) -- low contrast but present

---

## Critical Issues Requiring Immediate Attention

1. **`/about/faculty` and `/about/staff` return 404**: These are linked from the About page's card grid and represent broken navigation paths. The route files need to be created or the routing needs to be corrected.

2. **Homepage Student Work gallery invisible**: The GSAP ScrollTrigger animation on the student work image grid is not completing its reveal animation. All 5 grid items remain at near-zero opacity, making the section appear as a ~928px empty void. This is a significant visual defect on the most important page.

3. **Homepage hero blank on cold load**: First-time visitors may see an empty hero section due to GSAP animation timing. The hero text, CTAs, and background image only become visible after the animation fires, which may not happen reliably on initial page load.
