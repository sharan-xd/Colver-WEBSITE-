import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "./providers";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Colver - The future of digital creation",
    template: "%s | Colver",
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
    "AI-driven tools for modern creators. Build, collaborate, and ship faster with Colver.",
  keywords: ["AI", "creation", "collaboration", "design", "development", "Next.js", "TypeScript"],
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
    siteName: "Colver",
    title: "Colver - The future of digital creation",
    description: "Tomorrow's Tech, Trusted Today. High-performance digital platforms and AI tooling.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colver - The future of digital creation",
    description: "Tomorrow's Tech, Trusted Today. High-performance digital platforms and AI tooling.",
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
      </head>
      <body className={`${inter.className} ${inter.variable} relative bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary min-h-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
