/** Multi-section application form with schedule selection, file upload, and payment via /api/apply. */
"use client";

import { useState, useRef, useCallback, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/*  Schedule options                                                          */
/* -------------------------------------------------------------------------- */

const COMBINED_DAY_SCHEDULES = [
  { value: "day-tue-wed", label: "Tue/Wed 9:00 AM – 11:30 AM", note: "Lecture + Studio" },
  { value: "day-tue-thu", label: "Tue/Thu 9:00 AM – 11:30 AM", note: "Lecture + Studio" },
];

const COMBINED_EVENING_SCHEDULES = [
  { value: "eve-tue-thu-online", label: "Tue/Thu 6:00 PM – 8:30 PM", note: "ONLINE" },
];

const HYBRID_LECTURES = [
  { value: "lec-tue-am", label: "Tue 9:00 AM – 11:30 AM", tag: "In-Person" },
  { value: "lec-thu-pm", label: "Thu 6:00 PM – 8:30 PM", tag: "Online" },
];

const HYBRID_STUDIOS = [
  { value: "stu-tue-pm-online", label: "Tue 6:00 PM – 8:30 PM", tag: "Online" },
  { value: "stu-tue-pm-person", label: "Tue 6:00 PM – 8:30 PM", tag: "In-Person" },
  { value: "stu-wed-am", label: "Wed 9:00 AM – 11:30 AM", tag: "In-Person" },
  { value: "stu-thu-am", label: "Thu 9:00 AM – 11:30 AM", tag: "In-Person" },
];

const SINGLE_LECTURES = [
  { value: "lec-tue-am", label: "Tue 9:00 AM – 11:30 AM", tag: "In-Person" },
  { value: "lec-thu-pm", label: "Thu 6:00 PM – 8:30 PM", tag: "Online" },
];

const SINGLE_STUDIOS = [
  { value: "stu-tue-pm-online", label: "Tue 6:00 PM – 8:30 PM", tag: "Online" },
  { value: "stu-tue-pm-person", label: "Tue 6:00 PM – 8:30 PM", tag: "In-Person" },
  { value: "stu-wed-am", label: "Wed 9:00 AM – 11:30 AM", tag: "In-Person" },
  { value: "stu-thu-am", label: "Thu 9:00 AM – 11:30 AM", tag: "In-Person" },
];

/* -------------------------------------------------------------------------- */
/*  Course preference schedule options (Step 3)                               */
/* -------------------------------------------------------------------------- */

const IN_PERSON_SCHEDULES = [
  { value: "lec-tue-9am", label: "Lecture Tues 9 AM – 11:30 AM", type: "Lecture", tag: "In-Person" },
  { value: "stu-tue-6pm", label: "Studio Tues 6 PM – 8:30 PM", type: "Studio", tag: "In-Person" },
  { value: "stu-wed-9am", label: "Studio Wed 9 AM – 11:30 AM", type: "Studio", tag: "In-Person" },
  { value: "stu-thu-9am", label: "Studio Thurs 9 AM – 11:30 AM", type: "Studio", tag: "In-Person" },
  { value: "comb-tue-wed-9am", label: "Combined Tues/Wed 9 AM – 11:30 AM", type: "Combined", tag: "In-Person" },
  { value: "comb-tue-thu-9am", label: "Combined Tues/Thur 9 AM – 11:30 AM", type: "Combined", tag: "In-Person" },
];

const ONLINE_SCHEDULES = [
  { value: "lec-thu-6pm-online", label: "Lecture Thurs 6 PM – 8:30 PM", type: "Lecture", tag: "Online" },
  { value: "stu-tue-6pm-online", label: "Studio Tues 6 PM – 8:30 PM", type: "Studio", tag: "Online" },
  { value: "comb-tue-thu-6pm-online", label: "Combined Tue/Thu 6 PM – 8:30 PM", type: "Combined", tag: "Online" },
];

const HYBRID_OPTIONS = [
  { value: "hyb-lec-tue-9am", label: "Lecture Tues 9 AM – 11:30 AM", type: "Lecture", tag: "In-Person" },
  { value: "hyb-lec-thu-6pm", label: "Lecture Thurs 6 PM – 8:30 PM", type: "Lecture", tag: "Online" },
  { value: "hyb-stu-tue-6pm", label: "Studio Tues 6 PM – 8:30 PM", type: "Studio", tag: "In-Person" },
  { value: "hyb-stu-wed-9am", label: "Studio Wed 9 AM – 11:30 AM", type: "Studio", tag: "In-Person" },
  { value: "hyb-stu-thu-9am", label: "Studio Thurs 9 AM – 11:30 AM", type: "Studio", tag: "In-Person" },
];

const PAYMENT_TIERS = [
  {
    value: "95",
    price: "$95",
    label: "Registration Fee (Non-Refundable)",
    detail: null,
  },
  {
    value: "1195",
    price: "$1,195",
    label: "Registration + 1st Tuition + Books & Supplies",
    detail: "Includes: $95 Registration Fee (Non-Refundable) + 1st of 3 Tuition Payment $800 + $300 Books and Supplies",
  },
  {
    value: "2795",
    price: "$2,795",
    label: "Registration + Full Tuition + Books & Supplies",
    detail: "Includes: $95 Registration Fee (Non-Refundable) + Total Tuition Payment $2,400 + $300 Books and Supplies",
  },
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
/*  Step labels                                                               */
/* -------------------------------------------------------------------------- */

const STEP_LABELS = [
  "Program",
  "Personal Info",
  "Education",
  "Payment",
] as const;

type StepId = 1 | 2 | 3 | 4;

/* -------------------------------------------------------------------------- */
/*  Shared styles                                                             */
/* -------------------------------------------------------------------------- */

const inputBase =
  "w-full rounded-lg border border-white/10 bg-plum-800/60 px-4 py-3 text-sm text-parchment placeholder:text-sandstone/40 transition-colors focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20";

const labelBase = "block text-sm font-semibold text-parchment mb-1.5";

const requiredStar = <span className="text-pink-500 ml-0.5">*</span>;

/* -------------------------------------------------------------------------- */
/*  Static schedule line item                                                 */
/* -------------------------------------------------------------------------- */

function ScheduleItem({
  label,
  tag,
}: {
  label: string;
  tag?: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-white/5 bg-plum-900/40 px-3 py-2.5 text-sm text-sandstone">
      <svg className="h-3.5 w-3.5 flex-shrink-0 text-pink-500/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <span className="flex-1">{label}</span>
      {tag && (
        <span
          className={cn(
            "rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
            tag === "Online" || tag === "ONLINE"
              ? "bg-violet/15 text-violet"
              : "bg-jade/15 text-jade",
          )}
        >
          {tag}
        </span>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stepper                                                                   */
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
      {/* Desktop */}
      <nav aria-label="Application progress" className="hidden sm:block mb-10">
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
                        "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all",
                        isComplete
                          ? "bg-pink-500 text-plum-900"
                          : isCurrent
                            ? "ring-2 ring-pink-500 bg-plum-800 text-pink-500"
                            : "bg-plum-800 text-sandstone/50 border border-white/10",
                      )}
                    >
                      {isComplete ? (
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
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
                      "text-[11px] font-medium transition-colors",
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

      {/* Mobile */}
      <div className="sm:hidden mb-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-parchment">
            Step {currentStep} of {STEP_LABELS.length}
          </p>
          <p className="text-sm text-sandstone">{STEP_LABELS[currentStep - 1]}</p>
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
/*  Step 1 — Choose Your Program Type                                         */
/* -------------------------------------------------------------------------- */

function StepProgram({
  programType,
  setProgramType,
}: {
  programType: string;
  setProgramType: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="font-heading text-lg font-bold text-parchment mb-2">
        Choose Your Program Type
      </legend>
      <p className="text-sm text-sandstone mb-5">
        Students should select <strong className="text-parchment">ONE</strong> of the following:
      </p>

      <div className="space-y-4">
        {/* ── OPTION 1: Combined ──────────────────────────────────────── */}
        <div
          className={cn(
            "rounded-xl border transition-all overflow-hidden",
            programType === "combined"
              ? "border-pink-500/40 bg-pink-500/[0.03]"
              : "border-white/10 bg-plum-800/40",
          )}
        >
          <label className="flex cursor-pointer items-start gap-3 p-5">
            <input
              type="radio"
              name="programType_radio"
              value="combined"
              checked={programType === "combined"}
              onChange={() => setProgramType("combined")}
              className="mt-0.5 h-4 w-4 accent-pink-500 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="rounded bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  Option 1
                </span>
                <span className="text-sm font-semibold text-parchment">
                  Combined Certificate Course
                </span>
              </div>
              <p className="text-xs text-sandstone mt-1">
                Full Course — includes Lecture + Studio. Meets twice per week.
              </p>
            </div>
          </label>

          {programType === "combined" && (
            <div className="border-t border-white/10 px-5 pb-5 pt-4 space-y-4 animate-in fade-in">
              {/* Day options */}
              <div>
                <p className="text-xs font-bold text-parchment mb-2 flex items-center gap-2">
                  <span className="rounded bg-jade/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-jade">
                    Day
                  </span>
                  In-Person
                </p>
                <div className="space-y-1.5">
                  {COMBINED_DAY_SCHEDULES.map((s) => (
                    <ScheduleItem key={s.value} label={s.label} tag={s.note} />
                  ))}
                </div>
              </div>

              {/* Evening options */}
              <div>
                <p className="text-xs font-bold text-parchment mb-2 flex items-center gap-2">
                  <span className="rounded bg-violet/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-violet">
                    Evening
                  </span>
                  Online
                </p>
                <div className="space-y-1.5">
                  {COMBINED_EVENING_SCHEDULES.map((s) => (
                    <ScheduleItem key={s.value} label={s.label} tag={s.note} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── OPTION 2: Hybrid ────────────────────────────────────────── */}
        <div
          className={cn(
            "rounded-xl border transition-all overflow-hidden",
            programType === "hybrid"
              ? "border-pink-500/40 bg-pink-500/[0.03]"
              : "border-white/10 bg-plum-800/40",
          )}
        >
          <label className="flex cursor-pointer items-start gap-3 p-5">
            <input
              type="radio"
              name="programType_radio"
              value="hybrid"
              checked={programType === "hybrid"}
              onChange={() => setProgramType("hybrid")}
              className="mt-0.5 h-4 w-4 accent-pink-500 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="rounded bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  Option 2
                </span>
                <span className="text-sm font-semibold text-parchment">
                  Hybrid Certificate Course
                </span>
              </div>
              <p className="text-xs text-sandstone mt-1">
                Mix &amp; Match: Select ONE lecture time + ONE studio time.
              </p>
            </div>
          </label>

          {programType === "hybrid" && (
            <div className="border-t border-white/10 px-5 pb-5 pt-4 space-y-5 animate-in fade-in">
              {/* Lecture times */}
              <div>
                <p className="text-xs font-bold text-parchment mb-2">
                  Lecture Times
                </p>
                <div className="space-y-1.5">
                  {HYBRID_LECTURES.map((s) => (
                    <ScheduleItem key={s.value} label={s.label} tag={s.tag} />
                  ))}
                </div>
              </div>

              {/* Studio times */}
              <div>
                <p className="text-xs font-bold text-parchment mb-2">
                  Studio Times
                </p>
                <div className="space-y-1.5">
                  {HYBRID_STUDIOS.map((s) => (
                    <ScheduleItem key={s.value} label={s.label} tag={s.tag} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── OPTION 3: Single ────────────────────────────────────────── */}
        <div
          className={cn(
            "rounded-xl border transition-all overflow-hidden",
            programType === "single"
              ? "border-pink-500/40 bg-pink-500/[0.03]"
              : "border-white/10 bg-plum-800/40",
          )}
        >
          <label className="flex cursor-pointer items-start gap-3 p-5">
            <input
              type="radio"
              name="programType_radio"
              value="single"
              checked={programType === "single"}
              onChange={() => setProgramType("single")}
              className="mt-0.5 h-4 w-4 accent-pink-500 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="rounded bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  Option 3
                </span>
                <span className="text-sm font-semibold text-parchment">
                  Take Only a Lecture or Only a Studio
                </span>
              </div>
              <p className="text-xs text-sandstone mt-1">
                For students not enrolling in the full Certificate Course.
              </p>
            </div>
          </label>

          {programType === "single" && (
            <div className="border-t border-white/10 px-5 pb-5 pt-4 space-y-4 animate-in fade-in">
              {/* Lectures */}
              <div>
                <p className="text-xs font-bold text-parchment mb-2">Lectures</p>
                <div className="space-y-1.5">
                  {SINGLE_LECTURES.map((s) => (
                    <ScheduleItem key={s.value} label={s.label} tag={s.tag} />
                  ))}
                </div>
              </div>

              {/* Studios */}
              <div>
                <p className="text-xs font-bold text-parchment mb-2">Studios</p>
                <div className="space-y-1.5">
                  {SINGLE_STUDIOS.map((s) => (
                    <ScheduleItem key={s.value} label={s.label} tag={s.tag} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </fieldset>
  );
}

/* -------------------------------------------------------------------------- */
/*  Validation                                                                */
/* -------------------------------------------------------------------------- */

function validateStep1(programType: string): string | null {
  if (!programType) return "Please choose a program type.";
  return null;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [completedSteps, setCompletedSteps] = useState<StepId[]>([]);

  /* Step 1 state */
  const [programType, setProgramType] = useState("");

  /* Mask toggles */
  const [showSSN, setShowSSN] = useState(false);

  /* Step 4 state */
  const [paymentTier, setPaymentTier] = useState("");

  /* Step 3 state */
  const [coursePreference, setCoursePreference] = useState("");
  const [inPersonSelections, setInPersonSelections] = useState<string[]>([]);
  const [onlineSelections, setOnlineSelections] = useState<string[]>([]);
  const [hybridSelections, setHybridSelections] = useState<string[]>([]);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToForm = useCallback(() => {
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  function markComplete(step: StepId) {
    if (!completedSteps.includes(step)) {
      setCompletedSteps((prev) => [...prev, step]);
    }
  }

  function handleNext() {
    setErrorMsg("");

    if (currentStep === 1) {
      const err = validateStep1(programType);
      if (err) { setErrorMsg(err); return; }
    }

    markComplete(currentStep);
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as StepId);
      scrollToForm();
    }
  }

  function handleBack() {
    if (currentStep > 1) {
      setErrorMsg("");
      setCurrentStep((prev) => (prev - 1) as StepId);
      scrollToForm();
    }
  }

  function handleStepClick(step: StepId) {
    if (completedSteps.includes(step) || step === currentStep) {
      setErrorMsg("");
      setCurrentStep(step);
      scrollToForm();
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = formRef.current;
    if (!form) return;

    const fd = new FormData(form);
    // Remove UI-only radio/checkbox duplicates (hidden inputs carry the real values)
    for (const key of [...fd.keys()]) {
      if (key.endsWith("_radio") || key.endsWith("_cb")) fd.delete(key);
    }

    // Collect array-valued fields before collapsing to single-value object
    const inPerson = fd.getAll("inPersonSchedule").filter(Boolean);
    const online = fd.getAll("onlineSchedule").filter(Boolean);
    const hybrid = fd.getAll("hybridSchedule").filter(Boolean);
    fd.delete("inPersonSchedule");
    fd.delete("onlineSchedule");
    fd.delete("hybridSchedule");

    const data = Object.fromEntries(fd);

    try {
      // Upload diploma file if present
      let diplomaFileUrl = "";
      const fileInput = fileInputRef.current;
      const file = fileInput?.files?.[0];
      if (file) {
        const uploadForm = new FormData();
        uploadForm.append("file", file);
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: uploadForm,
        });
        if (!uploadRes.ok) {
          const uploadBody = await uploadRes.json().catch(() => ({}));
          throw new Error(uploadBody.error || "File upload failed. Please try again.");
        }
        const uploadBody = await uploadRes.json();
        diplomaFileUrl = uploadBody.url;
      }

      // Strip SSN formatting (send digits only)
      if (typeof data.ssn === "string") {
        data.ssn = (data.ssn as string).replace(/\D/g, "");
      }

      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          inPersonSchedule: inPerson.length ? inPerson : undefined,
          onlineSchedule: online.length ? online : undefined,
          hybridSchedule: hybrid.length ? hybrid : undefined,
          diplomaFileUrl,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
      setProgramType("");
      setCoursePreference("");
      setInPersonSelections([]);
      setOnlineSelections([]);
      setHybridSelections([]);
      setUploadedFileName("");
      setPaymentTier("");
      setCurrentStep(1);
      setCompletedSteps([]);
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
      noValidate
      className="scroll-mt-24"
    >
      {/* Hidden inputs for values from other steps so they persist in FormData */}
      <input type="hidden" name="programType" value={programType} />
      <input type="hidden" name="coursePreference" value={coursePreference} />
      {inPersonSelections.map((v) => (
        <input key={v} type="hidden" name="inPersonSchedule" value={v} />
      ))}
      {onlineSelections.map((v) => (
        <input key={v} type="hidden" name="onlineSchedule" value={v} />
      ))}
      {hybridSelections.map((v) => (
        <input key={v} type="hidden" name="hybridSchedule" value={v} />
      ))}

      <Stepper
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={handleStepClick}
      />

      {/* ── Step content ───────────────────────────────────────────────── */}
      <div className="transition-opacity duration-300">
        {/* Step 1: Program Type */}
        {currentStep === 1 && (
          <StepProgram
            programType={programType}
            setProgramType={setProgramType}
          />
        )}

        {/* Step 2: Personal Information */}
        {currentStep === 2 && (
          <div className="space-y-8">
            {/* Name */}
            <fieldset>
              <legend className="font-heading text-lg font-bold text-parchment mb-4">
                Name{requiredStar}
              </legend>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className={inputBase}
                    placeholder="First name"
                  />
                  <p className="mt-1 text-xs text-sandstone/60">First Name</p>
                </div>
                <div>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className={inputBase}
                    placeholder="Last name"
                  />
                  <p className="mt-1 text-xs text-sandstone/60">Last Name</p>
                </div>
              </div>
            </fieldset>

            {/* Preferred Name */}
            <fieldset>
              <legend className={labelBase}>Preferred Name</legend>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <input
                    id="preferredFirstName"
                    name="preferredFirstName"
                    type="text"
                    className={inputBase}
                  />
                  <p className="mt-1 text-xs text-sandstone/60">First Name</p>
                </div>
                <div>
                  <input
                    id="preferredLastName"
                    name="preferredLastName"
                    type="text"
                    className={inputBase}
                  />
                  <p className="mt-1 text-xs text-sandstone/60">Last Name</p>
                </div>
              </div>
            </fieldset>

            {/* Gender */}
            <div>
              <p className={labelBase}>Gender</p>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-parchment">
                  <input type="radio" name="gender" value="male" className="h-4 w-4 accent-pink-500" />
                  Male
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-parchment">
                  <input type="radio" name="gender" value="female" className="h-4 w-4 accent-pink-500" />
                  Female
                </label>
              </div>
            </div>

            {/* International Student */}
            <div>
              <p className={labelBase}>International Student</p>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-parchment">
                  <input type="radio" name="internationalStudent" value="yes" className="h-4 w-4 accent-pink-500" />
                  Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-parchment">
                  <input type="radio" name="internationalStudent" value="no" className="h-4 w-4 accent-pink-500" />
                  No
                </label>
              </div>
            </div>

            {/* Address */}
            <fieldset>
              <legend className="font-heading text-lg font-bold text-parchment mb-4">
                Address{requiredStar}
              </legend>
              <div className="space-y-4">
                <div>
                  <input
                    id="address1"
                    name="address1"
                    type="text"
                    required
                    autoComplete="address-line1"
                    className={inputBase}
                    placeholder="Street address"
                  />
                  <p className="mt-1 text-xs text-sandstone/60">Address Line 1</p>
                </div>
                <div>
                  <input
                    id="address2"
                    name="address2"
                    type="text"
                    autoComplete="address-line2"
                    className={inputBase}
                    placeholder="Apt, suite, unit, etc."
                  />
                  <p className="mt-1 text-xs text-sandstone/60">Address Line 2</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      autoComplete="address-level2"
                      className={inputBase}
                    />
                    <p className="mt-1 text-xs text-sandstone/60">City</p>
                  </div>
                  <div>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      required
                      autoComplete="address-level1"
                      defaultValue="California"
                      className={inputBase}
                    />
                    <p className="mt-1 text-xs text-sandstone/60">State</p>
                  </div>
                  <div>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      required
                      autoComplete="postal-code"
                      className={inputBase}
                    />
                    <p className="mt-1 text-xs text-sandstone/60">ZIP Code</p>
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Email */}
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

            {/* Phone */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className={labelBase}>
                  Phone{requiredStar}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className={inputBase}
                  placeholder="(949) 555-1234"
                />
              </div>
              <div>
                <label htmlFor="phone2" className={labelBase}>
                  Phone 2
                </label>
                <input
                  id="phone2"
                  name="phone2"
                  type="tel"
                  className={inputBase}
                  placeholder="(949) 555-1234"
                />
              </div>
            </div>

            {/* SSN & Birth Date */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="ssn" className={labelBase}>
                  Social Security Number{requiredStar}
                </label>
                <div className="relative">
                  <input
                    id="ssn"
                    name="ssn"
                    type={showSSN ? "text" : "password"}
                    inputMode="numeric"
                    required
                    className={cn(inputBase, "pr-10")}
                    placeholder="XXX-XX-XXXX"
                    maxLength={11}
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSSN((v) => !v)}
                    className="absolute inset-y-0 right-3 flex items-center text-sandstone/50 hover:text-parchment transition-colors"
                    aria-label={showSSN ? "Hide SSN" : "Show SSN"}
                  >
                    {showSSN ? (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-sandstone/60">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  128-Bit SSL Encryption — your information is safe
                </p>
              </div>
              <div>
                <label htmlFor="birthDate" className={labelBase}>
                  Birth Date{requiredStar}
                </label>
                <input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  required
                  className={inputBase}
                  style={{ colorScheme: "dark" }}
                />
              </div>
            </div>

            {/* Known Illnesses */}
            <div>
              <label htmlFor="knownIllnesses" className={labelBase}>
                Known Illnesses
              </label>
              <textarea
                id="knownIllnesses"
                name="knownIllnesses"
                rows={3}
                className={cn(inputBase, "resize-y")}
              />
              <p className="mt-1 text-xs text-sandstone/60">
                List any illness of which the Institute should be aware of
              </p>
            </div>

            {/* Emergency Contact */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="emergencyContact" className={labelBase}>
                  Emergency Contact{requiredStar}
                </label>
                <input
                  id="emergencyContact"
                  name="emergencyContact"
                  type="text"
                  required
                  className={inputBase}
                />
                <p className="mt-1 text-xs text-sandstone/60">In case of emergency notify</p>
              </div>
              <div>
                <label htmlFor="emergencyPhone" className={labelBase}>
                  Contact Phone{requiredStar}
                </label>
                <input
                  id="emergencyPhone"
                  name="emergencyPhone"
                  type="tel"
                  required
                  className={inputBase}
                  placeholder="(949) 555-1234"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Education */}
        {currentStep === 3 && (
          <div className="space-y-8">
            <fieldset>
              <legend className="font-heading text-lg font-bold text-parchment mb-4">
                Education Information
              </legend>
              <div className="space-y-5">
                {/* High School */}
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

                {/* File Upload — Diploma / Transcripts / GED */}
                <div>
                  <label className={labelBase}>
                    High School Diploma / Transcripts / GED
                  </label>
                  <div
                    className={cn(
                      "relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-8 transition-colors cursor-pointer",
                      isDragOver
                        ? "border-pink-500 bg-pink-500/5"
                        : uploadedFileName
                          ? "border-jade/40 bg-jade/5"
                          : "border-white/15 bg-plum-800/40 hover:border-white/25",
                    )}
                    onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragOver(false);
                      const file = e.dataTransfer.files[0];
                      if (file) setUploadedFileName(file.name);
                    }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="diplomaFile"
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="sr-only"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setUploadedFileName(file.name);
                      }}
                    />

                    {uploadedFileName ? (
                      <>
                        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-jade/15">
                          <svg className="h-5 w-5 text-jade" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-parchment">{uploadedFileName}</p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setUploadedFileName("");
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                          className="mt-2 text-xs font-semibold text-pink-500 hover:text-pink-400 transition-colors"
                        >
                          Remove file
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                          <svg className="h-5 w-5 text-sandstone/60" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                          </svg>
                        </div>
                        <p className="text-sm text-parchment">
                          <span className="font-semibold text-pink-500">Click to upload</span> or drag and drop
                        </p>
                        <p className="mt-1 text-xs text-sandstone/60">
                          PDF, JPG, PNG, DOC, or DOCX (max 10 MB)
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Graduation Date */}
                <div className="sm:max-w-xs">
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
                  <p className="mt-1 text-xs text-sandstone/60">
                    Enter High School or G.E.D. Graduation Date
                  </p>
                </div>

                {/* Colleges Attended */}
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
                  <p className="mt-1 text-xs text-sandstone/60">
                    Enter the names of any colleges, universities, or design schools attended
                  </p>
                </div>
              </div>
            </fieldset>

            {/* ── Certificate Course Preference ───────────────────────────── */}
            <fieldset>
              <legend className="font-heading text-lg font-bold text-parchment mb-2">
                Certificate Course Preference{requiredStar}
              </legend>
              <p className="text-sm text-sandstone mb-5">
                Would you prefer in-person or on-line?
              </p>

              {/* Preference radios */}
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { value: "in-person", label: "In-Person", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" },
                  { value: "online", label: "On-line", icon: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" },
                  { value: "hybrid", label: "Hybrid", icon: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={cn(
                      "flex items-center gap-2.5 rounded-xl border px-5 py-3 cursor-pointer transition-all",
                      coursePreference === opt.value
                        ? "border-pink-500/40 bg-pink-500/[0.06] text-parchment"
                        : "border-white/10 bg-plum-800/40 text-sandstone hover:border-white/20",
                    )}
                  >
                    <input
                      type="radio"
                      name="coursePreference_radio"
                      value={opt.value}
                      checked={coursePreference === opt.value}
                      onChange={() => {
                        setCoursePreference(opt.value);
                        setInPersonSelections([]);
                        setOnlineSelections([]);
                        setHybridSelections([]);
                      }}
                      className="h-4 w-4 accent-pink-500"
                    />
                    <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={opt.icon} />
                    </svg>
                    <span className="text-sm font-semibold">{opt.label}</span>
                  </label>
                ))}
              </div>

              {/* ── In-Person schedule ─────────────────────────────────────── */}
              {coursePreference === "in-person" && (
                <div className="animate-in fade-in space-y-4">
                  <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
                    <p className="text-xs font-semibold text-amber-400">
                      Select 1 Lecture time + 1 Studio time (or 1 Combined)
                    </p>
                  </div>

                  {/* Lectures — clears Combined when selected */}
                  <div>
                    <p className="text-xs font-bold text-parchment mb-2">Lecture Times</p>
                    <div className="space-y-2">
                      {IN_PERSON_SCHEDULES.filter((s) => s.type === "Lecture").map((s) => {
                        const selected = inPersonSelections.includes(s.value);
                        return (
                          <label
                            key={s.value}
                            className={cn(
                              "flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all",
                              selected
                                ? "border-pink-500/40 bg-pink-500/[0.04]"
                                : "border-white/5 bg-plum-900/40 hover:border-white/10",
                            )}
                          >
                            <input
                              type="radio"
                              name="inPersonLecture_radio"
                              value={s.value}
                              checked={selected}
                              onChange={() => {
                                setInPersonSelections((prev) => [
                                  ...prev.filter((v) => {
                                    const opt = IN_PERSON_SCHEDULES.find((o) => o.value === v);
                                    return opt?.type !== "Lecture" && opt?.type !== "Combined";
                                  }),
                                  s.value,
                                ]);
                              }}
                              className="h-4 w-4 accent-pink-500 flex-shrink-0"
                            />
                            <svg className="h-3.5 w-3.5 flex-shrink-0 text-pink-500/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="flex-1 text-sm text-sandstone">{s.label}</span>
                            <span className="rounded bg-jade/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">
                              {s.tag}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Studios — clears Combined when selected */}
                  <div>
                    <p className="text-xs font-bold text-parchment mb-2">Studio Times</p>
                    <div className="space-y-2">
                      {IN_PERSON_SCHEDULES.filter((s) => s.type === "Studio").map((s) => {
                        const selected = inPersonSelections.includes(s.value);
                        return (
                          <label
                            key={s.value}
                            className={cn(
                              "flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all",
                              selected
                                ? "border-pink-500/40 bg-pink-500/[0.04]"
                                : "border-white/5 bg-plum-900/40 hover:border-white/10",
                            )}
                          >
                            <input
                              type="radio"
                              name="inPersonStudio_radio"
                              value={s.value}
                              checked={selected}
                              onChange={() => {
                                setInPersonSelections((prev) => [
                                  ...prev.filter((v) => {
                                    const opt = IN_PERSON_SCHEDULES.find((o) => o.value === v);
                                    return opt?.type !== "Studio" && opt?.type !== "Combined";
                                  }),
                                  s.value,
                                ]);
                              }}
                              className="h-4 w-4 accent-pink-500 flex-shrink-0"
                            />
                            <svg className="h-3.5 w-3.5 flex-shrink-0 text-pink-500/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="flex-1 text-sm text-sandstone">{s.label}</span>
                            <span className="rounded bg-jade/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">
                              {s.tag}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Combined — clears Lecture + Studio when selected */}
                  <div>
                    <p className="text-xs font-bold text-parchment mb-2">Combined (Lecture + Studio)</p>
                    <div className="space-y-2">
                      {IN_PERSON_SCHEDULES.filter((s) => s.type === "Combined").map((s) => {
                        const selected = inPersonSelections.includes(s.value);
                        return (
                          <label
                            key={s.value}
                            className={cn(
                              "flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all",
                              selected
                                ? "border-pink-500/40 bg-pink-500/[0.04]"
                                : "border-white/5 bg-plum-900/40 hover:border-white/10",
                            )}
                          >
                            <input
                              type="radio"
                              name="inPersonCombined_radio"
                              value={s.value}
                              checked={selected}
                              onChange={() => setInPersonSelections([s.value])}
                              className="h-4 w-4 accent-pink-500 flex-shrink-0"
                            />
                            <svg className="h-3.5 w-3.5 flex-shrink-0 text-pink-500/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="flex-1 text-sm text-sandstone">{s.label}</span>
                            <span className="rounded bg-jade/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">
                              {s.tag}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ── On-Line schedule ───────────────────────────────────────── */}
              {coursePreference === "online" && (
                <div className="animate-in fade-in space-y-4">
                  <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
                    <p className="text-xs font-semibold text-amber-400">
                      Select 1 Lecture time + 1 Studio time (or 1 Combined)
                    </p>
                  </div>

                  {/* Lectures — clears Combined when selected */}
                  <div>
                    <p className="text-xs font-bold text-parchment mb-2">Lecture Times</p>
                    <div className="space-y-2">
                      {ONLINE_SCHEDULES.filter((s) => s.type === "Lecture").map((s) => {
                        const selected = onlineSelections.includes(s.value);
                        return (
                          <label
                            key={s.value}
                            className={cn(
                              "flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all",
                              selected
                                ? "border-pink-500/40 bg-pink-500/[0.04]"
                                : "border-white/5 bg-plum-900/40 hover:border-white/10",
                            )}
                          >
                            <input
                              type="radio"
                              name="onlineLecture_radio"
                              value={s.value}
                              checked={selected}
                              onChange={() => {
                                setOnlineSelections((prev) => [
                                  ...prev.filter((v) => {
                                    const opt = ONLINE_SCHEDULES.find((o) => o.value === v);
                                    return opt?.type !== "Lecture" && opt?.type !== "Combined";
                                  }),
                                  s.value,
                                ]);
                              }}
                              className="h-4 w-4 accent-pink-500 flex-shrink-0"
                            />
                            <svg className="h-3.5 w-3.5 flex-shrink-0 text-pink-500/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="flex-1 text-sm text-sandstone">{s.label}</span>
                            <span className="rounded bg-violet/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet">
                              {s.tag}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Studios — clears Combined when selected */}
                  <div>
                    <p className="text-xs font-bold text-parchment mb-2">Studio Times</p>
                    <div className="space-y-2">
                      {ONLINE_SCHEDULES.filter((s) => s.type === "Studio").map((s) => {
                        const selected = onlineSelections.includes(s.value);
                        return (
                          <label
                            key={s.value}
                            className={cn(
                              "flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all",
                              selected
                                ? "border-pink-500/40 bg-pink-500/[0.04]"
                                : "border-white/5 bg-plum-900/40 hover:border-white/10",
                            )}
                          >
                            <input
                              type="radio"
                              name="onlineStudio_radio"
                              value={s.value}
                              checked={selected}
                              onChange={() => {
                                setOnlineSelections((prev) => [
                                  ...prev.filter((v) => {
                                    const opt = ONLINE_SCHEDULES.find((o) => o.value === v);
                                    return opt?.type !== "Studio" && opt?.type !== "Combined";
                                  }),
                                  s.value,
                                ]);
                              }}
                              className="h-4 w-4 accent-pink-500 flex-shrink-0"
                            />
                            <svg className="h-3.5 w-3.5 flex-shrink-0 text-pink-500/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="flex-1 text-sm text-sandstone">{s.label}</span>
                            <span className="rounded bg-violet/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet">
                              {s.tag}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Combined — clears Lecture + Studio when selected */}
                  <div>
                    <p className="text-xs font-bold text-parchment mb-2">Combined (Lecture + Studio)</p>
                    <div className="space-y-2">
                      {ONLINE_SCHEDULES.filter((s) => s.type === "Combined").map((s) => {
                        const selected = onlineSelections.includes(s.value);
                        return (
                          <label
                            key={s.value}
                            className={cn(
                              "flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all",
                              selected
                                ? "border-pink-500/40 bg-pink-500/[0.04]"
                                : "border-white/5 bg-plum-900/40 hover:border-white/10",
                            )}
                          >
                            <input
                              type="radio"
                              name="onlineCombined_radio"
                              value={s.value}
                              checked={selected}
                              onChange={() => setOnlineSelections([s.value])}
                              className="h-4 w-4 accent-pink-500 flex-shrink-0"
                            />
                            <svg className="h-3.5 w-3.5 flex-shrink-0 text-pink-500/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="flex-1 text-sm text-sandstone">{s.label}</span>
                            <span className="rounded bg-violet/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet">
                              {s.tag}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Hybrid schedule ────────────────────────────────────────── */}
              {coursePreference === "hybrid" && (
                <div className="animate-in fade-in space-y-4">
                  <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
                    <p className="text-xs font-semibold text-amber-400">
                      Select 1 Lecture time + 1 Studio time
                    </p>
                  </div>

                  {/* Lectures — radio: only 1 allowed */}
                  <div>
                    <p className="text-xs font-bold text-parchment mb-2">Lecture Times</p>
                    <div className="space-y-2">
                      {HYBRID_OPTIONS.filter((o) => o.type === "Lecture").map((s) => {
                        const selected = hybridSelections.includes(s.value);
                        return (
                          <label
                            key={s.value}
                            className={cn(
                              "flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all",
                              selected
                                ? "border-pink-500/40 bg-pink-500/[0.04]"
                                : "border-white/5 bg-plum-900/40 hover:border-white/10",
                            )}
                          >
                            <input
                              type="radio"
                              name="hybridLecture_radio"
                              value={s.value}
                              checked={selected}
                              onChange={() => {
                                setHybridSelections((prev) => [
                                  ...prev.filter((v) => {
                                    const opt = HYBRID_OPTIONS.find((o) => o.value === v);
                                    return opt?.type !== "Lecture";
                                  }),
                                  s.value,
                                ]);
                              }}
                              className="h-4 w-4 accent-pink-500 flex-shrink-0"
                            />
                            <svg className="h-3.5 w-3.5 flex-shrink-0 text-pink-500/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="flex-1 text-sm text-sandstone">{s.label}</span>
                            <span
                              className={cn(
                                "rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                                s.tag === "Online" ? "bg-violet/15 text-violet" : "bg-jade/15 text-jade",
                              )}
                            >
                              {s.tag}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Studios — radio: only 1 allowed */}
                  <div>
                    <p className="text-xs font-bold text-parchment mb-2">Studio Times</p>
                    <div className="space-y-2">
                      {HYBRID_OPTIONS.filter((o) => o.type === "Studio").map((s) => {
                        const selected = hybridSelections.includes(s.value);
                        return (
                          <label
                            key={s.value}
                            className={cn(
                              "flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all",
                              selected
                                ? "border-pink-500/40 bg-pink-500/[0.04]"
                                : "border-white/5 bg-plum-900/40 hover:border-white/10",
                            )}
                          >
                            <input
                              type="radio"
                              name="hybridStudio_radio"
                              value={s.value}
                              checked={selected}
                              onChange={() => {
                                setHybridSelections((prev) => [
                                  ...prev.filter((v) => {
                                    const opt = HYBRID_OPTIONS.find((o) => o.value === v);
                                    return opt?.type !== "Studio";
                                  }),
                                  s.value,
                                ]);
                              }}
                              className="h-4 w-4 accent-pink-500 flex-shrink-0"
                            />
                            <svg className="h-3.5 w-3.5 flex-shrink-0 text-pink-500/60" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="flex-1 text-sm text-sandstone">{s.label}</span>
                            <span
                              className={cn(
                                "rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                                s.tag === "Online" ? "bg-violet/15 text-violet" : "bg-jade/15 text-jade",
                              )}
                            >
                              {s.tag}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </fieldset>
          </div>
        )}

        {/* Step 4: Payment Information */}
        {currentStep === 4 && (
          <div className="space-y-8">
            {/* ── Payment Choice ──────────────────────────────────────── */}
            <fieldset>
              <legend className="font-heading text-lg font-bold text-parchment mb-2">
                Payment Choice &mdash;{" "}
                {programType === "combined"
                  ? "Combined Certificate Course"
                  : programType === "hybrid"
                    ? "Hybrid Certificate Course"
                    : programType === "single"
                      ? "Lecture or Studio Only"
                      : "Certificate Course"}
                {requiredStar}
              </legend>
              <div className="space-y-3 mt-4">
                {PAYMENT_TIERS.map((tier) => (
                  <label
                    key={tier.value}
                    className={cn(
                      "flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all",
                      paymentTier === tier.value
                        ? "border-pink-500/40 bg-pink-500/[0.04]"
                        : "border-white/10 bg-plum-800/40 hover:border-white/20",
                    )}
                  >
                    <input
                      type="radio"
                      name="paymentTier"
                      value={tier.value}
                      checked={paymentTier === tier.value}
                      onChange={() => setPaymentTier(tier.value)}
                      className="mt-0.5 h-4 w-4 accent-pink-500 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-heading text-lg font-bold text-pink-500">
                          {tier.price}
                        </span>
                        <span className="text-sm font-medium text-parchment">
                          {tier.label}
                        </span>
                      </div>
                      {tier.detail && (
                        <p className="mt-1 text-xs text-sandstone/70">{tier.detail}</p>
                      )}
                    </div>
                  </label>
                ))}
              </div>
              <p className="mt-3 text-xs text-sandstone/60">
                Full or partial tuition payment includes books, supplies &amp; mandatory non-refundable state fee.
              </p>
            </fieldset>

            {/* ── Additional Information / Special Requests ───────────── */}
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

            {/* ── No Application Fee Notice ────────────────────────────── */}
            <div className="rounded-xl border border-jade/20 bg-jade/5 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-jade/15">
                  <svg className="h-5 w-5 text-jade" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-parchment">No Application Fee</p>
                  <p className="text-xs text-sandstone">
                    There is no charge to submit your application. Payment is collected during registration.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Terms & Conditions ───────────────────────────────────── */}
            <fieldset>
              <legend className="font-heading text-lg font-bold text-parchment mb-4">
                Terms &amp; Conditions{requiredStar}
              </legend>

              <div className="rounded-xl border border-white/10 bg-plum-800/40 p-5 space-y-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    required
                    className="mt-1 h-4 w-4 accent-pink-500 flex-shrink-0"
                  />
                  <span className="text-sm font-semibold text-parchment">I Agree</span>
                </label>

                <p className="text-sm text-sandstone leading-relaxed">
                  I certify that all information provided in this application is true and accurate. I agree to provide the school documentation of high school graduation or a G.E.D. by the first date of attendance.
                </p>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-parchment mb-2">
                    Title IX Notice of Nondiscrimination
                  </p>
                  <p className="text-xs text-sandstone/80 leading-relaxed">
                    Interior Designers Institute does not discriminate on the basis of sex in the education programs or activities in operates and it is required by Title IX not to discriminate in such a manner. Questions regarding Title IX should contact the college&apos;s Title IX Coordinator at: Interior Designers Institute, Attn: Title IX Coordinator, 1061 Camelback Street, Newport Beach, CA 92660. Phone: (949) 675-4451 Email:{" "}
                    <a
                      href="mailto:TitleIXCoordinator@idi.edu"
                      className="text-pink-500 hover:text-pink-400 transition-colors"
                    >
                      TitleIXCoordinator@idi.edu
                    </a>
                  </p>
                </div>
              </div>
            </fieldset>

            {/* ── How did you find out about IDI? ──────────────────────── */}
            <div>
              <label htmlFor="howFound" className={labelBase}>
                How did you find out about IDI?{requiredStar}
              </label>
              <select
                id="howFound"
                name="howFound"
                required
                className={inputBase}
              >
                <option value="">Select...</option>
                {HOW_FOUND_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* ── Error message ───────────────────────────────────────────────── */}
      {errorMsg && (
        <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMsg}
        </div>
      )}
      {status === "error" && !errorMsg && (
        <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          Submission failed. Please try again.
        </div>
      )}

      {/* ── Navigation ──────────────────────────────────────────────────── */}
      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
        {currentStep > 1 ? (
          <Button type="button" variant="ghost" size="md" onClick={handleBack}>
            <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back
          </Button>
        ) : (
          <div />
        )}

        {currentStep < 4 ? (
          <Button type="button" variant="primary" size="lg" onClick={handleNext}>
            Continue
            <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
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
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Application"
            )}
          </Button>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-sandstone/50">
        No application fee. Your information is transmitted securely.
      </p>
    </form>
  );
}
