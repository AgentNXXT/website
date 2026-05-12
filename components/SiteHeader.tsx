const basePath = '/website';
const navItems = [
  ['Platform', `${basePath}/platform`],
  ['Agents', `${basePath}/agents`],
  ['Security', `${basePath}/security`],
  ['Runtime', `${basePath}/runtime`],
  ['Protocols', `${basePath}/protocols`],
  ['Skills', `${basePath}/skills`],
  ['Docs', `${basePath}/docs`],
];

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 px-6 py-4 text-white backdrop-blur sm:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <a href={`${basePath}/`} className="text-xl font-black tracking-tight">AGenNext</a>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {navItems.map(([label, href]) => <a key={href} href={href} className="hover:text-white">{label}</a>)}
          <a href="https://github.com/AGenNext" className="hover:text-white">GitHub</a>
        </div>
      </nav>
    </header>
  )
}