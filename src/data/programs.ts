/** Program definitions: Certificate, Associate, Bachelor's, and Master's with full curriculum data. */
import type { Program } from "@/types";

export const programs: Program[] = [
  // ─── Certificate Course ──────────────────────────────────────────────────────
  {
    slug: "certificate",
    name: "Certificate Course in Interior Design",
    shortName: "Certificate Course",
    degreeType: "Certificate of Completion",
    duration: "12 weeks (3 months)",
    creditUnits: "10 (foundation/avocational)",
    tuition: 2400,
    totalCharges: 2795,
    totalEstimatedCost: 3045,
    description:
      "Twelve weeks. One decision. A whole new creative direction. This is where your design instinct meets real skill — fast. Tour Southern California's most coveted design centers with insiders who know every showroom by heart. Hear from guest designers who've built the rooms you've bookmarked. Whether you're redesigning your own home or testing the waters before diving deeper, this is your launchpad.",
    isAvocational: true,
    onlineAvailable: true,
    schedule:
      "May 11, 2026 \u2013 July 30, 2026. In-person: Tues & Wed 9AM-11:30AM OR Tues & Thurs 9AM-11:30AM, Tues 6pm-8:30pm Studio. Online: Tue & Thurs 6PM-8:30PM.",
    isAccredited: true,
    accreditor: "ACCSC",
    careerOutcomes: [],
    careerNote:
      "This program is designed for personal enrichment and exploration of interior design. It is not designed to lead to employment. Students interested in pursuing design as a career should consider our degree programs.",
    courses: [],
    lectures: [
      { title: "Beautiful Kitchens" },
      { title: "The Luxury Bathroom" },
      { title: "Great Windows and Walls" },
      { title: "Field Trip Stonemill Design Center" },
      { title: "Field Trip Laguna Design Center" },
      { title: "Magic of Color" },
      { title: "The Natural and Healthy Home" },
      { title: "History of the Chair" },
      { title: "Outdoor Spaces" },
      { title: "The High-Tech Home" },
      { title: "Indoor Plantscaping" },
      { title: "Design Resources" },
      { title: "Floors That Rock" },
      { title: "Home Staging" },
      { title: "Principles & Elements of Design" },
      { title: "Planning the Space" },
    ],
    studios: [
      { title: "Tools and Equipment" },
      { title: "Drafting and Spaceplanning" },
      { title: "Color Systems and Solutions" },
      { title: "Furniture Specifications" },
      { title: "Textile Specifications" },
      { title: "Concept Development" },
      { title: "Finalizing the Concept" },
      { title: "Design Concept" },
    ],
  },

  // ─── Associate of Arts Degree ────────────────────────────────────────────────
  {
    slug: "associate-of-arts",
    name: "Associate of Arts Degree in Interior Design",
    shortName: "AA in Interior Design",
    degreeType: "Associate of Arts",
    duration: "24\u201348 months",
    creditUnits: "90 quarter units (60 semester equivalent)",
    tuition: 39900,
    totalCharges: 40600,
    totalEstimatedCost: 43100,
    description:
      "Two years to fluency in the language of design. This is where you stop admiring interiors and start creating them. Build technical chops in drafting, codes, and construction — then channel them into residential projects that feel as good as they look. You'll graduate speaking the industry's language and sketching its future.",
    isAccredited: true,
    accreditor: "ACCSC",
    careerOutcomes: [
      "Model home staging and residential merchandising",
      "Set design for film, television, and events",
      "Office and workplace design",
      "Retail, restaurant, and hospitality design",
      "Interior rendering and visualization",
      "Furniture design and custom fabrication",
      "Textile and wallcovering specification",
      "Lighting design and specification",
    ],
    courses: [],
  },

  // ─── Bachelor of Arts Degree ─────────────────────────────────────────────────
  {
    slug: "bachelor-of-arts",
    name: "Bachelor of Arts Degree in Interior Design",
    shortName: "BA in Interior Design",
    degreeType: "Bachelor of Arts",
    duration: "30\u201354 months",
    creditUnits: "180 quarter units (120 semester; includes 45 GE transfer)",
    tuition: 19950,
    totalCharges: 20850,
    totalEstimatedCost: 23350,
    description:
      "The degree that opens every door in the design industry. With CIDA accreditation behind it, this BA signals to employers, licensure boards, and clients that you've mastered the craft at the highest standard. Tackle complex commercial and residential projects. Command advanced technology. Graduate with a portfolio — and a credential — that commands respect.",
    isAccredited: true,
    accreditor: "ACCSC",
    cidaAccredited: true,
    requiresGE: "45 quarter units of General Education from an accredited institution",
    careerOutcomes: [
      "Hospitality design for hotels, resorts, and boutique properties",
      "Healthcare and wellness facility design",
      "Corporate and workplace interior design",
      "Retail design and visual merchandising",
      "Set design for film, television, and events",
      "Interior rendering and photorealistic visualization",
      "Lighting design and architectural lighting",
      "Furniture and product design",
      "Textile and wallcovering design for the trade",
    ],
    courses: [],
  },

  // ─── Master of Interior Architecture ─────────────────────────────────────────
  {
    slug: "master-interior-architecture",
    name: "Master of Interior Architecture",
    shortName: "MIA",
    degreeType: "Master's Degree",
    duration: "12\u201315 months (3\u20134 terms)",
    creditUnits: "45 quarter units",
    tuition: 22500,
    totalCharges: 22600,
    totalEstimatedCost: 25100,
    description:
      "For designers who want to shape the built environment — not just fill it. This is graduate-level thinking applied to interior architecture: research-driven, conceptually rigorous, and aimed at the designers who will lead the profession forward. In 12 to 15 months, deepen your expertise, defend an original thesis, and emerge ready to direct, teach, or consult at the highest level.",
    isAccredited: true,
    accreditor: "ACCSC",
    minimumGPA: 3.0,
    partTimeOnly: true,
    admissionRequirements:
      "Requires a Bachelor of Arts in interior design or architecture from an accredited US institution, portfolio review, and personal interview.",
    schedule: "Part-time, in-class only, Monday and Thursday evenings.",
    careerOutcomes: [
      "Senior design and design director roles at leading firms",
      "Complex project management from concept through completion",
      "Design education and academic positions",
      "Independent consulting and design entrepreneurship",
      "Research and innovation in the built environment",
    ],
    courses: [],
  },
];

/** Helper: find a program by its slug */
export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

/** Helper: get all degree programs (excludes certificate) */
export function getDegreePrograms(): Program[] {
  return programs.filter((p) => !p.isAvocational);
}

/** Helper: get only degree-granting programs for the footer / nav */
export function getProgramNavItems() {
  return programs.map((p) => ({
    label: p.shortName,
    href: `/programs/${p.slug}`,
  }));
}
