import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Briefcase, BookOpen, Award, Calendar, MapPin, Network, Lightbulb, Handshake, Trophy, Building2, GraduationCap, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Student Life | Professional Organizations & Career Services',
  description: 'Join ASID, IIDA, NEWH, and NKBA student chapters. Access career counseling, portfolio development, job placement, and industry connections. Build your professional network at IDI.',
  keywords: [
    'interior design student organizations',
    'ASID student chapter',
    'IIDA campus center',
    'interior design career services',
    'design networking Orange County',
    'interior design portfolio development',
  ],
  openGraph: {
    title: 'Student Life at Interior Designers Institute',
    description: 'Professional organizations, career services, and industry connections. Join the design community at IDI.',
    url: 'https://idi.edu/student-life',
    type: 'website',
  },
};

const organizations = [
  {
    name: 'ASID',
    fullName: 'American Society of Interior Designers',
    description: 'The largest professional organization for interior designers, providing unparalleled networking opportunities and industry connections.',
    benefits: [
      'Networking events and industry connections',
      'Student membership benefits',
      'Access to professional resources',
      'Career advancement opportunities',
    ],
    icon: Award,
    color: 'pink',
  },
  {
    name: 'IIDA',
    fullName: 'International Interior Design Association',
    description: 'A global design community offering professional development resources and career advancement opportunities.',
    benefits: [
      'Global design community access',
      'Professional development resources',
      'Career advancement opportunities',
      'International design initiatives',
    ],
    icon: Network,
    color: 'eggplant',
  },
  {
    name: 'NEWH',
    fullName: 'Hospitality Industry Network',
    description: 'Specializing in hospitality design with a focus on hotels, restaurants, and resort design. Offering scholarship opportunities and industry mentorship.',
    benefits: [
      'Hospitality design focus',
      'Scholarship opportunities',
      'Industry mentorship programs',
      'Networking with hospitality professionals',
    ],
    icon: Handshake,
    color: 'pink',
  },
  {
    name: 'NKBA',
    fullName: 'National Kitchen & Bath Association',
    description: 'Leading non-profit trade group for the kitchen and bath industry, providing resources, research, certification, and events (like the KBIS trade show) to designers, remodelers, manufacturers, and installers.',
    benefits: [
      'Kitchen & bath industry resources',
      'Certification programs',
      'Access to KBIS trade show',
      'Professional networking opportunities',
    ],
    icon: Trophy,
    color: 'eggplant',
  },
];

const careerServices = [
  {
    title: 'Career Counseling',
    description: 'One-on-one guidance to help you plan your design career path and achieve your professional goals.',
    icon: Users,
  },
  {
    title: 'Portfolio Development',
    description: 'Expert assistance in building a professional portfolio that showcases your best work to employers.',
    icon: Briefcase,
  },
  {
    title: 'Job Placement',
    description: 'Access to our network of design firms, studios, and industry partners actively seeking IDI graduates.',
    icon: Handshake,
  },
  {
    title: 'Industry Connections',
    description: 'Direct access to practicing professionals, guest speakers, and networking events throughout the year.',
    icon: Network,
  },
  {
    title: 'Resume & Interview Prep',
    description: 'Personalized coaching to help you present your skills and experience professionally.',
    icon: BookOpen,
  },
  {
    title: 'Internship Opportunities',
    description: 'Connections to internship programs that provide real-world experience while you study.',
    icon: Calendar,
  },
];

const resources = [
  {
    title: 'Design Library',
    description: 'Access thousands of design books, magazines, material samples, and industry publications.',
  },
  {
    title: 'Computer Labs',
    description: 'State-of-the-art labs with Revit, AutoCAD, SketchUp, Adobe Creative Suite, and more.',
  },
  {
    title: 'Material Resource Center',
    description: 'Extensive collection of fabric samples, finishes, flooring, and furniture catalogs.',
  },
  {
    title: 'Design Studios',
    description: 'Dedicated studio space with drafting tables, lighting, and collaborative work areas.',
  },
  {
    title: 'Student Lounge',
    description: 'Comfortable common areas for studying, collaborating, and connecting with classmates.',
  },
  {
    title: 'Kitchen Facilities',
    description: 'Full kitchen available for students during breaks and between classes.',
  },
];

