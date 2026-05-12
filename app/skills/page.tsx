const features = [
  'Reusable skill packaging',
  'Prompt and playbook libraries',
  'Versioned skills',
  'Cryptographically signed artifacts',
  'Skill governance and approvals',
  'Enterprise reuse across teams',
  'Runtime-portable capabilities',
  'Marketplace-ready publishing',
]

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-950 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-cyan-700">← AGenNext</a>
        <p className="mt-12 font-semibold text-cyan-700">Skills + Prompt Library</p>
        <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">Reusable, signed, versioned agent capabilities.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">AGenNext Skills help teams package prompts, tools, workflows, playbooks, and operational knowledge into governed building blocks that can be reused across agents, teams, projects, and runtimes.</p>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => <div key={feature} className="rounded-3xl bg-slate-100 p-6 font-semibold">{feature}</div>)}
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a href="https://github.com/AGenNext/AGenNext-SkillRegistry" className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white">Skill Registry repo</a>
          <a href="/docs/skills" className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold">Read docs</a>
        </div>
      </section>
    </main>
  )
}
