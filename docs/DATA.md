# Data Layer Reference

The project uses static TypeScript data modules instead of a database or CMS. All data lives in `src/data/`, with shared types in `src/types/index.ts`, validation schemas in `src/lib/schemas.ts`, and constants in `src/lib/constants.ts`.

---

## Data Files (`src/data/`)

### Barrel Export

**File:** `src/data/index.ts`

Re-exports all data modules for convenient imports:

```typescript
import { programs, getProgramBySlug, tuitionData, primaryNav } from "@/data";
```

---

### programs.ts

**Exports:**

| Export | Type | Description |
|---|---|---|
| `programs` | `Program[]` | Array of all four programs |
| `getProgramBySlug(slug)` | `(string) => Program \| undefined` | Find program by URL slug |
| `getDegreePrograms()` | `() => Program[]` | All programs excluding avocational (certificate) |
| `getProgramNavItems()` | `() => { label, href }[]` | Program list for navigation |

**Programs defined:**

| Slug | Name | Degree Type | Duration | Tuition |
|---|---|---|---|---|
| `certificate` | Certificate Course in Interior Design | Certificate of Completion | 12 weeks | $2,400 |
| `associate-of-arts` | Associate of Arts Degree in Interior Design | Associate of Arts | 24-48 months | $39,900 |
| `bachelor-of-arts` | Bachelor of Arts Degree in Interior Design | Bachelor of Arts | 30-54 months | $19,950 |
| `master-interior-architecture` | Master of Interior Architecture | Master's Degree | 12-15 months | $22,500 |

Each program includes: `slug`, `name`, `shortName`, `degreeType`, `duration`, `creditUnits`, `tuition`, `totalCharges`, `totalEstimatedCost`, `description`, `isAccredited`, `accreditor`, `cidaAccredited` (BA only), `careerOutcomes[]`, `courses[]` (with `code`, `name`, `units`, `description`), and optionally `lectures[]` / `studios[]` (certificate only).

---

### tuition.ts

**Exports:**

| Export | Type | Description |
|---|---|---|
| `tuitionData` | `TuitionInfo[]` | Tuition details for all programs |
| `getTuitionByProgram(slug)` | `(string) => TuitionInfo \| undefined` | Find tuition by program slug |
| `getCombinedBATuition()` | `() => number` | Combined AA + BA total tuition ($59,850) |

Each `TuitionInfo` includes: `programSlug`, `programName`, `tuition`, `registrationFee`, `stlmFee`, `supplyCost`, `totalCharges`, `totalEstimatedCost`, `paymentSchedule[]` (enrollment type, units/term, tuition/term, terms to complete), `paymentOptions[]`, and `notes[]`.

---

### navigation.ts

**Exports:**

| Export | Type | Description |
|---|---|---|
| `primaryNav` | `NavItem[]` | Main navigation tree (Programs, Admissions, Campus Life, About, Blog) |
| `persistentCTAs` | `PersistentCTA[]` | Header action buttons (Phone, Request Info, Apply Now) |
| `footerNav` | `object` | Footer navigation: `programs[]`, `quickLinks[]`, `legal[]` |

Each `NavItem` has: `label`, `href`, optional `children[]`, optional `isCTA`, optional `isExternal`.

---

### about.ts

**Exports:**

| Export | Type | Description |
|---|---|---|
| `aboutIDI` | `object` | About page data |

Contains:
- `headline` -- Page headline
- `tagline` -- Subtitle
- `history` -- Long-form history text (multi-paragraph)
- `milestones` -- `HistoryMilestone[]` with `year` and `event` (1984, 1990, 1992, 2010, 2026)
- `accreditation` -- Headline, body text, and `bodies[]` array (ACCSC, CIDA, BPPE) each with `name`, `abbreviation`, `url`, `scope`
- `whyAttend` -- `string[]` of 12 reasons to attend IDI

---

### contact.ts

**Exports:**

| Export | Type | Description |
|---|---|---|
| `socialLinks` | `SocialLink[]` | Social media links (Facebook, Instagram, YouTube, TikTok, Pinterest) |
| `contactInfo` | `ContactInfo` | Address, phone, fax, email, catalog URL, social links |
| `fullAddress` | `string` | Formatted address string |
| `googleMapsEmbedUrl` | `string` | Google Maps embed iframe URL |
| `googleMapsDirectionsUrl` | `string` | Google Maps directions link |
| `officeHours` | `object` | `weekdays`, `saturday`, `sunday` strings |

---

### enrollment.ts

**Exports:**

