import Section from '@/components/Section'

export const metadata = {
  title: 'Guides | Colver',
  description: 'Guides and implementation notes for Colver',
}

export default function GuidesPage() {
  return (
    <Section padding="large">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Guides</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Short, practical guidance for using and extending the site.
          </p>
        </div>

        <div className="space-y-6">
          {[
            'How to update the homepage messaging',
            'How to add a new marketing page',
            'How to keep security headers and metadata aligned',
          ].map((item) => (
            <div key={item} className="p-6 rounded-2xl bg-secondary/30 border border-border">
              <p className="text-foreground font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}