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
    name: "Chidimma Abuka",
    title: "LEED AP ID+C, Fitwel Ambassador, WELL AP",
    credentials: "MBA, Concordia University Irvine; MIA, Interior Designers Institute",
    specialization: "Sustainability & Resilience Design",
    bio: "Studio Design Resilience Leader at Gensler and Sustainability Design Coordinator. Brings expertise in sustainable design, wellness-focused environments, and resilient design practices to IDI's curriculum.",
    imageSrc: "/images/faculty/chidimma-abuka.jpg",
    specialties: ["LEED", "WELL", "Sustainable Design"],
  },
  {
    name: "Angela Blake, ASID, IIDA",
    title: "Principal, A. Blake Designs",
    credentials: "BA Interior Design, IDI; BS, Azusa Pacific University",
    specialization: "Entertainment & Residential Design",
    bio: "With over 12 years of experience in the entertainment and electronic software industry, Angela brings a unique blend of creative direction and interior design expertise to her teaching at IDI.",
    imageSrc: "/images/faculty/angela-blake.jpg",
    specialties: ["Residential Design", "Entertainment", "Creative Direction"],
  },
  {
    name: "Hiba Chabani",
    title: "CAD/SketchUp Designer",
    credentials: "BA Interior Design, Interior Designers Institute",
    specialization: "Digital Design & CAD",
    bio: "A CAD/SketchUp Designer at Move West Design and freelance designer, Hiba brings current digital design practice directly from the field into the classroom.",
    imageSrc: "/images/faculty/hiba-chabani.jpg",
    specialties: ["CAD", "SketchUp", "Digital Design"],
  },
  {
    name: "Amy Creager, AIA, LEED AP",
    title: "Principal Architect, Brion Jeannette Architecture",
    credentials: "BA, CSU Long Beach",
    specialization: "Sustainable Architecture",
    bio: "A licensed architect and LEED Accredited Professional specializing in sustainable residential design. As Principal Architect at Brion Jeannette Architecture, Amy brings real-world sustainable building expertise to IDI students.",
    imageSrc: "/images/faculty/amy-creager.jpg",
    specialties: ["Architecture", "LEED", "Sustainable Homes"],
  },
  {
    name: "Allison Crosland, ASID",
    title: "President, Crosland Designs",
    credentials: "MIA, Interior Designers Institute",
    specialization: "High-End Residential & Hospitality",
    bio: "President of Crosland Designs specializing in high-end residential, commercial, and hospitality design. Allison brings extensive luxury design experience to her courses at IDI.",
    imageSrc: "/images/faculty/allison-crosland.jpg",
    specialties: ["Residential", "Hospitality", "Luxury Design"],
  },
  {
    name: "Pete Cruz",
    title: "Principal, SdDESIGNWORKS",
    credentials: "AA, Interior Designers Institute",
    specialization: "Interior Design & Technology",
    bio: "Principal of SdDESIGNWORKS and former Interior Designer at Nicholson Construction. Pete combines interior design expertise with technology background as a Microsoft Certified Systems Engineer.",
    imageSrc: "/images/faculty/pete-cruz.jpg",
    specialties: ["Interior Design", "Technology", "Construction"],
  },
  {
    name: "Reya Duenas, ASID, NCIDQ",
    title: "Founder & Designer, Reya Duenas Design",
    credentials: "MA Interior Design, New England School of Art & Design, Suffolk University",
    specialization: "Hospitality & Commercial Design",
    bio: "With over 13 years of experience in hospitality and commercial design, Reya is the founder of Reya Duenas Design and is NCIDQ certified, bringing professional practice standards directly into the classroom.",
    imageSrc: "/images/faculty/reya-duenas.jpg",
    specialties: ["Hospitality", "Commercial Design", "NCIDQ"],
  },
  {
    name: "Rick Fox, AIA, ICC",
    title: "Licensed Architect",
    credentials: "MA Philosophy, CSU Long Beach; B. Arch, Cal Poly SLO",
    specialization: "Architecture & Building Codes",
    bio: "A licensed architect with an extensive portfolio including the Corporate Headquarters for National Bank of Long Beach, BASF Research & Development Facility, and Xerox Service Training Center.",
    imageSrc: "/images/faculty/rick-fox.jpg",
    specialties: ["Architecture", "Building Codes", "Commercial Projects"],
  },
  {
    name: "Donald Gardner, IIDA",
    title: "Commercial Interior Designer",
    credentials: "BS Interior Design, Woodbury College; Advanced Studies, UCLA; Inst. D'Architecttura, Venice, Italy",
    specialization: "Commercial & Set Design",
    bio: "An accomplished commercial interior designer and CBS Television Studio Set Designer. Notable projects include the Canadian Consulate General Offices and Residences.",
    imageSrc: "/images/faculty/donald-gardner.jpg",
    specialties: ["Commercial Design", "Set Design", "Television"],
  },
  {
    name: "Tamara Gonzalez",
    title: "Founder, Tamara Gonzalez Interiors",
    credentials: "Master of Interior Architecture, Interior Designers Institute",
    specialization: "Interior Design & Historic Preservation",
    bio: "Founder of Tamara Gonzalez Interiors and member of the City of Pomona Historic Preservation Commission. Also serves as IDI's Director of Education.",
    imageSrc: "/images/faculty/tamara-gonzalez.jpg",
    specialties: ["Interior Design", "Historic Preservation", "Education"],
  },
  {
    name: "Rachel Hulan, ASID, IIDA, LEED AP",
    title: "President, Hulan Design",
    credentials: "BA Interior Design, Interior Designers Institute",
    specialization: "Green Building & Sustainable Design",
    bio: "President of Hulan Design and a Certified Green Building Professional. Rachel brings expertise in sustainable design practices and environmental responsibility to IDI's curriculum.",
    imageSrc: "/images/faculty/rachel-hulan.jpg",
    specialties: ["Green Building", "LEED", "Sustainable Design"],
  },
  {
    name: "Kristin Pipal-Keehne",
    title: "Interior Designer",
    credentials: "BA, Interior Designers Institute",
    specialization: "Architectural Interiors",
    bio: "An Interior Designer at Kelly Sutherlin McCleod Architecture, Inc., Kristin brings professional architectural interior design practice to her teaching at IDI.",
    imageSrc: "/images/faculty/kristin-pipal-keehne.jpg",
    specialties: ["Architectural Interiors", "Professional Practice"],
  },
  {
    name: "Megan Keith, ASID",
    title: "Designer & Researcher",
    credentials: "M.Arch, SCI-Arc; BA Anthropology, Scripps College; AA, IDI",
    specialization: "Architecture & Design Research",
    bio: "A freelance designer and researcher specializing in Rhino and Revit, with a focus on LA architectural history research. Megan bridges design technology with historical and cultural understanding.",
    imageSrc: "/images/faculty/megan-keith.jpg",
    specialties: ["Rhino", "Revit", "Design Research"],
  },
  {
    name: "Brad Smith, IIDA",
    title: "Project Designer",
    credentials: "BFA Interior Design, University of Houston",
    specialization: "Healthcare Design",
    bio: "Former IIDA President of the SoCal Chapter (2001) and Project Designer for the Hoag Hospital Breast Center. Published in Interior Design Magazine and Healthcare Design Magazine.",
    imageSrc: "/images/faculty/brad-smith.jpg",
    specialties: ["Healthcare Design", "IIDA", "Project Design"],
  },
  {
    name: "Mark Teale, CID",
    title: "Owner, Teale Architecture",
    credentials: "B. Arch, SCI-Arc",
    specialization: "Architecture & Energy Auditing",
    bio: "Owner of Teale Architecture and a Certified Energy Auditor for the State of California. Notable projects include the Porcelanosa Showroom in Anaheim.",
    imageSrc: "/images/faculty/mark-teale.jpg",
    specialties: ["Architecture", "Energy Auditing", "Showroom Design"],
  },
  {
    name: "Tasha Thayer",
    title: "CAD Designer & Interior Designer",
    credentials: "BA, CSU Long Beach; AA, Interior Designers Institute",
    specialization: "CAD & Residential Design",
    bio: "An ASID Allied member with experience as CAD Designer at Erica Bryen Design, Principal Interior Designer at LH Designs, and Interior Designer at BB Architects Inc.",
    imageSrc: "/images/faculty/tasha-thayer.jpg",
    specialties: ["CAD", "Residential Design", "ASID"],
  },
  {
    name: "Kristen White-Scully, ASID, NKBA",
    title: "Senior Interior Designer",
    credentials: "BS Interior Design, The Art Institute of California",
    specialization: "Kitchen & Bath Design",
    bio: "Interior Designer for West & Northwest Region at Made Renovation and Senior Interior Designer at Ferguson Enterprises. Brings kitchen and bath specialization and NKBA expertise to IDI.",
    imageSrc: "/images/faculty/kristen-white-scully.jpg",
    specialties: ["Kitchen & Bath", "NKBA", "Residential"],
  },
  {
    name: "Michele Prata",
    title: "Principal, Prata Studio Interiors",
    credentials: "BA, CSU Long Beach; AA Interior Design, IDI",
    specialization: "Residential Interior Design",
    bio: "Past President of ASID Orange County with over 20 years as principal of Prata Studio Interiors. Featured on HGTV Designer's Challenge.",
    imageSrc: "/images/faculty/michele-prata.jpg",
    specialties: ["ASID", "Residential Design", "HGTV Featured"],
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
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32 lg:py-40">
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
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
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
      </section>

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facultyMembers.map((member) => (
              <Card key={member.name} className="group overflow-hidden">
                {/* Photo */}
                <div className="relative w-full overflow-hidden bg-plum-700">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    width={254}
                    height={338}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Explore Programs
              </Button>
            </Link>
            <Link href="/admissions">
              <Button as="span" variant="secondary" size="lg">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
