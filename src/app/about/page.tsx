import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutIDI } from "@/data/about";
import { idiStats } from "@/data/why-idi";
import { SITE_NAME } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection, CountUp, MagneticButton } from "@/components/animations";
import { MissionCta } from "@/components/sections/mission-cta";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME}, California's premier interior design school since 1984. Accredited programs, Newport Beach campus, and over 40 years of excellence in design education.`,
  alternates: { canonical: "/about" },
};

const quickLinks = [
  {
    title: "Our History",
    description: "From our founding in 1984 to four decades of design education excellence.",
    href: "/about/history",
    imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=75",
  },
  {
    title: "Accreditation",
    description: "ACCSC and CIDA accredited with California BPPE approval.",
    href: "/about/accreditation",
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75",
  },
  {
    title: "Faculty",
    description: "Industry-connected professionals who bring real-world expertise to the classroom.",
    href: "/about/faculty",
    imageSrc: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=75",
  },
  {
    title: "Staff Directory",
    description: "Meet the dedicated team supporting your educational journey at IDI.",
    href: "/about/staff",
    imageSrc: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=75",
  },
];

/** Extract a numeric target from stat value strings like "40+" or "4" */
function parseStatTarget(value: string): number | null {
  const match = value.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

export default function AboutPage() {
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
          <li className="text-parchment font-medium">About</li>
        </ol>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32 lg:py-40">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern design studio representing IDI's creative learning environment"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-plum-900/80 via-plum-900/70 to-plum-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            About
          </p>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            {aboutIDI.headline.split(" ").length > 2 ? (
              <>
                {aboutIDI.headline.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-gradient-pink">
                  {aboutIDI.headline.split(" ").slice(-1)[0]}
                </span>
              </>
            ) : (
              <span className="text-gradient-pink">{aboutIDI.headline}</span>
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            {aboutIDI.tagline}
          </p>
        </div>
      </section>

      {/* ── Our Mission ──────────────────────────────────────────────────── */}
      <Section
        overline="Our Mission"
        title="Shaping the Future of Interior Design"
      >
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Copy — left-justified */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-sandstone">
                  Interior Designers Institute has been dedicated to providing
                  quality education in interior design since 1984. Located in
                  Newport Beach, California, our mission is to nurture creative
                  talent through hands-on, studio-based learning and personalized
                  mentorship from industry-connected faculty.
                </p>
                <p className="text-lg leading-relaxed text-sandstone">
                  With four progressive programs from a Certificate Course through a
                  Master of Interior Architecture, IDI offers a comprehensive
                  pathway for aspiring designers at every stage of their career. Our
                  small class sizes ensure every student receives the attention they
                  deserve.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-parchment mb-3">
                  Mission Statement
                </h3>
                <p className="text-lg leading-relaxed text-sandstone">
                  Interior Designers Institute (IDI) is a private college offering degrees to educate students in the development of creative concepts and effective solutions to complex problems. The IDI faculty is composed of practicing architects and interior designers creating a learning environment that fosters and supports creativity. With a focused curriculum IDI adapts and assimilates current market and industry trends to best prepare students entering into the global workforce or for career advancement.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-parchment mb-3">
                  Goal of the Institute
                </h3>
                <p className="text-lg leading-relaxed text-sandstone">
                  Interior Designers Institute is a boutique college teaching interior design and interior architecture. The college&apos;s specialized curriculum offers students a personalized education with student-focused faculty who love teaching. IDI&apos;s mission is to be an exclusive producer of interior design graduates who become some of the country&apos;s most well-known and successful designers.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-parchment mb-3">
                  Additional Goals of the Program
                </h3>
                <div className="space-y-3 text-lg leading-relaxed text-sandstone">
                  <p>The program aims to prepare graduates to enter the interior design profession as entry-level designers and/or for career advancement.</p>
                  <p>Students will learn to design spaces that serve diverse communities with varying cultures, physical abilities, and economic backgrounds.</p>
                  <p>The program emphasizes the importance of professional ethics, integrity, and encourages students to contribute their interior design skills and talents to their community.</p>
                  <p>Additionally, students will develop the technical, analytical, conceptual, and communication skills essential for success in the design profession.</p>
                  <p>The program strives to create a learning environment that fosters individuality, creativity, and motivation to succeed.</p>
                </div>
              </div>
            </div>

            {/* Image + CTA */}
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/gallery/gallery-05.jpg"
                  alt="IDI student design work showcasing interior design excellence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/40 to-transparent" />
              </div>
              <MissionCta />
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Quick Links ─────────────────────────────────────────────────── */}
      <Section bg="light" overline="Explore" title="Learn More About IDI">
        <AnimatedSection stagger={0.1}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group">
                <Card className="group flex h-full flex-col overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(176,108,255,0.12)] hover:ring-2 hover:ring-amber-500/20">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={link.imageSrc}
                      alt={link.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-bold text-parchment">
                      {link.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-sandstone">
                      {link.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500">
                      Learn More
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Stats ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-plum-900 py-16 grain md:py-24" aria-label="IDI by the numbers">
        {/* Subtle amber glow bar at top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center md:mb-16">
              <p className="mb-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                By the Numbers
              </p>
              <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl lg:text-5xl">
                IDI at a Glance
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {idiStats.map((stat) => {
                const numTarget = parseStatTarget(stat.value);
                return (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading text-4xl font-bold text-pink-500 drop-shadow-[0_0_20px_rgba(245,166,35,0.25)] md:text-5xl lg:text-6xl">
                      {numTarget !== null ? (
                        <>
                          <CountUp target={numTarget} />
                          {stat.value.replace(String(numTarget), "")}
                        </>
                      ) : (
                        stat.value
                      )}
                    </p>
                    <p className="mt-2 font-body text-sm font-semibold uppercase tracking-wider text-parchment">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-sandstone">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
        {/* Subtle amber glow bar at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      </section>

      {/* ── Philosophy ───────────────────────────────────────────────── */}
      <Section overline="Philosophy" title="Our Commitment to Design Education">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image — left side */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/gallery/gallery-12.jpg"
                alt="Interior design studio environment at IDI"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-900/40 to-transparent" />
            </div>

            {/* Copy — left-justified */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-bold text-parchment mb-3">
                  Philosophy of the Program
                </h3>
                <p className="text-lg leading-relaxed text-sandstone">
                  Interior Design includes a scope of services performed by a professional design practitioner, qualified through <strong className="text-parchment">education</strong>, <strong className="text-parchment">experience</strong>, and <strong className="text-parchment">examination</strong> to protect and enhance the life, health, safety, and welfare of the public.
                </p>
              </div>
              <p className="text-lg leading-relaxed text-sandstone">
                At IDI, we believe that great design begins with a strong
                foundation in both technical skill and creative vision. Our
                studio-based curriculum immerses students in real-world projects,
                from residential interiors to commercial spaces, while our
                partnerships with industry professionals ensure graduates are
                prepared for the demands of modern design practice.
              </p>
              <p className="text-lg leading-relaxed text-sandstone">
                Every aspect of our institution — from our ACCSC and CIDA
                accreditations to our intentionally small class sizes — reflects
                our dedication to student success. We are proud to be a community
                where aspiring designers find their voice and build the skills to
                transform spaces and lives.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-aurora grain py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl lg:text-5xl">
            Ready to explore our{" "}
            <span className="text-gradient-pink">programs</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sandstone">
            Discover the program that fits your goals — from a 12-week
            certificate to a master&apos;s degree in interior architecture.
          </p>
          <div className="mt-8">
            <Link href="/programs">
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
