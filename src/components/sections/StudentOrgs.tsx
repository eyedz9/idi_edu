'use client';

import Image from 'next/image';

const organizations = [
  {
    acronym: 'ASID',
    logo: '/asid_logo.png',
    fullName: 'American Society of Interior Designers',
    description: 'Connect with the largest professional organization for interior designers, offering networking, resources, and career advancement opportunities.',
  },
  {
    acronym: 'IIDA',
    logo: '/iida_logo.png',
    fullName: 'International Interior Design Association',
    description: 'Join a global network of design professionals committed to advancing interior design through education, advocacy, and community.',
  },
  {
    acronym: 'NEWH',
    logo: '/newh_logo.png',
    fullName: 'Hospitality Industry Network',
    description: 'Build connections in hospitality design, one of the most dynamic and lucrative sectors of the interior design industry.',
  },
  {
    acronym: 'NKBA',
    logo: '/nkba_logo.png',
    fullName: 'National Kitchen & Bath Association',
    description: 'Specialize in kitchen and bath design with access to industry leaders, certification programs, and trade events.',
  },
];

const benefits = [
  {
    title: 'Networking Events',
    description: 'Meet industry professionals and potential employers',
  },
  {
    title: 'Professional Development',
    description: 'Workshops, seminars, and certification programs',
  },
  {
    title: 'Career Resources',
    description: 'Job boards, mentorship, and portfolio reviews',
  },
];

export function StudentOrgs() {
  return (
    <section id="student-network" className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', paddingTop: '10rem', paddingBottom: '10rem' }}>
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: 'linear-gradient(-45deg, #142030, #1E3442, #142030, #1a2a3d, #142030)',
          backgroundSize: '400% 400%',
        }}
      ></div>

      {/* Gradient Overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(255, 92, 141, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(115, 37, 83, 0.1) 0%, transparent 50%)',
        }}
      ></div>

      {/* Background Section Number */}
      <div className="absolute top-12 left-6 md:left-12 z-0 opacity-[0.03] font-bricolage font-bold text-[8rem] md:text-[12rem] leading-none pointer-events-none select-none" style={{ color: 'var(--text-primary)' }}>
        CONNECT
      </div>

      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 animate-on-scroll" style={{ marginBottom: '4rem' }}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Student Organizations</span>
            </div>
            <h2 className="leading-[0.9]">
              <span className="block text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-primary)' }}>
                PROFESSIONAL
              </span>
              <span className="flex items-baseline gap-3 md:gap-4">
                <span className="text-3xl md:text-5xl font-display italic font-light" style={{ color: 'var(--text-muted)' }}>connections.</span>
                <span className="text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-muted)' }}>NETWORK.</span>
              </span>
            </h2>
          </div>

          <p className="text-lg max-w-md font-light pl-6" style={{ color: 'var(--text-secondary)', borderLeft: '1px solid var(--accent-gold)', paddingLeft: '0.85rem' }}>
            Build your network before graduation through student chapters of leading design organizations.
          </p>
        </div>

        {/* Organization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((org, index) => (
            <div
              key={org.acronym}
              className="group rounded-2xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-default)',
                padding: '2rem'
              }}
            >
              {/* Logo */}
              <div className="mb-4">
                <Image
                  src={org.logo}
                  alt={`${org.acronym} - ${org.fullName}`}
                  width={434}
                  height={85}
                  className="group-hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Full Name */}
              <h6 className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                {org.fullName}
              </h6>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {org.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div
          className="mt-12 rounded-2xl animate-on-scroll"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-default)',
            padding: '2rem'
          }}
        >
          <h3 className="text-2xl font-bricolage font-semibold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
            Student Chapter Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <h6 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {benefit.title}
                </h6>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
