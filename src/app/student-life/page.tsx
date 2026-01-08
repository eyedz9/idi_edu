import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Briefcase, BookOpen, Award, Calendar, MapPin, Network, Lightbulb, Handshake, Trophy } from 'lucide-react';

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
    name: 'ASID Student Chapter',
    fullName: 'American Society of Interior Designers',
    description: 'Join the leading professional organization for interior designers. Network with industry professionals, attend design events, and access exclusive resources.',
    benefits: [
      'Industry networking events',
      'Professional development workshops',
      'Design competition opportunities',
      'Access to ASID resources and publications',
    ],
    icon: Award,
    color: 'terracotta',
  },
  {
    name: 'IIDA Campus Center',
    fullName: 'International Interior Design Association',
    description: 'Connect with a global community of designers. Participate in international design initiatives and build your professional network.',
    benefits: [
      'Global design community access',
      'Mentorship programs',
      'Student design competitions',
      'Industry insights and trends',
    ],
    icon: Network,
    color: 'gold',
  },
  {
    name: 'NEWH Student Chapter',
    fullName: 'Hospitality Industry Network',
    description: 'Specialize in hospitality design. Connect with professionals in hotel, restaurant, and resort design.',
    benefits: [
      'Hospitality design focus',
      'Industry scholarships',
      'Site tours of hospitality projects',
      'Career placement assistance',
    ],
    icon: Handshake,
    color: 'terracotta',
  },
  {
    name: 'NKBA Student Chapter',
    fullName: 'National Kitchen & Bath Association',
    description: 'Focus on kitchen and bath design specialization. Learn from industry experts and access cutting-edge design resources.',
    benefits: [
      'Kitchen & bath specialization',
      'Certification preparation',
      'Manufacturer partnerships',
      'Design showcase opportunities',
    ],
    icon: Trophy,
    color: 'gold',
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

export default function StudentLifePage() {
  return (
    <>
      {/* Hero Section - Dark */}
      <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center gap-2 text-white/60">
                <li>
                  <Link href="/" className="hover:text-[#B8977E] transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">Student Life</li>
              </ol>
            </nav>

            <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Life at IDI
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-8">
              Join a vibrant community of designers, connect with industry professionals, and build the career you've always wanted.
            </p>
            <a
              href="#organizations"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full transition-all hover:scale-105"
            >
              Explore Student Organizations
            </a>
          </div>
        </div>
      </section>

      {/* Professional Organizations - Light */}
      <section id="organizations" className="py-20 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.1s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 text-black">
              Professional Organizations
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Build your professional network and gain industry recognition through student chapters
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {organizations.map((org, index) => {
              const Icon = org.icon;
              return (
                <div
                  key={org.name}
                  className="bg-white p-8 rounded-[32px] border border-black/10 hover:shadow-xl transition-all"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 ${org.color === 'terracotta' ? 'bg-[#C4725D]/20' : 'bg-[#B8977E]/20'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-8 h-8 ${org.color === 'terracotta' ? 'text-[#C4725D]' : 'text-[#B8977E]'}`} />
                    </div>
                    <div>
                      <h3 className="font-bricolage text-2xl font-bold mb-1 text-black">
                        {org.name}
                      </h3>
                      <p className="text-sm text-neutral-500 font-mono">
                        {org.fullName}
                      </p>
                    </div>
                  </div>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {org.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-black">Member Benefits:</h4>
                    <ul className="space-y-2">
                      {org.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#C4725D] mt-1">•</span>
                          <span className="text-neutral-600">{benefit}</span>
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

      {/* Career Services - Dark */}
      <section className="py-20 bg-[#0a0a0a] text-white animate-on-scroll" style={{ animationDelay: '0.2s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4">
              Career Services
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive support to launch and advance your design career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-[#151515] p-8 rounded-[32px] border border-white/10 hover:border-white/20 transition-all"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-[#C4725D]/20 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#C4725D]" />
                  </div>
                  <h3 className="font-bricolage text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/70 mb-6">
              Our career services team is dedicated to your success, from your first day of classes through your entire career.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full transition-all hover:scale-105"
            >
              Contact Career Services
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Resources - Light */}
      <section className="py-20 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.3s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 text-black">
              Campus Facilities & Resources
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Everything you need to succeed, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className="bg-white p-6 rounded-3xl border border-black/10"
                style={{ animationDelay: `${0.4 + index * 0.05}s` }}
              >
                <h3 className="font-bricolage text-lg font-semibold mb-2 text-black">
                  {resource.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newport Beach Location - Dark */}
      <section className="py-20 bg-[#0a0a0a] text-white animate-on-scroll" style={{ animationDelay: '0.4s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4">
              Heart of Orange County Design
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our Newport Beach location puts you at the center of Southern California's design community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {locationBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-[#151515] p-8 rounded-[32px] border border-white/10 flex items-start gap-6"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-[#B8977E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#B8977E]" />
                  </div>
                  <div>
                    <h3 className="font-bricolage text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
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
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full transition-all hover:scale-105"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visit Our Campus
            </a>
          </div>
        </div>
      </section>

      {/* Events & Activities - Light */}
      <section className="py-20 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.5s' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4 text-black">
              Events & Opportunities
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Year-round programming to enhance your education and expand your network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl border border-black/10 flex items-center gap-4"
                style={{ animationDelay: `${0.6 + index * 0.05}s` }}
              >
                <div className="w-2 h-2 bg-[#C4725D] rounded-full flex-shrink-0" />
                <p className="text-black font-medium">{event}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#C4725D]/20 border border-[#C4725D]/30 p-8 rounded-[32px] text-center">
            <Lightbulb className="w-12 h-12 text-[#C4725D] mx-auto mb-4" />
            <h3 className="font-bricolage text-2xl font-bold mb-3 text-black">
              Get Involved
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              The more you participate in campus life, the more you'll gain from your IDI experience. Join organizations, attend events, and build lasting connections.
            </p>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              Apply to IDI Today
            </Link>
          </div>
        </div>
      </section>

      {/* Student Testimonials - Dark */}
      <section className="py-20 bg-[#0a0a0a] text-white animate-on-scroll" style={{ animationDelay: '0.6s' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Hear from current students and alumni about their IDI experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/5 p-8 rounded-[32px] border border-white/10"
                style={{ animationDelay: `${0.7 + i * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-6" />
                <p className="text-white/60 italic mb-6 leading-relaxed">
                  "Testimonial content will be added during content integration phase. Real student stories showcasing their IDI experience and career success."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-white">Student Name</p>
                  <p className="text-sm text-white/50">Program, Class of 20XX</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="py-20 bg-[#f8f8f8] animate-on-scroll" style={{ animationDelay: '0.7s' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bricolage text-4xl md:text-5xl font-bold mb-6 text-black">
            Experience IDI for Yourself
          </h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
            Schedule a campus visit to tour our facilities, meet students and faculty, and see what makes IDI special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              Schedule a Visit
            </Link>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full transition-all hover:scale-105 border border-black/20"
            >
              View Admissions Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
