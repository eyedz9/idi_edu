# IDI Website Changelog — 2026-03-02

**Session scope:** Comprehensive content update per `changes_20260302.docx` — program names, tuition data, course information, faculty roster, accreditation text, and page copy across the entire site.
**Base commit:** `2cd19ac` (chore: add .claude directory to gitignore)

---

## Summary of Changes

| # | Area | Type | Description |
|---|------|------|-------------|
| 1 | Programs Data | UPDATE | Renamed certificate to "Avocational Certificate Course in Interior Design", units 10 → 8 |
| 2 | Programs Overview | UPDATE | Changed "Starting Tuition" label to "Tuition" |
| 3 | Programs Overview | DELETE | Removed "Online Available" badge from Associate of Arts in mega-menu |
| 4 | Certificate Page | UPDATE | "Lectures" → "Lecture Topics", field trips unnumbered at end, deleted "both" |
| 5 | Certificate Tuition | UPDATE | Part-Time enrollment, $300 supplies + $250 additional, 3x$800 payment plan, $1,200 individual courses |
| 6 | Certificate Page | DELETE | Removed Gainful Employment disclosure |
| 7 | Certificate Page | ADD | Prerequisite note: completion of AA degree required |
| 8 | AA Description | UPDATE | Changed "chops" → "skills", "sketching" → "designing" |
| 9 | AA Page | UPDATE | Removed "IDI" prefix from class numbers |
| 10 | AA Tuition | UPDATE | Lab fees $600, Books & Supplies $2,500, updated payment schedules (5/7/10 terms) |
| 11 | BA Data | UPDATE | Credit units now "180 quarter units (AA 90 + BA 45 + 45 GE transfer)" |
| 12 | BA Page | ADD | Prerequisite text for BA enrollment |
| 13 | BA Tuition | UPDATE | Lab fees $800, Books & Supplies $2,500, Full-Time 3 terms / Part-Time 5 terms |
| 14 | Sitewide | DELETE | Removed all Gainful Employment disclosures from disclosures data and pages |
| 15 | Master Data | UPDATE | Schedule changed to Hybrid (Mon online, Thu in-person), enrollment now full-time |
| 16 | Master Courses | ADD | Added all 9 courses (501–509) with full descriptions and unit counts |
| 17 | Master Tuition | UPDATE | Full-Time 3 terms, pay-as-you-go $2,500/class, Books & Supplies $2,500 |
| 18 | All Degree Tuition | ADD | Student loan responsibility note added to AA, BA, and Master tuition |
| 19 | Compare Page | UPDATE | Course counts: Certificate 2, AA 20, BA 9, Masters 9 |
| 20 | Compare Page | UPDATE | Online option → "Hybrid*" for degree programs with footnote |
| 21 | Admissions | ADD | "Financial Aid is available for the Degree Programs only and to those that qualify" |
| 22 | Admissions | ADD | New Transfer Students page with credit evaluation, GE requirements, FAQ |
| 23 | Faculty | UPDATE | Removed 4 faculty (Creager, Gardner, Smith, Thayer), added 3 (Lopez, Prizant, Saunders) |
| 24 | Campus Life | ADD | "See catalog for local housing information" |
| 25 | History | UPDATE | Removed "Judy Deaton" reference, updated 1984 founding text |
| 26 | Accreditation | ADD | CIDA continuous accreditation since 1992, full ACCSC/BPPE/CIDA text |
| 27 | Types | UPDATE | Added fieldTrips, labFee, prerequisite, estimatedAdditionalSupplies to type definitions |

---

## Change 1–3: Programs Overview & Data

**Files:** `src/data/programs.ts`, `src/app/programs/page.tsx`, `src/components/layout/mega-menu/mega-menu-data.ts`

- Certificate program renamed to "Avocational Certificate Course in Interior Design"
- shortName updated to "Avocational Certificate Course"
- Credit units changed from 10 to 8
- "Starting Tuition" label changed to "Tuition" on programs overview
- Removed "Online Available" badge from AA in mega-menu (`badges: []`)

---

## Change 4–7: Certificate Program Page

**Files:** `src/data/programs.ts`, `src/data/tuition.ts`, `src/app/programs/[slug]/page.tsx`, `src/types/index.ts`

