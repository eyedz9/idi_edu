/* -------------------------------------------------------------------------- */
/*  Mega Menu — Static Content Data                                          */
/* -------------------------------------------------------------------------- */

export interface ProgramMenuItem {
  title: string;
  shortTitle: string;
  href: string;
  duration: string;
  description: string;
  icon: string;
  badges?: string[];
}

export interface AdmissionsMenuItem {
  title: string;
  href: string;
  description: string;
  icon: string;
}

/* ── Programs ─────────────────────────────────────────────────────────────── */

export const programMenuItems: ProgramMenuItem[] = [
  {
    title: "Interior Design Certificate",
    shortTitle: "Certificate",
    href: "/programs/certificate",
    duration: "12 Weeks",
    description: "Foundation course in residential and commercial design principles.",
    icon: "certificate",
    badges: [],
  },
  {
    title: "Associate of Arts",
    shortTitle: "Associate",
    href: "/programs/associate-of-arts",
    duration: "24–48 Months",
    description: "Comprehensive program building core design and technical skills.",
    icon: "associate",
    badges: ["Online Available"],
  },
  {
    title: "Bachelor of Arts",
    shortTitle: "Bachelor",
    href: "/programs/bachelor-of-arts",
    duration: "30–54 Months",
    description: "Advanced degree with CIDA accreditation and professional preparation.",
    icon: "bachelor",
    badges: ["CIDA"],
  },
  {
    title: "Master of Interior Architecture",
    shortTitle: "Master",
    href: "/programs/master-interior-architecture",
    duration: "12–15 Months",
    description: "Graduate-level study in interior architecture and advanced design.",
    icon: "master",
    badges: [],
  },
];

/* ── Admissions ───────────────────────────────────────────────────────────── */

export const admissionsMenuItems: AdmissionsMenuItem[] = [
  {
    title: "How to Apply",
    href: "/admissions/apply",
    description: "Step-by-step guide to your application journey.",
    icon: "clipboard",
  },
  {
    title: "Tuition & Fees",
    href: "/admissions/tuition",
    description: "Transparent pricing for every program level.",
    icon: "calculator",
  },
  {
    title: "Financial Aid",
    href: "/admissions/financial-aid",
    description: "Scholarships, grants, and federal aid options.",
    icon: "banknotes",
  },
  {
    title: "Documents & Disclosures",
    href: "/disclosures",
    description: "Institutional documents, accreditation, and consumer information.",
    icon: "document",
  },
];
