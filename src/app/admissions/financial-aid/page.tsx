import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { contactInfo } from "@/data";
import { PHONE, EMAIL } from "@/lib/constants";

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Financial Aid",
  description:
    "Explore financial aid options at Interior Designers Institute including federal grants, loans, and scholarships. Learn about FAFSA, grants, loans, and more.",
  alternates: { canonical: "/admissions/financial-aid" },
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
        <li className="font-medium text-parchment">Financial Aid</li>
      </ol>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Aid types data                                                            */
/* -------------------------------------------------------------------------- */

const aidTypes = [
  {
    title: "Federal Pell Grants",
    description:
      "Need-based grants from the federal government that do not need to be repaid. Award amounts vary based on financial need, cost of attendance, and enrollment status.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
  {
    title: "Federal Direct Subsidized Loans",
    description:
      "Need-based loans where the government pays the interest while you are enrolled at least half-time. Repayment begins after you leave school or drop below half-time enrollment.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    title: "Federal Direct Unsubsidized Loans",
    description:
      "Loans available regardless of financial need. Interest accrues while you are in school, but payments can be deferred until after graduation.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Federal Direct PLUS Loans",
    description:
      "Credit-based loans for graduate students or parents of dependent undergraduate students. Allows borrowing up to the total cost of attendance minus other financial aid received.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    title: "Institutional Scholarships",
    description:
      "IDI may offer merit-based or need-based scholarships to qualifying students. Contact the Financial Aid office for current availability and eligibility criteria.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: "Veterans Benefits",
    description:
      "IDI is approved for the training of veterans and eligible dependents. Contact us to learn how to use your GI Bill or other VA education benefits.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function FinancialAidPage() {
  return (
    <>
      {/* -- Hero ----------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-plum grain py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs />
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl">
            <span className="text-gradient-pink">Financial</span> Aid
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            IDI is committed to making your education accessible. We participate
            in federal financial aid programs and offer guidance to help you fund
            your studies.
          </p>
        </div>
      </section>

      {/* -- Overview ------------------------------------------------------- */}
      <Section
        overline="Funding Your Education"
        title="Financial Aid Overview"
        subtitle="Interior Designers Institute participates in Title IV federal student aid programs. Eligible students may receive grants, loans, and other assistance to help cover tuition and related expenses."
      >
        <div className="mx-auto max-w-3xl">
          <Card className="p-6 md:p-8">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-pink-500/10">
                <svg className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <p className="text-base leading-relaxed text-sandstone">
                  Financial aid is available for degree-seeking students enrolled
                  in the Associate of Arts, Bachelor of Arts, and Master of
                  Interior Architecture programs. The Certificate Course is not
                  eligible for federal financial aid as it is an avocational
                  program.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* -- Types of Aid (dark + glassmorphism) ---------------------------- */}
      <Section
        bg="dark"
        grain
        overline="Types of Aid"
        title="Available Financial Aid"
        subtitle="IDI students may be eligible for the following types of federal and institutional financial assistance."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aidTypes.map((aid) => (
            <Card key={aid.title} variant="glass" className="flex flex-col p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500">
                {aid.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-parchment">
                {aid.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-sandstone/60">
                {aid.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* -- FAFSA Information ---------------------------------------------- */}
      <Section
        overline="Getting Started"
        title="Apply for Financial Aid"
        subtitle="The first step to receiving federal financial aid is completing the Free Application for Federal Student Aid (FAFSA)."
      >
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Steps */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-plum-900">
                1
              </span>
              <div>
                <h3 className="font-body text-base font-semibold text-parchment">
                  Complete the FAFSA
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-sandstone">
                  Visit{" "}
                  <a
                    href="https://studentaid.gov/h/apply-for-aid/fafsa"
                    className="font-semibold text-pink-500 underline underline-offset-2 hover:text-pink-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    studentaid.gov
                  </a>{" "}
                  to fill out the FAFSA.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-plum-900">
                2
              </span>
              <div>
                <h3 className="font-body text-base font-semibold text-parchment">
                  Review Your Award Letter
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-sandstone">
                  Once your FAFSA is processed, IDI&apos;s Financial Aid office
                  will send you an award letter detailing the types and amounts
                  of aid you are eligible to receive.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-plum-900">
                3
              </span>
              <div>
                <h3 className="font-body text-base font-semibold text-parchment">
                  Accept Your Aid &amp; Enroll
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-sandstone">
                  Work with our Financial Aid office to accept your aid package,
                  complete any remaining requirements, and finalize your
                  enrollment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -- Net Price Calculator ------------------------------------------- */}
      <Section bg="light">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl">
            Net Price Calculator
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sandstone">
            Get an estimated cost of attendance based on your individual
            circumstances using our Net Price Calculator.
          </p>
          <div className="mt-8">
            <Button
              as="a"
              href="https://idi.edu/net-price-calculator"
              variant="secondary"
              size="lg"
              className="border-white/20 text-parchment hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Net Price Calculator
            </Button>
          </div>
        </div>
      </Section>

      {/* -- Documents & Disclosures ---------------------------------------- */}
      <Section
        overline="Resources"
        title="Financial Aid Documents"
        subtitle="Review important financial aid policies, disclosures, and consumer information."
      >
        <div className="mx-auto max-w-3xl">
          <Card className="divide-y divide-white/10">
            {[
              {
                label: "Financial Aid Policies & Procedures",
                href: "/disclosures",
              },
              {
                label: "Satisfactory Academic Progress (SAP) Policy",
                href: "/disclosures",
              },
              {
                label: "Return of Title IV Funds Policy",
                href: "/disclosures",
              },
              {
                label: "Student Consumer Information",
                href: "/disclosures",
              },
            ].map((doc) => (
              <Link
                key={doc.label}
                href={doc.href}
                className="flex items-center justify-between p-4 transition-colors hover:bg-white/5 group"
              >
                <span className="text-sm font-medium text-parchment group-hover:text-pink-500 transition-colors">
                  {doc.label}
                </span>
                <svg
                  className="h-4 w-4 text-sandstone/60 group-hover:text-pink-500 transition-colors"
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
            ))}
          </Card>
        </div>
      </Section>

      {/* -- Contact Financial Aid (mesh-aurora + grain) -------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-16 md:py-24" aria-label="Contact financial aid">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="accent">We&apos;re Here to Help</Badge>
          <h2 className="mt-6 font-heading text-3xl font-bold text-parchment md:text-4xl">
            Contact the <span className="text-gradient-pink">Financial Aid</span> Office
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-sandstone">
            Have questions about financial aid? Our team is ready to help you
            navigate the process and find the best options for your situation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 text-sandstone">
            <p>
              <span className="font-semibold text-parchment">Phone:</span>{" "}
              <a href={`tel:${contactInfo.phone.replace(/\D/g, "")}`} className="hover:text-pink-400 transition-colors">
                {PHONE}
              </a>
            </p>
            <p>
              <span className="font-semibold text-parchment">Email:</span>{" "}
              <a href="mailto:financialaid@idi.edu" className="hover:text-pink-400 transition-colors">
                financialaid@idi.edu
              </a>
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/admissions/apply">
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Apply Now
              </Button>
            </Link>
            <Link href="/admissions/tuition">
              <Button
                as="span"
                variant="secondary"
                size="lg"
              >
                View Tuition
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
