# IDI Website Content Changelog — 2026-02-23

**Source:** Client change document "IDI site edits 20260218" (Google Doc by Tammy Solomons)
**Compared against:** Current codebase (branch: master, commit: d388f06)

---

## Summary of Changes

| # | Area | Type | Impact |
|---|------|------|--------|
| 1 | Global Constants | DELETE | Remove BPPE & FAFSA school codes from display |
| 2 | Date Unification | FIX | Change enrollment.ts nextClassDate from "May 5" to "May 11" |
| 3 | About Page | ADD | Add Philosophy, Goals, and Mission Statement sections |
| 4 | About > History | UPDATE | Revise timeline (7 entries → 5 entries, date changes) |
| 5 | Faculty Page | REPLACE | Remove all 8 fictional faculty → Replace with 18 real faculty from idi.edu |
| 6 | Staff Page | REPLACE | Remove all 7 fictional staff → Replace with 7 real staff from idi.edu |
| 7 | Campus Life | ADD | Add 2 new student organizations (NKBA, NEWH) |
| 8 | Programs > BA | UPDATE | Replace creative course descriptions with actual catalog descriptions |
| 9 | Programs > MIA | UPDATE | Replace creative course descriptions with actual catalog descriptions |
| 10 | Programs > AA | UPDATE | Replace creative course descriptions with actual catalog descriptions |
| 11 | Contact Page | UPDATE | Email addresses need to match real staff directory |

---

## Change 1: Remove School Codes from Global Display

**Client comment:** "Don't use school codes"

**Files affected:**
- `src/data/contact.ts` — Remove `bppeSchoolCode` and `federalSchoolCode` fields
- Any component that renders these codes as standalone items (contact page, footer, etc.)

**Current values being removed from display:**
- ~~BPPE School Code: 2302631~~ → DELETE from constants display
- ~~Federal School Code (FAFSA): 041863~~ → DELETE from constants display

**NOTE:** The BPPE code still appears in the Accreditation page's BPPE detail section (contextual, not standalone). The FAFSA code `016930` is used on the Financial Aid page in the FAFSA instructions — this is a DIFFERENT code from the one in constants (`041863`). **Client should confirm which FAFSA code is correct: 041863 or 016930.**

---

## Change 2: Unify Next Class Date to May 11

**Client comments:** "MAY 11 is the correct date" / "MAY 11 (start date)"

**Files affected:**
- `src/data/enrollment.ts` — Change `nextClassDate` from `"May 5"` to `"May 11"`
- `src/lib/constants.ts` — Already has `"May 11"` (no change needed)
- `src/data/homepage.ts` — Has `"May 5"` in campus section badge → Change to `"May 11"`

**Pages impacted by this change:**
- Homepage Hero badge ("Classes Starting May 11")
- Homepage CTA Finale badge ("Next Class: May 11")
- Admissions Hero badge ("Classes Start May 11")
- Apply page Hero subtitle ("Next classes begin May 11")
- Apply page Enrollment Info Card ("Next Class Date: May 11")
- Certificate Course schedule ("May 11, 2026")

---

## Change 3: Add Mission Statement & Goals to About Page

**Client comment:** "These are our actual mission statement and goals"

**File affected:** `src/app/about/page.tsx`

**Action:** ADD the following 4 sections to the About page Overview section (after the existing introductory paragraphs):

### Section: PHILOSOPHY OF THE PROGRAM
> Interior Design includes a scope of services performed by a professional design practitioner, qualified through EDUCATION, EXPERIENCE, and EXAMINATION to protect and enhance the life, health, safety, and welfare of the public.

### Section: GOAL OF THE INSTITUTE
> Interior Designers Institute is a boutique college teaching interior design and interior architecture. The college's specialized curriculum offers students a personalized education with student-focused faculty who love teaching. IDI's mission is to be an exclusive producer of interior design graduates who become some of the country's most well-known and successful designers.

### Section: ADDITIONAL GOALS OF THE PROGRAM
> The program aims to prepare graduates to enter the interior design profession as entry-level designers and/or for career advancement.
> Students will learn to design spaces that serve diverse communities with varying cultures, physical abilities, and economic backgrounds.
> The program emphasizes the importance of professional ethics, integrity, and encourages students to contribute their interior design skills and talents to their community.
> Additionally, students will develop the technical, analytical, conceptual, and communication skills essential for success in the design profession.
> The program strives to create a learning environment that fosters individuality, creativity, and motivation to succeed.

