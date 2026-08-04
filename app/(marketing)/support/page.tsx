import Section from '@/components/Section'

export const metadata = {
  title: 'Support | Colver',
  description: 'Support and contact options for Colver',
}

export default function SupportPage() {
  return (
    <Section padding="large">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Support</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
          Need help with the site or want to report an issue? Reach out and we’ll route it correctly.
        </p>

        <div className="p-8 rounded-3xl bg-secondary/30 border border-border text-left">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-muted mb-2">Email: hello@colver.com</p>
          <p className="text-muted">For a faster response, use the contact page and include as much detail as possible.</p>
        </div>
      </div>
    </Section>
  )
}