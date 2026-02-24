"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMotion } from "@/components/animations/motion-provider";
import { MagneticButton } from "@/components/animations";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/*  Floating doodle SVGs — hand-drawn style accents                          */
/* -------------------------------------------------------------------------- */

function Squiggle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 20" fill="none" aria-hidden="true">
      <path
        d="M2 10c10-8 20 8 30 0s20 8 30 0 20 8 30 0 20 8 26 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8 2.4-7.2-6-4.8h7.6z" />
    </svg>
  );
}

function Circle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 4" />
    </svg>
  );
}

function Pencil({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function MissionCta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { animationsEnabled } = useMotion();

  useGSAP(
    () => {
      if (!animationsEnabled || !containerRef.current) return;

      const el = containerRef.current;

      // Floating doodles — continuous gentle drift
      const doodles = el.querySelectorAll("[data-doodle]");
      doodles.forEach((doodle, i) => {
        gsap.set(doodle, { opacity: 0, scale: 0.6 });

        // Staggered entrance
        gsap.to(doodle, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.3 + i * 0.12,
          ease: "back.out(2)",
        });

        // Continuous float loop
        gsap.to(doodle, {
          y: `random(-8, 8)`,
          x: `random(-5, 5)`,
          rotation: `random(-12, 12)`,
          duration: `random(2.5, 4)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });

      // Squiggle draw-on — stroke-dashoffset animation
      const squiggle = el.querySelector("[data-squiggle] path") as SVGPathElement | null;
      if (squiggle) {
        const len = squiggle.getTotalLength();
        gsap.set(squiggle, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(squiggle, {
          strokeDashoffset: 0,
          duration: 1.2,
          delay: 0.5,
          ease: "power2.out",
        });
      }

      // Pulsing glow on the card border
      gsap.to(el, {
        boxShadow: "0 0 40px rgba(255,92,141,0.15), 0 0 80px rgba(255,92,141,0.05)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef, dependencies: [animationsEnabled] },
  );

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-pink-500/20 bg-gradient-to-br from-plum-800 via-plum-900 to-plum-800 p-8"
    >
      {/* Mesh background glow */}
      <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-amber-500/8 blur-2xl" />

      {/* Floating doodles */}
      <div data-doodle className="absolute right-4 top-3 text-pink-500/40 w-5 h-5">
        <Star className="w-full h-full" />
      </div>
      <div data-doodle className="absolute left-3 top-4 text-amber-500/30 w-8 h-8">
        <Circle className="w-full h-full" />
      </div>
      <div data-doodle className="absolute right-8 bottom-4 text-pink-500/25 w-6 h-6">
        <Pencil className="w-full h-full" />
      </div>
      <div data-doodle className="absolute left-6 bottom-6 text-jade/30 w-4 h-4">
        <Star className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
          Your Future Starts Here
        </p>
        <h3 className="mt-2 font-heading text-2xl font-bold text-parchment leading-tight">
          Ready to <span className="text-gradient-pink">create</span>?
        </h3>

        {/* Squiggle underline accent */}
        <div data-squiggle className="mx-auto mt-1 w-24 text-pink-500/50">
          <Squiggle className="w-full h-auto" />
        </div>

        <p className="mt-4 text-sm leading-relaxed text-sandstone">
          Join a community of designers who turn bold ideas into beautiful spaces.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <MagneticButton as="div" strength={0.25}>
            <Link href="/programs">
              <Button as="span" variant="primary" size="md" className="glow-amber">
                Explore Programs
              </Button>
            </Link>
          </MagneticButton>
          <MagneticButton as="div" strength={0.2}>
            <Link href="/admissions/apply">
              <Button as="span" variant="secondary" size="md">
                Apply Now
              </Button>
            </Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
