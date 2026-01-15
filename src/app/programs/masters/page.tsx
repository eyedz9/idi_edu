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
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Schema.org JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section - Dark */}
      <section className="relative py-24 lg:py-32 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
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
              <span className="inline-block px-4 py-2 text-sm font-mono rounded-full mb-4" style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--bg-primary)' }}>
                GRADUATE DEGREE
              </span>
            </div>
            <h1 className="font-hero text-5xl lg:text-6xl mb-6 uppercase tracking-wide" style={{ color: 'var(--text-primary)' }}>
              Master of <span className="font-display italic">Interior</span> Architecture
            </h1>
            <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Advance your career with graduate-level expertise in interior architecture. For professionals with existing bachelor's degrees seeking to specialize, transition, or lead.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Duration</span>
                </div>
                <span className="font-mono text-2xl" style={{ color: 'var(--text-primary)' }}>12-15 months</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Tuition</span>
                </div>
                <span className="font-mono text-2xl" style={{ color: 'var(--text-primary)' }}>$22,600</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Credential</span>
                </div>
                <span className="font-mono text-lg" style={{ color: 'var(--text-primary)' }}>MIA Degree</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-block px-8 py-4 font-medium rounded-full transition-colors"
                style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--bg-primary)' }}
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 font-medium rounded-full transition-colors border-2"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: 'var(--border-default)',
                  color: 'var(--text-primary)'
                }}
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Programs', href: '/programs' },
            { label: 'Master\'s' },
          ]}
        />
      </section>

      {/* Program Overview - Light */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)', animationDelay: '0.1s' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bricolage text-4xl mb-6" style={{ color: 'var(--text-dark)' }}>
              Advanced Study in <span className="font-display italic">Interior Architecture</span>
            </h2>
            <p className="text-lg mb-6" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>
              The Master of Interior Architecture (MIA) is a graduate-level program designed for individuals who already hold a bachelor's degree in any field and wish to pursue advanced study in interior architecture.
            </p>
            <p className="text-lg mb-6" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>
              Whether you're transitioning from another career, advancing your current design practice, or preparing for academic or research roles, the MIA provides the advanced knowledge and credentials to achieve your goals.
            </p>
            <p className="text-lg" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>
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
      <section className="py-16 animate-on-scroll" style={{ backgroundColor: 'var(--bg-secondary)', animationDelay: '0.2s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-bricolage text-4xl mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
            Who Should <span className="font-display italic">Apply</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {idealCandidates.map((candidate, index) => (
              <div key={index} className="p-8 rounded-[32px] border" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-default)' }}>
                <h3 className="font-bricolage text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>{candidate.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{candidate.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-l-4 p-8 rounded-3xl" style={{ backgroundColor: 'rgba(255, 92, 141, 0.1)', borderColor: 'var(--accent-gold)' }}>
            <h3 className="font-bricolage text-xl mb-3" style={{ color: 'var(--text-primary)' }}>No Prior Design Degree Required</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              While applicants with bachelor's degrees in design-related fields may receive advanced standing, the MIA program is open to graduates from all academic backgrounds. Foundational coursework can be integrated as needed to prepare you for graduate-level study.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum - Light */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)', animationDelay: '0.3s' }}>
        <h2 className="font-bricolage text-4xl mb-8 text-center" style={{ color: 'var(--text-dark)' }}>
          Graduate Curriculum: <span className="font-display italic">45 Quarter Units</span>
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>
          8 comprehensive graduate courses emphasizing design research, advanced theory, and capstone project.
        </p>

        {/* MIA Courses */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {miaCurriculum.map((course) => (
            <div key={course.code} className="flex items-start gap-3 p-4 rounded-2xl border-2" style={{ backgroundColor: 'white', borderColor: 'var(--accent-gold)' }}>
              <span className="font-mono text-sm font-bold flex-shrink-0" style={{ color: 'var(--accent-gold)' }}>{course.code}</span>
              <div className="flex-1">
                <span className="font-medium" style={{ color: 'var(--text-dark)' }}>{course.title}</span>
                <span className="text-sm ml-2" style={{ color: 'var(--text-dark)', opacity: 0.6 }}>({course.units} units)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl" style={{ backgroundColor: 'white' }}>
            <h3 className="font-bricolage text-2xl mb-6" style={{ color: 'var(--text-dark)' }}>Admission Requirements</h3>
            <ul className="space-y-3">
              {admissionRequirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-3xl" style={{ backgroundColor: 'white' }}>
            <h3 className="font-bricolage text-2xl mb-6" style={{ color: 'var(--text-dark)' }}>Program Requirements</h3>
            <ul className="space-y-3">
              {programRequirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Thesis Component - Dark */}
      <section className="py-16 animate-on-scroll" style={{ backgroundColor: 'var(--bg-secondary)', animationDelay: '0.4s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <BookOpen className="w-12 h-12 mb-6" style={{ color: 'var(--accent-gold)' }} />
              <h2 className="font-bricolage text-4xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Thesis <span className="font-display italic">Research</span>
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                Every MIA student completes a comprehensive capstone design project—a rigorous research endeavor that demonstrates your ability to contribute original knowledge to the field of interior architecture.
              </p>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                Working closely with faculty advisors who are experts in their fields, you'll develop a design project over three progressive courses (Design Project Parts 1, 2, and 3) alongside research methodologies training.
              </p>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                The program culminates in a student exhibit and verbal presentation, showcasing your independent research and design work to demonstrate mastery of interior architecture principles.
              </p>
            </div>

            <div className="p-8 rounded-[32px] border" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-default)' }}>
              <h3 className="font-bricolage text-2xl mb-6" style={{ color: 'var(--text-primary)' }}>Capstone Project Examples</h3>
              <ul className="space-y-4">
                <li className="border-l-4 pl-4" style={{ borderColor: 'var(--accent-terracotta)' }}>
                  <p className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Adaptive Reuse of Industrial Spaces</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Historic preservation strategies for warehouse conversions</p>
                </li>
                <li className="border-l-4 pl-4" style={{ borderColor: 'var(--accent-terracotta)' }}>
                  <p className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Biophilic Design in Healthcare</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Impact of natural elements on patient recovery</p>
                </li>
                <li className="border-l-4 pl-4" style={{ borderColor: 'var(--accent-terracotta)' }}>
                  <p className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Sustainable Material Innovation</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Life cycle analysis of emerging eco-friendly finishes</p>
                </li>
                <li className="border-l-4 pl-4" style={{ borderColor: 'var(--accent-terracotta)' }}>
                  <p className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Universal Design for Aging in Place</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Residential strategies for multi-generational living</p>
                </li>
              </ul>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border-default)' }}>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  All capstone projects culminate in a professional exhibit and presentation before faculty and industry professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Advancement - Light */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)', animationDelay: '0.5s' }}>
        <div className="text-center mb-12">
          <TrendingUp className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--accent-gold)' }} />
          <h2 className="font-bricolage text-4xl mb-4" style={{ color: 'var(--text-dark)' }}>
            Career <span className="font-display italic">Advancement</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>
            The MIA degree opens doors to advanced positions and specialized roles within the design industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[32px]" style={{ backgroundColor: 'white' }}>
            <h3 className="font-bricolage text-2xl mb-6" style={{ color: 'var(--text-dark)' }}>Professional Roles</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <span className="font-semibold block" style={{ color: 'var(--text-dark)' }}>Senior Designer / Design Director</span>
                  <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Lead design teams and major projects</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <span className="font-semibold block" style={{ color: 'var(--text-dark)' }}>Sustainable Design Specialist</span>
                  <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Focus on LEED and green building practices</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <span className="font-semibold block" style={{ color: 'var(--text-dark)' }}>Historic Preservation Consultant</span>
                  <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Adaptive reuse and restoration projects</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <span className="font-semibold block" style={{ color: 'var(--text-dark)' }}>Design Researcher</span>
                  <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Advance the field through scholarship and innovation</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-[32px]" style={{ backgroundColor: 'white' }}>
            <h3 className="font-bricolage text-2xl mb-6" style={{ color: 'var(--text-dark)' }}>Academic Careers</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <span className="font-semibold block" style={{ color: 'var(--text-dark)' }}>College/University Faculty</span>
                  <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Teach at the post-secondary level</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <span className="font-semibold block" style={{ color: 'var(--text-dark)' }}>Program Director/Administrator</span>
                  <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Lead design education programs</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <span className="font-semibold block" style={{ color: 'var(--text-dark)' }}>Continuing Education Instructor</span>
                  <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Teach workshops and professional development</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <span className="font-semibold block" style={{ color: 'var(--text-dark)' }}>Industry Consultant/Speaker</span>
                  <span className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>Share expertise through consulting and conferences</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark */}
      <section className="py-16 animate-on-scroll" style={{ backgroundColor: 'var(--bg-secondary)', animationDelay: '0.6s' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-bricolage text-4xl mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked <span className="font-display italic">Questions</span>
          </h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="py-16 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)', animationDelay: '0.7s' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-bricolage text-4xl lg:text-5xl mb-6" style={{ color: 'var(--text-dark)' }}>
            Advance Your Career with a <span className="font-display italic">Master's Degree</span>
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--text-dark)', opacity: 0.8 }}>
            Join our MIA program and gain the advanced expertise, credentials, and research skills to lead in the interior design and architecture fields.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-block px-8 py-4 font-medium rounded-full transition-colors"
              style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--bg-primary)' }}
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 font-medium rounded-full transition-colors border-2"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'var(--text-dark)',
                color: 'var(--text-dark)',
                opacity: 0.8
              }}
            >
              Contact Admissions
            </Link>
            <Link
              href="/programs"
              className="inline-block px-8 py-4 font-medium rounded-full transition-colors border-2"
              style={{
                backgroundColor: 'transparent',
                borderColor: 'var(--text-dark)',
                color: 'var(--text-dark)',
                opacity: 0.8
              }}
            >
              Compare Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
