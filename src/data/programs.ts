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
    courses: [
      {
        code: "125",
        name: "Designing Phase I",
        units: 4,
        description:
          "Introduction to the principles and elements of design including color, proportion, rhythm, and balance. Students learn to analyze and compose interior spaces.",
      },
      {
        code: "126",
        name: "Designing Phase II",
        units: 4,
        description:
          "Advanced residential design concepts including material sourcing, design process development, and comprehensive project planning for interior spaces.",
      },
      {
        code: "200",
        name: "Architectural Drafting",
        units: 4,
        description:
          "Manual drafting techniques for floor plans, elevations, sections, and construction details. Establishes foundational technical drawing skills for interior design.",
      },
      {
        code: "201",
        name: "History of Interiors and Architecture I",
        units: 4,
        description:
          "Survey of interior design and architecture from ancient civilizations through the 18th century. Examines cultural influences on the built environment.",
      },
      {
        code: "202",
        name: "History of Interiors and Architecture II",
        units: 4,
        description:
          "Continuation of design history from the 19th century through contemporary movements including Art Deco, Modernism, and current trends.",
      },
      {
        code: "203",
        name: "Residential Design",
        units: 4,
        description:
          "Comprehensive residential design including space planning, furniture layout, kitchen and bath design, and material selection for living spaces.",
      },
      {
        code: "205",
        name: "Commercial Design I",
        units: 4,
        description:
          "Introduction to commercial interior design including offices, retail spaces, and hospitality environments. Covers codes, ADA requirements, and specifications.",
      },
      {
        code: "206",
        name: "Commercial Design II",
        units: 4,
        description:
          "Advanced commercial design projects emphasizing programming, project management, and professional documentation for larger-scale environments.",
      },
      {
        code: "207",
        name: "Materials Specification",
        units: 4,
        description:
          "Study of interior materials including selection, specification, and application. Covers aesthetics, performance, sustainability, and budget considerations.",
      },
      {
        code: "208",
        name: "Construction Principles",
        units: 4,
        description:
          "Fundamentals of building construction including structural systems, HVAC, plumbing, and electrical systems as they relate to interior design.",
      },
      {
        code: "209",
        name: "Design Thinking",
        units: 4,
        description:
          "Creative problem-solving frameworks, critical thinking strategies, and evidence-based design approaches for interior design practice.",
      },
      {
        code: "210",
        name: "Color",
        units: 4,
        description:
          "In-depth study of color theory, color systems, and color psychology as applied to interior design. Practical application in residential and commercial projects.",
      },
      {
        code: "212",
        name: "Perspective",
        units: 4,
        description:
          "One-point, two-point, and three-point perspective drawing techniques for interior design presentations and client communication.",
      },
      {
        code: "215",
        name: "Spaceplanning",
        units: 4,
        description:
          "Study of spatial programming, adjacency planning, circulation patterns, and furniture arrangement for functional interior environments.",
      },
      {
        code: "216",
        name: "SketchUp",
        units: 4,
        description:
          "3D modeling and visualization using SketchUp software. Students create, iterate, and present interior design concepts in three dimensions.",
      },
      {
        code: "217",
        name: "Business Principles",
        units: 4,
        description:
          "Business fundamentals for interior designers including marketing, client management, contracts, ethics, and project management.",
      },
      {
        code: "218",
        name: "Textiles",
        units: 4,
        description:
          "Study of textile fibers, weaves, finishes, and dyes. Specification of fabrics for residential and commercial interior applications.",
      },
      {
        code: "220",
        name: "Healthcare Design",
        units: 4,
        description:
          "Specialized interior design for healthcare environments including hospitals, clinics, and wellness centers. Covers evidence-based design and patient safety.",
      },
      {
        code: "221",
        name: "Photoshop",
        units: 4,
        description:
          "Adobe Photoshop for interior design rendering, mood boards, and visual presentation techniques.",
      },
      {
        code: "222",
        name: "Building Codes",
        units: 4,
        description:
          "Study of building codes, fire codes, ADA standards, and life safety requirements applicable to interior design projects.",
      },
      {
        code: "223",
        name: "Environmental Design",
        units: 4,
        description:
          "Sustainable design principles including LEED, sustainable materials, energy efficiency, and indoor air quality for interior environments.",
      },
      {
        code: "225",
        name: "Computer-Aided Drafting I",
        units: 6,
        description:
          "AutoCAD fundamentals for producing precise floor plans, elevations, sections, and construction details for interior design projects.",
      },
    ],
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
    courses: [
      {
        code: "421",
        name: "Computer-Aided Drafting II",
        units: 4,
        description:
          "Advanced AutoCAD techniques including 3D modeling, photorealistic rendering, and complex construction document production.",
      },
      {
        code: "429",
        name: "Historic Preservation Thesis",
        units: 8,
        description:
          "Research and design of an interior preservation plan for a historically significant building. Combines historical research with design application.",
      },
      {
        code: "430",
        name: "Career Study",
        units: 6,
        description:
          "Professional development including portfolio refinement, resume preparation, networking strategies, and career trajectory planning in interior design.",
      },
      {
        code: "434",
        name: "Senior Show/Portfolio Prep",
        units: 6,
        description:
          "Curation and presentation of a professional portfolio for design industry review. Preparation for the senior exhibition.",
      },
      {
        code: "435",
        name: "Revit Architecture",
        units: 4,
        description:
          "Building Information Modeling (BIM) using Revit for parametric modeling and intelligent construction document generation.",
      },
      {
        code: "440",
        name: "Senior Studio",
        units: 4,
        description:
          "Capstone commercial design project encompassing the full design process from concept development through construction documents and final presentation.",
      },
      {
        code: "441",
        name: "Kitchen and Bath Design",
        units: 4,
        description:
          "Specialized design for kitchens and bathrooms following NKBA guidelines. Covers cabinetry, fixtures, appliances, and universal design principles.",
      },
      {
        code: "442",
        name: "Digital Presentation",
        units: 5,
        description:
          "Advanced digital presentation tools and techniques for creating compelling visual narratives and client-ready design presentations.",
      },
      {
        code: "443",
        name: "Advanced SketchUp",
        units: 4,
        description:
          "Advanced SketchUp techniques including photorealistic rendering, animation, VR walkthroughs, and plugin integration for immersive design visualization.",
      },
    ],
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
    courses: [
      {
        code: "502",
        name: "Design Project Part 1",
        units: 4.5,
        description:
          "Research, site analysis, and schematic design development for a graduate-level interior architecture project.",
      },
      {
        code: "503",
        name: "Research Methods Part 1",
        units: 3,
        description:
          "Introduction to qualitative and quantitative research methods, literature review, and thesis proposal development.",
      },
      {
        code: "504",
        name: "Graduate Seminar Special Topics",
        units: 6.5,
        description:
          "Exploration of contemporary issues in interior architecture including sustainability, wellness, technology, and global design practice.",
      },
      {
        code: "505",
        name: "Design Project Part 2",
        units: 4.5,
        description:
          "Design development phase including spatial refinement, material palette selection, and technical documentation.",
      },
      {
        code: "506",
        name: "Research Methods Part 2",
        units: 3,
        description:
          "Data collection, analysis, and synthesis connecting research findings to design decisions. Thesis development.",
      },
      {
        code: "507",
        name: "Graduate Seminar Professional Practices",
        units: 6.5,
        description:
          "Study of firm management, project delivery, legal frameworks, ethical practice, and leadership in interior architecture.",
      },
      {
        code: "508",
        name: "Design Project Part 3",
        units: 7.5,
        description:
          "Completion of construction documents, final project presentation, and comprehensive project book compilation.",
      },
      {
        code: "509",
        name: "Research Methods Part 3",
        units: 3,
        description:
          "Thesis writing, defense, and contribution of original research to the field of interior architecture.",
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
