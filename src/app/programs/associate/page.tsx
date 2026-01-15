import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FAQ } from '@/components/ui/FAQ';
import { CheckCircle2, Clock, DollarSign, GraduationCap, Laptop } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Associate of Arts in Interior Design',
  description: 'Comprehensive 24-48 month Associate degree in Interior Design. $40,600 tuition. Learn AutoCAD, SketchUp, Revit, and more with flexible scheduling.',
  keywords: [
    'associate degree interior design',
    'AA interior design California',
    'flexible interior design program',
    'work while studying interior design',
    'interior design software training',
  ],
};

const softwareTools = [
  'AutoCAD',
  'SketchUp',
  'Revit',
  'Adobe Photoshop',
  'Adobe InDesign',
  'TinkerCad',
];

// Complete AA Curriculum from content.md (90 Quarter Units, 22 courses)
const curriculum = [
  { code: '125', title: 'Designing Phase I', units: 4 },
  { code: '126', title: 'Designing Phase II', units: 4 },
  { code: '200', title: 'Architectural Drafting', units: 4 },
  { code: '201', title: 'History of Interiors and Architecture I', units: 4 },
  { code: '202', title: 'History of Interiors and Architecture II', units: 4 },
  { code: '203', title: 'Residential Design', units: 4 },
  { code: '205', title: 'Commercial Design I', units: 4 },
  { code: '206', title: 'Commercial Design II', units: 4 },
  { code: '207', title: 'Materials Specification', units: 4 },
  { code: '208', title: 'Construction Principles', units: 4 },
  { code: '209', title: 'Design Thinking', units: 4 },
  { code: '210', title: 'Color', units: 4 },
  { code: '212', title: 'Perspective', units: 4 },
  { code: '215', title: 'Spaceplanning', units: 4 },
  { code: '216', title: 'SketchUp', units: 4 },
  { code: '217', title: 'Business Principles', units: 4 },
  { code: '218', title: 'Textiles', units: 4 },
  { code: '220', title: 'Healthcare Design', units: 4 },
  { code: '221', title: 'Photoshop', units: 4 },
  { code: '222', title: 'Building Codes', units: 4 },
  { code: '223', title: 'Environmental Design', units: 4 },
  { code: '225', title: 'Computer-Aided Drafting I', units: 6 },
];

const careerPaths = [
  'Model home design',
  'Set design',
  'Office spaceplanning',
  'Small commercial design',
  'Interior illustration/rendering',
  'Furniture, textile, and wallcovering design',
  'Lighting design',
];

const faqItems = [
  {
    question: 'How long is the Associate degree program?',
    answer: 'The Associate of Arts in Interior Design can be completed in 24-48 months depending on your schedule. The program consists of 90 quarter units across 22 courses. We offer flexible day, evening, and weekend classes to accommodate working students.',
  },
  {
    question: 'What is the tuition for the Associate program?',
    answer: 'The total tuition is $40,600, which includes tuition ($39,900 for 20 classes at $1,995/class), registration fee ($100), estimated textbooks/supplies ($2,500), and lab fees ($600). Payment plans available: Full-time $7,980/term, 3/4 time $5,985/term, Part-time $3,990/term.',
  },
  {
    question: 'Can I work while attending this program?',
    answer: 'Absolutely! The Associate program is designed with working professionals in mind. Our flexible scheduling options—including evening and weekend classes—allow most students to maintain employment while pursuing their degree.',
  },
  {
    question: 'What software will I learn in this program?',
    answer: 'You will receive comprehensive training in industry-standard software including AutoCAD, SketchUp, Photoshop, InDesign, TinkerCad, and Design Manager. By graduation, you\'ll be proficient in the tools used by professional design firms.',
  },
  {
    question: 'What careers can I pursue with an Associate degree?',
    answer: 'Graduates are prepared for careers in model home design, set design, office spaceplanning, small commercial design, interior rendering, furniture/textile design, and lighting design. The AA also serves as prerequisite for our CIDA-accredited Bachelor program.',
  },
];

// FAQ Schema for AEO
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