| Export | Type | Description |
|---|---|---|
| `enrollmentConfig` | `EnrollmentConfig` | Next class date and registration period |
| `enrollmentSteps` | `object[]` | 5-step enrollment process (Get Details -> Apply -> Visit -> Fund -> Enroll) |
| `admissionRequirements` | `object` | Requirements keyed by program level |

`admissionRequirements` keys: `certificate`, `associateOfArts`, `bachelorOfArts`, `masterOfInteriorArchitecture`. Each has `programSlug` and `requirements[]` array.

---

### disclosures.ts

**Exports:**

| Export | Type | Description |
|---|---|---|
| `disclosures` | `DisclosureDocument[]` | All regulatory disclosure documents |
| `getDisclosuresByCategory()` | `() => Record<string, DisclosureDocument[]>` | Group disclosures by category |
| `disclosureCategoryOrder` | `readonly string[]` | Display order for categories |

**Categories:** Institutional, ACCSC, BPPE, Financial Aid, Student Outcomes, Program-Specific.

Each document has: `name`, `category`, `path` (PDF URL under `/documents/`), optional `description`.

**Total documents:** 22 PDFs covering catalog, handbooks, accreditation letters, complaint procedures, annual reports, performance fact sheets, gainful employment disclosures, program outlines, and more.

---

### why-idi.ts

**Exports:**

| Export | Type | Description |
|---|---|---|
| `whyIDIPoints` | `WhyIDIPoint[]` | 6 reasons to choose IDI |
| `idiStats` | `object[]` | 4 statistics for the "by the numbers" section |

**whyIDIPoints:** Small Class Sizes, Newport Beach Location, ACCSC Accredited, CIDA Accredited BA, Industry-Connected Faculty, 40+ Years of Excellence. Each has `title`, `description`, `icon`.

**idiStats:** 42+ years, 4 programs, 15:1 ratio, 1000+ graduates. Each has `value`, `label`, `description`.

---

### homepage.ts

**Exports:**

| Export | Type | Description |
|---|---|---|
| `homepageCopy` | `object` | All homepage section copy |

Contains:
- `hero` -- `headline`, `subheadline`, `cta1`, `cta2`
- `bento` -- `overline`, `tagline`
- `gallery` -- `overline`, `title`, `captions[]`
- `testimonials[]` -- 3 testimonials with `quote`, `name`, `title`, `program`
- `campus` -- `headline`, `body`, `badges[]`
- `cta` -- `headline`, `subheadline`, `badge`

---

## TypeScript Interfaces (`src/types/index.ts`)

### Program Types

```typescript
interface Course {
  code: string;
  name: string;
  units: number;
  description: string;
  isTransfer?: boolean;
}

interface CertificateLecture {
  title: string;
}

interface CertificateStudio {
  title: string;
}

interface Program {
  slug: string;
  name: string;
  shortName: string;
  degreeType: "Certificate of Completion" | "Associate of Arts" | "Bachelor of Arts" | "Master's Degree";
  duration: string;
  creditUnits: string;
  tuition: number;
  totalCharges: number;
  totalEstimatedCost: number;
  description: string;
  isAvocational?: boolean;
  onlineAvailable?: boolean;
  schedule?: string;
  isAccredited: boolean;
  accreditor?: string;
  cidaAccredited?: boolean;
  minimumGPA?: number;
  admissionRequirements?: string;
  requiresGE?: string;
  partTimeOnly?: boolean;
  careerOutcomes: string[];
  careerNote?: string;
  careerDisclaimer?: string;
  courses: Course[];
  lectures?: CertificateLecture[];
  studios?: CertificateStudio[];
}
```

### Tuition Types

```typescript
interface PaymentOption {
  type: string;
  description: string;
  amount: number;
  perPeriod?: string;
}

interface PaymentScheduleRow {
  enrollment: string;
  unitsPerTerm: string;
  tuitionPerTerm: number;
  termsToComplete: string;
}

interface TuitionInfo {
  programSlug: string;
  programName: string;
  tuition: number;
  registrationFee: number;
  stlmFee: number;
  supplyCost: number;
  totalCharges: number;
  totalEstimatedCost: number;
  paymentSchedule: PaymentScheduleRow[];
  paymentOptions: PaymentOption[];
  notes: string[];
}
```

### Navigation Types

```typescript
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isCTA?: boolean;
  isExternal?: boolean;
}

interface PersistentCTA {
  label: string;
  href: string;
  type: "phone" | "link" | "button";
  variant?: "primary" | "secondary" | "accent";
}
```

### Testimonial Types

```typescript
interface Testimonial {
  name: string;
  quote: string;
  program: string;
  currentTitle: string;
  company: string;
  imageSrc: string;
}
```

