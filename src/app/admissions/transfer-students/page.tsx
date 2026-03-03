/** Transfer Students information: credit evaluation, articulation, and GE requirements. */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Transfer Students",
  description:
    "Learn how transfer credits apply at Interior Designers Institute. Transfer credit evaluation, articulation agreements, and General Education requirements for degree programs.",
  alternates: { canonical: "/admissions/transfer-students" },
};

const transferSteps = [
  {
    step: 1,
    title: "Submit Official Transcripts",
    description:
      "Request official transcripts from all previously attended institutions be sent directly to IDI's Admissions Office for evaluation.",
  },
  {
    step: 2,
    title: "Credit Evaluation",
    description:
      "Our Registrar reviews your transcripts to determine which courses meet IDI's curriculum requirements. Evaluations are typically completed within two weeks of receiving all transcripts.",
  },
  {
    step: 3,
    title: "Review Your Evaluation",
    description:
      "Meet with an admissions advisor to review accepted transfer credits and understand your remaining program requirements at IDI.",
  },
  {
    step: 4,
    title: "Enroll & Register",
    description:
      "Once your evaluation is complete, finalize your enrollment and register for the courses you need to complete your IDI program.",
  },
];

const faqs = [
  {
    question: "What types of credits can transfer to IDI?",
    answer:
      "IDI evaluates coursework completed at accredited colleges and universities. Interior design studio courses, General Education courses, and related electives may be eligible for transfer credit, subject to review.",
  },
  {
    question: "Is there a minimum grade required for transfer credits?",
    answer:
      "Generally, courses must have been completed with a grade of C or better to be considered for transfer credit. Specific programs may have additional requirements.",
  },
  {
    question: "How many credits can I transfer?",
    answer:
      "The number of transferable credits varies by program. Transfer credit is evaluated on a case-by-case basis to ensure coursework aligns with IDI's curriculum standards.",
  },
  {
    question: "Do transfer credits affect my GPA at IDI?",
    answer:
      "Transfer credits appear on your IDI transcript as transfer credit but do not factor into your IDI cumulative GPA. Only courses taken at IDI are included in GPA calculations.",
  },
  {
    question: "What are articulation agreements?",
    answer:
      "IDI maintains articulation agreements with select institutions that outline how specific courses transfer between schools. Contact Admissions to learn which institutions have current agreements with IDI.",
  },
];

export default function TransferStudentsPage() {
  return (
    <>
      {/* -- Hero ----------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
            alt="Students collaborating in a modern educational environment"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/85 to-plum-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-plum-900/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Admissions", href: "/admissions" },
              { label: "Transfer Students" },
            ]}
          />
          <p className="mb-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Admissions
          </p>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            Transfer <span className="text-gradient-pink">Students</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone md:text-xl">
            Already started your design education elsewhere? IDI welcomes
            transfer students and evaluates prior coursework to help you
            continue your studies without starting over.
          </p>
        </div>
      </section>

      {/* -- Transfer Credit Overview --------------------------------------- */}
      <Section
        overline="Overview"
        title="Transfer Credit Evaluation"
        subtitle="IDI evaluates transfer credits on a course-by-course basis to ensure academic quality and alignment with our programs."
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-base leading-relaxed text-sandstone">
            Interior Designers Institute recognizes that many students begin
            their education at other institutions before discovering their
            passion for interior design. We evaluate prior coursework from
            accredited colleges and universities to determine how your existing
            credits can apply toward an IDI program.
          </p>
          <p className="text-base leading-relaxed text-sandstone">
            Transfer credit is awarded based on course content, credit hours,
            and the accreditation status of the originating institution. Our
            Registrar works with each transfer student individually to maximize
            applicable credits while maintaining the rigor of IDI&apos;s
            curriculum.
          </p>
        </div>
      </Section>

      {/* -- How Transfer Credits Apply ------------------------------------- */}
      <Section bg="dark" grain overline="Process" title="How It Works">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {transferSteps.map((s) => (
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

      {/* -- GE Requirement for BA ----------------------------------------- */}
      <Section
        overline="Degree Requirements"
        title="General Education for the BA Program"
      >
        <div className="mx-auto max-w-3xl">
          <Card className="border-l-4 border-amber-500 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Badge variant="accent">BA Program</Badge>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-parchment">
                  45 Quarter Units of General Education
                </h3>
                <p className="text-sm leading-relaxed text-sandstone">
                  The Bachelor of Arts in Interior Design program requires 45
                  quarter units of General Education (GE) coursework from an
                  accredited institution. These GE units must cover a breadth of
                  academic disciplines as outlined in the IDI catalog.
                </p>
                <p className="text-sm leading-relaxed text-sandstone">
                  Transfer students who have completed GE coursework at accredited
                  colleges or universities may have those courses evaluated for
                  credit toward the BA program&apos;s GE requirement. Students who
                  have not yet completed the required GE units can do so at a
                  community college or other accredited institution concurrently
                  with their IDI studies.
                </p>
                <p className="text-sm leading-relaxed text-sandstone">
                  Contact IDI Admissions for a detailed list of GE categories and
                  approved course equivalencies.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* -- Articulation Agreements ---------------------------------------- */}
      <Section bg="light" overline="Partnerships" title="Articulation Agreements">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-base leading-relaxed text-sandstone">
            IDI maintains articulation agreements with select accredited
            institutions to streamline the transfer process. These agreements
            define how specific courses at partner institutions correspond to
            IDI program requirements, making it easier for students to plan
            their transfer.
          </p>
          <p className="text-base leading-relaxed text-sandstone">
            If your current or previous institution has an articulation
            agreement with IDI, the credit evaluation process is
            straightforward — approved courses transfer directly according to
            the agreement terms. For institutions without a formal agreement,
            IDI still evaluates transcripts on a course-by-course basis.
          </p>
          <p className="text-base leading-relaxed text-sandstone">
            Contact the Admissions Office at{" "}
            <a
              href="tel:+19496754451"
              className="font-semibold text-pink-500 hover:text-pink-400 transition-colors"
            >
              (949) 675-4451
            </a>{" "}
            to learn about current articulation partners and how your credits
            may transfer.
          </p>
        </div>
      </Section>

      {/* -- FAQ ------------------------------------------------------------ */}
      <Section overline="FAQ" title="Frequently Asked Questions">
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.question} className="p-6">
              <h3 className="font-heading text-lg font-bold text-parchment">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sandstone">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* -- CTA ------------------------------------------------------------ */}
      <section
        className="relative overflow-hidden mesh-aurora grain py-16 md:py-24"
        aria-label="Call to action"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl lg:text-5xl">
            Ready to <span className="text-gradient-pink">Transfer</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-sandstone">
            Contact our Admissions Office to begin your transfer credit
            evaluation and find out how your existing coursework applies at IDI.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/admissions/apply">
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
              <Button as="span" variant="secondary" size="lg">
                Request Information
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
