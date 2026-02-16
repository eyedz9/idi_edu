# QA Agent 1 -- Content & Copy QA Report (Round 3)

**Date:** 2026-02-16
**Agent:** QA Agent 1 -- Content & Copy
**Site:** http://localhost:3001
**Pages Tested:** 19/19
**Round:** 3 (Retest of Round 2 findings + full sweep)

---

## 1. Round 2 Retest Status

| # | Issue | Page(s) | Round 2 Status | Round 3 Result | Notes |
|---|-------|---------|---------------|----------------|-------|
| 1 | Missing alt text on hero accreditation badges (was `alt=""`) | `/`, `/about/accreditation` | Open | **FIXED** | Homepage: `alt="ACCSC logo"`, `alt="CIDA logo"`. Accreditation page: `alt="ACCSC Logo"`, `alt="CIDA Logo"`. |
| 2 | Department emails all identical on `/contact` | `/contact` | Open | **FIXED** | Now has department-specific emails: `admissions@idi.edu`, `financialaid@idi.edu`, `studentservices@idi.edu`, `careers@idi.edu`, `academics@idi.edu`, `contact@idi.edu`. |
| 3 | Double hyphens instead of em dashes on `/about` | `/about` | Open | **FIXED** | The `/about` page now uses proper em dashes. However, double hyphens (`--`) persist on `/about/faculty` and `/campus-life` (see new findings). |
| 4 | "Where This Degree Takes You" on `/programs/certificate` | `/programs/certificate` | Open | **FIXED** | Now reads "Where This Program Takes You". |
| 5 | ACCSC logo filename typo (`ACCCS_logo.png`) | Global (all pages) | Open | **STILL OPEN** | The actual image file is still named `ACCCS_logo.png` (missing "S", has double "C"). All 4 code references and the physical file retain the typo. The image loads correctly since the filename matches the reference, but the typo is present in the filename itself. |
| 6 | Breadcrumb separator inconsistency (some used `/` instead of `>`) | Multiple pages | Open | **FIXED** | All breadcrumbs now consistently use `&rsaquo;` (renders as `>`). |
| 7 | Timeline on `/about/history` ending at 2024 | `/about/history` | Open | **FIXED** | Timeline now includes a 2026 milestone entry: "Over four decades of design education excellence." The bottom timeline also shows a 2026 entry. |

**Round 2 Retest Summary:** 6 of 7 issues fixed. 1 still open (ACCSC filename typo).

---

## 2. New Findings

