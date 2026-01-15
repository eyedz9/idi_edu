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
    <div style={{ background: 'var(--bg-primary)' }}>
      {/* Schema.org JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section - Dark */}
      <section className="relative py-24 lg:py-32 animate-on-scroll" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
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
              <span className="inline-block px-4 py-2 text-sm font-mono rounded-full mb-4" style={{ background: 'var(--accent-gold)', color: 'var(--bg-primary)' }}>
                ASSOCIATE DEGREE
              </span>
            </div>
            <h1 className="font-bricolage text-5xl lg:text-6xl mb-6">
              Associate of Arts in <span className="font-display italic">Interior Design</span>
            </h1>
            <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Build a comprehensive foundation in interior design with flexible scheduling that fits your life. Learn industry-standard software and prepare for entry-level positions.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Duration</span>
                </div>
                <span className="font-mono text-2xl">24-48 months</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Tuition</span>
                </div>
                <span className="font-mono text-2xl">$40,600</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Credential</span>
                </div>
                <span className="font-mono text-lg">Associate of Arts</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-block px-8 py-4 font-medium rounded-full transition-colors"
                style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)' }}
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-transparent border-2 font-medium rounded-full transition-colors hover:border-opacity-50"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-8" style={{ background: 'var(--bg-primary)' }}>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Programs', href: '/programs' },
            { label: 'Associate' },
          ]}
        />
      </section>

      {/* Program Overview - Light */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 animate-on-scroll" style={{ background: 'var(--bg-light)', animationDelay: '0.1s' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bricolage text-4xl mb-6" style={{ color: 'var(--text-dark)' }}>
              Comprehensive Foundation for Your <span className="font-display italic">Career</span>
            </h2>
            <p className="text-lg mb-6" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              The Associate of Arts in Interior Design provides a thorough foundation in both the creative and technical aspects of interior design. This program prepares you for entry-level positions in the design industry while developing your unique design voice.
            </p>
            <p className="text-lg mb-6" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              With flexible scheduling options including day, evening, and weekend classes, you can maintain your current employment while building your design career. Complete the program in as little as 24 months full-time, or take up to 48 months with our part-time track.
            </p>
            <p className="text-lg" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
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
      <section className="py-16 animate-on-scroll" style={{ background: 'var(--bg-secondary)', animationDelay: '0.2s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Laptop className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--accent-gold)' }} />
            <h2 className="font-bricolage text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Industry-Standard <span className="font-display italic">Software Training</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Graduate with proficiency in the professional tools used by top design firms. Our comprehensive software curriculum ensures you're job-ready from day one.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {softwareTools.map((tool, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl text-center border transition-colors"
                style={{
                  background: 'var(--bg-primary)',
                  borderColor: 'var(--border-default)',
                }}
              >
                <span className="font-mono text-lg font-semibold" style={{ color: 'var(--accent-gold)' }}>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum - Light */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 animate-on-scroll" style={{ background: 'var(--bg-light)', animationDelay: '0.3s' }}>
        <h2 className="font-hero text-3xl mb-8 text-center" style={{ color: 'var(--text-dark)' }}>
          COMPLETE CURRICULUM: <span className="font-display italic">90 Quarter Units</span>
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
          22 comprehensive courses covering all aspects of residential and commercial interior design.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {curriculum.map((course) => (
            <div key={course.code} className="flex items-start gap-3 bg-white p-4 rounded-2xl">
              <span className="font-mono text-sm font-bold flex-shrink-0" style={{ color: 'var(--accent-gold)' }}>{course.code}</span>
              <div className="flex-1">
                <span className="font-medium" style={{ color: 'var(--text-dark)' }}>{course.title}</span>
                <span className="text-sm ml-2" style={{ color: 'var(--text-dark)', opacity: 0.5 }}>({course.units} units)</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-3xl">
          <h3 className="font-bricolage text-2xl mb-6" style={{ color: 'var(--text-dark)' }}>Career <span className="font-display italic">Opportunities</span></h3>
          <div className="grid md:grid-cols-2 gap-4">
            {careerPaths.map((career, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <span style={{ color: 'var(--text-dark)', opacity: 0.7 }}>{career}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Learning - Dark */}
      <section className="py-16 animate-on-scroll" style={{ background: 'var(--bg-secondary)', animationDelay: '0.4s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-bricolage text-4xl mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
            Flexible Scheduling for <span className="font-display italic">Working Students</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] border" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-default)' }}>
              <h3 className="font-bricolage text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Day Classes</h3>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                Full-time students can complete the program in 24 months with morning and afternoon classes.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Perfect for those who can dedicate full days to their education.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border-2" style={{ background: 'var(--bg-primary)', borderColor: 'var(--accent-gold)' }}>
              <div className="inline-block px-3 py-1 text-xs font-mono rounded-full mb-4" style={{ background: 'var(--accent-gold)', color: 'var(--bg-primary)' }}>
                MOST POPULAR
              </div>
              <h3 className="font-bricolage text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Evening Classes</h3>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                Work during the day and attend classes in the evening, completing the program in 36-40 months.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Ideal for working professionals making a career transition.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-default)' }}>
              <h3 className="font-bricolage text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Weekend Classes</h3>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                Attend Saturday and Sunday classes while maintaining full-time employment during the week.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Great for those with weekday work commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes - Light */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 animate-on-scroll" style={{ background: 'var(--bg-light)', animationDelay: '0.5s' }}>
        <h2 className="font-bricolage text-4xl mb-8 text-center" style={{ color: 'var(--text-dark)' }}>
          Career <span className="font-display italic">Opportunities</span>
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
          Associate degree graduates are prepared for entry-level positions in residential and commercial design firms, architecture offices, furniture showrooms, and more.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[32px]">
            <h3 className="font-bricolage text-2xl mb-4" style={{ color: 'var(--text-dark)' }}>Entry-Level <span className="font-display italic">Positions</span></h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <span style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Junior Interior Designer</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <span style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Design Assistant</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <span style={{ color: 'var(--text-dark)', opacity: 0.7 }}>CAD Drafter/Technician</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <span style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Showroom Consultant</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <span style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Design Project Coordinator</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[32px]">
            <h3 className="font-bricolage text-2xl mb-4" style={{ color: 'var(--text-dark)' }}>Continue Your <span className="font-display italic">Education</span></h3>
            <p className="mb-6" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              Many Associate graduates continue their education in our CIDA-accredited Bachelor of Arts program to qualify for professional licensure and the NCIDQ exam.
            </p>
            <Link
              href="/programs/bachelor"
              className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
              style={{ color: 'var(--accent-gold)' }}
            >
              Explore Bachelor Program
              <CheckCircle2 className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark */}
      <section className="py-16 animate-on-scroll" style={{ background: 'var(--bg-secondary)', animationDelay: '0.6s' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-bricolage text-4xl mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked <span className="font-display italic">Questions</span>
          </h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="py-16 animate-on-scroll" style={{ background: 'var(--bg-light)', animationDelay: '0.7s' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-bricolage text-4xl lg:text-5xl mb-6" style={{ color: 'var(--text-dark)' }}>
            Ready to Build Your <span className="font-display italic">Design Career</span>?
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
            Join Orange County's premier interior design school and start your journey toward a creative, rewarding career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-block px-8 py-4 font-medium rounded-full transition-colors"
              style={{ background: 'var(--text-dark)', color: 'var(--bg-light)' }}
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 font-medium rounded-full transition-colors"
              style={{ borderColor: 'var(--text-dark)', color: 'var(--text-dark)', opacity: 0.7 }}
            >
              Contact Admissions
            </Link>
            <Link
              href="/programs"
              className="inline-block px-8 py-4 bg-transparent border-2 font-medium rounded-full transition-colors"
              style={{ borderColor: 'var(--text-dark)', color: 'var(--text-dark)', opacity: 0.7 }}
            >
              Compare Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
