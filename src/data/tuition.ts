/** Tuition, fees, and payment schedule data for all programs. */
import type { TuitionInfo } from "@/types";

export const tuitionData: TuitionInfo[] = [
  // ─── Certificate Course ──────────────────────────────────────────────────────
  {
    programSlug: "certificate",
    programName: "Avocational Certificate Course in Interior Design",
    tuition: 2400,
    registrationFee: 95,
    stlmFee: 0,
    supplyCost: 300,
    estimatedAdditionalSupplies: 250,
    totalCharges: 2795,
    totalEstimatedCost: 3045,
    paymentSchedule: [
      {
        enrollment: "Part-Time",
        unitsPerTerm: "10",
        tuitionPerTerm: 2400,
        termsToComplete: "11–12 weeks",
      },
    ],
    paymentOptions: [
      {
        type: "Full Payment",
        description: "$2,400 payment in full.",
        amount: 2400,
      },
      {
        type: "Payment Plan",
        description: "Three monthly payments of $800.00.",
        amount: 800,
        perPeriod: "per month",
      },
      {
        type: "Individual Course",
        description: "Lecture Series or Studio Workshop individually at $1,200 each.",
        amount: 1200,
        perPeriod: "per course",
      },
    ],
    notes: [
      "Registration fee of $95 is non-refundable.",
      "Books & Supplies: $300.",
      "Estimated additional Supplies $250.",
      "Total estimated cost of $3,045 includes books and supplies not included in total charges.",
      "Online option available at the same tuition rate.",
      "* Prerequisite is completion of the Associate of Arts Degree in Interior Design and payment of the tuition.",
    ],
  },

  // ─── Associate of Arts Degree ────────────────────────────────────────────────
  {
    programSlug: "associate-of-arts",
    programName: "Associate of Arts Degree in Interior Design",
    tuition: 39900,
    registrationFee: 100,
    stlmFee: 0,
    labFee: 600,
    supplyCost: 2500,
    totalCharges: 40600,
    totalEstimatedCost: 43100,
    paymentSchedule: [
      {
        enrollment: "Full-Time (5 terms)",
        unitsPerTerm: "16",
        tuitionPerTerm: 7980,
        termsToComplete: "5 terms",
      },
      {
        enrollment: "3/4 Time (7 terms)",
        unitsPerTerm: "12",
        tuitionPerTerm: 5985,
        termsToComplete: "7 terms",
      },
      {
        enrollment: "Part-Time (10 terms)",
        unitsPerTerm: "8",
        tuitionPerTerm: 3990,
        termsToComplete: "10 terms",
      },
    ],
    paymentOptions: [
      {
        type: "Per-Term Payment",
        description:
          "Payments may be paid in full or split into 3 monthly payments.",
        amount: 7980,
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
      "Registration fee of $100 is non-refundable.",
      "Computer Lab Fees: $200 each x 3 = $600.",
      "Estimated Books & Supplies $2,500 — purchased via third party.",
      "Total charges: Tuition $39,900 + Registration $100 + Lab Fees $600 = $40,600.",
      "Total estimated cost of $43,100 includes books and supplies not included in total charges.",
      "Full-Time: 4 classes @ $1,995 each = $7,980 per term.",
      "3/4 Time: 3 classes @ $1,995 each = $5,985 per term.",
      "Part-Time: 2 classes @ $1,995 each = $3,990 per term.",
      "Payments may be paid in full or split into 3 monthly payments.",
      "Financial aid available for those who qualify.",
      "If a student obtains a loan to pay for an educational program, the student will have the responsibility to repay the full amount of the loan plus interest, less the amount of any refund. If the student has received federal student financial aid funds, the student is entitled to a refund of the moneys not paid from the federal student financial aid program funds. For students receiving federal funds please refer to Student Enrollment Agreement for Title IV refund policy.",
    ],
  },

  // ─── Bachelor of Arts Degree ─────────────────────────────────────────────────
  {
    programSlug: "bachelor-of-arts",
    programName: "Bachelor of Arts Degree in Interior Design",
    tuition: 19950,
    registrationFee: 100,
    stlmFee: 0,
    labFee: 800,
    supplyCost: 2500,
    totalCharges: 20850,
    totalEstimatedCost: 23350,
    paymentSchedule: [
      {
        enrollment: "Full-Time (3 terms)",
        unitsPerTerm: "12",
        tuitionPerTerm: 6651,
        termsToComplete: "3 terms",
      },
      {
        enrollment: "Part-Time (5 terms)",
        unitsPerTerm: "8",
        tuitionPerTerm: 4434,
        termsToComplete: "5 terms",
      },
    ],
    paymentOptions: [
      {
        type: "Per-Term Payment",
        description:
          "Payments may be paid in full or split into 3 monthly payments.",
        amount: 6651,
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
      "Registration fee of $100 is non-refundable.",
      "Computer Lab Fees: $200 each, total $800.",
      "Estimated Books & Supplies $2,500 — purchased from third party.",
      "Total charges: Tuition $19,950 + Registration $100 + Lab Fees $800 = $20,850.",
      "Total estimated cost of $23,350 includes books and supplies not included in total charges.",
      "Payments may be paid in full or split into 3 monthly payments.",
      "Requires 45 quarter units of General Education from an accredited institution (not included in IDI tuition).",
      "CIDA-accredited program.",
      "Financial aid available for those who qualify.",
      "If a student obtains a loan to pay for an educational program, the student will have the responsibility to repay the full amount of the loan plus interest, less the amount of any refund. If the student has received federal student financial aid funds, the student is entitled to a refund of the moneys not paid from the federal student financial aid program funds. For students receiving federal funds please refer to Student Enrollment Agreement for Title IV refund policy.",
    ],
  },

  // ─── Master of Interior Architecture ─────────────────────────────────────────
  {
    programSlug: "master-interior-architecture",
    programName: "Master of Interior Architecture",
    tuition: 22500,
    registrationFee: 100,
    stlmFee: 0,
    supplyCost: 2500,
    totalCharges: 22600,
    totalEstimatedCost: 25100,
    paymentSchedule: [
      {
        enrollment: "Full-Time (3 terms)",
        unitsPerTerm: "15",
        tuitionPerTerm: 7500,
        termsToComplete: "3 terms (12 months)",
      },
      {
        enrollment: "Full-Time (4 terms)",
        unitsPerTerm: "11.25",
        tuitionPerTerm: 2500,
        termsToComplete: "4 terms (15 months)",
      },
    ],
    paymentOptions: [
      {
        type: "Pay As You Go",
        description:
          "$2,500 per class, $500 per credit unit. 3 terms = $7,500/term. 4 terms = $2,500/class.",
        amount: 22500,
        perPeriod: "total tuition",
      },
    ],
    notes: [
      "Registration fee of $100 is non-refundable.",
      "Books and Supplies estimated at $2,500 purchased from 3rd party.",
      "Total charges: $22,600.",
      "Total estimated cost of $25,100 includes books and supplies not included in total charges.",
      "Minimum cumulative GPA of 3.0 required.",
      "Requires a Bachelor of Arts in interior design or architecture from a US accredited institution.",
      "If a student obtains a loan to pay for an educational program, the student will have the responsibility to repay the full amount of the loan plus interest, less the amount of any refund. If the student has received federal student financial aid funds, the student is entitled to a refund of the moneys not paid from the federal student financial aid program funds. For students receiving federal funds please refer to Student Enrollment Agreement for Title IV refund policy.",
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
