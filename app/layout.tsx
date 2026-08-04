import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Colver - The future of digital creation",
    template: "%s | Colver",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
  description:
    "AI-driven tools for modern creators. Build, collaborate, and ship faster with Colver.",
  keywords: ["AI", "creation", "collaboration", "design", "development"],
  authors: [{ name: "Colver" }],
  creator: "Colver",
  metadataBase: new URL("https://colver.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://colver.com",
    siteName: "Colver",
    title: "Colver - The future of digital creation",
    description: "AI-driven tools for modern creators",
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
    description: "AI-driven tools for modern creators",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}