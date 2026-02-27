/** Shared types for the multi-step registration form. */
export type ProgramType = "combined" | "hybrid" | "single";
export type CoursePreference = "in-person" | "online" | "hybrid";
export type StepId = 1 | 2 | 3 | 4;

export interface RegistrationFormData {
  /* Step 1 — Program */
  programType: ProgramType | "";
  combinedSchedule: string;
  hybridLecture: string;
  hybridStudio: string;
  singleClass: string;

  /* Step 2 — Personal */
  firstName: string;
  lastName: string;
  preferredFirstName: string;
  preferredLastName: string;
  gender: "male" | "female" | "";
  usResident: "yes" | "no" | "";
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  caResident: "yes" | "no" | "";
  internationalStudent: "yes" | "no" | "";
  caAddress1: string;
  caAddress2: string;
  caCity: string;
  caState: string;
  caZip: string;
  email: string;
  homePhone: string;
  cellPhone: string;
  workPhone: string;
  ssn: string;
  birthDate: string;
  knownIllnesses: string;
  emergencyContact: string;
  emergencyPhone: string;

  /* Step 3 — Education */
  highSchool: string;
  diplomaFile: File | null;
  graduationDate: string;
  collegesAttended: string;
  coursePreference: CoursePreference | "";
  inPersonSchedule: string[];
  onlineSchedule: string[];
  hybridSchedule: string[];

  /* Step 4 — Payment */
  paymentTier: "95" | "1195" | "2795" | "";
  additionalInfo: string;
  termsAccepted: boolean;
  howFound: string;
}

export interface StepProps {
  formData: RegistrationFormData;
  updateFields: (fields: Partial<RegistrationFormData>) => void;
}
