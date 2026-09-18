import ZoriaLogo from "./ZoriaLogo";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zoria-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <ZoriaLogo className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight text-white">
            ZORIA
          </span>
        </a>
        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full bg-zoria-turquoise px-4 py-2 text-sm font-semibold text-zoria-ink transition hover:bg-white"
        >
          Solicitar presupuesto
        </a>
      </div>
    </header>
  );
}
