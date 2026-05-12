import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGenNext — Cloud Native AI Agent Platform',
  description:
    'Composable open-source infrastructure for AI agents, protocols, skills, orchestration, and enterprise runtime governance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
