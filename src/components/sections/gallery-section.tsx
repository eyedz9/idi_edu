"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMotion } from "@/components/animations/motion-provider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* -------------------------------------------------------------------------- */
/*  Gallery data                                                              */
/* -------------------------------------------------------------------------- */

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1768397003905-a202ea6325f5?w=800&q=80",
    alt: "Bold red living room with statement furniture",
    caption: "Residential Design",
    description: "Bold color theory meets modern comfort",
  },
  {
    src: "https://images.unsplash.com/photo-1741852197045-cc35920a3aa0?w=800&q=80",
    alt: "Elegant restaurant interior with ambient lighting",
    caption: "Hospitality Design",
    description: "Creating memorable dining experiences",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1758530086086-b40ba4e569ca?w=800&q=80",
    alt: "Interior design moodboard with fabric swatches",
    caption: "Material Exploration",
    description: "From concept to reality through tactile discovery",
  },
  {
    src: "https://images.unsplash.com/photo-1761116186680-4c1da2eb416b?w=800&q=80",
    alt: "Dramatic vaulted ceiling staircase design",
    caption: "Architectural Interiors",
    description: "Spatial drama through structural beauty",
  },
  {
    src: "https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?w=800&q=80",
    alt: "Modern bedroom with curated designer details",
    caption: "Contemporary Living",
    description: "Tranquil spaces for modern lifestyles",
  },
];

/* -------------------------------------------------------------------------- */
/*  Component — Staggered Masonry with Clip-Path Reveals                      */
/* -------------------------------------------------------------------------- */

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { animationsEnabled } = useMotion();

  // Safety timeout: force gallery visible after 4s if ScrollTrigger hasn't fired
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = sectionRef.current;
      if (!el) return;
      const cards = el.querySelectorAll<HTMLElement>("[data-gallery-card]");
      cards.forEach((card) => {
        const computed = window.getComputedStyle(card);
        if (computed.opacity === "0" || computed.visibility === "hidden") {
          card.style.clipPath = "none";
          card.style.opacity = "1";
          card.style.visibility = "visible";
        }
      });
      if (headerRef.current) {
        const h = window.getComputedStyle(headerRef.current);
        if (h.opacity === "0" || h.visibility === "hidden") {
          headerRef.current.style.opacity = "1";
          headerRef.current.style.visibility = "visible";
          headerRef.current.style.transform = "none";
        }
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      const el = sectionRef.current;
      if (!el) return;

      const cards = el.querySelectorAll<HTMLElement>("[data-gallery-card]");

      if (!animationsEnabled) {
        // Ensure everything is visible when animations are disabled
        if (headerRef.current) {
          gsap.set(headerRef.current, { opacity: 1, y: 0 });
        }
        cards.forEach((card) => {
          gsap.set(card, { clipPath: "none", opacity: 1 });
        });
        return;
      }

      // Animate header
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Clip-path reveal for each gallery card
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            clipPath: "inset(100% 0% 0% 0%)",
            autoAlpha: 0,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            autoAlpha: 1,
            duration: 1.2,
            delay: i * 0.12,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );

        // Parallax on the inner image
        const img = card.querySelector<HTMLElement>("[data-gallery-img]");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });
    },
    { scope: sectionRef, dependencies: [animationsEnabled] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-plum-800 py-20 md:py-28"
      aria-label="Student work gallery"
    >
      {/* Subtle mesh */}
      <div className="absolute inset-0 mesh-plum opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-14 max-w-2xl">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Student Work
          </p>
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-5xl">
            Inspired Spaces, Crafted Here
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sandstone">
            A curated look at the stunning environments our students design
            throughout their programs.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[200px]">
          {/* Item 1 — Large, spans 7 cols / 2 rows */}
          <div
            data-gallery-card
            className="group relative overflow-hidden rounded-2xl lg:col-span-7 lg:row-span-2 lg:row-start-1"
          >
            <div data-gallery-img className="absolute inset-0">
              <Image
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-plum-900/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-8">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-pink-500">
                {galleryItems[0].caption}
              </p>
              <p className="mt-1 font-heading text-xl font-bold text-parchment">
                {galleryItems[0].description}
              </p>
            </div>
          </div>

          {/* Item 2 — 5 cols, 1 row */}
          <div
            data-gallery-card
            className="group relative overflow-hidden rounded-2xl lg:col-span-5 lg:row-span-1"
          >
            <div data-gallery-img className="absolute inset-0">
              <Image
                src={galleryItems[1].src}
                alt={galleryItems[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-plum-900/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-pink-500">
                {galleryItems[1].caption}
              </p>
              <p className="mt-1 font-heading text-lg font-bold text-parchment">
                {galleryItems[1].description}
              </p>
            </div>
          </div>

          {/* Item 3 — 5 cols, 1 row */}
          <div
            data-gallery-card
            className="group relative overflow-hidden rounded-2xl lg:col-span-5 lg:row-span-1"
          >
            <div data-gallery-img className="absolute inset-0">
              <Image
                src={galleryItems[2].src}
                alt={galleryItems[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-plum-900/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-pink-500">
                {galleryItems[2].caption}
              </p>
              <p className="mt-1 font-heading text-lg font-bold text-parchment">
                {galleryItems[2].description}
              </p>
            </div>
          </div>

          {/* Item 4 — 5 cols, 2 rows */}
          <div
            data-gallery-card
            className="group relative overflow-hidden rounded-2xl lg:col-span-5 lg:row-span-2 lg:row-start-1"
          >
            <div data-gallery-img className="absolute inset-0">
              <Image
                src={galleryItems[3].src}
                alt={galleryItems[3].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-plum-900/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-8">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-pink-500">
                {galleryItems[3].caption}
              </p>
              <p className="mt-1 font-heading text-xl font-bold text-parchment">
                {galleryItems[3].description}
              </p>
            </div>
          </div>

          {/* Item 5 — 7 cols, 2 rows */}
          <div
            data-gallery-card
            className="group relative overflow-hidden rounded-2xl lg:col-span-7 lg:row-span-2 lg:row-start-3"
          >
            <div data-gallery-img className="absolute inset-0">
              <Image
                src={galleryItems[4].src}
                alt={galleryItems[4].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-plum-900/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-8">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-pink-500">
                {galleryItems[4].caption}
              </p>
              <p className="mt-1 font-heading text-xl font-bold text-parchment">
                {galleryItems[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
