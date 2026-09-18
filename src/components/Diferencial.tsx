"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const pasos = ["Repara", "Conecta", "Crece"];

export default function Diferencial() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-graphite-950 py-32">
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-mono text-[22vw] font-medium text-white/[0.02] sm:text-[14vw]"
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
          className="font-mono text-xs text-graphite-400"
        >
          Un solo sitio. Todo lo digital.
        </motion.span>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-5 text-balance text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl"
        >
          Zoria no es otra tienda de informática. Un cliente puede reparar su
          móvil, una empresa puede contratar una web y después seguir con
          mantenimiento y redes sociales — sin cambiar de proveedor.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-10 flex items-center justify-center gap-4 text-sm font-semibold sm:text-base"
        >
          {pasos.map((p, i) => (
            <span key={p} className="flex items-center gap-4">
              <span className={i === 1 ? "text-zoria-blueLight" : "text-graphite-400"}>
                {p}
              </span>
              {i < pasos.length - 1 && <span className="text-graphite-600">→</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
