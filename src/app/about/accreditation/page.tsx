import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutIDI } from "@/data/about";
import { disclosures } from "@/data/disclosures";
import { SITE_NAME } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animations";

export const metadata: Metadata = {
  title: "Accreditation & Approvals",
  description: `${SITE_NAME} is accredited by ACCSC and CIDA, and approved by the California BPPE. Learn about our institutional accreditations and program-specific approvals.`,
  alternates: { canonical: "/about/accreditation" },
};

/** Longer descriptions for each accreditation body */
const accreditationDetails: Record<
  string,
  { description: string; highlights: string[] }
> = {
  ACCSC: {
    description:
      "The Accrediting Commission of Career Schools and Colleges (ACCSC) is a nationally recognized accrediting agency listed by the United States Department of Education and recognized by the Council for Higher Education Accreditation (CHEA). ACCSC accreditation ensures that IDI meets rigorous standards for educational quality, student outcomes, and institutional integrity.",
    highlights: [
      "Nationally recognized by the U.S. Department of Education",
      "Recognized by the Council for Higher Education Accreditation (CHEA)",
      "Covers all institutional programs",
      "Enables student eligibility for Title IV Federal Financial Aid",
    ],
  },
  CIDA: {
    description:
      "The Council for Interior Design Accreditation (CIDA) is the internationally recognized accrediting body for interior design education in North America. CIDA accreditation of the Bachelor of Arts in Interior Design program ensures that the curriculum meets rigorous standards for design education, preparing graduates for professional practice and licensing.",
    highlights: [
      "Premier accrediting body for interior design education",
      "Accredits the Bachelor of Arts in Interior Design program",
      "Recognized by employers and licensing bodies nationwide",
      "Gold standard for interior design program quality",
    ],
  },
  BPPE: {
    description:
      "The Bureau for Private Postsecondary Education (BPPE) is the California state agency that regulates private postsecondary educational institutions. IDI is approved to operate by the BPPE, ensuring compliance with California state requirements for educational quality and consumer protection.",
    highlights: [
      "California state approval to operate",
      "Consumer protection oversight",
      "Compliance with California Education Code",
    ],
  },
};

/** Relevant compliance documents by abbreviation */
function getComplianceDocs(abbreviation: string) {
  return disclosures.filter(
    (doc) =>
      doc.category === abbreviation ||
      doc.category === "Institutional" ||
      doc.name.toLowerCase().includes(abbreviation.toLowerCase()),
  );
}

export default function AccreditationPage() {
  const { bodies } = aboutIDI.accreditation;

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
          <li>
            <Link href="/about" className="hover:text-pink-500 transition-colors">
              About
            </Link>
          </li>
          <li aria-hidden="true" className="text-sandstone/40">&rsaquo;</li>
          <li className="text-parchment font-medium">Accreditation</li>
        </ol>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32 lg:py-40">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1920&q=80"
            alt="Professional academic setting representing accreditation standards"
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
            Quality Assurance
          </p>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            {aboutIDI.accreditation.headline.split(" ").length > 1 ? (
              <>
                {aboutIDI.accreditation.headline.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-gradient-pink">
                  {aboutIDI.accreditation.headline.split(" ").slice(-1)[0]}
                </span>
              </>
            ) : (
              aboutIDI.accreditation.headline
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            IDI holds institutional and program-specific accreditations that
            reflect our commitment to educational excellence and student
            success.
          </p>
        </div>
      </section>

      {/* ── Overview ────────────────────────────────────────────────────── */}
      <Section overline="Overview" title="Our Accreditations">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl">
            {aboutIDI.accreditation.body.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="mb-6 text-base leading-relaxed text-sandstone last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Accreditation Cards ─────────────────────────────────────────── */}
      <Section bg="dark" grain overline="Details" title="Accrediting Bodies">
        <AnimatedSection stagger={0.12}>
          <div className="space-y-8">
            {bodies.map((body) => {
              const details = accreditationDetails[body.abbreviation];
              const isAccreditor = body.abbreviation === "ACCSC" || body.abbreviation === "CIDA";
              return (
                <Card
                  key={body.abbreviation}
                  variant="glass"
                  className={`overflow-hidden ${isAccreditor ? "glow-jade" : ""}`}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Left: identity */}
                    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-plum-800/80 to-plum-900/80 p-8 text-center backdrop-blur-sm lg:w-72 lg:flex-shrink-0">
                      {body.abbreviation === "ACCSC" && (
                        <Image
                          src="/images/ACCCS_logo.png"
                          alt="ACCSC Logo"
                          width={120}
                          height={60}
                          className="mb-4 h-12 w-auto brightness-0 invert"
                          unoptimized
                        />
                      )}
                      {body.abbreviation === "CIDA" && (
                        <Image
                          src="/images/cida_logo.png"
                          alt="CIDA Logo"
                          width={120}
                          height={60}
                          className="mb-4 h-12 w-auto"
                          unoptimized
                        />
                      )}
                      {body.abbreviation === "BPPE" && (
                        <Image
                          src="/images/bppe-logo.png"
                          alt="BPPE Logo"
                          width={120}
                          height={60}
                          className="mb-4 h-12 w-auto"
                          unoptimized
                        />
                      )}
                      <Badge variant={isAccreditor ? "jade" : "accent"} className={`mb-3 ${isAccreditor ? "glow-jade" : ""}`}>
                        {body.abbreviation}
                      </Badge>
                      <h3 className="font-heading text-xl font-bold text-parchment">
                        {body.name}
                      </h3>
                      <p className="mt-2 text-sm text-sandstone">{body.scope}</p>
                      <a
                        href={body.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 transition-colors hover:text-pink-400"
                      >
                        Visit Website
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* Right: detail */}
                    <div className="flex-1 p-8">
                      {details && (
                        <>
                          <p className="text-base leading-relaxed text-sandstone">
                            {details.description}
                          </p>
                          <ul className="mt-6 space-y-3">
                            {details.highlights.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-sm text-sandstone/80"
                              >
                                <svg
                                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-jade"
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
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Compliance Documents ─────────────────────────────────────────── */}
      <Section overline="Documents" title="Compliance Documents">
        <AnimatedSection>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sandstone">
            The following documents are available for review in accordance with
            our accreditation and regulatory requirements.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {getComplianceDocs("ACCSC").map((doc) => (
              <a
                key={doc.path}
                href={doc.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-amber-500/30 hover:shadow-[0_0_20px_rgba(176,108,255,0.08)] hover:shadow-amber-500/5"
              >
                {/* PDF icon */}
                <svg
                  className="mt-0.5 h-6 w-6 flex-shrink-0 text-pink-500"
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
                <div>
                  <p className="text-sm font-semibold text-parchment group-hover:text-pink-500 transition-colors">
                    {doc.name}
                  </p>
                  {doc.description && (
                    <p className="mt-1 text-xs text-sandstone line-clamp-2">
                      {doc.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/disclosures"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 transition-colors hover:text-pink-400"
            >
              View All Disclosures
              <svg
                className="h-4 w-4"
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
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
