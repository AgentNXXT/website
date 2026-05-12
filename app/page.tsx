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

const protocols = ['MCP', 'A2A', 'ACP', 'AG-UI', 'AuthZen', 'Agent ID', 'Agent DID', 'Registry', 'UCP', 'AP2', 'ATP', 'Entra ID']
const lifecycle = ['Learn', 'Build', 'Test', 'Try', 'Deploy', 'Evaluate', 'Monitor', 'Scale', 'Showcase', 'Remix', 'Monetize']
const trust = ['Reliable AI', 'Secure AI', 'Optimized AI', 'Productive AI', 'Local AI', 'Air-gapped AI', 'Governable AI', 'Policy-bound AI']
const governance = ['Agent identity', 'Lifecycle management', 'Security audit', 'Compliance', 'FGA', 'OPA', 'Zanzibar-style authorization', 'Continuous autonomous governance', 'Immutable audit logs', 'Cryptographically signed skills']
const capabilities = ['Multimodal RAG', 'Notebooks', 'Data for AI', 'Data labeling', 'Text to speech', 'Speech to text', 'Text to image', 'File conversion', 'PDF editing', 'Prompt library', 'Versioned skills', 'Vendor integrations']
const agentTypes = ['Personal AI assistants', 'Persona-specific agents', 'Team-specific agents', 'Project-specific agents', 'Goal-oriented agents', 'Group agents', 'Hierarchical agents', 'Memory-enabled agents', 'Skillful agents', 'Contextual agents', 'Decision-intelligent agents', 'Self-improving agents']

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
              <a href="#trust" className="hover:text-white">Trust</a>
              <a href="#agents" className="hover:text-white">Agents</a>
              <a href="#research" className="hover:text-white">Research</a>
              <a href="https://github.com/AGenNext" className="hover:text-white">GitHub</a>
            </div>
          </nav>

          <div className="grid gap-12 py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                Secure, governable, cloud-native AI agent platform
              </div>
              <h1 className="max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">
                Reliable enterprise AI agents from local runtime to governed cloud.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                AGenNext is a unified framework-agnostic foundation for LLM automation: build personal, team, project, persona, goal-oriented, and hierarchical agents with memory, skills, context, policies, auditability, HITL controls, playbooks, rollback, and production lifecycle governance.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="https://github.com/AGenNext/Platform" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 hover:bg-slate-200">Explore Platform</a>
                <a href="https://github.com/AGenNext" className="rounded-full border border-white/20 px-6 py-3 text-center font-semibold hover:bg-white/10">View GitHub</a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl bg-slate-900 p-5">
                <div className="mb-4 text-sm text-slate-400">AGenNext stack</div>
                {['Platform: learn, design, configure, govern, evaluate, and monetize agent products', 'Runtime: run all frameworks, tools, prompts, skills, and LLMs through one governed control surface', 'Kernel: execute agents, multimodal data, and code together at the lowest practical runtime layer'].map((item, i) => (
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
            ['All frameworks, all LLMs, all runtimes', 'Operate above provider lock-in while running at a foundational kernel/runtime layer where agents, data, tools, prompts, skills, and code can be governed together.'],
            ['Secure by design', 'Support enterprise-grade security patterns including agent identity, policy-bound execution, audit trails, compliance workflows, and air-gapped or local deployments.'],
            ['State-managed agent operations', 'Create persistent, trackable, reversible agents with memory, playbooks, HITL loops, branches, custom logic, versioning, and lifecycle management.'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[.04] p-7">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-4 text-slate-300">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="trust" className="bg-slate-900 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-cyan-300">Enterprise trust fabric</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">Reliable, secure, optimized, local, air-gapped, and governable AI.</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {trust.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4 font-semibold">{item}</div>)}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {governance.map((item) => <div key={item} className="rounded-2xl bg-slate-800/80 p-5 text-slate-200">{item}</div>)}
          </div>
        </div>
      </section>

      <section id="agents" className="bg-white px-6 py-20 text-slate-950 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-cyan-700">Agent lifecycle and capabilities</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">Personal AI assistants and enterprise agents with governed memory, skills, context, and state.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-100 p-7">
              <h3 className="text-2xl font-bold">Agent types</h3>
              <div className="mt-6 flex flex-wrap gap-3">{agentTypes.map((item) => <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700">{item}</span>)}</div>
            </div>
            <div className="rounded-3xl bg-slate-100 p-7">
              <h3 className="text-2xl font-bold">Platform capabilities</h3>
              <div className="mt-6 flex flex-wrap gap-3">{capabilities.map((item) => <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700">{item}</span>)}</div>
            </div>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {lifecycle.map((step) => <div key={step} className="rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-slate-800">{step}</div>)}
          </div>
        </div>
      </section>

      <section id="protocols" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="font-semibold text-cyan-300">Protocol and policy layer</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">A2A, ACP, AuthZen, MCP, FGA, OPA, identity, discovery, and governed tool access.</h2>
          <p className="mt-5 text-lg text-slate-300">AGenNext connects agents to tools, skills, prompt libraries, data, vendors, identity systems, authorization engines, protocols, and audit systems while preserving policy boundaries and lifecycle traceability.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {protocols.map((protocol) => <span key={protocol} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">{protocol}</span>)}
        </div>
      </section>

      <section id="research" className="bg-slate-900 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-300/20 bg-cyan-300/5 p-8 sm:p-12">
          <p className="font-semibold text-cyan-300">Research track</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Experimental unified runtime for agents, multimodal data, and code.</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            AGenNext research explores a Linux-like agent runtime where agents, multimodal data, code, tools, memory, and policy execute together. The current experimental direction includes schema-driven runtime work on LangGraph, combined data + server concepts, time-space database ideas, SurrealDB exploration, and Spectron-style runtime experiments. This research layer is intentionally separated from the production platform capabilities.
          </p>
        </div>
      </section>

      <section id="ecosystem" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="mb-10 max-w-3xl">
          <p className="font-semibold text-cyan-300">Repository ecosystem</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">One website for the full AGenNext stack.</h2>
          <p className="mt-5 text-slate-300">The website presents platform, protocol, skill, coding, document, crawl, enterprise, and professional repositories as parts of a coherent, secure, governable agent operating system.</p>
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
            <h2 className="text-3xl font-black sm:text-5xl">Personal AI assistants and enterprise agents with security, governance, and production operations built in.</h2>
            <p className="mt-5 max-w-3xl text-slate-300">Use AGenNext to learn, build, test, deploy, evaluate, monitor, scale, showcase, remix, and monetize agents without locking into one model, framework, runtime, tool, or cloud.</p>
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
