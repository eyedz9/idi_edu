# Website QA Report
**Site:** http://localhost:3000/
**Date:** 2026-02-16
**Tested By:** Claude Code Automated QA
**Pages Tested:** 19 (17 loaded, 2 returned 404)

---

## Executive Summary

The IDI website has a strong visual foundation with the Plum Luxe design system and excellent page load performance (all pages under 500ms), but **critical issues block a client-ready launch**. The homepage — the most important page — has GSAP animation failures that leave the hero section blank on cold load and the student work gallery completely invisible. Two linked pages (`/about/faculty` and `/about/staff`) return 404 errors, and all 25 legally-required PDF documents on the Disclosures page are missing. On mobile, every single page has horizontal overflow caused by absolutely-positioned hero images, and footer touch targets are universally undersized at 17px (minimum 44px required). The desktop experience on interior pages is polished, but the homepage and mobile experience need significant work before client review.

## Overall Score: 22/100
**Verdict: Significant rework needed before client delivery**

*Scoring: 100 base, -5 per Critical (8), -2 per Warning (19), -0.5 per Info (12)*

---

## Top 5 Priority Fixes

1. **Fix GSAP animation initialization on homepage** — Hero section is blank on cold load, student work gallery is invisible (opacity stuck near 0), and stat counters show "0". This is a ScrollTrigger race condition. Add CSS fallback so content is visible even if JS fails.
2. **Add all 25 PDF documents to `/documents/` directory** — Every disclosure PDF returns 404. These are legally required for an accredited institution (ACCSC, BPPE, CIDA documents, gainful employment disclosures, catalog, handbooks).
3. **Create `/about/faculty` and `/about/staff` pages** — Both are linked from the About page but return 404. Either build the pages or remove the links.
4. **Fix mobile horizontal overflow** — All 17 working pages overflow by ~79px at 375px width. Root cause: hero image containers use `absolute right-0 w-[55%] max-lg:w-full` and decorative blur elements use `-right-8`. Fix: add `overflow-x: hidden` on parent containers or constrain the absolutely-positioned elements.
5. **Increase footer link touch targets** — Footer links are 17px tall across all pages. Add vertical padding to reach the 44px minimum for mobile tap targets.

## Quick Wins

- Add `overflow-x: hidden` to the main page wrapper to fix mobile horizontal scroll (1 line of CSS, fixes all 17 pages)
- Add `id="privacy"` to the privacy section on `/disclosures` to fix the footer Privacy Policy anchor link
- Fix the "Compare Programs" nav dropdown link from `/programs` to `/programs/compare`

---

## Detailed Findings

### 1. Content & Copy Issues

| Page | Issue | Text/Details | Severity |
|------|-------|-------------|----------|
| /about/faculty | Page returns 404 | Entire page missing — linked from /about "Faculty" card | Critical |
| /about/staff | Page returns 404 | Entire page missing — linked from /about "Staff Directory" card | Critical |
| /about/history | Placeholder photo text visible | 6 strings visible: "[Photo: IDI campus exterior, Newport Beach]", "[Photo: Students in design studio]", "[Photo: Design center visit]", "[Photo: Graduation ceremony]", "[Photo: Faculty mentoring session]", "[Photo: Student portfolio presentation]" | Critical |
| / (homepage) | Hero text concatenated | "DESIGNYOURFUTURE" runs together in text extraction — separate spans lack spacing for screen readers | Warning |
| / (homepage) | Empty alt text on hero accreditation logos | ACCCS_logo.png and cida_logo.png have alt="" in hero (footer versions have proper alt text) | Warning |
| / (homepage) | Animated counters show "0" in DOM | Stats read as "0+ Years of Excellence", "0 Programs", "0:1 Ratio", "0s Graduates" for screen readers/SEO crawlers before animation | Warning |
| / (homepage) | Testimonial possibly fictional | "Sarah Mitchell, Principal Designer, Mitchell Interiors" — verify this is a real graduate | Warning |
| /about | Animated counters show "0" in DOM | Same issue: "0+ Years Strong", "0 Programs", "0:1 Ratio", "0s Graduates" | Warning |
| /about/history | Timeline ends at 2024 | Most recent entry is "2024 - Forty years strong" — not updated for 2025-2026 | Warning |
| /about/history | Redundant heading | "Our Story" section subtitled "The IDI Story" — repetitive | Warning |
| /programs/certificate | Start date inconsistency | States "May 11, 2026" while rest of site says "May 5" | Warning |
| Sitewide | ACCSC logo filename misspelled | File named `ACCCS_logo.png` (missing S). If logo image contains "ACCCS" text, this is visible to users | Warning |
| /about, /campus-life | Double dashes instead of em dashes | Uses "--" instead of proper "—" in body copy | Info |
| /contact | All 6 departments share identical contact info | contact@idi.edu and (949) 675-4451 for all — makes department breakdown seem superficial | Info |
| /programs/bachelor-of-arts | "180 quarter units" potentially confusing | Cumulative total (AA 90 + BA 90) but hero doesn't clarify | Info |
| /programs/compare | "Personal enrichment" undersells Certificate | Other programs have detailed career outcome descriptions | Info |
| /programs/compare, /admissions/financial-aid | No hero image | Visually sparse compared to sibling pages | Info |

