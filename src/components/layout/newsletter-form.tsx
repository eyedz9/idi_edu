"use client";

export function NewsletterForm() {
  return (
    <form
      className="flex gap-2"
      action="/api/newsletter"
      method="POST"
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        name="email"
        type="email"
        placeholder="Your email"
        required
        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-parchment placeholder-sandstone outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
      />
      <button
        type="submit"
        className="flex-shrink-0 rounded-lg bg-pink-500 px-4 py-3 text-sm font-semibold text-plum-900 transition-colors hover:bg-pink-400"
      >
        Join
      </button>
    </form>
  );
}

export default NewsletterForm;
