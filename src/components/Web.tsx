"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewport } from "@/lib/motion";

const items = [
  "Web corporativa",
  "Tienda online",
  "Reservas",
  "Mantenimiento",
  "Automatizaciones",
];

export default function Web() {
  return (
    <section id="web" className="border-t border-white/[0.06] bg-graphite-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="order-2 md:order-1"
          >
            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-graphite-900">
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <div className="ml-2 flex h-5 flex-1 items-center rounded bg-white/[0.04] px-2">
                  <span className="font-mono text-[10px] text-graphite-400">
                    tunegocio.es
                  </span>
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-tight text-white">
                    Tu Negocio
                  </span>
                  <div className="flex gap-3">
                    <span className="h-1.5 w-6 rounded-full bg-white/10" />
                    <span className="h-1.5 w-6 rounded-full bg-white/10" />
                  </div>
                </div>

                <div className="mt-8 h-3 w-4/5 rounded-full bg-white/[0.14]" />
                <div className="mt-3 h-3 w-3/5 rounded-full bg-white/[0.14]" />
                <div className="mt-4 h-2.5 w-2/5 rounded-full bg-white/[0.06]" />

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "auto" }}
                  viewport={viewport}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-7 inline-flex items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full bg-zoria-blue px-4 py-2 text-[11px] font-semibold text-graphite-950"
                >
                  Reservar ahora
                </motion.div>

                <div className="mt-8 grid grid-cols-3 gap-2.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className="aspect-[4/3] rounded-md border border-white/[0.06] bg-white/[0.03]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="order-1 md:order-2"
          >
            <span className="font-mono text-xs text-graphite-400">02</span>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
              Tu negocio también
              <br /> merece una buena web.
            </h2>
            <p className="mt-4 max-w-md text-graphite-400">
              Diseñamos, construimos y mantenemos tu presencia digital: desde
              una web corporativa hasta una tienda online completa.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {items.map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-graphite-100">
                  <span className="h-1 w-1 rounded-full bg-zoria-blueLight" />
                  {i}
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="mt-10 inline-flex items-center gap-2 rounded-full border-2 border-zoria-blue bg-zoria-blue px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-graphite-950 shadow-[5px_5px_0_0_rgba(22,224,189,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_rgba(22,224,189,0.35)]"
            >
              Quiero una web →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
