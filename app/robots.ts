import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Applebot',
          'DuckDuckBot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        // Generative AI Search & Answer Engines (for ChatGPT Search, Perplexity, Claude citation)
        userAgent: [
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Claude-SearchBot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://colver.in/sitemap.xml',
    host: 'https://colver.in',
  }
}