### Section: MISSION STATEMENT
> Interior Designers Institute (IDI) is a private college offering degrees to educate students in the development of creative concepts and effective solutions to complex problems. The IDI faculty is composed of practicing architects and interior designers creating a learning environment that fosters and supports creativity. With a focused curriculum IDI adapts and assimilates current market and industry trends to best prepare students entering into the global workforce or for career advancement.

---

## Change 4: Revise History Timeline

**File affected:** `src/data/about.ts`

**Current timeline (7 entries):**
1. 1984 — Founded in Corona del Mar
2. 1990 — Moved to Newport Beach
3. 1994 — AA Program launched
4. 2000 — BA Program arrived
5. 2005 — CIDA accreditation awarded
6. 2010 — Master of Interior Architecture debuts
7. 2026 — Over four decades of excellence

**New timeline (5 entries):**
1. 1984 — Judy Deaton opens the doors in Corona del Mar with a vision: design education that's personal, rigorous, and studio-driven.
2. 1990 — The Institute moves to Newport Beach — planting itself in the heart of Southern California's design community.
3. 1992 — The Bachelor of Arts program receives CIDA accreditation — raising the bar with advanced technical skills and CIDA-track curriculum. CIDA accreditation awarded for the BA program — the recognized accrediting body for interior design education in North America.
4. 2010 — The Master of Interior Architecture program debuts, offering graduate-level rigor for designers ready to lead.
5. 2026 — Over four decades of design education excellence — still dedicated exclusively to interior design education.

**Key differences:**
- Removed: 1994 (AA Program) and 2000 (BA Program) milestones
- Changed: CIDA accreditation date from 2005 → 1992
- Updated: All descriptions rewritten with more narrative detail

---

## Change 5: Replace ALL Faculty Members

**Client comment:** "NONE of these people work at IDI - refer to https://idi.edu/interior-designer-faculty/"

**File affected:** `src/app/about/faculty/page.tsx`

### REMOVE (8 fictional faculty):
1. ~~Dr. Caroline Whitfield — Department Chair & Program Director~~
2. ~~Marcus Avery, IIDA — Associate Professor~~
3. ~~Sophia Nguyen, ASID — Associate Professor~~
4. ~~David Ochoa — Assistant Professor~~
5. ~~Dr. Elena Rossini — Associate Professor~~
6. ~~James Hartley, NCIDQ — Associate Professor~~
7. ~~Rachel Kim, LEED AP — Assistant Professor~~
8. ~~Anthony Morales, AIA — Adjunct Professor~~

### REPLACE WITH (18 real faculty from idi.edu):
1. **Chidimma Abuka** — MBA (Concordia University Irvine), MIA, LEED AP ID+C, Fitwel Ambassador, WELL AP, ENV SP. Studio Design Resilience Leader at Gensler. Memberships: ASID, ILFI, IIDA, ISI, IWBI, RDI, USGBC.
2. **Angela Blake, ASID, IIDA** — BA Interior Design (IDI), BS (Azusa Pacific University). Principal, A. Blake Designs. 12+ years in entertainment and electronic software industry.
3. **Hiba Chabani** — BA Interior Design (IDI). CAD/Sketchup Designer (Move West Design), Freelance Designer.
4. **Amy Creager, AIA, LEED AP** — BA (CSU Long Beach). Principal Architect, Brion Jeannette Architecture. Sustainable homes specialist.
5. **Allison Crosland, ASID** — MIA (IDI). President at Crosland Designs. High-end residential, commercial, and hospitality design.
6. **Pete Cruz** — AA (IDI). Principal (SdDESIGNWORKS), Interior Designer-Nicholson Construction (Retired), Microsoft Certified Systems Engineer.
7. **Reya Duenas, ASID, NCIDQ** — MA Interior Design (New England School of Art & Design, Suffolk University). Founder & Designer, Reya Duenas Design. 13+ years in hospitality and commercial design.
8. **Rick Fox, AIA, ICC** — MA Philosophy (CSU Long Beach), B. Arch (Cal Poly SLO). Architect. Projects include Corporate HQ for National Bank of Long Beach, BASF R&D Facility, Xerox Service Training Center.
9. **Donald Gardner, IIDA** — BS Interior Design (Woodbury College), Advanced Studies (UCLA), Inst. D'Architecttura (Venice, Italy). Commercial Interior Designer, CBS Television Studio Set Designer.
10. **Tamara Gonzalez** — Master of Interior Architecture (IDI). Founder Tamara Gonzalez Interiors, City of Pomona Historic Preservation Commission.
11. **Rachel Hulan, ASID, IIDA, LEED AP** — BA Interior Design (IDI). President, Hulan Design. Certified Green Building Professional.
12. **Kristin Pipal-Keehne** — BA (IDI). Interior Designer, Kelly Sutherlin McCleod Architecture, Inc.
13. **Megan Keith, ASID** — M.Arch (SCI-Arc), BA Anthropology (Scripps College), AA (IDI). Freelance designer, Rhino and Revit Researcher.
14. **Brad Smith, IIDA** — BFA Interior Design (University of Houston). IIDA President 2001 (SoCal Chapter), Project Designer (Hoag Hospital Breast Center).
15. **Mark Teale, CID** — B. Arch (SCI-Arc). Owner, Teale Architecture. Certified Energy Auditor (State of CA).
16. **Tasha Thayer** — BA (CSU Long Beach), AA (IDI). ASID Allied. CAD Designer (Erica Bryen Design), Principal Interior Designer (LH Designs).
17. **Kristen White-Scully, ASID, NKBA** — BS Interior Design (The Art Institute of CA). Interior Designer (Made Renovation), Senior Interior Designer (Ferguson Enterprises).
18. **Michele Prata** — BA (CSU Long Beach), AA Interior Design (IDI). Past President (ASID Orange County), 20+ years principal of Prata Studio Interiors. Featured on HGTV.

