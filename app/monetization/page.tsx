const monetization = [
  'Agent marketplaces',
  'Reusable skill publishing',
  'Enterprise deployment services',
  'Private agent operations',
  'Prompt and workflow licensing',
  'Managed orchestration offerings',
  'Secure enterprise AI hosting',
  'Operational AI consulting',
]

export default function MonetizationPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-950 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-cyan-700">← AGenNext</a>
        <p className="mt-12 font-semibold text-cyan-700">Monetization</p>
        <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">Monetize agents, skills, prompts, workflows, and enterprise AI operations.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">AGenNext supports reusable agent ecosystems with operational governance, packaging, publishing, licensing, hosting, and enterprise deployment workflows.</p>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {monetization.map((item) => (
            <div key={item} className="rounded-3xl bg-slate-100 p-6 font-semibold">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
