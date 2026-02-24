import type { EnrollmentConfig } from "@/types";

export const enrollmentConfig: EnrollmentConfig = {
  nextClassDate: "May 11",
  registrationPeriod: "Spring/Summer 2026",
};

/**
 * Enrollment steps displayed on the admissions / apply page.
 */
export const enrollmentSteps = [
  {
    step: 1,
    title: "Get the Details",
    description:
      "Fill out the Request Info form or call (949) 675-4451. We'll walk you through programs, schedules, and exactly what to expect — no pressure, just clarity.",
  },
  {
    step: 2,
    title: "Apply Online",
    description:
      "Submit your application in minutes. Once we receive it, an admissions rep will reach out to set up your campus visit and interview.",
  },
  {
    step: 3,
    title: "Visit Campus & Meet the Faculty",
    description:
      "See the studios. Meet the instructors. Walk the Newport Beach campus. This is where you'll find out if IDI feels like home — most people know within five minutes.",
  },
  {
    step: 4,
    title: "Sort Out Funding",
    description:
      "If you need financial aid, complete the FAFSA and our Financial Aid team will help you explore every option available.",
  },
  {
    step: 5,
    title: "Lock In Your Spot",
    description:
      "Sign your enrollment agreement, register for classes, and get ready. Your design education starts now.",
  },
];

/**
 * Admission requirements by program level.
 */
export const admissionRequirements = {
  certificate: {
    programSlug: "certificate",
    requirements: [
      "Must be at least 18 years of age or have a high school diploma/GED",
      "Complete the enrollment application",
      "Pay the registration fee",
      "No prior design experience required",
    ],
  },
  associateOfArts: {
    programSlug: "associate-of-arts",
    requirements: [
      "High school diploma or GED equivalent",
      "Successful completion of the Certificate Course (or equivalent)",
      "Complete the enrollment application",
      "Personal interview with admissions",
      "Pay the registration fee",
    ],
  },
  bachelorOfArts: {
    programSlug: "bachelor-of-arts",
    requirements: [
      "Successful completion of the Associate of Arts Degree at IDI (or equivalent)",
      "45 quarter units of General Education from an accredited institution",
      "Minimum GPA as specified in the catalog",
      "Complete the enrollment application",
      "Personal interview with admissions",
    ],
  },
  masterOfInteriorArchitecture: {
    programSlug: "master-interior-architecture",
    requirements: [
      "Bachelor of Arts in interior design or architecture from an accredited US institution",
      "Portfolio review demonstrating design competency",
      "Personal interview with the program director",
      "Minimum cumulative GPA of 3.0",
      "Professional resume",
      "Statement of purpose",
    ],
  },
};
