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

export const metadata: Metadata = {
  title: 'Software Services & Engineering Capabilities | Colver',
  description:
    'Custom software development, web applications, e-commerce platforms, inventory and operations management systems, and AI workflows tailored to business needs.',
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
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <Badge variant="info" dot className="mb-4">
          Tailored Engineering Services
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Software engineered around
          <span className="text-gradient block mt-1">your business requirements</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
          From custom business management platforms to high-conversion web applications,
          we build reliable, production-ready software that solves concrete business challenges.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link href="/contact">
            <Button size="lg" variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
              Discuss Your Project
            </Button>
          </Link>
          <Link href="/showcase">
            <Button size="lg" variant="secondary" className="glass-panel">
              Explore Our Work
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            What We Build
          </h2>
          <p className="text-sm sm:text-base text-muted mt-2">
            Every solution is custom-engineered to match your operational workflows, scale with your growth, and integrate with your existing tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceOfferings.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                id={service.id}
                className="
                  p-6 sm:p-8 rounded-3xl glass-card border border-border/70
                  hover:border-primary/40 transition-all duration-200 flex flex-col justify-between
                "
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted px-3 py-1 rounded-full bg-surface border border-border">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">
                    {service.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Problems Solved */}
                  <div className="mb-6 space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Problems This Solves:
                    </h4>
                    <ul className="space-y-1.5">
                      {service.problemsSolved.map((prob, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Who Benefits */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                      Designed For:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.whoBenefits.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-surface/80 border border-border/60 text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                      Core Stack:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface/50 border border-border text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Inquire About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* How We Approach Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="purple" dot className="mb-3">
            Structured Delivery Cadence
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            How We Approach Projects
          </h2>
          <p className="text-sm sm:text-base text-muted mt-2">
            Every business project is delivered through a transparent, disciplined engineering process.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {approachSteps.map((step) => (
            <div
              key={step.number}
              className="p-5 sm:p-6 rounded-2xl glass-panel border border-border flex flex-col justify-between h-full"
            >
              <div>
                <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 inline-block mb-4">
                  STAGE {step.number}
                </span>
                <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prominent Project Inquiry Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-border shadow-2xl relative overflow-hidden bg-gradient-to-br from-primary/10 via-surface/80 to-surface/40 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Consultation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Have a project in mind? Let&apos;s discuss your requirements.
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Whether you are modernizing an existing legacy platform, automating daily operational workflows, or building a new digital product from scratch, our senior software architects are ready to review your requirements.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto shadow-lg shadow-primary/20" iconRight={<ArrowRight className="w-4 h-4" />}>
                  Discuss Your Project
                </Button>
              </Link>
              <Link href="/showcase" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto glass-panel">
                  Review Case Studies
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted pt-2">
              Fast response • Confidential consultation • Detailed technical proposal
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
