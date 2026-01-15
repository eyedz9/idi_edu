import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Calendar, DollarSign, GraduationCap, Clock, FileText, Users, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admissions & Tuition | Apply to IDI',
  description: 'Apply to Interior Designers Institute. 100% acceptance rate. Complete tuition breakdown: Certificate $2,795, Associate $40,600, Bachelor $61,450, Masters $22,600. Financial aid available. Winter 2026 term starts January 12.',
  keywords: [
    'apply interior design school',
    'interior design admissions California',
    'interior design school tuition',
    'interior design financial aid',
    'CIDA accredited admissions',
    'transfer credits interior design',
    'interior design payment plans',
  ],
  openGraph: {
    title: 'Admissions & Tuition | Interior Designers Institute',
    description: '100% acceptance rate. Complete tuition breakdown with payment plans. Financial aid available. Transfer students welcome. Winter 2026 term starts January 12.',
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
    details: [
      { item: 'Tuition', cost: '$2,400 (3 payments of $800)' },
      { item: 'Registration Fee', cost: '$95 ($250 international)' },
      { item: 'Supply Kit/Notebook/Textbook/Bag', cost: '$300' },
      { item: 'Additional Supplies (estimated)', cost: '$250' },
    ],
    totalCharges: '$2,795',
    totalEstimated: '$3,045',
    note: 'Option: Register for Lecture Series OR Studio Workshop separately at $1,200 each',
  },
  {
    program: "Associate's Degree",
    duration: '24-48 months',
    tuition: '$40,600',
    credential: 'AA in Interior Design',
    details: [
      { item: 'Tuition', cost: '$39,900 ($1,995/class × 20 classes)' },
      { item: 'Registration Fee', cost: '$100 ($250 international)' },
      { item: 'Textbooks/Supplies (estimated)', cost: '$2,500' },
      { item: 'Lab Fees', cost: '$600' },
    ],
    totalCharges: '$40,600',
    totalEstimated: '$43,100',
    paymentOptions: [
      'Full-time (14+ units): $7,980/term or 3 payments of $2,660',
      '3/4 time (10.5+ units): $5,985/term or 3 payments of $1,995',
      'Part-time (6-7 units): $3,990/term or 3 payments of $1,330',
    ],
  },
  {
    program: "Bachelor's Degree",
    duration: '30-54 months',
    tuition: '$61,450',
    credential: 'BA in Interior Design (CIDA)',
    highlight: true,
    details: [
      { item: 'Tuition (BA portion)', cost: '$19,950 ($2,217/class × 9 classes)' },
      { item: 'Registration Fee', cost: '$100 ($250 international)' },
      { item: 'Textbooks/Supplies (estimated)', cost: '$2,500' },
      { item: 'Lab Fees', cost: '$800' },
    ],
    totalCharges: '$20,850',
    totalEstimated: '$23,350',
    note: 'Combined AA + BA Total: $61,450',
    paymentOptions: [
      '3/4 time (10.5+ units): $6,651/term or 3 payments of $2,217',
      'Part-time (6+ units): $4,434/term or 3 payments of $1,478',
    ],
  },
  {
    program: "Master's Degree",
    duration: '12-15 months',
    tuition: '$22,600',
    credential: 'MIA Degree',
    details: [
      { item: 'Tuition', cost: '$22,500 ($2,500/class × 9 classes)' },
      { item: 'Registration Fee', cost: '$100' },
      { item: 'Textbooks/Supplies (estimated)', cost: '$2,500' },
    ],
    totalCharges: '$22,600',
    totalEstimated: '$25,100',
    paymentOptions: [
      '3 terms at $7,500/term',
      '4 terms at $2,500/class',
    ],
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
    answer: 'IDI operates on rolling admissions with three term start dates throughout the year (Fall, Winter, Spring). The upcoming Winter 2026 term starts January 12, 2026.',
  },
  {
    question: 'Can I work while attending IDI?',
    answer: 'Yes! We offer flexible scheduling with day and evening classes to accommodate working students. Many of our students maintain part-time or full-time jobs while pursuing their degrees.',
  },
  {
    question: 'How do I apply for financial aid?',
    answer: '100% of IDI students receive some form of financial aid. Start by completing the FAFSA at fafsa.gov. Our financial aid team will help you explore all available options including federal loans, grants, and payment plans.',
  },
  {
    question: 'What is the total cost of tuition?',
    answer: 'Tuition varies by program: Certificate ($2,795), Associate\'s ($40,600), Bachelor\'s ($61,450 combined AA+BA), and Master\'s ($22,600). These are total charges. Payment plans are available for all programs.',
  },
  {
    question: 'Is IDI accredited?',
    answer: 'Yes! IDI is accredited by ACCSC and BPPE. Our Bachelor\'s degree program is also accredited by CIDA (Council for Interior Design Accreditation), the gold standard for interior design education.',
  },
  {
    question: 'Can I transfer credits from another college?',
    answer: 'Yes! IDI evaluates transfer credit on an individual basis for both design-related credit and general education credit. Design credit requires portfolio review plus prior college credit. Only courses with a grade of "C" or better are accepted.',
  },
  {
    question: 'What payment options are available?',
    answer: 'IDI offers flexible payment plans for all programs. Depending on your enrollment status (full-time, 3/4 time, or part-time), you can pay per term or in monthly installments. See the detailed tuition breakdown for specific payment options.',
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

// Educational Organization Schema with Tuition Info
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Interior Designers Institute',
  description: 'CIDA-accredited interior design school in Newport Beach, CA. 100% acceptance rate. Four degree programs with flexible payment plans.',
  url: 'https://idi.edu',
  telephone: '+1-949-675-4451',
  email: 'contact@idi.edu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1061 Camelback Street',
    addressLocality: 'Newport Beach',
    addressRegion: 'CA',
    postalCode: '92660',
    addressCountry: 'US',
  },
  accreditation: [
    'CIDA - Council for Interior Design Accreditation',
    'ACCSC - Accrediting Commission of Career Schools and Colleges',
    'BPPE - Bureau of Private Postsecondary Education',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certificate of Completion',
      credentialCategory: 'Certificate',
      timeToComplete: 'P12W',
      educationalLevel: 'Certificate',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Associate of Arts in Interior Design',
      credentialCategory: 'Associate Degree',
      timeToComplete: 'P24M',
      educationalLevel: 'Associate',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Bachelor of Arts in Interior Design',
      credentialCategory: 'Bachelor Degree',
      timeToComplete: 'P30M',
      educationalLevel: 'Bachelor',
      recognizedBy: {
        '@type': 'Organization',
        name: 'CIDA - Council for Interior Design Accreditation',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Master of Interior Architecture',
      credentialCategory: 'Master Degree',
      timeToComplete: 'P12M',
      educationalLevel: 'Master',
    },
  ],
  offers: [
    {
      '@type': 'Offer',
      category: 'Certificate Course',
      price: '2795',
      priceCurrency: 'USD',
      description: '12-week Certificate of Completion program',
    },
    {
      '@type': 'Offer',
      category: 'Associate Degree',
      price: '40600',
      priceCurrency: 'USD',
      description: 'Associate of Arts in Interior Design',
    },
    {
      '@type': 'Offer',
      category: 'Bachelor Degree',
      price: '61450',
      priceCurrency: 'USD',
      description: 'CIDA-accredited Bachelor of Arts in Interior Design',
    },
    {
      '@type': 'Offer',
      category: 'Master Degree',
      price: '22600',
      priceCurrency: 'USD',
      description: 'Master of Interior Architecture',
    },
  ],
  financialAid: {
    '@type': 'FinancialProduct',
    name: 'Federal Financial Aid',
    description: '100% of IDI students receive some form of financial aid including federal loans, grants, and payment plans.',
  },
};

