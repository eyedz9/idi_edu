/** Zod validation schemas for all form submissions (contact, application, registration, tour). */
import { z } from "zod";

/* -------------------------------------------------------------------------- */
/*  Contact form schema                                                       */
/* -------------------------------------------------------------------------- */

export const contactSchema = z.object({
  howFound: z.string().min(1, "How you found us is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  contactMethod: z.string().min(1, "Contact method is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  message: z.string().optional(),
});

/* -------------------------------------------------------------------------- */
/*  Application form schema                                                   */
/* -------------------------------------------------------------------------- */

export const applicationSchema = z.object({
  programType: z.enum(["combined", "hybrid", "single"]),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  preferredFirstName: z.string().optional().default(""),
  preferredLastName: z.string().optional().default(""),
  gender: z.string().optional().default(""),
  internationalStudent: z.string().optional().default(""),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone is required"),
  phone2: z.string().optional().default(""),
  ssn: z.string().regex(/^\d{9}$/, "SSN must be exactly 9 digits"),
  birthDate: z.string().min(1, "Birth date is required"),
  knownIllnesses: z.string().optional().default(""),
  address1: z.string().min(1, "Address is required"),
  address2: z.string().optional().default(""),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "ZIP code is required"),
  caResident: z.string().optional().default(""),
  highSchool: z.string().min(1, "High school is required"),
  graduationDate: z.string().min(1, "Graduation date is required"),
  collegesAttended: z.string().optional().default(""),
  coursePreference: z.string().optional().default(""),
  inPersonSchedule: z.union([z.string(), z.array(z.string())]).optional(),
  onlineSchedule: z.union([z.string(), z.array(z.string())]).optional(),
  hybridSchedule: z.union([z.string(), z.array(z.string())]).optional(),
  emergencyContact: z.string().min(1, "Emergency contact is required"),
  emergencyPhone: z.string().min(1, "Emergency phone is required"),
  paymentTier: z.string().optional().default(""),
  additionalInfo: z.string().optional().default(""),
  termsAccepted: z.union([z.boolean(), z.literal("on")]),
  howFound: z.string().min(1, "How you found us is required"),
  diplomaFileUrl: z.string().optional().default(""),
});

/* -------------------------------------------------------------------------- */
/*  Registration form schema                                                  */
/* -------------------------------------------------------------------------- */

export const registrationSchema = z.object({
  /* Step 1 — Program */
  programType: z.enum(["combined", "hybrid", "single"]),
  combinedSchedule: z.string().optional().default(""),
  hybridLecture: z.string().optional().default(""),
  hybridStudio: z.string().optional().default(""),
  singleClass: z.string().optional().default(""),

  /* Step 2 — Personal */
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  preferredFirstName: z.string().optional().default(""),
  preferredLastName: z.string().optional().default(""),
  gender: z.string().optional().default(""),
  usResident: z.enum(["yes", "no"]),
  address1: z.string().min(1, "Address is required"),
  address2: z.string().optional().default(""),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "ZIP code is required"),
  caResident: z.enum(["yes", "no"]),
  internationalStudent: z.string().optional().default(""),
  caAddress1: z.string().optional().default(""),
  caAddress2: z.string().optional().default(""),
  caCity: z.string().optional().default(""),
  caState: z.string().optional().default(""),
  caZip: z.string().optional().default(""),
  email: z.string().email("Please enter a valid email address"),
  homePhone: z.string().min(1, "Home phone is required"),
  cellPhone: z.string().optional().default(""),
  workPhone: z.string().optional().default(""),
  ssn: z.string().regex(/^\d{9}$/, "SSN must be exactly 9 digits"),
  birthDate: z.string().min(1, "Birth date is required"),
  knownIllnesses: z.string().optional().default(""),
  emergencyContact: z.string().min(1, "Emergency contact is required"),
  emergencyPhone: z.string().min(1, "Emergency phone is required"),

  /* Step 3 — Education */
  highSchool: z.string().min(1, "High school is required"),
  graduationDate: z.string().min(1, "Graduation date is required"),
  collegesAttended: z.string().optional().default(""),
  coursePreference: z.string().optional().default(""),
  inPersonSchedule: z.array(z.string()).optional().default([]),
  onlineSchedule: z.array(z.string()).optional().default([]),
  hybridSchedule: z.array(z.string()).optional().default([]),

  /* Step 4 — Payment */
  paymentTier: z.enum(["95", "1195", "2795"]),
  additionalInfo: z.string().optional().default(""),
  cloverToken: z.string().min(1, "Payment token is required"),
  termsAccepted: z.literal(true, { message: "You must agree to the terms" }),
  howFound: z.string().min(1, "How you found us is required"),
  diplomaFileUrl: z.string().optional().default(""),
});

/* -------------------------------------------------------------------------- */
/*  Tour booking schema                                                       */
/* -------------------------------------------------------------------------- */

export const tourSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  groupSize: z.string().min(1, "Group size is required"),
  programInterest: z.string().optional().default(""),
  comments: z.string().optional().default(""),
});

/* -------------------------------------------------------------------------- */
/*  Payment amounts (cents) by tier                                           */
/* -------------------------------------------------------------------------- */

export const PAYMENT_AMOUNTS: Record<string, number> = {
  "95": 9500,
  "1195": 119500,
  "2795": 279500,
};
