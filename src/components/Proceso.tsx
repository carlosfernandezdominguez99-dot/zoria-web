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
    <section id="proceso" className="border-t-2 border-graphite-950 bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-balance text-3xl font-black tracking-tight text-graphite-950 sm:text-4xl"
        >
          Sencillo, de principio a fin.
        </motion.h2>

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[19px] hidden h-px bg-graphite-950/10 lg:block"
            aria-hidden="true"
          />
          {pasos.map((p, i) => (
            <motion.li
              key={p}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.09 }}
              className="relative"
            >
              <span
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-sm font-bold ${
                  i === 0
                    ? "border-graphite-950 bg-zoria-blue text-graphite-950"
                    : "border-graphite-950/20 bg-white text-graphite-950/40"
                }`}
              >
                {i + 1}
              </span>
              <p className="mt-5 text-lg font-black leading-snug text-graphite-950 sm:text-xl">
                {p}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
