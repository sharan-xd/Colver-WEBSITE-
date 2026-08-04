import Section from '@/components/Section'

export const metadata = {
  title: 'Security | Colver',
  description: 'Security information for Colver',
}

export default function SecurityPage() {
  return (
    <Section padding="large">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Security</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            The site is hardened with browser headers and a minimal public attack surface.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            ['Headers', 'CSP, HSTS, frame protection, and referrer policy are enabled.'],
            ['Exposure', 'No auth, no uploads, no DB, and no public API routes.'],
            ['Deployment', 'Static pages are cached and manifest is served from a static file.'],
            ['Reporting', 'If you find an issue, contact hello@colver.com.'],
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