import Section from '@/components/Section'

export const metadata = {
  title: 'Documentation | Colver',
  description: 'Documentation and usage guidance for Colver',
}

export default function DocsPage() {
  return (
    <Section padding="large">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Documentation</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A concise guide to the site structure and key pages.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            ['Home', 'Landing page with the core value proposition and CTAs.'],
            ['Showcase', 'Interactive marketing page demonstrating the product theme.'],
            ['About', 'Company story, values, and positioning.'],
            ['Contact', 'Contact form and contact details.'],
          ].map(([title, body]) => (
            <div key={title} className="p-6 rounded-2xl bg-secondary/30 border border-border">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}