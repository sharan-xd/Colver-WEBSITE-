import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Code2,
  Layout,
  ShoppingBag,
  Boxes,
  Cpu,
  Network,
  Palette,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  HelpCircle,
  Sparkles,
  Zap,
} from '@/components/ui/Icons'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { ServicesJsonLd, BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Software Services & Engineering Capabilities | Colver',
  description:
    'Custom software development, web applications, e-commerce platforms, inventory and operations management systems, and AI workflows tailored to business needs.',
  alternates: {
    canonical: 'https://colver.in/services',
  },
  openGraph: {
    title: 'Software Engineering Services & Capabilities | Colver',
    description:
      'Custom software development, high-performance web apps, e-commerce platforms, operations systems, and AI workflows.',
    url: 'https://colver.in/services',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Colver Software Engineering Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Engineering Services & Capabilities | Colver',
    description:
      'Custom software, web applications, e-commerce platforms, and AI workflows engineered for business scale.',
    images: ['/og-image.jpg'],
  },
  keywords: [
    'custom software development',
    'web application engineering',
    'ecommerce development India',
    'operations management software',
    'AI workflow automation',
    'Next.js development',
    'enterprise web architecture',
  ],
}

interface ServiceOffering {
  id: string
  title: string
  category: string
  headline: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  problemsSolved: string[]
  whoBenefits: string[]
  keyDeliverables: string[]
  technologies: string[]
}

