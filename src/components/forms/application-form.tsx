"use client";

import { useState, useRef, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/*  Schedule options (from Formstack form)                                    */
/* -------------------------------------------------------------------------- */

const PROGRAM_TYPES = [
  {
    value: "combined",
    label: "Combined Certificate Course",
    description: "Full Course — Lecture + Studio, meets twice per week",
  },
  {
    value: "hybrid",
    label: "Hybrid Certificate Course",
    description: "Mix & Match — choose 1 Lecture + 1 Studio separately",
  },
  {
    value: "single",
    label: "Lecture or Studio Only",
    description: "For students not enrolling in the full Certificate Course",
  },
] as const;

const COMBINED_SCHEDULES = [
  { value: "day-tue-wed", label: "Tue/Wed 9:00 AM – 11:30 AM (In-Person)" },
  { value: "day-tue-thu", label: "Tue/Thu 9:00 AM – 11:30 AM (In-Person)" },
  { value: "eve-tue-thu-online", label: "Tue/Thu 6:00 PM – 8:30 PM (Online)" },
];

const HYBRID_LECTURES = [
  { value: "lec-tue-am", label: "Tue 9:00 AM – 11:30 AM (In-Person)" },
  { value: "lec-thu-pm", label: "Thu 6:00 PM – 8:30 PM (Online)" },
];

const HYBRID_STUDIOS = [
  { value: "stu-tue-pm-online", label: "Tue 6:00 PM – 8:30 PM (Online)" },
  { value: "stu-tue-pm-person", label: "Tue 6:00 PM – 8:30 PM (In-Person)" },
  { value: "stu-wed-am", label: "Wed 9:00 AM – 11:30 AM (In-Person)" },
  { value: "stu-thu-am", label: "Thu 9:00 AM – 11:30 AM (In-Person)" },
];

const SINGLE_OPTIONS = [
  { value: "lec-tue-am", label: "Lecture — Tue 9:00 AM – 11:30 AM (In-Person)" },
  { value: "lec-thu-pm", label: "Lecture — Thu 6:00 PM – 8:30 PM (Online)" },
  { value: "stu-tue-pm-online", label: "Studio — Tue 6:00 PM – 8:30 PM (Online)" },
  { value: "stu-tue-pm-person", label: "Studio — Tue 6:00 PM – 8:30 PM (In-Person)" },
  { value: "stu-wed-am", label: "Studio — Wed 9:00 AM – 11:30 AM (In-Person)" },
  { value: "stu-thu-am", label: "Studio — Thu 9:00 AM – 11:30 AM (In-Person)" },
];

const HOW_FOUND_OPTIONS = [
  "Google Search",
  "Social Media",
  "Friend / Family Referral",
  "Design Center / Showroom",
  "ASID / IIDA / NKBA Event",
  "College Fair",
  "Other",
];

/* -------------------------------------------------------------------------- */
/*  Shared styles                                                             */
/* -------------------------------------------------------------------------- */

const inputBase =
  "w-full rounded-lg border border-white/10 bg-plum-800/60 px-4 py-3 text-sm text-parchment placeholder:text-sandstone/40 transition-colors focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20";

const labelBase = "block text-sm font-semibold text-parchment mb-1.5";

const requiredStar = <span className="text-pink-500 ml-0.5">*</span>;

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [programType, setProgramType] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = formRef.current;
    if (!form) return;

    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
      setProgramType("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  /* ── Success state ───────────────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div className="rounded-2xl border border-jade/30 bg-jade/5 p-10 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-jade/15">
          <svg className="h-8 w-8 text-jade" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-parchment">
          Application Received!
        </h3>
        <p className="mt-3 text-sandstone leading-relaxed max-w-md mx-auto">
          Thank you for applying to IDI. An admissions representative will contact you within 1–2 business days to schedule your campus visit and interview.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-pink-500 hover:text-pink-400 transition-colors"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-8"
      noValidate
    >
      {/* ── Step 1: Program Type ──────────────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Step 1 — Choose Your Program Type
        </legend>
        <div className="space-y-3">
          {PROGRAM_TYPES.map((opt) => (
            <label
              key={opt.value}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all",
                programType === opt.value
                  ? "border-pink-500/40 bg-pink-500/5"
                  : "border-white/10 bg-plum-800/40 hover:border-white/20",
              )}
            >
              <input
                type="radio"
                name="programType"
                value={opt.value}
                required
                onChange={(e) => setProgramType(e.target.value)}
                checked={programType === opt.value}
                className="mt-1 h-4 w-4 accent-pink-500"
              />
              <div>
                <span className="text-sm font-semibold text-parchment">
                  {opt.label}
                </span>
                <p className="text-xs text-sandstone mt-0.5">
                  {opt.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      {/* ── Schedule selection (conditional) ──────────────────────────── */}
      {programType === "combined" && (
        <fieldset>
          <legend className={labelBase}>
            Choose Your Schedule{requiredStar}
          </legend>
          <select name="combinedSchedule" required className={inputBase}>
            <option value="">Select a schedule…</option>
            {COMBINED_SCHEDULES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </fieldset>
      )}

      {programType === "hybrid" && (
        <div className="grid gap-6 sm:grid-cols-2">
          <fieldset>
            <legend className={labelBase}>
              Choose ONE Lecture{requiredStar}
            </legend>
            <select name="hybridLecture" required className={inputBase}>
              <option value="">Select a lecture…</option>
              {HYBRID_LECTURES.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <legend className={labelBase}>
              Choose ONE Studio{requiredStar}
            </legend>
            <select name="hybridStudio" required className={inputBase}>
              <option value="">Select a studio…</option>
              {HYBRID_STUDIOS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </fieldset>
        </div>
      )}

      {programType === "single" && (
        <fieldset>
          <legend className={labelBase}>
            Choose ONE Lecture or Studio{requiredStar}
          </legend>
          <select name="singleClass" required className={inputBase}>
            <option value="">Select a class…</option>
            {SINGLE_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </fieldset>
      )}

      {/* ── Step 2: Personal Info ─────────────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Step 2 — Personal Information
        </legend>
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={labelBase}>
                First Name{requiredStar}
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                className={inputBase}
                placeholder="First name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelBase}>
                Last Name{requiredStar}
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
                className={inputBase}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="preferredFirstName" className={labelBase}>
                Preferred First Name
              </label>
              <input
                id="preferredFirstName"
                name="preferredFirstName"
                type="text"
                className={inputBase}
                placeholder="If different from legal name"
              />
            </div>
            <div>
              <label htmlFor="preferredLastName" className={labelBase}>
                Preferred Last Name
              </label>
              <input
                id="preferredLastName"
                name="preferredLastName"
                type="text"
                className={inputBase}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelBase}>
              Email{requiredStar}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputBase}
              placeholder="you@example.com"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor="homePhone" className={labelBase}>
                Home Phone{requiredStar}
              </label>
              <input
                id="homePhone"
                name="homePhone"
                type="tel"
                required
                autoComplete="tel"
                className={inputBase}
                placeholder="(555) 555-5555"
              />
            </div>
            <div>
              <label htmlFor="cellPhone" className={labelBase}>
                Cell Phone
              </label>
              <input
                id="cellPhone"
                name="cellPhone"
                type="tel"
                autoComplete="tel"
                className={inputBase}
                placeholder="(555) 555-5555"
              />
            </div>
            <div>
              <label htmlFor="workPhone" className={labelBase}>
                Work Phone
              </label>
              <input
                id="workPhone"
                name="workPhone"
                type="tel"
                className={inputBase}
                placeholder="(555) 555-5555"
              />
            </div>
          </div>

          <div>
            <label htmlFor="birthDate" className={labelBase}>
              Date of Birth{requiredStar}
            </label>
            <input
              id="birthDate"
              name="birthDate"
              type="date"
              required
              className={inputBase}
            />
          </div>
        </div>
      </fieldset>

      {/* ── Step 3: Address ───────────────────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Step 3 — Address
        </legend>
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="address1" className={labelBase}>
                Address Line 1{requiredStar}
              </label>
              <input
                id="address1"
                name="address1"
                type="text"
                required
                autoComplete="address-line1"
                className={inputBase}
                placeholder="Street address"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address2" className={labelBase}>
                Address Line 2
              </label>
              <input
                id="address2"
                name="address2"
                type="text"
                autoComplete="address-line2"
                className={inputBase}
                placeholder="Apt, suite, unit, etc."
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor="city" className={labelBase}>
                City{requiredStar}
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                autoComplete="address-level2"
                className={inputBase}
              />
            </div>
            <div>
              <label htmlFor="state" className={labelBase}>
                State{requiredStar}
              </label>
              <input
                id="state"
                name="state"
                type="text"
                required
                autoComplete="address-level1"
                className={inputBase}
              />
            </div>
            <div>
              <label htmlFor="zip" className={labelBase}>
                ZIP Code{requiredStar}
              </label>
              <input
                id="zip"
                name="zip"
                type="text"
                required
                autoComplete="postal-code"
                className={inputBase}
                placeholder="92660"
              />
            </div>
          </div>
          <div>
            <label htmlFor="caResident" className={labelBase}>
              California Resident?{requiredStar}
            </label>
            <select
              id="caResident"
              name="caResident"
              required
              className={inputBase}
            >
              <option value="">Select…</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* ── Step 4: Education & Emergency ─────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Step 4 — Education & Emergency Contact
        </legend>
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="highSchool" className={labelBase}>
                High School Graduated From{requiredStar}
              </label>
              <input
                id="highSchool"
                name="highSchool"
                type="text"
                required
                className={inputBase}
              />
            </div>
            <div>
              <label htmlFor="graduationDate" className={labelBase}>
                Graduation Date{requiredStar}
              </label>
              <input
                id="graduationDate"
                name="graduationDate"
                type="text"
                required
                className={inputBase}
                placeholder="Month / Year"
              />
            </div>
          </div>

          <div>
            <label htmlFor="collegesAttended" className={labelBase}>
              Colleges Attended
            </label>
            <input
              id="collegesAttended"
              name="collegesAttended"
              type="text"
              className={inputBase}
              placeholder="Separate multiple colleges with a comma"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="emergencyContact" className={labelBase}>
                Emergency Contact Name{requiredStar}
              </label>
              <input
                id="emergencyContact"
                name="emergencyContact"
                type="text"
                required
                className={inputBase}
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="emergencyPhone" className={labelBase}>
                Emergency Contact Phone{requiredStar}
              </label>
              <input
                id="emergencyPhone"
                name="emergencyPhone"
                type="tel"
                required
                className={inputBase}
                placeholder="(555) 555-5555"
              />
            </div>
          </div>

          <div>
            <label htmlFor="knownIllnesses" className={labelBase}>
              Known Illnesses
            </label>
            <input
              id="knownIllnesses"
              name="knownIllnesses"
              type="text"
              className={inputBase}
              placeholder="Any conditions the Institute should be aware of"
            />
          </div>
        </div>
      </fieldset>

      {/* ── Step 5: Additional Info ───────────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-lg font-bold text-parchment mb-4">
          Step 5 — Additional Information
        </legend>
        <div className="space-y-5">
          <div>
            <label htmlFor="howFound" className={labelBase}>
              How did you hear about IDI?{requiredStar}
            </label>
            <select
              id="howFound"
              name="howFound"
              required
              className={inputBase}
            >
              <option value="">Select…</option>
              {HOW_FOUND_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="additionalInfo" className={labelBase}>
              Additional Information / Special Requests
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              className={cn(inputBase, "resize-y")}
              placeholder="Anything else you'd like us to know?"
            />
          </div>
        </div>
      </fieldset>

      {/* ── Terms ─────────────────────────────────────────────────────── */}
      <div className="rounded-xl border border-white/10 bg-plum-800/40 p-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="termsAccepted"
            required
            className="mt-1 h-4 w-4 accent-pink-500"
          />
          <span className="text-sm text-sandstone leading-relaxed">
            I confirm that the information provided is accurate and I agree to be contacted by Interior Designers Institute regarding my application.
            I have reviewed the{" "}
            <a href="/documents/idi-catalog.pdf" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors">
              School Catalog
            </a>{" "}
            and{" "}
            <a href="/documents/school-performance-fact-sheet.pdf" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors">
              School Performance Fact Sheet
            </a>.{requiredStar}
          </span>
        </label>
      </div>

      {/* ── Error message ─────────────────────────────────────────────── */}
      {status === "error" && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMsg}
        </div>
      )}

      {/* ── Submit ────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto glow-amber"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <span className="inline-flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting…
            </span>
          ) : (
            "Submit Application"
          )}
        </Button>
        <p className="text-xs text-sandstone/60 text-center">
          No application fee. Your information is transmitted securely.
        </p>
      </div>
    </form>
  );
}
