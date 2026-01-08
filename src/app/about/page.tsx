import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, MapPin, Users, Award, Lightbulb, Target, Heart, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Learn about IDI, Orange County's premier interior design school since 1984. CIDA accredited programs taught by practicing professionals.",
  openGraph: {
    title: 'About Us | Interior Designers Institute',
    description: "Learn about IDI, Orange County's premier interior design school since 1984. CIDA accredited programs taught by practicing professionals.",
  },
};

// Schema.org JSON-LD for Educational Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Interior Designers Institute',
  alternateName: 'IDI',
  description: "Orange County's only dedicated interior design school, offering CIDA-accredited programs since 1984",
  foundingDate: '1984',
  url: 'https://idi.edu',
  logo: 'https://idi.edu/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1061 Camelback Street',
    addressLocality: 'Newport Beach',
    addressRegion: 'CA',
    postalCode: '92660',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '33.6189',
    longitude: '-117.9298',
  },
  telephone: '(949) 675-4451',
  email: 'contact@idi.edu',
  sameAs: [
    'https://www.facebook.com/interiordesignersinstitute',
    'https://www.instagram.com/idi_newportbeach',
  ],
  accreditedBy: [
    {
      '@type': 'Organization',
      name: 'Council for Interior Design Accreditation',
      alternateName: 'CIDA',
    },
    {
      '@type': 'Organization',
      name: 'Accrediting Commission of Career Schools and Colleges',
      alternateName: 'ACCSC',
    },
    {
      '@type': 'Organization',
      name: 'Bureau for Private Postsecondary Education',
      alternateName: 'BPPE',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certificate of Completion in Interior Design',
      credentialCategory: 'Certificate',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Associate of Arts in Interior Design',
      credentialCategory: 'Associate Degree',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Bachelor of Arts in Interior Design',
      credentialCategory: "Bachelor's Degree",
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Master of Interior Architecture',
      credentialCategory: "Master's Degree",
    },
  ],
  numberOfStudents: {
    '@type': 'QuantitativeValue',
    value: 150,
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Interior Designers Institute Alumni Network',
  },
};

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Maintaining the highest standards in design education through rigorous curriculum and expert faculty.',
  },
  {
    icon: Lightbulb,
    title: 'Creativity',
    description: 'Fostering innovative thinking and unique design perspectives in every student.',
  },
  {
    icon: Users,
    title: 'Industry Connection',
    description: 'Building bridges between education and professional practice through real-world experience.',
  },
  {
    icon: Heart,
    title: 'Student Success',
    description: 'Providing personalized support and mentorship to help each student achieve their career goals.',
  },
];

const campusFeatures = [
  'Modern design studios with professional-grade equipment',
  'Extensive materials library with fabric, finish, and furniture samples',
  'Computer labs with industry-standard software',
  'Photography studio for portfolio development',
  'Student lounge and collaborative workspace',
  'Proximity to Laguna Design Center and SOCO design district',
];

