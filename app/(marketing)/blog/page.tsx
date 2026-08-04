import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'

export const metadata = {
  title: 'Blog | Colver',
  description: 'Notes, updates, and product thinking from Colver',
}

const posts = [
  { title: 'Designing sites that feel fast', tag: 'Performance', date: 'Aug 2026' },
  { title: 'Security basics for modern marketing sites', tag: 'Security', date: 'Aug 2026' },
  { title: 'Shipping with fewer moving parts', tag: 'Product', date: 'Aug 2026' },
]

export default function BlogPage() {
  return (
    <Section padding="large">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Practical notes on performance, security, product design, and shipping well.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <StaggerContainer className="grid gap-6" staggerDelay={0.08}>
          {posts.map((post) => (
            <StaggerItem key={post.title}>
              <article className="p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">{post.tag}</p>
                  <h2 className="text-2xl md:text-3xl font-semibold">{post.title}</h2>
                </div>
                <p className="text-sm text-muted">{post.date}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInView delay={0.25}>
          <div className="mt-12 text-center">
            <a href="/contact" className="text-primary font-medium hover:underline">Want a topic covered? Contact us.</a>
          </div>
        </FadeInView>
      </div>
    </Section>
  )
}