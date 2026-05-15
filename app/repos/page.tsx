import type { Metadata } from 'next'
import { repoPages } from './data'

export const metadata: Metadata = {
  title: 'Repositories | Autonomyx',
  description: 'Explore AGenNext repositories for autonomous agent research, governance, operations, security, data, workflows, and platform capabilities.',
}

export default function ReposPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="/" className="text-lg font-semibold tracking-tight">Autonomyx</a>
          <nav className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="/" className="hover:text-neutral-950">Home</a>
            <a href="/catalog" className="hover:text-neutral-950">Catalog</a>
            <a href="https://github.com/AGenNext" className="hover:text-neutral-950">GitHub</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Repository landing pages</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            Building blocks for the Frontier Autonomous Agent Research Platform.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-neutral-600">
            Explore the AGenNext repositories organized by user benefit, platform capabilities, use cases, and getting-started paths.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid border-t border-neutral-200 md:grid-cols-2 lg:grid-cols-3">
          {repoPages.map((repo) => (
            <a
              key={repo.slug}
              href={`/repos/${repo.slug}`}
              className="group border-b border-neutral-200 px-0 py-8 transition hover:bg-neutral-50 md:border-r md:px-6"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">{repo.repo}</p>
                {repo.isPrivate ? (
                  <span className="border border-neutral-300 px-2 py-1 text-xs text-neutral-600">Private</span>
                ) : null}
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight group-hover:underline">{repo.name}</h2>
              <p className="mt-4 leading-7 text-neutral-600">{repo.centralBenefit}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