const serviceOfferings: ServiceOffering[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    category: 'Core Systems',
    headline: 'Bespoke systems built around your specific business logic and workflows.',
    icon: Code2,
    description:
      'We design and engineer tailored software systems that solve unique operational challenges, eliminate fragmented manual spreadsheets, and automate core business operations with precision.',
    problemsSolved: [
      'Off-the-shelf software failing to match custom business processes',
      'Fragmented data silos spread across disconnected tools and spreadsheets',
      'High licensing fees for bloated commercial enterprise packages',
      'Bottlenecks in internal data validation and multi-department approvals',
    ],
    whoBenefits: ['Growing Indian SMEs', 'Established Enterprises', 'High-volume Logistics & Operations'],
    keyDeliverables: [
      'Custom ERP & operational consoles',
      'Multi-tenant administrative hubs',
      'Role-based workflow engines',
      'Automated batch processors & exporters',
    ],
    technologies: ['TypeScript', 'Next.js', 'Node.js / Express', 'PostgreSQL', 'Prisma', 'Docker'],
  },
  {
    id: 'web-applications',
    title: 'Web Application Development',
    category: 'Digital Products',
    headline: 'Fast, reactive, and scalable web apps built with modern engineering standards.',
    icon: Layout,
    description:
      'Production-grade web applications engineered for speed, high concurrency, and intuitive usability. We specialize in dynamic customer portals, interactive SaaS products, and collaborative cloud dashboards.',
    problemsSolved: [
      'Slow, bloated legacy web portals that frustrate end users',
      'Poor mobile responsiveness causing lost customer engagement',
      'High latency and server crashes during traffic spikes',
      'Difficult-to-maintain spaghetti code inherited from past agencies',
    ],
    whoBenefits: ['SaaS Founders', 'Digital First Brands', 'Fintech & Edtech Platforms'],
    keyDeliverables: [
      'Single-page and server-rendered web portals',
      'Real-time collaborative dashboards',
      'Customer self-service consoles',
      'High-conversion onboarding funnels',
    ],
    technologies: ['React 18/19', 'Next.js 16', 'Tailwind CSS', 'Redis', 'WebSockets', 'AWS / Vercel'],
  },
  {
    id: 'ecommerce-platforms',
    title: 'E-Commerce & Digital Commerce',
    category: 'Commerce Solutions',
    headline: 'High-conversion stores, B2B ordering portals, and custom checkout flows.',
    icon: ShoppingBag,
    description:
      'Custom e-commerce platforms engineered for seamless checkout experiences, Indian payment rails (UPI, Razorpay, PayU), multi-currency transactions, and synchronized stock levels.',
    problemsSolved: [
      'High cart abandonment caused by friction in generic checkout forms',
      'Inflexible catalog structures for bulk or tiered pricing rules',
      'Payment failures and reconciliation discrepancies during peak sales',
      'Disconnect between online store sales and physical warehouse inventories',
    ],
    whoBenefits: ['Direct-to-Consumer (D2C) Brands', 'B2B Wholesale Distributors', 'Omnichannel Retailers'],
    keyDeliverables: [
      'Headless digital storefronts',
      'B2B wholesale order entry & tiered discounting',
      'Instant UPI, card, and netbanking integrations',
      'Automated tax, invoice, and GST compliance receipts',
    ],
    technologies: ['Next.js Commerce', 'Razorpay SDK', 'Stripe API', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 'inventory-operations',
    title: 'Inventory & Operations Management',
    category: 'Operations & Logistics',
    headline: 'Real-time stock tracking, order fulfillment, and multi-location warehouses.',
    icon: Boxes,
    description:
      'Comprehensive inventory systems designed to give Indian businesses complete visibility over stock movement, vendor purchase orders, warehouse transfers, dispatch logistics, and profit margins.',
    problemsSolved: [
      'Stockouts and lost sales due to delayed inventory audits',
      'Inaccurate stock counts across multiple retail stores or godowns',
      'Manual dispatch errors and slow barcode scanning workflows',
      'Lack of visibility into real product margins and holding costs',
    ],
    whoBenefits: ['Manufacturing Units', 'Warehouse & Supply Chain Operators', 'Multi-outlet Retail Chains'],
    keyDeliverables: [
      'Multi-godown / multi-store stock ledger',
      'Barcode and QR code scanning flows',
      'Purchase order creation & vendor reconciliation',
      'Automated low-stock threshold triggers and alerts',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Redis Queue', 'React Native / Mobile PWA', 'Next.js'],
  },
  {
    id: 'ai-automation',
    title: 'AI & Workflow Automation',
    category: 'Intelligent Systems',
    headline: 'Pragmatic AI integrations that eliminate repetitive manual labor.',
    icon: Cpu,
    description:
      'We implement practical AI workflows that solve concrete business bottlenecks: extracting structured data from documents, smart customer assistance, automated notification pipelines, and intelligent search.',
    problemsSolved: [
      'Hours wasted on manual data entry from paper invoices and PDF receipts',
      'Customer support teams overwhelmed by repetitive order status questions',
      'Lack of actionable business insights from historical sales data',
      'Fragmented notification loops between staff, vendors, and clients',
    ],
    whoBenefits: ['Service Firms', 'Support Operations', 'Documentation-Heavy Enterprises'],
    keyDeliverables: [
      'OCR and PDF structured data extraction pipelines',
      'Intelligent domain-specific AI support assistants',
      'Automated email and WhatsApp notification workflows',
      'Predictive reorder recommendations',
    ],
    technologies: ['OpenAI / Anthropic APIs', 'Python / FastAPI', 'LangChain', 'pgvector', 'TypeScript'],
  },
  {
    id: 'api-integrations',
    title: 'API Engineering & Integrations',
    category: 'Infrastructure',
    headline: 'Connect your software ecosystem with secure, high-throughput APIs.',
    icon: Network,
    description:
      'We build clean REST and GraphQL APIs, integrate third-party logistics and CRM services, and connect modern frontends with existing legacy databases safely without breaking core operations.',
    problemsSolved: [
      'Isolated software systems that cannot communicate with each other',
      'Slow, unindexed database queries causing API timeouts',
      'Security risks and lack of rate limiting on sensitive client endpoints',
      'Difficulty connecting with government portals (e.g. GSTN, e-Way bills)',
    ],
    whoBenefits: ['Fintech Startups', 'Logistics Aggregators', 'Companies Modernizing Legacy Tech'],
    keyDeliverables: [
      'High-throughput RESTful and GraphQL APIs',
      'Logistics & shipping carrier API integrations (Shiprocket, Delhivery)',
      'Payment gateway webhooks & reconciliation workers',
      'Comprehensive OpenAPI / Swagger developer documentation',
    ],
    technologies: ['Node.js', 'Express', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Product Engineering',
    category: 'Product Design',
    headline: 'Intuitive user experiences, accessible design systems, and rapid prototyping.',
    icon: Palette,
    description:
      'User interfaces engineered with precision. We combine human-centered design principles with modern frontend implementation, ensuring every screen is intuitive, accessible, and high-converting.',
    problemsSolved: [
      'Complex internal tools that require hours of employee training',
      'Cluttered user interfaces causing user mistakes and transaction drops',
      'Inconsistent visual branding across various web properties',
      'Accessibility shortcomings excluding mobile and keyboard users',
    ],
    whoBenefits: ['SaaS Products', 'Customer Facing Portals', 'Enterprise Software Teams'],
    keyDeliverables: [
      'Interactive Figma prototypes and user journey maps',
      'Complete component libraries with design tokens',
      'Light/Dark mode responsive typography & layout systems',
      'WCAG AA accessible interface primitives',
    ],
    technologies: ['Figma', 'Tailwind CSS', 'Framer Motion', 'Radix Primitives', 'React'],
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance, Security & Modernization',
    category: 'Ongoing Support',
    headline: 'Keep your digital systems secure, up to date, and running smoothly.',
    icon: ShieldCheck,
    description:
      'Software is a living asset. We provide proactive monitoring, framework upgrades, security patching, database optimization, and on-call engineering support so you can focus on running your business.',
    problemsSolved: [
      'Outdated libraries and security vulnerabilities threatening business data',
      'Slow performance and degraded speed as database size grows',
      'Downtime during traffic spikes with no one available to diagnose the issue',
      'Fear of touching legacy code due to lack of automated tests and documentation',
    ],
    whoBenefits: ['Established Businesses', 'Mission-Critical Portals', 'Post-Launch Products'],
    keyDeliverables: [
      'Proactive security patching and vulnerability audits',
      'Database query optimization and index tuning',
      'Automated backups, uptime monitoring, and SLA response',
      'Continuous feature iterations and architectural enhancements',
    ],
    technologies: ['Datadog / Sentry', 'AWS CloudWatch', 'GitHub Actions CI/CD', 'Automated Backups'],
  },
]

const approachSteps = [
  {
    number: '01',
    title: 'Discovery & Requirement Analysis',
    description:
      'We meet with your team to understand your core business model, operational bottlenecks, workflows, and success metrics. No technical jargon—just clear alignment on what needs to be solved.',
  },
  {
    number: '02',
    title: 'Architecture & UX Design',
    description:
      'We architect the database schemas, select the optimal tech stack, map API contracts, and create interactive wireframes. You review and approve the blueprint before writing code.',
  },
  {
    number: '03',
    title: 'Iterative Engineering & Milestones',
    description:
      'We develop in sprint cycles, shipping demonstrable milestones on private staging URLs. You test features as they are built, ensuring the software matches your expectations at every step.',
  },
  {
    number: '04',
    title: 'Quality Assurance & Security Audits',
    description:
      'Rigorous end-to-end testing, responsive cross-device verification, load testing, and security hardening (CSP, SQL injection prevention, rate limiting) before production deployment.',
  },
  {
    number: '05',
    title: 'Deployment, Staff Training & Support',
    description:
      'Zero-downtime production deployment, DNS configuration, SSL setup, and hands-on staff walkthroughs. We stay engaged with ongoing support and technical maintenance.',
  },
]

export default function ServicesPage() {
  return (
    <div className="py-6 sm:py-10 space-y-16 md:space-y-24">
      <ServicesJsonLd />
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight mb-5 leading-tight text-foreground">
          Software Systems Engineered Around Your Operations
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          From custom business management platforms to high-concurrency web applications,
          we engineer reliable, production-ready software solving concrete operational bottlenecks.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link href="/contact">
            <Button size="lg" variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
              Discuss Your Architecture
            </Button>
          </Link>
          <Link href="/showcase">
            <Button size="lg" variant="secondary">
              Explore Case Studies
            </Button>
          </Link>
        </div>
      </section>

      {/* Services index */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Capabilities & Core Offerings
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Every solution is custom-engineered to match your operational workflows, scale with your growth, and integrate with your existing infrastructure.
          </p>
        </div>

        <div className="space-y-8">
          {serviceOfferings.map((service) => {
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 p-6 sm:p-10 rounded-xl bg-card grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[13px] font-semibold text-blue-400 block">
                    {service.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-base text-slate-200 font-medium">
                    {service.headline}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>Consult on this architecture</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-5 rounded-lg bg-surface space-y-3">
                      <h4 className="text-[13px] font-semibold text-slate-300 uppercase tracking-wide">
                        Problems Solved
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {service.problemsSolved.map((problem) => (
                          <li key={problem} className="flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-5 rounded-lg bg-surface space-y-3">
                      <h4 className="text-[13px] font-semibold text-slate-300 uppercase tracking-wide">
                        Key Deliverables
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {service.keyDeliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                            <span className="font-medium text-foreground">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-surface grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-[13px] text-slate-400 block font-medium">Target Stakeholders</span>
                      <p className="text-sm text-slate-200 mt-1 font-medium">{service.whoBenefits.join(' · ')}</p>
                    </div>
                    <div>
                      <span className="text-[13px] text-slate-400 block font-medium">Core Blueprint Stack</span>
                      <p className="text-sm text-slate-200 mt-1 font-medium">{service.technologies.join(' · ')}</p>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* How We Approach Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Structured Delivery Cadence
          </h2>
          <p className="text-base text-slate-300 mt-2">
            Every business project is delivered through a transparent, disciplined engineering process.
          </p>
        </div>

        <div className="rounded-xl bg-card p-6 sm:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {approachSteps.map((step, idx) => (
              <div key={step.title} className="p-4 rounded-lg bg-surface space-y-2">
                <span className="text-[13px] font-semibold text-blue-400 block">
                  Milestone {idx + 1}
                </span>
                <h3 className="text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project inquiry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-xl bg-card flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Have a project in mind? Let&apos;s discuss your requirements.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Whether you are modernizing an existing legacy platform, automating daily operational workflows, or building a new digital product from scratch, our senior software architects are ready to review your requirements.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link href="/contact">
              <Button size="lg" variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
                Discuss Your Project
              </Button>
            </Link>
            <Link href="/showcase">
              <Button size="lg" variant="secondary">
                Review Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
