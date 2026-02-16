import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MotionProvider } from "@/components/animations/motion-provider";
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
    "Interior Designers Institute (IDI) in Newport Beach, CA offers accredited Associate, Bachelor's, and Master's degree programs in Interior Design and Interior Architecture. Enroll today.",
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
        <MotionProvider>
          <Header />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
