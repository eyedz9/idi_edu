# QA Agent 1 -- Content & Copy QA (Round 2 Retest)

**Tester:** QA Agent 1 (Content & Copy)
**Date:** 2026-02-16
**Environment:** localhost:3001, Chrome browser
**Pages Tested:** 19 / 19

---

## Round 1 Issue Retest Results

| Round 1 Issue | Page | Status | Notes |
|---|---|---|---|
| /about/faculty returned 404 | /about/faculty | **FIXED** | Page now renders with 8 faculty members, full bios, proper images and alt text |
| /about/staff returned 404 | /about/staff | **FIXED** | Page now renders with 7 staff members, full bios, contact emails, proper images and alt text |
| /about/history had placeholder "[Photo:...]" text | /about/history | **FIXED** | All "[Photo:...]" placeholder text removed. Real images with descriptive alt text now in place (6 gallery images) |
| Stat counters showing "0" | / (Homepage), /about | **FIXED** | Counters animate from 0 to real values (40+, 4, 15:1, 1000s) on scroll. Initial "0" state is the animation start -- values populate correctly |

---

## New Findings (Round 2)

### Critical

| # | Page | Issue | Text/Details | Severity |
|---|---|---|---|---|
| -- | -- | -- | No critical issues found | -- |

### High

| # | Page | Issue | Text/Details | Severity |
|---|---|---|---|---|
| 1 | / (Homepage) | Missing alt text on hero accreditation badges | ACCSC logo (`ACCCS_logo.png`) and CIDA logo (`cida_logo.png`) in the hero section have empty `alt=""` attributes. These are meaningful images (accreditation badges), not decorative, and should have alt text for accessibility. The same logos in the footer DO have alt text ("ACCSC Accredited", "CIDA Accredited"). | High |
| 2 | /contact | Department emails all identical | All 6 department contacts (Admissions, Financial Aid, Student Services, Career Services, Academic Affairs, General) list `contact@idi.edu`. The /about/staff page lists distinct department emails (`admissions@idi.edu`, `financialaid@idi.edu`, `registrar@idi.edu`, `studentservices@idi.edu`, `careers@idi.edu`). Either the contact page should use department-specific emails to match staff page, or the staff page should use the generic email. Currently inconsistent. | High |

### Medium

| # | Page | Issue | Text/Details | Severity |
|---|---|---|---|---|
| 3 | /about | Double hyphens instead of em dashes | Three instances of `--` (double hyphen) used instead of proper em dash character. All other pages use proper em dashes. Affected text: (1) "Every aspect of our institution **--** from our ACCSC and CIDA accreditations" (2) "intentionally small class sizes **--** reflects our dedication" (3) "program that fits your goals **--** from a 12-week certificate" | Medium |
| 4 | /programs/certificate | Heading says "Degree" for non-degree program | "Where This **Degree** Takes You" heading used on the Certificate Course page. The Certificate Course is a Certificate of Completion, not a degree. Should say "Where This Program Takes You" or "Where This Certificate Takes You" for accuracy. | Medium |
| 5 | Global (all pages) | ACCSC logo filename typo | The ACCSC accreditation logo file is named `ACCCS_logo.png` (letters transposed: ACC**CS** instead of ACC**SC**). While not user-facing, this could cause confusion for developers and should be corrected for maintainability. Appears in footer on all 19 pages and in hero on homepage. | Medium |
| 6 | Multiple (/, /about, /about/faculty, /about/staff, /campus-life) | Breadcrumb separator inconsistency | About section pages use `/` as breadcrumb separator (e.g., "Home/About/Faculty"), while Program section pages use `>` (e.g., "Programs>Certificate Course"). Breadcrumb format should be consistent across the entire site. | Medium |

### Low

| # | Page | Issue | Text/Details | Severity |
|---|---|---|---|---|
| 7 | /about | Straight quotes in body copy | The philosophy section uses straight double-hyphens consistently but should also be checked for straight quotes vs. curly quotes for typographic consistency. | Low |
| 8 | /programs (overview) | BA tuition could mislead | BA listed as "Starting Tuition $19,950" without a note that this is the BA-portion only (in addition to $39,900 AA tuition). The individual BA page and tuition page do clarify this, but the programs overview could confuse prospects who see $19,950 and assume that is the total for a bachelor's degree. | Low |
| 9 | /about/history | Timeline ends at 2024 | The most recent milestone is "2024 -- Forty years strong." Consider adding a 2025 or 2026 entry or updating the 2024 entry text to feel current in 2026 (e.g., "Over 40 years strong"). | Low |
| 10 | /admissions/financial-aid | Contact email inconsistency | "Contact Us" section at bottom says "Phone: (949) 675-4451 / Email: contact@idi.edu" but the staff page lists Financial Aid's email as `financialaid@idi.edu`. Minor inconsistency with staff directory. | Low |

