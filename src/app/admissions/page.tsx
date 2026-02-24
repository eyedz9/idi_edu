import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  enrollmentConfig,
  enrollmentSteps,
  admissionRequirements,
} from "@/data";
import { APPLY_PATH } from "@/lib/constants";

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Learn how to apply to Interior Designers Institute. Explore enrollment steps, admission requirements, tuition, financial aid, and start your application.",
  alternates: { canonical: "/admissions" },
};

/* -------------------------------------------------------------------------- */
/*  Breadcrumbs                                                               */
/* -------------------------------------------------------------------------- */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-sandstone/70">
      <ol className="flex items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-pink-400 transition-colors">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-sandstone/40">&rsaquo;</li>
        <li className="font-medium text-parchment">Admissions</li>
      </ol>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Requirement group display names                                           */
/* -------------------------------------------------------------------------- */

const requirementLabels: Record<string, string> = {
  certificate: "Certificate Course",
  associateOfArts: "Associate of Arts Degree",
  bachelorOfArts: "Bachelor of Arts Degree",
  masterOfInteriorArchitecture: "Master of Interior Architecture",
};

/* -------------------------------------------------------------------------- */
/*  Quick link cards data                                                     */
/* -------------------------------------------------------------------------- */

const quickLinks = [
  {
    title: "Tuition & Fees",
    description:
      "View program-by-program tuition breakdowns, payment schedules, and payment options.",
    href: "/admissions/tuition",
    imageSrc: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=75",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Financial Aid",
    description:
      "Explore federal grants, loans, and scholarships. Get FAFSA guidance and contact our Financial Aid office.",
    href: "/admissions/financial-aid",
    imageSrc: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=75",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Apply Now",
    description:
      "Ready to start? Complete your online application and take the first step toward your design career.",
    href: "/admissions/apply",
    imageSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=75",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function AdmissionsPage() {
  return (
    <>
      {/* -- Hero ----------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern campus interior with warm lighting"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/85 to-plum-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-plum-900/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs />
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink-500" />
            </span>
            <Badge variant="accent">
              {enrollmentConfig.registrationPeriod} &mdash; Classes Start{" "}
              {enrollmentConfig.nextClassDate}
            </Badge>
          </div>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            Begin Your <span className="text-gradient-pink">Design</span> Journey
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone md:text-xl">
            Whether you&apos;re exploring interior design for the first time or
            advancing your career, IDI has a program for you. Here&apos;s how to
            get started.
          </p>
        </div>
      </section>

      {/* -- Enrollment Steps (dark + glassmorphism) ------------------------ */}
      <Section
        bg="dark"
        grain
        overline="How to Enroll"
        title="Five Steps to IDI"
        subtitle="Our admissions process is designed to be straightforward and supportive every step of the way."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {enrollmentSteps.map((s) => (
            <Card key={s.step} variant="glass" className="relative p-6 md:p-8">
              <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-plum-900">
                {s.step}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold text-parchment">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sandstone/60">
                {s.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* -- Admission Requirements ----------------------------------------- */}
      <Section
        bg="light"
        overline="Requirements"
        title="Admission Requirements"
        subtitle="Requirements vary by program level. Review the criteria for the program you are interested in."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(admissionRequirements).map(([key, group]) => (
            <Card key={key} className="p-6 md:p-8">
              <h3 className="font-heading text-xl font-bold text-parchment">
                {requirementLabels[key]}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.requirements.map((req, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm leading-relaxed text-sandstone"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* -- Quick Links ---------------------------------------------------- */}
      <Section
        overline="Explore"
        title="Next Steps"
        subtitle="Find tuition details, financial aid options, or start your application."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group">
              <Card className="group flex h-full flex-col overflow-hidden transition-all group-hover:shadow-[0_0_30px_rgba(176,108,255,0.12)] group-hover:ring-2 group-hover:ring-amber-500/30">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={link.imageSrc}
                    alt={link.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-pink-500">{link.icon}</div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold text-parchment group-hover:text-pink-500 transition-colors">
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
      </Section>

      {/* -- Pre-Enrollment Information -------------------------------------- */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Card className="border-l-4 border-amber-500 p-6 md:p-8">
            <h3 className="font-heading text-xl font-bold text-parchment">
              Pre-Enrollment Information
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sandstone">
              Before enrolling, please review the following important documents:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 text-sm leading-relaxed text-sandstone">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <a href="/documents/idi-catalog.pdf" className="text-pink-500 hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  School Catalog (PDF)
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm leading-relaxed text-sandstone">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <a href="/documents/school-performance-fact-sheet.pdf" className="text-pink-500 hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  School Performance Fact Sheet (PDF)
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm leading-relaxed text-sandstone">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <Link href="/disclosures#strf" className="text-pink-500 hover:text-pink-400 transition-colors">
                  Student Tuition Recovery Fund (STRF)
                </Link>
              </li>
              <li className="flex items-start gap-2 text-sm leading-relaxed text-sandstone">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <Link href="/disclosures" className="text-pink-500 hover:text-pink-400 transition-colors">
                  All Disclosures &amp; Consumer Information
                </Link>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* -- CTA Banner (mesh-aurora + grain) ------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-16 md:py-24" aria-label="Call to action">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl lg:text-5xl">
            Ready to <span className="text-gradient-pink">Apply</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-sandstone">
            Start your application today and join the next class of interior
            designers at IDI.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={APPLY_PATH}>
              <Button
                as="span"
                variant="primary"
                size="lg"
                className="glow-amber"
              >
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                as="span"
                variant="secondary"
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