---

## Change 6: Replace ALL Staff Members

**Client comments:** "None of these work at IDI see https://idi.edu/staff-directory/" / "none of these emails listed are correct"

**File affected:** `src/app/about/staff/page.tsx`

### REMOVE (7 fictional staff):
1. ~~Patricia Deaton-Morgan — President & Director (director@idi.edu)~~
2. ~~Lauren Castellano — Director of Admissions (admissions@idi.edu)~~
3. ~~Michael Tran — Registrar (registrar@idi.edu)~~
4. ~~Sandra Okafor — Financial Aid Director (financialaid@idi.edu)~~
5. ~~Jessica Reyes — Student Services Coordinator (studentservices@idi.edu)~~
6. ~~Daniel Park — Career Services Advisor (careers@idi.edu)~~
7. ~~Amy Chen — Administrative Coordinator (contact@idi.edu)~~

### REPLACE WITH (7 real staff from idi.edu):
1. **Tammy Solomons** — Executive Director — tammy@idi.edu
2. **Tamara Gonzalez, ASID, IIDA** — Director of Education — Tamara.Gonzalez@idi.edu
3. **Becky Mauldin** — Associate Director of Education — becky@idi.edu
4. **Samantha Arizaga** — Admissions & Student Services — samantha@idi.edu
5. **Rachel Hulan, ASID, IIDA, LEED AP, CID** — Career Placement — rhulan@idi.edu
6. **Renee Robles** — Financial Aid Administrator & Title IX Coordinator — renee@idi.edu
7. **Stephanie Pappas** — Librarian — library@idi.edu

**NOTE:** Client said "we can create this email - and forward it to renee@idi.edu" regarding the financialaid@idi.edu address. This is a client-side action item (email forwarding setup), not a code change.

---

## Change 7: Add 2 New Student Organizations to Campus Life

**Client comment:** "Item 3 & 4 added"

**File affected:** `src/app/campus-life/page.tsx`

**Currently on site (2 organizations):**
1. ASID Student Chapter
2. IIDA Student Chapter

**ADD (2 new organizations):**

3. **NKBA Student Chapter** — The National Kitchen & Bath Association (NKBA) Student Chapter is the leading trade association for the kitchen and bath industry. Being part of the NKBA Student Chapter helps students build industry connections early, understand current trends and codes, and transition more smoothly into professional membership after graduation.

4. **NEWH Student Chapter** — The Network of Executive Women in Hospitality (NEWH) is an international organization dedicated to hospitality, interior design, and related industries. The NEWH Student Chapter connects students pursuing careers in hospitality design with industry professionals and real-world opportunities. Membership provides access to scholarships and grant opportunities, mentorship and career guidance.

---

## Change 8: Update Bachelor of Arts Course Descriptions

**Client comment:** "use actual descriptions from https://idi.edu/programs-of-study/bachelor-of-arts-degree-interior-design/"

**File affected:** `src/data/programs.ts` (BA program courses section)