### Curriculum
- Heading changed from "Lectures" to "Lecture Topics"
- Field trips moved to separate `fieldTrips` array, rendered unnumbered after lecture list
- Word "both" deleted from page content

### Tuition
- Enrollment changed from Full-time to Part-Time
- supplyCost: $300 (Books & Supplies)
- estimatedAdditionalSupplies: $250 (new field)
- Payment: $2,400 in full or 3 monthly payments of $800
- Individual course option: $1,200 each (Lecture Series or Studio Workshop)
- Duration: 11–12 weeks
- totalCharges: $2,795 | totalEstimatedCost: $3,045

### Other
- Gainful Employment disclosure removed
- Prerequisite note added: "Completion of the Associate of Arts Degree in Interior Design and payment of the tuition"

---

## Change 8–10: Associate of Arts Program

**Files:** `src/data/programs.ts`, `src/data/tuition.ts`, `src/app/programs/[slug]/page.tsx`

### Description
- "Build technical chops" → "Build technical skills"
- "sketching its future" → "designing its future"

### Course Display
- Removed "IDI" prefix from course code rendering in program detail page

### Tuition
- registrationFee: $100
- labFee: $600 (Computer Lab Fees $200 x 3) — new field
- supplyCost: $2,500 (Estimated Books & Supplies, purchased via third party)
- Payment schedule:
  - Full-Time: 16 units/term, 4 classes @ $1,995 = $7,980 (5 terms)
  - 3/4 Time: 12 units/term, 3 classes @ $1,995 = $5,985 (7 terms)
  - Part-Time: 8 units/term, 2 classes @ $1,995 = $3,990 (10 terms)
- Per-Term Payment: may be paid in full or split into 3 monthly payments
- totalCharges: $40,600 | totalEstimatedCost: $43,100

---

## Change 11–14: Bachelor of Arts Program

**Files:** `src/data/programs.ts`, `src/data/tuition.ts`, `src/app/programs/[slug]/page.tsx`

### Program Data
- creditUnits: "180 quarter units (AA 90 + BA 45 + 45 GE transfer)"
- Added prerequisite field: "The prerequisite for earning the Bachelor of Arts in Interior Design is completion of the Associate of Arts Degree in Interior Design and payment of the tuition."
- Prerequisite displayed on program detail page

### Tuition
- registrationFee: $100
- labFee: $800 (Computer Lab Fees $200 each total $800) — new field
- supplyCost: $2,500 (Estimated Books & Supplies, purchased from 3rd party)
- Payment schedule:
  - Full-Time (3 terms): 12 units, 3 classes/term = $6,651
  - Part-Time (5 terms): 8 units, 2 classes/term = $4,434
- totalCharges: $20,850 | totalEstimatedCost: $23,350

### Gainful Employment
- Removed ALL Gainful Employment disclosures sitewide:
  - 4 entries deleted from `src/data/disclosures.ts`
  - GE disclosure link removed from program detail page
  - "Student Outcomes" category removed from disclosures page and types

---

## Change 15–17: Master of Interior Architecture

**Files:** `src/data/programs.ts`, `src/data/tuition.ts`

### Schedule & Enrollment
- `partTimeOnly: true` removed — enrollment is now full-time
- Schedule: "Hybrid: Mondays attend the online live streaming interactive lecture. Thursdays attend in person to develop your design project and research skills."

### Courses (9 total, all new)
| Code | Course | Units |
|------|--------|-------|
| 501 | Graduate Seminar, The Arts | 6.5 |
| 502 | Design Project, Part 1 | 4.5 |
| 503 | Research Methods, Part 1 | 3.0 |
| 504 | Graduate Seminar, Special Topics | 6.5 |
| 505 | Design Project, Part 2 | 4.5 |
| 506 | Research Methods, Part 2 | 3.0 |
| 507 | Graduate Seminar, Professional Practices | 6.5 |
| 508 | Design Project, Part 3 | 7.5 |
| 509 | Research Methods, Part 3 | 3.0 |

All courses include full descriptions from idi.edu.

### Tuition
- Enrollment: Full-Time (3 terms)
- $22,500 pay as you go, $2,500/class, $500/unit, $7,500/term (3 terms)
- Books & Supplies: $2,500 purchased from 3rd party
- totalCharges: $22,600 | totalEstimatedCost: $25,100

---

## Change 18: Student Loan Note on All Degree Pages

