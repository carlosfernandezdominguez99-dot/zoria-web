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
    <footer className="border-t-2 border-graphite-950 bg-[#F4F6F5] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-graphite-950 bg-graphite-950 p-3">
              <ZoriaLogo className="h-full w-full" />
            </span>
            <div>
              <p className="text-2xl font-black leading-none tracking-tight text-graphite-950">
                ZORIA
              </p>
              <p className="mt-2 max-w-[220px] text-sm font-medium text-graphite-950/55">
                Soluciones digitales de principio a fin.
              </p>
            </div>
          </div>
          {columnas.map((c) => (
            <div key={c.titulo}>
              <span className="inline-flex items-center rounded-full border-2 border-graphite-950 bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-graphite-950">
                {c.titulo}
              </span>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm font-bold text-graphite-950/70 transition-colors duration-200 hover:text-zoria-blueDim"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t-2 border-graphite-950/10 pt-6 font-mono text-[11px] uppercase tracking-wide text-graphite-950/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Zoria. Todos los derechos reservados.</span>
          <span className="inline-flex w-fit items-center rounded-full border-2 border-graphite-950/15 px-3 py-1 text-graphite-950/45">
            Repara · Conecta · Crece
          </span>
        </div>
      </div>
    </footer>
  );
}
