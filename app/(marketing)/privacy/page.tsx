import Section from '@/components/Section'

export const metadata = {
  title: 'Privacy | Colver',
  description: 'Privacy policy for Colver',
}

export default function PrivacyPage() {
  return (
    <Section padding="large">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Colver is currently a marketing site and does not process account data.
          </p>
        </div>

        <div className="space-y-6 text-muted leading-relaxed">
          <p>We do not currently collect user accounts, passwords, or payment information on this site.</p>
          <p>Basic analytics or hosting telemetry may be present depending on the deployment platform.</p>
          <p>If this changes in the future, the privacy policy should be updated before launch.</p>
        </div>
      </div>
    </Section>
  )
}