### 2. Desktop Layout (1440px)

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| / (homepage) | Hero section blank on cold load | First visit renders completely empty/dark hero — no heading, no CTAs, no hero image. Content appears on subsequent visits. GSAP animation initialization race condition. | Critical |
| / (homepage) | Student work gallery invisible | "Inspired Spaces, Crafted Here" section: 5 images in CSS grid have GSAP ScrollTrigger leaving all items at near-zero opacity (0.26, 0.09, 0.02, 0, 0). ~928px empty dark void on homepage. | Critical |
| / (homepage) | Stats counter unreliable | Counter initially shows "0+" then "3+", eventually reaching "35+" on second visit. Should target ~40+. Animation doesn't trigger reliably on first scroll. | Warning |
| / (homepage) | Footer accreditation logos low contrast | ACCSC, BPPE, CIDA logos at opacity 0.6 with filter — hard to read against dark background | Warning |
| / (homepage) | Student work heading low contrast | "Inspired Spaces, Crafted Here" text blends into dark plum background | Info |
| All other pages | No issues detected | 15 pages pass — clean layouts, no overflow, no broken images, sticky header works, footer consistent | Info (Pass) |

### 3. Tablet Layout (768px)

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| / (homepage) | Hero content invisible (opacity: 0) | ALL hero content — H1, subtitle, CTAs, badges, scroll indicator — stuck at opacity: 0. GSAP entrance animations never trigger. Hero appears as empty dark gradient. | Critical |
| / (homepage) | Stats counter broken | Shows "2+", "0", "0:1", "0S" instead of animated values. GSAP ScrollTrigger counter animations don't fire. | Critical |
| All pages | Apply Now button undersized | 106x36px — height below 44px minimum touch target | Warning |
| All pages | Hamburger menu button undersized | 40x40px, slightly below 44x44px minimum | Warning |
| / (homepage) | Testimonial carousel dots undersized | 10x10px (active: 32x10px) — far below 44px minimum for touch | Warning |
| All pages | Footer links undersized touch targets | 17-20px height, well below 44px minimum | Warning |
| All pages | Footer email input undersized | 252x41px — height 41px, slightly below 44px minimum | Warning |
| All pages | Logo link undersized | 104x40px — 4px below 44px minimum | Warning |
| /programs/compare | Cards stack vertically defeating purpose | Hero says "See all four programs side by side" but cards stack single-column. Consider horizontally scrollable table or 2x2 grid. | Warning |
| All other pages | Layout adapts correctly | Navigation switches to hamburger, grids collapse properly, no horizontal overflow, text readable | Info (Pass) |

