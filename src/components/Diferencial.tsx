"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const pasos = ["Repara", "Conecta", "Crece"];

export default function Diferencial() {
  return (
    <section className="relative overflow-hidden border-t-2 border-graphite-950 bg-zoria-blue py-32">
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-mono text-[22vw] font-medium text-graphite-950/[0.06] sm:text-[14vw]"
        aria-hidden="true"
      >
        ZORIA
      </span>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="inline-flex items-center rounded-full border-2 border-graphite-950 bg-white px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-graphite-950"
        >
          Un solo sitio. Todo lo digital.
        </motion.span>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-6 text-balance text-2xl font-black leading-snug tracking-tight text-graphite-950 sm:text-4xl"
        >
          Zoria no es otra tienda de informática.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-4 max-w-xl text-balance text-graphite-950/70"
        >
          Un cliente puede reparar su móvil, una empresa puede contratar una
          web y después seguir con mantenimiento y redes sociales — sin
          cambiar de proveedor.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {pasos.map((p, i) => (
            <motion.span
              key={p}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3, rotate: i % 2 === 0 ? -2 : 2 }}
              className={`inline-flex items-center gap-2 rounded-full border-2 border-graphite-950 px-6 py-3 text-base font-black tracking-tight shadow-[4px_4px_0_0_rgba(10,13,18,0.9)] sm:text-lg ${
                i === 1
                  ? "bg-graphite-950 text-white"
                  : "bg-white text-graphite-950"
              }`}
            >
              {p}
              {i < pasos.length - 1 && (
                <span className="text-graphite-950/30">→</span>
              )}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
