import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animations";

export const metadata: Metadata = {
  title: "Faculty",
  description: `Meet the faculty at ${SITE_NAME}. Our experienced instructors bring real-world interior design expertise to the classroom, mentoring students in studio-based learning.`,
  alternates: { canonical: "/about/faculty" },
};

/* -------------------------------------------------------------------------- */
/*  Faculty data                                                              */
/* -------------------------------------------------------------------------- */

interface FacultyMember {
  name: string;
  title: string;
  credentials: string;
  specialization: string;
  bio: string;
  imageSrc: string;
  specialties: string[];
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Dr. Caroline Whitfield",
    title: "Department Chair & Program Director",
    credentials: "Ph.D. Interior Architecture, UCLA; M.A. Interior Design, RISD",
    specialization: "Design Theory & Professional Practice",
    bio: "With over 25 years in both professional practice and academia, Dr. Whitfield leads IDI's interior design programs. Her research in biophilic design and sustainable interiors has been published internationally, and she brings a deep commitment to mentoring the next generation of designers.",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    specialties: ["Design Theory", "Sustainability", "Biophilic Design"],
  },
  {
    name: "Marcus Avery, IIDA",
    title: "Associate Professor, Interior Design Fundamentals",
    credentials: "M.F.A. Interior Design, Savannah College of Art & Design",
    specialization: "Space Planning & Residential Design",
    bio: "Marcus brings 18 years of residential and hospitality design experience to his fundamentals courses. A practicing designer with projects spanning Southern California, he emphasizes human-centered design and the relationship between space, light, and well-being.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    specialties: ["Space Planning", "Residential", "Hospitality"],
  },
  {
    name: "Sophia Nguyen, ASID",
    title: "Associate Professor, Color & Materials",
    credentials: "M.A. Interior Design, Parsons School of Design",
    specialization: "Color Theory & Materials Science",
    bio: "Sophia's expertise in color psychology and materials innovation shapes IDI's materials curriculum. Previously a senior designer at Gensler, she guides students through material sourcing, specification, and the art of creating cohesive palettes for residential and commercial projects.",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    specialties: ["Color Theory", "Materials", "Specifications"],
  },
  {
    name: "David Ochoa",
    title: "Assistant Professor, CAD & Digital Design",
    credentials: "M.Arch., SCI-Arc; B.F.A. Digital Arts, Art Center College of Design",
    specialization: "Digital Visualization & BIM",
    bio: "David bridges traditional design thinking with cutting-edge digital tools. Proficient in AutoCAD, Revit, SketchUp, and emerging AI-driven visualization, he prepares students for the technology-forward expectations of today's design firms and ensures graduates are industry-ready from day one.",
    imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    specialties: ["AutoCAD", "Revit", "3D Visualization"],
  },
  {
    name: "Dr. Elena Rossini",
    title: "Associate Professor, History of Architecture & Design",
    credentials: "Ph.D. Architectural History, Columbia University",
    specialization: "Design History & Cultural Context",
    bio: "Dr. Rossini's courses illuminate the historical roots of contemporary design. From ancient civilizations through modernism and beyond, she helps students understand how cultural movements, technology, and aesthetics have shaped the built environment we inhabit today.",
    imageSrc: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80",
    specialties: ["Design History", "Modernism", "Cultural Studies"],
  },
  {
    name: "James Hartley, NCIDQ",
    title: "Associate Professor, Studio & Portfolio",
    credentials: "M.F.A. Interior Design, Pratt Institute",
    specialization: "Studio Practice & Portfolio Development",
    bio: "James leads IDI's studio courses where students tackle real-world design challenges. His 15 years at boutique design studios in Los Angeles and New York inform a practice-based teaching approach that results in portfolio-ready work clients and employers actively seek.",
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    specialties: ["Studio Practice", "Portfolio", "Commercial Design"],
  },
  {
    name: "Rachel Kim, LEED AP",
    title: "Assistant Professor, Sustainable Design",
    credentials: "M.S. Sustainable Design, Philadelphia University; B.A. Interior Design",
    specialization: "Sustainable & Wellness-Focused Design",
    bio: "Rachel brings a passion for environmental responsibility to IDI's curriculum. Her coursework in sustainable materials, WELL Building standards, and evidence-based design ensures students graduate prepared to create interiors that are both beautiful and responsibly designed.",
    imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    specialties: ["LEED", "WELL", "Sustainable Materials"],
  },
  {
    name: "Anthony Morales, AIA",
    title: "Adjunct Professor, Professional Practice",
    credentials: "M.Arch., USC; Licensed Architect, State of California",
    specialization: "Business of Design & Building Codes",
    bio: "A licensed architect with an active practice in Orange County, Anthony teaches students the business side of design. His courses cover contracts, project management, building codes, and client relations, equipping graduates with the professional acumen to launch successful careers.",
    imageSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    specialties: ["Business of Design", "Building Codes", "Project Management"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function FacultyPage() {
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
          <li className="text-parchment font-medium">Faculty</li>
        </ol>
      </nav>

      {/* -- Hero ---------------------------------------------------------- */}
      <Section bg="dark" className="relative overflow-hidden mesh-aurora grain">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80"
            alt="Faculty mentoring students in a design studio"
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
            Our Educators
          </p>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            Meet Our <span className="text-gradient-pink">Faculty</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            Industry-connected professionals who bring decades of real-world
            design experience into the classroom, mentoring each student through
            hands-on, studio-based learning.
          </p>
        </div>
      </Section>

      {/* -- Introduction -------------------------------------------------- */}
      <Section overline="Excellence in Teaching" title="Dedicated Design Educators">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-lg leading-relaxed text-sandstone">
              At Interior Designers Institute, our faculty members are more than
              instructors — they are practicing designers, published
              researchers, and licensed professionals who remain active in the
              industry. This ensures that our curriculum stays current with
              evolving design trends, technologies, and professional standards.
            </p>
            <p className="text-lg leading-relaxed text-sandstone">
              With intentionally small class sizes, our faculty provide
              personalized mentorship, guiding students from foundational skills
              through advanced studio work and professional portfolio
              development.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Faculty Grid -------------------------------------------------- */}
      <Section bg="dark" grain overline="Instructors" title="Our Faculty Members">
        <AnimatedSection stagger={0.08}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facultyMembers.map((member) => (
              <Card key={member.name} className="group overflow-hidden">
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-plum-700">
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
                    {member.credentials}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-sandstone line-clamp-4">
                    {member.bio}
                  </p>

                  {/* Specialty tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {member.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-sandstone"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Teaching Philosophy ------------------------------------------- */}
      <Section overline="Philosophy" title="Our Teaching Approach">
        <AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Studio-Based Learning",
                description:
                  "Students work on real-world projects from day one, developing practical skills alongside theoretical knowledge in our dedicated design studios.",
              },
              {
                title: "Industry Connections",
                description:
                  "Our faculty maintain active professional practices and industry relationships, creating opportunities for guest lectures, site visits, and mentorships.",
              },
              {
                title: "Personalized Mentorship",
                description:
                  "Small class sizes allow our faculty to provide individualized guidance, ensuring every student receives the attention needed to reach their full potential.",
              },
            ].map((item) => (
              <Card key={item.title} variant="glass" className="p-8 text-center">
                <h3 className="font-heading text-lg font-bold text-parchment">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sandstone">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* -- CTA ----------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-parchment md:text-4xl lg:text-5xl">
            Ready to learn from{" "}
            <span className="text-gradient-pink">the best</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sandstone">
            Explore our programs and discover how IDI&apos;s expert faculty can
            help you build the skills for a successful design career.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/programs">
              <Button as="button" variant="primary" size="lg" className="glow-amber">
                Explore Programs
              </Button>
            </Link>
            <Link href="/admissions">
              <Button as="button" variant="secondary" size="lg">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
