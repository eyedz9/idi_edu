import { HeroSection } from "@/components/sections/hero-section";
import { BentoGrid } from "@/components/sections/bento-grid";
import { GallerySection } from "@/components/sections/gallery-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CampusSection } from "@/components/sections/campus-section";
import { CTAFinale } from "@/components/sections/cta-finale";
import { ConsumerInfoBar } from "@/components/sections/consumer-info-bar";

export default function Home() {
  return (
    <>
      {/* Section 1: Cinematic Hero */}
      <HeroSection />

      {/* Section 2: Bento Grid Showcase */}
      <BentoGrid />

      {/* Section 3: Immersive Student Work Gallery */}
      <GallerySection />

      {/* Section 4: Stats Bar */}
      <StatsSection />

      {/* Section 5: Testimonials — Editorial Style */}
      <TestimonialsSection />

      {/* Section 6: Campus & Location — Split Screen */}
      <CampusSection />

      {/* Consumer Information — Regulatory Links */}
      <ConsumerInfoBar />

      {/* Section 7: CTA Finale — Dramatic Close */}
      <CTAFinale />
    </>
  );
}
