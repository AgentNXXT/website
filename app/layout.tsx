import './globals.css'
import type { Metadata } from 'next'

const title = 'AGenNext — AI Agent Infrastructure'
const description =
  'AGenNext builds open-source infrastructure, tools, and systems for AI agents, agent workflows, governance, memory, and deployment.'

export const metadata: Metadata = {
  metadataBase: new URL('https://site.agnxxt.com'),
  title: {
    default: title,
    template: '%s | AGenNext',
  },
  description,
  keywords: [
    'AGenNext',
    'AI agents',
    'agent infrastructure',
    'agent workflows',
    'agent platform',
    'agent governance',
    'agent memory',
    'agent deployment',
    'decision intelligence',
    'browser agents',
    'open source agent tools',
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
