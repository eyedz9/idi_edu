import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Calendar, DollarSign, GraduationCap, Clock, FileText, Users, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admissions | Apply to IDI',
  description: 'Apply to Interior Designers Institute. 100% acceptance rate. No portfolio required. Open enrollment. CIDA-accredited programs. Financial aid available. Flexible scheduling for working students.',
  keywords: [
    'apply interior design school',
    'interior design admissions California',
    'interior design school requirements',
    'CIDA accredited admissions',
    'interior design financial aid',
    'interior design tuition California',
  ],
  openGraph: {
    title: 'Apply to Interior Designers Institute',
    description: 'Open enrollment. No portfolio required. Financial aid available. Start your interior design career at Orange County\'s premier design school.',
    url: 'https://idi.edu/admissions',
    type: 'website',
  },
};

const admissionSteps = [
  {
    number: '01',
    title: 'Complete Application',
    description: 'Fill out our simple online application form. No portfolio required to start.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Schedule Interview',
    description: 'Meet with our admissions team to discuss your goals and program options.',
    icon: Calendar,
  },
  {
    number: '03',
    title: 'Financial Planning',
    description: 'Work with our financial aid team to explore payment options and aid eligibility.',
    icon: DollarSign,
  },
  {
    number: '04',
    title: 'Enroll & Start',
    description: 'Register for classes and begin your design education journey.',
    icon: GraduationCap,
  },
];

const programTuition = [
  {
    program: 'Certificate',
    duration: '12 weeks',
    tuition: '$2,795',
    credential: 'Certificate of Completion',
  },
  {
    program: "Associate's Degree",
    duration: '24-48 months',
    tuition: '$40,600',
    credential: 'AA in Interior Design',
  },
  {
    program: "Bachelor's Degree",
    duration: '30-54 months',
    tuition: '$61,450',
    credential: 'BA in Interior Design (CIDA)',
    highlight: true,
  },
  {
    program: "Master's Degree",
    duration: '12-15 months',
    tuition: '$22,600',
    credential: 'MIA Degree',
  },
];

const requirements = [
  {
    title: 'Open Enrollment',
    description: '100% acceptance rate - if you\'re passionate about design, we want you here.',
    icon: Users,
  },
  {
    title: 'No Portfolio Required',
    description: 'Start with no prior design experience. We\'ll teach you everything you need.',
    icon: CheckCircle2,
  },
  {
    title: 'Flexible Start Dates',
    description: 'Rolling admissions with multiple start dates throughout the year.',
    icon: Calendar,
  },
  {
    title: 'Work-Friendly Schedule',
    description: 'Day and evening classes available for working students.',
    icon: Clock,
  },
];

const financialAidOptions = [
  {
    title: 'Federal Financial Aid',
    description: 'IDI participates in federal financial aid programs including Direct Loans and Pell Grants.',
  },
  {
    title: 'Payment Plans',
    description: 'Interest-free monthly payment plans available to spread tuition costs over time.',
  },
  {
    title: 'Scholarships',
    description: 'Merit-based scholarships available for qualifying students.',
  },
  {
    title: 'Veterans Benefits',
    description: 'IDI is approved for VA educational benefits for eligible veterans and dependents.',
  },
];

