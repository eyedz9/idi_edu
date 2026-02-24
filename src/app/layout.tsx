import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MotionProvider } from "@/components/animations/motion-provider";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Interior Designers Institute | California's Premier Interior Design School",
    template: "%s | Interior Designers Institute",
  },
  description:
    "IDI in Newport Beach, CA offers accredited Certificate, Associate, Bachelor's, and Master's programs in Interior Design. Enroll for Spring 2026.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "interior design school",
    "interior design degree",
    "interior architecture",
    "Newport Beach",
    "California",
    "IDI",
    "accredited interior design",
    "Associate of Arts interior design",
    "Bachelor of Arts interior design",
    "Master of Interior Architecture",
  ],
  metadataBase: new URL("https://idi.edu"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://idi.edu",
    siteName: "Interior Designers Institute",
    title: "Interior Designers Institute | California's Premier Interior Design School",
    description:
      "Accredited interior design programs in Newport Beach, CA. Associate, Bachelor's, and Master's degrees. Classes starting soon.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designers Institute campus in Newport Beach, California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designers Institute",
    description:
      "California's premier interior design school. Accredited programs in Newport Beach.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} overflow-x-hidden bg-plum-900 font-body text-parchment antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-pink-500 focus:px-4 focus:py-2 focus:text-plum-900 focus:font-semibold focus:shadow-lg"
        >
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": ["EducationalOrganization", "CollegeOrUniversity"],
            "@id": "https://idi.edu/#organization",
            name: "Interior Designers Institute",
            alternateName: "IDI",
            url: "https://idi.edu",
            logo: "https://idi.edu/images/idi_logo_stacked.png",
            image: "https://idi.edu/images/og-default.jpg",
            description:
              "Interior Designers Institute (IDI) in Newport Beach, CA offers accredited Associate, Bachelor's, and Master's degree programs in Interior Design and Interior Architecture.",
            foundingDate: "1984",
            telephone: "+1-949-675-4451",
            email: "contact@idi.edu",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1061 Camelback Street",
              addressLocality: "Newport Beach",
              addressRegion: "CA",
              postalCode: "92660",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.6189,
              longitude: -117.9289,
            },
            areaServed: {
              "@type": "State",
              name: "California",
            },
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Accreditation",
                recognizedBy: {
                  "@type": "Organization",
                  name: "Accrediting Commission of Career Schools and Colleges",
                  alternateName: "ACCSC",
                },
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Program Accreditation",
                recognizedBy: {
                  "@type": "Organization",
                  name: "Council for Interior Design Accreditation",
                  alternateName: "CIDA",
                },
              },
            ],
            sameAs: [
              "https://www.facebook.com/interiordesignersinstitute/",
              "https://www.instagram.com/interiordesignersinstitute/",
              "https://www.youtube.com/channel/UCI4GyaEGMw_sdJhaMwe_faA",
              "https://www.tiktok.com/@idi_newportbeach",
              "https://www.pinterest.com/idinewportbeach/",
            ],
          }}
        />
        <MotionProvider>
          <Header />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
