/** Campus tour booking form that submits to /api/tour. */
"use client";

import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/*  Phone formatting helper — +1 (999) 999-9999                              */
/* -------------------------------------------------------------------------- */

function formatPhone(raw: string): string {
  const hasPlus = raw.startsWith("+");
  const digits = raw.replace(/\D/g, "");

  let out = hasPlus || digits.length > 0 ? "+" : "";
  if (digits.length === 0) return out;

  const cc = digits.slice(0, 1);
  out += cc;

  if (digits.length > 1) {
    const area = digits.slice(1, 4);
    out += ` (${area}`;
    if (digits.length >= 4) out += ")";
  }
  if (digits.length > 4) {
    out += ` ${digits.slice(4, 7)}`;
  }
  if (digits.length > 7) {
    out += `-${digits.slice(7, 11)}`;
  }

  return out;
}

const PHONE_RE = /^\+\d \(\d{3}\) \d{3}-\d{4}$/;

/* -------------------------------------------------------------------------- */
/*  Options                                                                   */
/* -------------------------------------------------------------------------- */

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
];

const GROUP_SIZES = [
  "Just me",
  "2 people",
  "3\u20135 people",
  "6+ people",
];

const PROGRAMS = [
  "Certificate Course",
  "Associate of Arts",
  "Bachelor of Arts",
  "Master of Interior Architecture",
  "Not sure yet",
];

/* -------------------------------------------------------------------------- */
/*  Date helpers                                                              */
/* -------------------------------------------------------------------------- */

function toDateString(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getMinDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return toDateString(d);
}

function getMaxDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + 90);
  return toDateString(d);
}

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

export function TourForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [phone, setPhone] = useState("+1 ");
  const [email, setEmail] = useState("");

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(e.target.value));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = formRef.current;
    if (!form) return;

    const data = Object.fromEntries(new FormData(form));

    if (!PHONE_RE.test(phone)) {
      setStatus("error");
      setErrorMsg("Please enter a valid phone number: +1 (999) 999-9999");
      return;
    }

    // Validate weekday-only tours
    const selectedDate = data.preferredDate as string;
    if (selectedDate) {
      const day = new Date(selectedDate + "T12:00:00").getDay();
      if (day === 0 || day === 6) {
        setStatus("error");
        setErrorMsg("Campus tours are available Monday–Friday only. Please select a weekday.");
        return;
      }
    }

    try {
      const res = await fetch("/api/tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setEmail(data.email as string);
      setStatus("success");
      form.reset();
      setPhone("+1 ");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  /* -- Success state -------------------------------------------------------- */
  if (status === "success") {
    return (
      <div className="rounded-2xl border border-jade/30 bg-jade/5 p-10 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-jade/15">
          <svg className="h-8 w-8 text-jade" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-parchment">
          Tour Request Received!
        </h3>
        <p className="mt-3 text-sandstone leading-relaxed max-w-md mx-auto">
          We&apos;ll send a confirmation to{" "}
          <span className="font-semibold text-parchment">{email}</span>.
          Our admissions team will be in touch shortly to confirm your visit.
        </p>
        <button
          type="button"
          onClick={() => { setStatus("idle"); setEmail(""); }}
          className="mt-6 text-sm font-semibold text-pink-500 hover:text-pink-400 transition-colors"
        >
          Schedule another visit
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      {/* Name */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="tour-firstName" className={labelBase}>
            First Name{requiredStar}
          </label>
          <input
            id="tour-firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="tour-lastName" className={labelBase}>
            Last Name{requiredStar}
          </label>
          <input
            id="tour-lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={inputBase}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="tour-email" className={labelBase}>
            Email{requiredStar}
          </label>
          <input
            id="tour-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputBase}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="tour-phone" className={labelBase}>
            Phone{requiredStar}
          </label>
          <input
            id="tour-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={phone}
            onChange={handlePhoneChange}
            className={inputBase}
            placeholder="+1 (555) 555-5555"
          />
        </div>
      </div>

      {/* Date + Time */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="tour-preferredDate" className={labelBase}>
            Preferred Date{requiredStar}
          </label>
          <input
            id="tour-preferredDate"
            name="preferredDate"
            type="date"
            required
            min={getMinDate()}
            max={getMaxDate()}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="tour-preferredTime" className={labelBase}>
            Preferred Time{requiredStar}
          </label>
          <select
            id="tour-preferredTime"
            name="preferredTime"
            required
            className={inputBase}
          >
            <option value="">Select a time...</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Group Size + Program */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="tour-groupSize" className={labelBase}>
            Group Size{requiredStar}
          </label>
          <select
            id="tour-groupSize"
            name="groupSize"
            required
            className={inputBase}
          >
            <option value="">Select...</option>
            {GROUP_SIZES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="tour-programInterest" className={labelBase}>
            Program of Interest
          </label>
          <select
            id="tour-programInterest"
            name="programInterest"
            className={inputBase}
          >
            <option value="">Select...</option>
            {PROGRAMS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Comments */}
      <div>
        <label htmlFor="tour-comments" className={labelBase}>
          Questions or Comments
        </label>
        <textarea
          id="tour-comments"
          name="comments"
          rows={4}
          className={cn(inputBase, "resize-y")}
          placeholder="Anything you'd like us to know before your visit?"
        />
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full glow-amber"
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
            "Request Campus Tour"
          )}
        </Button>
      </div>
    </form>
  );
}
