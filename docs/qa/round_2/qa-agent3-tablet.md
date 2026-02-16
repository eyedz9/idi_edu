# QA Agent 3 -- Tablet Layout QA (Round 2 Retest)
**Viewport:** 768x1024
**Date:** 2026-02-16
**Browser:** Chrome (via Claude-in-Chrome)
**Device Simulation:** Tablet portrait

---

## Round 1 Retest Summary

| Round 1 Issue | Status | Details |
|---|---|---|
| Homepage hero invisible (GSAP opacity:0) | FIXED | Hero content, text, and CTAs fully visible on load |
| Stats counter broken | PARTIAL | Counter animates but takes 30+ seconds to complete; values eventually correct |
| Apply Now button 36px | FIXED | Now 44px height (105x44) |
| Hamburger menu 40x40 | FIXED | Now 44x44 with aria-label="Open menu" |
| Carousel dots 10x10 no touch area | IMPROVED | Inner dots still 10x10 but button wrapper is 42x42 (p-4 padding); borderline at 42px vs 44px minimum |
| Footer links 17px height | FIXED | All footer links now have min-height: 44px |
| /about/faculty 404 | FIXED | Page loads correctly with full content |
| /about/staff 404 | FIXED | Page loads correctly with full content |

---

## Page-by-Page Findings

### / (Homepage)

| Page | Issue | Details | Severity |
|---|---|---|---|
| / | Stats counter animation too slow | Counter takes 30+ seconds to animate to final values (40+, 4, 15:1, 1000+). Users will see incorrect intermediate values like "2+", "0", "1:1" for extended periods. | Medium |
| / | Carousel dots 42px touch area | Testimonial dot buttons are 42x42px (with p-4 padding on 10x10 inner dots). 2px under the 44px WCAG minimum. | Low |
| / | Breadcrumb "Home" link too small | 39x17px touch target in breadcrumb navigation. | Low |

### /about

| Page | Issue | Details | Severity |
|---|---|---|---|
| /about | Breadcrumb links too small | "Home" (39x17px), "About" breadcrumb links below 44px minimum touch target. | Low |
| /about | No other issues | Layout, text, images all render correctly at 768px. | -- |

### /about/accreditation

| Page | Issue | Details | Severity |
|---|---|---|---|
| /about/accreditation | Breadcrumb links too small | "Home" (39x17), "About" (39x17) -- consistent breadcrumb issue. | Low |
| /about/accreditation | No other issues | Hero, body text, and accreditation info all well-formatted. | -- |

### /about/faculty

| Page | Issue | Details | Severity |
|---|---|---|---|
| /about/faculty | No issues (was 404 in R1) | Page now loads correctly. Faculty listing renders well at tablet width. Hero, breadcrumbs, body text all functional. | -- |

### /about/staff

| Page | Issue | Details | Severity |
|---|---|---|---|
| /about/staff | No issues (was 404 in R1) | Page now loads correctly. Staff directory renders well at tablet width. | -- |

### /about/history

| Page | Issue | Details | Severity |
|---|---|---|---|
| /about/history | Breadcrumb links too small | Same 39x17px breadcrumb issue. | Low |
| /about/history | No other issues | Timeline layout well-adapted for tablet. | -- |

### /admissions

| Page | Issue | Details | Severity |
|---|---|---|---|
| /admissions | Breadcrumb "Home" link too small | 39x17px. | Low |
| /admissions | No other issues | Five steps layout, hero, CTA buttons all render correctly. | -- |

### /admissions/apply

| Page | Issue | Details | Severity |
|---|---|---|---|
| /admissions/apply | "View all requirements" links 20px tall | Four inline "View all requirements" links are only 164x20px -- below 44px minimum. | Medium |
| /admissions/apply | Breadcrumb links too small | "Home" (39x17), "Admissions" (76x17). | Low |
| /admissions/apply | Footer email input 41px, Join button 41px | Newsletter form elements are 41px height, 3px under 44px minimum. | Low |

### /admissions/financial-aid

| Page | Issue | Details | Severity |
|---|---|---|---|
| /admissions/financial-aid | Inline "studentaid.gov" link 17px | Body text link for external resource is only 102x17px. Inline text link -- lower severity as per WCAG inline link guidance. | Low |
| /admissions/financial-aid | Breadcrumb links too small | "Home" (39x17), "Admissions" (76x17). | Low |

### /admissions/tuition

| Page | Issue | Details | Severity |
|---|---|---|---|
| /admissions/tuition | Breadcrumb links too small | "Home" (39x17), "Admissions" (76x17). | Low |
| /admissions/tuition | No other issues | Tuition tables render cleanly at 768px. No horizontal overflow. | -- |

### /campus-life

| Page | Issue | Details | Severity |
|---|---|---|---|
| /campus-life | Breadcrumb "Home" link too small | 39x17px. | Low |
| /campus-life | No other issues | Hero, location section, images all render well. | -- |

### /contact

