import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pm-consulting-one.vercel.app'
  
  // Main pages
  const routes = [
    '',
    '/blog',
    '/book',
    '/portal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Blog posts (from blog directory)
  const blogPosts = [
    '5-biggest-roadmap-mistakes-google-meta',
    'align-executives-product-vision',
    'how-to-prioritize-features',
    'product-market-fit-not-binary',
    'roadmap-planning-frameworks',
    'stakeholder-alignment',
    'why-product-strategy-is-probably-broken',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Lead magnets
  const leadMagnets = [
    'okr-template-framework',
    'prioritization-matrix',
    'product-strategy-checklist',
    'roadmap-critique-template',
    'roadmap-strategy-template',
  ].map((slug) => ({
    url: `${baseUrl}/lead-magnets/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogPosts, ...leadMagnets]
}
