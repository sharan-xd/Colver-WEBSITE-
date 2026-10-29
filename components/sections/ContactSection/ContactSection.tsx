'use client'

import React, { useState, useEffect } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  ShieldCheck, 
  HelpCircle,
  FileCheck,
  Building
} from '@/components/ui/Icons'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Badge from '@/components/ui/Badge'
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
  'Custom Software Development',
  'Web Application Development',
  'E-Commerce & Digital Commerce',
  'Inventory & Operations Management',
  'AI & Workflow Automation',
  'API Engineering & Integrations',
  'UI/UX Design & Product Engineering',
  'Maintenance, Support & Modernization',
  'Other / General Technical Inquiry',
]

const timelineOptions = [
  'Flexible / Exploring Options',
  '1 to 3 Months',
  '3 to 6 Months',
  'Urgent (< 1 Month)',
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
        const paramService = params.get('service')
        if (paramService && serviceOptions.includes(paramService)) {
          setFormData((prev) => ({ ...prev, serviceType: paramService }))
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
        data.message || 'Thank you for reaching out. A senior software engineer will review your specifications and contact you shortly.',
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
    <div className="py-6 sm:py-10 space-y-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <Badge variant="info" dot className="mb-4">
          Project Inquiry & Consultation
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Let&apos;s build software that
          <span className="text-gradient block mt-1">powers your business</span>
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Tell us about your technical goals, operational challenges, or product roadmap.
          Our engineering team will assess your requirements and provide a clear plan.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-border shadow-xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Inquiry Received</h3>
                    <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                      Thank you for detailing your project. We have logged your request under reference #{Math.floor(100000 + Math.random() * 900000)}. Our engineering team will review your requirements and respond within one business day.
                    </p>
                  </div>
                  <Button variant="secondary" onClick={handleReset} className="glass-panel mt-4">
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Full Name"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      error={errors.name}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, name: e.target.value }))
                        if (errors.name) setErrors((p) => ({ ...p, name: undefined }))
                      }}
                      required
                    />
                    <Input
                      label="Organization / Business Name"
                      placeholder="e.g. Bharat Logistics Ltd. (Optional)"
                      value={formData.organization}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, organization: e.target.value }))
                      }}
                    />
                  </div>

                  <Input
                    label="Work Email Address"
                    type="email"
                    placeholder="ramesh@company.in"
                    value={formData.email}
                    error={errors.email}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, email: e.target.value }))
                      if (errors.email) setErrors((p) => ({ ...p, email: undefined }))
                    }}
                    required
                  />

                  {/* Project Type Dropdown */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-xs font-semibold text-foreground">
                      Primary Service / Project Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData((p) => ({ ...p, serviceType: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface/70 border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-card text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Timeline Dropdown */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-xs font-semibold text-foreground">
                      Target Launch / Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData((p) => ({ ...p, timeline: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface/70 border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-card text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Textarea
                    label="Project Specifications & Requirements"
                    rows={5}
                    placeholder="Describe your operational workflows, key features, existing tech stack, and goals..."
                    value={formData.message}
                    error={errors.message}
                    onChange={(e) => {
                      setFormData((p) => ({ ...p, message: e.target.value }))
                      if (errors.message) setErrors((p) => ({ ...p, message: undefined }))
                    }}
                    required
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isLoading}
                      className="w-full shadow-lg shadow-primary/20"
                      iconRight={<Send className="w-4 h-4" />}
                    >
                      {isLoading ? 'Sending Inquiry...' : 'Submit Project Inquiry'}
                    </Button>
                  </div>

                  <p className="text-[11px] text-muted text-center pt-1">
                    Confidentiality guaranteed. All project inquiries are protected under non-disclosure.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & SLA Info Column */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Channel Cards */}
            <div className="p-6 sm:p-7 rounded-3xl glass-card border border-border space-y-6">
              <h3 className="text-base font-bold text-foreground uppercase tracking-wider text-xs">
                Direct Engineering Channels
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted">Direct Email Inquiries</p>
                  <a
                    href="mailto:contact@colver.in"
                    className="text-sm font-bold text-foreground hover:text-primary transition-colors mt-0.5 inline-block"
                  >
                    contact@colver.in
                  </a>
                  <p className="text-xs text-muted mt-0.5">Response SLA: Within 1 business day</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted">Engineering Hub</p>
                  <p className="text-sm font-bold text-foreground mt-0.5">Bangalore, Karnataka, India</p>
                  <p className="text-xs text-muted mt-0.5">Serving clients across India and globally</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted">Development Office Hours</p>
                  <p className="text-sm font-bold text-foreground mt-0.5">Monday – Friday: 9:30 AM – 6:30 PM IST</p>
                  <p className="text-xs text-muted mt-0.5">Emergency SLA support for production deployments</p>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="p-6 rounded-3xl glass-panel border border-border space-y-3 bg-gradient-to-br from-surface/40 to-transparent">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <FileCheck className="w-4 h-4" />
                <span>Explore Capabilities & Work</span>
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Want to learn more about the kinds of platforms we build and our engineering standards?
              </p>
              <div className="pt-1 flex flex-col sm:flex-row gap-2">
                <Link href="/services" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="hidden sm:inline text-muted/40">|</span>
                <Link href="/showcase" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                  <span>View Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
