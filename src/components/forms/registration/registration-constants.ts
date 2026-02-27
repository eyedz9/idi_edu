/** Shared constants: initial form state, Tailwind class tokens, and schedule/program data. */
import type { RegistrationFormData } from "./registration-types";

/* -------------------------------------------------------------------------- */
/*  Term information                                                          */
/* -------------------------------------------------------------------------- */

export const TERM_INFO = {
  name: "May 2026 Student Registration",
  subtitle: "Combined Certificate Course",
  startDate: "05/11/2026",
  endDate: "07/30/2026",
  displayDates: "May 11, 2026 – July 30, 2026",
} as const;

/* -------------------------------------------------------------------------- */
/*  Program types                                                             */
/* -------------------------------------------------------------------------- */

export const PROGRAM_TYPES = [
  {
    value: "combined",
    label: "Combined Certificate Course",
    description:
      "Full Course — includes Lecture + Studio, meets twice per week",
  },
  {
    value: "hybrid",
    label: "Hybrid Certificate Course",
    description:
      "Mix & Match — choose 1 Lecture time + 1 Studio time separately",
  },
  {
    value: "single",
    label: "Lecture or Studio Only",
    description:
      "For students not enrolling in the full Certificate Course",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Schedule options                                                          */
/* -------------------------------------------------------------------------- */

export const COMBINED_SCHEDULES = [
  {
    value: "day-tue-wed",
    label: "Tue/Wed 9:00 AM – 11:30 AM (In-Person)",
    tag: "DAY",
  },
  {
    value: "day-tue-thu",
    label: "Tue/Thu 9:00 AM – 11:30 AM (In-Person)",
    tag: "DAY",
  },
  {
    value: "eve-tue-thu-online",
    label: "Tue/Thu 6:00 PM – 8:30 PM (Online)",
    tag: "EVENING",
  },
];

export const HYBRID_LECTURES = [
  { value: "lec-tue-am", label: "Tue 9:00 AM – 11:30 AM (In-Person)" },
  { value: "lec-thu-pm", label: "Thu 6:00 PM – 8:30 PM (Online)" },
];

export const HYBRID_STUDIOS = [
  { value: "stu-tue-pm-online", label: "Tue 6:00 PM – 8:30 PM (Online)" },
  {
    value: "stu-tue-pm-person",
    label: "Tue 6:00 PM – 8:30 PM (In-Person)",
  },
  { value: "stu-wed-am", label: "Wed 9:00 AM – 11:30 AM (In-Person)" },
  { value: "stu-thu-am", label: "Thu 9:00 AM – 11:30 AM (In-Person)" },
];

export const SINGLE_OPTIONS = [
  {
    value: "lec-tue-am",
    label: "Lecture — Tue 9:00 AM – 11:30 AM (In-Person)",
  },
  {
    value: "lec-thu-pm",
    label: "Lecture — Thu 6:00 PM – 8:30 PM (Online)",
  },
  {
    value: "stu-tue-pm-online",
    label: "Studio — Tue 6:00 PM – 8:30 PM (Online)",
  },
  {
    value: "stu-tue-pm-person",
    label: "Studio — Tue 6:00 PM – 8:30 PM (In-Person)",
  },
  {
    value: "stu-wed-am",
    label: "Studio — Wed 9:00 AM – 11:30 AM (In-Person)",
  },
  {
    value: "stu-thu-am",
    label: "Studio — Thu 9:00 AM – 11:30 AM (In-Person)",
  },
];

/* -------------------------------------------------------------------------- */
/*  Course-preference schedule options (Step 3)                               */
/* -------------------------------------------------------------------------- */

export const IN_PERSON_OPTIONS = [
  {
    value: "lec-tue-am",
    label: "Lecture Series, meets Tues 9 AM – 11:30 AM",
  },
  {
    value: "stu-tue-pm",
    label: "Studio Workshop, meets Tues 6 PM – 8:30 PM",
  },
  {
    value: "stu-wed-am",
    label: "Studio Workshop, meets Wed 9 AM – 11:30 AM",
  },
  {
    value: "stu-thu-am",
    label: "Studio Workshop, meets Thurs 9 AM – 11:30 AM",
  },
  {
    value: "combined-tue-wed",
    label: "Combined Course, meets Tues and Wed 9:00 AM – 11:30 AM",
  },
  {
    value: "combined-tue-thu",
    label: "Combined Course, meets Tues and Thurs 9:00 AM – 11:30 AM",
  },
];

export const ONLINE_OPTIONS = [
  {
    value: "lec-thu-pm-online",
    label: "Lecture Series, Thurs 6 PM – 8:30 PM ONLINE",
  },
  {
    value: "stu-tue-pm-online",
    label: "Studio Series, Tues 6 PM – 8:30 PM ONLINE",
  },
  {
    value: "combined-tue-thu-online",
    label: "Combined Course, Tue/Thu 6 PM – 8:30 PM ONLINE",
  },
];

export const HYBRID_PREFERENCE_OPTIONS = [
  {
    value: "lec-tue-am-person",
    label: "Lecture Series, meets Tues 9 AM – 11:30 AM IN PERSON",
  },
  {
    value: "lec-thu-pm-online",
    label: "Lecture Series, Thurs 6 PM – 8:30 PM ONLINE",
  },
  {
    value: "stu-tue-pm-person",
    label: "Studio Workshop, Tues 6 PM – 8:30 PM IN PERSON",
  },
  {
    value: "stu-wed-am-person",
    label: "Studio Workshop, meets Wed 9 AM – 11:30 AM IN PERSON",
  },
  {
    value: "stu-thu-am-person",
    label: "Studio Workshop, meets Thurs 9 AM – 11:30 AM IN PERSON",
  },
];

/* -------------------------------------------------------------------------- */
/*  Payment tiers                                                             */
/* -------------------------------------------------------------------------- */

export const PAYMENT_TIERS = [
  {
    value: "95",
    price: "$95",
    label: "Registration Fee",
    description: "Non-Refundable Registration Fee only",
  },
  {
    value: "1195",
    price: "$1,195",
    label: "Partial Payment",
    description:
      "Includes: $95 Registration Fee (Non-Refundable) + 1st of 3 Tuition Payments $800 + $300 Books and Supplies",
  },
  {
    value: "2795",
    price: "$2,795",
    label: "Full Payment",
    description:
      "Includes: $95 Registration Fee (Non-Refundable) + Total Tuition Payment $2,400 + $300 Books and Supplies",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  How-found options                                                         */
/* -------------------------------------------------------------------------- */

export const HOW_FOUND_OPTIONS = [
  "Google Search",
  "Social Media",
  "Friend / Family Referral",
  "Design Center / Showroom",
  "ASID / IIDA / NKBA Event",
  "College Fair",
  "Other",
];

/* -------------------------------------------------------------------------- */
/*  Step labels                                                               */
/* -------------------------------------------------------------------------- */

export const STEP_LABELS = [
  "Choose Program",
  "Personal Info",
  "Education",
  "Payment & Terms",
] as const;

/* -------------------------------------------------------------------------- */
/*  Shared style tokens                                                       */
/* -------------------------------------------------------------------------- */

export const inputBase =
  "w-full rounded-lg border border-white/10 bg-plum-800/60 px-4 py-3 text-sm text-parchment placeholder:text-sandstone/40 transition-colors focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20";

export const labelBase = "block text-sm font-semibold text-parchment mb-1.5";

export const selectBase =
  "w-full rounded-lg border border-white/10 bg-plum-800/60 px-4 py-3 text-sm text-parchment transition-colors focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20";

/* -------------------------------------------------------------------------- */
/*  Initial form data                                                         */
/* -------------------------------------------------------------------------- */

export const INITIAL_FORM_DATA: RegistrationFormData = {
  programType: "",
  combinedSchedule: "",
  hybridLecture: "",
  hybridStudio: "",
  singleClass: "",

  firstName: "",
  lastName: "",
  preferredFirstName: "",
  preferredLastName: "",
  gender: "",
  usResident: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  caResident: "",
  internationalStudent: "",
  caAddress1: "",
  caAddress2: "",
  caCity: "",
  caState: "",
  caZip: "",
  email: "",
  homePhone: "",
  cellPhone: "",
  workPhone: "",
  ssn: "",
  birthDate: "",
  knownIllnesses: "",
  emergencyContact: "",
  emergencyPhone: "",

  highSchool: "",
  diplomaFile: null,
  graduationDate: "",
  collegesAttended: "",
  coursePreference: "",
  inPersonSchedule: [],
  onlineSchedule: [],
  hybridSchedule: [],

  paymentTier: "",
  additionalInfo: "",
  termsAccepted: false,
  howFound: "",
};
