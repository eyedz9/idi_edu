import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contact";

export function RequestInfoSection() {
  return (
    <Section
      bg="light"
      overline="Get in Touch"
      title="Ready to Learn More?"
      subtitle="Connect with our admissions team to discover which program is right for you."
    >
      <div className="mx-auto max-w-2xl text-center">
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Phone */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-6">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/15 text-pink-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <h3 className="font-body text-sm font-semibold text-parchment">Call Us</h3>
            <a
              href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
              className="mt-1 block text-sm text-pink-500 transition-colors hover:text-pink-400"
            >
              {contactInfo.phone}
            </a>
          </div>

          {/* Email */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-6">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/15 text-pink-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="font-body text-sm font-semibold text-parchment">Email Us</h3>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-1 block text-sm text-pink-500 transition-colors hover:text-pink-400"
            >
              {contactInfo.email}
            </a>
          </div>

          {/* Request Info */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-6">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/15 text-pink-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <h3 className="font-body text-sm font-semibold text-parchment">Request Info</h3>
            <Link
              href="/contact"
              className="mt-1 block text-sm text-pink-500 transition-colors hover:text-pink-400"
            >
              Fill out our form
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/contact">
            <Button as="span" variant="primary" size="lg">
              Request Information
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default RequestInfoSection;
