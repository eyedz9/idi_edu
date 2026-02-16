# QA Report: Content & Copy - IDI Website
**Date:** 2026-02-16
**Tester:** QA Agent 1 (Content & Copy)
**Site:** http://localhost:3000
**Pages Tested:** 19 / 19

---

## Summary

- **Critical issues:** 5
- **Warning issues:** 8
- **Info issues:** 8
- **Total findings:** 21

---

## Findings

| # | Page | Issue | Text/Details | Severity |
|---|------|-------|-------------|----------|
| 1 | `/about/faculty` | **Page returns 404** | The entire page is missing. Returns Next.js default 404 error: "This page could not be found." The `/about` page links directly to `/about/faculty` under "Learn More About IDI" section. | Critical |
| 2 | `/about/staff` | **Page returns 404** | The entire page is missing. Returns Next.js default 404 error. The `/about` page links directly to `/about/staff` under "Staff Directory - Learn More". | Critical |
| 3 | `/about/history` | **Placeholder photo text visible on page** | Six placeholder strings are rendered as visible text: "[Photo: IDI campus exterior, Newport Beach]", "[Photo: Students in design studio]", "[Photo: Design center visit]", "[Photo: Graduation ceremony]", "[Photo: Faculty mentoring session]", "[Photo: Student portfolio presentation]" | Critical |
| 4 | `/` (homepage) | **Empty alt text on accreditation logos in hero** | Two images in the hero accreditation badges have `alt=""`: `ACCCS_logo.png` and `cida_logo.png`. These are informational images that should have descriptive alt text (the footer versions correctly have alt="ACCSC Accredited" and alt="CIDA Accredited"). | Warning |
| 5 | `/` (homepage) | **Animated counter shows "0+" for "Years of Excellence"** | The stat counter renders as `0+` in the DOM before the scroll-triggered animation fires. Screen readers and search engines will read "0+ Years of Excellence" instead of "40+". Similarly, the second stats section shows "0+ Years of Excellence", "0 Programs", "0:1 Ratio", "0s Graduates". | Warning |
| 6 | `/about` | **Animated counters show "0" values in DOM** | Same issue as homepage: "0+ Years Strong", "0 Programs", "0:1 Student-to-Faculty Ratio", "0s Graduates Designing" -- all read as zero to screen readers/crawlers before animation triggers. | Warning |
| 7 | `/about` | **Double dashes used instead of em dashes** | Text uses `--` (two hyphens) instead of proper em dashes in two locations: "Every aspect of our institution -- from our ACCSC..." and "Discover the program that fits your goals -- from a 12-week certificate..." | Info |
| 8 | `/campus-life` | **Double dashes used instead of em dashes** | "Newport Beach is far more than a beautiful coastal city -- it is one of Southern California's premier design destinations." | Info |
| 9 | `/programs/certificate` | **Class start date inconsistency** | Certificate schedule states "May 11, 2026" as start date, but every other page on the site (homepage hero, admissions, apply page) says classes start "May 5". Either May 5 is the general term start and May 11 is the specific Certificate start, or this is a conflict. | Warning |
| 10 | Sitewide (all pages) | **ACCSC logo filename misspelled** | The ACCSC logo file is named `ACCCS_logo.png` (missing the S, has double C instead). The acronym is "ACCSC" (Accrediting Commission of Career Schools and Colleges) but the file is "ACCCS". This appears in footer on every page and in the hero on the homepage. While the alt text is correct ("ACCSC Accredited") in the footer, the filename itself could cause confusion in code maintenance. | Info |
| 11 | `/about` | **Broken internal links to 404 pages** | The "Learn More About IDI" section contains four cards. Two of them link to pages that return 404: "Faculty" links to `/about/faculty` and "Staff Directory" links to `/about/staff`. Users clicking these get a dead-end error page. | Critical |
| 12 | `/about/history` | **Timeline ends at 2024, not updated for 2026** | The history timeline's most recent entry is "2024 - Forty years strong" and the bottom timeline also ends at "2024 - Celebrating over 40 years". This should be updated or extended to mention 2025-2026 milestones, or at minimum reference the current year context. | Warning |
| 13 | `/programs/compare` | **Certificate "Career Focus" description inconsistent** | On the Compare page, the Certificate Career Focus is listed as "Personal enrichment" while AA/BA/MIA have detailed career outcome descriptions. The Certificate program page itself says "your springboard, not your ceiling" and mentions launching design businesses. The "Personal enrichment" label undersells it compared to the detailed page copy. | Info |
| 14 | `/` (homepage) | **"DESIGNYOURFUTURE" runs together in text extraction** | The hero headline text "DESIGN YOUR FUTURE" renders as "DESIGNYOURFUTURE" in the extracted page text, suggesting the words may be separate spans/divs without proper spacing for screen readers. | Warning |
| 15 | `/programs/bachelor-of-arts` | **BA "Units: 180 quarter units" is cumulative total, potentially confusing** | The BA page lists "Units: 180 quarter units" in the hero and quick facts. This is the cumulative total (AA 90 + BA 90) but could mislead prospective students since the BA-specific coursework is 45 units (9 courses at ~5 units avg). The tuition section clarifies this but the hero does not. | Info |
| 16 | `/` (homepage) | **Testimonial author may be fictional** | "Sarah Mitchell, Principal Designer, Mitchell Interiors, BA in Interior Design" -- this testimonial should be verified as a real graduate. If fictional/placeholder, it needs to be replaced with an authentic student testimonial. | Warning |
| 17 | `/admissions/financial-aid` | **No hero/header image on page** | The Financial Aid page has no hero image (only the logo in header and footer logos). Other admissions pages (Apply, Tuition) follow a similar minimal pattern, so this may be intentional, but it is visually sparse compared to other sections. | Info |
| 18 | `/contact` | **All 6 department contacts share same email and phone** | All six departments (Admissions, Financial Aid, Student Services, Career Services, Academic Affairs, General Inquiries) list identical contact info: contact@idi.edu and (949) 675-4451. While this may be accurate for a small institution, it makes the department breakdown appear superficial. | Info |
| 19 | `/` (homepage) | **"ACCSC" misspelled as "ACCCS" in hero badge area** | While the visible text says "ACCSC Accredited", the underlying image file used is `ACCCS_logo.png`. If the logo image itself contains the text "ACCCS" this would be a visible misspelling to users. | Critical |
| 20 | `/programs/compare` | **Compare table has no hero image** | The Compare Programs page has no hero image or visual header, just text. It is the only program sub-page without a hero image, making it visually inconsistent with sibling pages. | Info |
| 21 | `/about/history` | **"Our Story" section style inconsistency** | The history page has two narrative sections titled differently: "Milestones - Four Decades of Growth" (timeline) and "Our Story - The IDI Story" (narrative). The repetitive "Our Story / The IDI Story" titling is redundant. | Warning |

