const agentTypes = [
  'Personal AI assistants',
  'Persona-specific agents',
  'Team agents',
  'Project agents',
  'Goal-oriented agents',
  'Hierarchical agents',
  'Group agents',
  'Memory-enabled agents',
  'Self-improving agents',
]

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-cyan-300">← AGenNext</a>
        <p className="mt-12 font-semibold text-cyan-300">Agents</p>
        <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">Production-ready agents with memory, skills, governance, and persistent state.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Build agents that are trackable, governable, reversible, collaborative, multimodal, and continuously improving across enterprise workflows.</p>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {agentTypes.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[.04] p-6 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