**Action:** Replace the current creative/marketing course descriptions with actual catalog descriptions from the IDI website. All 9 BA course entries currently have fictional marketing copy that should be replaced with factual catalog information.

**Courses affected:**
1. 421 — Computer-Aided Drafting II
2. 429 — Historic Preservation Thesis
3. 430 — Career Study
4. 434 — Senior Show/Portfolio Prep
5. 435 — Revit Architecture
6. 440 — Senior Studio
7. 441 — Kitchen and Bath Design
8. 442 — Digital Presentation
9. 443 — Advanced SketchUp

---

## Change 9: Update Master of Interior Architecture Course Descriptions

**Client comment:** "use actual information https://idi.edu/programs-of-study/master-of-interior-architecture/"

**File affected:** `src/data/programs.ts` (MIA program courses section)

**Action:** Replace creative course descriptions with actual catalog descriptions. The real MIA program organizes courses into 3 sequences:
- Design Project Sequence (Parts 1-3, 16.5 units total)
- Research Methods Sequence (Parts 1-3, 9 units total)
- Graduate Seminars (Special Topics + Professional Practices, 13 units total)

**Courses affected:**
1. 502 — Design Project Part 1
2. 503 — Research Methods Part 1
3. 504 — Graduate Seminar Special Topics
4. 505 — Design Project Part 2
5. 506 — Research Methods Part 2
6. 507 — Graduate Seminar Professional Practices
7. 508 — Design Project Part 3
8. 509 — Research Methods Part 3

---

## Change 10: Update Associate of Arts Course Descriptions

**Client comment:** "See changes listed" (inferred from strikethroughs on all 22 course descriptions)

**File affected:** `src/data/programs.ts` (AA program courses section)

**Action:** Replace the current creative/marketing course descriptions with factual catalog descriptions. All 22 AA course entries currently have fictional marketing copy.

**Courses affected:** All 22 courses (125 through 225)

---

## Change 11: Update Contact Page Emails

**Client comment:** "none of these emails listed are correct - refer to staff list"

**File affected:** `src/app/contact/page.tsx`

**Current department emails on contact page:**
- admissions@idi.edu
- financialaid@idi.edu
- studentservices@idi.edu
- careers@idi.edu
- academics@idi.edu
- contact@idi.edu

**Action needed:** Review department email addresses against the real staff directory. The real staff emails are personal addresses (tammy@idi.edu, samantha@idi.edu, etc.) rather than department addresses. **Client should confirm whether to use department emails (admissions@idi.edu etc.) or personal staff emails on the contact page.** The department emails may still be valid as forwards — client noted they can create the financialaid@idi.edu email as a forward to renee@idi.edu.

---

## Items Requiring Client Confirmation

| # | Question | Options |
|---|----------|---------|
| 1 | **FAFSA School Code:** The Financial Aid page uses code `016930` but enrollment.ts and contact.ts use `041863`. Which is correct? | 016930 / 041863 |
| 2 | **Contact page department emails:** Should we keep department addresses (admissions@idi.edu, etc.) or switch to personal staff emails? | Department / Personal |
| 3 | **Course descriptions:** Should we use short catalog-style descriptions, or remove descriptions entirely and just list course names? | Short descriptions / Names only |
| 4 | **BPPE code in Accreditation section:** The code 2302631 still appears in the Accreditation page's BPPE detail. Should this also be removed? | Keep / Remove |

---

## Files to Modify (Summary)

| File | Changes |
|------|---------|
| `src/data/contact.ts` | Remove school codes from display |
| `src/data/enrollment.ts` | Change nextClassDate "May 5" → "May 11" |
| `src/data/homepage.ts` | Change campus badge date "May 5" → "May 11" |
| `src/data/about.ts` | Update history timeline (7 → 5 entries) |
| `src/data/programs.ts` | Update course descriptions for AA, BA, MIA programs |
| `src/app/about/page.tsx` | Add Philosophy, Goals, Mission Statement sections |
| `src/app/about/faculty/page.tsx` | Replace 8 fictional → 18 real faculty members |
| `src/app/about/staff/page.tsx` | Replace 7 fictional → 7 real staff members |
| `src/app/campus-life/page.tsx` | Add NKBA and NEWH student organizations |
| `src/app/contact/page.tsx` | Remove school codes; review email addresses |
| `src/lib/constants.ts` | No changes needed (already has May 11) |

---

*Generated: 2026-02-23 | Based on client document dated 2026-02-18*
