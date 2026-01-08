import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono, Bricolage_Grotesque, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GridLines } from "@/components/layout/GridLines";
import { ScrollAnimationInit } from "@/components/animations/ScrollAnimationInit";

// Font configurations
const bebasNeue = Bebas_Neue({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Interior Designers Institute | CIDA-Accredited Interior Design School",
    template: "%s | Interior Designers Institute"
  },
  description: "Orange County's only dedicated interior design school. CIDA-accredited programs since 1984. Certificate, Associate, Bachelor, and Master's degrees in Interior Design.",
  keywords: [
    "interior design school",
    "CIDA accredited",
    "interior design degree",
    "Orange County",
    "Newport Beach",
    "California interior design",
    "design education",
    "interior architecture"
  ],
  authors: [{ name: "Interior Designers Institute" }],
  creator: "Interior Designers Institute",
  publisher: "Interior Designers Institute",
  metadataBase: new URL("https://idi.edu"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://idi.edu",
    siteName: "Interior Designers Institute",
    title: "Interior Designers Institute | Design Your Future",
    description: "40 years of interior design education. CIDA accredited. 100% practicing professionals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designers Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designers Institute | Design Your Future",
    description: "40 years of interior design education. CIDA accredited. 100% practicing professionals.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${bricolageGrotesque.variable} ${playfairDisplay.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased w-full overflow-x-hidden bg-[#0a0a0a] text-white selection:bg-white/20 selection:text-white">
        <ScrollAnimationInit />
        <GridLines />
        <div className="flex flex-col min-h-screen w-full relative">
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
