"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const puertas = [
  {
    numero: "01",
    titulo: "Reparar / Comprar",
    texto: "Móviles, ordenadores, portátiles, tablets y mucho más.",
    href: "#reparaciones",
    grande: true,
  },
  {
    numero: "02",
    titulo: "Crear",
    texto: "Tu web. Tu tienda online. Tu presencia digital.",
    href: "#web",
    grande: false,
  },
  {
    numero: "03",
    titulo: "Crecer",
    texto: "Contenido y redes sociales para que tu negocio no pase desapercibido.",
    href: "#redes",
    grande: false,
  },
];

export default function Puertas() {
  return (
    <section className="border-t border-white/[0.06] bg-graphite-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex items-end justify-between gap-6"
        >
          <h2 className="max-w-lg text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ¿Qué necesitas?
          </h2>
          <span className="hidden font-mono text-xs text-graphite-400 sm:block">
            001 — 003
          </span>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
          {puertas.map((p, i) => (
            <motion.a
              key={p.numero}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.08 }}
              href={p.href}
              className={`group relative flex flex-col justify-between bg-graphite-950 p-8 transition-colors duration-400 hover:bg-graphite-900 sm:p-10 ${
                p.grande ? "md:row-span-2 md:min-h-[420px]" : "md:min-h-[204px]"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-graphite-400">
                  {p.numero}
                </span>
                <span className="text-graphite-400 opacity-0 transition-all duration-400 group-hover:translate-x-1 group-hover:text-zoria-blueLight group-hover:opacity-100">
                  ↗
                </span>
              </div>

              <div>
                <h3
                  className={`font-semibold tracking-tight text-white ${
                    p.grande ? "text-4xl sm:text-5xl" : "text-2xl"
                  }`}
                >
                  {p.titulo}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-graphite-400">
                  {p.texto}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