export default function AdmissionsPage() {
  return (
    <>
      {/* Schema.org JSON-LD - FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Schema.org JSON-LD - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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

      {/* Upcoming Term */}
      <section className="py-20 bg-white animate-on-scroll">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-black text-white p-12 rounded-[40px] text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              <span>Next Term Starting Soon</span>
            </div>
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4">
              Winter 2026 Term
            </h2>
            <p className="text-2xl text-white/80 mb-8">
              <span className="font-mono">January 12, 2026</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://interiordesignersinstitute.formstack.com/forms/winter_2026_registration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-white/90 font-semibold rounded-full transition-colors"
              >
                Register for Winter 2026
              </a>
              <a
                href="tel:+19496754451"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors border border-white/30"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call to Learn More
              </a>
            </div>
            <p className="mt-6 text-white/60 text-sm">
              Rolling admissions with three term starts: Fall, Winter, and Spring
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Tuition Breakdown */}
      <section className="py-20 bg-[#f8f8f8] animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 text-black">
              Complete Tuition Breakdown
            </h2>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
              Transparent pricing with detailed costs and flexible payment options
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {programTuition.map((program, index) => (
              <div
                key={program.program}
                className={`bg-white p-8 md:p-12 rounded-[40px] border ${
                  program.highlight
                    ? 'border-black shadow-lg'
                    : 'border-black/10'
                } relative`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {program.highlight && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-black text-white text-xs font-semibold px-4 py-1 rounded-full">
                      CIDA Accredited
                    </span>
                  </div>
                )}

                {/* Program Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 pb-8 border-b border-black/10">
                  <div>
                    <h3 className="font-bricolage text-3xl font-bold mb-2 text-black">
                      {program.program}
                    </h3>
                    <p className="text-lg text-neutral-500 mb-2">{program.credential}</p>
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Clock className="w-5 h-5" />
                      <span className="font-mono">{program.duration}</span>
                    </div>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="font-mono text-4xl font-bold text-black">
                      {program.tuition}
                    </div>
                    <div className="text-sm text-neutral-400 mt-1">total charges</div>
                  </div>
                </div>

                {/* Cost Breakdown Table */}
                <div className="mb-8">
                  <h4 className="font-bricolage text-xl font-semibold mb-4 text-black">Cost Breakdown</h4>
                  <div className="space-y-3">
                    {program.details.map((detail, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-black/5">
                        <span className="text-neutral-600">{detail.item}</span>
                        <span className="font-mono font-semibold text-black">{detail.cost}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-4 bg-black/5 px-4 rounded-2xl mt-4">
                      <span className="font-bricolage text-lg font-semibold text-black">Total Charges</span>
                      <span className="font-mono text-xl font-bold text-black">{program.totalCharges}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4">
                      <span className="text-neutral-600">Total Estimated (with supplies)</span>
                      <span className="font-mono font-semibold text-black">{program.totalEstimated}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                {program.paymentOptions && (
                  <div className="mb-6 bg-black/5 p-6 rounded-2xl">
                    <h4 className="font-bricolage text-lg font-semibold mb-3 text-black">Payment Options</h4>
                    <ul className="space-y-2">
                      {program.paymentOptions.map((option, i) => (
                        <li key={i} className="flex items-start gap-2 text-neutral-600">
                          <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                          <span className="font-mono text-sm">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Note */}
                {program.note && (
                  <p className="text-sm text-neutral-500 italic">{program.note}</p>
                )}

                {/* Learn More Link */}
                <Link
                  href={`/programs/${program.program.toLowerCase().split("'")[0]}`}
                  className="mt-6 inline-flex items-center text-black hover:text-black/70 font-semibold transition-colors"
                >
                  Learn More About This Program →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-[32px] border border-black/10 max-w-3xl mx-auto text-center">
            <h3 className="font-bricolage text-2xl font-bold mb-4 text-black">Additional Fees</h3>
            <div className="space-y-2 text-neutral-600">
              <p><span className="font-semibold">STRF Fee:</span> <span className="font-mono">$0.00</span> (non-refundable)</p>
              <p><span className="font-semibold">International Student Registration:</span> <span className="font-mono">$250</span></p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-500 mb-6">
              100% of IDI students receive some form of financial aid
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

      {/* Transfer Students */}
      <section className="py-20 bg-white animate-on-scroll">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 text-black">
              Transfer Students Welcome
            </h2>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
              IDI evaluates transfer credit on an individual basis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f8f8f8] p-8 rounded-[32px]">
              <h3 className="font-bricolage text-2xl font-semibold mb-4 text-black">Types of Transfer Credit</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-black">Design-related credit</p>
                    <p className="text-sm text-neutral-600">From prior interior design coursework</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-black">General education credit</p>
                    <p className="text-sm text-neutral-600">For BA program requirements</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#f8f8f8] p-8 rounded-[32px]">
              <h3 className="font-bricolage text-2xl font-semibold mb-4 text-black">Evaluation Process</h3>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-black font-bold">01</span>
                  <span>Credit evaluation available upon Transfer Application completion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-black font-bold">02</span>
                  <span>Official transcripts required prior to entering degree program</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-black font-bold">03</span>
                  <span>Design credit based on portfolio review + prior college credit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-black font-bold">04</span>
                  <span>Only courses with grade of "C" or better accepted</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Maximum Transfer Credits Table */}
          <div className="bg-white border border-black/10 rounded-[32px] overflow-hidden mb-8">
            <div className="bg-black text-white p-6">
              <h3 className="font-bricolage text-2xl font-semibold">Maximum Transfer Credits</h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-3 gap-4 font-semibold text-sm text-neutral-500 mb-4 pb-4 border-b border-black/10">
                <div>Program</div>
                <div>Design Credits</div>
                <div>General Education</div>
              </div>
              {[
                { program: 'Certificate', design: '0 units', ge: 'N/A' },
                { program: 'AA Degree', design: '38 units', ge: 'N/A' },
                { program: 'BA Degree', design: '38 units', ge: '45 units' },
                { program: 'MIA Degree', design: '22 units', ge: 'N/A' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 py-4 border-b border-black/5 last:border-0">
                  <div className="font-semibold text-black">{row.program}</div>
                  <div className="font-mono text-neutral-600">{row.design}</div>
                  <div className="font-mono text-neutral-600">{row.ge}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-[#f8f8f8] p-8 rounded-[32px] mb-8">
            <h4 className="font-bricolage text-xl font-semibold mb-4 text-black">Important Notes</h4>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-black">•</span>
                <span>No articulation/transfer agreements with other colleges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black">•</span>
                <span>No credit for practical experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black">•</span>
                <span>No ability-to-benefit students accepted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black">•</span>
                <span>No challenge examinations or achievement tests</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href="https://interiordesignersinstitute.formstack.com/forms/transfer_student"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-black hover:bg-black/90 text-white font-semibold rounded-full transition-colors"
            >
              Transfer Student Application
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
              100% of IDI students receive some form of financial aid
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

          {/* Financial Aid Resources */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="font-bricolage text-2xl font-semibold mb-6 text-white text-center">
              Financial Aid Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://idi.edu/NetPriceCalculator/npcalc.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-6 rounded-[32px] border border-white/20 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bricolage text-lg font-semibold text-white mb-2 group-hover:underline">
                      Net Price Calculator
                    </h4>
                    <p className="text-white/70 text-sm">
                      Estimate your actual cost after financial aid
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://idi.edu/wp-content/uploads/2025/10/2025-26-IDI-estimated-tuition-fees.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-6 rounded-[32px] border border-white/20 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bricolage text-lg font-semibold text-white mb-2 group-hover:underline">
                      Estimated Costs PDF
                    </h4>
                    <p className="text-white/70 text-sm">
                      2025-26 tuition, fees, and expenses breakdown
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://idi.edu/wp-content/uploads/2025/10/Fin-Assistance-Disclosures-10032025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-6 rounded-[32px] border border-white/20 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bricolage text-lg font-semibold text-white mb-2 group-hover:underline">
                      Financial Assistance Disclosures
                    </h4>
                    <p className="text-white/70 text-sm">
                      Complete financial aid information and disclosures
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://studentaid.gov/h/apply-for-aid/fafsa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-6 rounded-[32px] border border-white/20 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bricolage text-lg font-semibold text-white mb-2 group-hover:underline">
                      Complete FAFSA
                    </h4>
                    <p className="text-white/70 text-sm">
                      Apply for federal student aid at studentaid.gov
                    </p>
                  </div>
                </div>
              </a>
            </div>
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
