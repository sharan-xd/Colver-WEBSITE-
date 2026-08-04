import Section from '@/components/Section'

export const metadata = {
  title: 'Changelog | Colver',
  description: 'Release notes and product updates for Colver',
}

export default function ChangelogPage() {
  return (
    <Section padding="large">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Changelog</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A simple log of what changed, when it changed, and why it matters.
          </p>
        </div>

        <div className="space-y-6">
          {[
            { title: 'Hardened public headers', body: 'Added CSP, HSTS, and frame protections across the site.' },
            { title: 'Static manifest path', body: 'Removed the dynamic manifest API route in favor of the static file.' },
            { title: 'Missing route cleanup', body: 'Added supporting pages so legacy links no longer 404.' },
          ].map((entry) => (
            <div key={entry.title} className="p-6 rounded-2xl bg-secondary/30 border border-border">
              <h2 className="text-2xl font-semibold mb-2">{entry.title}</h2>
              <p className="text-muted">{entry.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}