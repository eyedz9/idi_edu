'use client';

import Image from 'next/image';
import { Users, Award, Calendar, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Users,
    title: 'Small Classes',
    description:
      'With a 10:1 student-to-faculty ratio, you receive personalized attention and mentorship throughout your education.',
    stat: '10:1',
    statLabel: 'Ratio',
  },
  {
    icon: GraduationCap,
    title: 'Industry Professionals',
    description:
      '100% of our faculty are practicing interior designers, bringing real-world experience into every classroom.',
    stat: '100%',
    statLabel: 'Practicing',
  },
  {
    icon: Award,
    title: 'CIDA Accredited',
    description:
      'Our Bachelor of Arts program is accredited by CIDA, the industry standard for professional interior design education.',
    stat: 'CIDA',
    statLabel: 'Certified',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description:
      'Day, evening, and weekend classes accommodate working students and busy schedules without compromising education quality.',
    stat: 'Flex',
    statLabel: 'Schedule',
  },
];

export function WhyIDI() {
  return (
    <section id="why-idi" className="relative overflow-hidden" style={{ color: 'var(--text-primary)', paddingTop: '10rem', paddingBottom: '10rem', backgroundColor: 'var(--bg-light)' }}>
      {/* Background Texture Image */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.1, mixBlendMode: 'luminosity' }}>
        <Image
          src="/whyidi.jpg"
          alt="Interior design studio at Interior Designers Institute"
          fill
          className="object-cover"
        />
      </div>

      {/* Background Section Number */}
      <div className="absolute top-12 right-6 md:right-12 z-0 opacity-[0.03] font-bricolage font-bold text-[8rem] md:text-[12rem] leading-none pointer-events-none select-none" style={{ color: 'var(--text-dark)' }}>
        WHY IDI
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
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-dark-secondary)' }}>Our Difference</span>
            </div>
            <h2 className="leading-[0.9]">
              <span className="block text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-dark)' }}>
                WHY CHOOSE
              </span>
              <span className="flex items-baseline gap-3 md:gap-4">
                <span className="text-3xl md:text-5xl font-display italic font-light" style={{ color: 'var(--text-dark-secondary)' }}>us?</span>
                <span className="text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-dark-secondary)' }}>IDI.</span>
              </span>
            </h2>
          </div>

          <p className="text-lg max-w-md font-light pl-6" style={{ color: 'var(--text-dark-secondary)', borderLeft: '1px solid var(--accent-gold)', paddingLeft: '0.85rem' }}>
            Established in 1984, IDI combines academic excellence with practical industry experience.
          </p>
        </div>

        {/* Feature List */}
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-2xl transition-all duration-300 animate-on-scroll"
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                  backgroundColor: 'rgba(20, 32, 48, 0.03)',
                  border: '1px solid var(--border-dark)',
                  padding: '1.5rem'
                }}
              >
                {/* Icon & Title */}
                <div className="col-span-1 md:col-span-5 flex items-center gap-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-dark)'
                    }}
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bricolage font-medium group-hover:translate-x-1 transition-transform" style={{ color: 'var(--text-dark)' }}>
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="col-span-1 md:col-span-5 pl-6" style={{ borderLeft: '1px solid var(--border-dark)' }}>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dark-secondary)' }}>
                    {feature.description}
                  </p>
                </div>

                {/* Stat */}
                <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-4">
                  <div className="text-right">
                    <span className="block text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-dark-secondary)' }}>
                      {feature.statLabel}
                    </span>
                    <span className="text-2xl font-mono font-semibold" style={{ color: 'var(--accent-gold)' }}>{feature.stat}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center animate-on-scroll" style={{ animationDelay: '0.6s', marginTop: '3rem' }}>
          <Link
            href="/about"
            className="group flex items-center gap-3 px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--text-inverse)', padding: '0.25rem 3rem' }}
          >
            <span className="font-medium tracking-wide">Learn More About IDI</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
