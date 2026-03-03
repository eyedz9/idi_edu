/** Program definitions: Certificate, Associate, Bachelor's, and Master's with full curriculum data. */
import type { Program } from "@/types";

export const programs: Program[] = [
  // ─── Certificate Course ──────────────────────────────────────────────────────
  {
    slug: "certificate",
    name: "Avocational Certificate Course in Interior Design",
    shortName: "Avocational Certificate Course",
    degreeType: "Certificate of Completion",
    duration: "12 weeks (3 months)",
    creditUnits: "8 (foundation/avocational)",
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
    fieldTrips: [
      { title: "Field Trip Stonemill Design Center" },
      { title: "Field Trip Laguna Design Center" },
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
      "Two years to fluency in the language of design. This is where you stop admiring interiors and start creating them. Build technical skills in drafting, codes, and construction — then channel them into residential projects that feel as good as they look. You'll graduate speaking the industry's language and designing its future.",
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
    creditUnits: "180 quarter units (AA 90 + BA 45 + 45 GE transfer)",
    tuition: 19950,
    totalCharges: 20850,
    totalEstimatedCost: 23350,
    description:
      "The degree that opens every door in the design industry. With CIDA accreditation behind it, this BA signals to employers, licensure boards, and clients that you've mastered the craft at the highest standard. Tackle complex commercial and residential projects. Command advanced technology. Graduate with a portfolio — and a credential — that commands respect.",
    isAccredited: true,
    accreditor: "ACCSC",
    cidaAccredited: true,
    prerequisite:
      "*The prerequisite for earning the Bachelor of Arts in Interior Design is completion of the Associate of Arts Degree in Interior Design and payment of the tuition.",
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
    admissionRequirements:
      "Requires a Bachelor of Arts in interior design or architecture from an accredited US institution, portfolio review, and personal interview.",
    schedule:
      "Hybrid: Mondays attend the online live streaming interactive lecture. Thursdays attend in person to develop your design project and research skills.",
    careerOutcomes: [
      "Senior design and design director roles at leading firms",
      "Complex project management from concept through completion",
      "Design education and academic positions",
      "Independent consulting and design entrepreneurship",
      "Research and innovation in the built environment",
    ],
    courses: [
      {
        code: "501",
        name: "GRADUATE SEMINAR, THE ARTS",
        units: 6.5,
        description:
          "This multi-thematic seminar explores topics central to the decorative arts and to connoisseurship. Specialized subjects will be studied in-depth, beyond the scope of the bachelor\u2019s degree. Subjects include antiques, silver appraisal, and glass. The art of collecting fine art through consultants will include contemporary living artists and traditional artists. Guest speakers will include antique and art appraisers and fine art consultants. Field trips will be taken to the Getty Collection in Malibu, the Getty Museum in Los Angeles, and the Los Angeles County Museum of Art, where students will receive lectures from faculty. The course will include lectures, field trips, and workshops.",
      },
      {
        code: "502",
        name: "DESIGN PROJECT, PART 1",
        units: 4.5,
        description:
          "Students research, develop, and analyze data and design criteria for a substantial design project of their choice involving diverse populations. Students research case studies, project types, and relevant environment and behavior theory. This advanced studio requires students to integrate and synthesize the skills and knowledge gained throughout their studies to create a comprehensive project, which may include presentation drawings, models, material and furniture boards, detail drawings, and specifications. This class is Part 1 in a series of three classes that are integrated with their research thesis.",
      },
      {
        code: "503",
        name: "RESEARCH METHODS, PART 1",
        units: 3.0,
        description:
          "This research-based course lays the foundation for the thesis to be completed. In consultation with faculty, students will select an appropriate project type, determine the site to be used, and write a project statement and program outline. Students will learn advanced methods of research and the appropriate methods of writing to support their research.",
      },
      {
        code: "504",
        name: "GRADUATE SEMINAR, SPECIAL TOPICS",
        units: 6.5,
        description:
          "This seminar promotes the discussion of contemporary issues in design and advanced interior design and architectural theory and criticism conducted through case studies and readings from modern commentary and research. Individuals from the industry will be invited to participate in panel discussions on contemporary topics offering students opportunities for interaction with practicing professionals. Topics for discussion will also include global theories referencing concepts for improvement of not only the profession but of society on a global level. Microtrends, aging in place, and sustainable environments are additional topics that will be explored. The course will include lectures, panel discussions, field trips, and workshops.",
      },
      {
        code: "505",
        name: "DESIGN PROJECT, PART 2",
        units: 4.5,
        description:
          "This course is the second in the thesis capstone project class sequence of a student-generated project document. The course focuses on the further design development of the project and the continuation of research and analysis for thesis texts. A portfolio/sketchbook and completed thesis document are required, as are various assignments. Students are required to create a product or merchandising concept that will be incorporated into their final capstone project.",
      },
      {
        code: "506",
        name: "RESEARCH METHODS, PART 2",
        units: 3.0,
        description:
          "This course is the second in a series of research methods exposing students to a variety of ways to obtain new knowledge that directly relates to their thesis. Practical research methods and writing are studied. Students\u2019 research will be reviewed and critiqued by faculty.",
      },
      {
        code: "507",
        name: "GRADUATE SEMINAR, PROFESSIONAL PRACTICES",
        units: 6.5,
        description:
          "Last, in the three-part series, this course concentrates on professional practices and explores major areas related to the practice of interior design and the designer\u2019s role in the organization and management of the firm. Legal documents and issues related to professional practice will be discussed. Individuals from the profession will be guest speakers, and there will be panel discussions from designers in the industry. Field trips to workrooms, fabricators, and design resources are part of this seminar. The course will include lectures, field trips, and workshops.",
      },
      {
        code: "508",
        name: "DESIGN PROJECT, PART 3",
        units: 7.5,
        description:
          "Students finalize their capstone project. Incorporation of the capstone project into the student\u2019s portfolio will culminate in a student exhibit of this capstone project. Opening the exhibit will include a student verbal presentation of the capstone project, which may include multimedia effects. The presentation will be followed by a reception where students, faculty, and friends are invited.",
      },
      {
        code: "509",
        name: "RESEARCH METHODS, PART 3",
        units: 3.0,
        description:
          "The final, in a series of three classes, on the preparation of research for the student\u2019s final thesis project and paper. Emphasis is placed on proper formatting of the document in integrating coursework for the preparation of the written thesis document and final project.",
      },
    ],
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
