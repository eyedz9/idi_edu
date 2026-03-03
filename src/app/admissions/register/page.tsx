/** Certificate Course registration page with Clover payment form and pre-enrollment documents. */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PHONE, EMAIL } from "@/lib/constants";
import { RegistrationForm } from "@/components/forms/registration/registration-form";
import { Breadcrumb } from "@/components/ui/breadcrumb";

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Register — May 2026 Certificate Course",
  description:
    "Register for the May 2026 Combined Certificate Course at Interior Designers Institute. Term dates: May 11 – July 30, 2026. Enrollment is limited.",
  alternates: { canonical: "/admissions/register" },
};

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function RegisterPage() {
  return (
    <>
      {/* -- Hero ----------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/campus.jpeg"
            alt="Interior Designers Institute campus"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/85 to-plum-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-plum-900/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Admissions", href: "/admissions" }, { label: "Register" }]} />

          <div className="mb-6 inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink-500" />
            </span>
            <Badge variant="accent">Now Enrolling &mdash; Spring/Summer 2026</Badge>
          </div>

          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            <span className="text-gradient-pink">Register</span> for May 2026
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone md:text-xl">
            Combined Certificate Course &mdash; Term Dates:{" "}
            <strong className="text-parchment">
              May 11, 2026 – July 30, 2026
            </strong>
          </p>

          <p className="mt-3 text-sm text-sandstone/70">
            A $95 Non-Refundable Registration Fee is required. Enrollment is
            limited.
          </p>
        </div>
      </section>

      {/* -- Registration Form ---------------------------------------------- */}
      <Section
        id="registration"
        overline="Student Registration"
        title="Complete Your Registration"
        subtitle="Fill out the secure form below to register for the May 2026 Combined Certificate Course. All fields marked with an asterisk are required."
      >
        <div className="mx-auto max-w-3xl">
          <Card className="p-6 md:p-10">
            <RegistrationForm />
          </Card>
        </div>
      </Section>

      {/* -- Download / Mail Option ----------------------------------------- */}
      <Section bg="light">
        <div className="mx-auto max-w-3xl">
          <Card className="border-l-4 border-amber-500 p-6 md:p-8">
            <h3 className="font-heading text-lg font-bold text-parchment">
              Prefer to Register by Mail?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sandstone">
              You may download the registration form and mail it with a $95
              check to:{" "}
              <strong className="text-parchment">
                Interior Designers Institute, 1061 Camelback Street, Newport
                Beach, CA 92660
              </strong>
            </p>
          </Card>
        </div>
      </Section>

      {/* -- Pre-Enrollment Documents --------------------------------------- */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Card className="border-l-4 border-amber-500 p-6 md:p-8">
            <h3 className="font-heading text-lg font-bold text-parchment">
              Notice to Prospective Students
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sandstone">
              As a prospective student, you are encouraged to review the{" "}
              <a
                href="/documents/idi-catalog.pdf"
                className="text-pink-500 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                School Catalog
              </a>{" "}
              and{" "}
              <a
                href="/documents/school-performance-fact-sheet.pdf"
                className="text-pink-500 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                School Performance Fact Sheet
              </a>{" "}
              prior to signing an enrollment agreement.
            </p>
          </Card>
        </div>
      </Section>

      {/* -- Contact -------------------------------------------------------- */}
      <Section bg="light">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl">
            Questions?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sandstone">
            For further information, please call us or visit{" "}
            <strong className="text-parchment">idi.edu</strong>
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

          {/* Pre-enrollment document links */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-sandstone/70">
              Pre-Enrollment Documents
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a
                href="/documents/idi-catalog.pdf"
                className="text-pink-500 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                School Catalog
              </a>
              <a
                href="/documents/school-performance-fact-sheet.pdf"
                className="text-pink-500 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Performance Fact Sheet
              </a>
              <Link
                href="/disclosures#strf"
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                STRF Disclosure
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
