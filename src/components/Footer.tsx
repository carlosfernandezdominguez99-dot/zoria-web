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
    <footer className="border-t border-white/[0.06] bg-graphite-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <ZoriaLogo className="h-16 w-16" />
            <span className="text-sm font-semibold text-white">
              ZORIA · Soluciones digitales
            </span>
          </div>
          {columnas.map((c) => (
            <div key={c.titulo}>
              <p className="text-xs font-medium uppercase tracking-wide text-graphite-400">
                {c.titulo}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-graphite-100 transition-colors hover:text-zoria-blueLight"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/[0.06] pt-6 text-xs text-graphite-400">
          © {new Date().getFullYear()} Zoria. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
