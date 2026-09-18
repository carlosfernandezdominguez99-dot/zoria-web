"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const puertas = [
  {
    numero: "01",
    titulo: "Reparar / Comprar",
    texto: "Móviles, ordenadores, portátiles, tablets y mucho más.",
    href: "#reparaciones",
  },
  {
    numero: "02",
    titulo: "Crear",
    texto: "Tu web. Tu tienda online. Tu presencia digital.",
    href: "#web",
  },
  {
    numero: "03",
    titulo: "Crecer",
    texto: "Contenido y redes sociales para que tu negocio no pase desapercibido.",
    href: "#redes",
  },
];

export default function Puertas() {
  return (
    <section className="relative bg-graphite-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <p className="text-sm font-medium text-zoria-blueLight">
            ¿Qué necesitas?
          </p>
          <h2 className="mt-3 max-w-lg text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tres caminos. Un solo equipo.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {puertas.map((p) => (
            <motion.a
              key={p.numero}
              variants={fadeUp}
              href={p.href}
              className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite-900 p-7 transition-all duration-400 hover:border-zoria-blue/40"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-zoria-blue/0 blur-3xl transition-colors duration-400 group-hover:bg-zoria-blue/20"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-graphite-400">
                {p.numero}
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {p.titulo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-graphite-400">
                  {p.texto}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-zoria-blueLight opacity-0 transition-all duration-400 group-hover:translate-x-1 group-hover:opacity-100">
                  Descubrir →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
