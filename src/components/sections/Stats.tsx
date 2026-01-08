'use client';

import { Calendar, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  {
    value: '40+',
    label: 'Years of Excellence',
    context: 'Established 1984',
    icon: Calendar,
  },
  {
    value: '88%',
    label: 'Graduation Rate',
    context: 'Industry leading success',
    icon: TrendingUp,
  },
  {
    value: '10:1',
    label: 'Student to Faculty',
    context: 'Personalized attention',
    icon: Users,
  },
  {
    value: '100%',
    label: 'Professional Faculty',
    context: 'Practicing designers',
    icon: Award,
  },
];

export function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', paddingTop: '10rem', paddingBottom: '10rem' }}>
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
          background: 'radial-gradient(ellipse at 70% 30%, rgba(255, 92, 141, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 30% 70%, rgba(115, 37, 83, 0.1) 0%, transparent 50%)',
        }}
      ></div>

      {/* Background Section Number */}
      <div className="absolute top-12 left-6 md:left-12 z-0 opacity-[0.03] font-bricolage font-bold text-[8rem] md:text-[12rem] leading-none pointer-events-none select-none" style={{ color: 'var(--text-primary)' }}>
        NUMBERS
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
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>By The Numbers</span>
            </div>
            <h2 className="leading-[0.9]">
              <span className="block text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-primary)' }}>
                PROVEN
              </span>
              <span className="flex items-baseline gap-3 md:gap-4">
                <span className="text-3xl md:text-5xl font-display italic font-light" style={{ color: 'var(--text-muted)' }}>by</span>
                <span className="text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-muted)' }}>EXCELLENCE.</span>
              </span>
            </h2>
          </div>

          <p className="text-lg max-w-md font-light pl-6" style={{ color: 'var(--text-secondary)', borderLeft: '1px solid var(--accent-gold)', paddingLeft: '0.85rem' }}>
            Four decades of dedication to interior design education, measured by the success of our students.
          </p>
        </div>

        {/* Featured Stat - 40+ Years */}
        <div
          className="group rounded-2xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-default)',
            padding: '3rem',
            marginBottom: '1.5rem'
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255, 92, 141, 0.1)',
                  color: 'var(--accent-gold)'
                }}
              >
                <Calendar className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-7xl md:text-8xl font-mono font-semibold" style={{ color: 'var(--accent-gold)' }}>
                  {stats[0].value}
                </div>
              </div>
            </div>
            <div className="md:text-right">
              <h3 className="text-2xl font-bricolage font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                {stats[0].label}
              </h3>
              <p className="text-base leading-relaxed max-w-sm" style={{ color: 'var(--text-muted)' }}>
                {stats[0].context} — Orange County&apos;s only dedicated interior design school
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.slice(1).map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group rounded-2xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-default)',
                  padding: '2rem'
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255, 92, 141, 0.1)',
                    color: 'var(--accent-gold)'
                  }}
                >
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div className="text-5xl font-mono font-semibold mb-3" style={{ color: 'var(--accent-gold)' }}>
                  {stat.value}
                </div>
                <h3 className="text-lg font-bricolage font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  {stat.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {stat.context}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
