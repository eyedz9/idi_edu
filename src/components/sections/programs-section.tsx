"use client";

import { AnimatedSection } from "@/components/animations/animated-section";
import { ProgramCard } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { programs } from "@/data/programs";

const programImages: Record<string, string> = {
  certificate:
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=75",
  "associate-of-arts":
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=75",
  "bachelor-of-arts":
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75",
  "master-interior-architecture":
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=75",
};

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
            <ProgramCard
              key={program.slug}
              program={program}
              imageSrc={programImages[program.slug]}
            />
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}

export default ProgramsSection;
