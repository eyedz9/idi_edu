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
          "Your design vocabulary starts here. Dive into the principles and elements that make a room work — color, proportion, rhythm, balance. Learn to read a space the way a musician reads a score, then start composing your own.",
      },
      {
        code: "126",
        name: "Designing Phase II",
        units: 4,
        description:
          "Push deeper. Tackle more ambitious residential concepts, source materials with confidence, and develop the kind of design process that turns a blank floor plan into a living, breathing space.",
      },
      {
        code: "200",
        name: "Architectural Drafting",
        units: 4,
        description:
          "Floor plans, elevations, sections, details — the technical drawings that turn ideas into buildable reality. Master the manual drafting conventions that every design professional needs in their toolkit.",
      },
      {
        code: "201",
        name: "History of Interiors and Architecture I",
        units: 4,
        description:
          "From Egyptian temples to Georgian townhouses, trace how civilizations shaped the spaces they lived in. Understand the cultural DNA embedded in every column, arch, and textile pattern from antiquity through the 18th century.",
      },
      {
        code: "202",
        name: "History of Interiors and Architecture II",
        units: 4,
        description:
          "Bauhaus. Art Deco. Mid-century modern. Minimalism. Follow the revolutions that brought us from the 19th century to today — and discover how the past keeps showing up in the most forward-looking designs.",
      },
      {
        code: "203",
        name: "Residential Design",
        units: 4,
        description:
          "Homes are personal. They're emotional. And designing one well requires mastering space planning, furniture layout, kitchen and bath logic, and material choices that serve both beauty and daily life.",
      },
      {
        code: "205",
        name: "Commercial Design I",
        units: 4,
        description:
          "Step beyond the home. Design offices that fuel productivity, retail spaces that move product, and hospitality environments that make guests linger. Learn the codes, ADA requirements, and specs that commercial work demands.",
      },
      {
        code: "206",
        name: "Commercial Design II",
        units: 4,
        description:
          "Scale up. Take on larger commercial environments where programming, project management, and professional documentation separate the good designers from the great ones.",
      },
      {
        code: "207",
        name: "Materials Specification",
        units: 4,
        description:
          "Marble or porcelain? Hardwood or engineered? Every surface tells a story. Learn to select, specify, and defend your material choices — balancing aesthetics, performance, sustainability, and budget.",
      },
      {
        code: "208",
        name: "Construction Principles",
        units: 4,
        description:
          "Understand what's behind the walls. Structural systems, HVAC, plumbing, electrical — the invisible architecture that shapes every design decision you'll ever make.",
      },
      {
        code: "209",
        name: "Design Thinking",
        units: 4,
        description:
          "Great design solves problems you didn't know you had. Develop the creative frameworks, critical thinking muscle, and evidence-based strategies that separate decorating from designing.",
      },
      {
        code: "210",
        name: "Color",
        units: 4,
        description:
          "Color changes everything — mood, proportion, temperature, emotion. Go deep into color theory, color systems, and the psychology of hue. Then put it to work in spaces that feel exactly right.",
      },
      {
        code: "212",
        name: "Perspective",
        units: 4,
        description:
          "Learn to draw what the eye actually sees. One-point, two-point, three-point — master the perspective techniques that make your design presentations leap off the page.",
      },
      {
        code: "215",
        name: "Spaceplanning",
        units: 4,
        description:
          "How people move through a room matters as much as how it looks. Study programming, adjacency, circulation, and furniture arrangement — the invisible choreography of well-designed space.",
      },
      {
        code: "216",
        name: "SketchUp",
        units: 4,
        description:
          "Build your designs in three dimensions before a single nail gets hammered. Learn SketchUp's modeling tools to visualize, iterate, and present interior concepts that clients can walk through virtually.",
      },
      {
        code: "217",
        name: "Business Principles",
        units: 4,
        description:
          "Talent gets you noticed. Business sense gets you paid. Cover the essentials — marketing, client management, contracts, ethics, and the project management skills that keep your practice thriving.",
      },
      {
        code: "218",
        name: "Textiles",
        units: 4,
        description:
          "Fabric is where design gets tactile. Study fibers, weaves, finishes, and dyes. Learn to specify textiles that satisfy the hand, the eye, the code inspector, and the client — all at once.",
      },
      {
        code: "220",
        name: "Healthcare Design",
        units: 4,
        description:
          "Design that heals. Explore the specialized demands of hospitals, clinics, and wellness centers — where evidence-based design, infection control, and human comfort converge.",
      },
      {
        code: "221",
        name: "Photoshop",
        units: 4,
        description:
          "Turn raw images into polished presentations. Master Photoshop for design rendering, mood boards, and the visual storytelling that wins client buy-in.",
      },
      {
        code: "222",
        name: "Building Codes",
        units: 4,
        description:
          "Codes aren't constraints — they're the rules of the game. Learn building codes, fire codes, ADA standards, and life safety requirements so your designs are as safe as they are stunning.",
      },
      {
        code: "223",
        name: "Environmental Design",
        units: 4,
        description:
          "Design with the planet in mind. Explore LEED principles, sustainable materials, energy efficiency, and indoor air quality — because beautiful spaces should never come at the earth's expense.",
      },
      {
        code: "225",
        name: "Computer-Aided Drafting I",
        units: 6,
        description:
          "AutoCAD is the industry's lingua franca. Learn to produce precise floor plans, elevations, sections, and details using the software that every design firm expects you to know.",
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
          "Go beyond flat drawings. Build 3D models, generate photorealistic renders, and produce construction documents complex enough for the most demanding projects — all in AutoCAD.",
      },
      {
        code: "429",
        name: "Historic Preservation Thesis",
        units: 8,
        description:
          "Choose a historically significant building. Research its bones, its story, its cultural weight. Then design an interior preservation plan that honors the past while making the space breathe again.",
      },
      {
        code: "430",
        name: "Career Study",
        units: 6,
        description:
          "Map your path in the industry. Refine your portfolio, sharpen your resume, build your network, and explore the career trajectories that match your ambition — from boutique studios to global firms.",
      },
      {
        code: "434",
        name: "Senior Show/Portfolio Prep",
        units: 6,
        description:
          "This is your debut. Curate your strongest work, polish every detail, and prepare a portfolio presentation for design professionals who could become your future employers or collaborators.",
      },
      {
        code: "435",
        name: "Revit Architecture",
        units: 4,
        description:
          "The future of design documentation is BIM. Learn Revit's parametric modeling, generate intelligent construction documents, and master the workflow that top firms now require.",
      },
      {
        code: "440",
        name: "Senior Studio",
        units: 4,
        description:
          "Your capstone. One comprehensive commercial project that proves you can handle the full design process — from concept through construction documents to a presentation that would win a client.",
      },
      {
        code: "441",
        name: "Kitchen and Bath Design",
        units: 4,
        description:
          "Kitchens and bathrooms are where design meets daily ritual. Master NKBA guidelines, cabinetry, fixtures, appliances, and universal design to create the rooms people use most — and remember best.",
      },
      {
        code: "442",
        name: "Digital Presentation",
        units: 5,
        description:
          "A great design deserves a great pitch. Learn advanced digital tools to build visual narratives so compelling that clients don't just approve your concept — they fall in love with it.",
      },
      {
        code: "443",
        name: "Advanced SketchUp",
        units: 4,
        description:
          "Push SketchUp to its limits. Photorealistic rendering, animation, VR walkthroughs, advanced plugins — create immersive experiences that let clients feel a space before it exists.",
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
          "Identify a real design problem. Analyze the site. Develop your program. Begin schematic design for an interior architecture project ambitious enough to test — and prove — your graduate-level thinking.",
      },
      {
        code: "503",
        name: "Research Methods Part 1",
        units: 3,
        description:
          "Learn to build knowledge, not just absorb it. Master qualitative and quantitative research methods, dissect existing literature, and shape the thesis proposal that will anchor your graduate work.",
      },
      {
        code: "504",
        name: "Graduate Seminar Special Topics",
        units: 6.5,
        description:
          "Engage with the questions driving the profession right now — sustainability, wellness, technology, global practice. This seminar puts you in conversation with the ideas that are reshaping interior architecture.",
      },
      {
        code: "505",
        name: "Design Project Part 2",
        units: 4.5,
        description:
          "Move from schematic to design development. Refine your spatial solutions, lock in your material palette, and produce technical documentation that proves your concept isn't just beautiful — it's buildable.",
      },
      {
        code: "506",
        name: "Research Methods Part 2",
        units: 3,
        description:
          "Collect your data. Analyze your findings. Start connecting the dots between your research and the design decisions it informs. Your thesis is taking shape.",
      },
      {
        code: "507",
        name: "Graduate Seminar Professional Practices",
        units: 6.5,
        description:
          "Design talent opens the door. Professional acumen keeps you in the room. Study firm management, project delivery, legal frameworks, ethical practice, and the leadership skills that define a design career's upper trajectory.",
      },
      {
        code: "508",
        name: "Design Project Part 3",
        units: 7.5,
        description:
          "Bring it home. Complete your construction documents, deliver a final presentation, and compile a comprehensive project book that represents the best work of your graduate career.",
      },
      {
        code: "509",
        name: "Research Methods Part 3",
        units: 3,
        description:
          "Write your thesis. Defend your findings. Contribute original thinking to the field of interior architecture. This is where you go from practitioner to thought leader.",
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