| Page | Issue | Details | Severity |
|---|---|---|---|
| /contact | Social media icons 40x40px | Five social icons (Facebook, Instagram, YouTube, TikTok, Pinterest) in main content area are 40x40px -- 4px under 44px minimum. Note: footer social icons are correctly 44x44. | Medium |
| /contact | "Get Directions" button 40px tall | Button is 132x40px with padding: 8px 16px. Needs 44px minimum height. | Medium |
| /contact | Phone/email links 17-19px tall | "(949) 675-4451" (105x17) and "contact@idi.edu" (110x17) are inline links with no min-height. | Low |
| /contact | Breadcrumb "Home" link too small | 39x17px. | Low |

### /disclosures

| Page | Issue | Details | Severity |
|---|---|---|---|
| /disclosures | Inline "our contact page" link 17px | Body text inline link is 113x17px. | Low |
| /disclosures | Breadcrumb "Home" link too small | 39x17px. | Low |
| /disclosures | No other issues | Document listing and layout well-formatted at tablet width. | -- |

### /programs

| Page | Issue | Details | Severity |
|---|---|---|---|
| /programs | "Learn More" buttons 36px tall | Four "Learn More" buttons in program cards are 637x36px -- 8px under 44px minimum. | Medium |
| /programs | "Learn More" text links 19px | Overlapping anchor links at 637x19px. | Low |
| /programs | "Compare Programs" link 19px | 201x19px touch target. | Low |

### /programs/associate-of-arts

| Page | Issue | Details | Severity |
|---|---|---|---|
| /programs/associate-of-arts | "Learn More" links in related programs 20px | Three related program "Learn More" links are 641x20px. | Low |
| /programs/associate-of-arts | Breadcrumb "Programs" link 20px | 64x20px touch target. | Low |

### /programs/bachelor-of-arts

| Page | Issue | Details | Severity |
|---|---|---|---|
| /programs/bachelor-of-arts | Same as associate-of-arts | "Learn More" links 641x20px, breadcrumb 64x20px. | Low |

### /programs/certificate

| Page | Issue | Details | Severity |
|---|---|---|---|
| /programs/certificate | Same as associate-of-arts | "Learn More" links 641x20px, breadcrumb 64x20px. | Low |

### /programs/compare

| Page | Issue | Details | Severity |
|---|---|---|---|
| /programs/compare | "Learn More" buttons 36px | Four program "Learn More" buttons at 641x36px. | Medium |
| /programs/compare | "Learn More" text links 19px | Four overlapping anchor links at 641x19px. | Low |
| /programs/compare | Good: Programs stack vertically | Comparison table correctly collapses to stacked cards on tablet. No horizontal overflow. | -- |

### /programs/master-interior-architecture

| Page | Issue | Details | Severity |
|---|---|---|---|
| /programs/master-interior-architecture | Same as other program pages | "Learn More" links 641x20px, breadcrumb 64x20px. | Low |

---

## Global Issues (Across All Pages)

| Issue | Pages Affected | Details | Severity |
|---|---|---|---|
| Breadcrumb links below 44px touch target | All pages with breadcrumbs (17 of 19) | "Home", "About", "Admissions", "Programs" breadcrumb links are 17-20px height. Inline navigation links within text. | Low |
| Footer newsletter input 41px | All 19 pages | Email input (252x41) and Join button (61x41) are 3px under 44px minimum. | Low |
| No horizontal overflow | All 19 pages | Zero pages have horizontal scroll issues at 768px. | PASS |
| Hamburger menu present and correct | All 19 pages | 44x44px hamburger icon with proper aria-label. Desktop nav hidden. | PASS |
| Text readability | All 19 pages | Body text is legible, headings scale well, contrast is good against dark backgrounds. | PASS |
| Image scaling | All 19 pages | Hero images, program cards, and gallery images all scale appropriately. | PASS |
| Grid/column collapse | All 19 pages | Grids collapse from multi-column to 1-2 columns appropriately at 768px. | PASS |

---

## Severity Summary

| Severity | Count | Details |
|---|---|---|
| Critical | 0 | All Round 1 critical issues resolved |
| High | 0 | -- |
| Medium | 5 unique issues | Stats counter slow animation; /contact social icons 40px; /contact Get Directions 40px; /programs Learn More buttons 36px; /admissions/apply View Requirements links 20px |
| Low | 12+ instances | Breadcrumb touch targets (global), footer form 41px (global), inline text links, carousel dots 42px |
| PASS | 5 categories | No horizontal overflow, hamburger menu correct, text readability, image scaling, grid collapse |

---

## Recommendations

1. **Stats counter animation** -- Reduce animation duration from ~40s to 2-3s. Alternatively, use IntersectionObserver to start counting only when section enters viewport, and complete within a reasonable timeframe.
2. **"Learn More" buttons on /programs and /programs/compare** -- Increase min-height to 44px. Currently 36px.
3. **Contact page social icons** -- Match footer pattern at 44x44px (currently 40x40 in main content).
4. **Contact page "Get Directions" button** -- Increase height from 40px to 44px (increase vertical padding from 8px to 10px or add min-height: 44px).
5. **Breadcrumb links** -- Consider adding min-height: 44px or increased padding for touch friendliness on tablet/mobile. This is a global component issue.
6. **Footer newsletter form** -- Increase input and button height from 41px to 44px.
7. **"View all requirements" links on /admissions/apply** -- Add min-height: 44px or convert to button-style links.
8. **Carousel dots** -- Increase from 42px to 44px touch area (increase padding from p-4 to p-[11px]).