export default function AboutPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop"
            alt="Interior design studio workspace"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center animate-on-scroll">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About</span>
          </nav>

          <h1 className="font-bricolage text-5xl md:text-7xl font-bold mb-6">
            About Interior Designers Institute
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Orange County's only dedicated interior design school since 1984
          </p>
        </div>
      </section>

      {/* History/Story Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-on-scroll">
              <div className="inline-block mb-4">
                <span className="font-mono text-[#C4725D] text-sm font-semibold uppercase tracking-wider">
                  Since 1984
                </span>
              </div>
              <h2 className="font-bricolage text-4xl md:text-5xl font-light mb-6 text-white">
                40 Years of Design Education Excellence
              </h2>
              <div className="space-y-6 font-body text-lg text-white/70 leading-relaxed">
                <p>
                  Founded in 1984, Interior Designers Institute stands as{' '}
                  <strong className="text-white">Orange County's only school exclusively dedicated to interior design education</strong>.
                  For four decades, we have been preparing students for successful careers in residential and commercial interior design.
                </p>
                <p>
                  Our mission is simple yet profound: to provide comprehensive, hands-on training that prepares students
                  to enter the interior design profession with confidence and expertise. We believe that the best design
                  education combines creative exploration with practical, real-world skills.
                </p>
                <p>
                  What sets IDI apart is our unwavering commitment to quality. With a{' '}
                  <strong className="text-white font-mono">10:1 student-to-faculty ratio</strong>, small class sizes,
                  and 100% practicing professionals as instructors, every student receives personalized mentorship from
                  designers actively working in the field.
                </p>
                <p>
                  Located in the heart of Newport Beach, we're surrounded by some of Southern California's most vibrant
                  design centers and showrooms, providing our students with unparalleled access to industry resources
                  and networking opportunities.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
                <div>
                  <div className="font-mono text-5xl font-bold text-[#C4725D] mb-2">40</div>
                  <div className="font-body text-white/60">Years of Excellence</div>
                </div>
                <div>
                  <div className="font-mono text-5xl font-bold text-[#C4725D] mb-2">88%</div>
                  <div className="font-body text-white/60">Graduation Rate</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[600px] rounded-[32px] overflow-hidden shadow-xl animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <Image
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80&fit=crop"
                alt="Students working in design studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section - Light background for contrast */}
      <section className="py-24 px-6 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-bricolage text-4xl md:text-5xl font-light mb-6 text-neutral-900">
              Our Mission & Values
            </h2>
            <p className="font-body text-xl text-neutral-600 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to student success and design excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neutral-900">
                    <Icon className="w-7 h-7 text-neutral-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bricolage text-xl font-medium mb-3 text-neutral-900">
                    {value.title}
                  </h3>
                  <p className="font-body text-neutral-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-[32px] overflow-hidden shadow-xl order-2 lg:order-1 animate-on-scroll">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&fit=crop"
                alt="IDI campus in Newport Beach"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center gap-2 mb-4 text-[#C4725D]">
                <MapPin className="w-5 h-5" />
                <span className="font-mono text-sm font-semibold uppercase tracking-wider">
                  Newport Beach, CA
                </span>
              </div>
              <h2 className="font-bricolage text-4xl md:text-5xl font-light mb-6 text-white">
                Our Campus
              </h2>
              <p className="font-body text-lg text-white/70 leading-relaxed mb-8">
                Located at <strong className="text-white">1061 Camelback Street in Newport Beach</strong>,
                our modern campus provides students with everything they need to develop their design skills in a
                professional environment.
              </p>

              <div className="space-y-4 mb-8">
                {campusFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#C4725D]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-[#C4725D] rounded-full" />
                    </div>
                    <span className="font-body text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=1061+Camelback+Street,Newport+Beach,CA+92660"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a0a0a] font-semibold rounded-full hover:bg-neutral-200 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                View on Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-24 px-6 bg-[#151515]">
        <div className="max-w-7xl mx-auto text-center animate-on-scroll">
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium mb-4 block">
            Industry Recognized
          </span>
          <h2 className="font-bricolage text-4xl md:text-5xl font-light text-white mb-6">
            Accreditation
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
            Our programs meet the highest standards of quality in design education.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-sm uppercase tracking-wider text-white/60">CIDA Accredited</span>
            <span className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-sm uppercase tracking-wider text-white/60">ACCSC</span>
            <span className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-sm uppercase tracking-wider text-white/60">BPPE Approved</span>
          </div>
        </div>
      </section>

      {/* Faculty Overview Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-on-scroll">
              <div className="inline-flex items-center gap-2 mb-4 text-[#C4725D]">
                <GraduationCap className="w-5 h-5" />
                <span className="font-mono text-sm font-semibold uppercase tracking-wider">
                  Expert Faculty
                </span>
              </div>
              <h2 className="font-bricolage text-4xl md:text-5xl font-light mb-6 text-white">
                Learn from Practicing Professionals
              </h2>
              <div className="space-y-6 font-body text-lg text-white/70 leading-relaxed">
                <p>
                  At IDI, <strong className="text-white font-mono">100% of our faculty are practicing professionals</strong>{' '}
                  actively working in the interior design industry. This isn't just a statistic—it's a fundamental
                  part of who we are.
                </p>
                <p>
                  Our instructors bring real-world experience directly into the classroom, sharing current industry
                  practices, emerging trends, and practical insights that can only come from active professional work.
                  They maintain relationships with design firms, vendors, and clients throughout Southern California,
                  providing students with valuable networking opportunities.
                </p>
                <p>
                  From residential design specialists to commercial space planners, from sustainable design experts to
                  hospitality designers, our faculty represents the full spectrum of interior design practice. Their
                  diverse backgrounds ensure students receive a comprehensive education that prepares them for any
                  path in the profession.
                </p>
              </div>

              <div className="mt-12 p-8 bg-[#151515] rounded-2xl border border-white/10">
                <div className="font-mono text-4xl font-bold text-[#C4725D] mb-2">10:1</div>
                <div className="font-body text-white font-semibold mb-2">Student-to-Faculty Ratio</div>
                <p className="font-body text-white/60">
                  Small class sizes mean personalized attention, detailed feedback on your work, and meaningful
                  mentorship relationships.
                </p>
              </div>
            </div>

            {/* Faculty Grid Placeholder */}
            <div className="grid grid-cols-2 gap-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="relative aspect-square rounded-2xl overflow-hidden bg-[#151515]">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      item === 1 ? '1573496359142-b9b36e926d57' :
                      item === 2 ? '1560250097-0b93528c311a' :
                      item === 3 ? '1573497019940-1c28c88b4f3e' :
                      '1580489944761-15a19d654956'
                    }?w=400&q=80&fit=crop`}
                    alt={`Faculty member ${item}`}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="font-bricolage text-4xl md:text-5xl font-light mb-6">
            Ready to Start Your Design Journey?
          </h2>
          <p className="font-body text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join 40 years of design excellence. Explore our programs, schedule a campus visit, or speak with an admissions advisor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/programs"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors text-center"
            >
              Explore Programs
            </Link>
            <Link
              href="/admissions#visit"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold rounded-full transition-colors text-center"
            >
              Schedule a Visit
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 text-white/60 hover:text-white font-semibold transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
