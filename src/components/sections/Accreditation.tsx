'use client';

import Image from 'next/image';
import { Award, CheckCircle, Shield } from 'lucide-react';

const accreditations = [
  {
    icon: Award,
    acronym: 'CIDA',
    fullName: 'Council for Interior Design Accreditation',
    description: 'The gold standard for interior design education. Our Bachelor of Arts program meets the highest professional standards, preparing graduates for NCIDQ examination and professional licensure.',
    featured: false,
  },
  {
    icon: CheckCircle,
    acronym: 'ACCSC',
    fullName: 'Accrediting Commission of Career Schools and Colleges',
    description: 'Nationally recognized accrediting agency ensuring educational quality and institutional integrity across all our programs.',
    featured: false,
  },
  {
    icon: Shield,
    acronym: 'BPPE',
    fullName: 'Bureau for Private Postsecondary Education',
    description: 'California state approval ensuring we meet rigorous standards for private postsecondary institutions.',
    featured: false,
  },
];

export function Accreditation() {
  return (
    <section id="accreditation" className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)', paddingTop: '10rem', paddingBottom: '10rem' }}>
      {/* Background Texture Image */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.1, mixBlendMode: 'luminosity' }}>
        <Image
          src="/accreditation_bg.jpg"
          alt="Modern interior design workspace showcasing IDI's accredited learning environment"
          fill
          className="object-cover"
        />
      </div>

      {/* Background Section Number */}
      <div className="absolute top-12 right-6 md:right-12 z-0 opacity-[0.03] font-bricolage font-bold text-[8rem] md:text-[12rem] leading-none pointer-events-none select-none" style={{ color: 'var(--text-dark)' }}>
        ACCREDITED
      </div>

      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--text-dark) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 animate-on-scroll" style={{ marginBottom: '4rem' }}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-dark-secondary)' }}>Certifications</span>
            </div>
            <h2 className="leading-[0.9]">
              <span className="block text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-dark)' }}>
                INDUSTRY
              </span>
              <span className="flex items-baseline gap-3 md:gap-4">
                <span className="text-3xl md:text-5xl font-display italic font-light" style={{ color: 'var(--text-dark-secondary)' }}>recognized.</span>
                <span className="text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-dark-secondary)' }}>TRUSTED.</span>
              </span>
            </h2>
          </div>

          <p className="text-lg max-w-md font-light pl-6" style={{ color: 'var(--text-dark-secondary)', borderLeft: '1px solid var(--accent-gold)', paddingLeft: '0.85rem' }}>
            Our accreditations ensure your education meets the highest professional standards.
          </p>
        </div>

        {/* Accreditation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accreditations.map((accreditation, index) => {
            const Icon = accreditation.icon;
            return (
              <div
                key={accreditation.acronym}
                className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                style={{
                  animationDelay: `${0.1 + index * 0.1}s`,
                  backgroundColor: accreditation.featured ? 'var(--bg-primary)' : 'rgba(20, 32, 48, 0.03)',
                  border: accreditation.featured ? '2px solid var(--accent-gold)' : '1px solid var(--border-dark)',
                  padding: '2rem'
                }}
              >
                {accreditation.featured && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--text-inverse)' }}
                  >
                    CIDA ACCREDITED
                  </div>
                )}

                {/* Icon & Acronym */}
                {accreditation.acronym === 'CIDA' ? (
                  <div className="mb-6">
                    <Image
                      src="/cida_logo.png"
                      alt="CIDA - Council for Interior Design Accreditation"
                      width={510}
                      height={100}
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                ) : accreditation.acronym === 'ACCSC' ? (
                  <div className="mb-6">
                    <Image
                      src="/ACCCS_logo.png"
                      alt="ACCSC - Accrediting Commission of Career Schools and Colleges"
                      width={510}
                      height={100}
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                ) : accreditation.acronym === 'BPPE' ? (
                  <div className="mb-6">
                    <Image
                      src="/bppe-logo.png"
                      alt="BPPE - Bureau for Private Postsecondary Education"
                      width={510}
                      height={100}
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-mono font-bold" style={{ color: 'var(--text-dark)' }}>
                        {accreditation.acronym}
                      </h3>
                    </div>
                  </div>
                )}

                {/* Full Name */}
                <h6 className="text-lg font-bricolage font-semibold mb-3" style={{ color: accreditation.featured ? 'var(--text-secondary)' : 'var(--text-dark)', marginTop: '1rem' }}>
                  {accreditation.fullName}
                </h6>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: accreditation.featured ? 'var(--text-muted)' : 'var(--text-dark-secondary)', marginTop: '1rem' }}>
                  {accreditation.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CIDA Emphasis */}
        <div className="text-center animate-on-scroll" style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border-dark)' }}>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-dark-secondary)' }}>
            CIDA accreditation is the most important credential in interior design education.
            Graduates of CIDA-accredited programs are eligible to take the{' '}
            <span className="font-semibold" style={{ color: 'var(--accent-gold)' }}>NCIDQ examination</span>,
            a requirement for professional interior design licensure in most states.
          </p>
        </div>
      </div>
    </section>
  );
}