**Files:** `src/data/tuition.ts`

Added to AA, BA, and Master tuition notes:

> "If a student obtains a loan to pay for an educational program, the student will have the responsibility to repay the full amount of the loan plus interest, less the amount of any refund. If the student has received federal student financial aid funds, the student is entitled to a refund of the moneys not paid from the federal student financial aid program funds. For students receiving federal funds please refer to Student Enrollment Agreement for Title IV refund policy."

---

## Change 19–20: Compare Page

**Files:** `src/app/programs/compare/page.tsx`

### Course Counts
- Certificate: "2 courses (Lectures & Studio Workshop)"
- AA: "20 courses"
- BA: "9 courses"
- Masters: "9 courses"

### Online Option → Hybrid
- Certificate: "In-Person & Online"
- AA, BA, Masters: "Hybrid*"
- Footnote: "*Some classes offered live streaming online; program cannot be completed entirely online."

Both desktop table and mobile card layouts updated consistently.

---

## Change 21–22: Admissions Page

**Files:** `src/app/admissions/page.tsx`, `src/app/admissions/transfer-students/page.tsx` (new), `src/data/navigation.ts`

- Added Financial Aid availability note in hero section
- Created new Transfer Students page at `/admissions/transfer-students` with:
  - Transfer credit evaluation process
  - 45 GE quarter units requirement for BA
  - FAQ section
  - CTA to contact admissions
- Added "Transfer Students" link to admissions navigation menu

---

## Change 23: Faculty Roster

**Files:** `src/app/about/faculty/page.tsx`

### Removed
- Amy Creager
- Donald Gardner
- Brad Smith
- Tasha Thayer

### Added
- **Brandon Lopez**, AIA Assoc, ASID — Master of Architecture, SCI-Arc (placeholder image)
- **Cynthia Prizant**, ASID, CID, LEED, Green Building Certified — BS Computer Science, U of Pittsburgh (placeholder image)
- **Kate Saunders**, Allied ASID, CID, NKBA — Master of Architecture, New School of Architecture and Design (placeholder image)

---

## Change 24: Campus Life

**Files:** `src/app/campus-life/page.tsx`

- Added "See catalog for local housing information" to Housing Disclosure section

---

## Change 25: History Page

**Files:** `src/data/about.ts`, `src/app/about/history/page.tsx`

- Removed all references to "Judy Deaton"
- Updated founding text: "In 1984 Interior Designers Institute opened in Corona del Mar, ..."
- 1984 milestone: "IDI's doors open in Corona del Mar..."

---

## Change 26: Accreditation Page

**Files:** `src/app/about/accreditation/page.tsx`

Added:
- "IDI has maintained continuous CIDA accreditation since 1992" (highlighted callout)
- Full accreditation text covering:
  - ACCSC accreditation of all four programs
  - Hybrid approval for California residents / BPPE compliance
  - CIDA accreditation of BA program
  - Right to change accrediting agency notice

---

## Change 27: Type Definitions

**Files:** `src/types/index.ts`

Added optional fields:
- `fieldTrips?: { title: string }[]` on Program
- `prerequisite?: string` on Program
- `labFee?: number` on TuitionInfo
- `estimatedAdditionalSupplies?: number` on TuitionInfo

---

## Files Modified

```
src/app/about/accreditation/page.tsx              (accreditation text)
src/app/about/faculty/page.tsx                    (faculty roster)
src/app/about/history/page.tsx                    (founding text)
src/app/admissions/page.tsx                       (financial aid note)
src/app/admissions/transfer-students/page.tsx     (NEW — transfer students)
src/app/campus-life/page.tsx                      (housing note)
src/app/disclosures/page.tsx                      (removed GE category)
src/app/programs/[slug]/page.tsx                  (curriculum, tuition, prerequisites)
src/app/programs/compare/page.tsx                 (course counts, hybrid footnote)
src/app/programs/page.tsx                         (tuition label)
src/components/layout/mega-menu/mega-menu-data.ts (removed Online badge)
src/data/about.ts                                 (history text)
src/data/disclosures.ts                           (removed Gainful Employment)
src/data/navigation.ts                            (transfer students link)
src/data/programs.ts                              (names, courses, descriptions, types)
src/data/tuition.ts                               (fees, schedules, notes)
src/types/index.ts                                (new optional fields)
```
