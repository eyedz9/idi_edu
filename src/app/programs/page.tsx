import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ProgramComparisonCard } from '@/components/ui/ProgramComparisonCard';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interior Design Programs',
  description: 'Choose from 4 interior design programs: 12-week Certificate ($2,795), Associate degree (24-48 months), CIDA-accredited Bachelor\'s (30-54 months), or Master\'s degree (12-15 months).',
  keywords: [
    'interior design programs California',
    'CIDA accredited interior design degree',
    'interior design certificate program',
    'associate degree interior design',
    'bachelor interior design CIDA',
    'master interior architecture',
    'best interior design school Orange County',
  ],
  openGraph: {
    title: 'Interior Design Programs | IDI',
    description: 'From introductory certificates to advanced graduate degrees. Find your path in interior design at Orange County\'s premier design school.',
    url: 'https://idi.edu/programs',
    type: 'website',
  },
};

const programs = [
  {
    title: 'Certificate of Interior Design',
    credential: 'Certificate of Completion',
    duration: '12 weeks',
    tuition: '$2,795 (total)',
    description: 'Introduction to interior design fundamentals. Perfect for career changers or those exploring the field with no prior experience needed.',
    href: '/programs/certificate',
    isCIDA: false,
  },
  {
    title: 'Associate of Arts in Interior Design',
    credential: 'Associate of Arts Degree',
    duration: '24-48 months',
    tuition: '$40,600',
    description: 'Comprehensive foundation in interior design with flexible scheduling. Learn industry-standard software and prepare for entry-level positions.',
    href: '/programs/associate',
    isCIDA: false,
  },
  {
    title: 'Bachelor of Arts in Interior Design',
    credential: 'Bachelor of Arts Degree',
    duration: '30-54 months',
    tuition: '$61,450 (total AA+BA)',
    description: 'CIDA-accredited professional degree preparing you for comprehensive interior design practice and the NCIDQ exam.',
    href: '/programs/bachelor',
    isCIDA: true,
  },
  {
    title: 'Master of Interior Architecture',
    credential: 'Master of Interior Architecture (MIA)',
    duration: '12-15 months',
    tuition: '$22,600',
    description: 'Advanced study for those with existing bachelor\'s degrees. Focus on research, thesis work, and career advancement.',
    href: '/programs/masters',
    isCIDA: false,
  },
];

const allProgramsBenefits = [
  'Small class sizes (10:1 student-to-faculty ratio)',
  '100% practicing design professionals as instructors',
  'Flexible scheduling for working students',
  'Hands-on studio experience',
  'Industry-standard software training',
  'Access to professional organizations (ASID, IIDA, NEWH, NKBA)',
  'Career services and industry connections',
  'Location near Laguna Design Center and SOCO',
];

