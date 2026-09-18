const columnas = [
  {
    titulo: "Zoria",
    links: [
      { label: "Reparaciones", href: "#reparaciones" },
      { label: "Web", href: "#web" },
      { label: "Redes", href: "#redes" },
    ],
  },
  {
    titulo: "Contacto",
    links: [
      { label: "WhatsApp", href: "#contacto" },
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
      { label: "Ubicación", href: "#" },
    ],
  },
  {
    titulo: "Legal",
    links: [
      { label: "Aviso legal", href: "#" },
      { label: "Privacidad", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-zoria-blue/25 bg-graphite-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-black leading-none tracking-tight text-white">
              ZORIA
            </span>
            <span className="max-w-[220px] text-sm font-medium text-graphite-400">
              Soluciones digitales de principio a fin.
            </span>
          </div>
          {columnas.map((c) => (
            <div key={c.titulo}>
              <p className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wide text-zoria-blueLight">
                <span className="h-1.5 w-1.5 rounded-full bg-zoria-blue" />
                {c.titulo}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm font-bold text-white/85 transition-colors duration-200 hover:text-zoria-blueLight"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t-2 border-white/10 pt-6 font-mono text-[11px] uppercase tracking-wide text-graphite-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Zoria. Todos los derechos reservados.</span>
          <span className="text-white/40">Repara · Conecta · Crece</span>
        </div>
      </div>
    </footer>
  );
}
