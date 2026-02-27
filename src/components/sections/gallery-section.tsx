/** Masonry gallery of student work with GSAP scroll-driven animations. */
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
    student: "Maria Gonzalez",
    program: "BA in Interior Design",
  },
  {
    src: "https://images.unsplash.com/photo-1741852197045-cc35920a3aa0?w=800&q=80",
    alt: "Elegant restaurant interior with ambient lighting",
    caption: "Hospitality Design",
    description: "Creating memorable dining experiences",
    student: "James Chen",
    program: "AA in Interior Design",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1758530086086-b40ba4e569ca?w=800&q=80",
    alt: "Interior design moodboard with fabric swatches",
    caption: "Material Exploration",
    description: "From concept to reality through tactile discovery",
    student: "Aisha Patel",
    program: "BA in Interior Design",
  },
  {
    src: "https://images.unsplash.com/photo-1761116186680-4c1da2eb416b?w=800&q=80",
    alt: "Dramatic vaulted ceiling staircase design",
    caption: "Architectural Interiors",
    description: "Spatial drama through structural beauty",
    student: "Lucas Rivera",
    program: "Master of Interior Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?w=800&q=80",
    alt: "Modern bedroom with curated designer details",
    caption: "Contemporary Living",
    description: "Tranquil spaces for modern lifestyles",
    student: "Sophie Nakamura",
    program: "AA in Interior Design",
  },
];

/* -------------------------------------------------------------------------- */
/*  Grid layout config per card                                               */
/* -------------------------------------------------------------------------- */

const cardLayouts = [
  { grid: "lg:col-span-7 lg:row-span-2 lg:row-start-1", sizes: "(max-width: 1024px) 100vw, 58vw" },
  { grid: "lg:col-span-5 lg:row-span-1", sizes: "(max-width: 1024px) 100vw, 42vw" },
  { grid: "lg:col-span-5 lg:row-span-1", sizes: "(max-width: 1024px) 100vw, 42vw" },
  { grid: "lg:col-span-5 lg:row-span-2 lg:row-start-1", sizes: "(max-width: 1024px) 100vw, 42vw" },
  { grid: "lg:col-span-7 lg:row-span-2 lg:row-start-3", sizes: "(max-width: 1024px) 100vw, 58vw" },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
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
          card.style.transform = "none";
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
        if (headerRef.current) {
          gsap.set(headerRef.current, { opacity: 1, y: 0 });
        }
        cards.forEach((card) => {
          gsap.set(card, { clipPath: "none", opacity: 1, y: 0 });
        });
        return;
      }

      // Animate header
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play reverse none reverse",
            },
          },
        );
      }

      // Smooth reveal for each gallery card
      cards.forEach((card, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 10%",
            toggleActions: "play reverse none reverse",
          },
        });

        tl.fromTo(
          card,
          {
            clipPath: "inset(100% 0% 0% 0%)",
            autoAlpha: 0,
            y: 40,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            autoAlpha: 1,
            y: 0,
            duration: 1,
            delay: i * 0.08,
            ease: "power2.out",
          },
        );

        // Info bar slide-up
        const infoBar = card.querySelector<HTMLElement>("[data-gallery-info]");
        if (infoBar) {
          tl.fromTo(
            infoBar,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out" },
            "-=0.4",
          );
        }

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
          {galleryItems.map((item, i) => (
            <div
              key={item.caption}
              data-gallery-card
              className={`group relative overflow-hidden rounded-2xl ${cardLayouts[i].grid}`}
            >
              {/* Image */}
              <div data-gallery-img className="absolute inset-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={cardLayouts[i].sizes}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum-900/90 via-plum-900/20 to-transparent" />

              {/* Always-visible info bar */}
              <div
                data-gallery-info
                className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-plum-900/95 to-plum-900/0 px-5 pb-4 pt-10 sm:px-6 sm:pb-5"
              >
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-pink-500">
                    {item.caption}
                  </p>
                  <p className="mt-0.5 font-heading text-base font-bold leading-tight text-parchment sm:text-lg">
                    {item.description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm font-medium text-parchment">
                    {item.student}
                  </p>
                  <p className="text-xs text-sandstone/70">
                    {item.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
