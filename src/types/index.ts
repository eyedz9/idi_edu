// ─── Program Types ───────────────────────────────────────────────────────────

export interface Course {
  code: string;
  name: string;
  units: number;
  description: string;
  isTransfer?: boolean;
}

export interface CertificateLecture {
  title: string;
}

export interface CertificateStudio {
  title: string;
}

export interface Program {
  slug: string;
  name: string;
  shortName: string;
  degreeType:
    | "Certificate of Completion"
    | "Associate of Arts"
    | "Bachelor of Arts"
    | "Master's Degree";
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

// ─── Tuition Types ───────────────────────────────────────────────────────────

export interface PaymentOption {
  type: string;
  description: string;
  amount: number;
  perPeriod?: string;
}

export interface PaymentScheduleRow {
  enrollment: string;
  unitsPerTerm: string;
  tuitionPerTerm: number;
  termsToComplete: string;
}

export interface TuitionInfo {
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

// ─── Navigation Types ────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isCTA?: boolean;
  isExternal?: boolean;
}

export interface PersistentCTA {
  label: string;
  href: string;
  type: "phone" | "link" | "button";
  variant?: "primary" | "secondary" | "accent";
}

// ─── Testimonial Types ───────────────────────────────────────────────────────

export interface Testimonial {
  name: string;
  quote: string;
  program: string;
  currentTitle: string;
  company: string;
  imageSrc: string;
}

// ─── FAQ Types ───────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

// ─── Social & Contact Types ──────────────────────────────────────────────────

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
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

// ─── Enrollment Types ────────────────────────────────────────────────────────

export interface EnrollmentConfig {
  nextClassDate: string;
  registrationPeriod: string;
}

// ─── Disclosure Types ────────────────────────────────────────────────────────

export interface DisclosureDocument {
  name: string;
  category: DisclosureCategory;
  path: string;
  description?: string;
}

export type DisclosureCategory =
  | "Institutional"
  | "ACCSC"
  | "BPPE"
  | "Financial Aid"
  | "Student Outcomes"
  | "Program-Specific";

// ─── About / Why IDI Types ───────────────────────────────────────────────────

export interface HistoryMilestone {
  year: number;
  event: string;
}

export interface WhyIDIPoint {
  title: string;
  description: string;
  icon: string;
}
