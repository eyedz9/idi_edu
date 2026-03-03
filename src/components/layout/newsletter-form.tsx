/** Simple email newsletter signup form rendered in the footer. */
"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const email = new FormData(form).get("email") as string;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Signup failed. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Signup failed.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-jade">
        Thanks for subscribing! Check your inbox.
      </p>
    );
  }

  return (
    <form
      className="space-y-2"
      onSubmit={handleSubmit}
      aria-label="Newsletter signup"
      noValidate
    >
      <div className="flex gap-2">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          placeholder="Your email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-parchment placeholder-sandstone outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex-shrink-0 rounded-lg bg-pink-500 px-4 py-3 text-sm font-semibold text-plum-900 transition-colors hover:bg-pink-400 disabled:opacity-50"
        >
          {status === "submitting" ? "..." : "Join"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-400">{errorMsg}</p>
      )}
    </form>
  );
}

export default NewsletterForm;