### 4. Mobile Layout (375px)

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| ALL 17 pages | Horizontal overflow | scrollWidth=538px > clientWidth=485px on every page. Root cause: hero images use `absolute right-0 w-[55%] max-lg:w-full` overflowing by ~79px. Decorative blur elements with `-right-8` add ~7px more. | Critical |
| ALL 17 pages | Footer links 17px tall | All footer links have 17px tap height — must be 44px minimum per WCAG/Apple HIG | Critical |
| / (homepage) | Carousel dots 10x10px | Testimonial dot indicators impossible to tap accurately on mobile | Critical |
| / (homepage) | Landscape hero invisible | At 812x375, hero heading and CTAs completely invisible — image fills viewport with no text visible until scrolling | Critical |
| /admissions/tuition | Tuition tables clip content | "Amount" column header truncated to "Amo..." and dollar values clipped at right edge. No clear horizontal scroll affordance. | Critical |
| ALL 17 pages | Body text includes 10px, 11px, 12px sizes | Primary `<p>` renders at 12px. Mobile minimum should be 14px for readability. | Warning |
| ALL pages | Hamburger menu 40x40px | Below 44x44px minimum (but menu itself works correctly — opens/closes properly) | Warning |
| ALL pages | Logo link 40px height | Below 44px minimum touch target | Warning |
| /contact | 42 undersized touch targets | Highest count — social icons + footer links + content links all below 44px | Warning |
| /admissions/tuition | Payment schedule table cramped | 4-column table very tight; "Time" column values truncated | Warning |
| /admissions/apply, /contact | Email inputs 41px tall | Below 44px touch target minimum | Warning |
| /contact | Social media icons too small | Facebook, Instagram, YouTube, TikTok, Pinterest icons below 44px tap area | Warning |
| /programs/compare | Responsive card layout works well | Comparison grid converts to stacked cards — good mobile pattern (positive) | Info (Pass) |

### 5. Performance & Technical

| Page | Issue Type | Details | Severity |
|------|-----------|---------|----------|
| /about/faculty | Missing Page (404) | Route does not exist in Next.js app router | Critical |
| /about/staff | Missing Page (404) | Route does not exist in Next.js app router | Critical |
| / (homepage) | Image Warning | 5 homepage images with `fill` prop have parent containers with height 0 — images may not render correctly | Warning |
| All pages | Image Warning | 3 footer logos (ACCCS_logo.png, bppe-logo.png, cida_logo.png) trigger Next.js Image warnings — missing `width: "auto"` or `height: "auto"` to preserve aspect ratio | Warning |
| All pages | Zero JS runtime errors | No JavaScript errors on any of the 17 working pages | Info (Pass) |
| All pages | Zero failed network requests | All assets return 200 or 304 | Info (Pass) |
| All pages | Zero CORS errors | No cross-origin issues detected | Info (Pass) |
| All pages | Zero mixed content | No HTTP resources on HTTPS | Info (Pass) |
| All pages | Fast page loads | All pages under 500ms (fastest: 203ms, slowest: 479ms) | Info (Pass) |
| All pages | All fonts/CSS/images load | Two woff2 fonts, single CSS bundle, all images via /_next/image load successfully | Info (Pass) |

### 6. Functionality & Interactions

