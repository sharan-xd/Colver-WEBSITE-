import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://colver.in'
  
  const routes = [
    '',
    '/services',
    '/showcase',
    '/about',
    '/contact',
    '/features',
    '/docs',
    '/guides',
    '/blog',
    '/security',
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
