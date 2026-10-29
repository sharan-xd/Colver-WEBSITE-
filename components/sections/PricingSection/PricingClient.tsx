'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, HelpCircle, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { useToast } from '@/components/ui/Toast'

export default function PricingClient() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual')
  const { toast } = useToast()

  const plans = [
    {
      name: 'Starter',
      priceMonthly: '$0',
      priceAnnual: '$0',
      period: 'forever',
      description: 'Ideal for independent developers and early MVP idea validation.',
      features: [
        'Full static marketing site architecture',
        'Built-in contact workflow & form validation',
        'Standard edge CDN caching',
        'Community Discord & email support',
        'Basic analytics & uptime monitoring',
      ],
      cta: 'Get Started Free',
      variant: 'secondary' as const,
      popular: false,
    },
    {
      name: 'Growth',
      priceMonthly: '$49',
      priceAnnual: '$39',
      period: '/mo',
      description: 'For scaling teams that need peak performance, design craft, and priority delivery.',
      features: [
        'Everything in Starter',
        'Advanced dynamic pages & interactive components',
        'Real-time WebSocket sync & telemetry',
        'Core Web Vitals performance tuning (<100ms)',
        'Priority 24/7 Slack & engineering support',
        'Custom domain SSL & hardened CSP headers',
      ],
      cta: 'Launch with Growth',
      variant: 'primary' as const,
      popular: true,
    },
    {
      name: 'Enterprise',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      period: 'tailored',
      description: 'For mission-critical applications, compliance reviews, and dedicated teams.',
      features: [
        'Everything in Growth',
        'Custom microservice & AI agent architecture',
        'SOC2, ISO27001, and HIPAA compliance review',
        'Dedicated senior engineering delivery squad',
        '99.99% Uptime SLA with financial backing',
        'Custom SSO (Okta, SAML) & data residency',
      ],
      cta: 'Contact Enterprise',
      variant: 'secondary' as const,
      popular: false,
    },
  ]

  const handleSelectPlan = (planName: string) => {
    toast(`Selected ${planName} Plan`, 'Redirecting you to complete setup...', 'success')
  }

  const faqs = [
    {
      q: 'Can I switch between plans later?',
      a: 'Yes, you can upgrade, downgrade, or transition to custom enterprise scoping at any time with prorated billing.',
    },
    {
      q: 'Do you offer custom engineering contracts?',
      a: 'Yes. Enterprise clients can contract dedicated design systems and full-stack engineering teams tailored to their release milestones.',
    },
    {
      q: 'What is your refund and trial policy?',
      a: 'We offer an unconditional 14-day evaluation period on all paid tiers. If you are not satisfied, we refund 100% of your investment.',
    },
  ]

  return (
    <div className="py-6 sm:py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <Badge variant="purple" dot className="mb-4">
          Transparent Investment
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Predictable pricing.
          <span className="text-gradient block mt-1">Unmatched engineering value.</span>
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Transparent plans for teams that demand production-ready craftsmanship, rock-solid security, and calm delivery.
        </p>

        {/* Billing Switch */}
        <div className="mt-8 inline-flex items-center p-1 rounded-full glass-panel border border-border">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`
              px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer
              ${billingCycle === 'monthly' ? 'bg-primary text-white shadow-sm' : 'text-muted hover:text-foreground'}
            `}
          >
            Monthly Billing
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('annual')}
            className={`
              px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-150 cursor-pointer
              ${billingCycle === 'annual' ? 'bg-primary text-white shadow-sm' : 'text-muted hover:text-foreground'}
            `}
          >
            <span>Annual Billing</span>
            <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly

            return (
              <div
                key={plan.name}
                className={`
                  relative p-7 sm:p-8 rounded-3xl glass-card flex flex-col justify-between
                  transition-all duration-200 border
                  ${
                    plan.popular
                      ? 'border-primary ring-2 ring-primary/30 shadow-2xl bg-gradient-to-b from-primary/[0.08] to-transparent'
                      : 'border-border/60 hover:border-border'
                  }
                `}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-white text-[11px] font-bold tracking-wide shadow-md">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest font-mono text-muted font-bold">
                      {plan.name}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                      {price}
                    </span>
                    <span className="text-sm font-medium text-muted">
                      {price !== 'Custom' && price !== '$0' ? plan.period : ''}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="pt-6 border-t border-border/50 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Included Capabilities
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                    onClick={() => handleSelectPlan(plan.name)}
                    className="block w-full"
                  >
                    <Button
                      variant={plan.variant}
                      className="w-full"
                      size="md"
                      iconRight={<ArrowRight className="w-4 h-4" />}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Enterprise Custom Scope Callout */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-border text-center space-y-4">
          <Badge variant="info">Need tailored enterprise architecture?</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Have custom compliance or multi-tenant requirements?
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Our architectural team works directly with engineering leads to scope custom delivery milestones, security questionnaires, and SLA terms.
          </p>
          <div className="pt-2">
            <Link href="/contact?type=enterprise">
              <Button variant="primary" size="lg" iconRight={<ArrowRight className="w-4 h-4" />}>
                Schedule Technical Discovery
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto px-4 space-y-4">
        <h3 className="text-xl font-bold text-foreground text-center mb-6">
          Frequently Answered Questions
        </h3>
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-2xl glass-card border border-border/60">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-muted leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
