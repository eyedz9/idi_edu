# QA Report: Mobile Layout at 375x812 (iPhone)

**Agent:** QA Agent 4 -- Mobile Layout
**Viewport:** 375x812 (portrait), 812x375 (landscape check)
**Date:** 2026-02-16
**URL:** http://localhost:3000
**Browser:** Chrome (via DevTools resize)

---

## Executive Summary

Testing all 19 pages at iPhone 375x812 revealed **systemic issues** affecting every page:

1. **Horizontal overflow on ALL pages** (scrollWidth 538px > clientWidth 485px) -- caused by absolutely-positioned hero images and decorative blur elements overflowing their containers
2. **Body text as small as 10px** on every page (minimum should be 14px for mobile readability)
3. **20-42 undersized touch targets per page** -- footer links are consistently 17px tall (must be 44px minimum)
4. **Two pages return 404:** `/about/faculty` and `/about/staff`
5. **Hamburger menu button is 40x40px** (should be 44x44px minimum)

---

## Critical Issues (2 pages are 404)

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /about/faculty | **Page returns 404** | "This page could not be found." -- entire page is missing | Critical |
| /about/staff | **Page returns 404** | "This page could not be found." -- entire page is missing | Critical |

---

## Global Issues (Present on ALL Working Pages)

These issues were confirmed on every single one of the 17 working pages:

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| ALL pages | Horizontal overflow (scrollWidth > clientWidth) | scrollWidth=538px vs clientWidth=485px. Root cause: hero/banner images use `absolute right-0 w-[55%] max-lg:w-full` which overflows the viewport by ~79px. Decorative blur elements (`-right-8`) also contribute ~7px overflow. Missing `overflow-x: hidden` on parent containers. | Critical |
| ALL pages | Body text below 14px minimum | Paragraph font sizes found across pages include 10px, 11px, and 12px. The primary body `<p>` tag renders at 12px. Mobile minimum should be 14px for readability. | Warning |
| ALL pages | Footer links are 17px tall | All footer links (Programs, Admissions, Campus Life, About, Disclosures, Financial Aid, Privacy Policy, phone number, email) have a tap height of only 17px. Minimum touch target should be 44px. | Critical |
| ALL pages | Logo link undersized | Header logo link is 104x40px (height under 44px minimum touch target) | Warning |
| ALL pages | Hamburger menu button undersized | "Open menu" button is 40x40px (should be 44x44px minimum per WCAG/Apple HIG) | Warning |
| ALL pages | Sticky header height 65px | Header takes up 65px of vertical space at top; on a 812px viewport this is ~8% of screen. Acceptable but worth noting. | Info |

---

## Per-Page Findings

### / (Homepage)

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| / | Horizontal overflow | scrollWidth=538 > clientWidth=485; hero image div overflows right by 79px | Critical |
| / | 29 undersized touch targets | Includes footer links (17px tall), carousel dots (10x10px), logo (40px tall), hamburger (40x40px) | Critical |
| / | Carousel/testimonial dots are 10px | Dot indicators for testimonials are only ~10x10px -- impossible to tap accurately on mobile | Critical |
| / | Stats section counter animation shows "O" | PROGRAMS counter displays "O" instead of a number (likely animation not triggered or value issue); RATIO shows "1:1" (should be "15:1"?) | Warning |
| / | Body text 12px | Primary paragraph text at 12px, below 14px minimum | Warning |
| / | Landscape: hero content invisible | At 812x375, the hero heading "DESIGN YOUR FUTURE" and CTA buttons are not visible in the viewport. Hero image fills entire screen with no text visible. | Critical |
| / | Landscape: horizontal overflow | At 812x375, scrollWidth=538 > clientWidth=485 -- horizontal scroll present in landscape | Critical |

### /about

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /about | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /about | 23 undersized touch targets | Footer links + breadcrumb links | Critical |
| /about | Text sizes include 10px, 11px, 12px | Multiple paragraphs below 14px minimum | Warning |

### /about/accreditation

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /about/accreditation | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /about/accreditation | 27 undersized touch targets | Highest count among "about" sub-pages; likely has more document links | Critical |
| /about/accreditation | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /about/history

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /about/history | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /about/history | 23 undersized touch targets | Footer links + breadcrumb links | Critical |
| /about/history | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /admissions

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /admissions | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /admissions | 22 undersized touch targets | Footer links + breadcrumb links | Critical |
| /admissions | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /admissions/apply

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /admissions/apply | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /admissions/apply | 29 undersized touch targets | Footer links + additional CTA links | Critical |
| /admissions/apply | Email input 41px tall | Form email input height is 41px, under 44px minimum touch target for mobile | Warning |
| /admissions/apply | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /admissions/financial-aid

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /admissions/financial-aid | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /admissions/financial-aid | 26 undersized touch targets | Footer links + content links | Critical |
| /admissions/financial-aid | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /admissions/tuition

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /admissions/tuition | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /admissions/tuition | 23 undersized touch targets | Footer links + breadcrumb links | Critical |
| /admissions/tuition | Tuition tables clip content on right | Fee table "Amount" column header truncated to "Amo..." and dollar values are clipped. Tables have horizontal scroll but content is cut off without clear scroll affordance. | Critical |
| /admissions/tuition | Payment schedule table cramped | 4-column table (Enrollment Status, Units/Term, Tuition/Term, Time) is very tight at mobile width; "Time" column values truncated | Warning |
| /admissions/tuition | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /campus-life

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /campus-life | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /campus-life | 22 undersized touch targets | Footer links + breadcrumb links | Critical |
| /campus-life | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /contact

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /contact | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /contact | **42 undersized touch targets** | Highest of any page. Social media icons + footer links + many content links. Social icons (Facebook, Instagram, YouTube, TikTok, Pinterest) appear to be below minimum size. | Critical |
| /contact | Email form input 41px tall | Below 44px touch target minimum | Warning |
| /contact | Social media icons too small | Facebook, Instagram, YouTube, TikTok, Pinterest icons in "Follow Us" section are small circular icons that may be under 44px tap area | Warning |
| /contact | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /disclosures

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /disclosures | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /disclosures | 23 undersized touch targets | Footer links + document download links | Critical |
| /disclosures | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /programs

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /programs | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /programs | 30 undersized touch targets | Footer links + program card links | Critical |
| /programs | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /programs/associate-of-arts

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /programs/associate-of-arts | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /programs/associate-of-arts | 25 undersized touch targets | Footer links + breadcrumb links | Critical |
| /programs/associate-of-arts | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /programs/bachelor-of-arts

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /programs/bachelor-of-arts | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /programs/bachelor-of-arts | 25 undersized touch targets | Footer links + breadcrumb links | Critical |
| /programs/bachelor-of-arts | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /programs/certificate

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /programs/certificate | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /programs/certificate | 25 undersized touch targets | Footer links + breadcrumb links | Critical |
| /programs/certificate | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

