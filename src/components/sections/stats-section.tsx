"use client";

import { CountUp } from "@/components/animations/count-up";
import { AnimatedSection } from "@/components/animations/animated-section";

/* -------------------------------------------------------------------------- */
/*  Stats data                                                                */
/* -------------------------------------------------------------------------- */

const stats = [
  { target: 42, suffix: "+", label: "Years", sub: "of Excellence" },
  { target: 4, suffix: "", label: "Programs", sub: "Certificate to Master's" },
  { target: 15, suffix: ":1", label: "Ratio", sub: "Student-to-Faculty" },
  { target: 1000, suffix: "+", label: "Graduates", sub: "& Counting" },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function StatsSection() {
  return (
    <section
      className="relative overflow-hidden bg-plum-900 py-14 grain"
      aria-label="IDI by the numbers"
    >
      {/* Subtle amber glow bar at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <AnimatedSection stagger={0.12} y={20}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <CountUp
                  as="div"
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={2.5}
                  useLocale={false}
                  className="font-heading text-4xl font-bold text-pink-500 drop-shadow-[0_0_20px_rgba(245,166,35,0.25)] md:text-5xl lg:text-6xl"
                />
                <p className="mt-2 font-body text-sm font-semibold uppercase tracking-wider text-parchment">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs sm:text-sm text-sandstone">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Subtle amber glow bar at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
    </section>
  );
}

export default StatsSection;
