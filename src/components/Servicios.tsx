const servicios = [
  {
    icono: "📱",
    titulo: "Reparación de móviles",
    descripcion:
      "Reparamos móviles y dispositivos con repuestos de calidad y garantía, con tiempos de entrega rápidos.",
  },
  {
    icono: "🔁",
    titulo: "Compra y venta de móviles",
    descripcion:
      "Móviles nuevos y reacondicionados, revisados y listos para usar, a precios competitivos.",
  },
  {
    icono: "💻",
    titulo: "Diseño y creación de webs",
    descripcion:
      "Webs a medida, rápidas y modernas, pensadas para convertir visitas en clientes.",
  },
  {
    icono: "🛠️",
    titulo: "Mantenimiento web",
    descripcion:
      "Tu web siempre actualizada, segura y funcionando, sin que tengas que preocuparte de nada.",
  },
  {
    icono: "📲",
    titulo: "Redes sociales",
    descripcion:
      "Gestión de tus redes para que tengan presencia constante y conecten con tu público.",
  },
  {
    icono: "🎬",
    titulo: "Creación de contenido",
    descripcion:
      "Fotos, vídeos y piezas gráficas pensadas para tu marca y tus clientes.",
  },
  {
    icono: "⚙️",
    titulo: "Automatización de procesos",
    descripcion:
      "Automatizamos tareas repetitivas de tu negocio para que ganes tiempo y reduzcas errores.",
  },
  {
    icono: "🤖",
    titulo: "IA aplicada a negocios",
    descripcion:
      "Integramos inteligencia artificial en tu día a día: atención al cliente, gestión, contenido y más.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zoria-turquoiseDark">
            Servicios
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zoria-ink sm:text-4xl">
            Todo lo que tu negocio necesita para digitalizarse
          </h2>
          <p className="mt-4 text-zoria-ink/60">
            Desde la reparación de un móvil hasta la automatización con IA de
            tus procesos. Un solo equipo, una sola forma de trabajar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="group rounded-2xl border border-zoria-ink/5 bg-zoria-mist p-6 transition hover:border-zoria-turquoise/40 hover:shadow-lg hover:shadow-zoria-turquoise/10"
            >
              <div className="text-3xl">{s.icono}</div>
              <h3 className="mt-4 text-base font-semibold text-zoria-ink">
                {s.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zoria-ink/60">
                {s.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
