const repos = [
  ['Platform', 'SDK/model agnostic control plane for visual workflow configuration, catalogs, auth, policies, traces, usage, and Runner handoff.', 'https://github.com/AGenNext/Platform'],
  ['AGenNext Protocols', 'Protocol library covering MCP, A2A, AG-UI, commerce, payments, authorization, identity, decentralized identity, and discovery.', 'https://github.com/AGenNext/AGenNext-Protocols'],
  ['Skill Registry', 'Reusable agent skill catalog for packaging capabilities as portable building blocks across agent runtimes.', 'https://github.com/AGenNext/AGenNext-SkillRegistry'],
  ['AgentCode', 'OpenHands SDK and LangGraph runtime for coding agents with decision intelligence and self-improvement loops.', 'https://github.com/AGenNext/AgentCode'],
  ['CodeAssist', 'Developer assistance and coding workflow automation for AI-assisted software delivery.', 'https://github.com/AGenNext/CodeAssist'],
  ['CodeReview', 'AI-assisted code review workflows for quality, security, maintainability, and delivery confidence.', 'https://github.com/AGenNext/AGenNext-CodeReview'],
  ['DocOcr', 'Document OCR agent capability for extracting structured knowledge from files and scanned content.', 'https://github.com/AGenNext/AGenNext-DocOcr'],
  ['WebCrawl', 'Web crawling agent capability for collecting, transforming, and grounding external knowledge.', 'https://github.com/AGenNext/AGenNext-WebCrawl'],
  ['Enterprise', 'Enterprise packaging for governance, controls, deployment hardening, and production adoption.', 'https://github.com/AGenNext/AGenNext-Enterprise'],
  ['Professional', 'Professional templates and workflows for teams building practical agent applications.', 'https://github.com/AGenNext/AGenNext-Professional'],
]

const protocols = ['MCP', 'A2A', 'AG-UI', 'UCP', 'AP2', 'ACP', 'ATP', 'AuthZen', 'Agent ID', 'Entra ID', 'Agent DID', 'Registry']

const lifecycle = ['Learn', 'Build', 'Test', 'Try', 'Deploy', 'Evaluate', 'Monitor', 'Scale', 'Showcase', 'Remix', 'Monetize']

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-10 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,.22),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(168,85,247,.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="flex items-center justify-between py-4">
            <div className="text-xl font-bold tracking-tight">AGenNext</div>
            <div className="hidden gap-6 text-sm text-slate-300 md:flex">
              <a href="#platform" className="hover:text-white">Platform</a>
              <a href="#lifecycle" className="hover:text-white">Lifecycle</a>
              <a href="#protocols" className="hover:text-white">Protocols</a>
              <a href="#ecosystem" className="hover:text-white">Repos</a>
              <a href="https://github.com/AGenNext" className="hover:text-white">GitHub</a>
            </div>
          </nav>

          <div className="grid gap-12 py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                Cloud-native, framework-agnostic foundation for enterprise AI agents
              </div>
              <h1 className="max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">
                From frontier AI research to production-grade LLM automation.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                AGenNext is a unified cloud platform for learning, building, testing, deploying, evaluating, monitoring, scaling, showcasing, remixing, and monetizing enterprise AI agents across any model, SDK, framework, runtime, or cloud.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="https://github.com/AGenNext/Platform" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 hover:bg-slate-200">Explore Platform</a>
                <a href="https://github.com/AGenNext" className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold hover:bg-white/10">View GitHub</a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl bg-slate-900 p-5">
                <div className="mb-4 text-sm text-slate-400">AGenNext architecture</div>
                {['Platform: learn, design, configure, govern, evaluate, and monetize agent products', 'Runner: load runtime bridges for LangGraph, CrewAI, AutoGen, LangChain, Mastra, OpenHands, and custom runtimes', 'Kernel: deploy, execute, monitor, and scale workloads across cloud-native infrastructure'].map((item, i) => (
                  <div key={item} className="mb-3 rounded-xl border border-slate-700 bg-slate-800/70 p-4">
                    <span className="mr-3 rounded-full bg-cyan-400/20 px-3 py-1 text-xs text-cyan-200">0{i + 1}</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ['Foundational AI agent cloud', 'A unified layer for frontier research, product experimentation, production operations, and enterprise automation.'],
            ['Framework and model agnostic', 'Choose SDKs, providers, LLMs, frameworks, bridges, skills, protocols, and deployment targets from one control surface.'],
            ['Production-grade lifecycle', 'Move from prototype to governed deployment with evaluation, monitoring, scale, security, observability, and monetization paths.'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[.04] p-7">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-4 text-slate-300">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="lifecycle" className="bg-slate-900 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-cyan-300">Complete agent lifecycle</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">Everything needed to take enterprise agents from idea to revenue.</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {lifecycle.map((step) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4 font-semibold text-slate-100">{step}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="protocols" className="bg-white px-6 py-20 text-slate-950 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-semibold text-cyan-700">Interoperability layer</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Protocols for agents, tools, commerce, identity, and discovery.</h2>
            <p className="mt-5 text-lg text-slate-600">AGenNext Protocols provides a Python package for connecting agents to tools, other agents, user interfaces, payments, authorization systems, identity providers, decentralized IDs, and registries.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {protocols.map((protocol) => <span key={protocol} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{protocol}</span>)}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="mb-10 max-w-3xl">
          <p className="font-semibold text-cyan-300">Repository ecosystem</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">One website for the full AGenNext stack.</h2>
          <p className="mt-5 text-slate-300">The website now presents the key platform, protocol, skill, coding, document, crawl, enterprise, and professional repositories as parts of a coherent agent operating system.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {repos.map(([name, description, href]) => (
            <a key={name} href={href} className="rounded-3xl border border-white/10 bg-white/[.04] p-6 transition hover:-translate-y-1 hover:bg-white/[.08]">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-16">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-400 to-violet-500 p-1">
          <div className="rounded-[1.35rem] bg-slate-950 p-8 sm:p-12">
            <h2 className="text-3xl font-black sm:text-5xl">Build enterprise agent products without locking into one model, SDK, framework, or cloud.</h2>
            <p className="mt-5 max-w-3xl text-slate-300">Start with the Platform control plane, publish reusable skills, connect through open protocols, deploy through cloud-native infrastructure, and evolve toward governed monetizable enterprise automation.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="https://github.com/AGenNext/website" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950">Website repo</a>
              <a href="https://github.com/AGenNext/AGenNext-Protocols" className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold">Protocol docs</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
