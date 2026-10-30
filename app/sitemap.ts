import { MetadataRoute } from 'next'

interface SitemapRouteConfig {
  path: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://colver.in'
  const currentDate = new Date()

  const routes: SitemapRouteConfig[] = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/showcase', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/pricing', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/features', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/docs', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/guides', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/careers', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/support', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/security', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/changelog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/llms.txt', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: [`${baseUrl}/og-image.png`],
  }))
}
