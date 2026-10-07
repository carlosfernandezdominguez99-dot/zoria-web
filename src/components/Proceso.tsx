"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const pasos = [
  "Cuéntanos qué necesitas",
  "Buscamos la solución",
  "Lo hacemos",
  "Tú te olvidas del problema",
];

const LINE_DURATION = 1.3;
const LINE_DELAY = 0.25;

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

        <ol className="relative mt-10 grid gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-10">
          {/* En móvil y tablet los pasos van en columna, unidos por una línea vertical. */}
          <div
            className="pointer-events-none absolute bottom-5 left-[19px] top-5 w-[3px] rounded-full bg-graphite-950/10 lg:hidden"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-0 right-0 top-[19px] hidden h-[3px] rounded-full bg-graphite-950/10 lg:block"
            aria-hidden="true"
          />
          <motion.div
            className="pointer-events-none absolute left-0 top-[19px] hidden h-[3px] w-full origin-left rounded-full bg-zoria-blue lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: LINE_DURATION, delay: LINE_DELAY, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />

          {pasos.map((p, i) => {
            const activeDelay = LINE_DELAY + (i / (pasos.length - 1)) * LINE_DURATION;
            return (
              <motion.li
                key={p}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-center gap-4 lg:block"
              >
                <motion.span
                  initial={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(7,8,10,0.2)",
                    color: "rgba(7,8,10,0.4)",
                  }}
                  whileInView={{
                    backgroundColor: "#16E0BD",
                    borderColor: "#07080A",
                    color: "#07080A",
                  }}
                  viewport={viewport}
                  transition={{
                    backgroundColor: { delay: activeDelay, duration: 0.35 },
                    borderColor: { delay: activeDelay, duration: 0.35 },
                    color: { delay: activeDelay, duration: 0.35 },
                  }}
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-mono text-sm font-bold"
                >
                  {i === 0 && (
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-zoria-blue"
                      initial={{ opacity: 0 }}
                      animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: activeDelay + 0.35 }}
                    />
                  )}
                  {i + 1}
                </motion.span>
                <p className="text-lg font-black leading-snug text-graphite-950 sm:text-xl lg:mt-5">
                  {p}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
