# Agent 5 -- Performance & Technical QA Report

**Date:** 2026-02-16
**Target:** http://localhost:3000 (Next.js 16 + Turbopack dev server)
**Pages Tested:** 19/19

---

## Summary

- **2 pages return HTTP 404** (Critical): `/about/faculty` and `/about/staff` do not exist
- **0 JavaScript runtime errors** across all working pages
- **0 failed network requests** (excluding the 2 x 404 page documents)
- **0 mixed HTTP/HTTPS content issues** across all pages
- **0 CORS errors** detected
- **0 pages exceeded 3-second load time** (fastest: 203ms, slowest: 479ms)
- **1 recurring dev-only script over 200KB** (next-devtools, 219KB -- dev mode only, not shipped to production)
- **Next.js Image component warnings** appear on every page (footer logo images missing `width: "auto"` / `height: "auto"`)
- **Homepage has additional fill-image height warnings** (5 images with `fill` and a parent with height 0)

---

## Page Load Performance Summary

| Page | Status | DOMContentLoaded (ms) | Load Complete (ms) |
|------|--------|----------------------|-------------------|
| `/` | 200 | 125 | 264 |
| `/about` | 200 | 76 | 364 |
| `/about/accreditation` | 200 | 82 | 283 |
| `/about/faculty` | **404** | 67 | 216 |
| `/about/history` | 200 | 75 | 292 |
| `/about/staff` | **404** | 63 | 203 |
| `/admissions` | 200 | 104 | 316 |
| `/admissions/apply` | 200 | 79 | 279 |
| `/admissions/financial-aid` | 200 | 211 | 479 |
| `/admissions/tuition` | 200 | 97 | 261 |
| `/campus-life` | 200 | 75 | 358 |
| `/contact` | 200 | 72 | 271 |
| `/disclosures` | 200 | 101 | 248 |
| `/programs` | 200 | 197 | 429 |
| `/programs/associate-of-arts` | 200 | 131 | 347 |
| `/programs/bachelor-of-arts` | 200 | 251 | 422 |
| `/programs/certificate` | 200 | 179 | 334 |
| `/programs/compare` | 200 | 87 | 247 |
| `/programs/master-interior-architecture` | 200 | 105 | 278 |

---

## Findings Table

| Page | Issue Type | Details | Severity |
|------|-----------|---------|----------|
| `/about/faculty` | Missing Page (404) | Page returns HTTP 404 -- route does not exist. Shows Next.js default "404: This page could not be found." error page. | Critical |
| `/about/staff` | Missing Page (404) | Page returns HTTP 404 -- route does not exist. Shows Next.js default "404: This page could not be found." error page. | Critical |
| `/` | Image Warning | Image with src `photo-1750420556288-d0e32a6f517b` has "fill" and a height value of 0 (parent element has no set height) | Warning |
| `/` | Image Warning | Image with src `photo-1768397003905-a202ea6325f5` has "fill" and a height value of 0 (parent element has no set height) | Warning |
| `/` | Image Warning | Image with src `photo-1761116186680-4c1da2eb416b` has "fill" and a height value of 0 (parent element has no set height) | Warning |
| `/` | Image Warning | Image with src `photo-1741852197045-cc35920a3aa0` has "fill" and a height value of 0 (parent element has no set height) | Warning |
| `/` | Image Warning | Image with src `premium_photo-1758530086086-b40ba4e569ca` has "fill" and a height value of 0 (parent element has no set height) | Warning |
| `(all pages)` | Image Warning | `ACCCS_logo.png` -- has width or height modified but not the other; missing `width: "auto"` or `height: "auto"` to maintain aspect ratio | Warning |
| `(all pages)` | Image Warning | `bppe-logo.png` -- has width or height modified but not the other; missing `width: "auto"` or `height: "auto"` to maintain aspect ratio | Warning |
| `(all pages)` | Image Warning | `cida_logo.png` -- has width or height modified but not the other; missing `width: "auto"` or `height: "auto"` to maintain aspect ratio | Warning |
| `(all pages)` | Large Script (dev-only) | `next-devtools` script is 219KB (only loaded in dev mode, not shipped to production) | Info |
| `(all pages)` | Large Scripts (dev-only) | `react-dom` 178KB, `next/dist/client` 120KB, `node_modules` bundle 162KB (all dev-mode chunks, not production sizes) | Info |
| `/admissions/financial-aid` | Slower Load | Highest load time at 479ms (still well under 3s threshold) | Info |
| `/programs/bachelor-of-arts` | Slower Load | DOMContentLoaded at 251ms is highest across all pages (still well under threshold) | Info |

---

## Detailed Analysis

### Critical: Missing Pages (404)

Two pages from the expected 19-page sitemap return 404 errors:

1. **`/about/faculty`** -- No `page.tsx` exists at `src/app/about/faculty/`. The route is not defined in the Next.js app router.
2. **`/about/staff`** -- No `page.tsx` exists at `src/app/about/staff/`. The route is not defined in the Next.js app router.

Both pages still render the site layout (header/footer) but show the Next.js default 404 content. These need to be created or the navigation links to them need to be removed.

### Warning: Next.js Image Component Warnings

**Footer logos (all 17 working pages):**
Three footer accreditation logos (`ACCCS_logo.png`, `bppe-logo.png`, `cida_logo.png`) trigger Next.js Image warnings on every page. The issue is that only one dimension (width or height) is being set while the other is not, without including `width: "auto"` or `height: "auto"` in CSS to preserve the aspect ratio.

**Fix:** Add `style={{ width: 'auto', height: 'auto' }}` or the equivalent Tailwind class to these `<Image>` components, or set both width and height props explicitly.

**Homepage fill images (/ only):**
Five images on the homepage use the `fill` prop but their parent containers have a computed height of 0. This means the images may not be visible or may not render at the correct size.

**Fix:** Ensure each parent element of a `fill`-mode `<Image>` has an explicit height set (e.g., via `h-64`, `aspect-ratio`, or a fixed pixel height).

### Info: Dev-Mode Script Sizes

The largest script in dev mode is `next-devtools` at 219KB. Other large dev bundles include `react-dom` (178KB), the Next.js client runtime (120KB), and `node_modules` bundles (162KB). These are **dev-mode only** and will be tree-shaken, minified, and split in production builds. No action needed.

### Network Health

- **Zero failed network requests** across all 17 working pages (all resources returned 200 or 304)
- **Zero mixed content** -- no HTTP resources on an HTTPS page (site is running on HTTP localhost, so N/A for production)
- **Zero CORS errors** detected
- **All fonts loading correctly** -- two woff2 files load on every page at 200
- **All images loading** -- Unsplash images are proxied through `/_next/image` and all return 200 or 304
- **CSS loading** -- single CSS bundle loads on every page at 200

### Performance Assessment

All 17 working pages load in **under 500ms** in dev mode. The fastest page is `/about/staff` at 203ms (404 page, minimal content). The slowest is `/admissions/financial-aid` at 479ms. In a production build with optimization, caching, and CDN, these times would be significantly faster.

---

## Recommendations

1. **[Critical] Create `/about/faculty` and `/about/staff` pages** or remove their links from navigation
2. **[Warning] Fix footer Image components** -- add `width: "auto"` / `height: "auto"` style to `ACCCS_logo.png`, `bppe-logo.png`, and `cida_logo.png`
3. **[Warning] Fix homepage fill-image containers** -- ensure parent elements of fill-mode images have explicit heights
4. **[Info] Run production build** (`next build`) and test Lighthouse scores for production-grade performance metrics