---

## Pages Verified Clean (No Issues Found)

| Page | Status | Notes |
|------|--------|-------|
| `/about/accreditation` | Clean | Thorough content, proper alt text, all links and documents listed |
| `/admissions` | Clean | Well-structured, consistent info across sections |
| `/admissions/apply` | Clean | FAQs comprehensive, dates consistent with site (May 5) |
| `/admissions/tuition` | Clean | Detailed tuition breakdowns, all numbers consistent across programs |
| `/programs` | Clean | Program overview consistent with individual program pages |
| `/programs/associate-of-arts` | Clean | 22 courses fully described, tuition matches tuition page |
| `/programs/master-interior-architecture` | Clean | 8 courses fully described, admission requirements clear |
| `/disclosures` | Clean | 24 document links, properly organized by category |

---

## Critical Issues Summary (Requires Immediate Fix)

1. **`/about/faculty`** -- 404 page, linked from `/about` page
2. **`/about/staff`** -- 404 page, linked from `/about` page
3. **`/about/history`** -- 6 placeholder photo text strings visible on page
4. **`/about`** -- Contains links to both 404 pages above (broken navigation)
5. **Sitewide** -- ACCSC logo file named `ACCCS_logo.png`; if the logo image itself contains the misspelling "ACCCS", this is user-facing

---

## Methodology

- Navigated to each of the 19 specified pages using Chrome browser automation
- Extracted full page text using `get_page_text` for content analysis
- Inspected all `<img>` elements for alt text completeness using JavaScript DOM queries
- Checked footer content for copyright year and contact info consistency
- Verified internal links from the About page hub
- Cross-checked dates, tuition figures, and program details across pages for consistency
- Checked for placeholder text, lorem ipsum, broken content markers (undefined, null, [object Object])

**No lorem ipsum, "undefined", "null", or "[object Object]" content found on any page.**
