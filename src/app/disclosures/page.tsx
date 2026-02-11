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
        <ol className="flex items-center gap-2 text-sm text-neutral-400">
          <li>
            <Link href="/" className="hover:text-pink-500 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-plum-900 font-medium">Disclosures</li>
        </ol>
      </nav>

      {/* -- Hero ---------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-plum grain py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
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
          <p className="text-lg leading-relaxed text-neutral-600">
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
                <h2 className="font-heading text-2xl font-bold text-plum-900 md:text-3xl">
                  {category === "ACCSC"
                    ? "ACCSC Documents"
                    : category === "BPPE"
                      ? "BPPE Documents"
                      : `${category} Documents`}
                </h2>
                {categoryDescriptions[category] && (
                  <p className="mt-3 text-base text-neutral-500">
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
                      className="group flex items-start gap-4 rounded-lg border border-warm-200 bg-warm-50 p-5 transition-all hover:border-amber-500/30 hover:shadow-sm"
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
                        <p className="font-body text-base font-semibold text-plum-900 group-hover:text-pink-500 transition-colors">
                          {doc.name}
                        </p>
                        {doc.description && (
                          <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                            {doc.description}
                          </p>
                        )}
                      </div>

                      {/* Download indicator */}
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-300 transition-colors group-hover:text-pink-500"
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
              <Button as="button" variant="primary" size="lg" className="glow-amber">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
