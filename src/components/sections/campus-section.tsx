"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMotion } from "@/components/animations/motion-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* -------------------------------------------------------------------------- */
/*  Location badges                                                           */
/* -------------------------------------------------------------------------- */

const locationBadges = [
  "Design Centers",
  "Luxury Showrooms",
  "Coastal Inspiration",
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function CampusSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { animationsEnabled } = useMotion();

  useGSAP(
    () => {
      if (!animationsEnabled) return;
      const el = sectionRef.current;
      if (!el) return;

      const textBlock = el.querySelector<HTMLElement>("[data-campus-text]");
      const imageBlock = el.querySelector<HTMLElement>("[data-campus-image]");
      const badges = el.querySelectorAll<HTMLElement>("[data-campus-badge]");

      if (textBlock) {
        gsap.fromTo(
          textBlock,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (imageBlock) {
        gsap.fromTo(
          imageBlock,
          { opacity: 0, scale: 1.05 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );

        // Parallax on image
        const innerImg = imageBlock.querySelector<HTMLElement>(
          "[data-campus-inner]",
        );
        if (innerImg) {
          gsap.fromTo(
            innerImg,
            { y: -30 },
            {
              y: 30,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      }

      if (badges.length > 0) {
        gsap.fromTo(
          badges,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 60%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    },
    { scope: sectionRef, dependencies: [animationsEnabled] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-plum-900"
      aria-label="Campus and location"
    >
      <div className="grid min-h-[600px] lg:grid-cols-2">
        {/* Left — Full-bleed image */}
        <div
          data-campus-image
          className="relative min-h-[400px] overflow-hidden lg:min-h-0"
        >
          <div data-campus-inner className="absolute inset-[-30px]">
            <Image
              src="https://images.unsplash.com/photo-1758747878870-6f2626c93a10?w=1920&q=80"
              alt="Palm trees at sunset in Newport Beach, California"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Dark overlay for text readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/50 via-transparent to-plum-900/20 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-plum-900/60" />

          {/* Floating badges on image */}
          <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 lg:bottom-8 lg:left-8">
            {locationBadges.map((label) => (
              <Badge
                key={label}
                data-campus-badge
                variant="dark"
                className="backdrop-blur-md bg-plum-900/70 border-white/10"
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right — Text content */}
        <div
          data-campus-text
          className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24"
        >
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Our Campus
          </p>
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl lg:text-5xl">
            Newport Beach, California
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-sandstone">
            Study in one of Southern California&apos;s most inspiring design
            communities. Our Newport Beach location places you at the heart of a
            thriving creative ecosystem, with direct access to world-class design
            centers including the Laguna Design Center and Stonemill Design
            Center.
          </p>

          {/* Feature list */}
          <div className="mt-8 space-y-4">
            {[
              "Minutes from premier design showrooms",
              "Surrounded by iconic architecture and interiors",
              "A coastal setting that inspires creativity",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pink-500/15">
                  <svg
                    className="h-3.5 w-3.5 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span className="text-sm text-parchment">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link href="/contact">
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Visit Our Campus
              </Button>
            </Link>
          </div>

          {/* Small ocean view image accent */}
          <div className="mt-10 hidden lg:block">
            <div className="relative h-40 w-64 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1762640044491-99634d38c619?w=800&q=80"
                alt="Modern home with ocean view in Newport Beach"
                fill
                className="object-cover"
                sizes="256px"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusSection;