export default function AssociatePage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Schema.org JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section - Dark */}
      <section className="relative bg-[#0a0a0a] text-white py-24 lg:py-32 animate-on-scroll">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop"
            alt="Interior design studio workspace"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#B8977E] text-black text-sm font-mono rounded-full mb-4">
                ASSOCIATE DEGREE
              </span>
            </div>
            <h1 className="font-bricolage text-5xl lg:text-6xl mb-6">
              Associate of Arts in Interior Design
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Build a comprehensive foundation in interior design with flexible scheduling that fits your life. Learn industry-standard software and prepare for entry-level positions.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#B8977E]" />
                  <span className="text-sm text-white/70">Duration</span>
                </div>
                <span className="font-mono text-2xl">24-48 months</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-[#B8977E]" />
                  <span className="text-sm text-white/70">Tuition</span>
                </div>
                <span className="font-mono text-2xl">$40,600</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-[#B8977E]" />
                  <span className="text-sm text-white/70">Credential</span>
                </div>
                <span className="font-mono text-lg">Associate of Arts</span>
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
            { label: 'Associate' },
          ]}
        />
      </section>

      {/* Program Overview - Light */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.1s' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bricolage text-4xl mb-6 text-black">
              Comprehensive Foundation for Your Career
            </h2>
            <p className="text-neutral-500 text-lg mb-6">
              The Associate of Arts in Interior Design provides a thorough foundation in both the creative and technical aspects of interior design. This program prepares you for entry-level positions in the design industry while developing your unique design voice.
            </p>
            <p className="text-neutral-500 text-lg mb-6">
              With flexible scheduling options including day, evening, and weekend classes, you can maintain your current employment while building your design career. Complete the program in as little as 24 months full-time, or take up to 48 months with our part-time track.
            </p>
            <p className="text-neutral-500 text-lg">
              Our small class sizes (10:1 student-to-faculty ratio) ensure personalized attention from instructors who are all practicing design professionals with real-world experience.
            </p>
          </div>

          <div className="relative h-96 lg:h-full min-h-[400px] rounded-[32px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
              alt="Design students working in studio"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Software Training - Dark */}
      <section className="bg-[#151515] py-16 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Laptop className="w-12 h-12 text-[#C4725D] mx-auto mb-4" />
            <h2 className="font-bricolage text-4xl mb-4 text-white">
              Industry-Standard Software Training
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Graduate with proficiency in the professional tools used by top design firms. Our comprehensive software curriculum ensures you're job-ready from day one.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {softwareTools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-6 rounded-3xl text-center border border-white/10 hover:border-[#C4725D] transition-colors"
              >
                <span className="font-mono text-lg font-semibold text-[#C4725D]">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum - Light */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.3s' }}>
        <h2 className="font-bricolage text-4xl mb-8 text-center text-black">
          Complete Curriculum: 90 Quarter Units
        </h2>
        <p className="text-neutral-500 text-lg text-center max-w-3xl mx-auto mb-12">
          22 comprehensive courses covering all aspects of residential and commercial interior design.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {curriculum.map((course) => (
            <div key={course.code} className="flex items-start gap-3 bg-white p-4 rounded-2xl">
              <span className="font-mono text-sm text-[#C4725D] font-bold flex-shrink-0">{course.code}</span>
              <div className="flex-1">
                <span className="text-neutral-700 font-medium">{course.title}</span>
                <span className="text-neutral-400 text-sm ml-2">({course.units} units)</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-3xl">
          <h3 className="font-bricolage text-2xl mb-6 text-black">Career Opportunities</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {careerPaths.map((career, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500">{career}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Learning - Dark */}
      <section className="bg-[#151515] py-16 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-bricolage text-4xl mb-12 text-center text-white">
            Flexible Scheduling for Working Students
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a] p-8 rounded-[32px] border border-white/10">
              <h3 className="font-bricolage text-2xl mb-4 text-white">Day Classes</h3>
              <p className="text-white/70 mb-4">
                Full-time students can complete the program in 24 months with morning and afternoon classes.
              </p>
              <p className="text-white/50 text-sm">
                Perfect for those who can dedicate full days to their education.
              </p>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-[32px] border-2 border-[#C4725D]">
              <div className="inline-block px-3 py-1 bg-[#C4725D] text-white text-xs font-mono rounded-full mb-4">
                MOST POPULAR
              </div>
              <h3 className="font-bricolage text-2xl mb-4 text-white">Evening Classes</h3>
              <p className="text-white/70 mb-4">
                Work during the day and attend classes in the evening, completing the program in 36-40 months.
              </p>
              <p className="text-white/50 text-sm">
                Ideal for working professionals making a career transition.
              </p>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-[32px] border border-white/10">
              <h3 className="font-bricolage text-2xl mb-4 text-white">Weekend Classes</h3>
              <p className="text-white/70 mb-4">
                Attend Saturday and Sunday classes while maintaining full-time employment during the week.
              </p>
              <p className="text-white/50 text-sm">
                Great for those with weekday work commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes - Light */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.5s' }}>
        <h2 className="font-bricolage text-4xl mb-8 text-center text-black">
          Career Opportunities
        </h2>
        <p className="text-neutral-500 text-lg text-center max-w-3xl mx-auto mb-12">
          Associate degree graduates are prepared for entry-level positions in residential and commercial design firms, architecture offices, furniture showrooms, and more.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[32px]">
            <h3 className="font-bricolage text-2xl mb-4 text-black">Entry-Level Positions</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500">Junior Interior Designer</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500">Design Assistant</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500">CAD Drafter/Technician</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500">Showroom Consultant</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-500">Design Project Coordinator</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[32px]">
            <h3 className="font-bricolage text-2xl mb-4 text-black">Continue Your Education</h3>
            <p className="text-neutral-500 mb-6">
              Many Associate graduates continue their education in our CIDA-accredited Bachelor of Arts program to qualify for professional licensure and the NCIDQ exam.
            </p>
            <Link
              href="/programs/bachelor"
              className="inline-flex items-center gap-2 text-[#C4725D] font-medium hover:gap-3 transition-all"
            >
              Explore Bachelor Program
              <CheckCircle2 className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark */}
      <section className="bg-[#151515] py-16 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-bricolage text-4xl mb-8 text-center text-white">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="bg-[#f8f8f8] text-black py-16 animate-on-scroll" style={{ animationDelay: '0.7s' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-bricolage text-4xl lg:text-5xl mb-6">
            Ready to Build Your Design Career?
          </h2>
          <p className="text-xl mb-8 text-neutral-500">
            Join Orange County's premier interior design school and start your journey toward a creative, rewarding career.
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
