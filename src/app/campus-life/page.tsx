import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contactInfo, fullAddress } from "@/data/contact";
import { SITE_NAME, PHONE } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animations";

export const metadata: Metadata = {
  title: "Campus Life",
  description: `Experience life at ${SITE_NAME} in Newport Beach, California. Student organizations, campus facilities, and the inspiration of Southern California's design community.`,
  alternates: { canonical: "/campus-life" },
};

const facilities = [
  {
    name: "Design Studios",
    description:
      "Purpose-built studio spaces where students work on projects using professional-grade materials and tools, fostering hands-on learning in a collaborative environment.",
    imageSrc: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=75",
  },
  {
    name: "Resource Library",
    description:
      "A curated collection of design books, trade publications, material samples, and digital resources to support student research and creative exploration.",
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75",
  },
  {
    name: "Computer Lab",
    description:
      "Equipped with industry-standard software including AutoCAD, SketchUp, and the Adobe Creative Suite for digital design and presentation work.",
    imageSrc: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=75",
  },
  {
    name: "Materials Room",
    description:
      "An extensive collection of fabric, finish, and material samples from leading manufacturers, giving students hands-on experience with professional specification.",
    imageSrc: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=75",
  },
];

const studentOrganizations = [
  {
    name: "ASID Student Chapter",
    fullName: "American Society of Interior Designers",
    description:
      "IDI's student chapter of ASID connects students with the nation's largest professional organization for interior designers. Members gain access to industry events, networking opportunities, design competitions, and mentorship from practicing ASID professionals.",
    imageSrc: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=75",
  },
  {
    name: "IIDA Student Chapter",
    fullName: "International Interior Design Association",
    description:
      "The IIDA student chapter at IDI provides connections to a global network of design professionals. Students participate in IIDA events, explore commercial and contract design career paths, and build relationships with industry leaders in commercial interiors.",
    imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=75",
  },
  {
    name: "NKBA Student Chapter",
    fullName: "National Kitchen & Bath Association",
    description:
      "The NKBA Student Chapter is the leading trade association for the kitchen and bath industry. Being part of the NKBA Student Chapter helps students build industry connections early, understand current trends and codes, and transition more smoothly into professional membership after graduation.",
    imageSrc: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=75",
  },
  {
    name: "NEWH Student Chapter",
    fullName: "Network of Executive Women in Hospitality",
    description:
      "NEWH is an international organization dedicated to hospitality, interior design, and related industries. The NEWH Student Chapter connects students pursuing careers in hospitality design with industry professionals and real-world opportunities. Membership provides access to scholarships, grant opportunities, mentorship, and career guidance.",
    imageSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=75",
  },
];

const galleryImages = Array.from({ length: 20 }, (_, i) => ({
  src: `/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `IDI student design project ${i + 1}`,
}));

export default function CampusLifePage() {
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
          <li className="text-parchment font-medium">Campus Life</li>
        </ol>
      </nav>

      {/* -- Hero ---------------------------------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32 lg:py-40">
        {/* Unsplash hero image — asymmetric right */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Luxury home exterior with Newport Beach coastal design inspiration"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient overlays — asymmetric like homepage */}
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/85 to-plum-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-plum-900/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            Student Experience
          </p>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            Life at <span className="text-gradient-pink">IDI</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            Nestled in Newport Beach, California, IDI offers a creative,
            inspiring environment where design students thrive surrounded by one
            of the West Coast&apos;s most vibrant design communities.
          </p>
        </div>
      </section>

      {/* -- Newport Beach Location ---------------------------------------- */}
      <Section
        overline="Location"
        title="Newport Beach: Where Design Lives"
      >
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-sandstone">
                Newport Beach is far more than a beautiful coastal city — it is
                one of Southern California&apos;s premier design destinations.
                Our campus at {fullAddress} places students in
                the heart of a community where world-class design is part of
                everyday life.
              </p>
              <p className="text-base leading-relaxed text-sandstone">
                Students have direct access to major design centers including the
                Laguna Design Center and Stonemill Design Center, luxury
                showrooms, and a thriving network of working interior designers
                and architects. The surrounding community of upscale residential
                and commercial projects provides endless inspiration and
                real-world learning opportunities.
              </p>
              <p className="text-base leading-relaxed text-sandstone">
                Beyond design, Newport Beach offers beaches, art galleries, fine
                dining, and a quality of life that enriches the student
                experience. The creative energy of the area infuses every aspect
                of the IDI learning environment.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Badge variant="accent">Design Centers</Badge>
                <Badge variant="accent">Luxury Showrooms</Badge>
                <Badge variant="accent">Coastal Inspiration</Badge>
                <Badge variant="accent">Art Galleries</Badge>
              </div>
            </div>

            {/* Newport Beach image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Luxury home exterior representing the Newport Beach design community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-xs font-medium text-parchment/80">
                  {fullAddress}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Housing Disclosure --------------------------------------------- */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border-l-4 border-amber-500 bg-plum-800/40 p-6">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-500">
            Housing Disclosure
          </h3>
          <p className="text-sm leading-relaxed text-sandstone">
            Interior Designers Institute does not have dormitory facilities under
            its control and has no responsibility to find or assist a student in
            finding housing. Students are encouraged to research housing options
            in the Newport Beach and surrounding areas independently.
          </p>
        </div>
      </div>

      {/* -- Student Organizations ----------------------------------------- */}
      <Section
        bg="light"
        overline="Community"
        title="Student Organizations"
        subtitle="Connect with professional design organizations while still in school."
      >
        <AnimatedSection stagger={0.12}>
          <div className="grid gap-8 md:grid-cols-2">
            {studentOrganizations.map((org) => (
              <Card key={org.name} className="group flex flex-col overflow-hidden hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(176,108,255,0.12)] transition-all duration-300">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={org.imageSrc}
                    alt={org.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <Badge variant="jade" className="mb-4 self-start">
                    {org.name}
                  </Badge>
                  <h3 className="font-heading text-xl font-bold text-parchment">
                    {org.fullName}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-sandstone">
                    {org.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Campus Gallery ------------------------------------------------ */}
      <Section overline="Gallery" title="Campus Gallery">
        <AnimatedSection stagger={0.08}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* -- Campus Facilities --------------------------------------------- */}
      <Section
        bg="dark"
        grain
        overline="Facilities"
        title="Campus Facilities"
        subtitle="Our Newport Beach campus features purpose-built spaces designed to support creative learning."
      >
        <AnimatedSection stagger={0.1}>
          <div className="grid gap-8 sm:grid-cols-2">
            {facilities.map((facility) => (
              <Card key={facility.name} variant="glass" className="group flex flex-col overflow-hidden">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={facility.imageSrc}
                    alt={facility.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-pink-500">
                    {facility.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sandstone">
                    {facility.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* -- CTA: Schedule Visit ------------------------------------------- */}
      <section className="relative overflow-hidden mesh-aurora grain py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl lg:text-4xl">
            See our campus <span className="text-gradient-pink">for yourself</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sandstone">
            Schedule a visit to tour our Newport Beach campus, meet faculty, and
            experience the IDI community firsthand.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Schedule a Campus Visit
              </Button>
            </Link>
            <Button
              as="a"
              href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
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
