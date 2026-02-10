'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Section, { FadeInView } from '@/components/Section'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <main className="relative pt-24">
      <AnimatedBackground />
      
      <Section padding="large" centerContent>
        <div className="max-w-4xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Contact Us
              </span>
            </FadeInView>
            
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
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                             transition-colors"
                    placeholder="John Doe"
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
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                             transition-colors"
                    placeholder="john@example.com"
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
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                             transition-colors"
                    placeholder="How can we help?"
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
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                             transition-colors resize-none"
                    placeholder="Tell us about your project..."
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
                  <a href="mailto:hello@colver.com" className="text-primary hover:underline">
                    hello@colver.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Visit us</h3>
                  <p className="text-muted">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Follow us</h3>
                  <div className="flex gap-4">
                    {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-12 h-12 rounded-full bg-secondary/50 border border-border
                                 flex items-center justify-center text-sm font-medium
                                 hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        {social[0]}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                  <h4 className="font-semibold mb-2">Need quick help?</h4>
                  <p className="text-sm text-muted mb-4">
                    Check out our documentation for answers to common questions.
                  </p>
                  <a 
                    href="/docs" 
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View Documentation →
                  </a>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </Section>
    </main>
  )
}