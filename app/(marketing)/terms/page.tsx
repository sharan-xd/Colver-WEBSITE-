import Section from '@/components/Section'

export const metadata = {
  title: 'Terms | Colver',
  description: 'Terms of service for Colver',
}

export default function TermsPage() {
  return (
    <Section padding="large">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            These terms apply to the public marketing site and may change as the product evolves.
          </p>
        </div>

        <div className="space-y-6 text-muted leading-relaxed">
          <p>This site is provided for informational and promotional purposes.</p>
          <p>Do not rely on the content as a binding service commitment unless explicitly stated in writing.</p>
          <p>Any future service terms should be published before user onboarding or billing goes live.</p>
        </div>
      </div>
    </Section>
  )
}