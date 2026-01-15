import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FAQ } from '@/components/ui/FAQ';
import { CheckCircle2, Clock, DollarSign, GraduationCap, Award, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bachelor of Arts in Interior Design - CIDA Accredited',
  description: 'CIDA-accredited Bachelor of Arts in Interior Design at IDI Newport Beach. Professional degree preparing you for NCIDQ exam and licensure. 30-54 months, $61,450 total tuition. 88% graduation rate.',
  keywords: [
    'CIDA accredited interior design California',
    'bachelor interior design Orange County',
    'NCIDQ exam preparation',
    'interior design licensure California',
    'professional interior design degree',
    'best CIDA interior design programs',
    'interior design bachelor degree Newport Beach',
  ],
  openGraph: {
    title: 'CIDA-Accredited Bachelor of Arts in Interior Design',
    description: 'Professional interior design degree. CIDA accredited. Prepare for NCIDQ exam and licensure. 88% graduation rate.',
    url: 'https://idi.edu/programs/bachelor',
    type: 'website',
  },
};

// CIDA Benefits (with accurate stats from content.md)
const cidaBenefits = [
  {
    stat: '60%+',
    description: 'of employers prefer CIDA program graduates',
  },
  {
    stat: '16%',
    description: 'higher NCIDQ exam scores for CIDA graduates',
  },
  {
    stat: '77-94%',
    description: 'of CIDA graduates employed in field within 6 months',
  },
  {
    stat: '172%',
    description: 'higher average salaries for jobs requiring NCIDQ certification',
  },
];

// BA-Specific Curriculum (from content.md) - Includes all AA courses PLUS these 9 courses
const baCurriculum = [
  { code: '421', title: 'Computer-Aided Drafting II', units: 4 },
  { code: '429', title: 'Historic Preservation Thesis', units: 8 },
  { code: '430', title: 'Career Study/Internship', units: 6 },
  { code: '434', title: 'Senior Show/Portfolio Preparation and Web Design', units: 6 },
  { code: '435', title: 'Revit Architecture', units: 4 },
  { code: '440', title: 'Senior Studio', units: 4 },
  { code: '441', title: 'Kitchen and Bath Design', units: 4 },
  { code: '442', title: 'Digital Presentation (TinkerCad, InDesign, SketchUp Animation)', units: 5 },
  { code: '443', title: 'Advanced SketchUp', units: 4 },
];

const programHighlights = [
  'CIDA accredited since 1992',
  '180 quarter units (120 semester equivalent)',
  '45 quarter units of General Education required',
  'Internship program included',
  'Senior portfolio and web design course',
  'Comprehensive capstone experience',
  'GPA: Cumulative 2.0 required',
];

const softwareTools = [
  'Revit (BIM)',
  'AutoCAD',
  'SketchUp',
  'Adobe Creative Suite',
  'InDesign',
  'Photoshop',
];

const faqItems = [
  {
    question: 'How long is the Bachelor program?',
    answer: 'The Bachelor of Arts in Interior Design can be completed in 30-54 months depending on your schedule. The program consists of 180 quarter units (120 semester equivalent) including 45 quarter units of General Education. Full-time students typically complete in 30-36 months.',
  },
  {
    question: 'What is the tuition for the Bachelor program?',
    answer: 'The total tuition for the complete BA program is $61,450 (combined AA + BA). The BA-specific portion is $20,850, which includes tuition ($19,950 for 9 classes at $2,217/class), registration fee ($100), textbooks/supplies ($2,500), and lab fees ($800). Payment plans available: 3/4 time $6,651/term, Part-time $4,434/term.',
  },
  {
    question: 'What does CIDA accreditation mean?',
    answer: 'CIDA (Council for Interior Design Accreditation) is the premier accrediting body for interior design education. Over 60% of employers prefer CIDA graduates, who score 16% higher on NCIDQ exams and see 77-94% employment within 6 months. CIDA accreditation is required to sit for the NCIDQ exam.',
  },
  {
    question: 'Can I work while attending the Bachelor program?',
    answer: 'Yes! We offer flexible scheduling with day, evening, and weekend classes to accommodate working students. The program is designed for working professionals, though studio work requires significant time commitment outside of class.',
  },
  {
    question: 'Will this program prepare me for the NCIDQ exam?',
    answer: 'Absolutely. Our CIDA-accredited Bachelor program is specifically designed to prepare you for the NCIDQ (National Council for Interior Design Qualification) exam. CIDA graduates score 16% higher on the NCIDQ exam than non-CIDA graduates.',
  },
];

