/** Multi-step registration form wizard (program → personal → education → payment) via /api/register. */
"use client";

import { useState, useRef, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import type { StepId, RegistrationFormData } from "./registration-types";
import { INITIAL_FORM_DATA, STEP_LABELS } from "./registration-constants";
import { StepProgram } from "./step-program";
import { StepPersonal } from "./step-personal";
import { StepEducation } from "./step-education";
import { StepPayment } from "./step-payment";
import type { CloverPaymentRef } from "@/components/forms/clover-payment-fields";

/* -------------------------------------------------------------------------- */
/*  Step validation                                                           */
/* -------------------------------------------------------------------------- */

function validateStep(
  step: StepId,
  data: RegistrationFormData,
): string | null {
  switch (step) {
    case 1: {
      if (!data.programType) return "Please choose a program type.";
      if (data.programType === "combined" && !data.combinedSchedule)
        return "Please select a schedule.";
      if (data.programType === "hybrid" && (!data.hybridLecture || !data.hybridStudio))
        return "Please select both a lecture and a studio time.";
      if (data.programType === "single" && !data.singleClass)
        return "Please select a class.";
      return null;
    }
    case 2: {
      if (!data.firstName.trim()) return "First name is required.";
      if (!data.lastName.trim()) return "Last name is required.";
      if (!data.usResident) return "Please indicate if you live in the US.";
      if (!data.address1.trim()) return "Address is required.";
      if (!data.city.trim()) return "City is required.";
      if (!data.state.trim()) return "State is required.";
      if (!data.zip.trim()) return "ZIP code is required.";
      if (!data.caResident) return "Please indicate CA residency.";
      if (!data.email.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        return "Please enter a valid email address.";
      if (!data.homePhone.trim()) return "Home phone is required.";
      if (!data.ssn || data.ssn.length < 9)
        return "Please enter a valid 9-digit Social Security Number.";
      if (!data.birthDate) return "Date of birth is required.";
      if (!data.emergencyContact.trim())
        return "Emergency contact name is required.";
      if (!data.emergencyPhone.trim())
        return "Emergency contact phone is required.";
      return null;
    }
    case 3: {
      if (!data.highSchool.trim())
        return "High school name is required.";
      if (!data.graduationDate.trim())
        return "Graduation date is required.";
      if (!data.coursePreference)
        return "Please select a course preference.";
      return null;
    }
    case 4: {
      if (!data.paymentTier) return "Please select a payment option.";
      if (!data.termsAccepted)
        return "You must agree to the terms and conditions.";
      if (!data.howFound) return "Please tell us how you heard about IDI.";
      return null;
    }
    default:
      return null;
  }
}

/* -------------------------------------------------------------------------- */
/*  File upload helper                                                        */
/* -------------------------------------------------------------------------- */

async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || "File upload failed.");
  }

  const { url } = await res.json();
  return url;
}

/* -------------------------------------------------------------------------- */
/*  Stepper component                                                         */
/* -------------------------------------------------------------------------- */

