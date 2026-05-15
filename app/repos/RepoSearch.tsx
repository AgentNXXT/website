'use client'

import { useMemo, useState } from 'react'
import type { RepoPage } from './data'

const siteUrl = 'https://site.agnxxt.com'

type RepoSearchProps = {
  repos: RepoPage[]
}

export default function RepoSearch({ repos }: RepoSearchProps) {
  const [query, setQuery] = useState('')

  const filteredRepos = useMemo(() => {
    const term = query.trim().toLowerCase()

    if (!term) {
      return repos
    }

    return repos.filter((repo) => {
      const searchable = [
        repo.name,
        repo.repo,
        repo.centralBenefit,
        repo.whatItIs,
        repo.whyImportant,
        ...repo.useCases,
        ...repo.benefits,
      ]
        .join(' ')
        .toLowerCase()

      return searchable.includes(term)
    })
  }, [query, repos])

  return (
    <section className="bg-white text-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 grid gap-6 border-b border-neutral-300 pb-8 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Search</p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">Filter repositories by capability, use case, benefit, or name.</p>
          </div>
          <div>
            <label htmlFor="repo-search" className="sr-only">Search repositories</label>
            <input
              id="repo-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search repositories, capabilities, use cases..."
              className="w-full border border-neutral-400 bg-white px-5 py-4 text-lg text-neutral-950 outline-none transition placeholder:text-neutral-500 focus:border-neutral-950"
            />
            <p className="mt-3 text-sm text-neutral-500">{filteredRepos.length} of {repos.length} repositories shown</p>
          </div>
        </div>

        <div className="grid border-l border-t border-neutral-300 md:grid-cols-2 xl:grid-cols-3">
          {filteredRepos.map((repo, index) => (
            <a
              key={repo.slug}
              href={`${siteUrl}/repos/${repo.slug}/`}
              className="group flex min-h-[260px] flex-col justify-between border-b border-r border-neutral-300 bg-white p-7 transition hover:bg-neutral-100"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{String(index + 1).padStart(2, '0')}</p>
                  {repo.isPrivate ? (
                    <span className="border border-neutral-400 px-2 py-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-600">Private</span>
                  ) : null}
                </div>
                <h2 className="mt-8 text-2xl font-semibold leading-tight tracking-[-0.02em] text-neutral-950 group-hover:underline">
                  {repo.name}
                </h2>
                <p className="mt-5 text-base leading-7 text-neutral-700">{repo.centralBenefit}</p>
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">{repo.repo}</p>
            </a>
          ))}
        </div>

        {filteredRepos.length === 0 ? (
          <div className="border-x border-b border-neutral-300 p-10 text-neutral-600">No repositories match your search.</div>
        ) : null}
      </div>
    </section>
  )
}
