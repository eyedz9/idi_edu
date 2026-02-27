/** Campus visit scheduling page with tour booking form, campus info sidebar, and directions. */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TourForm } from "@/components/forms/tour-form";
import {
  contactInfo,
  fullAddress,
  officeHours,
  googleMapsDirectionsUrl,
} from "@/data/contact";
import { SITE_NAME, PHONE } from "@/lib/constants";
import { Breadcrumb } from "@/components/ui/breadcrumb";

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Schedule a Campus Visit",
  description: `Book a campus tour at ${SITE_NAME} in Newport Beach, CA. Tour our design studios, meet faculty, and learn about our interior design programs in person.`,
  alternates: { canonical: "/admissions/visit" },
};

/* -------------------------------------------------------------------------- */
/*  What to Expect cards                                                      */
/* -------------------------------------------------------------------------- */

const highlights = [
  {
    title: "Tour the Campus",
    description:
      "Walk through our design studios, resource library, computer lab, and materials room in our Newport Beach campus.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Meet Faculty & Staff",
    description:
      "Connect with our experienced instructors and admissions team who can answer your questions about programs and student life.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Learn About Programs",
    description:
      "Get an overview of our Certificate, Associate, Bachelor, and Master programs, including scheduling options and financial aid.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function VisitPage() {
  return (
    <>
      {/* -- Hero ------------------------------------------------------------ */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Newport Beach coastal design inspiration near the IDI campus"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/85 to-plum-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-plum-900/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Admissions", href: "/admissions" }, { label: "Visit" }]} />
          <p className="mb-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Campus Visit
          </p>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            Schedule a <span className="text-gradient-pink">Campus Visit</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            Experience our Newport Beach campus in person. Tour our design
            studios, meet faculty, and discover what makes IDI the right fit
            for your creative future.
          </p>
        </div>
      </section>

      {/* -- What to Expect -------------------------------------------------- */}
      <Section
        overline="What to Expect"
        title="Your Campus Visit"
        subtitle="A personalized tour designed to help you explore everything IDI has to offer."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} className="p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500">
                {item.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-parchment">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sandstone">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* -- Booking Form + Info --------------------------------------------- */}
      <Section
        bg="dark"
        grain
        overline="Book Your Tour"
        title="Choose a Date & Time"
        subtitle="Tours are available Monday through Friday during office hours. Select your preferred date and we'll confirm your visit."
      >
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form — spans 2 cols */}
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-10">
              <TourForm />
            </Card>
          </div>

          {/* Side info card */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-heading text-lg font-bold text-parchment mb-4">
                Campus Information
              </h3>

              <div className="space-y-4 text-sm text-sandstone">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-parchment">Address</p>
                    <p>{contactInfo.address}</p>
                    <p>{contactInfo.city}, {contactInfo.state} {contactInfo.zip}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-parchment">Phone</p>
                    <a
                      href={`tel:${PHONE.replace(/\D/g, "")}`}
                      className="hover:text-pink-500 transition-colors"
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-parchment">Office Hours</p>
                    <p>{officeHours.weekdays}</p>
                    <p>{officeHours.saturday}</p>
                    <p>{officeHours.sunday}</p>
                  </div>
                </div>

                {/* Directions */}
                <div className="pt-2">
                  <Button
                    as="a"
                    href={googleMapsDirectionsUrl}
                    variant="secondary"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-white/20 text-parchment hover:bg-white/10"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-pink-500/20 bg-pink-500/5">
              <p className="text-sm leading-relaxed text-sandstone">
                <span className="font-semibold text-parchment">Can&apos;t visit in person?</span>{" "}
                Contact our admissions team to arrange a virtual tour or phone
                consultation.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-block text-sm font-semibold text-pink-500 hover:text-pink-400 transition-colors"
              >
                Contact Us &rarr;
              </Link>
            </Card>
          </div>
        </div>
      </Section>

      {/* -- Bottom CTA ------------------------------------------------------ */}
      <section className="relative overflow-hidden mesh-aurora grain py-16 md:py-24" aria-label="Call to action">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl lg:text-4xl">
            Ready to Start Your <span className="text-gradient-pink">Design Journey</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sandstone">
            Take the next step toward becoming a professional interior
            designer. Apply today or get in touch with our admissions team.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/admissions/apply">
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button as="span" variant="secondary" size="lg">
                Contact Admissions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
