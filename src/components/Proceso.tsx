"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const pasos = [
  { n: "01", t: "Cuéntanos qué necesitas" },
  { n: "02", t: "Buscamos la solución" },
  { n: "03", t: "Lo hacemos" },
  { n: "04", t: "Tú te olvidas del problema" },
];

export default function Proceso() {
  return (
    <section className="relative bg-graphite-900 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <p className="text-sm font-medium text-zoria-blueLight">Proceso</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Sencillo, de principio a fin.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            className="absolute left-0 right-0 top-3 hidden h-px bg-white/[0.08] lg:block"
            aria-hidden="true"
          />
          {pasos.map((p) => (
            <motion.div key={p.n} variants={fadeUp} className="relative">
              <span className="relative z-10 mb-5 inline-block h-1.5 w-1.5 rounded-full bg-zoria-blue ring-4 ring-graphite-900" />
              <div className="text-xs font-medium text-graphite-400">
                {p.n}
              </div>
              <div className="mt-2 text-base font-semibold text-white">
                {p.t}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
