import React from 'react'
import Link from 'next/link'
import { Lock, Shield, EyeOff, FileText } from 'lucide-react'
import Badge from '@/components/ui/Badge'

export const metadata = {
  title: 'Privacy Policy | Colver',
  description: 'Data protection principles, privacy standards, and user data rights at Colver',
}

export default function PrivacyPage() {
  return (
    <div className="py-6 sm:py-10 space-y-12 max-w-4xl mx-auto px-4">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="purple" dot>
          Data Governance & Privacy
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-muted font-mono">
          Last revised: October 2026 • Effective immediately
        </p>
      </div>

      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-border/70 space-y-8 text-sm text-muted leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">1. Our Core Privacy Commitment</h2>
          <p>
            Colver is architected around privacy-by-default. We do not sell your personal data, we do not utilize invasive cross-site advertising trackers, and we minimize data collection strictly to what is necessary for providing and securing our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">2. Information We Collect</h2>
          <p>
            When you interact with our website or contact our team, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-foreground/80">
            <li><strong>Contact details:</strong> Name, work email address, and message contents submitted via our inquiry form.</li>
            <li><strong>Technical telemetry:</strong> Aggregated, privacy-preserving browser performance vitals (such as page load duration) with zero user fingerprinting.</li>
            <li><strong>Theme preferences:</strong> Local storage flags to remember your dark/light interface preference.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">3. How Information Is Used</h2>
          <p>
            Information collected is utilized exclusively to respond to your technical inquiries, fulfill enterprise contracts, ensure system reliability, and protect against malicious cyber activity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">4. Data Retention & User Rights</h2>
          <p>
            Under GDPR, CCPA, and global privacy standards, you maintain the right to inspect, correct, export, or request the deletion of any personal communications sent to our organization.
          </p>
          <p>
            To exercise any data rights, email our data protection officer directly at{' '}
            <a href="mailto:info@colver.in" className="text-primary hover:underline font-semibold">
              info@colver.in
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}
