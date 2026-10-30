'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icons'

const faqs = [
  {
    question: 'What does Colver engineer?',
    answer:
      'Colver is an independent software architecture and systems engineering studio in Bengaluru. We design and build bespoke business platforms, high-concurrency web applications, transaction rails, and deterministic AI extraction pipelines for growing businesses.',
  },
  {
    question: 'How is Colver different from standard software agencies?',
    answer:
      'Unlike agencies that deploy generic templates with monthly seat taxes, Colver builds custom software around your proprietary business rules with 100% intellectual property ownership, zero proprietary lock-in, and sub-100ms interaction latency.',
  },
  {
    question: 'What core technology stack and databases do you build with?',
    answer:
      'We engineer primarily with TypeScript, Next.js 16 (App Router), React, Node.js, PostgreSQL 16, ClickHouse, Redis, and Docker, backed by automated CI/CD verification and hardened Content Security Policies.',
  },
  {
    question: 'Do clients retain 100% intellectual property ownership?',
    answer:
      'Yes. Upon milestone delivery, clients receive complete copyright ownership, cleanly formatted Git repositories, unminified source code, Docker configs, and database migration scripts with zero recurring platform royalties.',
  },
  {
    question: 'How do you handle Indian payment rails and GST compliance?',
    answer:
      'We engineer custom checkout flows integrating Razorpay UPI, Cashfree, PayU, and Stripe with instant payment authorization, automated GST-compliant tax invoicing, and idempotent reconciliation.',
  },
  {
    question: 'What are the sprint timelines for delivery?',
    answer:
      'Our Architecture Blueprint Sprint takes 2 weeks to deliver schema contracts and interactive wireframes. A full production MVP Core takes 6 to 8 weeks with continuous staging deployments on every commit.',
  },
]

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-24 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div className="space-y-2 max-w-xl animate-entrance">
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F4F1EA] leading-tight">
              Architectural Inquiries.
            </h2>
          </div>
          <p className="text-base text-[#BFC3C9] max-w-md leading-relaxed animate-entrance stagger-1">
            Direct, factual specifications regarding our engineering stack, delivery timelines, pricing models, and intellectual property ownership.
          </p>
        </div>

        {/* Editorial Q&A Stream (Open editorial layout, zero card grids) */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.question}
                className="p-6 bg-[#0c0c0c] hover:bg-[#111111] transition-colors rounded-[2px] animate-entrance"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-start justify-between gap-6 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA] group-hover:text-[#C8FF00] transition-colors leading-snug">
                    {faq.question}
                  </h3>
                  <span className="text-sm font-mono text-[#C8FF00] shrink-0 mt-1">
                    {isOpen ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 max-w-3xl">
                    <p className="text-base text-[#BFC3C9] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Supporting action trigger */}
        <div className="pt-4 flex items-center justify-between flex-wrap gap-4 text-sm text-[#8E929A]">
          <span>Have specific technical requirements not listed here?</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#C8FF00] hover:text-[#b8ea00] transition-colors"
          >
            <span>Consult directly with an architect</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
