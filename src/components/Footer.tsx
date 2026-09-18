import ZoriaLogo from "./ZoriaLogo";

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
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-graphite-950 bg-zoria-blue shadow-[3px_3px_0_0_rgba(22,224,189,0.35)]">
                <ZoriaLogo className="h-7 w-7" />
              </span>
              <span className="text-2xl font-black leading-none tracking-tight text-white">
                ZORIA
              </span>
            </div>
            <span className="max-w-[220px] text-sm font-medium text-graphite-400">
              Soluciones digitales de principio a fin.
            </span>
          </div>
          {columnas.map((c) => (
            <div key={c.titulo}>
              <span className="inline-flex items-center rounded-full border-2 border-white/15 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-zoria-blueLight">
                {c.titulo}
              </span>
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

        <div className="mt-14 flex flex-col gap-4 border-t-2 border-white/10 pt-6 font-mono text-[11px] uppercase tracking-wide text-graphite-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Zoria. Todos los derechos reservados.</span>
          <span className="inline-flex w-fit items-center rounded-full border-2 border-white/15 px-3 py-1 text-white/50">
            Repara · Conecta · Crece
          </span>
        </div>
      </div>
    </footer>
  );
}
