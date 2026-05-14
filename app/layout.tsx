import './globals.css'
import type { Metadata } from 'next'

const title = 'AGenNext Agent World — Human-Machine Coexistence Platform'
const description =
  'AGenNext is building Agent World: an open-source platform where humans and machines coexist, share memory, make better decisions, and act together across physical and digital environments.'

export const metadata: Metadata = {
  metadataBase: new URL('https://site.agnxxt.com'),
  title: {
    default: title,
    template: '%s | AGenNext Agent World',
  },
  description,
  keywords: [
    'Agent World',
    'AGenNext',
    'AI agents',
    'human machine coexistence',
    'agent platform',
    'agent governance',
    'agent memory',
    'decision intelligence',
    'physical digital AI',
    'IoT agents',
    'browser agents',
    'edge AI agents',
    'open source agent platform',
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
    siteName: 'AGenNext Agent World',
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
