'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import Section, { FadeInView } from '@/components/Section'

type ContactFormState = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Replace with server action / API route
  }

  return (
    <Section padding="large">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">

          <FadeInView delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in touch</h1>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Have a question or want to work together? We&apos;d love to hear from you.
            </p>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeInView delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                             transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                             transition-colors"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                             transition-colors"
                  placeholder="What can we help you with?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                             transition-colors resize-none"
                  placeholder="Tell us a little about what you're working on..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-lg bg-primary text-white font-medium
                           hover:bg-primary/90 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </FadeInView>

          {/* Contact Info */}
          <FadeInView delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Email us</h3>
                <p className="text-muted mb-2">For general inquiries:</p>
                <a href="mailto:info@colver.in" className="text-primary hover:underline">
                  info@colver.in
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Visit us</h3>
                <p className="text-muted">
                  Bangalore, India
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <h4 className="font-semibold mb-2">Need quick help?</h4>
                <p className="text-sm text-muted mb-4">
                  Check out our documentation for answers to common questions.
                </p>
                <a href="/docs" className="text-primary text-sm font-medium hover:underline">
                  View Documentation →
                </a>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </Section>
  )
}