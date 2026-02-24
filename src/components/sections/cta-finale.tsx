"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMotion } from "@/components/animations/motion-provider";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NEXT_CLASS_DATE, PHONE, EMAIL } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function CTAFinale() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const { animationsEnabled } = useMotion();

  useGSAP(
    () => {
      if (!animationsEnabled) return;

      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );

      // Pulse animation on badge
      if (badgeRef.current) {
        gsap.to(badgeRef.current, {
          scale: 1.05,
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    },
    { scope: sectionRef, dependencies: [animationsEnabled] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80vh] items-center overflow-hidden mesh-aurora grain"
      aria-label="Start your design career"
    >
      {/* Extra glow spots */}
      <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-pink-500/8 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-violet/8 blur-[80px]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        {/* Pulsing enrollment badge */}
        <div ref={badgeRef} className="mb-8 inline-block">
          <Badge variant="accent" className="px-5 py-2 text-sm">
            Next Class: {NEXT_CLASS_DATE}
          </Badge>
        </div>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-heading text-4xl font-bold leading-tight text-parchment md:text-5xl lg:text-7xl"
        >
          Your Design Career
          <br />
          <span className="text-gradient-pink">Starts Here</span>
        </h2>

        {/* Sub-content + CTAs */}
        <div ref={contentRef}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sandstone">
            Take the first step toward a rewarding career in interior design.
            Join a community of passionate creatives at California&apos;s
            premier design school.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton as="div" strength={0.15}>
              <Link href="/admissions">
                <Button as="span" variant="primary" size="lg" className="glow-amber">
                  Apply Now
                </Button>
              </Link>
            </MagneticButton>

            <MagneticButton as="div" strength={0.15}>
              <Link href="/contact">
                <Button as="span" variant="secondary" size="lg">
                  Request Information
                </Button>
              </Link>
            </MagneticButton>
          </div>

          {/* Contact info */}
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
              className="group flex items-center gap-2 text-sm text-sandstone transition-colors hover:text-pink-500"
            >
              <svg
                className="h-4 w-4 text-pink-500/60 transition-colors group-hover:text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              {PHONE}
            </a>
            <span className="hidden h-4 w-px bg-sandstone/30 sm:block" />
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-2 text-sm text-sandstone transition-colors hover:text-pink-500"
            >
              <svg
                className="h-4 w-4 text-pink-500/60 transition-colors group-hover:text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAFinale;
