import ZoriaLogo from "./ZoriaLogo";

export default function Footer() {
  return (
    <footer className="border-t border-zoria-ink/5 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <ZoriaLogo className="h-7 w-7" />
          <span className="text-sm font-semibold text-zoria-ink">
            ZORIA · Soluciones digitales
          </span>
        </div>
        <p className="text-xs text-zoria-ink/50">
          © {new Date().getFullYear()} Zoria. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
