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
    logo: 'https://colver.in/icon.svg',
    image: 'https://colver.in/og-image.jpg',
    description:
      'Colver engineers bespoke software systems, high-performance web applications, digital commerce rails, and intelligent AI workflows.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
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

export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://colver.in/#website',
    url: 'https://colver.in',
    name: 'Colver',
    description: 'The future of digital creation and high-performance engineering.',
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
      name: 'Colver Core Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web Application Development',
            description: 'Engineered for sub-second page loads, real-time sync, and scalable cloud edge architecture.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Commerce & Indian Payment Rails',
            description: 'Integrated UPI, Razorpay, PayU, and multi-currency transactions with automated inventory synchronization.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Inventory & Operations Management Systems',
            description: 'Multi-warehouse stock tracking, invoice extraction pipelines, and workflow automation for modern enterprises.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI & Workflow Automation',
            description: 'LLM agents, document OCR data extraction, and internal automation platforms.',
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

export function ContactPageJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://colver.in/contact#contactpage',
    url: 'https://colver.in/contact',
    name: 'Contact Colver Systems',
    description: 'Get in touch with Colver software engineers to review project specifications and technical requirements.',
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
