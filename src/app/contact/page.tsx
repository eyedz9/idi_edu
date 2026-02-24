import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  contactInfo,
  socialLinks,
  fullAddress,
  officeHours,
  googleMapsEmbedUrl,
  googleMapsDirectionsUrl,
} from "@/data";
import { PHONE, FAX, EMAIL } from "@/lib/constants";
import { ContactForm } from "@/components/forms/contact-form";

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Interior Designers Institute in Newport Beach, CA. Phone, email, address, office hours, and campus map. We're here to help with admissions, financial aid, and more.",
  alternates: { canonical: "/contact" },
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
        <li className="font-medium text-white">Contact</li>
      </ol>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Social icon map                                                           */
/* -------------------------------------------------------------------------- */

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "facebook":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      );
    default:
      return null;
  }
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  return (
    <>
      {/* -- Hero ---------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32">
        {/* Unsplash hero image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern office space with warm lighting and contemporary design"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/85 to-plum-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-plum-900/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs />
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            Contact <span className="text-gradient-pink">Us</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            We&apos;d love to hear from you. Reach out with questions about
            admissions, programs, financial aid, or to schedule a campus tour.
          </p>
        </div>
      </section>

      {/* -- Contact Info + Map -------------------------------------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Contact details */}
          <div>
            {/* Address */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl font-bold text-parchment">
                Visit Our Campus
              </h2>
              <address className="mt-4 not-italic text-sandstone leading-relaxed">
                <p className="font-semibold text-parchment">
                  Interior Designers Institute
                </p>
                <p>{contactInfo.address}</p>
                <p>
                  {contactInfo.city}, {contactInfo.state} {contactInfo.zip}
                </p>
              </address>
              <div className="mt-4">
                <Button
                  as="a"
                  href={googleMapsDirectionsUrl}
                  variant="secondary"
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-white/20 text-parchment hover:bg-white/10 min-h-[44px]"
                >
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Phone, Fax, Email */}
            <div className="mb-8 space-y-3">
              <h3 className="font-heading text-lg font-bold text-parchment">
                Get in Touch
              </h3>
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sandstone">
                    Phone
                  </p>
                  <a
                    href={`tel:${PHONE.replace(/\D/g, "")}`}
                    className="text-sm font-medium text-parchment hover:text-pink-500 transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 7.131V3.375c0-.621-.504-1.125-1.125-1.125H6.375c-.621 0-1.125.504-1.125 1.125v3.756"
                  />
                </svg>
                <div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sandstone">
                    Fax
                  </p>
                  <p className="text-sm font-medium text-parchment">{FAX}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sandstone">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm font-medium text-parchment hover:text-pink-500 transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-bold text-parchment">
                Office Hours
              </h3>
              <div className="mt-3 space-y-1 text-sm text-sandstone">
                <p>{officeHours.weekdays}</p>
                <p>{officeHours.saturday}</p>
                <p>{officeHours.sunday}</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-bold text-parchment">
                Follow Us
              </h3>
              <div className="mt-3 flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sandstone transition-all duration-200 hover:bg-pink-500 hover:text-white hover:scale-110"
                    aria-label={`Follow IDI on ${link.platform}`}
                  >
                    <SocialIcon icon={link.icon} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Map */}
          <div className="flex flex-col">
            <Card className="flex-1 overflow-hidden">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing Interior Designers Institute at ${fullAddress}`}
              />
            </Card>
            <p className="mt-3 text-center text-xs text-sandstone">
              {fullAddress}
            </p>
          </div>
        </div>
      </Section>

      {/* -- Contact Form --------------------------------------------------- */}
      <Section
        bg="dark"
        grain
        overline="Request Information"
        title="Send Us a Message"
        subtitle="Fill out the form below and our admissions team will get back to you promptly."
      >
        <div className="mx-auto max-w-2xl">
          <Card className="p-6 md:p-10">
            <ContactForm />
          </Card>
        </div>
      </Section>

      {/* -- Staff Directory ----------------------------------------------- */}
      <Section
        bg="light"
        overline="Our Team"
        title="Department Contacts"
        subtitle="Reach the right person for your inquiry."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              department: "Admissions & Student Services",
              description:
                "Questions about programs, enrollment, campus tours, and the application process.",
              email: "samantha@idi.edu",
              phone: PHONE,
            },
            {
              department: "Financial Aid & Title IX",
              description:
                "FAFSA assistance, grants, loans, scholarships, payment plans, and Title IX inquiries.",
              email: "renee@idi.edu",
              phone: PHONE,
            },
            {
              department: "Academic Affairs",
              description:
                "Curriculum questions, faculty inquiries, academic policies, and program information.",
              email: "Tamara.Gonzalez@idi.edu",
              phone: PHONE,
            },
            {
              department: "Career Placement",
              description:
                "Job placement assistance, resume review, and industry connections.",
              email: "rhulan@idi.edu",
              phone: PHONE,
            },
            {
              department: "Library",
              description:
                "Design resources, trade publications, and research support.",
              email: "library@idi.edu",
              phone: PHONE,
            },
            {
              department: "General Inquiries",
              description:
                "All other questions, media requests, and partnership opportunities.",
              email: "tammy@idi.edu",
              phone: PHONE,
            },
          ].map((dept) => (
            <Card key={dept.department} className="p-6 border-white/10 hover:border-amber-500/30 hover:shadow-[0_0_20px_rgba(176,108,255,0.08)] transition-all duration-300">
              <h3 className="font-heading text-lg font-bold text-parchment">
                {dept.department}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sandstone">
                {dept.description}
              </p>
              <div className="mt-4 space-y-1.5 text-sm">
                <p>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-pink-500 hover:text-pink-400 transition-colors"
                  >
                    {dept.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${dept.phone.replace(/\D/g, "")}`}
                    className="text-sandstone hover:text-pink-500 transition-colors"
                  >
                    {dept.phone}
                  </a>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* -- CTA ----------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-16 md:py-24" aria-label="Call to action">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl lg:text-5xl">
            Ready to Start Your <span className="text-gradient-pink">Design Journey</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-sandstone">
            Schedule a campus tour or apply today. Our admissions team is ready
            to help you every step of the way.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/admissions/apply">
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Apply Now
              </Button>
            </Link>
            <Button
              as="a"
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              variant="secondary"
              size="lg"
            >
              Call {PHONE}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
