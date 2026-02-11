import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programs, getProgramBySlug, getTuitionByProgram } from "@/data";
import { SITE_NAME } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, ProgramCard } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Static Params                                                            */
/* ────────────────────────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Dynamic Metadata                                                         */
/* ────────────────────────────────────────────────────────────────────────── */

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};

  return {
    title: program.name,
    description: `${program.description.split(". ").slice(0, 2).join(". ")}. Learn more about the ${program.shortName} at ${SITE_NAME}.`,
  };
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Helpers                                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page Component                                                           */
/* ────────────────────────────────────────────────────────────────────────── */

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const tuition = getTuitionByProgram(slug);
  const relatedPrograms = programs.filter((p) => p.slug !== slug);

  return (
    <>
      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <div className="border-b border-warm-200 bg-warm-100">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            <Link
              href="/programs"
              className="text-neutral-400 transition-colors hover:text-pink-500"
            >
              Programs
            </Link>
            <span className="text-neutral-300" aria-hidden="true">
              &rsaquo;
            </span>
            <span className="font-medium text-plum-900">
              {program.shortName}
            </span>
          </nav>
        </div>
      </div>

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-aurora grain py-20 md:py-28">
        {/* Unsplash background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
            alt="Interior design workspace with creative tools"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/85 to-plum-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-plum-900/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">
            {program.degreeType}
          </Badge>
          <h1 className="font-heading text-4xl font-bold text-parchment md:text-5xl lg:text-6xl">
            <span className="text-gradient-pink">{program.shortName}</span>
          </h1>

          {/* Key stats */}
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            <StatBox label="Duration" value={program.duration} />
            <StatBox label="Units" value={program.creditUnits.split(" (")[0]} />
            <StatBox
              label="Tuition"
              value={formatCurrency(program.tuition)}
            />
            {program.isAccredited && (
              <StatBox
                label="Accreditation"
                value={
                  program.cidaAccredited
                    ? `${program.accreditor} + CIDA`
                    : program.accreditor ?? "Accredited"
                }
              />
            )}
          </div>
        </div>
      </section>

      {/* ── 2. Overview ─────────────────────────────────────────────────── */}
      <Section
        overline="Overview"
        title={`About the ${program.shortName}`}
        centered={false}
      >
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-neutral-600">
                {program.description}
              </p>

              {program.schedule && (
                <div className="mt-6 rounded-lg border border-warm-200 bg-warm-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-pink-500">
                    Schedule
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    {program.schedule}
                  </p>
                </div>
              )}

              {program.admissionRequirements && (
                <div className="mt-4 rounded-lg border border-warm-200 bg-warm-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-pink-500">
                    Admission Requirements
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    {program.admissionRequirements}
                  </p>
                </div>
              )}

              {program.requiresGE && (
                <div className="mt-4 rounded-lg border border-warm-200 bg-warm-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-pink-500">
                    General Education Requirement
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    {program.requiresGE}
                  </p>
                </div>
              )}
            </div>

            {/* Quick-facts sidebar */}
            <div>
              <Card className="p-6">
                <h3 className="font-heading text-lg font-bold text-plum-900">
                  Quick Facts
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <QuickFact label="Degree" value={program.degreeType} />
                  <QuickFact label="Duration" value={program.duration} />
                  <QuickFact label="Credit Units" value={program.creditUnits} />
                  {program.onlineAvailable && (
                    <QuickFact label="Online Option" value="Available" />
                  )}
                  {program.partTimeOnly && (
                    <QuickFact label="Enrollment" value="Part-time only" />
                  )}
                  {program.minimumGPA && (
                    <QuickFact
                      label="Minimum GPA"
                      value={program.minimumGPA.toFixed(1)}
                    />
                  )}
                  {program.cidaAccredited && (
                    <QuickFact label="CIDA Accredited" value="Yes" />
                  )}
                </dl>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── 3. Curriculum ───────────────────────────────────────────────── */}
      <Section
        bg="light"
        overline="Curriculum"
        title={
          program.isAvocational
            ? "Lectures & Studios"
            : "Course Catalog"
        }
        subtitle={
          program.isAvocational
            ? "The Certificate Course includes both lecture sessions and hands-on studio workshops."
            : `${program.courses.length} courses covering the full breadth of ${program.degreeType === "Master's Degree" ? "interior architecture" : "interior design"}.`
        }
      >
        <AnimatedSection stagger={0.06}>
          {/* Certificate: lectures + studios */}
          {program.isAvocational && (
            <div className="grid gap-8 md:grid-cols-2">
              {/* Lectures */}
              <div>
                <h3 className="mb-4 font-heading text-xl font-bold text-plum-900">
                  Lectures
                </h3>
                <ul className="space-y-2">
                  {program.lectures?.map((lecture, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-lg border border-warm-200 bg-warm-50 p-3"
                    >
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pink-500/15 text-xs font-semibold text-pink-500">
                        {i + 1}
                      </span>
                      <span className="text-sm text-neutral-700">
                        {lecture.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Studios */}
              <div>
                <h3 className="mb-4 font-heading text-xl font-bold text-plum-900">
                  Studios
                </h3>
                <ul className="space-y-2">
                  {program.studios?.map((studio, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-lg border border-warm-200 bg-warm-50 p-3"
                    >
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-plum-900/10 text-xs font-semibold text-plum-900">
                        {i + 1}
                      </span>
                      <span className="text-sm text-neutral-700">
                        {studio.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Degree programs: courses */}
          {!program.isAvocational && (
            <div className="grid gap-4 md:grid-cols-2">
              {program.courses.map((course) => (
                <Card key={course.code} className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-pink-500">
                        IDI {course.code}
                      </p>
                      <h4 className="mt-1 font-heading text-base font-bold text-plum-900">
                        {course.name}
                      </h4>
                    </div>
                    <Badge variant="outline">{course.units} units</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {course.description}
                  </p>
                </Card>
              ))}
            </div>
          )}
        </AnimatedSection>
      </Section>

      {/* ── 4. Tuition ──────────────────────────────────────────────────── */}
      {tuition && (
        <Section
          overline="Tuition & Fees"
          title="Cost Breakdown"
          subtitle="All charges are clearly outlined below. Financial aid may be available for qualifying students."
        >
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Cost table */}
              <Card className="overflow-hidden">
                <div className="border-b border-warm-200 bg-plum-900 px-6 py-4">
                  <h3 className="font-heading text-lg font-bold text-parchment">
                    Total Charges
                  </h3>
                </div>
                <div className="divide-y divide-warm-200">
                  <TuitionRow label="Tuition" amount={tuition.tuition} />
                  <TuitionRow
                    label="Registration Fee"
                    amount={tuition.registrationFee}
                  />
                  {tuition.supplyCost > 0 && (
                    <TuitionRow
                      label="Supply Cost"
                      amount={tuition.supplyCost}
                    />
                  )}
                  {tuition.stlmFee > 0 && (
                    <TuitionRow
                      label="STLM Fee"
                      amount={tuition.stlmFee}
                    />
                  )}
                  <TuitionRow
                    label="Total Charges"
                    amount={tuition.totalCharges}
                    bold
                  />
                  <TuitionRow
                    label="Total Estimated Cost"
                    amount={tuition.totalEstimatedCost}
                    bold
                    accent
                  />
                </div>
              </Card>

              {/* Payment schedule + options */}
              <div className="space-y-6">
                {/* Payment schedule */}
                {tuition.paymentSchedule.length > 0 && (
                  <Card className="overflow-hidden">
                    <div className="border-b border-warm-200 bg-warm-100 px-6 py-4">
                      <h3 className="font-heading text-base font-bold text-plum-900">
                        Payment Schedule
                      </h3>
                    </div>
                    <div className="divide-y divide-warm-200">
                      {tuition.paymentSchedule.map((row, i) => (
                        <div
                          key={i}
                          className="flex flex-wrap items-center justify-between gap-2 px-6 py-3"
                        >
                          <div>
                            <p className="text-sm font-medium text-plum-900">
                              {row.enrollment}
                            </p>
                            <p className="text-xs text-neutral-400">
                              {row.unitsPerTerm} units/term &middot;{" "}
                              {row.termsToComplete}
                            </p>
                          </div>
                          <p className="font-body text-sm font-semibold text-plum-900">
                            {formatCurrency(row.tuitionPerTerm)}/term
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Payment options */}
                {tuition.paymentOptions.length > 0 && (
                  <Card className="overflow-hidden">
                    <div className="border-b border-warm-200 bg-warm-100 px-6 py-4">
                      <h3 className="font-heading text-base font-bold text-plum-900">
                        Payment Options
                      </h3>
                    </div>
                    <div className="divide-y divide-warm-200">
                      {tuition.paymentOptions.map((option, i) => (
                        <div key={i} className="px-6 py-4">
                          <p className="text-sm font-semibold text-plum-900">
                            {option.type}
                          </p>
                          <p className="mt-1 text-sm text-neutral-500">
                            {option.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Notes */}
                {tuition.notes.length > 0 && (
                  <div className="rounded-lg border border-warm-200 bg-warm-100 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Important Notes
                    </p>
                    <ul className="space-y-1">
                      {tuition.notes.map((note, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-neutral-500"
                        >
                          <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink-500/50" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </Section>
      )}

      {/* ── 5. Career Outcomes ──────────────────────────────────────────── */}
      <Section
        bg="light"
        overline="Career Paths"
        title="Where This Degree Takes You"
      >
        <AnimatedSection>
          {program.careerOutcomes.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {program.careerOutcomes.map((career) => (
                <div
                  key={career}
                  className="flex items-center gap-3 rounded-lg border border-warm-200 bg-warm-50 p-4"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-pink-500/15">
                    <svg
                      className="h-4 w-4 text-pink-500"
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
                  </span>
                  <span className="text-sm font-medium text-plum-900">
                    {career}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            program.careerNote && (
              <div className="mx-auto max-w-2xl rounded-lg border border-warm-200 bg-warm-50 p-6 text-center">
                <p className="text-sm leading-relaxed text-neutral-600">
                  {program.careerNote}
                </p>
              </div>
            )
          )}
        </AnimatedSection>
      </Section>

      {/* ── 6. CTA ──────────────────────────────────────────────────────── */}
      <Section bg="mesh" grain>
        <div className="relative text-center">
          <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl lg:text-4xl">
            Apply to the <span className="text-gradient-pink">{program.shortName}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sandstone">
            Take the next step toward your interior design career. Our
            admissions team is ready to guide you through the process.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/admissions/apply">
              <Button as="button" variant="primary" size="lg" className="glow-amber">
                Start Your Application
              </Button>
            </Link>
            <Link href="/programs/compare">
              <Button as="button" variant="ghost" size="lg" className="text-parchment decoration-parchment/60 hover:decoration-parchment">
                Compare Programs
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* ── 7. Related Programs ─────────────────────────────────────────── */}
      <Section
        overline="Explore More"
        title="Other Programs"
        subtitle="Continue exploring our full range of interior design programs."
      >
        <AnimatedSection stagger={0.1}>
          <div className="grid gap-8 md:grid-cols-3">
            {relatedPrograms.map((rp) => (
              <ProgramCard key={rp.slug} program={rp} />
            ))}
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Local sub-components (server-only, no "use client" needed)               */
/* ────────────────────────────────────────────────────────────────────────── */

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-pink-500">
        {label}
      </p>
      <p className="mt-1 font-body text-base font-semibold text-parchment">
        {value}
      </p>
    </div>
  );
}

function QuickFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <dt className="text-neutral-400">{label}</dt>
      <dd className="text-right font-medium text-plum-900">{value}</dd>
    </div>
  );
}

function TuitionRow({
  label,
  amount,
  bold = false,
  accent = false,
}: {
  label: string;
  amount: number;
  bold?: boolean;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-6 py-3 ${
        bold ? "bg-warm-100" : ""
      }`}
    >
      <p
        className={`text-sm ${
          bold
            ? "font-semibold text-plum-900"
            : "text-neutral-600"
        }`}
      >
        {label}
      </p>
      <p
        className={`font-body text-sm ${
          accent
            ? "font-bold text-pink-500"
            : bold
              ? "font-semibold text-plum-900"
              : "text-neutral-700"
        }`}
      >
        {formatCurrency(amount)}
      </p>
    </div>
  );
}
