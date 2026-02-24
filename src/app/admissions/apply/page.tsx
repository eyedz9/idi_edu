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
import { PHONE, EMAIL, SITE_URL } from "@/lib/constants";
import { ApplicationForm } from "@/components/forms/application-form";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { JsonLd } from "@/components/seo/JsonLd";

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Apply to IDI",
  description:
    "Start your application to Interior Designers Institute. Apply online for our Certificate, Associate, Bachelor's, or Master's programs in interior design.",
  alternates: { canonical: "/admissions/apply" },
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
        <li>
          <Link href="/admissions" className="hover:text-pink-400 transition-colors">
            Admissions
          </Link>
        </li>
        <li aria-hidden="true" className="text-sandstone/40">&rsaquo;</li>
        <li className="font-medium text-parchment">Apply</li>
      </ol>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ data                                                                  */
/* -------------------------------------------------------------------------- */

const faqs = [
  {
    question: "What happens after I apply?",
    answer:
      "After submitting your application, an admissions representative will contact you within 1-2 business days to schedule a campus tour and personal interview. This is an opportunity to visit our Newport Beach campus, meet faculty, and discuss your goals.",
  },
  {
    question: "When is the application deadline?",
    answer:
      "IDI accepts applications on a rolling basis. However, we recommend applying early to secure your spot, as class sizes are limited. The next enrollment period is " +
      enrollmentConfig.registrationPeriod +
      " with classes starting " +
      enrollmentConfig.nextClassDate +
      ".",
  },
  {
    question: "Is there an application fee?",
    answer:
      "There is no fee to submit the online application. A non-refundable registration fee is due upon enrollment.",
  },
  {
    question: "Can I apply if I have no design experience?",
    answer:
      "Absolutely. The Certificate Course is designed for beginners with no prior design experience. It serves as the entry point for all programs at IDI.",
  },
  {
    question: "Do I need to submit transcripts?",
    answer:
      "Transcript requirements vary by program. The Certificate Course requires proof of age (18+) or high school diploma/GED. Degree programs require official transcripts from prior institutions. Your admissions representative will guide you through the documentation process.",
  },
  {
    question: "Is financial aid available?",
    answer:
      "Yes. Federal financial aid (Title IV) is available for students enrolled in degree programs who qualify. Visit our Financial Aid page or contact the Financial Aid office for details.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Requirement summary labels                                                */
/* -------------------------------------------------------------------------- */

const requirementSummary = [
  {
    program: "Certificate Course",
    items: admissionRequirements.certificate.requirements.slice(0, 2),
  },
  {
    program: "Associate of Arts",
    items: admissionRequirements.associateOfArts.requirements.slice(0, 2),
  },
  {
    program: "Bachelor of Arts",
    items: admissionRequirements.bachelorOfArts.requirements.slice(0, 2),
  },
  {
    program: "Master of Interior Architecture",
    items:
      admissionRequirements.masterOfInteriorArchitecture.requirements.slice(
        0,
        2,
      ),
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function ApplyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Admissions", item: `${SITE_URL}/admissions` },
            { "@type": "ListItem", position: 3, name: "Apply" },
          ],
        }}
      />

      {/* -- Hero ----------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80"
            alt="Design workspace with creative materials"
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
              Now Enrolling &mdash;{" "}
              {enrollmentConfig.registrationPeriod}
            </Badge>
          </div>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            <span className="text-gradient-pink">Apply</span> to IDI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone md:text-xl">
            Take the first step toward your interior design career. Next classes
            begin{" "}
            <strong className="text-parchment">
              {enrollmentConfig.nextClassDate}
            </strong>
            .
          </p>

          {/* Primary CTA */}
          <div className="mt-10">
            <Button
              as="a"
              href="#application"
              variant="primary"
              size="lg"
              className="glow-amber"
            >
              Start Your Application
            </Button>
          </div>
        </div>
      </section>

      {/* -- Enrollment Info ------------------------------------------------ */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 text-center">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sandstone">
                Enrollment Period
              </p>
              <p className="mt-2 font-heading text-xl font-bold text-parchment">
                {enrollmentConfig.registrationPeriod}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sandstone">
                Next Class Date
              </p>
              <p className="mt-2 font-heading text-xl font-bold text-pink-500">
                {enrollmentConfig.nextClassDate}
              </p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sandstone">
                Application Fee
              </p>
              <p className="mt-2 font-heading text-xl font-bold text-parchment">
                Free
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* -- Requirements Summary ------------------------------------------- */}
      <Section
        bg="light"
        overline="At a Glance"
        title="Admission Requirements"
        subtitle="Key requirements for each program level. See the full admissions page for complete details."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {requirementSummary.map((group) => (
            <Card key={group.program} className="p-6">
              <h3 className="font-heading text-lg font-bold text-parchment">
                {group.program}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item, i) => (
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
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/admissions"
                className="mt-3 inline-flex items-center min-h-[44px] gap-1 text-sm font-semibold text-pink-500 hover:text-pink-400 transition-colors"
              >
                View all requirements
                <svg
                  className="h-3.5 w-3.5"
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
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* -- Enrollment Steps (dark + glassmorphism) ------------------------ */}
      <Section
        bg="dark"
        grain
        overline="The Process"
        title="How to Enroll"
        subtitle="From application to first day of class, here is what to expect."
      >
        <div className="mx-auto max-w-3xl space-y-8">
          {enrollmentSteps.map((s) => (
            <div key={s.step} className="flex items-start gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-plum-900">
                {s.step}
              </span>
              <div>
                <h3 className="font-body text-base font-semibold text-parchment">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-sandstone/60">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            as="a"
            href="#application"
            variant="primary"
            size="lg"
            className="glow-amber"
          >
            Start Your Application
          </Button>
        </div>
      </Section>

      {/* -- Application Form ----------------------------------------------- */}
      <Section
        id="application"
        overline="Apply Online"
        title="Start Your Application"
        subtitle="Complete the form below to begin your enrollment. No application fee — your information is transmitted securely."
      >
        <div className="mx-auto max-w-3xl">
          <Card className="p-6 md:p-10">
            <ApplicationForm />
          </Card>
        </div>
      </Section>

      {/* -- Notice to Prospective Students --------------------------------- */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Card className="border-l-4 border-amber-500 p-6 md:p-8">
            <h3 className="font-heading text-lg font-bold text-parchment">
              Notice to Prospective Students
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sandstone">
              As a prospective student, you are encouraged to review the{" "}
              <a href="/documents/idi-catalog.pdf" className="text-pink-500 hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer">
                School Catalog
              </a>{" "}
              and{" "}
              <a href="/documents/school-performance-fact-sheet.pdf" className="text-pink-500 hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer">
                School Performance Fact Sheet
              </a>{" "}
              prior to signing an enrollment agreement.
            </p>
          </Card>
        </div>
      </Section>

      {/* -- FAQs ----------------------------------------------------------- */}
      <Section
        bg="light"
        overline="Common Questions"
        title="Application FAQs"
      >
        <FAQAccordion faqs={faqs} />
      </Section>

      {/* -- Contact for Questions ------------------------------------------ */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl">
            Have Questions?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sandstone">
            Our admissions team is here to help. Reach out anytime.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 text-sandstone">
            <p>
              <span className="font-semibold text-parchment">Phone:</span>{" "}
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                {PHONE}
              </a>
            </p>
            <p>
              <span className="font-semibold text-parchment">Email:</span>{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                {EMAIL}
              </a>
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/admissions/tuition">
              <Button as="span" variant="secondary" size="md" className="border-white/20 text-parchment hover:bg-white/10">
                View Tuition
              </Button>
            </Link>
            <Link href="/admissions/financial-aid">
              <Button as="span" variant="secondary" size="md" className="border-white/20 text-parchment hover:bg-white/10">
                Financial Aid
              </Button>
            </Link>
          </div>

          {/* Pre-enrollment document links */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-sandstone/70">
              Pre-Enrollment Documents
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a href="/documents/idi-catalog.pdf" className="text-pink-500 hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer">
                School Catalog
              </a>
              <a href="/documents/school-performance-fact-sheet.pdf" className="text-pink-500 hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer">
                Performance Fact Sheet
              </a>
              <Link href="/disclosures#strf" className="text-pink-500 hover:text-pink-400 transition-colors">
                STRF Disclosure
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