// Schema.org EducationalOccupationalProgram schema (most comprehensive)
const programSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOccupationalProgram',
  name: 'Bachelor of Arts in Interior Design',
  description: 'CIDA-accredited professional degree in interior design preparing students for NCIDQ examination and professional licensure.',
  url: 'https://idi.edu/programs/bachelor',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Interior Designers Institute',
    sameAs: 'https://idi.edu',
  },
  educationalProgramMode: 'onsite',
  educationalCredentialAwarded: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Bachelor of Arts in Interior Design',
    credentialCategory: 'degree',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Council for Interior Design Accreditation',
      alternateName: 'CIDA',
      url: 'https://www.accredit-id.org',
    },
  },
  timeToComplete: 'P30M',
  timeOfYear: 'Rolling admissions',
  programPrerequisites: 'High school diploma or equivalent',
  occupationalCredentialAwarded: 'CIDA Accredited Interior Design Degree',
  offers: {
    '@type': 'Offer',
    price: '61450',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  hasCourse: [
    {
      '@type': 'Course',
      name: 'Advanced Design Theory',
      courseCode: 'ID301',
    },
    {
      '@type': 'Course',
      name: 'Building Systems and Construction',
      courseCode: 'ID401',
    },
    {
      '@type': 'Course',
      name: 'Professional Practice and Ethics',
      courseCode: 'ID501',
    },
  ],
  occupationalCategory: {
    '@type': 'CategoryCode',
    name: 'Interior Designers',
    codeValue: '27-1025',
    inCodeSet: {
      '@type': 'CategoryCodeSet',
      name: 'O*NET-SOC',
      url: 'https://www.onetonline.org/',
    },
  },
  financialAidEligible: 'Federal Financial Aid, Payment Plans, Scholarships',
};

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function BachelorPage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section - Dark */}
      <section className="relative bg-[#0a0a0a] text-white py-24 lg:py-32 animate-on-scroll">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop"
            alt="Professional interior design studio"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#C4725D] text-white font-mono rounded-full mb-4">
                <Award className="w-5 h-5" />
                <span className="text-sm font-bold">CIDA ACCREDITED</span>
              </div>
            </div>
            <h1 className="font-bricolage text-5xl lg:text-6xl mb-6">
              Bachelor of Arts in Interior Design
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Our flagship CIDA-accredited program prepares you for comprehensive interior design practice and professional licensure. The gold standard in interior design education.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#B8977E]" />
                  <span className="text-sm text-white/70">Duration</span>
                </div>
                <span className="font-mono text-2xl">30-54 months</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-[#B8977E]" />
                  <span className="text-sm text-white/70">Total Tuition</span>
                </div>
                <span className="font-mono text-2xl">$61,450</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-[#B8977E]" />
                  <span className="text-sm text-white/70">Credential</span>
                </div>
                <span className="font-mono text-lg">Bachelor of Arts</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-block px-8 py-4 bg-white text-black hover:bg-white/90 font-medium rounded-full transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white/10 hover:border-white/30 text-white font-medium rounded-full transition-colors"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 bg-[#0a0a0a]">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Programs', href: '/programs' },
            { label: 'Bachelor' },
          ]}
        />
      </section>

      {/* CIDA Accreditation Highlight - Terracotta */}
      <section className="bg-[#C4725D] text-white py-12 animate-on-scroll" style={{ animationDelay: '0.1s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Award className="w-24 h-24" />
            </div>
            <div>
              <h2 className="font-bricolage text-3xl mb-3">CIDA Accredited</h2>
              <p className="text-white/90 text-lg mb-4">
                Our Bachelor of Arts program is accredited by the Council for Interior Design Accreditation (CIDA), the premier accrediting body for interior design education in North America.
              </p>
              <p className="text-white/90">
                CIDA accreditation is your assurance that our program meets rigorous professional standards and prepares you for the NCIDQ exam required for professional licensure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview - Light */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.2s' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bricolage text-4xl mb-6 text-black">
              The Professional Standard
            </h2>
            <p className="text-neutral-500 text-lg mb-6">
              The Bachelor of Arts in Interior Design is our most comprehensive program, providing the education required for professional interior design practice. This CIDA-accredited degree prepares you to sit for the NCIDQ exam and obtain professional licensure.
            </p>
            <p className="text-neutral-500 text-lg mb-6">
              Through rigorous coursework, hands-on studio projects, and real-world internship opportunities, you'll develop both the creative vision and technical expertise needed to succeed in today's competitive design industry.
            </p>
            <p className="text-neutral-500 text-lg">
              Our 10:1 student-to-faculty ratio ensures you receive personalized mentorship from instructors who are all practicing design professionals. You'll graduate with a professional portfolio, industry connections, and the credentials employers demand.
            </p>
          </div>

          <div className="relative h-96 lg:h-full min-h-[400px] rounded-[32px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
              alt="Design students presenting work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CIDA Benefits - Dark */}
      <section className="bg-[#151515] py-16 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-bricolage text-4xl mb-8 text-center text-white">
            Why CIDA Accreditation Matters
          </h2>
          <p className="text-white/70 text-lg text-center max-w-3xl mx-auto mb-12">
            CIDA accreditation gives you a measurable competitive advantage in the job market and on professional licensing exams.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cidaBenefits.map((benefit, index) => (
              <div key={index} className="bg-[#0a0a0a] p-8 rounded-3xl border-2 border-[#C4725D] text-center">
                <div className="font-mono text-4xl font-bold text-[#C4725D] mb-3">{benefit.stat}</div>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum - Light */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.4s' }}>
        <h2 className="font-bricolage text-4xl mb-8 text-center text-black">
          BA Curriculum: 180 Quarter Units
        </h2>
        <p className="text-neutral-500 text-lg text-center max-w-3xl mx-auto mb-8">
          The Bachelor program includes all AA courses PLUS these advanced courses:
        </p>

        {/* BA-Specific Courses */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {baCurriculum.map((course) => (
            <div key={course.code} className="flex items-start gap-3 bg-white p-4 rounded-2xl border-2 border-[#C4725D]">
              <span className="font-mono text-sm text-[#C4725D] font-bold flex-shrink-0">{course.code}</span>
              <div className="flex-1">
                <span className="text-neutral-700 font-medium">{course.title}</span>
                <span className="text-neutral-400 text-sm ml-2">({course.units} units)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Program Highlights */}
        <div className="bg-white p-8 rounded-3xl">
          <h3 className="font-bricolage text-2xl mb-6 text-black">Program Highlights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {programHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Technology - Dark */}
      <section className="bg-[#151515] py-16 animate-on-scroll" style={{ animationDelay: '0.5s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Briefcase className="w-12 h-12 text-[#C4725D] mx-auto mb-4" />
            <h2 className="font-bricolage text-4xl mb-4 text-white">
              Professional Software Training
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Master the complete suite of industry-standard tools. Graduate with advanced proficiency in BIM, CAD, and visualization software.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {softwareTools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-6 rounded-3xl text-center border-2 border-[#C4725D]"
              >
                <span className="font-mono text-lg font-semibold text-[#C4725D]">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes - Light */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.6s' }}>
        <h2 className="font-bricolage text-4xl mb-12 text-center text-black">
          Professional Career Opportunities
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-bricolage text-2xl mb-6 text-black">Career Paths</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Residential Interior Designer</span>
                  <span className="text-neutral-500 text-sm">High-end homes, remodels, custom residences</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Commercial Interior Designer</span>
                  <span className="text-neutral-500 text-sm">Offices, retail, hospitality, healthcare</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Kitchen & Bath Designer</span>
                  <span className="text-neutral-500 text-sm">Specialized design for functional spaces</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Project Manager/Designer</span>
                  <span className="text-neutral-500 text-sm">Lead design teams and client projects</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Independent Design Consultant</span>
                  <span className="text-neutral-500 text-sm">Start your own design practice</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[32px]">
            <h3 className="font-bricolage text-2xl mb-6 text-black">Professional Preparation</h3>
            <p className="text-neutral-500 mb-6">
              Our Bachelor program specifically prepares you for:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500">NCIDQ Examination</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500">State Licensure Requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500">Professional Organization Membership (ASID, IIDA)</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500">Industry Leadership Roles</span>
              </li>
            </ul>

            <div className="bg-[#f8f8f8] p-6 rounded-3xl border-l-4 border-[#C4725D]">
              <p className="text-black font-semibold mb-2">88% Graduation Rate</p>
              <p className="text-neutral-500 text-sm">
                Our students succeed because of small classes, dedicated faculty, and comprehensive support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark */}
      <section className="bg-[#151515] py-16 animate-on-scroll" style={{ animationDelay: '0.7s' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-bricolage text-4xl mb-8 text-center text-white">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="bg-[#f8f8f8] text-black py-16 animate-on-scroll" style={{ animationDelay: '0.8s' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-bricolage text-4xl lg:text-5xl mb-6">
            Earn Your Professional Degree
          </h2>
          <p className="text-xl mb-8 text-neutral-500">
            Join the only CIDA-accredited interior design program in Orange County. Prepare for professional licensure and a rewarding career in interior design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-block px-8 py-4 bg-black text-white hover:bg-black/90 font-medium rounded-full transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-black/10 hover:border-black/30 text-black font-medium rounded-full transition-colors"
            >
              Contact Admissions
            </Link>
            <Link
              href="/programs"
              className="inline-block px-8 py-4 bg-transparent border-2 border-black/10 hover:border-black/30 text-black font-medium rounded-full transition-colors"
            >
              Compare Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
