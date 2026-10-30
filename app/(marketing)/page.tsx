import type { Metadata } from 'next'
import HomePage from '@/components/sections/HomeSections/HomeMainPage'

export const metadata: Metadata = {
  title: 'Colver — High-Performance Software & Digital Platforms',
  description:
    'Colver builds bespoke software systems, high-speed Next.js web applications, digital commerce rails, and intelligent AI workflows engineered for speed and scale.',
  alternates: {
    canonical: 'https://colver.in',
  },
  openGraph: {
    title: 'Colver — High-Performance Software & Digital Platforms',
    description:
      'Tomorrow’s Tech, Trusted Today. High-performance digital platforms, intelligent workflows, and modern web engineering.',
    url: 'https://colver.in',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Colver Systems — High-Performance Digital Platforms',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colver — High-Performance Software & Digital Platforms',
    description:
      'Bespoke software systems, high-speed web apps, and intelligent AI workflows.',
    images: ['/og-image.png'],
  },
}

export default function Page() {
  return <HomePage />
}
