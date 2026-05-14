import type { Metadata } from 'next'
import CatalogExplorer from './CatalogExplorer'

export const metadata: Metadata = {
  title: 'Agent Catalog | AGenNext',
  description: 'Search and filter verified AI agents and frameworks using DID-based canonical identifiers.',
}

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#06B6D4]">Verified Agent Marketplace</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Search trusted AI agents by DID, publisher, category, and capability.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Explore official-source agents from leading ecosystems including Docker, Google, LangChain, Microsoft, CrewAI, Agno, DSPy, Dify, Langflow, and LlamaIndex.
          </p>
        </div>
      </section>

      <CatalogExplorer />
    </main>
  )
}
