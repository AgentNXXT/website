import type { Metadata } from 'next'
import CatalogExplorer from './CatalogExplorer'

export const metadata: Metadata = {
  title: 'Agent Catalog | AGenNext',
  description: 'Search and filter verified AI agents and frameworks using DID-based canonical identifiers.',
}

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Verified Agent Marketplace
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Search trusted AI agents by DID, publisher, category, and capability.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
            Explore official-source agents from leading ecosystems including Docker, Google, LangChain, Microsoft, CrewAI, Agno, DSPy, Dify, Langflow, and LlamaIndex.
          </p>
        </div>
      </section>

      <CatalogExplorer />
    </main>
  )
}
