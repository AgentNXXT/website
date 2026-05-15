import './globals.css'
import type { Metadata } from 'next'

const title = 'Frontier Autonomous Agent Platform by Autonomyx'
const description =
  'Autonomyx is building a frontier autonomous agent platform for production-grade AI systems.'

export const metadata: Metadata = {
  metadataBase: new URL('https://site.agnxxt.com'),
  title: {
    default: title,
    template: '%s | Autonomyx',
  },
  description,
  keywords: [
    'Autonomyx',
    'frontier autonomous agent platform',
    'autonomous agent platform',
    'AI agents',
    'agent platform',
    'agent infrastructure',
    'agent governance',
    'reliable AI',
    'contextual AI',
    'open source AI',
  ],
  authors: [{ name: 'Autonomyx' }],
  creator: 'Autonomyx',
  publisher: 'Autonomyx',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://site.agnxxt.com',
    siteName: 'Autonomyx',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