| Page | Element | Expected | Actual | Severity |
|------|---------|----------|--------|----------|
| /disclosures | All 25 PDF document links | PDFs load when clicked | ALL 25 PDFs return 404 — catalog, handbooks, accreditation letters, gainful employment disclosures, program outlines all missing from `/documents/` | Critical |
| /about | Faculty & Staff Directory links | Navigate to working pages | Both link to 404 pages (/about/faculty, /about/staff) | Critical |
| /nonexistent | Custom 404 page | Branded 404 with navigation, home link, search | Default Next.js "404 | This page could not be found." — no branding, no footer, no helpful navigation | Critical |
| Nav (Programs) | "Compare Programs" dropdown link | Links to /programs/compare | Links to /programs instead | Warning |
| Footer (all pages) | "Privacy Policy" link | Scrolls to privacy section on /disclosures | Links to /disclosures#privacy but no id="privacy" anchor exists | Warning |
| Footer (all pages) | Email subscription form | Functional form submission | Form has no `action` URL and input has no `name` attribute — data cannot be submitted | Warning |
| /contact | Contact/inquiry form | Form with name, email, message fields | No contact form exists — only phone, email, and department cards displayed | Warning |
| Nav (Admissions) | Admissions link | Clickable link to /admissions AND dropdown | Button-only dropdown — can't navigate to /admissions directly from nav | Info |
| /programs | Breadcrumbs | Present (consistent with other section landing pages) | No breadcrumbs on /programs (other sections have them) | Info |
| /programs/* | Breadcrumb format | "Home / Programs / Page" (matches /about/*, /admissions/*) | Uses "Programs > Page Name" format — different separator, no "Home" prefix | Info |
| /admissions/apply | FAQ section | Interactive accordion (expand/collapse) | Static text — all answers visible, no accordion behavior | Info |
| /admissions/apply | Application form | Inline form or clear CTA | No inline form; "Start Your Application" links to external Formstack (opens new tab with rel="noopener noreferrer") — functional but worth noting | Info |
| All pages | Navigation, CTAs, external links | Working correctly | PASS — Logo links home, dropdowns work, all CTA buttons navigate correctly, all external links use target="_blank" with proper rel attributes | Info (Pass) |
| All pages | Social media links | 5 platforms working | PASS — Facebook, Instagram, YouTube, TikTok, Pinterest all link to correct profiles | Info (Pass) |
| All pages | Footer copyright | Current year | PASS — Shows "2026 Interior Designers Institute. All rights reserved." | Info (Pass) |
| All pages | Skip to content | Accessible skip link | PASS — targets #main-content which exists | Info (Pass) |

---

## Pages Tested

1. `/` (Homepage)
2. `/about`
3. `/about/accreditation`
4. `/about/faculty` — **404**
5. `/about/history`
6. `/about/staff` — **404**
7. `/admissions`
8. `/admissions/apply`
9. `/admissions/financial-aid`
10. `/admissions/tuition`
11. `/campus-life`
12. `/contact`
13. `/disclosures`
14. `/programs`
15. `/programs/associate-of-arts`
16. `/programs/bachelor-of-arts`
17. `/programs/certificate`
18. `/programs/compare`
19. `/programs/master-interior-architecture`

---

## Improvement Suggestions

### UX
- Add a branded custom 404 page with IDI styling, navigation, and a "Return Home" button
- Add a contact inquiry form to the /contact page (name, email, phone, message)
- Make the FAQ section on /admissions/apply interactive with expand/collapse accordion
- Make "Admissions" nav item both a link and a dropdown trigger
- Standardize breadcrumb format across all pages (separator and "Home" prefix)

### Performance
- Add `width: "auto"` / `height: "auto"` to footer Image components to resolve Next.js warnings
- Ensure homepage fill-image parent containers have explicit heights
- Run `next build` and test Lighthouse scores for production performance baseline

### SEO & Accessibility
- Set initial counter values in HTML to their final values (e.g., "40+ Years") so screen readers and crawlers get correct content
- Add word spacing or aria-label to hero heading so it reads "DESIGN YOUR FUTURE" not "DESIGNYOURFUTURE"
- Add descriptive alt text to hero accreditation badge images
- Replace double dashes (--) with proper em dashes (—) in body copy
- Ensure all images have meaningful alt text

### Mobile
- Add `overflow-x: hidden` to body/main wrapper as immediate fix for horizontal scroll
- Refactor hero image containers to not overflow viewport (fix root cause)
- Remove or constrain decorative blur elements at mobile breakpoints
- Increase minimum body font size to 14px for mobile viewports
- Add padding to all interactive elements to meet 44px minimum touch target
- Consider responsive card layout for tuition tables on mobile (like /programs/compare does for program cards)

---

## Methodology

- **Desktop:** 1440x900
- **Tablet:** 768x1024
- **Mobile:** 375x812 (portrait) + 812x375 (landscape check)
- **Pages:** 19 via internal link crawl (max 30)
- **Agents:** 6 parallel sub-agents testing Content, Desktop, Tablet, Mobile, Performance, and Functionality
- **Tools:** Chrome browser automation (screenshots, DOM inspection, network monitoring, console logging, accessibility tree analysis)

### Severity Definitions
- **Critical** = Blocks launch or visible embarrassment (broken pages, placeholder text, JS animation failures, missing legal documents, 404 errors)
- **Warning** = Fix before client review (touch target sizing, typos, layout issues, slow loads, missing anchors)
- **Info** = Nice to fix (optimization suggestions, minor spacing, breadcrumb consistency)
