import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import Providers from "./providers";
import { OrganizationJsonLd, WebSiteJsonLd, ProfessionalServiceJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "COLVER — Architecture for Real-Time Operations",
    template: "%s | COLVER",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  description:
    "Colver designs and engineers bespoke business platforms, high-concurrency web systems, and intelligent operational workflows for growing companies.",
  keywords: [
    "custom software development",
    "software architecture",
    "Next.js web systems",
    "real-time data operations",
    "AI workflow automation",
    "Bengaluru software studio",
    "TypeScript engineering",
  ],
  authors: [{ name: "Colver Systems" }],
  creator: "Colver",
  metadataBase: new URL("https://colver.in"),
  alternates: {
    canonical: "https://colver.in",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://colver.in",
    siteName: "COLVER",
    title: "COLVER — Architecture for Real-Time Operations",
    description: "Bespoke business systems, high-speed web apps, and intelligent operational workflows.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "COLVER — Software Architecture for Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COLVER — Architecture for Real-Time Operations",
    description: "Bespoke business platforms and intelligent workflows built with engineering rigor.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <ProfessionalServiceJsonLd />
        <FaqJsonLd />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans relative bg-[#080808] text-[#F4F1EA] antialiased selection:bg-[#C8FF00] selection:text-black min-h-screen`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
