const agentBlueprints = [
  'Predefined agent templates',
  'Persona-specific agents',
  'Team and project-oriented agents',
  'Goal-driven workflows',
  'Integrated skills and prompts',
  'Governance and lifecycle management',
  'Reusable enterprise-ready blueprints',
]

export default function AgentBlueprintsPage() {
  return (
    <main className="min-h-screen bg-primary text-white px-6 py-16 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <a href="/website" className="text-sm text-secondary">← AGenNext</a>
        <p className="mt-12 font-semibold text-secondary">Agent Blueprints</p>
        <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">Reusable Templates for Enterprise AI Agents</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">Predefined agent templates for personas, teams, and projects, integrated with skills and prompts, fully governable and production-ready.</p>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {agentBlueprints.map((item) => (
            <div key={item} className="rounded-3xl bg-surface p-6 font-semibold">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a href="/docs/agents" className="rounded-full bg-secondary px-6 py-3 text-center font-semibold text-white">Blueprint Docs</a>
        </div>
      </section>
    </main>
  )
}