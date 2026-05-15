export const dynamic = 'force-static'

export default function sitemap() {
  const routes = [
    '',
    '/platform',
    '/agents',
    '/security',
    '/runtime',
    '/protocols',
    '/skills',
    '/multimodal',
    '/enterprise',
    '/research',
    '/monetization',
    '/docs',
    '/docs/platform',
    '/docs/security',
    '/docs/runtime',
    '/docs/protocols',
    '/docs/skills',
    '/docs/research',
  ]

  return routes.map((route) => ({
    url: `https://agnext.ai${route}`,
    lastModified: new Date(),
  }))
}