const faqs = [
  {
    question: 'What are the admission requirements?',
    answer: 'IDI has open enrollment with a 100% acceptance rate. You need a high school diploma or GED. No portfolio or prior design experience is required.',
  },
  {
    question: 'When can I start?',
    answer: 'We offer rolling admissions with flexible start dates throughout the year. Contact our admissions team to find the next available start date for your program of interest.',
  },
  {
    question: 'Can I work while attending IDI?',
    answer: 'Yes! We offer flexible scheduling with day and evening classes to accommodate working students. Many of our students maintain part-time or full-time jobs while pursuing their degrees.',
  },
  {
    question: 'How do I apply for financial aid?',
    answer: 'Start by completing the FAFSA (Free Application for Federal Student Aid) at fafsa.gov. Our financial aid team will help you explore all available options including federal loans, grants, and payment plans.',
  },
  {
    question: 'What is the total cost of tuition?',
    answer: 'Tuition varies by program: Certificate ($2,795), Associate\'s ($40,600), Bachelor\'s ($61,450), and Master\'s ($22,600). These are total program costs. Financial aid and payment plans are available.',
  },
  {
    question: 'Is IDI accredited?',
    answer: 'Yes! IDI is accredited by ACCSC and BPPE. Our Bachelor\'s degree program is also accredited by CIDA (Council for Interior Design Accreditation), the gold standard for interior design education.',
  },
];

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function AdmissionsPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm" style={{ animationDelay: '0.1s' }}>
              <ol className="flex items-center gap-2 text-white/60">
                <li>
                  <Link href="/" className="hover:text-white/80 transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">Admissions</li>
              </ol>
            </nav>

            <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ animationDelay: '0.2s' }}>
              Start Your Design Journey
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-8" style={{ animationDelay: '0.3s' }}>
              Join 40 years of design excellence. Open enrollment. No portfolio required. Financial aid available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.4s' }}>
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-white/90 font-semibold rounded-full transition-colors"
              >
                Apply Now
              </a>
              <a
                href="#visit"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors border border-white/30"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 bg-[#f8f8f8] animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 text-black">
              Simple Admission Process
            </h2>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
              We make it easy to start your interior design education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {requirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <div
                  key={req.title}
                  className="bg-white p-8 rounded-[32px] border border-black/10 hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="font-bricolage text-xl font-semibold mb-3 text-black">
                    {req.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">
                    {req.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 bg-[#0a0a0a] animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 text-white">
              Four Steps to Enrollment
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Your journey to becoming an interior designer starts here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <div className="bg-[#151515] p-8 rounded-3xl border border-white/10 h-full hover:shadow-lg transition-shadow">
                    <div className="mb-6">
                      <span className="font-mono text-5xl font-bold text-white/10">
                        {step.number}
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-bricolage text-xl font-semibold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/10 transform -translate-y-1/2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tuition Overview */}
      <section className="py-20 bg-[#f8f8f8] animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 text-black">
              Tuition & Programs
            </h2>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
              Transparent pricing with flexible payment options
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {programTuition.map((program, index) => (
              <div
                key={program.program}
                className={`bg-white p-8 rounded-[32px] border ${
                  program.highlight
                    ? 'border-black shadow-lg'
                    : 'border-black/10'
                } hover:shadow-xl transition-shadow relative`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {program.highlight && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-black text-white text-xs font-semibold px-4 py-1 rounded-full">
                      CIDA Accredited
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bricolage text-2xl font-bold mb-2 text-black">
                      {program.program}
                    </h3>
                    <p className="text-neutral-500">{program.credential}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-3xl font-bold text-black">
                      {program.tuition}
                    </div>
                    <div className="text-sm text-neutral-400 mt-1">total tuition</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <Clock className="w-5 h-5" />
                  <span className="font-mono">{program.duration}</span>
                </div>
                <Link
                  href={`/programs/${program.program.toLowerCase().split("'")[0]}`}
                  className="mt-6 inline-flex items-center text-black hover:text-black/70 font-semibold transition-colors"
                >
                  Learn More About This Program →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-500 mb-6">
              Total program costs shown. Payment plans and financial aid available.
            </p>
            <a
              href="#financial-aid"
              className="inline-flex items-center justify-center px-8 py-4 bg-black hover:bg-black/90 text-white font-semibold rounded-full transition-colors"
            >
              Explore Financial Aid Options
            </a>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section id="financial-aid" className="py-20 bg-[#0a0a0a] animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 text-white">
              Financial Aid & Payment Options
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Making design education accessible and affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {financialAidOptions.map((option, index) => (
              <div
                key={option.title}
                className="bg-[#151515] p-8 rounded-[32px] border border-white/10"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <h3 className="font-bricolage text-xl font-semibold mb-3 text-white">
                  {option.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#151515] text-white p-8 rounded-[32px] max-w-3xl mx-auto border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-black" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bricolage text-2xl font-semibold mb-2">
                  Need Help with Financial Aid?
                </h3>
                <p className="text-white/70 mb-4">
                  Our financial aid team is here to help you navigate all available options
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="tel:+19496754451"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-white/90 font-semibold rounded-full transition-colors"
                >
                  Call (949) 675-4451
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f8f8f8] animate-on-scroll">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 text-black">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-500">
              Everything you need to know about applying to IDI
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[32px] border border-black/10"
                style={{ animationDelay: `${0.05 + index * 0.05}s` }}
              >
                <h3 className="font-bricolage text-xl font-semibold mb-3 text-black">
                  {faq.question}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="py-20 bg-[#0a0a0a] text-white animate-on-scroll">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Design Journey?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Applications are reviewed on a rolling basis. Apply today and start designing your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-white/90 font-semibold rounded-full transition-colors"
            >
              Submit Application
            </a>
            <a
              id="visit"
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors border border-white/30"
            >
              Schedule Campus Visit
            </a>
          </div>
          <p className="mt-8 text-white/60 text-sm">
            Have questions? Call us at{' '}
            <a href="tel:+19496754451" className="text-white/80 hover:underline">
              (949) 675-4451
            </a>{' '}
            or email{' '}
            <a href="mailto:contact@idi.edu" className="text-white/80 hover:underline">
              contact@idi.edu
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
