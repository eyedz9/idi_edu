import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FAQ } from '@/components/ui/FAQ';
import { CheckCircle2, Clock, DollarSign, GraduationCap, BookOpen, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Master of Interior Architecture (MIA)',
  description: 'Advance your career with a Master of Interior Architecture degree. 12-15 months, $22,600 tuition. For those with existing bachelor\'s degrees seeking graduate-level expertise.',
  keywords: [
    'master interior architecture',
    'MIA degree',
    'graduate interior design',
    'advanced interior design degree',
    'career advancement interior design',
  ],
};

// MIA Curriculum from content.md (45 Quarter Units, 8 courses)
const miaCurriculum = [
  { code: '502', title: 'Design Project Part 1', units: 4.5 },
  { code: '503', title: 'Research Methods Part 1', units: 3 },
  { code: '504', title: 'Graduate Seminar: Special Topics', units: 6.5 },
  { code: '505', title: 'Design Project Part 2', units: 4.5 },
  { code: '506', title: 'Research Methods Part 2', units: 3 },
  { code: '507', title: 'Graduate Seminar: Professional Practices', units: 6.5 },
  { code: '508', title: 'Design Project Part 3', units: 7.5 },
  { code: '509', title: 'Research Methods Part 3', units: 3 },
];

const admissionRequirements = [
  "Bachelor's degree in interior design, interior architecture, or architecture from a US college/university",
  'Portfolio review required',
  'Personal interview required',
  'Proficiency in AutoCAD, Photoshop, and 3D CAD software',
];

const programRequirements = [
  'Must be granted Candidacy by Graduate Committee',
  'Cumulative 3.0 GPA (minimum 2.0 per course)',
  'Fulfill all financial obligations',
  'Complete capstone project with exhibit and presentation',
  'Format: Part-time, Monday/Thursday evenings',
  'Small class size with limited enrollment',
];

const idealCandidates = [
  {
    title: 'Career Changers',
    description: 'Professionals with bachelor\'s degrees in other fields looking to transition into interior design and architecture.',
  },
  {
    title: 'Design Professionals',
    description: 'Those already working in design seeking advanced credentials and specialized knowledge to move into leadership roles.',
  },
  {
    title: 'Educators',
    description: 'Individuals interested in teaching interior design at the college level who need a graduate degree.',
  },
  {
    title: 'Researchers',
    description: 'Those interested in design research, sustainable design innovation, or advancing the field through scholarship.',
  },
];

