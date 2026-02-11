import type { DisclosureDocument } from "@/types";

export const disclosures: DisclosureDocument[] = [
  // ─── Institutional ─────────────────────────────────────────────────────────
  {
    name: "School Catalog",
    category: "Institutional",
    path: "/documents/idi-catalog.pdf",
    description:
      "The complete Interior Designers Institute catalog including program descriptions, policies, tuition, and enrollment information.",
  },
  {
    name: "School Performance Fact Sheet",
    category: "Institutional",
    path: "/documents/school-performance-fact-sheet.pdf",
    description:
      "Annual report on student outcomes including completion rates, placement rates, and license examination passage rates.",
  },
  {
    name: "Student Handbook",
    category: "Institutional",
    path: "/documents/student-handbook.pdf",
    description:
      "Comprehensive guide to student policies, academic standards, student services, and campus procedures.",
  },
  {
    name: "Enrollment Agreement",
    category: "Institutional",
    path: "/documents/enrollment-agreement.pdf",
    description:
      "The official enrollment agreement that students sign upon admission, outlining terms, costs, and conditions.",
  },

  // ─── ACCSC ─────────────────────────────────────────────────────────────────
  {
    name: "ACCSC Accreditation Letter",
    category: "ACCSC",
    path: "/documents/accsc-accreditation-letter.pdf",
    description:
      "Official letter of accreditation from the Accrediting Commission of Career Schools and Colleges.",
  },
  {
    name: "ACCSC Student Complaint Procedure",
    category: "ACCSC",
    path: "/documents/accsc-complaint-procedure.pdf",
    description:
      "Information on how students may file complaints with ACCSC regarding the institution.",
  },
  {
    name: "ACCSC Annual Report",
    category: "ACCSC",
    path: "/documents/accsc-annual-report.pdf",
    description:
      "Annual report submitted to ACCSC with institutional data and student outcomes.",
  },

  // ─── BPPE ──────────────────────────────────────────────────────────────────
  {
    name: "BPPE Annual Report",
    category: "BPPE",
    path: "/documents/bppe-annual-report.pdf",
    description:
      "Annual report filed with the California Bureau for Private Postsecondary Education.",
  },
  {
    name: "BPPE School Performance Fact Sheet",
    category: "BPPE",
    path: "/documents/bppe-performance-fact-sheet.pdf",
    description:
      "BPPE-mandated performance fact sheet with student outcome data.",
  },
  {
    name: "Notice to Prospective Students",
    category: "BPPE",
    path: "/documents/bppe-notice-prospective-students.pdf",
    description:
      "Required BPPE notice to prospective students regarding the institution's approval status.",
  },
  {
    name: "Student Tuition Recovery Fund (STRF) Disclosure",
    category: "BPPE",
    path: "/documents/strf-disclosure.pdf",
    description:
      "Information about the Student Tuition Recovery Fund as required by the BPPE.",
  },

  // ─── Financial Aid ─────────────────────────────────────────────────────────
  {
    name: "Net Price Calculator",
    category: "Financial Aid",
    path: "/documents/net-price-calculator.pdf",
    description:
      "Tool and information for estimating the net price of attendance after financial aid.",
  },
  {
    name: "Financial Aid Consumer Information",
    category: "Financial Aid",
    path: "/documents/financial-aid-consumer-info.pdf",
    description:
      "Required consumer information regarding financial aid programs, policies, and disclosures.",
  },
  {
    name: "Satisfactory Academic Progress (SAP) Policy",
    category: "Financial Aid",
    path: "/documents/sap-policy.pdf",
    description:
      "Policy outlining the academic standards students must maintain to remain eligible for financial aid.",
  },
  {
    name: "Return of Title IV Funds Policy",
    category: "Financial Aid",
    path: "/documents/return-title-iv-policy.pdf",
    description:
      "Policy describing how financial aid funds are returned when a student withdraws.",
  },

  // ─── Student Outcomes ──────────────────────────────────────────────────────
  {
    name: "Gainful Employment Disclosure \u2014 Certificate",
    category: "Student Outcomes",
    path: "/documents/ge-disclosure-certificate.pdf",
    description:
      "Gainful employment disclosure data for the Certificate Course program.",
  },
  {
    name: "Gainful Employment Disclosure \u2014 Associate of Arts",
    category: "Student Outcomes",
    path: "/documents/ge-disclosure-aa.pdf",
    description:
      "Gainful employment disclosure data for the Associate of Arts program.",
  },
  {
    name: "Gainful Employment Disclosure \u2014 Bachelor of Arts",
    category: "Student Outcomes",
    path: "/documents/ge-disclosure-ba.pdf",
    description:
      "Gainful employment disclosure data for the Bachelor of Arts program.",
  },
  {
    name: "Gainful Employment Disclosure \u2014 Master of Interior Architecture",
    category: "Student Outcomes",
    path: "/documents/ge-disclosure-mia.pdf",
    description:
      "Gainful employment disclosure data for the Master of Interior Architecture program.",
  },

  // ─── Program-Specific ──────────────────────────────────────────────────────
  {
    name: "CIDA Accreditation \u2014 Bachelor of Arts",
    category: "Program-Specific",
    path: "/documents/cida-accreditation-ba.pdf",
    description:
      "CIDA accreditation documentation for the Bachelor of Arts in Interior Design program.",
  },
  {
    name: "Program Outline \u2014 Certificate Course",
    category: "Program-Specific",
    path: "/documents/program-outline-certificate.pdf",
    description:
      "Detailed program outline and curriculum for the Certificate Course.",
  },
  {
    name: "Program Outline \u2014 Associate of Arts",
    category: "Program-Specific",
    path: "/documents/program-outline-aa.pdf",
    description:
      "Detailed program outline and curriculum for the Associate of Arts degree.",
  },
  {
    name: "Program Outline \u2014 Bachelor of Arts",
    category: "Program-Specific",
    path: "/documents/program-outline-ba.pdf",
    description:
      "Detailed program outline and curriculum for the Bachelor of Arts degree.",
  },
  {
    name: "Program Outline \u2014 Master of Interior Architecture",
    category: "Program-Specific",
    path: "/documents/program-outline-mia.pdf",
    description:
      "Detailed program outline and curriculum for the Master of Interior Architecture.",
  },
];

/** Helper: get disclosures grouped by category */
export function getDisclosuresByCategory(): Record<string, DisclosureDocument[]> {
  return disclosures.reduce(
    (acc, doc) => {
      if (!acc[doc.category]) {
        acc[doc.category] = [];
      }
      acc[doc.category].push(doc);
      return acc;
    },
    {} as Record<string, DisclosureDocument[]>,
  );
}

/** All disclosure categories in display order */
export const disclosureCategoryOrder = [
  "Institutional",
  "ACCSC",
  "BPPE",
  "Financial Aid",
  "Student Outcomes",
  "Program-Specific",
] as const;
