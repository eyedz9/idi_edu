"use client";

import { AnimatedSection } from "@/components/animations/animated-section";
import { ProgramCard } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { programs } from "@/data/programs";

export function ProgramsSection() {
  return (
    <Section
      overline="Explore Our Programs"
      title="Our Programs"
      subtitle="From a 12-week certificate to a Master's degree, find the program that fits your goals."
    >
      <AnimatedSection stagger={0.12} y={40}>
        <div className="grid gap-8 sm:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}

export default ProgramsSection;