export default function ProgramsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero Section - Dark */}
      <section className="relative py-24 lg:py-32 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop"
            alt="Interior design studio"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-bricolage text-5xl lg:text-6xl mb-6" style={{ color: 'var(--text-primary)' }}>
              Find Your Path in <span className="font-display italic">Interior Design</span>
            </h1>
            <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Whether you're exploring a new career or advancing your expertise, IDI offers four distinct pathways to achieve your design goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-block px-8 py-4 font-medium rounded-full transition-colors"
                style={{
                  backgroundColor: 'var(--text-primary)',
                  color: 'var(--text-dark)'
                }}
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 font-medium rounded-full transition-colors"
                style={{
                  backgroundColor: 'transparent',
                  borderWidth: '2px',
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
            { label: 'Programs' },
          ]}
        />
      </section>

      {/* Programs Comparison - Light */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)', animationDelay: '0.1s' }}>
        <div className="text-center mb-12">
          <h2 className="font-bricolage text-4xl lg:text-5xl mb-4" style={{ color: 'var(--text-dark)' }}>
            Four Paths to Your <span className="font-display italic" style={{ color: 'var(--accent-terracotta)' }}>Design Career</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-dark-secondary)' }}>
            From introductory certificates to advanced graduate degrees, choose the program that aligns with your career goals and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <ProgramComparisonCard key={index} {...program} />
          ))}
        </div>
      </section>

      {/* Which Program Section - Dark */}
      <section className="py-16 animate-on-scroll" style={{ backgroundColor: 'var(--bg-secondary)', animationDelay: '0.2s' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-bricolage text-4xl mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
            Which Program is <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>Right for You?</span>
          </h2>

          <div className="space-y-8">
            {/* Certificate */}
            <div className="p-8 rounded-[32px]" style={{
              backgroundColor: 'var(--bg-primary)',
              borderWidth: '1px',
              borderColor: 'var(--border-default)'
            }}>
              <h3 className="font-bricolage text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
                Choose the <span className="font-display italic">Certificate</span> if you:
              </h3>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Want to explore interior design without a long-term commitment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Are considering a career change and want to test the waters</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Need foundational design knowledge for your current role</span>
                </li>
              </ul>
            </div>

            {/* Associate */}
            <div className="p-8 rounded-[32px]" style={{
              backgroundColor: 'var(--bg-primary)',
              borderWidth: '1px',
              borderColor: 'var(--border-default)'
            }}>
              <h3 className="font-bricolage text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
                Choose the <span className="font-display italic">Associate</span> if you:
              </h3>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Want a comprehensive foundation in interior design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Need flexible scheduling to work while studying</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Plan to pursue entry-level design positions</span>
                </li>
              </ul>
            </div>

            {/* Bachelor */}
            <div className="p-8 rounded-[32px]" style={{
              backgroundColor: 'var(--bg-primary)',
              borderWidth: '2px',
              borderColor: 'var(--accent-gold)'
            }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-bricolage text-2xl" style={{ color: 'var(--text-primary)' }}>
                  Choose the <span className="font-display italic">Bachelor</span> if you:
                </h3>
                <span className="px-3 py-1 text-xs font-mono rounded-full uppercase" style={{
                  backgroundColor: 'var(--accent-gold)',
                  color: 'var(--text-dark)'
                }}>
                  CIDA ACCREDITED
                </span>
              </div>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Want CIDA accreditation for professional practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Plan to take the NCIDQ exam for licensure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Seek the most comprehensive education in interior design</span>
                </li>
              </ul>
            </div>

            {/* Masters */}
            <div className="p-8 rounded-[32px]" style={{
              backgroundColor: 'var(--bg-primary)',
              borderWidth: '1px',
              borderColor: 'var(--border-default)'
            }}>
              <h3 className="font-bricolage text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
                Choose the <span className="font-display italic">Master's</span> if you:
              </h3>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Already have a bachelor's degree in any field</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Want to advance your career with graduate-level expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                  <span>Are interested in research and advanced interior architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* All Programs Benefits - Light */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)', animationDelay: '0.3s' }}>
        <h2 className="font-bricolage text-4xl mb-8 text-center" style={{ color: 'var(--text-dark)' }}>
          What <span className="font-display italic" style={{ color: 'var(--accent-terracotta)' }}>All Our Programs</span> Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {allProgramsBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-terracotta)' }} />
              <span className="text-lg" style={{ color: 'var(--text-dark-secondary)' }}>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-16 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)', animationDelay: '0.4s' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-bricolage text-4xl lg:text-5xl mb-6" style={{ color: 'var(--text-primary)' }}>
            Ready to Start Your <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>Design Journey?</span>
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
            Have questions about which program is right for you? Our admissions team is here to help you make the best choice for your career goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-block px-8 py-4 font-medium rounded-full transition-colors"
              style={{
                backgroundColor: 'var(--text-primary)',
                color: 'var(--text-dark)'
              }}
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 font-medium rounded-full transition-colors"
              style={{
                backgroundColor: 'transparent',
                borderWidth: '2px',
                borderColor: 'var(--border-default)',
                color: 'var(--text-primary)'
              }}
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
