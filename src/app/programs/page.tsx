import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { programs, getTuitionByProgram } from "@/data";
import { SITE_NAME } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations";
import { formatCurrency, programImages } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Programs",
  description: `Explore accredited interior design programs at ${SITE_NAME}. Certificate, Associate, Bachelor's, and Master's degrees in Interior Design and Interior Architecture.`,
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32">
        {/* Unsplash background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="Modern interior design showcasing elegant living space"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/85 to-plum-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-plum-900/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Programs
          </p>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            Our <span className="text-gradient-pink">Programs</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            From a 12-week certificate course to a Master of Interior
            Architecture, IDI offers a progressive path for every stage of your
            design career. All programs are accredited by ACCSC.
          </p>
        </div>
      </section>

      {/* ── Program Cards Grid ────────────────────────────────────────────── */}
      <Section
        overline="Explore"
        title="Find Your Program"
        subtitle="Each program builds on the last, creating a clear pathway from personal enrichment to professional mastery."
      >
        <AnimatedSection stagger={0.12}>
          <div className="grid gap-8 md:grid-cols-2">
            {programs.map((program) => {
              const tuition = getTuitionByProgram(program.slug);
              const briefDescription =
                program.description.split(". ").slice(0, 2).join(". ") + ".";

              return (
                <Card
                  key={program.slug}
                  className="group flex flex-col overflow-hidden"
                >
                  {/* Image header */}
                  <div className="relative flex items-end overflow-hidden px-6 pb-6 pt-16 md:pt-20">
                    <Image
                      src={programImages[program.slug]}
                      alt={program.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-900 via-plum-900/70 to-plum-900/30" />
                    <div className="absolute right-4 top-4 z-10">
                      <Badge variant="dark">{program.duration}</Badge>
                    </div>
                    <div className="relative z-10">
                      <Badge variant="accent" className="mb-2">
                        {program.degreeType}
                      </Badge>
                      <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                        {program.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex-1 text-sm leading-relaxed text-sandstone">
                      {briefDescription}
                    </p>

                    {/* Stats row */}
                    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                      <div>
                        <p className="text-xs sm:text-sm text-sandstone/60">
                          Starting Tuition
                        </p>
                        <p className="font-body text-base font-semibold text-parchment">
                          {formatCurrency(
                            tuition?.tuition ?? program.tuition,
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-sandstone/60">Units</p>
                        <p className="font-body text-sm font-semibold text-parchment">
                          {program.creditUnits.split(" (")[0]}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6">
                      <Link href={`/programs/${program.slug}`}>
                        <Button as="span" variant="primary" size="sm" className="w-full min-h-[44px]">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Compare CTA ───────────────────────────────────────────────────── */}
      <Section bg="mesh" grain>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl">
            Not sure which program is right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sandstone">
            Compare all four programs side-by-side to see degree types,
            duration, tuition, and career outcomes at a glance.
          </p>
          <div className="mt-8">
            <Link href="/programs/compare">
              <Button as="span" variant="secondary" size="md">
                Compare Programs
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