### FAQ Types

```typescript
interface FAQItem {
  question: string;
  answer: string;
}
```

### Social & Contact Types

```typescript
interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface ContactInfo {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  fax: string;
  email: string;
  catalogUrl: string;
  socialLinks: SocialLink[];
}
```

### Enrollment Types

```typescript
interface EnrollmentConfig {
  nextClassDate: string;
  registrationPeriod: string;
}
```

### Disclosure Types

```typescript
interface DisclosureDocument {
  name: string;
  category: DisclosureCategory;
  path: string;
  description?: string;
}

type DisclosureCategory =
  | "Institutional"
  | "ACCSC"
  | "BPPE"
  | "Financial Aid"
  | "Student Outcomes"
  | "Program-Specific";
```

### About / Why IDI Types

```typescript
interface HistoryMilestone {
  year: number;
  event: string;
}

interface WhyIDIPoint {
  title: string;
  description: string;
  icon: string;
}
```

---

## Constants (`src/lib/constants.ts`)

| Constant | Value | Description |
|---|---|---|
| `SITE_NAME` | `"Interior Designers Institute"` | Full institution name |
| `SITE_TAGLINE` | `"Where Creative Talent Becomes Professional Design"` | Brand tagline |
| `SITE_URL` | `"https://idi.edu"` | Production URL |
| `PHONE` | `"(949) 675-4451"` | Main phone number |
| `FAX` | `"(949) 759-0667"` | Fax number |
| `EMAIL` | `"contact@idi.edu"` | Contact email |
| `ADDRESS` | `"1061 Camelback Street, Newport Beach, CA 92660"` | Full address |
| `FORMSTACK_URL` | `"/admissions/apply#application"` | Deprecated (was Formstack URL) |
| `APPLY_PATH` | `"/admissions/apply#application"` | Application page path |
| `SOCIAL_LINKS` | `{ facebook, youtube, tiktok, instagram, pinterest }` | Social media URLs |
| `NEXT_CLASS_DATE` | `"May 11"` | Next class start date |
| `ENROLLMENT_PERIOD` | `"Spring/Summer 2026"` | Current enrollment period |

---

## Validation Schemas (`src/lib/schemas.ts`)

Built with Zod v4. Schemas are used both by API routes (server-side validation) and can be referenced by form components for consistent validation rules.

### contactSchema

Fields: `howFound`, `firstName`, `lastName`, `contactMethod`, `email`, `phone`, `address`, `message?`

### applicationSchema

Fields: `programType` (enum), `firstName`, `lastName`, `preferredFirstName?`, `preferredLastName?`, `gender?`, `internationalStudent?`, `email`, `phone`, `phone2?`, `ssn` (9 digits), `birthDate`, `knownIllnesses?`, `address1`, `address2?`, `city`, `state`, `zip`, `caResident?`, `highSchool`, `graduationDate`, `collegesAttended?`, `coursePreference?`, `inPersonSchedule?`, `onlineSchedule?`, `hybridSchedule?`, `emergencyContact`, `emergencyPhone`, `paymentTier?`, `additionalInfo?`, `termsAccepted`, `howFound`, `diplomaFileUrl?`

### registrationSchema

All fields from applicationSchema adapted for registration plus: `combinedSchedule?`, `hybridLecture?`, `hybridStudio?`, `singleClass?`, `usResident` (enum), `caResident` (enum), `caAddress1?`-`caZip?`, `homePhone`, `cellPhone?`, `workPhone?`, `paymentTier` (enum: `"95" | "1195" | "2795"`), `cloverToken`, `termsAccepted` (must be `true`)

### tourSchema

Fields: `firstName`, `lastName`, `email`, `phone`, `preferredDate`, `preferredTime`, `groupSize`, `programInterest?`, `comments?`

### PAYMENT_AMOUNTS

Constant mapping payment tier strings to cent amounts:

```typescript
{
  "95": 9500,
  "1195": 119500,
  "2795": 279500,
}
```

---

## Utility Functions (`src/lib/utils.ts`)

| Export | Signature | Description |
|---|---|---|
| `formatCurrency` | `(amount: number) => string` | Formats number as USD with no decimals (e.g., `$39,900`) |
| `programImages` | `Record<string, string>` | Maps program slugs to Unsplash image URLs |

---

## Class Name Utility (`src/lib/cn.ts`)

| Export | Signature | Description |
|---|---|---|
| `cn` | `(...inputs: ClassValue[]) => string` | Merges class names using `clsx` + `tailwind-merge` (deduplicates Tailwind classes) |

Used throughout all components for conditional and merged class names.
