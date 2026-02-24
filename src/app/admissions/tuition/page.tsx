import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { tuitionData, getCombinedBATuition } from "@/data";
import { APPLY_PATH } from "@/lib/constants";

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Tuition & Fees",
  description:
    "View tuition costs, fees, payment schedules, and payment options for all Interior Designers Institute programs. Certificate, Associate, Bachelor's, and Master's programs.",
  alternates: { canonical: "/admissions/tuition" },
};

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

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
        <li className="font-medium text-parchment">Tuition &amp; Fees</li>
      </ol>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function TuitionPage() {
  const combinedBA = getCombinedBATuition();

  return (
    <>
      {/* -- Hero ----------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-plum grain py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs />
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl">
            <span className="text-gradient-pink">Tuition</span> &amp; Fees
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            Transparent pricing for every program. Review tuition breakdowns,
            payment schedules, and options to help plan your education investment.
          </p>
        </div>
      </section>

      {/* -- Program-by-program Tuition ------------------------------------- */}
      {tuitionData.map((program, idx) => (
        <Section
          key={program.programSlug}
          bg={idx % 2 === 0 ? "default" : "light"}
          title={program.programName}
        >
          {/* Cost breakdown table */}
          <div className="relative mb-10">
            <div className="overflow-x-auto [&::-webkit-scrollbar]{display:none} [-webkit-overflow-scrolling:touch]">
            <table className="w-full min-w-[360px] text-left text-sm">
              <thead>
                <tr className="border-b-2 border-white/10">
                  <th className="py-3 pr-4 font-semibold text-parchment">
                    Fee
                  </th>
                  <th className="py-3 text-right font-semibold text-parchment">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="py-3 pr-4 text-sandstone">Tuition</td>
                  <td className="py-3 text-right font-medium text-parchment">
                    {fmt.format(program.tuition)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-sandstone">
                    Registration Fee
                  </td>
                  <td className="py-3 text-right font-medium text-parchment">
                    {fmt.format(program.registrationFee)}
                  </td>
                </tr>
                {program.stlmFee > 0 && (
                  <tr>
                    <td className="py-3 pr-4 text-sandstone">
                      STLM/STRF Fee
                    </td>
                    <td className="py-3 text-right font-medium text-parchment">
                      {fmt.format(program.stlmFee)}
                    </td>
                  </tr>
                )}
                {program.supplyCost > 0 && (
                  <tr>
                    <td className="py-3 pr-4 text-sandstone">
                      Supplies / Materials
                    </td>
                    <td className="py-3 text-right font-medium text-parchment">
                      {fmt.format(program.supplyCost)}
                    </td>
                  </tr>
                )}
                <tr className="border-t-2 border-white/10">
                  <td className="py-3 pr-4 font-semibold text-parchment">
                    Total Charges
                  </td>
                  <td className="py-3 text-right font-bold text-parchment">
                    {fmt.format(program.totalCharges)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-parchment">
                    Total Estimated Cost
                  </td>
                  <td className="py-3 text-right font-bold text-pink-500">
                    {fmt.format(program.totalEstimatedCost)}
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

          {/* Combined BA note */}
          {program.programSlug === "bachelor-of-arts" && (
            <Card className="mb-10 border-l-4 border-amber-500 p-4 md:p-6">
              <p className="text-sm leading-relaxed text-sandstone">
                <strong className="text-parchment">Note:</strong> The Bachelor
                of Arts tuition of {fmt.format(program.tuition)} is in addition
                to the Associate of Arts degree tuition. Combined AA + BA total
                tuition: <strong>{fmt.format(combinedBA)}</strong>.
              </p>
            </Card>
          )}

          {/* Payment schedule */}
          {program.paymentSchedule.length > 0 && (
            <>
              <h3 className="mb-4 font-heading text-xl font-bold text-parchment">
                Payment Schedule
              </h3>
              <div className="relative mb-10">
                <div className="overflow-x-auto [&::-webkit-scrollbar]{display:none} [-webkit-overflow-scrolling:touch]">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-white/10">
                      <th className="py-3 pr-4 font-semibold text-parchment">
                        Enrollment Status
                      </th>
                      <th className="py-3 pr-4 font-semibold text-parchment">
                        Units / Term
                      </th>
                      <th className="py-3 pr-4 font-semibold text-parchment">
                        Tuition / Term
                      </th>
                      <th className="py-3 font-semibold text-parchment">
                        Time to Complete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {program.paymentSchedule.map((row) => (
                      <tr key={row.enrollment}>
                        <td className="py-3 pr-4 font-medium text-parchment">
                          {row.enrollment}
                        </td>
                        <td className="py-3 pr-4 text-sandstone">
                          {row.unitsPerTerm}
                        </td>
                        <td className="py-3 pr-4 text-sandstone">
                          {fmt.format(row.tuitionPerTerm)}
                        </td>
                        <td className="py-3 text-sandstone">
                          {row.termsToComplete}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
            </>
          )}

          {/* Payment options */}
          {program.paymentOptions.length > 0 && (
            <>
              <h3 className="mb-4 font-heading text-xl font-bold text-parchment">
                Payment Options
              </h3>
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                {program.paymentOptions.map((opt) => (
                  <Card key={opt.type} className="p-5">
                    <h4 className="font-body text-sm font-semibold text-parchment">
                      {opt.type}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-sandstone">
                      {opt.description}
                    </p>
                    {opt.amount > 0 && (
                      <p className="mt-2 text-sm font-semibold text-pink-500">
                        {fmt.format(opt.amount)}
                        {opt.perPeriod && (
                          <span className="font-normal text-sandstone">
                            {" "}
                            {opt.perPeriod}
                          </span>
                        )}
                      </p>
                    )}
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Notes */}
          {program.notes.length > 0 && (
            <div className="rounded-lg bg-white/5 p-4 md:p-6">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-sandstone">
                Important Notes
              </h4>
              <ul className="space-y-1.5">
                {program.notes.map((note, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm leading-relaxed text-sandstone"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink-500" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Section>
      ))}

      {/* -- Financial Aid CTA (mesh-aurora + grain) ------------------------ */}
      <section className="relative overflow-hidden mesh-aurora grain py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl">
            Need Help <span className="text-gradient-pink">Paying</span> for School?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sandstone">
            Federal financial aid, including grants and loans, is available for
            students who qualify. Our Financial Aid office is here to help you
            explore your options.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/admissions/financial-aid">
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Explore Financial Aid
              </Button>
            </Link>
            <Link href={APPLY_PATH}>
              <Button
                as="span"
                variant="secondary"
                size="lg"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* -- Disclosures ---------------------------------------------------- */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-heading text-2xl font-bold text-parchment">
            Important Disclosures
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-sandstone">
            <p>
              Tuition and fees are subject to change. The figures listed above
              reflect the current academic year and are provided for planning
              purposes. Please contact the Admissions office for the most
              up-to-date information.
            </p>
            <p>
              Total estimated cost includes books, supplies, and other expenses
              not included in total charges paid directly to the institution.
            </p>
            <p>
              Interior Designers Institute is accredited by the Accrediting
              Commission of Career Schools and Colleges (ACCSC). The Bachelor of
              Arts program is additionally accredited by the Council for Interior
              Design Accreditation (CIDA).
            </p>
          </div>

          {/* Cancellation & Refund Policy */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="mb-3 font-heading text-lg font-bold text-parchment">
              Cancellation &amp; Refund Policy
            </h3>
            <p className="text-sm leading-relaxed text-sandstone">
              Students have the right to cancel the enrollment agreement and
              obtain a refund of charges paid through attendance at the first
              class session, or the seventh day after enrollment, whichever is
              later. Students who withdraw after the cancellation period are
              entitled to a pro-rata refund of unearned tuition. Refunds are
              issued within 45 days of withdrawal. See the{" "}
              <a
                href="/documents/enrollment-agreement.pdf"
                className="text-pink-500 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enrollment Agreement
              </a>{" "}
              for complete refund policy details.
            </p>
          </div>

          {/* STRF Note */}
          <div className="mt-6 border-t border-white/10 pt-6">
            <h3 className="mb-3 font-heading text-lg font-bold text-parchment">
              Student Tuition Recovery Fund (STRF)
            </h3>
            <p className="text-sm leading-relaxed text-sandstone">
              The STRF assessment is a state-mandated fee paid by California
              residents. For complete STRF information, see our{" "}
              <Link
                href="/disclosures#strf"
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                Disclosures page
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
