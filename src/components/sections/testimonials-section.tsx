"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMotion } from "@/components/animations/motion-provider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* -------------------------------------------------------------------------- */
/*  Testimonial data                                                          */
/* -------------------------------------------------------------------------- */

interface TestimonialData {
  quote: string;
  name: string;
  title: string;
  program: string;
}

const testimonials: TestimonialData[] = [
  {
    quote:
      "IDI gave me the foundation and confidence to launch my own residential design firm. The small class sizes meant I got real mentorship from faculty who are working designers themselves.",
    name: "Sarah Mitchell",
    title: "Principal Designer, Mitchell Interiors",
    program: "BA in Interior Design",
  },
  {
    quote:
      "The Master of Interior Architecture program challenged me to think critically about space and human experience. The connections I made at IDI opened doors I never expected.",
    name: "David Chen",
    title: "Senior Designer, Gensler",
    program: "Master of Interior Architecture",
  },
  {
    quote:
      "Starting with the certificate course was the best decision. It confirmed my passion for design, and I continued all the way through the BA program. The Newport Beach location is incredibly inspiring.",
    name: "Maria Gonzalez",
    title: "Interior Designer, HBA Design",
    program: "AA in Interior Design",
  },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { animationsEnabled } = useMotion();
  const isAnimating = useRef(false);

  const current = testimonials[activeIndex];

  // Entrance animation on scroll
  useGSAP(
    () => {
      if (!animationsEnabled) return;

      gsap.fromTo(
        [quoteRef.current, authorRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef, dependencies: [animationsEnabled] },
  );

  // Crossfade to new testimonial
  const goTo = useCallback(
    (index: number) => {
      if (isAnimating.current || index === activeIndex) return;
      isAnimating.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      tl.to([quoteRef.current, authorRef.current], {
        opacity: 0,
        y: -15,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
        onComplete: () => {
          setActiveIndex(index);
        },
      }).to(
        [quoteRef.current, authorRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        },
        "+=0.05",
      );
    },
    [activeIndex],
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-warm-50 py-20 md:py-32"
      aria-label="Testimonials"
    >
      {/* Decorative gradient corners */}
      <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-pink-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Overline */}
        <p className="mb-10 text-center font-body text-xs font-semibold uppercase tracking-[0.2em] text-pink-500 md:mb-14">
          Student Stories
        </p>

        {/* Large opening quote mark */}
        <div className="mb-6 flex justify-center">
          <svg
            className="h-16 w-16 text-pink-500/20 md:h-20 md:w-20"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.171 0-2.274-.556-2.917-1.179zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.166 22 15c0 1.933-1.567 3.5-3.5 3.5-1.171 0-2.274-.556-2.917-1.179z" />
          </svg>
        </div>

        {/* Quote text — large editorial serif */}
        <blockquote
          ref={quoteRef}
          className="text-center font-heading text-2xl font-bold leading-relaxed text-plum-900 italic md:text-3xl lg:text-4xl"
        >
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        {/* Author info */}
        <div ref={authorRef} className="mt-10 text-center">
          <div className="mx-auto mb-4 h-px w-12 bg-pink-500/40" />
          <p className="font-body text-sm font-semibold text-plum-900">
            {current.name}
          </p>
          <p className="mt-0.5 text-sm text-neutral-500">{current.title}</p>
          <p className="mt-0.5 text-xs font-semibold text-pink-500">
            {current.program}
          </p>
        </div>

        {/* Navigation dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-pink-500"
                  : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
