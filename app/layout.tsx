import './globals.css'
import type { Metadata } from 'next'

const title = 'AGenNext'
const description =
  'AGenNext is building a frontier research platform for autonomous agents and production-grade AI systems.'

export const metadata: Metadata = {
  metadataBase: new URL('https://site.agnxxt.com'),
  title: {
    default: title,
    template: '%s | AGenNext',
  },
  description,
  keywords: [
    'AGenNext',
    'AGenNext',
    'frontier autonomous agent research platform',
    'autonomous agent research',
    'autonomous agent platform',
    'AI agents',
    'agent research',
    'agent infrastructure',
    'agent governance',
    'reliable AI',
    'contextual AI',
    'open source AI',
  ],
  authors: [{ name: 'AGenNext' }],
  creator: 'AGenNext',
  publisher: 'AGenNext',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://site.agnxxt.com',
    siteName: 'AGenNext',
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
