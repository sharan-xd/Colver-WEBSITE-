import React from 'react'

interface BreadcrumbItem {
  name: string
  url: string
}

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://colver.in/#organization',
    name: 'Colver Systems',
    legalName: 'Colver Systems Private Limited',
    url: 'https://colver.in',
    logo: 'https://colver.in/brand/colver-logo.png',
    image: 'https://colver.in/og-image.png',
    description:
      'Colver engineers bespoke software systems, high-performance web applications, digital commerce rails, and intelligent AI workflows for growing businesses.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Indiranagar',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560038',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9716',
      longitude: '77.5946',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'contact@colver.in',
        contactType: 'customer support',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    sameAs: [
      'https://x.com/colver_systems',
      'https://www.linkedin.com/company/colver-systems',
      'https://github.com/sharan-xd/Colver-WEBSITE-',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ProfessionalServiceJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://colver.in/#service-entity',
    name: 'Colver Software Architecture & Systems Studio',
    image: 'https://colver.in/og-image.png',
    url: 'https://colver.in',
    telephone: '+91-80-4100-2400',
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR, USD, EUR',
    paymentAccepted: 'Bank Transfer, UPI, Wire',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Indiranagar',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560038',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9716,
      longitude: 77.5946,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '18:30',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Singapore' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://colver.in/#website',
    url: 'https://colver.in',
    name: 'Colver',
    description: 'Bespoke business platforms, high-speed web apps, and intelligent operational workflows.',
    publisher: {
      '@id': 'https://colver.in/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://colver.in/docs?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbsJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://colver.in${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ServicesJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://colver.in/services#service',
    serviceType: 'Software Engineering & Digital Platform Development',
    provider: {
      '@id': 'https://colver.in/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Colver Core Engineering Practices',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom ERP & Core Operations',
            description: 'Bespoke internal business tools, multi-warehouse inventory ledgers, and approval workflow engines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'High-Concurrency Web Systems',
            description: 'Server-rendered Next.js web applications engineered for sub-second transitions and high concurrency.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commerce & Indian Transaction Rails',
            description: 'Instant UPI, Razorpay, Cashfree, and Stripe integration with automated GST tax compliance invoices.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Data Extraction & Automation',
            description: 'Deterministic OCR and cognitive parsing pipelines converting supplier PDFs and invoices into database records.',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FaqJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Colver do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Colver is an independent software architecture and systems engineering studio based in Bengaluru, India. We engineer bespoke business operating systems, high-concurrency web platforms, digital payment rails, and AI-powered document extraction pipelines for growing businesses.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is Colver different from standard software development agencies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unlike agencies that deliver bloated templates with recurring seat fees, Colver builds custom software around your proprietary business rules with 100% intellectual property ownership, zero vendor lock-in, and sub-100ms interaction latency.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technology stack and architecture does Colver utilize?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We engineer using TypeScript, Next.js 16 (App Router), React, Node.js, PostgreSQL 16, ClickHouse, Redis, and Docker with automated CI/CD verification and hardened Content Security Policies.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Colver integrate Indian payment rails and GST compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We engineer custom checkout systems with direct integrations for Razorpay UPI, Cashfree, PayU, and Stripe, complete with real-time webhook reconciliation, automated GST tax receipt generation, and multi-warehouse stock reservation locks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do clients own 100% of the code and intellectual property?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Upon milestone completion, clients receive complete copyright ownership, cleanly formatted Git repositories, unminified source code, Docker configs, and database migration scripts with zero recurring platform royalties.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does an architecture sprint or product release take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our Architecture Blueprint Sprint takes 2 weeks to deliver complete schema contracts and interactive wireframes. A full production MVP Core takes 6 to 8 weeks with continuous staging deployments on every commit.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ContactPageJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://colver.in/contact#contactpage',
    url: 'https://colver.in/contact',
    name: 'Contact Colver Systems',
    description: 'Submit your software specifications and operational requirements for direct review by senior engineering architects within 24 hours.',
    mainEntity: {
      '@id': 'https://colver.in/#organization',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
