# QA Report: Functionality & Interactions
**Site:** localhost:3000 (IDI Website)
**Date:** 2026-02-16
**Agent:** QA Agent 6 -- Functionality & Interactions
**Viewport:** 1440x900

---

## Summary

- **Pages Tested:** 19 (17 working + 2 returning 404)
- **Critical Issues:** 5
- **Warnings:** 5
- **Info:** 7

---

## Findings

| Page | Element | Expected | Actual | Severity |
|------|---------|----------|--------|----------|
| /about/faculty | Page | Page loads with faculty listing | Returns 404 -- "This page could not be found." Default Next.js 404, not a custom branded page | Critical |
| /about/staff | Page | Page loads with staff directory | Returns 404 -- "This page could not be found." Default Next.js 404, not a custom branded page | Critical |
| /about | Link to /about/faculty | Links to working faculty page | Links to /about/faculty which returns 404; link text: "Faculty -- Industry-connected professionals..." | Critical |
| /about | Link to /about/staff | Links to working staff page | Links to /about/staff which returns 404; link text: "Staff Directory -- Meet the dedicated team..." | Critical |
| /disclosures | All PDF document links (25 files) | PDF documents load when clicked | ALL 25 PDF files return 404. Includes: idi-catalog.pdf, school-performance-fact-sheet.pdf, student-handbook.pdf, enrollment-agreement.pdf, accsc-accreditation-letter.pdf, accsc-complaint-procedure.pdf, accsc-annual-report.pdf, bppe-annual-report.pdf, bppe-performance-fact-sheet.pdf, bppe-notice-prospective-students.pdf, strf-disclosure.pdf, net-price-calculator.pdf, financial-aid-consumer-info.pdf, sap-policy.pdf, return-title-iv-policy.pdf, ge-disclosure-certificate.pdf, ge-disclosure-aa.pdf, ge-disclosure-ba.pdf, ge-disclosure-mia.pdf, cida-accreditation-ba.pdf, program-outline-certificate.pdf, program-outline-aa.pdf, program-outline-ba.pdf, program-outline-mia.pdf | Critical |
| Nav dropdown (Programs) | "Compare Programs" link | Should link to /programs/compare | Links to /programs instead of /programs/compare | Warning |
| Nav dropdown (Programs) | "View All" link | Could link to /programs/compare or similar | Links to /programs (same destination as "All Programs") -- redundant | Warning |
| Footer (all pages) | "Privacy Policy" link | Should scroll to privacy section on /disclosures | Links to /disclosures#privacy but no element with id="privacy" exists on the page; anchor target missing | Warning |
| Footer (all pages) | Email subscription form | Form should have action URL and input name attribute | Form has no action attribute (submits to current page URL), and email input has no name attribute -- form data cannot be properly submitted to a server | Warning |
| /contact | Contact/inquiry form | Expected a contact form with name, email, phone, message fields | No contact/inquiry form exists on the page; contact page only shows phone, email, address, and department contact cards. The only form is the footer newsletter subscription | Warning |
| /this-page-does-not-exist | Custom 404 page | Custom branded 404 page with navigation help, home link, search | Shows default Next.js "404 | This page could not be found." with no back-to-home link, no search, no helpful navigation. Nav header present but no footer | Info |
| / (Homepage) | Breadcrumbs | No breadcrumbs expected on homepage | No breadcrumbs present (correct) | Info |
| /programs | Breadcrumbs | Breadcrumbs present for consistency | No breadcrumbs on /programs page; other section landing pages (about, admissions, contact, etc.) have breadcrumbs | Info |
| /programs/* (all subpages) | Breadcrumbs | Breadcrumbs present (e.g., "Home > Programs > Certificate") | Breadcrumbs use "Programs > [Page Name]" format with ">" separator instead of "/" used on other pages; breadcrumbs do not include "Home" as first item (inconsistent with /about/*, /admissions/* pages) | Info |
| /admissions/apply | Application form | Expected an inline application form | No application form on page; "Start Your Application" button links to external Formstack URL (interiordesignersinstitute.formstack.com). Link opens in new tab with noopener noreferrer -- correct behavior for external form | Info |
| /admissions/apply | FAQ section | Expected interactive accordion (expand/collapse) | FAQs are static text (all answers visible); no accordion/expand-collapse behavior. No details/summary elements, no aria-expanded attributes on FAQ items | Info |
| Nav (Admissions) | Admissions dropdown button | Expected clickable link to /admissions as well as dropdown | Admissions is a button-only dropdown; no way to navigate to /admissions from the nav bar directly. Accessible only via footer "Admissions" link or breadcrumbs | Info |

---

## Test Details

### A. NAVIGATION

| Test | Result |
|------|--------|
| Logo links to homepage | PASS -- Logo (href="/") navigates to / correctly with aria-label "Interior Designers Institute - Home" |
| Programs dropdown opens | PASS -- Hover/click reveals mega-menu with Certificate, Associate, Bachelor, Master, All Programs, Compare Programs, View All, and Next Class info |
| Admissions dropdown opens | PASS -- Hover/click reveals mega-menu with How to Apply, Tuition & Fees, Financial Aid, Apply Now button, and Next Class info |
| Campus Life nav link | PASS -- Direct link to /campus-life, navigates correctly |
| About nav link | PASS -- Direct link to /about, navigates correctly |
| Contact nav link | PASS -- Direct link to /contact, navigates correctly |
| Breadcrumb "Home" links | PASS -- Tested on /about/accreditation; "Home" breadcrumb navigates to / |
| Breadcrumb parent links | PASS -- "About" breadcrumb on /about/accreditation navigates to /about |
| Skip to content link | PASS -- "Skip to content" link targets #main-content which exists as the main element |

### B. LINKS

| Test | Result |
|------|--------|
| No empty href links | PASS -- No href="" or href="#" links found across any pages |
| External links have target="_blank" | PASS -- All external links (social media, FAFSA, Formstack, Google Maps) use target="_blank" |
| Formstack links have rel="noopener noreferrer" | PASS -- "Start Your Application" external links properly secured |
| Social media links (footer) | PASS -- Facebook, Instagram, YouTube, TikTok, Pinterest all link to correct profiles with target="_blank" |
| Social media links (contact page) | PASS -- Same 5 social platforms present and functional |
| Internal dead links | FAIL -- /about links to /about/faculty (404) and /about/staff (404) |
| PDF links (disclosures) | FAIL -- All 25 PDF document links return 404 |
| Anchor link /disclosures#privacy | FAIL -- Target element id="privacy" does not exist |
| Phone links (tel:) | PASS -- All phone links use tel:9496754451 format |
| Email links (mailto:) | PASS -- All email links use mailto:contact@idi.edu |

### C. BUTTONS & CTAs

| Button/CTA | Location | Destination | Result |
|------------|----------|-------------|--------|
| Apply Now (nav) | Header | /admissions/apply | PASS |
| Request Info (nav) | Header | /contact | PASS |
| Explore Programs | Homepage hero | /programs | PASS |
| Request Information | Homepage hero | /contact | PASS |
| Start Your Application | /admissions/apply | External Formstack (target="_blank") | PASS |
| View Tuition | /admissions/apply | /admissions/tuition | PASS |
| Financial Aid | /admissions/apply | /admissions/financial-aid | PASS |
| Apply Now (CTA section) | Homepage CTA | /admissions | PASS (goes to /admissions, not /admissions/apply) |
| Get Directions | /contact | Google Maps (target="_blank") | PASS |
| Join (footer) | Footer | Submits form (no action URL) | PARTIAL -- validates email required, but form has no backend action |
| View all requirements | /admissions/apply | /admissions | PASS |

### D. FORMS

| Form | Location | Details | Result |
|------|----------|---------|--------|
| Newsletter signup | Footer (all pages) | Single email input (type="email", required), "Join" submit button | PARTIAL -- Validation works (native browser required check for empty field), but input lacks name attribute and form lacks action URL. Label "Email address" exists as sr-only. |
| Contact form | /contact | Expected full inquiry form | FAIL -- No contact form exists on this page. Only department contact info displayed. |
| Application form | /admissions/apply | Expected inline form | N/A -- Uses external Formstack service via link. No on-site form. |

### E. INTERACTIVE ELEMENTS

| Element | Location | Result |
|---------|----------|--------|
| Programs mega-menu dropdown | Nav | PASS -- Opens on hover/click, shows all 4 programs with descriptions, links work |
| Admissions mega-menu dropdown | Nav | PASS -- Opens on hover/click, shows How to Apply, Tuition, Financial Aid with descriptions |
| Dropdown close on Escape | Nav | PASS -- Pressing Escape key closes dropdown menus |
| FAQ items on Apply page | /admissions/apply | INFO -- Not interactive; displayed as static text with all answers visible (no accordion) |
| Google Maps embed | /contact | PASS -- Interactive embedded map loads correctly |
| Scroll animations | Various pages | PASS -- Observed fade-in animations on scroll |
| Carousel/slider | N/A | No carousels or sliders found on any page |
| Modals/popups | N/A | No modals or popups triggered during testing |
| Tabbed content | N/A | No tabbed interfaces found on any page |

### F. 404 PAGE

| Test | Result |
|------|--------|
| /this-page-does-not-exist | Shows default Next.js 404 -- "404 | This page could not be found." Navigation header present, but no footer, no helpful links, no branded design |
| /about/faculty | Same default 404 page |
| /about/staff | Same default 404 page |

### G. FOOTER

| Test | Result |
|------|--------|
| Footer present on all pages | PASS -- Footer present on all 17 working pages (not on 404 page) |
| Quick Links: Programs | PASS -- Links to /programs |
| Quick Links: Admissions | PASS -- Links to /admissions |
| Quick Links: Campus Life | PASS -- Links to /campus-life |
| Quick Links: About | PASS -- Links to /about |
| Resources: Disclosures | PASS -- Links to /disclosures |
| Resources: Financial Aid | PASS -- Links to /admissions/financial-aid |
| Resources: Privacy Policy | FAIL -- Links to /disclosures#privacy but anchor target missing |
| Resources: Accreditation | PASS -- Links to /about/accreditation |
| Social: Facebook | PASS -- Links to facebook.com/interiordesignersinstitute/ (target="_blank") |
| Social: Instagram | PASS -- Links to instagram.com/interiordesignersinstitute/ (target="_blank") |
| Social: YouTube | PASS -- Links to youtube.com/channel/UCI4GyaEGMw_sdJhaMwe_faA (target="_blank") |
| Social: TikTok | PASS -- Links to tiktok.com/@idi_newportbeach (target="_blank") |
| Social: Pinterest | PASS -- Links to pinterest.com/idinewportbeach/ (target="_blank") |
| Copyright year | PASS -- Shows "2026 Interior Designers Institute. All rights reserved." |
| Accreditation badges | PASS -- ACCSC, BPPE, and CIDA logos present in footer |
| Phone number | PASS -- (949) 675-4451 with tel: link |
| Email | PASS -- contact@idi.edu with mailto: link |
| Address | PASS -- 1061 Camelback Street, Newport Beach, CA 92660 |

---

## Page Status Summary

| Page | HTTP Status | Breadcrumbs | Footer | Notes |
|------|-------------|-------------|--------|-------|
| / | 200 | None (homepage) | Yes | Working |
| /about | 200 | Home / About | Yes | Contains dead links to /about/faculty and /about/staff |
| /about/accreditation | 200 | Home / About / Accreditation | Yes | Working |
| /about/faculty | 404 | N/A | No | Page does not exist |
| /about/history | 200 | Home / About / History | Yes | Working |
| /about/staff | 404 | N/A | No | Page does not exist |
| /admissions | 200 | Home / Admissions | Yes | Working |
| /admissions/apply | 200 | Home / Admissions / Apply | Yes | Working; uses external Formstack |
| /admissions/financial-aid | 200 | Home / Admissions / Financial Aid | Yes | Working |
| /admissions/tuition | 200 | Home / Admissions / Tuition & Fees | Yes | Working |
| /campus-life | 200 | Home / Campus Life | Yes | Working |
| /contact | 200 | Home / Contact | Yes | Working; no contact form |
| /disclosures | 200 | Home / Disclosures | Yes | All 25 PDF links are 404 |
| /programs | 200 | None | Yes | Missing breadcrumbs |
| /programs/associate-of-arts | 200 | Programs > Associate of Arts | Yes | Different breadcrumb format |
| /programs/bachelor-of-arts | 200 | Programs > Bachelor of Arts | Yes | Different breadcrumb format |
| /programs/certificate | 200 | Programs > Certificate Course | Yes | Different breadcrumb format |
| /programs/compare | 200 | Programs > Compare Programs | Yes | Different breadcrumb format |
| /programs/master-interior-architecture | 200 | Programs > Master of Interior Architecture | Yes | Different breadcrumb format |

---

## Priority Recommendations

### Critical (Must Fix)
1. **Create /about/faculty and /about/staff pages** -- or remove the links from the /about page. These are prominent navigation links that lead to 404 errors.
2. **Add PDF documents to /documents/ directory** -- All 25 disclosure PDFs are missing. For an accredited educational institution, these documents are legally required to be accessible.
3. **Create a custom 404 page** -- Replace the default Next.js 404 with a branded page that includes navigation, a "Go Home" button, search functionality, and the site footer.

### Warning (Should Fix)
4. **Fix "Compare Programs" nav link** -- Change href from `/programs` to `/programs/compare` in the Programs dropdown.
5. **Add #privacy anchor to /disclosures page** -- Add `id="privacy"` to the privacy policy section so the footer "Privacy Policy" link scrolls correctly.
6. **Fix footer email form** -- Add `name="email"` attribute to the input and a proper `action` URL for the form submission endpoint.
7. **Add a contact/inquiry form** -- The contact page has no way for visitors to submit questions. Consider adding a name/email/message form.

### Info (Nice to Have)
8. **Standardize breadcrumb format** -- Programs pages use ">" separator without "Home"; other pages use "/" separator with "Home". Unify format across the site.
9. **Add breadcrumbs to /programs landing page** -- Other landing pages (about, admissions, campus-life) have breadcrumbs.
10. **Make FAQ section interactive** -- Convert the static FAQ on /admissions/apply into an accordion for better UX.
11. **Make Admissions nav item also a link** -- Currently a button-only dropdown. Users expect to click "Admissions" to reach /admissions.