const locationBenefits = [
  {
    title: 'Laguna Design Center',
    description: 'Minutes from one of Southern California\'s premier design destinations with high-end showrooms.',
    icon: MapPin,
  },
  {
    title: 'SOCO & The OC Mix',
    description: 'Contemporary design districts featuring furniture showrooms, galleries, and design resources.',
    icon: MapPin,
  },
  {
    title: 'Pacific Design Center',
    description: 'Easy access to LA\'s legendary design hub for industry events and showroom visits.',
    icon: MapPin,
  },
  {
    title: 'Orange County Coast',
    description: 'Study in one of California\'s most beautiful coastal communities with inspiring surroundings.',
    icon: MapPin,
  },
];

const events = [
  'Industry guest speaker series',
  'Design firm site tours',
  'Product manufacturer presentations',
  'Student design exhibitions',
  'Portfolio review nights',
  'Networking mixers',
  'Design competitions',
  'Professional development workshops',
];

const hiringFirms = [
  {
    name: 'Gensler',
    description: "World's largest architecture firm",
    icon: Building2,
  },
  {
    name: 'WATG',
    description: 'Global hospitality design',
    icon: Building2,
  },
  {
    name: 'Disney Studios',
    description: 'Entertainment design',
    icon: Building2,
  },
  {
    name: 'Sony Studios',
    description: 'Entertainment design',
    icon: Building2,
  },
  {
    name: 'HGTV',
    description: 'Media and television',
    icon: Building2,
  },
  {
    name: 'Mercedes Benz',
    description: 'Automotive showrooms',
    icon: Building2,
  },
  {
    name: 'IA Interior Architects',
    description: 'Corporate interiors',
    icon: Building2,
  },
  {
    name: 'Michael Graves',
    description: 'Architecture and design',
    icon: Building2,
  },
  {
    name: 'H. Hendy',
    description: 'Commercial interiors',
    icon: Building2,
  },
];

const studentBodyTypes = [
  {
    title: 'Recent High School Graduates',
    description: 'Beginning their design journey right after high school',
    icon: GraduationCap,
  },
  {
    title: 'Transfer Students',
    description: 'Coming from other colleges to pursue interior design',
    icon: Users,
  },
  {
    title: 'Career Changers',
    description: 'Seeking new professional paths in design',
    icon: Briefcase,
  },
  {
    title: 'Students of All Ages',
    description: 'Pursuing their passion for design at any life stage',
    icon: Award,
  },
];

const flexibilityFeatures = [
  {
    title: 'Day & Evening Classes',
    description: 'Multiple class time options throughout the week to accommodate your schedule',
    icon: Clock,
  },
  {
    title: 'Work While You Study',
    description: 'Many students work full-time while pursuing their degree',
    icon: Briefcase,
  },
  {
    title: 'Enter the Field Early',
    description: 'Some students begin working in design while completing their degree',
    icon: Building2,
  },
  {
    title: 'Professional Schedules',
    description: 'Programs designed to accommodate working professionals',
    icon: Calendar,
  },
];

const campusCulture = [
  'Small class sizes foster collaboration and community',
  'Hands-on studio environment',
  'Field trips to design centers and showrooms',
  'Industry events and guest speakers',
  'Student work showcases and exhibitions',
];

