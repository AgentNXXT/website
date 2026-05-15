import type { ReactNode } from 'react'

export const siteUrl = 'https://site.agnxxt.com'

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-black text-white">{children}</main>
}

export function ReportHero({ eyebrow, label, title, description }: { eyebrow: string; label?: string; title: string; description?: string }) {
  return (
    <section className="border-b border-white/15 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[280px_1fr] lg:px-8">
        <div className="border-t border-white pt-5">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-400">{eyebrow}</p>
          {label ? <p className="mt-6 text-sm leading-6 text-zinc-500">{label}</p> : null}
        </div>
        <div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            {title}
          </h1>
          {description ? <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-300">{description}</p> : null}
        </div>
      </div>
    </section>
  )
}

export function WhitePanel({ children }: { children: ReactNode }) {
  return <section className="bg-white text-neutral-950">{children}</section>
}

export function ContentGrid({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
      <div className="space-y-20">{children}</div>
      {aside ? <aside className="space-y-8">{aside}</aside> : null}
    </div>
  )
}

export function ReportSection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="grid gap-8 border-t border-neutral-300 pt-10 md:grid-cols-[160px_1fr]">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">{number}</p>
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-6 max-w-4xl text-lg leading-8 text-neutral-600">{children}</div>
      </div>
    </section>
  )
}

export function ReportList({ items }: { items: string[] }) {
  return (
    <ul className="grid border-t border-neutral-300 md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="border-b border-neutral-300 py-4 pr-6 text-base leading-7 text-neutral-700">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function SidebarBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border border-neutral-300 p-8">
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  )
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="inline-flex border border-neutral-950 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
    >
      {children}
    </a>
  )
}
