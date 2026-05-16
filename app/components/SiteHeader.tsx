const siteUrl = 'https://site.agnxxt.com'

const navItems = [
  ['Research Resources', `${siteUrl}/#blog`],
  ['Concepts', `${siteUrl}/#human-first-world`],
  ['Solutions', `${siteUrl}/repos/`],
  ['Platform', `${siteUrl}/#frontier-agent-platform`],
  ['Learning', `${siteUrl}/#blog`],
  ['Playgrounds', `${siteUrl}/catalog/`],
  ['Contact', 'mailto:thefractionalpm@gmail.com'],
]

export default function SiteHeader() {
  return (
    <header className="border-b border-white/15 bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <a href={`${siteUrl}/`} className="text-base font-semibold uppercase tracking-[0.18em] text-white">
          AGenNext
        </a>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-zinc-300">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
