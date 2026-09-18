const pasos = [
  {
    numero: "01",
    titulo: "Nos cuentas tu necesidad",
    descripcion:
      "Rellenas el formulario o nos escribes y hablamos sobre lo que tu negocio necesita.",
  },
  {
    numero: "02",
    titulo: "Te preparamos una propuesta",
    descripcion:
      "Te enviamos una propuesta clara, con alcance y precio, sin letra pequeña.",
  },
  {
    numero: "03",
    titulo: "Ponemos manos a la obra",
    descripcion:
      "Empezamos a trabajar y te mantenemos informado durante todo el proceso.",
  },
  {
    numero: "04",
    titulo: "Te acompañamos después",
    descripcion:
      "Seguimos disponibles para mantenimiento, mejoras y lo que tu negocio necesite crecer.",
  },
];

export default function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="bg-zoria-ink py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zoria-turquoise">
            Cómo trabajamos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Sencillo, claro y sin sorpresas
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <div key={p.numero}>
              <div className="text-sm font-semibold text-zoria-turquoise">
                {p.numero}
              </div>
              <h3 className="mt-3 text-base font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {p.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