| ID | Severity | Page | Issue | Details |
|----|----------|------|-------|---------|
| R3-01 | Medium | `/about/faculty` | Double hyphens instead of em dash | Text reads "instructors -- they are practicing designers" (line 166 of `faculty/page.tsx`). Should use em dash: "instructors -- they are". |
| R3-02 | Medium | `/campus-life` | Double hyphens instead of em dash | Text reads "Newport Beach is far more than a beautiful coastal city -- it is" (line 146 of `campus-life/page.tsx`). Should use em dash. |
| R3-03 | Low | Programs subpages | Breadcrumb missing "Home" root | Program subpages (`/programs/certificate`, `/programs/associate-of-arts`, `/programs/bachelor-of-arts`, `/programs/master-interior-architecture`, `/programs/compare`) start breadcrumb with "Programs >" instead of "Home > Programs >". All other sections (About, Admissions, Contact, etc.) include "Home" as the root. |
| R3-04 | Low | `/programs` | No breadcrumb present | The main `/programs` page has no breadcrumb navigation, while other top-level pages (`/about`, `/admissions`, `/contact`, `/campus-life`, `/disclosures`) all have breadcrumbs. |
| R3-05 | Low | `/programs/certificate` | Start date discrepancy | Certificate course schedule shows "May 11, 2026" start date, while the sitewide enrollment messaging says "Classes Starting May 5". This may be intentional (certificate on a different schedule), but should be verified. |
| R3-06 | Low | `/admissions/financial-aid` | Financial Aid contact uses generic email | The "Contact the Financial Aid Office" section uses `contact@idi.edu`, but the `/contact` page lists the Financial Aid department email as `financialaid@idi.edu`. Should be consistent. |
| R3-07 | Low | Global (footer) | ACCSC filename typo in footer | Footer references `ACCCS_logo.png` (same as issue #5 from Round 2, affects all 19 pages via the shared footer component). |

---

## 3. Page-by-Page Summary

### `/` (Homepage)
- **Title:** Interior Designers Institute | California's Premier Interior Design School
- **Breadcrumb:** N/A (homepage, no breadcrumb expected)
- **Copyright:** 2026 (dynamic via `getFullYear()`)
- **Phone:** (949) 675-4451
- **Email:** contact@idi.edu
- **Address:** 1061 Camelback Street, Newport Beach, CA 92660
- **Images:** All have alt text. Hero badges now have "ACCSC logo" and "CIDA logo".
- **Content Issues:** None
- **Placeholder Text:** None found

### `/about`
- **Title:** About | Interior Designers Institute
- **Breadcrumb:** Home > About (correct)
- **Content Issues:** None. Em dashes properly used ("Where Design Becomes a Career -- and a Calling"). Stats counter shows "0+" on page load (animation-dependent, starts at 0 before scroll triggers).
- **Images:** All have alt text.

### `/about/accreditation`
- **Title:** Accreditation & Approvals | Interior Designers Institute
- **Breadcrumb:** Home > About > Accreditation (correct)
- **Content Issues:** None. BPPE School Code 2302631 and FAFSA code mentioned correctly.
- **Images:** ACCSC logo alt now says "ACCSC Logo" (fixed). Filename still `ACCCS_logo.png`.

### `/about/faculty`
- **Title:** Faculty | Interior Designers Institute
- **Breadcrumb:** Home > About > Faculty (correct)
- **Content Issues:** Double hyphens on line "instructors -- they are practicing designers" (R3-01).
- **Images:** All 8 faculty member photos have proper alt text with names and credentials.

### `/about/staff`
- **Title:** Staff Directory | Interior Designers Institute
- **Breadcrumb:** Home > About > Staff (correct)
- **Content Issues:** None. Each staff member has a unique department-specific email.
- **Images:** All 7 staff member photos have proper alt text with names.

### `/about/history`
- **Title:** Our History | Interior Designers Institute
- **Breadcrumb:** Home > About > History (correct)
- **Content Issues:** None. Timeline now includes 2026 milestone (R2 issue #7 fixed). Campus photos all have descriptive alt text.
- **Images:** All have alt text including gallery images.

### `/admissions`
- **Title:** Admissions | Interior Designers Institute
- **Breadcrumb:** Home > Admissions (correct)
- **Content Issues:** None. FAFSA School Code 041863 correctly listed.
- **Images:** All have alt text.

### `/admissions/apply`
- **Title:** Apply to IDI | Interior Designers Institute
- **Breadcrumb:** Home > Admissions > Apply (correct)
- **Content Issues:** None. "Spring/Summer 2026" and "May 5" start date consistent with sitewide messaging.
- **Images:** Header/footer only, all have alt text.

### `/admissions/financial-aid`
- **Title:** Financial Aid | Interior Designers Institute
- **Breadcrumb:** Home > Admissions > Financial Aid (correct)
- **Content Issues:** Contact section uses `contact@idi.edu` instead of `financialaid@idi.edu` (R3-06). FAFSA School Code 041863 correct.
- **Images:** Header/footer only, all have alt text.

### `/admissions/tuition`
- **Title:** Tuition & Fees | Interior Designers Institute
- **Breadcrumb:** Home > Admissions > Tuition & Fees (correct)
- **Content Issues:** None. All tuition figures are present and consistent with program pages.
- **Images:** Header/footer only, all have alt text.

### `/campus-life`
- **Title:** Campus Life | Interior Designers Institute
- **Breadcrumb:** Home > Campus Life (correct)
- **Content Issues:** Double hyphens: "coastal city -- it is" (R3-02). Address correctly shown as 1061 Camelback Street.
- **Images:** All 14 images have descriptive alt text.

### `/contact`
- **Title:** Contact Us | Interior Designers Institute
- **Breadcrumb:** Home > Contact (correct)
- **Content Issues:** None. Department-specific emails now in place (R2 issue #2 fixed). Office hours, fax number, BPPE and FAFSA codes all present.
- **Images:** Hero image has alt text.

### `/disclosures`
- **Title:** Documents & Disclosures | Interior Designers Institute
- **Breadcrumb:** Home > Disclosures (correct)
- **Content Issues:** None. Privacy policy section included. All document categories properly organized.
- **Images:** Header/footer only, all have alt text.

### `/programs`
- **Title:** Our Programs | Interior Designers Institute
- **Breadcrumb:** None (R3-04)
- **Content Issues:** None. All four programs listed with correct tuition, duration, and unit counts.
- **Images:** All have alt text.

### `/programs/certificate`
- **Title:** Certificate Course in Interior Design | Interior Designers Institute
- **Breadcrumb:** Programs > Certificate Course (missing "Home" -- R3-03)
- **Content Issues:** "Where This Program Takes You" (R2 issue #4 fixed). Schedule shows May 11, 2026 start (R3-05). 16 lectures + 8 studios listed.
- **Images:** Header/footer only, all have alt text.

### `/programs/associate-of-arts`
- **Title:** Associate of Arts Degree in Interior Design | Interior Designers Institute
- **Breadcrumb:** Programs > AA in Interior Design (missing "Home" -- R3-03)
- **Content Issues:** None. 22 courses with descriptions. Tuition $39,900 consistent.
- **Images:** Header/footer only, all have alt text.

### `/programs/bachelor-of-arts`
- **Title:** Bachelor of Arts Degree in Interior Design | Interior Designers Institute
- **Breadcrumb:** Programs > BA in Interior Design (missing "Home" -- R3-03)
- **Content Issues:** None. 9 courses listed. CIDA accreditation noted. Tuition $19,950 consistent.
- **Images:** All have alt text.

### `/programs/compare`
- **Title:** Compare Programs | Interior Designers Institute
- **Breadcrumb:** Programs > Compare Programs (missing "Home" -- R3-03)
- **Content Issues:** None. All four programs compared correctly. Data consistent with individual program pages.
- **Images:** Header/footer only.

### `/programs/master-interior-architecture`
- **Title:** Master of Interior Architecture | Interior Designers Institute
- **Breadcrumb:** Programs > MIA (missing "Home" -- R3-03)
- **Content Issues:** None. 8 courses listed. Part-time schedule, GPA 3.0 requirement noted.
- **Images:** All have alt text.

---

## 4. Global Checks

| Check | Status | Notes |
|-------|--------|-------|
| Copyright Year | PASS | All pages show "2026" via dynamic `getFullYear()` in footer |
| Phone Number | PASS | "(949) 675-4451" consistent across all pages |
| Address | PASS | "1061 Camelback Street, Newport Beach, CA 92660" consistent |
| Primary Email | PASS | "contact@idi.edu" used as general contact throughout |
| Placeholder Text | PASS | No lorem ipsum, `[Photo:...]`, `undefined`, `null`, or `[object Object]` found |
| Spelling/Typos | PASS | No spelling errors found in page content (filename typo only) |
| Image Alt Text | PASS | All images across all 19 pages have descriptive alt text |
| Heading Capitalization | PASS | Consistent title case throughout |
| Breadcrumb Separators | PASS | All breadcrumbs use `>` consistently |
| Outdated Dates | PASS | All dates reference 2026. History timeline updated to 2026. |
| FAFSA School Code | PASS | "041863" consistent on admissions, apply, and financial-aid pages |
| BPPE School Code | PASS | "2302631" consistent on accreditation and contact pages |
| Tuition Figures | PASS | Consistent across program pages, compare page, and tuition page |

---

## 5. Summary

### Issue Counts by Severity

| Severity | Count | Details |
|----------|-------|---------|
| Critical | 0 | -- |
| High | 0 | -- |
| Medium | 2 | Double hyphens on `/about/faculty` and `/campus-life` (R3-01, R3-02) |
| Low | 5 | Breadcrumb inconsistencies (R3-03, R3-04), date discrepancy (R3-05), email inconsistency (R3-06), filename typo (R3-07, carryover from R2) |
| **Total New** | **7** | |

### Round 2 Retest Results

| Status | Count |
|--------|-------|
| Fixed | 6 |
| Still Open | 1 (ACCSC filename typo) |

### Overall Assessment

The site is in strong shape for content quality. The majority of Round 2 issues have been resolved, including the critical alt text, email differentiation, em dash, and timeline issues. The remaining open items are all Medium or Low severity:

- **Two Medium issues** are simple text fixes (replace `--` with em dashes on two pages).
- **Five Low issues** relate to breadcrumb structure consistency, a potential date discrepancy, and the carryover ACCSC filename typo.

No critical or high-severity content issues were found in this round.