function Stepper({
  currentStep,
  completedSteps,
  onStepClick,
}: {
  currentStep: StepId;
  completedSteps: StepId[];
  onStepClick: (step: StepId) => void;
}) {
  return (
    <>
      {/* Desktop stepper */}
      <nav aria-label="Registration progress" className="hidden sm:block mb-10">
        <ol className="flex items-center">
          {STEP_LABELS.map((label, i) => {
            const step = (i + 1) as StepId;
            const isComplete = completedSteps.includes(step);
            const isCurrent = step === currentStep;
            const isClickable = isComplete || isCurrent;

            return (
              <li key={step} className="flex flex-1 items-center">
                <button
                  type="button"
                  onClick={() => isClickable && onStepClick(step)}
                  disabled={!isClickable}
                  className={cn(
                    "flex flex-col items-center gap-2 w-full group",
                    isClickable ? "cursor-pointer" : "cursor-default",
                  )}
                >
                  {/* Circle + connector line */}
                  <div className="flex items-center w-full">
                    {i > 0 && (
                      <div
                        className={cn(
                          "h-0.5 flex-1 transition-colors",
                          completedSteps.includes(step) || isCurrent
                            ? "bg-pink-500/40"
                            : "bg-white/10",
                        )}
                      />
                    )}
                    <div
                      className={cn(
                        "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all",
                        isComplete
                          ? "bg-pink-500 text-plum-900"
                          : isCurrent
                            ? "ring-2 ring-pink-500 bg-plum-800 text-pink-500"
                            : "bg-plum-800 text-sandstone/50 border border-white/10",
                      )}
                    >
                      {isComplete ? (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      ) : (
                        step
                      )}
                    </div>
                    {i < STEP_LABELS.length - 1 && (
                      <div
                        className={cn(
                          "h-0.5 flex-1 transition-colors",
                          isComplete ? "bg-pink-500/40" : "bg-white/10",
                        )}
                      />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium transition-colors",
                      isCurrent
                        ? "text-parchment"
                        : isComplete
                          ? "text-pink-500"
                          : "text-sandstone/50",
                    )}
                  >
                    {label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Mobile stepper */}
      <div className="sm:hidden mb-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-parchment">
            Step {currentStep} of {STEP_LABELS.length}
          </p>
          <p className="text-sm text-sandstone">
            {STEP_LABELS[currentStep - 1]}
          </p>
        </div>
        <div className="mt-2 flex gap-1.5">
          {STEP_LABELS.map((_, i) => {
            const step = (i + 1) as StepId;
            return (
              <div
                key={step}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors",
                  completedSteps.includes(step)
                    ? "bg-pink-500"
                    : step === currentStep
                      ? "bg-pink-500/50"
                      : "bg-white/10",
                )}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Registration Form                                                         */
/* -------------------------------------------------------------------------- */

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [formData, setFormData] = useState<RegistrationFormData>(INITIAL_FORM_DATA);
  const [completedSteps, setCompletedSteps] = useState<StepId[]>([]);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const cloverRef = useRef<CloverPaymentRef>(null);

  function updateFields(fields: Partial<RegistrationFormData>) {
    setFormData((prev) => ({ ...prev, ...fields }));
  }

  function handleNext() {
    const error = validateStep(currentStep, formData);
    if (error) {
      setErrorMsg(error);
      return;
    }
    setErrorMsg("");

    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps((prev) => [...prev, currentStep]);
    }

    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as StepId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleBack() {
    if (currentStep > 1) {
      setErrorMsg("");
      setCurrentStep((prev) => (prev - 1) as StepId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleStepClick(step: StepId) {
    if (completedSteps.includes(step) || step === currentStep) {
      setErrorMsg("");
      setCurrentStep(step);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const error = validateStep(4, formData);
    if (error) {
      setErrorMsg(error);
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      // 1. Upload diploma file if present
      let diplomaFileUrl = "";
      if (formData.diplomaFile) {
        diplomaFileUrl = await uploadFile(formData.diplomaFile);
      }

      // 2. Get Clover token
      if (!cloverRef.current) {
        throw new Error("Payment system not ready. Please wait a moment and try again.");
      }

      const tokenResult = await cloverRef.current.createToken();
      if ("errors" in tokenResult) {
        throw new Error(tokenResult.errors[0] || "Card tokenization failed.");
      }

      // 3. Build payload (strip File object, add token + file URL)
      const { diplomaFile: _file, ...payload } = formData;

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          ssn: formData.ssn.replace(/\D/g, ""), // digits only
          cloverToken: tokenResult.token,
          diplomaFileUrl,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Registration failed. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  /* ── Success state ───────────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div className="rounded-2xl border border-jade/30 bg-jade/5 p-10 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-jade/15">
          <svg
            className="h-8 w-8 text-jade"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-parchment">
          Registration Received!
        </h3>
        <p className="mt-3 text-sandstone leading-relaxed max-w-md mx-auto">
          Thank you for registering for the May 2026 Certificate Course. A
          confirmation email will be sent to{" "}
          <strong className="text-parchment">{formData.email}</strong>. An
          admissions representative will contact you within 1–2 business
          days.
        </p>
        <p className="mt-2 text-sm text-sandstone/70">
          For questions, call us at{" "}
          <a
            href="tel:9496754451"
            className="text-pink-500 hover:text-pink-400 transition-colors"
          >
            (949) 675-4451
          </a>
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setCurrentStep(1);
            setFormData(INITIAL_FORM_DATA);
            setCompletedSteps([]);
          }}
          className="mt-6 text-sm font-semibold text-pink-500 hover:text-pink-400 transition-colors"
        >
          Submit another registration
        </button>
      </div>
    );
  }

  /* ── Form ─────────────────────────────────────────────────────────── */
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Stepper
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={handleStepClick}
      />

      {/* Step content with transition */}
      <div className="transition-opacity duration-300">
        {currentStep === 1 && (
          <StepProgram formData={formData} updateFields={updateFields} />
        )}
        {currentStep === 2 && (
          <StepPersonal formData={formData} updateFields={updateFields} />
        )}
        {currentStep === 3 && (
          <StepEducation formData={formData} updateFields={updateFields} />
        )}
        {currentStep === 4 && (
          <StepPayment
            formData={formData}
            updateFields={updateFields}
            cloverRef={cloverRef}
          />
        )}
      </div>

      {/* Error message */}
      {errorMsg && (
        <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMsg}
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
        {currentStep > 1 ? (
          <Button
            type="button"
            variant="ghost"
            size="md"
            onClick={handleBack}
          >
            <svg
              className="mr-1.5 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back
          </Button>
        ) : (
          <div />
        )}

        {currentStep < 4 ? (
          <Button
            type="button"
            variant="primary"
            size="lg"
            onClick={handleNext}
          >
            Continue
            <svg
              className="ml-1.5 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Button>
        ) : (
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="glow-amber"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <span className="inline-flex items-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Processing Payment...
              </span>
            ) : (
              "Submit Registration"
            )}
          </Button>
        )}
      </div>

      {/* Security note */}
      <p className="mt-4 text-center text-xs text-sandstone/50">
        Your card is processed securely by Clover — card data never touches
        our servers. A minimum $95 Non-Refundable Registration Fee applies.
      </p>
    </form>
  );
}
