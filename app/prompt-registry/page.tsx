const promptFeatures = [
  'Reusable prompt library',
  'Versioned prompts',
  'Prompt playbooks',
  'Enterprise governance',
  'Runtime-portable prompts',
  'Skill and prompt linking',
  'Audit and compliance ready',
]

export default function PromptRegistryPage() {
  return (
    <main className="min-h-screen bg-primary text-white px-6 py-16 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <a href="/website" className="text-sm text-secondary">← AGenNext</a>
        <p className="mt-12 font-semibold text-secondary">Prompt Registry</p>
        <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">Reusable and Governable Prompts for Enterprise AI</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">Package, version, and govern prompts across agents, teams, and workflows with enterprise compliance and runtime portability.</p>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {promptFeatures.map((feature) => (
            <div key={feature} className="rounded-3xl bg-surface p-6 font-semibold">
              {feature}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a href="/docs/skills" className="rounded-full bg-secondary px-6 py-3 text-center font-semibold text-white">Prompt Docs</a>
        </div>
      </section>
    </main>
  )
}