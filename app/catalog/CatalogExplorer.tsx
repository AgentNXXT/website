'use client'

import { useMemo, useState } from 'react'
import { agents, categories, capabilities, publishers, verificationStatuses } from './agents'

const all = 'all'

export default function CatalogExplorer() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(all)
  const [capability, setCapability] = useState(all)
  const [publisher, setPublisher] = useState(all)
  const [verification, setVerification] = useState(all)

  const filteredAgents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return agents.filter((agent) => {
      const searchable = [
        agent.name,
        agent.short_description,
        agent.did,
        agent.publisher_id,
        agent.publisher_did,
        agent.source_repository,
        ...agent.categories,
        ...agent.capabilities,
      ]
        .join(' ')
        .toLowerCase()

      return (
        (!normalizedQuery || searchable.includes(normalizedQuery)) &&
        (category === all || agent.categories.includes(category)) &&
        (capability === all || agent.capabilities.includes(capability)) &&
        (publisher === all || agent.publisher_id === publisher) &&
        (verification === all || agent.verification_status === verification)
      )
    })
  }, [query, category, capability, publisher, verification])

  const resetFilters = () => {
    setQuery('')
    setCategory(all)
    setCapability(all)
    setPublisher(all)
    setVerification(all)
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">Search agents</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, DID, capability, publisher..."
              className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-[#06B6D4]"
            />
          </label>

          <Select label="Category" value={category} onChange={setCategory} options={categories} />
          <Select label="Capability" value={capability} onChange={setCapability} options={capabilities} />
          <Select label="Publisher" value={publisher} onChange={setPublisher} options={publishers} />
          <Select label="Verification" value={verification} onChange={setVerification} options={verificationStatuses} />

          <div className="flex items-end">
            <button
              type="button"
              onClick={resetFilters}
              className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0B1020]"
            >
              Reset filters
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[#06B6D4]">
          {filteredAgents.length} of {agents.length} agents shown
        </p>
        <p className="text-sm text-slate-400">Canonical ID = DID for every listing.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredAgents.map((agent) => (
          <article key={agent.canonical_id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#06B6D4]/50 hover:bg-white/[0.07]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">{agent.verification_status}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">{agent.name}</h2>
              </div>
              <span className="rounded-full bg-[#7C3AED]/20 px-3 py-1 text-xs font-semibold text-[#C4B5FD]">{agent.lifecycle_state}</span>
            </div>

            <p className="mt-4 leading-7 text-slate-400">{agent.short_description}</p>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p className="break-all"><span className="font-semibold text-white">DID:</span> {agent.did}</p>
              <p><span className="font-semibold text-white">Publisher:</span> {agent.publisher_id}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {agent.categories.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{item}</span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {agent.capabilities.slice(0, 4).map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">{item}</span>
              ))}
            </div>

            <a href={agent.source_repository} target="_blank" rel="noreferrer" className="mt-6 inline-flex font-semibold text-[#06B6D4] hover:underline">
              Official source →
            </a>
          </article>
        ))}
      </div>

      {filteredAgents.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
          <h2 className="text-2xl font-semibold text-white">No agents found</h2>
          <p className="mt-3 text-slate-400">Try clearing filters or searching for another framework, publisher, DID, or capability.</p>
        </div>
      ) : null}
    </section>
  )
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3 text-white outline-none focus:border-[#06B6D4]"
      >
        <option value={all}>All</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}
