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
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="font-mono text-xs uppercase tracking-wide text-graphite-950/70"
        >
          Un solo sitio. Todo lo digital.
        </motion.span>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-5 text-balance text-2xl font-black leading-snug tracking-tight text-graphite-950 sm:text-4xl"
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-10 flex items-center justify-center gap-4 text-lg font-bold sm:text-2xl"
        >
          {pasos.map((p, i) => (
            <span key={p} className="flex items-center gap-4 text-graphite-950">
              {p}
              {i < pasos.length - 1 && (
                <span className="text-graphite-950/40">→</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
