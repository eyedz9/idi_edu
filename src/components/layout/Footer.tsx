import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { NewsletterForm } from "./newsletter-form";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: string;
  href: string;
  srLabel: string;
}

interface FooterProps {
  brandName?: string;
  tagline?: string;
  address?: string;
  phone?: string;
  email?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  className?: string;
}

/* -------------------------------------------------------------------------- */
/*  Social Icons (inline SVG)                                                 */
/* -------------------------------------------------------------------------- */

const socialIcons: Record<string, React.ReactNode> = {
  facebook: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  ),
  instagram: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
    </svg>
  ),
  youtube: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  tiktok: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  ),
  pinterest: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  ),
};

/* -------------------------------------------------------------------------- */
/*  Defaults                                                                  */
/* -------------------------------------------------------------------------- */

const defaultColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Programs", href: "/programs" },
      { label: "Admissions", href: "/admissions" },
      { label: "Campus Life", href: "/campus-life" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documents & Disclosures", href: "/disclosures" },
      { label: "Financial Aid", href: "/admissions/financial-aid" },
      { label: "Privacy Policy", href: "/disclosures#privacy" },
      { label: "Accreditation", href: "/about/accreditation" },
    ],
  },
];

const defaultSocials: SocialLink[] = [
  { platform: "facebook", href: "https://www.facebook.com/interiordesignersinstitute/", srLabel: "Facebook" },
  { platform: "instagram", href: "https://www.instagram.com/interiordesignersinstitute/", srLabel: "Instagram" },
  { platform: "youtube", href: "https://www.youtube.com/channel/UCI4GyaEGMw_sdJhaMwe_faA", srLabel: "YouTube" },
  { platform: "tiktok", href: "https://www.tiktok.com/@idi_newportbeach", srLabel: "TikTok" },
  { platform: "pinterest", href: "https://www.pinterest.com/idinewportbeach/", srLabel: "Pinterest" },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function Footer({
  brandName = "Interior Designers Institute",
  tagline = "Where Creative Talent Becomes Professional Design",
  address = "1061 Camelback Street, Newport Beach, CA 92660",
  phone = "(949) 675-4451",
  email = "contact@idi.edu",
  columns = defaultColumns,
  socialLinks = defaultSocials,
  className,
}: FooterProps) {
  const phoneHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;

  return (
    <footer
      className={cn("relative bg-gradient-to-b from-plum-800 to-plum-900 text-sandstone", className)}
      role="contentinfo"
    >
      {/* Decorative amber accent line at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* ---- Column 1: Brand + Contact ------------------------------- */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/idi_logo_stacked.png"
                alt={brandName}
                width={180}
                height={48}
                className="h-10 w-auto"
                unoptimized
              />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-sandstone">
              {tagline}
            </p>
            <address className="space-y-2 text-sm not-italic text-sandstone">
              <p>{address}</p>
              <p>
                <a
                  href={phoneHref}
                  className="inline-flex items-center min-h-[44px] transition-colors hover:text-pink-400"
                >
                  {phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center min-h-[44px] transition-colors hover:text-pink-400"
                >
                  {email}
                </a>
              </p>
            </address>
          </div>

          {/* ---- Column 2 & 3: Link columns ------------------------------ */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-pink-500">
                {col.title}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center min-h-[44px] text-sandstone transition-colors hover:text-parchment"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="inline-flex items-center min-h-[44px] text-sandstone transition-colors hover:text-parchment"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ---- Column 4: Social + Newsletter --------------------------- */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-pink-500">
              Stay Connected
            </h3>

            {/* Social icons */}
            <div className="mb-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-sandstone transition-colors hover:bg-pink-500 hover:text-plum-900"
                  aria-label={`Follow us on ${social.srLabel}`}
                >
                  {socialIcons[social.platform] ?? (
                    <span className="text-xs font-bold uppercase">
                      {social.platform[0]}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Newsletter signup */}
            <p className="mb-3 text-sm text-sandstone">
              Subscribe for updates and events
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* ---- Bottom bar ------------------------------------------------- */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-sandstone md:flex-row md:justify-between md:text-left">
            <p>
              &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
            </p>

            {/* Accreditation logos */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/ACCCS_logo.png"
                alt="ACCSC Accredited"
                width={80}
                height={32}
                className="brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                style={{ height: 'auto', width: 'auto', maxHeight: '2rem' }}
                unoptimized
              />
              <a href="https://www.bppe.ca.gov" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/bppe-logo.png"
                  alt="BPPE Approved"
                  width={80}
                  height={32}
                  className="brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                  style={{ height: 'auto', width: 'auto', maxHeight: '2rem' }}
                  unoptimized
                />
              </a>
              <Image
                src="/images/cida_logo.png"
                alt="CIDA Accredited"
                width={80}
                height={32}
                className="brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                style={{ height: 'auto', width: 'auto', maxHeight: '2rem' }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