const socialMedia = [
  { name: 'Facebook', handle: 'Interior Designers Institute', icon: Facebook, url: 'https://facebook.com' },
  { name: 'Instagram', handle: '@interiordesignersinstitute', icon: Instagram, url: 'https://instagram.com/interiordesignersinstitute' },
  { name: 'TikTok', handle: '@idi_newportbeach', icon: Award, url: 'https://tiktok.com/@idi_newportbeach' },
  { name: 'Pinterest', handle: '@idinewportbeach', icon: Award, url: 'https://pinterest.com/idinewportbeach' },
  { name: 'YouTube', handle: 'Interior Designers Institute', icon: Youtube, url: 'https://youtube.com' },
];

export default function StudentLifePage() {
  return (
    <>
      {/* Hero Section - Dark Navy */}
      <section className="relative text-white py-24 md:py-32 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                <li>
                  <Link href="/" className="transition-colors" style={{ color: 'var(--text-secondary)' }}>
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li style={{ color: 'var(--text-primary)' }}>Student Life</li>
              </ol>
            </nav>

            <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Life at <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>IDI</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Join a vibrant community of designers, connect with industry professionals, and build the career you've always wanted.
            </p>
            <a
              href="#diverse-community"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)' }}
            >
              Explore Student Life
            </a>
          </div>
        </div>
      </section>

      {/* Diverse Student Body - Light Cream */}
      <section id="diverse-community" className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)', animationDelay: '0.1s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
              A <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>Diverse</span> Student Community
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              IDI welcomes students from all backgrounds and life stages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentBodyTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="p-6 rounded-3xl text-center"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border-default)',
                    animationDelay: `${0.2 + index * 0.1}s`
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'rgba(255, 92, 141, 0.2)' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: 'var(--accent-gold)' }} />
                  </div>
                  <h3 className="font-bricolage text-lg font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>
                    {type.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flexible Scheduling - Dark Navy */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', animationDelay: '0.2s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>Flexible</span> for Working Students
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Programs designed to accommodate professional schedules and working students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {flexibilityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-8 rounded-[32px] flex items-start gap-6"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-default)',
                    animationDelay: `${0.3 + index * 0.1}s`
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(115, 37, 83, 0.2)' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: 'var(--accent-terracotta)' }} />
                  </div>
                  <div>
                    <h3 className="font-bricolage text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Organizations - Light Cream */}
      <section id="organizations" className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)', animationDelay: '0.1s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
              <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>Professional</span> Organizations
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              Build your professional network and gain industry recognition through student chapters
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {organizations.map((org, index) => {
              const Icon = org.icon;
              return (
                <div
                  key={org.name}
                  className="p-8 rounded-[32px] hover:shadow-xl transition-all"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border-default)',
                    animationDelay: `${0.2 + index * 0.1}s`
                  }}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0`}
                      style={{ backgroundColor: org.color === 'pink' ? 'rgba(255, 92, 141, 0.2)' : 'rgba(115, 37, 83, 0.2)' }}
                    >
                      <Icon className="w-8 h-8" style={{ color: org.color === 'pink' ? 'var(--accent-gold)' : 'var(--accent-terracotta)' }} />
                    </div>
                    <div>
                      <h3 className="font-bricolage text-2xl font-bold mb-1" style={{ color: 'var(--text-dark)' }}>
                        {org.name}
                      </h3>
                      <p className="text-sm font-mono" style={{ color: 'var(--text-dark)', opacity: 0.6 }}>
                        {org.fullName}
                      </p>
                    </div>
                  </div>
                  <p className="leading-relaxed mb-6" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                    {org.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold" style={{ color: 'var(--text-dark)' }}>Member Benefits:</h4>
                    <ul className="space-y-2">
                      {org.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1" style={{ color: 'var(--accent-gold)' }}>•</span>
                          <span style={{ color: 'var(--text-dark)', opacity: 0.7 }}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Services - Dark Navy */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', animationDelay: '0.4s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Career <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>Services</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Job placement assistance for AA, BA, and MIA graduates. Internship program for BA students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {careerServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-8 rounded-[32px] transition-all"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-default)',
                    animationDelay: `${0.5 + index * 0.1}s`
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(255, 92, 141, 0.2)' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: 'var(--accent-gold)' }} />
                  </div>
                  <h3 className="font-bricolage text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {service.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className="p-8 rounded-[32px] max-w-2xl mx-auto text-center"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-default)'
            }}
          >
            <h3 className="font-bricolage text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Contact Career Services
            </h3>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Rachel Hulan, Career Services Director
            </p>
            <a
              href="mailto:rhulan@idi.edu"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)' }}
            >
              Email: rhulan@idi.edu
            </a>
          </div>
        </div>
      </section>

      {/* Firms That Hire IDI Graduates - Light Cream */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)', animationDelay: '0.5s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
              Firms That <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>Hire</span> IDI Graduates
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              Our graduates work at leading design firms and organizations around the world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {hiringFirms.map((firm, index) => {
              const Icon = firm.icon;
              return (
                <div
                  key={firm.name}
                  className="p-6 rounded-3xl text-center hover:shadow-lg transition-all"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border-default)',
                    animationDelay: `${0.6 + index * 0.05}s`
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: 'rgba(255, 92, 141, 0.2)' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: 'var(--accent-gold)' }} />
                  </div>
                  <h3 className="font-bricolage font-semibold mb-1" style={{ color: 'var(--text-dark)' }}>
                    {firm.name}
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--text-dark)', opacity: 0.6 }}>
                    {firm.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="font-display italic" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              And many more leading design firms across the country
            </p>
          </div>
        </div>
      </section>

      {/* Campus Culture - Dark Navy */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', animationDelay: '0.6s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Campus <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>Culture</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A hands-on, collaborative environment that prepares you for the professional world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {campusCulture.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl flex items-center gap-4"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-default)',
                  animationDelay: `${0.7 + index * 0.05}s`
                }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent-terracotta)' }}
                />
                <p style={{ color: 'var(--text-primary)' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Resources - Light Cream */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)', animationDelay: '0.3s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
              Campus <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>Facilities</span> & Resources
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              Everything you need to succeed, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className="p-6 rounded-3xl"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid var(--border-default)',
                  animationDelay: `${0.4 + index * 0.05}s`
                }}
              >
                <h3 className="font-bricolage text-lg font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>
                  {resource.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newport Beach Location - Dark Navy */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', animationDelay: '0.7s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Heart of <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>Orange County</span> Design
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Our Newport Beach location puts you at the center of Southern California's design community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {locationBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="p-8 rounded-[32px] flex items-start gap-6"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-default)',
                    animationDelay: `${0.8 + index * 0.1}s`
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(115, 37, 83, 0.2)' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: 'var(--accent-terracotta)' }} />
                  </div>
                  <div>
                    <h3 className="font-bricolage text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {benefit.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/1061+Camelback+St,+Newport+Beach,+CA+92660"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)' }}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visit Our Campus
            </a>
          </div>
        </div>
      </section>

      {/* Social Media - Light Cream */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)', animationDelay: '0.8s' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
              Connect With <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>IDI</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              Follow us on social media for design inspiration, student work, campus updates, and industry news
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialMedia.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-3xl hover:shadow-lg transition-all group"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--border-default)',
                    animationDelay: `${0.9 + index * 0.05}s`
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                      style={{ backgroundColor: 'rgba(255, 92, 141, 0.2)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: 'var(--accent-gold)' }} />
                    </div>
                    <div>
                      <h3 className="font-bricolage font-semibold" style={{ color: 'var(--text-dark)' }}>
                        {platform.name}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-dark)', opacity: 0.6 }}>
                        {platform.handle}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Navy */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', animationDelay: '0.9s' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Experience <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>IDI</span> for Yourself
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Schedule a campus visit to tour our facilities, meet students and faculty, and see what makes IDI special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)' }}
            >
              Schedule a Visit
            </Link>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-default)'
              }}
            >
              View Admissions Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
