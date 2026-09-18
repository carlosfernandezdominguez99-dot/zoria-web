"use client";

const links = [
  { href: "#reparaciones", label: "Reparaciones" },
  { href: "#web", label: "Web" },
  { href: "#redes", label: "Redes" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-graphite-950/10 bg-zoria-blue/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6">
        <a href="#top" className="text-[22px] font-black leading-none tracking-tight text-graphite-950 sm:text-[26px]">
          ZORIA
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs font-bold uppercase tracking-wide text-graphite-950/70 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 transition-colors hover:text-graphite-950"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-graphite-950 bg-graphite-950 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          Hablamos
        </a>
      </div>
    </header>
  );
}
