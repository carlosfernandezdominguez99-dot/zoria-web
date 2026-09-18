"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const conceptos = ["Contenido", "Estrategia", "Edición", "Publicación", "Crecimiento"];

const cards = [
  { icono: "🎬", label: "Reel" },
  { icono: "📸", label: "Post" },
  { icono: "✨", label: "Story" },
  { icono: "🎵", label: "TikTok" },
  { icono: "📈", label: "Estadísticas" },
  { icono: "💬", label: "Interacción" },
];

export default function Redes() {
  return (
    <section id="redes" className="relative overflow-hidden bg-graphite-900 py-28">
      <div
        className="pointer-events-none absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-zoria-blue/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="text-sm font-medium text-zoria-blueLight">
              Redes sociales
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Que te vean.
              <br /> Que te recuerden.
            </h2>
            <p className="mt-4 max-w-md text-graphite-400">
              Creamos contenido y gestionamos Instagram, TikTok y Facebook
              para que tu negocio tenga presencia constante.
            </p>

            <motion.div
              variants={stagger(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-8 flex flex-wrap gap-2"
            >
              {conceptos.map((c) => (
                <motion.span
                  key={c}
                  variants={fadeUp}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-graphite-100"
                >
                  {c}
                </motion.span>
              ))}
            </motion.div>

            <a
              href="#contacto"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-graphite-950 transition-all duration-400 hover:-translate-y-0.5 hover:bg-zoria-blue hover:text-white"
            >
              Potenciar mis redes →
            </a>
          </motion.div>

          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-3 gap-3"
          >
            {cards.map((c, i) => (
              <motion.div
                key={c.label}
                variants={fadeUp}
                className={`flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-graphite-800 to-graphite-950 transition-transform duration-400 hover:-translate-y-1 hover:border-zoria-blue/40 ${
                  i === 1 || i === 4 ? "translate-y-4" : ""
                }`}
              >
                <span className="text-2xl">{c.icono}</span>
                <span className="text-[11px] font-medium text-graphite-400">
                  {c.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
