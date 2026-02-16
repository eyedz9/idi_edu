import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animations";

export const metadata: Metadata = {
  title: "Staff Directory",
  description: `Meet the dedicated staff at ${SITE_NAME}. Our administrative team supports students from admissions through graduation and career placement.`,
};

/* -------------------------------------------------------------------------- */
/*  Staff data                                                                */
/* -------------------------------------------------------------------------- */

interface StaffMember {
  name: string;
  title: string;
  department: string;
  email: string;
  bio: string;
  imageSrc: string;
}

const staffMembers: StaffMember[] = [
  {
    name: "Patricia Deaton-Morgan",
    title: "President & Director",
    department: "Executive Administration",
    email: "director@idi.edu",
    bio: "Leading IDI with a vision for excellence in interior design education, Patricia oversees all institutional operations and ensures that the school's mission of nurturing creative talent continues to guide every decision.",
    imageSrc: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80",
  },
  {
    name: "Lauren Castellano",
    title: "Director of Admissions",
    department: "Admissions",
    email: "admissions@idi.edu",
    bio: "Lauren guides prospective students through the admissions process, from initial inquiry to enrollment. She is dedicated to helping applicants find the program that best fits their goals and creative aspirations.",
    imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  },
  {
    name: "Michael Tran",
    title: "Registrar",
    department: "Academic Records",
    email: "registrar@idi.edu",
    bio: "Michael manages student records, course scheduling, and academic policies. He ensures that transcripts, enrollment verifications, and graduation requirements are handled with accuracy and care.",
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    name: "Sandra Okafor",
    title: "Financial Aid Director",
    department: "Financial Aid",
    email: "financialaid@idi.edu",
    bio: "Sandra helps students navigate financial aid options, including federal aid, scholarships, and payment plans. She is committed to making design education accessible and works personally with each student to find solutions.",
    imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
  },
  {
    name: "Jessica Reyes",
    title: "Student Services Coordinator",
    department: "Student Services",
    email: "studentservices@idi.edu",
    bio: "Jessica is the go-to resource for student life at IDI. From orientation to campus events and academic support, she ensures every student has the resources they need to thrive throughout their educational journey.",
    imageSrc: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=600&q=80",
  },
  {
    name: "Daniel Park",
    title: "Career Services Advisor",
    department: "Career Services",
    email: "careers@idi.edu",
    bio: "Daniel connects students and graduates with industry opportunities. From resume workshops and portfolio reviews to employer partnerships and job placement assistance, he helps IDI graduates launch successful design careers.",
    imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
  },
  {
    name: "Amy Chen",
    title: "Administrative Coordinator",
    department: "Administration",
    email: "contact@idi.edu",
    bio: "Amy keeps daily operations running smoothly at IDI. She manages front desk communications, campus coordination, and administrative support, serving as a welcoming first point of contact for students, faculty, and visitors.",
    imageSrc: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function StaffPage() {
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
          <li>
            <Link href="/about" className="hover:text-pink-500 transition-colors">
              About
            </Link>
          </li>
          <li aria-hidden="true" className="text-sandstone/40">&rsaquo;</li>
          <li className="text-parchment font-medium">Staff</li>
        </ol>
      </nav>

      {/* -- Hero ---------------------------------------------------------- */}
      <Section bg="dark" className="relative overflow-hidden mesh-plum grain">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Professional office environment representing IDI administration"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-plum-900/80 via-plum-900/70 to-plum-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900/60 to-transparent" />
        </div>
        <div className="relative text-center">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            Our Team
          </p>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            Staff <span className="text-gradient-pink">Directory</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            The dedicated professionals who support your educational journey
            from admissions through graduation and beyond.
          </p>
        </div>
      </Section>

      {/* -- Introduction -------------------------------------------------- */}
      <Section overline="Here to Help" title="Your Support Team">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-lg leading-relaxed text-sandstone">
              Behind every successful student is a team of dedicated
              professionals working to make the educational experience
              seamless. From your very first inquiry through career
              placement after graduation, IDI&apos;s staff is here to
              support you at every step.
            </p>
            <p className="text-lg leading-relaxed text-sandstone">
              Our small campus means you will know our staff by name, and they
              will know you. This personal approach is at the heart of
              everything we do at Interior Designers Institute.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Staff Grid ---------------------------------------------------- */}
      <Section bg="dark" grain overline="Directory" title="Meet Our Staff">
        <AnimatedSection stagger={0.08}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staffMembers.map((member) => (
              <Card key={member.name} className="group overflow-hidden">
                {/* Photo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-plum-700">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-parchment">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-pink-500">
                    {member.title}
                  </p>
                  <p className="mt-1 text-xs text-sandstone/70">
                    {member.department}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-sandstone line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 transition-colors hover:text-pink-400"
                  >
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    {member.email}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Contact Info -------------------------------------------------- */}
      <Section overline="Get in Touch" title="Contact Our Team">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <Card variant="glass" className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/15">
                  <svg
                    className="h-6 w-6 text-pink-500"
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
                </div>
                <h3 className="font-heading text-lg font-bold text-parchment">
                  Call Us
                </h3>
                <a
                  href="tel:+19496754451"
                  className="mt-2 block text-sm text-sandstone transition-colors hover:text-pink-500"
                >
                  (949) 675-4451
                </a>
              </Card>

              <Card variant="glass" className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/15">
                  <svg
                    className="h-6 w-6 text-pink-500"
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
                </div>
                <h3 className="font-heading text-lg font-bold text-parchment">
                  Email Us
                </h3>
                <a
                  href="mailto:contact@idi.edu"
                  className="mt-2 block text-sm text-sandstone transition-colors hover:text-pink-500"
                >
                  contact@idi.edu
                </a>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* -- CTA ----------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl lg:text-5xl">
            Have questions about{" "}
            <span className="text-gradient-pink">enrollment</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sandstone">
            Our admissions team is ready to help you take the first step toward
            your interior design career. Reach out today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <Button as="button" variant="primary" size="lg" className="glow-amber">
                Start Your Application
              </Button>
            </Link>
            <Link href="/contact">
              <Button as="button" variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
