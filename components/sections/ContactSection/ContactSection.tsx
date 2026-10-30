'use client'

import React, { useState, useEffect } from 'react'
import type { FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  Send,
  CheckCircle2,
} from '@/components/ui/Icons'
import { useToast } from '@/components/ui/Toast'

type ContactFormState = {
  name: string
  organization: string
  email: string
  serviceType: string
  timeline: string
  message: string
}

type FormErrors = Partial<Record<keyof ContactFormState, string>>

const serviceOptions = [
  'Custom Business Systems & ERPs',
  'High-Concurrency Web Applications',
  'E-Commerce & Transaction Rails',
  'Inventory & Multi-Warehouse Tracking',
  'AI Workflows & Structured Extraction',
  'API Engineering & Integrations',
  'UI/UX Design Systems & Tokens',
  'Ongoing Maintenance & Architecture SLA',
  'General Technical Inquiry',
]

const timelineOptions = [
  'Immediate (< 1 Month)',
  '1 to 3 Months',
  '3 to 6 Months',
  'Exploring Architecture Options',
]

const productionSpecimens = [
  {
    name: 'Nexus ERP Console',
    image: '/projects/nexus.jpg',
    metric: '45k events/sec',
    detail: 'Pessimistic stock locking & multi-warehouse ledger',
  },
  {
    name: 'Apex Transaction Core',
    image: '/projects/apex.jpg',
    metric: 'Sub-90ms Finality',
    detail: 'Automated GST invoice generation & instant UPI',
  },
  {
    name: 'Pulse Telemetry Stream',
    image: '/projects/pulse.jpg',
    metric: 'Sub-50ms Refresh',
    detail: 'Real-time WebSocket connection pool monitoring',
  },
]

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    organization: '',
    email: '',
    serviceType: serviceOptions[0],
    timeline: timelineOptions[0],
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  // Pre-fill service from URL param if available
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        const paramService = params.get('service') || params.get('project') || params.get('sprint')
        if (paramService) {
          const match = serviceOptions.find((opt) => opt.toLowerCase().includes(paramService.toLowerCase()))
          if (match) {
            setFormData((prev) => ({ ...prev, serviceType: match }))
          }
        }
      }
    } catch {
      // ignore
    }
  }, [])

  const validate = (): boolean => {
    const errs: FormErrors = {}
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid work email address.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide descriptive project requirements (at least 15 characters).'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) {
      toast('Please review the form', 'Some fields require your attention.', 'error')
      return
    }

    setIsLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _hp: honeypot,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry')
      }

      setIsLoading(false)
      setIsSubmitted(true)
      toast(
        'Inquiry received!',
        data.message || 'Thank you for detailing your specifications. A senior systems architect will review your parameters and respond within 24 hours.',
        'success'
      )
    } catch (err: unknown) {
      setIsLoading(false)
      const message = err instanceof Error ? err.message : 'Unable to reach the server. Please try again.'
      toast('Submission failed', message, 'error')
    }
  }

  const handleReset = () => {
    setFormData({
      name: '',
      organization: '',
      email: '',
      serviceType: serviceOptions[0],
      timeline: timelineOptions[0],
      message: '',
    })
    setHoneypot('')
    setErrors({})
    setIsSubmitted(false)
  }

  return (
    <div className="py-8 sm:py-16 space-y-24 md:space-y-36">
      {/* Hero Section — Prominent Display Typography + Architecture Preview Specimen */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 animate-entrance">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] rounded-[2px] text-sm font-mono text-[#C8FF00]">
              <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-glow-dot" />
              <span>Direct Architect Intake // 24-Hour SLA Response</span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-[84px] tracking-tight text-[#F4F1EA] leading-[0.98] uppercase">
              Start Architecture.
            </h1>

            <p className="text-lg sm:text-xl text-[#F4F1EA] font-medium leading-relaxed max-w-xl">
              Tell us about your operational bottlenecks, product specifications, or transaction throughput demands.
            </p>

            <p className="text-base text-[#BFC3C9] leading-relaxed max-w-xl">
              Our senior engineering architects will assess your technical parameters and respond with an actionable architecture blueprint within 24 hours.
            </p>

            <div className="pt-2">
              <a href="#contact-form">
                <button
                  type="button"
                  className="h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                >
                  <span>Begin Intake Specification</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 animate-entrance stagger-1">
            <div className="relative aspect-[4/3] w-full rounded-[2px] overflow-hidden bg-[#101010]">
              <Image
                src="/projects/architecture.jpg"
                alt="Colver Architecture Intake Blueprint"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm font-mono text-[#F4F1EA] px-3 py-2 bg-[#080808] rounded-[2px]">
                <span className="text-[#C8FF00]">INTAKE PROTOCOL</span>
                <span>DIRECT ENGINEER REVIEW</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Intake Form & Studio Information */}
      <section id="contact-form" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Intake Form */}
          <div className="lg:col-span-7 animate-entrance stagger-1">
            <div className="p-8 sm:p-12 bg-[#101010] rounded-[2px]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-[2px] bg-[#181818] text-[#C8FF00] flex items-center justify-center mx-auto text-2xl font-bold">
                    <CheckCircle2 className="w-8 h-8 text-[#C8FF00]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F1EA]">
                      Inquiry Received & Logged
                    </h3>
                    <p className="text-base text-[#BFC3C9] max-w-md mx-auto leading-relaxed">
                      Thank you for detailing your specifications. A senior systems architect is reviewing your technical requirements and will respond within 24 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="h-11 px-6 rounded-[2px] bg-[#181818] hover:bg-[#222222] text-[#F4F1EA] text-base font-medium transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Anti-spam honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="_hp"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-[#F4F1EA]">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, name: e.target.value }))
                          if (errors.name) setErrors((p) => ({ ...p, name: undefined }))
                        }}
                        className={`w-full h-12 px-4 rounded-[2px] bg-[#0a0a0a] text-base text-[#F4F1EA] placeholder-[#8E929A] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C8FF00] ${
                          errors.name ? 'border border-red-500' : 'border border-white/10'
                        }`}
                        required
                      />
                      {errors.name && (
                        <p className="text-sm text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-[#F4F1EA]">
                        Organization / Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bharat Logistics Ltd."
                        value={formData.organization}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, organization: e.target.value }))
                        }}
                        className="w-full h-12 px-4 rounded-[2px] bg-[#0a0a0a] text-base text-[#F4F1EA] placeholder-[#8E929A] border border-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[#C8FF00]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#F4F1EA]">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="ramesh@company.in"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, email: e.target.value }))
                        if (errors.email) setErrors((p) => ({ ...p, email: undefined }))
                      }}
                      className={`w-full h-12 px-4 rounded-[2px] bg-[#0a0a0a] text-base text-[#F4F1EA] placeholder-[#8E929A] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C8FF00] ${
                        errors.email ? 'border border-red-500' : 'border border-white/10'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-[#F4F1EA]">
                        Primary Project Focus
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData((p) => ({ ...p, serviceType: e.target.value }))}
                        className="w-full h-12 px-4 rounded-[2px] bg-[#0a0a0a] text-base text-[#F4F1EA] border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#C8FF00] cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#121212] text-[#F4F1EA]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-[#F4F1EA]">
                        Desired Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData((p) => ({ ...p, timeline: e.target.value }))}
                        className="w-full h-12 px-4 rounded-[2px] bg-[#0a0a0a] text-base text-[#F4F1EA] border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#C8FF00] cursor-pointer"
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#121212] text-[#F4F1EA]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#F4F1EA]">
                      Project Specifications & Operational Bottlenecks *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Describe your workflows, key features, existing database or tools, and desired operational outcome..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, message: e.target.value }))
                        if (errors.message) setErrors((p) => ({ ...p, message: undefined }))
                      }}
                      className={`w-full p-4 rounded-[2px] bg-[#0a0a0a] text-base text-[#F4F1EA] placeholder-[#8E929A] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C8FF00] ${
                        errors.message ? 'border border-red-500' : 'border border-white/10'
                      }`}
                      required
                    />
                    {errors.message && (
                      <p className="text-sm text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 px-8 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer disabled:opacity-50"
                    >
                      <span>{isLoading ? 'Transmitting Specifications...' : 'Submit Specifications for Audit'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-sm text-[#8E929A] text-center pt-1">
                    Strict non-disclosure guaranteed. All inquiries handled directly by senior engineering architects.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Studio Specs & Visual Specimens */}
          <div className="lg:col-span-5 space-y-6 animate-entrance stagger-2">
            <div className="p-8 bg-[#101010] rounded-[2px] space-y-6">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F4F1EA]">
                Studio Intake Specifications
              </h2>

              <div className="space-y-4">
                <div className="p-5 bg-[#141414] rounded-[2px] space-y-1">
                  <span className="text-sm font-semibold text-[#8E929A] block">Direct Inquiries</span>
                  <a
                    href="mailto:contact@colver.in"
                    className="font-display font-bold text-lg text-[#F4F1EA] hover:text-[#C8FF00] transition-colors block"
                  >
                    contact@colver.in
                  </a>
                  <span className="text-sm text-[#C8FF00] block mt-1">Guaranteed SLA: Response within 24 hours</span>
                </div>

                <div className="p-5 bg-[#141414] rounded-[2px] space-y-1">
                  <span className="text-sm font-semibold text-[#8E929A] block">Studio Location</span>
                  <div className="font-display font-bold text-lg text-[#F4F1EA]">
                    Bengaluru, Karnataka, India
                  </div>
                  <span className="text-sm text-[#BFC3C9] block">Indiranagar 560038 · 12.9716° N, 77.5946° E</span>
                </div>

                <div className="p-5 bg-[#141414] rounded-[2px] space-y-1">
                  <span className="text-sm font-semibold text-[#8E929A] block">Operating Cadence</span>
                  <div className="font-display font-bold text-lg text-[#F4F1EA]">
                    Monday – Friday: 09:30 – 18:30 IST
                  </div>
                  <span className="text-sm text-[#BFC3C9] block">Emergency 24/7 SLA for mission-critical systems</span>
                </div>
              </div>
            </div>

            {/* Visual Interface Fragment Specimen */}
            <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden bg-[#101010]">
              <Image
                src="/projects/pipeline.jpg"
                alt="Automated CI/CD Delivery Pipeline Specimen"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#080808] rounded-[2px] text-sm font-mono text-[#C8FF00]">
                TELEMETRY // VERIFIED DEPLOYMENT MESH
              </div>
            </div>

            <div className="p-6 bg-[#101010] rounded-[2px] space-y-2">
              <span className="text-sm font-semibold text-[#C8FF00] block">Prefer to Review Code First?</span>
              <p className="text-base text-[#BFC3C9] leading-relaxed">
                Inspect our live production releases, latency benchmarks, and architectural tokens.
              </p>
              <div className="pt-2">
                <Link
                  href="/showcase"
                  className="inline-flex items-center gap-2 text-base font-semibold text-[#F4F1EA] hover:text-[#C8FF00] transition-colors"
                >
                  <span>Explore Showcase & Case Studies</span>
                  <ArrowRight className="w-4 h-4 text-[#C8FF00]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Footprint Specimen Row */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-entrance stagger-3">
        <div className="space-y-2">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight">
            Production Footprint.
          </h2>
          <p className="text-base text-[#BFC3C9]">
            Architectures engineered and actively supported by Colver across South Asia edge nodes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {productionSpecimens.map((spec) => (
            <div key={spec.name} className="space-y-3 bg-[#101010] p-4 rounded-[2px]">
              <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={spec.image}
                  alt={spec.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#080808] rounded-[2px] text-xs font-mono text-[#C8FF00]">
                  {spec.metric}
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-[#F4F1EA]">{spec.name}</h3>
                <p className="text-sm text-[#8E929A] mt-0.5">{spec.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