const faqItems = [
  {
    question: 'How long is the Master of Interior Architecture program?',
    answer: 'The MIA program can be completed in 12-15 months. The program consists of 45 quarter units across 8 courses. Classes meet part-time on Monday/Thursday evenings to accommodate working professionals.',
  },
  {
    question: 'What is the tuition for the Master\'s program?',
    answer: 'The total tuition is $22,600, which includes tuition ($22,500 for 9 classes at $2,500/class), registration fee ($100), and estimated textbooks/supplies ($2,500). Payment options: 3 terms at $7,500/term or 4 terms at $2,500/class.',
  },
  {
    question: 'Do I need a design degree to apply?',
    answer: 'Yes, the MIA program requires a bachelor\'s degree in interior design, interior architecture, or architecture from a US college/university. You must also demonstrate proficiency in AutoCAD, Photoshop, and 3D CAD software, pass a portfolio review, and complete a personal interview.',
  },
  {
    question: 'What is the capstone project component?',
    answer: 'All MIA students complete a comprehensive capstone design project that culminates in a student exhibit and verbal presentation. This demonstrates your ability to conduct independent research and contribute original knowledge to the field of interior architecture.',
  },
  {
    question: 'Can I work while completing the Master\'s program?',
    answer: 'Yes! The MIA program is specifically designed for working professionals with part-time, evening classes on Monday/Thursday. Classes are in-person only, and while the program accommodates working students, graduate-level coursework requires significant time commitment.',
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

export default function MastersPage() {
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
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80&fit=crop"
            alt="Professional architecture studio"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#B8977E] text-black text-sm font-mono rounded-full mb-4">
                GRADUATE DEGREE
              </span>
            </div>
            <h1 className="font-bricolage text-5xl lg:text-6xl mb-6">
              Master of Interior Architecture
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Advance your career with graduate-level expertise in interior architecture. For professionals with existing bachelor's degrees seeking to specialize, transition, or lead.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#B8977E]" />
                  <span className="text-sm text-white/70">Duration</span>
                </div>
                <span className="font-mono text-2xl">12-15 months</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-[#B8977E]" />
                  <span className="text-sm text-white/70">Tuition</span>
                </div>
                <span className="font-mono text-2xl">$22,600</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-[#B8977E]" />
                  <span className="text-sm text-white/70">Credential</span>
                </div>
                <span className="font-mono text-lg">MIA Degree</span>
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
            { label: 'Master\'s' },
          ]}
        />
      </section>

      {/* Program Overview - Light */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.1s' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bricolage text-4xl mb-6 text-black">
              Advanced Study in Interior Architecture
            </h2>
            <p className="text-neutral-500 text-lg mb-6">
              The Master of Interior Architecture (MIA) is a graduate-level program designed for individuals who already hold a bachelor's degree in any field and wish to pursue advanced study in interior architecture.
            </p>
            <p className="text-neutral-500 text-lg mb-6">
              Whether you're transitioning from another career, advancing your current design practice, or preparing for academic or research roles, the MIA provides the advanced knowledge and credentials to achieve your goals.
            </p>
            <p className="text-neutral-500 text-lg">
              Through intensive graduate-level coursework, independent research, and a comprehensive thesis project, you'll develop expertise in advanced design theory, sustainable design, historic preservation, and professional practice at the highest level.
            </p>
          </div>

          <div className="relative h-96 lg:h-full min-h-[400px] rounded-[32px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"
              alt="Graduate student working on design research"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who Should Apply - Dark */}
      <section className="bg-[#151515] py-16 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-bricolage text-4xl mb-12 text-center text-white">
            Who Should Apply
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {idealCandidates.map((candidate, index) => (
              <div key={index} className="bg-[#0a0a0a] p-8 rounded-[32px] border border-white/10">
                <h3 className="font-bricolage text-2xl mb-4 text-white">{candidate.title}</h3>
                <p className="text-white/70">{candidate.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#C4725D]/10 border-l-4 border-[#C4725D] p-8 rounded-3xl">
            <h3 className="font-bricolage text-xl mb-3 text-white">No Prior Design Degree Required</h3>
            <p className="text-white/70">
              While applicants with bachelor's degrees in design-related fields may receive advanced standing, the MIA program is open to graduates from all academic backgrounds. Foundational coursework can be integrated as needed to prepare you for graduate-level study.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum - Light */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.3s' }}>
        <h2 className="font-bricolage text-4xl mb-8 text-center text-black">
          Graduate Curriculum: 45 Quarter Units
        </h2>
        <p className="text-neutral-500 text-lg text-center max-w-3xl mx-auto mb-12">
          8 comprehensive graduate courses emphasizing design research, advanced theory, and capstone project.
        </p>

        {/* MIA Courses */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {miaCurriculum.map((course) => (
            <div key={course.code} className="flex items-start gap-3 bg-white p-4 rounded-2xl border-2 border-[#C4725D]">
              <span className="font-mono text-sm text-[#C4725D] font-bold flex-shrink-0">{course.code}</span>
              <div className="flex-1">
                <span className="text-neutral-700 font-medium">{course.title}</span>
                <span className="text-neutral-400 text-sm ml-2">({course.units} units)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl">
            <h3 className="font-bricolage text-2xl mb-6 text-black">Admission Requirements</h3>
            <ul className="space-y-3">
              {admissionRequirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-500 text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl">
            <h3 className="font-bricolage text-2xl mb-6 text-black">Program Requirements</h3>
            <ul className="space-y-3">
              {programRequirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-500 text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Thesis Component - Dark */}
      <section className="bg-[#151515] py-16 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <BookOpen className="w-12 h-12 text-[#C4725D] mb-6" />
              <h2 className="font-bricolage text-4xl mb-6 text-white">
                Thesis Research
              </h2>
              <p className="text-white/70 text-lg mb-6">
                Every MIA student completes a comprehensive capstone design project—a rigorous research endeavor that demonstrates your ability to contribute original knowledge to the field of interior architecture.
              </p>
              <p className="text-white/70 text-lg mb-6">
                Working closely with faculty advisors who are experts in their fields, you'll develop a design project over three progressive courses (Design Project Parts 1, 2, and 3) alongside research methodologies training.
              </p>
              <p className="text-white/70 text-lg">
                The program culminates in a student exhibit and verbal presentation, showcasing your independent research and design work to demonstrate mastery of interior architecture principles.
              </p>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-[32px] border border-white/10">
              <h3 className="font-bricolage text-2xl mb-6 text-white">Capstone Project Examples</h3>
              <ul className="space-y-4">
                <li className="border-l-4 border-[#B8977E] pl-4">
                  <p className="text-white font-medium mb-1">Adaptive Reuse of Industrial Spaces</p>
                  <p className="text-white/70 text-sm">Historic preservation strategies for warehouse conversions</p>
                </li>
                <li className="border-l-4 border-[#B8977E] pl-4">
                  <p className="text-white font-medium mb-1">Biophilic Design in Healthcare</p>
                  <p className="text-white/70 text-sm">Impact of natural elements on patient recovery</p>
                </li>
                <li className="border-l-4 border-[#B8977E] pl-4">
                  <p className="text-white font-medium mb-1">Sustainable Material Innovation</p>
                  <p className="text-white/70 text-sm">Life cycle analysis of emerging eco-friendly finishes</p>
                </li>
                <li className="border-l-4 border-[#B8977E] pl-4">
                  <p className="text-white font-medium mb-1">Universal Design for Aging in Place</p>
                  <p className="text-white/70 text-sm">Residential strategies for multi-generational living</p>
                </li>
              </ul>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-white/70 text-sm">
                  All capstone projects culminate in a professional exhibit and presentation before faculty and industry professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Advancement - Light */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.5s' }}>
        <div className="text-center mb-12">
          <TrendingUp className="w-12 h-12 text-[#C4725D] mx-auto mb-4" />
          <h2 className="font-bricolage text-4xl mb-4 text-black">
            Career Advancement
          </h2>
          <p className="text-neutral-500 text-lg max-w-3xl mx-auto">
            The MIA degree opens doors to advanced positions and specialized roles within the design industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[32px]">
            <h3 className="font-bricolage text-2xl mb-6 text-black">Professional Roles</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Senior Designer / Design Director</span>
                  <span className="text-neutral-500 text-sm">Lead design teams and major projects</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Sustainable Design Specialist</span>
                  <span className="text-neutral-500 text-sm">Focus on LEED and green building practices</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Historic Preservation Consultant</span>
                  <span className="text-neutral-500 text-sm">Adaptive reuse and restoration projects</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Design Researcher</span>
                  <span className="text-neutral-500 text-sm">Advance the field through scholarship and innovation</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[32px]">
            <h3 className="font-bricolage text-2xl mb-6 text-black">Academic Careers</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">College/University Faculty</span>
                  <span className="text-neutral-500 text-sm">Teach at the post-secondary level</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Program Director/Administrator</span>
                  <span className="text-neutral-500 text-sm">Lead design education programs</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Continuing Education Instructor</span>
                  <span className="text-neutral-500 text-sm">Teach workshops and professional development</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C4725D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-black font-semibold block">Industry Consultant/Speaker</span>
                  <span className="text-neutral-500 text-sm">Share expertise through consulting and conferences</span>
                </div>
              </li>
            </ul>
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
            Advance Your Career with a Master's Degree
          </h2>
          <p className="text-xl mb-8 text-neutral-500">
            Join our MIA program and gain the advanced expertise, credentials, and research skills to lead in the interior design and architecture fields.
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
