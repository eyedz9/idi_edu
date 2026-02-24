"use client";

import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/*  Phone formatting helper — +1 (999) 999-9999                              */
/* -------------------------------------------------------------------------- */

function formatPhone(raw: string): string {
  // Strip everything except digits and leading +
  const hasPlus = raw.startsWith("+");
  const digits = raw.replace(/\D/g, "");

  // Build formatted string progressively
  let out = hasPlus || digits.length > 0 ? "+" : "";
  if (digits.length === 0) return out;

  // Country code (first digit group before area code)
  const cc = digits.slice(0, 1);  // e.g. "1"
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

/** Matches +1 (999) 999-9999 exactly */
const PHONE_RE = /^\+\d \(\d{3}\) \d{3}-\d{4}$/;

/* -------------------------------------------------------------------------- */
/*  Options                                                                   */
/* -------------------------------------------------------------------------- */

const HOW_FOUND_OPTIONS = [
  "Call",
  "Email",
  "FAFSA Application",
  "Internet Search",
  "Social Media",
  "Friend",
  "Mailer",
  "Open House",
  "College Fair",
  "GI Bill",
  "Other",
];

const CONTACT_METHOD_OPTIONS = [
  "Email",
  "Phone",
  "Either",
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

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [phone, setPhone] = useState("+1 ");

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

    try {
      const res = await fetch("/api/contact", {
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
      setPhone("+1 ");
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
          Message Sent!
        </h3>
        <p className="mt-3 text-sandstone leading-relaxed max-w-md mx-auto">
          Thank you for contacting IDI. An admissions representative will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-pink-500 hover:text-pink-400 transition-colors"
        >
          Send another message
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
      {/* How did you find out */}
      <div>
        <label htmlFor="contact-howFound" className={labelBase}>
          How did you find out about IDI?{requiredStar}
        </label>
        <select
          id="contact-howFound"
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

      {/* Name */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-firstName" className={labelBase}>
            First Name{requiredStar}
          </label>
          <input
            id="contact-firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="contact-lastName" className={labelBase}>
            Last Name{requiredStar}
          </label>
          <input
            id="contact-lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={inputBase}
          />
        </div>
      </div>

      {/* Contact preference */}
      <div>
        <label htmlFor="contact-contactMethod" className={labelBase}>
          How would you like us to contact you?{requiredStar}
        </label>
        <select
          id="contact-contactMethod"
          name="contactMethod"
          required
          className={inputBase}
        >
          <option value="">Select…</option>
          {CONTACT_METHOD_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className={labelBase}>
            Email{requiredStar}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputBase}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelBase}>
            Phone{requiredStar}
          </label>
          <input
            id="contact-phone"
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

      {/* Address */}
      <div>
        <label htmlFor="contact-address" className={labelBase}>
          Address{requiredStar}
        </label>
        <input
          id="contact-address"
          name="address"
          type="text"
          required
          autoComplete="street-address"
          className={inputBase}
          placeholder="Street address"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="contact-city" className={labelBase}>
            City
          </label>
          <input
            id="contact-city"
            name="city"
            type="text"
            autoComplete="address-level2"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="contact-state" className={labelBase}>
            State / Province
          </label>
          <input
            id="contact-state"
            name="state"
            type="text"
            autoComplete="address-level1"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="contact-zip" className={labelBase}>
            ZIP / Postal Code
          </label>
          <input
            id="contact-zip"
            name="zip"
            type="text"
            autoComplete="postal-code"
            className={inputBase}
          />
        </div>
      </div>

      {/* Question or Comment */}
      <div>
        <label htmlFor="contact-message" className={labelBase}>
          Question or Comment
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className={cn(inputBase, "resize-y")}
          placeholder="How can we help you?"
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
              Sending…
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}
