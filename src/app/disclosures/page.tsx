import type { Metadata } from "next";
import Link from "next/link";
import {
  getDisclosuresByCategory,
  disclosureCategoryOrder,
} from "@/data/disclosures";
import { SITE_NAME } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animations";

export const metadata: Metadata = {
  title: "Documents & Disclosures",
  description: `Access institutional documents, accreditation disclosures, financial aid information, and student outcome reports from ${SITE_NAME}.`,
  alternates: { canonical: "/disclosures" },
};

/** Map category names to descriptive summaries */
const categoryDescriptions: Record<string, string> = {
  Institutional:
    "Core institutional documents including the school catalog, student handbook, and enrollment agreement.",
  ACCSC:
    "Documents related to our accreditation by the Accrediting Commission of Career Schools and Colleges.",
  BPPE: "Documents required by the California Bureau for Private Postsecondary Education.",
  "Financial Aid":
    "Financial aid policies, consumer information, and net price calculators.",
  "Student Outcomes":
    "Gainful employment disclosures and student outcome data for each program.",
  "Program-Specific":
    "CIDA accreditation documentation and detailed program outlines for each degree.",
};

export default function DisclosuresPage() {
  const grouped = getDisclosuresByCategory();

  return (
    <>
      {/* -- Breadcrumb ---------------------------------------------------- */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-sandstone/60">
          <li>
            <Link href="/" className="hover:text-pink-500 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-sandstone/40">&rsaquo;</li>
          <li className="text-parchment font-medium">Disclosures</li>
        </ol>
      </nav>

      {/* -- Hero ---------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-plum grain py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Transparency
          </p>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            Documents &amp; <span className="text-gradient-pink">Disclosures</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            Interior Designers Institute is committed to institutional
            transparency. The following documents are provided in accordance with
            federal, state, and accreditation requirements.
          </p>
        </div>
      </section>

      {/* -- Introduction -------------------------------------------------- */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-sandstone">
            As an accredited institution, IDI makes the following documents
            available to prospective students, current students, and the public.
            These documents include institutional policies, accreditation
            information, financial aid disclosures, student outcome reports, and
            program-specific details. All documents are provided as PDF files.
          </p>
        </div>
      </Section>

      {/* -- Documents by Category ----------------------------------------- */}
      {disclosureCategoryOrder.map((category) => {
        const docs = grouped[category];
        if (!docs || docs.length === 0) return null;

        return (
          <Section
            key={category}
            bg={
              disclosureCategoryOrder.indexOf(category) % 2 === 1
                ? "light"
                : "default"
            }
            id={category.toLowerCase().replace(/\s+/g, "-")}
          >
            <AnimatedSection>
              <div className="mx-auto max-w-4xl">
                <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl">
                  {category === "ACCSC"
                    ? "ACCSC Documents"
                    : category === "BPPE"
                      ? "BPPE Documents"
                      : `${category} Documents`}
                </h2>
                {categoryDescriptions[category] && (
                  <p className="mt-3 text-base text-sandstone">
                    {categoryDescriptions[category]}
                  </p>
                )}

                <div className="mt-8 space-y-4">
                  {docs.map((doc) => (
                    <a
                      key={doc.path}
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-5 transition-all hover:border-amber-500/30 hover:shadow-[0_0_10px_rgba(176,108,255,0.06)]"
                    >
                      {/* PDF icon */}
                      <svg
                        className="mt-0.5 h-7 w-7 flex-shrink-0 text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>

                      <div className="flex-1">
                        <p className="font-body text-base font-semibold text-parchment group-hover:text-pink-500 transition-colors">
                          {doc.name}
                        </p>
                        {doc.description && (
                          <p className="mt-1 text-sm leading-relaxed text-sandstone">
                            {doc.description}
                          </p>
                        )}
                      </div>

                      {/* Download indicator */}
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-sandstone/40 transition-colors group-hover:text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Section>
        );
      })}

      {/* -- STRF Disclosure ------------------------------------------------ */}
      <Section
        id="strf"
        bg={disclosureCategoryOrder.length % 2 === 1 ? "light" : "default"}
      >
        <AnimatedSection>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl">
              Student Tuition Recovery Fund (STRF)
            </h2>
            <p className="mt-3 text-base text-sandstone">
              The following disclosure is required by California Education Code
              Section 76215 and must be provided verbatim.
            </p>
            <div className="mt-8 space-y-6 rounded-lg border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="space-y-4 text-sm leading-relaxed text-sandstone">
                <p>
                  The State of California established the Student Tuition
                  Recovery Fund (STRF) to relieve or mitigate economic loss
                  suffered by a student in an educational program at a qualifying
                  institution, who is or was a California resident while
                  enrolled, or was enrolled in a residency program, if the
                  student enrolled in the institution, prepaid tuition, and
                  suffered an economic loss. Unless relieved of the obligation to
                  do so, you must pay the state-imposed assessment for the STRF,
                  or it must be paid on your behalf, if you are a student in an
                  educational program, who is a California resident, or are
                  enrolled in a residency program, and prepay all or part of your
                  tuition.
                </p>
                <p>
                  You are not eligible for protection from the STRF and you are
                  not required to pay the STRF assessment, if you are not a
                  California resident, or are not enrolled in a residency
                  program.
                </p>
              </div>
              <hr className="border-white/10" />
              <div className="space-y-4 text-sm leading-relaxed text-sandstone">
                <p>
                  It is important that you keep copies of your enrollment
                  agreement, financial aid documents, receipts, or any other
                  information that documents the amount paid to the institution.
                  Questions regarding the STRF may be directed to the Bureau for
                  Private Postsecondary Education, 1747 N. Market Blvd., Suite
                  225, Sacramento, CA 95834, (916) 431-6959 or (888) 370-7589.
                </p>
                <p>
                  To be eligible for STRF, you must be a California resident or
                  enrolled in a residency program, prepaid tuition, paid or
                  deemed to have paid the STRF assessment, and suffered an
                  economic loss as a result of any of the following:
                </p>
                <ol className="list-decimal space-y-2 pl-6">
                  <li>
                    The institution, a location of the institution, or an
                    educational program offered by the institution was closed or
                    discontinued, and you did not choose to participate in a
                    teach-out plan approved by the Bureau or did not complete a
                    chosen teach-out plan approved by the Bureau.
                  </li>
                  <li>
                    You were enrolled at an institution or a location of the
                    institution within the 120 day period before the closure of
                    the institution or location of the institution, or were
                    enrolled in an educational program within the 120 day period
                    before the program was discontinued.
                  </li>
                  <li>
                    You were enrolled at an institution or a location of the
                    institution more than 120 days before the closure of the
                    institution or location of the institution, in an educational
                    program offered by the institution as to which the Bureau
                    determined there was a significant decline in the quality or
                    value of the program more than 120 days before closure.
                  </li>
                  <li>
                    The institution has been ordered to pay a refund by the
                    Bureau but has failed to do so.
                  </li>
                  <li>
                    The institution has failed to pay or reimburse loan proceeds
                    under a federal student loan program as required by law, or
                    has failed to pay or reimburse proceeds received by the
                    institution in excess of tuition and other costs.
                  </li>
                  <li>
                    You have been awarded restitution, a refund, or other
                    monetary award by an arbitrator or court, based on a
                    violation of this chapter by an institution or representative
                    of an institution, but have been unable to collect the award
                    from the institution.
                  </li>
                  <li>
                    You sought legal counsel that resulted in the cancellation of
                    one or more of your student loans and have an invoice for
                    services rendered and evidence of the cancellation of the
                    student loan or loans.
                  </li>
                </ol>
                <p>
                  To qualify for STRF reimbursement, the application must be
                  received within four (4) years from the date of the action or
                  event that made the student eligible for recovery from STRF.
                </p>
                <p>
                  A student whose loan is revived by a loan holder or debt
                  collector after a period of noncollection may, at any time,
                  file a written application for recovery from STRF for the debt
                  that would have otherwise been eligible for recovery. If it has
                  been more than four (4) years since the action or event that
                  made the student eligible, the student must have filed a
                  written application for recovery within the original four (4)
                  year period, unless the period has been extended by another act
                  of law.
                </p>
                <p>
                  However, no claim can be paid to any student without a social
                  security number or a taxpayer identification number.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* -- BPPE Complaint Information -------------------------------------- */}
      <Section
        id="bppe-complaint"
        bg={(disclosureCategoryOrder.length + 1) % 2 === 1 ? "light" : "default"}
      >
        <AnimatedSection>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl">
              BPPE Complaint Information
            </h2>
            <p className="mt-3 text-base text-sandstone">
              A student or any member of the public may file a complaint about
              this institution with the Bureau for Private Postsecondary
              Education by calling the toll-free number or by completing a
              complaint form, which can be obtained on the bureau&apos;s Internet
              Web site.
            </p>
            <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6 md:p-8">
              <h3 className="font-heading text-lg font-semibold text-parchment">
                Bureau for Private Postsecondary Education
              </h3>
              <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-sandstone">
                <p>1747 N. Market Blvd., Suite 225</p>
                <p>Sacramento, CA 95834</p>
                <p className="pt-2">
                  Phone:{" "}
                  <a
                    href="tel:+19164316959"
                    className="text-pink-500 hover:text-pink-400 transition-colors"
                  >
                    (916) 431-6959
                  </a>
                </p>
                <p>
                  Toll-Free:{" "}
                  <a
                    href="tel:+18883707589"
                    className="text-pink-500 hover:text-pink-400 transition-colors"
                  >
                    (888) 370-7589
                  </a>
                </p>
                <p>Fax: (916) 263-1897</p>
                <p className="pt-2">
                  Website:{" "}
                  <a
                    href="https://www.bppe.ca.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-400 underline underline-offset-2 transition-colors"
                  >
                    www.bppe.ca.gov
                  </a>
                </p>
              </address>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Housing Disclosure ---------------------------------------------- */}
      <Section
        id="housing"
        bg={(disclosureCategoryOrder.length + 2) % 2 === 1 ? "light" : "default"}
      >
        <AnimatedSection>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl">
              Housing Disclosure
            </h2>
            <p className="mt-3 text-base text-sandstone">
              Required by California Code of Regulations Section
              71810(b)(13)(C).
            </p>
            <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6 md:p-8">
              <p className="text-sm leading-relaxed text-sandstone">
                Interior Designers Institute does not have dormitory facilities
                under its control and has no responsibility to find or assist a
                student in finding housing.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Cancellation & Refund Policy ----------------------------------- */}
      <Section
        id="refund-policy"
        bg={(disclosureCategoryOrder.length + 3) % 2 === 1 ? "light" : "default"}
      >
        <AnimatedSection>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl">
              Cancellation &amp; Refund Policy
            </h2>
            <p className="mt-3 text-base text-sandstone">
              The following is a summary of key cancellation and refund
              provisions as required by California Code of Regulations Section
              71810(b)(11). Please refer to the Enrollment Agreement for the
              complete policy.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                <h3 className="font-heading text-base font-semibold text-parchment">
                  Right to Cancel
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sandstone">
                  Students have the right to cancel the enrollment agreement and
                  obtain a refund of charges paid through attendance at the first
                  class session, or the seventh day after enrollment, whichever
                  is later.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                <h3 className="font-heading text-base font-semibold text-parchment">
                  Withdrawal After Cancellation Period
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sandstone">
                  Students who withdraw after the cancellation period are
                  entitled to a pro-rata refund of tuition charges.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                <h3 className="font-heading text-base font-semibold text-parchment">
                  Refund Timeline
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sandstone">
                  Refunds are issued within 45 days of the student&apos;s
                  withdrawal date.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                <h3 className="font-heading text-base font-semibold text-parchment">
                  Complete Refund Policy
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sandstone">
                  For complete details on the cancellation and refund policy,
                  please review the{" "}
                  <a
                    href="/documents/enrollment-agreement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-400 underline underline-offset-2 transition-colors"
                  >
                    Enrollment Agreement
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Credit Transferability ----------------------------------------- */}
      <Section
        id="credit-transfer"
        bg={(disclosureCategoryOrder.length + 4) % 2 === 1 ? "light" : "default"}
      >
        <AnimatedSection>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl">
              Credit Transferability Notice
            </h2>
            <p className="mt-3 text-base text-sandstone">
              Required by California Code of Regulations Sections 71775 and
              71775.5.
            </p>
            <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6 md:p-8">
              <p className="text-sm leading-relaxed text-sandstone">
                The transferability of credits you earn at Interior Designers
                Institute is at the complete discretion of an institution to
                which you may seek to transfer. Acceptance of the degree,
                diploma, or certificate you earn is also at the complete
                discretion of the institution to which you may seek to transfer.
                If the credits or degree, diploma, or certificate that you earn
                at this institution are not accepted at the institution to which
                you seek to transfer, you may be required to repeat some or all
                of your coursework at that institution. For this reason you
                should make certain that your attendance at this institution will
                meet your educational goals. This may include contacting an
                institution to which you may seek to transfer after attending
                Interior Designers Institute to determine if your credits or
                degree, diploma, or certificate will transfer.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Notice to Prospective Students --------------------------------- */}
      <Section
        id="prospective-notice"
        bg={(disclosureCategoryOrder.length + 5) % 2 === 1 ? "light" : "default"}
      >
        <AnimatedSection>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl">
              Notice to Prospective Students
            </h2>
            <p className="mt-3 text-base text-sandstone">
              Required by the Bureau for Private Postsecondary Education.
            </p>
            <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6 md:p-8">
              <p className="text-sm leading-relaxed text-sandstone">
                As a prospective student, you are encouraged to review this
                catalog prior to signing an enrollment agreement. You are also
                encouraged to review the School Performance Fact Sheet, which
                must be provided to you prior to signing an enrollment agreement.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="/documents/idi-catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-parchment transition-all hover:border-amber-500/30 hover:text-pink-500"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                  School Catalog
                </a>
                <a
                  href="/documents/school-performance-fact-sheet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-parchment transition-all hover:border-amber-500/30 hover:text-pink-500"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                  School Performance Fact Sheet
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Privacy Policy ------------------------------------------------- */}
      <Section
        id="privacy"
        bg={(disclosureCategoryOrder.length + 6) % 2 === 1 ? "light" : "default"}
      >
        <AnimatedSection>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl">
              Privacy Policy
            </h2>
            <p className="mt-3 text-base text-sandstone">
              Interior Designers Institute is committed to protecting the privacy
              of prospective students, current students, alumni, and visitors to
              our website.
            </p>
            <div className="mt-8 space-y-6 text-sm leading-relaxed text-sandstone">
              <div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-parchment">
                  Information We Collect
                </h3>
                <p>
                  We collect information you provide directly, such as when you
                  request information, apply for admission, or contact us. This
                  may include your name, email address, phone number, mailing
                  address, and educational background. We also collect standard
                  web analytics data through cookies and similar technologies.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-parchment">
                  How We Use Your Information
                </h3>
                <p>
                  We use collected information to respond to your inquiries,
                  process applications, provide educational services, send
                  communications about our programs, and improve our website. We
                  do not sell or rent personal information to third parties.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-parchment">
                  Data Security
                </h3>
                <p>
                  We implement appropriate security measures to protect personal
                  information against unauthorized access, alteration, or
                  destruction. Student educational records are protected in
                  accordance with FERPA (Family Educational Rights and Privacy
                  Act).
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-parchment">
                  Contact Us
                </h3>
                <p>
                  If you have questions about our privacy practices, please
                  contact us at{" "}
                  <Link
                    href="/contact"
                    className="text-pink-500 hover:text-pink-400 underline underline-offset-2 transition-colors"
                  >
                    our contact page
                  </Link>{" "}
                  or call (949) 675-4451.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Bottom CTA ---------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl lg:text-4xl">
            Questions about our <span className="text-gradient-pink">disclosures</span>?
          </h2>
          <p className="mt-4 text-sandstone">
            If you have questions about any of these documents or need
            additional information, please contact our office.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
