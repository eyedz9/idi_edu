"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMotion } from "@/components/animations/motion-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NEXT_CLASS_DATE } from "@/lib/constants";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const accredRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);
  const { animationsEnabled } = useMotion();

  // Safety timeout: if GSAP hasn't animated within 3s, force everything visible
  const forceVisible = useCallback(() => {
    if (animatedRef.current) return;
    const els = [
      headlineRef.current,
      subtitleRef.current,
      ctaRef.current,
      badgeRef.current,
      imageRef.current,
      accredRef.current,
      scrollRef.current,
    ].filter(Boolean);
    els.forEach((el) => {
      if (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.visibility = "visible";
      }
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(forceVisible, 3000);
    return () => clearTimeout(timer);
  }, [forceVisible]);

  useGSAP(
    () => {
      if (!animationsEnabled) {
        forceVisible();
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          animatedRef.current = true;
        },
      });

      // Use autoAlpha (visibility + opacity) for more reliable hiding/showing
      gsap.set(
        [
          headlineRef.current,
          subtitleRef.current,
          ctaRef.current,
          badgeRef.current,
          scrollRef.current,
        ],
        { autoAlpha: 0, y: 40 },
      );
      gsap.set(imageRef.current, { autoAlpha: 0, scale: 1.08, x: 60 });
      gsap.set(accredRef.current, { autoAlpha: 0, y: 20 });

      tl.to(headlineRef.current, { autoAlpha: 1, y: 0, duration: 1.2 }, 0.3)
        .to(subtitleRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.7)
        .to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.9)
        .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 1.0)
        .to(
          imageRef.current,
          { autoAlpha: 1, scale: 1, x: 0, duration: 1.4, ease: "power2.out" },
          0.5,
        )
        .to(accredRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 1.2)
        .to(scrollRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 1.4);

      // Mark as animated once the first tween fires
      tl.eventCallback("onStart", () => {
        animatedRef.current = true;
      });

      // Subtle float on accreditation badges
      gsap.to(accredRef.current, {
        y: -8,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: sectionRef, dependencies: [animationsEnabled] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[calc(100svh-64px)] min-h-[600px] items-center overflow-hidden mesh-aurora grain"
      aria-label="Hero"
    >
      {/* Hero image — asymmetric right offset */}
      <div
        ref={imageRef}
        className="absolute inset-0 lg:left-[45%] max-lg:opacity-30"
      >
        <Image
          src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1920&q=80"
          alt="Warm staircase interior showcasing elegant design"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        {/* Gradient fade from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/80 to-transparent" />
        {/* Gradient fade from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 via-transparent to-plum-900/40" />
      </div>

      {/* Content — left aligned */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-24 md:py-32 lg:py-40">
          {/* Enrollment badge */}
          <div ref={badgeRef} className="mb-8 inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink-500" />
            </span>
            <Badge variant="accent">Classes Starting {NEXT_CLASS_DATE}</Badge>
          </div>

          {/* Kinetic headline */}
          <h1
            ref={headlineRef}
            className="font-heading font-bold leading-[0.9] tracking-tight text-parchment"
            style={{ fontSize: "clamp(3rem, 10vw, 8.5rem)" }}
          >
            <span className="text-gradient-pink">DESIGN</span>
            <br />
            YOUR
            <br />
            FUTURE
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mt-6 max-w-lg text-lg leading-relaxed text-sandstone md:text-xl"
          >
            California&apos;s Premier Interior Design School &middot; Newport
            Beach
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Link href="/programs">
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Explore Programs
              </Button>
            </Link>
            <Link href="/contact">
              <Button as="span" variant="secondary" size="lg">
                Request Information
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating accreditation badges */}
      <div
        ref={accredRef}
        className="absolute bottom-32 right-8 z-10 hidden flex-col gap-3 lg:flex"
      >
        <Badge
          variant="jade"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm backdrop-blur-sm glow-jade"
        >
          <Image
            src="/images/ACCCS_logo.png"
            alt="ACCSC logo"
            width={24}
            height={24}
            className="h-5 w-auto brightness-0 invert"
            unoptimized
          />
          ACCSC Accredited
        </Badge>
        <Badge
          variant="violet"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm backdrop-blur-sm glow-violet"
        >
          <Image
            src="/images/cida_logo.png"
            alt="CIDA logo"
            width={24}
            height={24}
            className="h-5 w-auto brightness-0 invert"
            unoptimized
          />
          CIDA Accredited BA
        </Badge>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex animate-bounce flex-col items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-sandstone/60">
            Discover
          </span>
          <svg
            className="h-5 w-5 text-sandstone/60"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
