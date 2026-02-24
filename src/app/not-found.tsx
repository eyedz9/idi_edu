import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden mesh-plum grain px-4 text-center">
      {/* Decorative glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
          Error 404
        </p>
        <h1 className="mt-4 font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
          Page <span className="text-gradient-pink">Not Found</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-sandstone">
          The page you are looking for may have been moved, renamed, or is
          temporarily unavailable.
        </p>

        <div className="mt-10">
          <Link href="/">
            <Button as="span" variant="primary" size="lg" className="glow-amber">
              Return Home
            </Button>
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-sandstone/60">
            Or try one of these pages
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { label: "Programs", href: "/programs" },
              { label: "Admissions", href: "/admissions" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-parchment/70 underline underline-offset-4 decoration-pink-500/40 transition-colors hover:text-pink-500 hover:decoration-pink-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
