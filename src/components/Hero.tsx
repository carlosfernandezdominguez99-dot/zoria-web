import ZoriaLogo from "./ZoriaLogo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-zoria-ink pb-24 pt-40 text-white"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-zoria-turquoise/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <ZoriaLogo className="mb-8 h-16 w-16" />
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zoria-turquoise">
          Soluciones digitales
        </p>
        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Todo lo digital de tu negocio,
          <br className="hidden sm:block" /> en un solo sitio
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Reparación y venta de móviles, webs, redes sociales, contenido y
          automatización con IA. Ayudamos a pymes y negocios locales a
          digitalizarse sin complicaciones.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-zoria-turquoise px-7 py-3.5 text-sm font-semibold text-zoria-ink shadow-glow transition hover:bg-white"
          >
            Cuéntanos tu proyecto
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