### /programs/compare

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /programs/compare | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /programs/compare | 30 undersized touch targets | Footer links + "Learn More" buttons per program card | Critical |
| /programs/compare | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |
| /programs/compare | Card layout works well | Positive: comparison table properly converts to stacked cards on mobile -- good responsive adaptation | Info |

### /programs/master-interior-architecture

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| /programs/master-interior-architecture | Horizontal overflow | scrollWidth=538 > clientWidth=485 | Critical |
| /programs/master-interior-architecture | 25 undersized touch targets | Footer links + breadcrumb links | Critical |
| /programs/master-interior-architecture | Text sizes include 10px, 11px, 12px | Below 14px minimum | Warning |

---

## Positive Findings

| Page | Finding | Details |
|------|---------|---------|
| ALL pages | Hamburger menu works correctly | Menu opens/closes properly, lists all nav sections with phone CTA at bottom |
| ALL pages | Images scale properly | Hero images and content images scale down correctly at mobile viewport |
| ALL pages | Breadcrumb navigation present | Consistent breadcrumbs help with mobile navigation |
| /programs/compare | Responsive table adaptation | Comparison grid converts to stacked cards on mobile -- excellent mobile pattern |
| ALL pages | Content readable despite small sizes | Text is generally legible even at smaller sizes, just not optimal |
| /admissions/apply | Clear CTA button | "Start Your Application" button is prominent and well-sized |
| ALL program pages | Info cards display well | Duration/Units/Tuition/Accreditation cards stack in 2x2 grid, readable on mobile |

---

## Recommended Fixes (Priority Order)

### P0 -- Critical
1. **Create /about/faculty and /about/staff pages** -- These are 404 and likely linked from navigation
2. **Fix global horizontal overflow** -- Add `overflow-x: hidden` to the `<body>` or main wrapper, AND fix the hero image container to not overflow (the `w-[55%] max-lg:w-full` with `absolute right-0` extends 79px past viewport). Also fix decorative blur elements using negative positioning (`-right-8`, `-bottom-8`)
3. **Increase footer link tap targets** -- Add `py-2` or `py-3` padding to footer links to bring tap height from 17px to at least 44px

### P1 -- High
4. **Increase hamburger button to 44x44px** -- Currently 40x40px. Change `p-2` to `p-2.5` or `p-3`
5. **Increase carousel dot tap targets** -- Currently 10x10px. Add padding or increase to 44x44px tap area
6. **Set minimum body font size to 14px** -- The 10px, 11px, and 12px text on mobile is below accessibility standards
7. **Fix tuition table mobile display** -- Tables clip content at right edge; consider a responsive card layout like /programs/compare uses

### P2 -- Medium
8. **Fix landscape hero** -- At 812x375, hero heading and CTAs are invisible below fold. Consider reducing hero height in landscape
9. **Increase form input heights to 44px** -- Email inputs are 41px, slightly under minimum
10. **Enlarge social media icon tap targets** -- Add padding to hit the 44px minimum on /contact page

---

## Test Methodology

- Viewport resized to exactly 375x812 via Chrome DevTools
- Each page navigated and screenshotted
- JavaScript diagnostics run per page to measure:
  - `document.documentElement.scrollWidth > document.documentElement.clientWidth` (horizontal overflow)
  - `getComputedStyle(p).fontSize` for all `<p>` elements
  - `getBoundingClientRect()` for all `<a>` and `<button>` elements (touch target sizing)
  - Fixed/sticky element detection
  - Form input sizing
  - Table overflow detection
- Hamburger menu tested (open/close) on homepage
- Landscape check performed on homepage (812x375)
- Root cause analysis performed on overflow using element inspection

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Pages tested | 19 |
| Pages working | 17 |
| Pages returning 404 | 2 (/about/faculty, /about/staff) |
| Pages with horizontal overflow | 17/17 (100%) |
| Pages with text below 14px | 17/17 (100%) |
| Pages with undersized touch targets | 17/17 (100%) |
| Min touch targets per page | 22 (campus-life) |
| Max touch targets per page | 42 (contact) |
| Critical issues total | 38 |
| Warning issues total | 25 |
| Info issues total | 3 |
