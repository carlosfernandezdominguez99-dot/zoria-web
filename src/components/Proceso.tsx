"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const pasos = [
  "Cuéntanos qué necesitas",
  "Buscamos la solución",
  "Lo hacemos",
  "Tú te olvidas del problema",
];

export default function Proceso() {
  return (
    <section id="proceso" className="border-t border-white/[0.06] bg-graphite-900 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Sencillo, de principio a fin.
        </motion.h2>

        <ol className="mt-14 divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {pasos.map((p, i) => (
            <motion.li
              key={p}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-6 py-6"
            >
              <span className="font-mono text-sm text-graphite-600">
                0{i + 1}
              </span>
              <span className="text-lg font-medium text-white sm:text-xl">
                {p}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
