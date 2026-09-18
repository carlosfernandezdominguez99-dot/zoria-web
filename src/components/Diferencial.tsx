"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const pasos = ["Repara", "Conecta", "Crece"];

export default function Diferencial() {
  return (
    <section className="relative bg-graphite-950 py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-sm font-medium text-zoria-blueLight"
        >
          Un solo sitio. Todo lo digital.
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Zoria no es otra tienda de informática.
        </motion.h2>

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 flex items-center justify-center gap-3 sm:gap-6"
        >
          {pasos.map((p, i) => (
            <div key={p} className="flex items-center gap-3 sm:gap-6">
              <motion.span
                variants={fadeUp}
                className="text-2xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                {p}
              </motion.span>
              {i < pasos.length - 1 && (
                <span className="text-lg text-zoria-blueLight sm:text-2xl">
                  →
                </span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-8 max-w-xl text-balance text-graphite-400"
        >
          Un cliente puede reparar su móvil, una empresa puede contratar una
          web y después seguir con mantenimiento y redes sociales.
          Acompañamos cada necesidad tecnológica, sin cambiar de proveedor.
        </motion.p>
      </div>
    </section>
  );
}
