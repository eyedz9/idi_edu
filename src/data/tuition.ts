import type { TuitionInfo } from "@/types";

export const tuitionData: TuitionInfo[] = [
  // ─── Certificate Course ──────────────────────────────────────────────────────
  {
    programSlug: "certificate",
    programName: "Certificate Course in Interior Design",
    tuition: 2400,
    registrationFee: 200,
    stlmFee: 0,
    supplyCost: 195,
    totalCharges: 2795,
    totalEstimatedCost: 3045,
    paymentSchedule: [
      {
        enrollment: "Full-time",
        unitsPerTerm: "10",
        tuitionPerTerm: 2400,
        termsToComplete: "1 term (12 weeks)",
      },
    ],
    paymentOptions: [
      {
        type: "Full Payment",
        description: "Pay in full at the time of registration.",
        amount: 2795,
      },
      {
        type: "Payment Plan",
        description: "Two payments: 50% at registration, 50% at midpoint.",
        amount: 1398,
        perPeriod: "per installment",
      },
    ],
    notes: [
      "Registration fee of $200 is non-refundable.",
      "Supply cost of $195 covers all course materials.",
      "Total estimated cost of $3,045 includes books and supplies not included in total charges.",
      "Online option available at the same tuition rate.",
    ],
  },

  // ─── Associate of Arts Degree ────────────────────────────────────────────────
  {
    programSlug: "associate-of-arts",
    programName: "Associate of Arts Degree in Interior Design",
    tuition: 39900,
    registrationFee: 200,
    stlmFee: 0,
    supplyCost: 500,
    totalCharges: 40600,
    totalEstimatedCost: 43100,
    paymentSchedule: [
      {
        enrollment: "Full-time (4 terms)",
        unitsPerTerm: "22.5",
        tuitionPerTerm: 9975,
        termsToComplete: "4 terms (24 months)",
      },
      {
        enrollment: "3/4 time (6 terms)",
        unitsPerTerm: "15",
        tuitionPerTerm: 6650,
        termsToComplete: "6 terms (36 months)",
      },
      {
        enrollment: "Part-time (8 terms)",
        unitsPerTerm: "11.25",
        tuitionPerTerm: 4988,
        termsToComplete: "8 terms (48 months)",
      },
    ],
    paymentOptions: [
      {
        type: "Per-Term Payment",
        description:
          "Tuition is paid per term. Amount varies based on enrollment status (full-time, 3/4 time, or part-time).",
        amount: 9975,
        perPeriod: "per term (full-time)",
      },
      {
        type: "Federal Financial Aid",
        description:
          "Title IV financial aid is available for students who qualify. Contact the Financial Aid office for details.",
        amount: 0,
      },
    ],
    notes: [
      "Registration fee of $200 is non-refundable and paid once.",
      "Supply cost of $500 covers specialized design materials and equipment.",
      "Total estimated cost of $43,100 includes books, supplies, and other expenses not included in total charges.",
      "Tuition per unit: $443.33 (total $39,900 for 90 quarter units).",
      "Financial aid available for those who qualify.",
    ],
  },

  // ─── Bachelor of Arts Degree ─────────────────────────────────────────────────
  {
    programSlug: "bachelor-of-arts",
    programName: "Bachelor of Arts Degree in Interior Design",
    tuition: 19950,
    registrationFee: 200,
    stlmFee: 0,
    supplyCost: 700,
    totalCharges: 20850,
    totalEstimatedCost: 23350,
    paymentSchedule: [
      {
        enrollment: "Full-time (2 terms)",
        unitsPerTerm: "22.5",
        tuitionPerTerm: 9975,
        termsToComplete: "2 terms (12 months)",
      },
      {
        enrollment: "3/4 time (3 terms)",
        unitsPerTerm: "15",
        tuitionPerTerm: 6650,
        termsToComplete: "3 terms (18 months)",
      },
      {
        enrollment: "Part-time (4 terms)",
        unitsPerTerm: "11.25",
        tuitionPerTerm: 4988,
        termsToComplete: "4 terms (24 months)",
      },
    ],
    paymentOptions: [
      {
        type: "Per-Term Payment",
        description:
          "Tuition is paid per term. Amount varies based on enrollment status (full-time, 3/4 time, or part-time).",
        amount: 9975,
        perPeriod: "per term (full-time)",
      },
      {
        type: "Federal Financial Aid",
        description:
          "Title IV financial aid is available for students who qualify. Contact the Financial Aid office for details.",
        amount: 0,
      },
    ],
    notes: [
      "Tuition of $19,950 is in addition to the Associate of Arts degree tuition.",
      "Combined AA + BA total tuition: $59,850.",
      "Registration fee of $200 is non-refundable (paid once if continuing from AA).",
      "Supply cost of $700 covers advanced materials and equipment.",
      "Total estimated cost of $23,350 includes books, supplies, and other expenses.",
      "Requires 45 quarter units of General Education from an accredited institution (not included in IDI tuition).",
      "CIDA-accredited program.",
      "Financial aid available for those who qualify.",
    ],
  },

  // ─── Master of Interior Architecture ─────────────────────────────────────────
  {
    programSlug: "master-interior-architecture",
    programName: "Master of Interior Architecture",
    tuition: 22500,
    registrationFee: 100,
    stlmFee: 0,
    supplyCost: 0,
    totalCharges: 22600,
    totalEstimatedCost: 25100,
    paymentSchedule: [
      {
        enrollment: "Part-time (3 terms)",
        unitsPerTerm: "15",
        tuitionPerTerm: 7500,
        termsToComplete: "3 terms (12 months)",
      },
      {
        enrollment: "Part-time (4 terms)",
        unitsPerTerm: "11.25",
        tuitionPerTerm: 5625,
        termsToComplete: "4 terms (15 months)",
      },
    ],
    paymentOptions: [
      {
        type: "Per-Term Payment",
        description:
          "Tuition is paid per term based on the number of terms to complete.",
        amount: 7500,
        perPeriod: "per term (3-term track)",
      },
    ],
    notes: [
      "Registration fee of $100 is non-refundable.",
      "Total estimated cost of $25,100 includes books and additional expenses.",
      "Part-time, in-class only. Monday and Thursday evenings.",
      "Minimum cumulative GPA of 3.0 required.",
      "Requires a Bachelor of Arts in interior design or architecture from a US accredited institution.",
    ],
  },
];

/** Helper: find tuition info by program slug */
export function getTuitionByProgram(slug: string): TuitionInfo | undefined {
  return tuitionData.find((t) => t.programSlug === slug);
}

/** Helper: compute combined AA + BA total */
export function getCombinedBATuition(): number {
  const aa = getTuitionByProgram("associate-of-arts");
  const ba = getTuitionByProgram("bachelor-of-arts");
  return (aa?.tuition ?? 0) + (ba?.tuition ?? 0);
}
