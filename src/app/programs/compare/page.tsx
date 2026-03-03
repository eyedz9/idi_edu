/** Side-by-side comparison table of all programs with responsive desktop table and mobile card layout. */
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
import { formatCurrency } from "@/lib/utils";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Compare Programs",
  description: `Compare all interior design programs at ${SITE_NAME}. See degree types, duration, tuition, and career outcomes side by side.`,
  alternates: { canonical: "/programs/compare" },
};

/* ────────────────────────────────────────────────────────────────────────── */
/*  Comparison data rows                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

interface ComparisonRow {
  label: string;
  getValue: (slug: string) => string;
}

const rows: ComparisonRow[] = [
  {
    label: "Degree Type",
    getValue: (slug) => {
      const p = programs.find((pr) => pr.slug === slug);
      return p?.degreeType ?? "";
    },
  },
  {
    label: "Duration",
    getValue: (slug) => {
      const p = programs.find((pr) => pr.slug === slug);
      return p?.duration ?? "";
    },
  },
  {
    label: "Total Units",
    getValue: (slug) => {
      const p = programs.find((pr) => pr.slug === slug);
      return p?.creditUnits.split(" (")[0] ?? "";
    },
  },
  {
    label: "Courses",
    getValue: (slug) => {
      const courseCounts: Record<string, string> = {
        certificate: "2 courses (Lectures & Studio Workshop)",
        "associate-of-arts": "20 courses",
        "bachelor-of-arts": "9 courses",
        "master-interior-architecture": "9 courses",
      };
      return courseCounts[slug] ?? "";
    },
  },
  {
    label: "Tuition",
    getValue: (slug) => {
      const t = getTuitionByProgram(slug);
      return t ? formatCurrency(t.tuition) : "";
    },
  },
  {
    label: "Total Estimated Cost",
    getValue: (slug) => {
      const t = getTuitionByProgram(slug);
      return t ? formatCurrency(t.totalEstimatedCost) : "";
    },
  },
  {
    label: "Accreditation",
    getValue: (slug) => {
      const p = programs.find((pr) => pr.slug === slug);
      if (!p) return "";
      const parts: string[] = [];
      if (p.accreditor) parts.push(p.accreditor);
      if (p.cidaAccredited) parts.push("CIDA");
      return parts.length > 0 ? parts.join(", ") : "N/A";
    },
  },
  {
    label: "Career Focus",
    getValue: (slug) => {
      const p = programs.find((pr) => pr.slug === slug);
      if (!p) return "";
      if (p.careerOutcomes.length === 0) return "Personal enrichment";
      return p.careerOutcomes.slice(0, 3).join(", ");
    },
  },
  {
    label: "Online Option",
    getValue: (slug) => {
      if (slug === "certificate") return "In-Person & Online";
      return "Hybrid*";
    },
  },
];

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

export default function CompareProgramsPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="Modern interior design with elegant furnishings"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/85 to-plum-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-plum-900/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Programs", href: "/programs" }, { label: "Compare Programs" }]} />
          <p className="mb-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Compare
          </p>
          <h1 className="font-heading text-4xl font-bold text-parchment md:text-5xl lg:text-6xl">
            Compare <span className="text-gradient-pink">Programs</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-sandstone">
            See all four programs side by side to find the right fit for your
            goals, timeline, and budget.
          </p>
        </div>
      </section>

      {/* ── Desktop Table ───────────────────────────────────────────────── */}
      <Section>
        <AnimatedSection>
          {/* Desktop/tablet: horizontal scroll table */}
          <div className="hidden md:block">
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="border-b border-warm-200 bg-plum-900">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-sandstone">
                      Feature
                    </th>
                    {programs.map((p) => (
                      <th key={p.slug} className="px-6 py-4">
                        <Link
                          href={`/programs/${p.slug}`}
                          className="group inline-block"
                        >
                          <Badge variant="accent" className="mb-2">
                            {p.degreeType}
                          </Badge>
                          <p className="font-heading text-sm font-bold text-parchment transition-colors group-hover:text-pink-400">
                            {p.shortName}
                          </p>
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-plum-800" : "bg-plum-900"}
                    >
                      <td className="px-6 py-3 font-medium text-parchment">
                        {row.label}
                      </td>
                      {programs.map((p) => (
                        <td
                          key={p.slug}
                          className="px-6 py-3 text-sandstone"
                        >
                          {row.getValue(p.slug)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-white/10 bg-plum-900">
                    <td className="px-6 py-4" />
                    {programs.map((p) => (
                      <td key={p.slug} className="px-6 py-4">
                        <Link href={`/programs/${p.slug}`}>
                          <Button as="span" variant="primary" size="sm" className="min-h-[44px]">
                            Learn More
                          </Button>
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Footnote */}
          <p className="mt-4 text-xs text-sandstone/60 italic">
            *Some classes offered live streaming online; program cannot be completed entirely online.
          </p>

          {/* Mobile: stacked cards */}
          <div className="grid gap-6 md:hidden">
            {programs.map((p) => {
              const tuition = getTuitionByProgram(p.slug);
              return (
                <Card key={p.slug} className="overflow-hidden">
                  {/* Card header */}
                  <div className="border-b border-plum-700 bg-plum-900 px-5 py-4">
                    <Badge variant="accent" className="mb-1">
                      {p.degreeType}
                    </Badge>
                    <h3 className="font-heading text-lg font-bold text-parchment">
                      {p.shortName}
                    </h3>
                  </div>

                  {/* Data rows */}
                  <dl className="divide-y divide-white/10">
                    <MobileRow label="Duration" value={p.duration} />
                    <MobileRow
                      label="Units"
                      value={p.creditUnits.split(" (")[0]}
                    />
                    <MobileRow
                      label="Courses"
                      value={
                        {
                          certificate: "2 courses (Lectures & Studio Workshop)",
                          "associate-of-arts": "20 courses",
                          "bachelor-of-arts": "9 courses",
                          "master-interior-architecture": "9 courses",
                        }[p.slug] ?? ""
                      }
                    />
                    <MobileRow
                      label="Tuition"
                      value={
                        tuition
                          ? formatCurrency(tuition.tuition)
                          : formatCurrency(p.tuition)
                      }
                    />
                    <MobileRow
                      label="Total Est. Cost"
                      value={
                        tuition
                          ? formatCurrency(tuition.totalEstimatedCost)
                          : formatCurrency(p.totalEstimatedCost)
                      }
                    />
                    <MobileRow
                      label="Accreditation"
                      value={
                        [
                          p.accreditor,
                          p.cidaAccredited ? "CIDA" : null,
                        ]
                          .filter(Boolean)
                          .join(", ") || "N/A"
                      }
                    />
                    <MobileRow
                      label="Career Focus"
                      value={
                        p.careerOutcomes.length > 0
                          ? p.careerOutcomes.slice(0, 3).join(", ")
                          : "Personal enrichment"
                      }
                    />
                    <MobileRow
                      label="Online Option"
                      value={p.slug === "certificate" ? "In-Person & Online" : "Hybrid*"}
                    />
                  </dl>

                  {/* CTA */}
                  <div className="px-5 py-4">
                    <Link href={`/programs/${p.slug}`}>
                      <Button
                        as="span"
                        variant="primary"
                        size="sm"
                        className="w-full min-h-[44px]"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <Section bg="mesh" grain>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl">
            Ready to get <span className="text-gradient-pink">started</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sandstone">
            Our admissions team can help you choose the right program and walk
            you through the enrollment process.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/admissions/apply">
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Apply Now
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                as="span"
                variant="ghost"
                size="lg"
                className="text-parchment decoration-parchment/60 hover:decoration-parchment"
              >
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Local sub-components                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

function MobileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 px-5 py-3">
      <dt className="text-xs font-semibold uppercase tracking-wider text-sandstone/60">
        {label}
      </dt>
      <dd className="text-right text-sm text-parchment">{value}</dd>
    </div>
  );
}
