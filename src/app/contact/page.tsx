'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Linkedin, Calendar } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Campus Location',
    content: '1061 Camelback Street\nNewport Beach, CA 92660',
    link: 'https://www.google.com/maps/place/1061+Camelback+St,+Newport+Beach,+CA+92660',
    linkText: 'Get Directions',
    external: true,
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '(949) 675-4451',
    link: 'tel:+19496754451',
    linkText: 'Call Us',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@idi.edu',
    link: 'mailto:contact@idi.edu',
    linkText: 'Send Email',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed',
  },
];

const quickActions = [
  {
    title: 'Schedule a Campus Visit',
    description: 'Tour our facilities and meet with faculty',
    link: '/admissions#visit',
    buttonText: 'Schedule Visit',
  },
  {
    title: 'Request Information',
    description: 'Get detailed program and tuition information',
    link: '#contact-form',
    buttonText: 'Request Info',
  },
  {
    title: 'Apply Now',
    description: 'Start your application to IDI',
    link: '/admissions#apply',
    buttonText: 'Apply Today',
  },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-[#1877F2]' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-[#E4405F]' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-[#0A66C2]' },
];

// Schema.org LocalBusiness schema for Contact page
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://idi.edu',
  name: 'Interior Designers Institute',
  alternateName: 'IDI',
  url: 'https://idi.edu',
  logo: 'https://idi.edu/logo.png',
  image: 'https://idi.edu/campus.jpg',
  description: 'CIDA-accredited interior design school offering Certificate, Associate, Bachelor, and Master\'s programs in Newport Beach, California.',
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
    latitude: 33.6189,
    longitude: -117.9298,
  },
  telephone: '+1-949-675-4451',
  email: 'contact@idi.edu',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/interiordesignersinstitute',
    'https://www.instagram.com/idi_newportbeach',
    'https://www.linkedin.com/school/interior-designers-institute',
  ],
  priceRange: '$2,795 - $61,450',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 33.6189,
      longitude: -117.9298,
    },
    geoRadius: '100000',
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm" style={{ animationDelay: '0.1s' }}>
              <ol className="flex items-center gap-2 text-white/60">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">Contact</li>
              </ol>
            </nav>

            <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ animationDelay: '0.2s' }}>
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed" style={{ animationDelay: '0.3s' }}>
              Have questions? We're here to help you start your interior design journey.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-[#f8f8f8] animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" style={{ animationDelay: '0.1s' }}>
            <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-4 text-[#0a0a0a]">
              How Can We Help?
            </h2>
            <p className="text-xl text-neutral-600">
              Choose the option that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickActions.map((action, index) => (
              <div
                key={action.title}
                className="bg-white p-8 rounded-[32px] border border-black/5 text-center hover:shadow-lg transition-all animate-on-scroll"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <h3 className="font-bricolage text-xl font-semibold mb-3 text-[#0a0a0a]">
                  {action.title}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {action.description}
                </p>
                <a
                  href={action.link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black border border-black hover:bg-black hover:text-white font-semibold rounded-full transition-all"
                >
                  {action.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-[#0a0a0a] animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1" style={{ animationDelay: '0.1s' }}>
              <h2 className="font-bricolage text-3xl font-bold mb-8 text-white">
                Contact Information
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex gap-4" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-white">{info.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line mb-2">
                          {info.content}
                        </p>
                        {info.link && (
                          <a
                            href={info.link}
                            target={info.external ? '_blank' : undefined}
                            rel={info.external ? 'noopener noreferrer' : undefined}
                            className="text-white hover:text-white/80 font-semibold text-sm transition-colors"
                          >
                            {info.linkText} →
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-semibold mb-4 text-white">Connect With Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" style={{ animationDelay: '0.2s' }}>
              <div className="bg-[#151515] p-8 md:p-12 rounded-[32px] border border-white/10">
                <h2 className="font-bricolage text-3xl font-bold mb-2 text-white">
                  Send Us a Message
                </h2>
                <p className="text-white/60 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold mb-2 text-white">
                        First Name <span className="text-white/40">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-black/50 text-white placeholder:text-white/30 transition-colors"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold mb-2 text-white">
                        Last Name <span className="text-white/40">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-black/50 text-white placeholder:text-white/30 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                        Email <span className="text-white/40">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-black/50 text-white placeholder:text-white/30 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white">
                        Phone <span className="text-white/40 text-xs">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-black/50 text-white placeholder:text-white/30 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="program" className="block text-sm font-semibold mb-2 text-white">
                      Program of Interest <span className="text-white/40">*</span>
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-black/50 text-white transition-colors"
                    >
                      <option value="">Select a program</option>
                      <option value="certificate">Certificate Program</option>
                      <option value="associate">Associate's Degree</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="undecided">Not Sure / General Inquiry</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                      Message <span className="text-white/40">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-black/50 text-white placeholder:text-white/30 transition-colors resize-none"
                      placeholder="Tell us about your questions or how we can help you..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <p className="text-green-400 font-semibold">
                        Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <p className="text-red-400 font-semibold">
                        Sorry, there was an error sending your message. Please try again or call us directly.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-white hover:bg-white/90 text-black font-semibold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-white/40 mt-4 text-center">
                    By submitting this form, you agree to be contacted by IDI regarding your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#f8f8f8] animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" style={{ animationDelay: '0.1s' }}>
            <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-4 text-[#0a0a0a]">
              Visit Our Campus
            </h2>
            <p className="text-xl text-neutral-600">
              1061 Camelback Street, Newport Beach, CA 92660
            </p>
          </div>

          {/* Google Maps Embed Placeholder */}
          <div className="bg-white rounded-[32px] overflow-hidden border border-black/5 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[16/9] md:aspect-[21/9] bg-neutral-100 flex items-center justify-center relative">
              {/* Placeholder for Google Maps - Replace with actual embed in production */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <MapPin className="w-16 h-16 text-[#0a0a0a] mb-4" />
                <h3 className="font-bricolage text-2xl font-bold mb-2 text-[#0a0a0a]">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-neutral-600 mb-6 max-w-md">
                  Google Maps integration will be added during production deployment
                </p>
                <a
                  href="https://www.google.com/maps/place/1061+Camelback+St,+Newport+Beach,+CA+92660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black border border-black hover:bg-black hover:text-white font-semibold rounded-full transition-all"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:+19496754451"
              className="bg-white p-6 rounded-[32px] border border-black/5 hover:shadow-lg transition-all flex items-center gap-4 group animate-on-scroll"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <Phone className="w-6 h-6 text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Call Us</p>
                <p className="font-semibold text-[#0a0a0a]">(949) 675-4451</p>
              </div>
            </a>

            <a
              href="mailto:contact@idi.edu"
              className="bg-white p-6 rounded-[32px] border border-black/5 hover:shadow-lg transition-all flex items-center gap-4 group animate-on-scroll"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <Mail className="w-6 h-6 text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Email Us</p>
                <p className="font-semibold text-[#0a0a0a]">contact@idi.edu</p>
              </div>
            </a>

            <Link
              href="/admissions#visit"
              className="bg-white p-6 rounded-[32px] border border-black/5 hover:shadow-lg transition-all flex items-center gap-4 group animate-on-scroll"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <Calendar className="w-6 h-6 text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Schedule</p>
                <p className="font-semibold text-[#0a0a0a]">Campus Visit</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-[#0a0a0a] animate-on-scroll">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-6 text-white" style={{ animationDelay: '0.1s' }}>
            Looking for Something Else?
          </h2>
          <p className="text-white/60 mb-8" style={{ animationDelay: '0.2s' }}>
            Find quick answers to common questions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/admissions#faq"
              className="bg-[#151515] p-6 rounded-[32px] border border-white/10 hover:bg-white/5 transition-all text-left animate-on-scroll"
              style={{ animationDelay: '0.3s' }}
            >
              <h3 className="font-bricolage text-lg font-semibold mb-2 text-white">
                Admissions FAQ
              </h3>
              <p className="text-white/60 text-sm">
                Application process, requirements, and deadlines
              </p>
            </Link>
            <Link
              href="/programs"
              className="bg-[#151515] p-6 rounded-[32px] border border-white/10 hover:bg-white/5 transition-all text-left animate-on-scroll"
              style={{ animationDelay: '0.4s' }}
            >
              <h3 className="font-bricolage text-lg font-semibold mb-2 text-white">
                Program Information
              </h3>
              <p className="text-white/60 text-sm">
                Detailed program descriptions and curriculum
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