---

## Page-by-Page Summary

| # | Page | Status | Notes |
|---|---|---|---|
| 1 | `/` (Homepage) | Pass (with findings) | Missing alt on 2 hero badge images (#1). Stats animate correctly. Copyright 2026. Content solid. |
| 2 | `/about` | Pass (with findings) | Double hyphens instead of em dashes (#3). Stats animate correctly. Good content. |
| 3 | `/about/accreditation` | **Pass** | Comprehensive content. ACCSC, CIDA, BPPE all documented. 7 compliance documents listed. |
| 4 | `/about/faculty` | **Pass** | FIXED from Round 1 (was 404). 8 faculty with bios, credentials, specialties, proper alt text. |
| 5 | `/about/staff` | **Pass** | FIXED from Round 1 (was 404). 7 staff members with roles, bios, department emails. |
| 6 | `/about/history` | **Pass** | FIXED from Round 1 (no more [Photo:...] placeholders). Timeline 1984-2024. 6 gallery images with proper alt text. |
| 7 | `/admissions` | **Pass** | 5-step enrollment process. Requirements for all 4 programs. Clean content. |
| 8 | `/admissions/apply` | **Pass** | Enrollment period, requirements, FAQs all present. No issues found. |
| 9 | `/admissions/financial-aid` | Pass (with finding) | Minor email inconsistency (#10). Content comprehensive with 6 aid types, FAFSA guidance. |
| 10 | `/admissions/tuition` | **Pass** | All 4 programs with detailed breakdowns, payment schedules, payment options. Math checks out. |
| 11 | `/campus-life` | **Pass** | Location, student orgs (ASID, IIDA), gallery, 4 facilities. Good content and imagery. |
| 12 | `/contact` | Pass (with finding) | All department emails generic (#2). Address, phone, fax, hours, school codes all present. |
| 13 | `/disclosures` | **Pass** | 6 categories of documents, privacy policy. Comprehensive and well-organized. |
| 14 | `/programs` | Pass (with finding) | BA tuition display could mislead (#8). 4 programs with key details. |
| 15 | `/programs/certificate` | Pass (with finding) | "Degree" heading for non-degree program (#4). 16 lectures + 8 studios listed. |
| 16 | `/programs/associate-of-arts` | **Pass** | 22 courses with descriptions. Tuition, career paths, all present. |
| 17 | `/programs/bachelor-of-arts` | **Pass** | 9 courses with descriptions. CIDA accreditation noted. BA-only tuition clarified. |
| 18 | `/programs/compare` | **Pass** | Side-by-side comparison of all 4 programs. Data consistent with individual pages. |
| 19 | `/programs/master-interior-architecture` | **Pass** | 8 courses. Part-time schedule. Admission requirements clear. |

---

## Global Checks

| Check | Result |
|---|---|
| Lorem ipsum / placeholder text | **None found** on any page |
| "undefined" / "null" / "[object Object]" | **None found** on any page |
| Copyright year | **2026** -- correct on all pages (footer) |
| Phone number consistency | **(949) 675-4451** -- consistent everywhere |
| Address consistency | **1061 Camelback Street, Newport Beach, CA 92660** -- consistent |
| Email consistency | `contact@idi.edu` used globally; staff page has department-specific emails (see finding #2) |
| Broken/empty pages | **None** -- all 19 pages render with substantial content |
| Outdated dates | Timeline ends 2024 (see finding #9); class start dates show May 5, 2026 (current) |
| Navigation links | Programs, Admissions, Campus Life, About, Contact -- all present and working |

---

## Summary

**Round 1 fixes verified:** 4/4 issues resolved (faculty page, staff page, history placeholders, stat counters).

**New findings:** 10 total
- **Critical:** 0
- **High:** 2 (missing alt text on hero badges, department email inconsistency)
- **Medium:** 4 (double hyphens, "Degree" label on certificate, logo filename typo, breadcrumb inconsistency)
- **Low:** 4 (typography, tuition display, timeline date, email inconsistency)

**Overall assessment:** The site is in strong shape for Round 2. All Round 1 blockers are resolved. The remaining issues are accessibility (alt text), copy consistency (dashes, emails), and minor content accuracy items. No critical or show-stopping content issues remain.
