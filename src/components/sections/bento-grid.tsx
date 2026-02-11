"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animations/animated-section";
import { CountUp } from "@/components/animations/count-up";
import { Badge } from "@/components/ui/badge";

/* -------------------------------------------------------------------------- */
/*  Program images mapped to the Unsplash collection                          */
/* -------------------------------------------------------------------------- */

const programCards = [
  {
    name: "Certificate Course",
    slug: "certificate",
    duration: "12 Weeks",
    image:
      "https://plus.unsplash.com/premium_photo-1758530085283-71dd36e22460?w=800&q=80",
    alt: "Color palette and design materials",
  },
  {
    name: "Associate of Arts",
    slug: "associate-of-arts",
    duration: "24-48 Months",
    image:
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&q=80",
    alt: "Gray chaise lounge in modern interior",
  },
  {
    name: "Bachelor of Arts",
    slug: "bachelor-of-arts",
    duration: "30-54 Months",
    badge: "CIDA",
    image:
      "https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?w=800&q=80",
    alt: "Modern bedroom with designer finishes",
  },
  {
    name: "Master of Interior Architecture",
    slug: "master-interior-architecture",
    duration: "12-15 Months",
    image:
      "https://images.unsplash.com/photo-1761116186680-4c1da2eb416b?w=800&q=80",
    alt: "Vaulted ceiling staircase interior",
  },
];

const whyPoints = [
  { label: "Small Classes", desc: "15:1 student-to-faculty ratio" },
  { label: "Newport Beach", desc: "Heart of SoCal design" },
  { label: "Industry Faculty", desc: "Learn from working designers" },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function BentoGrid() {
  return (
    <section
      className="relative overflow-hidden bg-plum-900 py-20 md:py-28 grain"
      aria-label="Programs and highlights"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Explore Our Programs
          </p>
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-5xl">
            Shape Your Creative Path
          </h2>
        </div>

        <AnimatedSection stagger={0.1} y={30}>
          <div className="grid auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* ── Large Feature Image (2x2) ─────────────────────────── */}
            <div className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2">
              <Image
                src="https://images.unsplash.com/photo-1749930206000-179d0b85aa7e?w=800&q=80"
                alt="Modern living room with curated designer details"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-900/90 via-plum-900/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="mb-1 font-body text-xs font-semibold uppercase tracking-[0.15em] text-pink-500">
                  Student Showcase
                </p>
                <h3 className="font-heading text-2xl font-bold text-parchment sm:text-3xl">
                  Where Vision Becomes Reality
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-sandstone">
                  Our students create stunning spaces that bridge imagination and
                  craftsmanship, guided by world-class faculty.
                </p>
              </div>
            </div>

            {/* ── Stats Cell (tall on desktop) ──────────────────────── */}
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-plum-800 p-6 text-center sm:row-span-2 lg:row-span-2">
              <div className="absolute inset-0 opacity-40 mesh-plum" />
              <div className="relative z-10">
                <CountUp
                  as="div"
                  target={40}
                  suffix="+"
                  duration={2.5}
                  useLocale={false}
                  className="font-heading text-5xl font-bold text-pink-500 md:text-6xl"
                />
                <p className="mt-2 font-body text-sm font-semibold uppercase tracking-wider text-parchment">
                  Years of Excellence
                </p>
                <p className="mt-3 text-sm leading-relaxed text-sandstone">
                  Shaping the next generation of designers since 1984
                </p>
                <div className="mx-auto mt-6 h-px w-12 bg-pink-500/40" />
                <div className="mt-6 space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-jade/15 text-xs font-bold text-jade">
                      4
                    </span>
                    <span className="text-sm text-parchment">
                      Degree Programs
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet/15 text-xs font-bold text-violet">
                      2
                    </span>
                    <span className="text-sm text-parchment">
                      Accreditations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Why IDI? Cell ─────────────────────────────────────── */}
            <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/5 bg-plum-700 p-6">
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-pink-500">
                Why IDI?
              </p>
              <div className="space-y-3">
                {whyPoints.map((point) => (
                  <div key={point.label} className="flex items-start gap-3">
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink-500" />
                    <div>
                      <p className="text-sm font-semibold text-parchment">
                        {point.label}
                      </p>
                      <p className="text-xs text-sandstone">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 4 Program Cards (1x1 each) ────────────────────────── */}
            {programCards.map((card) => (
              <Link
                key={card.slug}
                href={`/programs/${card.slug}`}
                className="group relative overflow-hidden rounded-2xl"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/90 via-plum-900/20 to-transparent transition-colors duration-300 group-hover:from-plum-900/95" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-semibold text-pink-500">
                      {card.duration}
                    </p>
                    {card.badge && (
                      <Badge variant="jade" className="text-[10px] px-2 py-0.5">
                        {card.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="mt-1 font-heading text-lg font-bold text-parchment transition-colors group-hover:text-pink-400">
                    {card.name}
                  </h3>
                </div>
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ring-1 ring-amber-500/30" />
              </Link>
            ))}

            {/* ── Accreditation Feature Cell ─────────────────────────── */}
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-jade/20 bg-plum-800 p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-jade/20 blur-3xl" />
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-violet/20 blur-3xl" />
              </div>
              <div className="relative z-10">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-jade/15 glow-jade">
                  <svg
                    className="h-7 w-7 text-jade"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>
                <p className="font-heading text-lg font-bold text-parchment">
                  CIDA & ACCSC
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-jade">
                  Accredited
                </p>
                <p className="mt-2 text-xs leading-relaxed text-sandstone">
                  Nationally recognized for educational quality
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default BentoGrid;
