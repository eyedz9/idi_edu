'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Award, Clock, Building } from 'lucide-react';

const programs = [
  {
    id: 'certificate',
    name: 'Certificate of Interior Design',
    duration: '12 weeks',
    tuition: '$2,795',
    description: 'Fast-track introduction to interior design fundamentals and industry software.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    href: '/programs/certificate',
    cida: false,
    icon: Clock,
    status: 'Accelerated',
  },
  {
    id: 'associate',
    name: 'Associate of Arts',
    duration: '24-48 months',
    tuition: '$40,600',
    description: 'Comprehensive foundation in interior design theory, practice, and professional development.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    href: '/programs/associate',
    cida: false,
    icon: GraduationCap,
    status: 'Foundation',
  },
  {
    id: 'bachelor',
    name: 'Bachelor of Arts',
    duration: '30-54 months',
    tuition: '$61,450',
    description: 'CIDA-accredited degree preparing you for professional interior design licensure.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    href: '/programs/bachelor',
    cida: true,
    icon: Award,
    status: 'CIDA Accredited',
  },
  {
    id: 'masters',
    name: 'Master of Interior Architecture',
    duration: '12-15 months',
    tuition: '$22,600',
    description: 'Advanced study in interior architecture with focus on spatial design and innovation.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    href: '/programs/masters',
    cida: false,
    icon: Building,
    status: 'Advanced',
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden" style={{ color: 'var(--text-primary)', paddingTop: '10rem', paddingBottom: '10rem' }}>
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
          background: 'radial-gradient(ellipse at 30% 20%, rgba(255, 92, 141, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(115, 37, 83, 0.1) 0%, transparent 50%)',
        }}
      ></div>

      {/* Background Section Number */}
      <div className="absolute top-12 left-6 md:left-12 z-0 opacity-[0.03] font-bricolage font-bold text-[8rem] md:text-[12rem] leading-none pointer-events-none select-none" style={{ color: 'var(--text-primary)' }}>
        PROGRAMS
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
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Academic Programs</span>
            </div>
            <h2 className="leading-[0.9]">
              <span className="block text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-primary)' }}>
                FOUR PATHS
              </span>
              <span className="flex items-baseline gap-3 md:gap-4">
                <span className="text-3xl md:text-5xl font-display italic font-light" style={{ color: 'var(--text-muted)' }}>to</span>
                <span className="text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-muted)' }}>YOUR CAREER.</span>
              </span>
            </h2>
          </div>

          <p className="text-lg max-w-md font-light pl-6" style={{ color: 'var(--text-secondary)', borderLeft: '1px solid var(--accent-gold)', paddingLeft: '0.85rem' }}>
            From introductory certificates to advanced graduate degrees, find the program that fits your goals and schedule.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Link
                key={program.id}
                href={program.href}
                className="group flex-1 overflow-hidden relative transition-all duration-500 hover:-translate-y-3 hover:scale-[1.01] animate-on-scroll rounded-2xl backdrop-blur-xl program-card"
                style={{
                  background: 'linear-gradient(145deg, rgba(40, 62, 80, 0.95) 0%, rgba(20, 32, 48, 0.98) 100%)',
                  border: '1px solid rgba(233, 216, 200, 0.12)',
                  padding: '0.75rem',
                  animationDelay: `${0.3 + index * 0.1}s`,
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 92, 141, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Glass shine overlay */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)'
                  }}
                />

              <p className="text-xs font-medium uppercase tracking-[0.2em] relative z-10" style={{ color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
                {program.id.toUpperCase()} · Interior Design
              </p>
               
                {/* Hero image with overlaid status */}
                <div className="relative overflow-hidden rounded-md" style={{ height: '320px' }}>
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="bg-gradient-to-t to-transparent absolute inset-0 from-black/90 via-black/40"></div>

                  {/* Bottom overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 flex items-end justify-between">
                    <div className="space-y-1" style={{ color: 'rgba(233, 216, 200, 0.7)', paddingBottom: '0.75rem', paddingLeft: '2rem'}}>
                      <p className="text-[11px] font-sans" style={{ color: 'var(--text-primary)' }}>
                        Interior Designers Institute · {program.duration}
                      </p>
                      <p className="text-xs font-sans" style={{ color: 'rgba(233, 216, 200, 0.7)'}}>
                        Start your journey in interior design education
                      </p>
                    </div>
                    {/* More button */}
                    <button className="flex flex-none w-10 h-10 border rounded-full backdrop-blur items-center justify-center bg-black/50 border-white/10 group-hover:bg-white/20 transition-colors" style={{ color: 'var(--text-primary)', marginRight: '2rem', marginBottom: '0.75rem' }}>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content under hero */}
                <div style={{ padding: '2rem 1.25rem 1.5rem 1.25rem' }}>
                  {/* Title section */}
                  <div className="border-b" style={{ borderColor: 'var(--border-default)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                    <h3 className="text-xl tracking-tight font-hero" style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                      {program.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {program.description}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center justify-between" style={{ marginBottom: '2rem' }}>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition group-hover:scale-105" style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--text-inverse)' }}>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                          Explore Program
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          Learn more details
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex w-10 h-10 rounded-full items-center justify-center transition" style={{ backgroundColor: 'rgba(233, 216, 200, 0.1)', color: 'var(--text-secondary)' }}>
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="flex w-10 h-10 rounded-full items-center justify-center transition" style={{ backgroundColor: 'rgba(233, 216, 200, 0.1)', color: 'var(--text-secondary)' }}>
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Meta grid */}
                  <div className="grid grid-cols-3 gap-4 text-[11px] border-t" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-default)', paddingTop: '1.5rem' }}>
                    <div>
                      <p className="uppercase tracking-[0.2em] font-medium font-sans">Duration</p>
                      <p className="mt-2 font-medium font-mono text-sm" style={{ color: 'var(--text-primary)' }}>
                        {program.duration}
                      </p>
                    </div>
                    <div>
                      <p className="uppercase tracking-[0.2em] font-medium font-sans">Tuition</p>
                      <p className="mt-2 font-medium font-mono text-sm" style={{ color: 'var(--text-primary)' }}>
                        {program.tuition}
                      </p>
                    </div>
                    <div>
                      <p className="uppercase tracking-[0.2em] font-medium font-sans">Type</p>
                      <p className="mt-2 font-medium font-sans text-sm" style={{ color: 'var(--accent-gold)' }}>
                        {program.status}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center animate-on-scroll" style={{ animationDelay: '0.6s', marginTop: '2rem' }}>
          <Link
            href="/programs"
            className="group flex items-center gap-3 px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--text-inverse)', padding: '0.25rem 3rem' }}
          >
            <span className="font-medium tracking-wide">Compare All Programs</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
