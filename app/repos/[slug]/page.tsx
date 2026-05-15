import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getRepoPage, getRepoReadmeUrl, platformCapabilities, repoPages } from '../data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return repoPages.map((repo) => ({ slug: repo.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const repo = getRepoPage(slug)

  if (!repo) {
    return {}
  }

  return {
    title: `${repo.name} | Autonomyx`,
    description: repo.centralBenefit,
  }
}

export default async function RepoPage({ params }: Props) {
  const { slug } = await params
  const repo = getRepoPage(slug)

  if (!repo) {
    notFound()
  }

  const readmeUrl = getRepoReadmeUrl(repo)

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="/" className="text-lg font-semibold tracking-tight">Autonomyx</a>
          <nav className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="/repos" className="hover:text-neutral-950">Repositories</a>
            <a href="https://github.com/AGenNext" className="hover:text-neutral-950">GitHub</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">AGenNext Repository</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
              {repo.centralBenefit}
            </h1>
            <p className="mt-8 text-xl font-medium tracking-tight">{repo.name}</p>
          </div>

          <aside className="border border-neutral-200 p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Platform Capabilities
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              {platformCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
        <div className="space-y-16">
          <Section title="What it is" content={repo.whatItIs} />
          <Section title="Why it is important" content={repo.whyImportant} />
          <ListSection title="Use Cases" items={repo.useCases} />
          <ListSection title="Benefits" items={repo.benefits} />
        </div>

        <aside>
          <div className="sticky top-8 border border-neutral-200 p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              How to Get Started
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              {repo.isPrivate
                ? 'This repository is private. Public documentation remains high-level.' 
                : 'Explore the repository README, architecture, and implementation details on GitHub.'}
            </p>
            <a
              href={readmeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex border border-neutral-950 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
            >
              {repo.isPrivate ? 'Private Repository' : 'Get Started on GitHub'}
            </a>
          </div>
        </aside>
      </section>
    </main>
  )
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-6 max-w-4xl text-lg leading-8 text-neutral-600">{content}</p>
    </section>
  )
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-6 space-y-4 text-lg leading-8 text-neutral-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
