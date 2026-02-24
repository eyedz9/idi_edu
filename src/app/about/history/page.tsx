import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutIDI } from "@/data/about";
import { SITE_NAME } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations";

export const metadata: Metadata = {
  title: "Our History",
  description: `Explore the history of ${SITE_NAME}, founded in 1984 in Corona del Mar and now located in Newport Beach, California. Over 40 years of excellence in interior design education.`,
  alternates: { canonical: "/about/history" },
};

export default function HistoryPage() {
  const paragraphs = aboutIDI.history.split("\n\n");

  return (
    <>
      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-sandstone/60">
          <li>
            <Link href="/" className="hover:text-pink-500 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-sandstone/40">&rsaquo;</li>
          <li>
            <Link href="/about" className="hover:text-pink-500 transition-colors">
              About
            </Link>
          </li>
          <li aria-hidden="true" className="text-sandstone/40">&rsaquo;</li>
          <li className="text-parchment font-medium">History</li>
        </ol>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32 lg:py-40">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80"
            alt="Interior of a prestigious educational institution"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-plum-900/80 via-plum-900/70 to-plum-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">
            Founded 1984
          </Badge>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            Our <span className="text-gradient-pink">History</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            From a small school in Corona del Mar to California&apos;s premier
            interior design institute in Newport Beach.
          </p>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────────────────── */}
      <Section overline="Milestones" title="Four Decades of Growth">
        <AnimatedSection stagger={0.08}>
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-amber-500/40 via-white/10 to-amber-500/40 md:left-1/2 md:block" />

            <div className="space-y-12">
              {aboutIDI.milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left"
                    }`}
                  >
                    <p className="font-heading text-2xl font-bold text-gradient-pink inline-block">
                      {milestone.year}
                    </p>
                    <p className="mt-2 text-sandstone leading-relaxed">
                      {milestone.event}
                    </p>
                  </div>

                  {/* Circle on line (desktop) */}
                  <div className="hidden md:flex md:flex-shrink-0 md:items-center md:justify-center">
                    <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 ring-4 ring-plum-900 shadow-[0_0_12px_rgba(245,166,35,0.3)]" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Narrative ───────────────────────────────────────────────────── */}
      <Section bg="light" overline="Our Story" title="The IDI Story">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-sandstone"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Photos ──────────────────────────────────────────────────────── */}
      <Section bg="dark" grain overline="Campus" title="Through the Years">
        <AnimatedSection stagger={0.1}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/gallery/gallery-16.jpg",
                alt: "IDI Campus in Newport Beach",
                label: "IDI Campus, Newport Beach",
              },
              {
                src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
                alt: "Students collaborating in a bright design studio",
                label: "Design Studio Sessions",
              },
              {
                src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
                alt: "Elegant interior design showroom with curated furnishings",
                label: "Design Center Visit",
              },
              {
                src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80",
                alt: "Graduates celebrating at commencement ceremony",
                label: "Graduation Ceremony",
              },
              {
                src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
                alt: "Faculty member mentoring a student at a design workstation",
                label: "Faculty Mentoring",
              },
              {
                src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
                alt: "Student presenting a design portfolio to a review panel",
                label: "Portfolio Presentations",
              },
            ].map((photo) => (
              <Card
                key={photo.label}
                variant="glass"
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/80 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-parchment">
                  {photo.label}
                </p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Key Dates Highlight ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-aurora grain py-16 md:py-24">
        {/* Subtle amber glow bar at top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3 text-center">
              <Card variant="glass" className="p-8">
                <p className="font-heading text-4xl font-bold text-gradient-pink inline-block md:text-5xl">1984</p>
                <p className="mt-3 text-sm leading-relaxed text-sandstone">
                  Founded in Corona del Mar, California, by Judy Deaton with a
                  mission to provide quality interior design education.
                </p>
              </Card>
              <Card variant="glass" className="p-8">
                <p className="font-heading text-4xl font-bold text-gradient-pink inline-block md:text-5xl">1990</p>
                <p className="mt-3 text-sm leading-relaxed text-sandstone">
                  Relocated to 1061 Camelback Street in Newport Beach, placing
                  students at the heart of Southern California&apos;s design
                  community.
                </p>
              </Card>
              <Card variant="glass" className="p-8">
                <p className="font-heading text-4xl font-bold text-gradient-pink inline-block md:text-5xl">2026</p>
                <p className="mt-3 text-sm leading-relaxed text-sandstone">
                  Over four decades of excellence in interior design education
                  with thousands of successful graduates shaping spaces worldwide.
                </p>
              </Card>
            </div>
          </div>
        </AnimatedSection>
        {/* Subtle amber glow bar at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      </section>
    </>
  );
}
