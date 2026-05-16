import type { Metadata } from 'next'
import RepoSearch from './RepoSearch'
import { repoPages } from './data'

const siteUrl = 'https://site.agnxxt.com'

export const metadata: Metadata = {
  title: 'Repositories | AGenNext',
  description: 'Explore AGenNext repositories for autonomous agent research, governance, operations, security, data, workflows, and platform capabilities.',
}

export default function ReposPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/15 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href={`${siteUrl}/`} className="text-base font-semibold uppercase tracking-[0.18em] text-white">AGenNext</a>
          <nav className="flex items-center gap-8 text-sm text-zinc-300">
            <a href={`${siteUrl}/`} className="hover:text-white">Home</a>
            <a href={`${siteUrl}/catalog/`} className="hover:text-white">Catalog</a>
            <a href="https://github.com/AGenNext" className="hover:text-white">GitHub</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-white/15 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[280px_1fr] lg:px-8">
          <div className="border-t border-white pt-5">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-400">Repository Index</p>
          </div>
          <div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Building blocks for the Frontier Autonomous Agent Research Platform.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-300">
              Full-text search across repository landing pages, benefits, use cases, platform capabilities, and getting-started paths.
            </p>
          </div>
        </div>
      </section>

      <RepoSearch repos={repoPages} />
    </main>
  )
}
