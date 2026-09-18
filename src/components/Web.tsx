"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/motion";

const items = [
  "Web corporativa",
  "Tienda online",
  "Reservas",
  "Mantenimiento",
  "Automatizaciones",
];

export default function Web() {
  return (
    <section id="web" className="relative overflow-hidden bg-graphite-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="order-2 md:order-1"
          >
            <div className="relative rounded-2xl border border-white/[0.08] bg-graphite-900 p-3 shadow-card">
              <div className="flex items-center gap-1.5 px-2 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="ml-3 h-5 flex-1 rounded-full bg-white/[0.04]" />
              </div>
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-graphite-800 to-graphite-950 p-6">
                <div className="h-2.5 w-24 rounded-full bg-zoria-blue/60" />
                <div className="mt-4 h-4 w-3/4 rounded-full bg-white/10" />
                <div className="mt-2.5 h-4 w-1/2 rounded-full bg-white/10" />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ delay: 0.15 * i, duration: 0.5 }}
                      className="h-16 rounded-lg border border-white/[0.06] bg-white/[0.03]"
                    />
                  ))}
                </div>
                <div className="mt-6 h-9 w-32 rounded-full bg-zoria-blue" />
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
            <p className="text-sm font-medium text-zoria-blueLight">
              Web y servicios digitales
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tu negocio también
              <br /> merece una buena web.
            </h2>
            <p className="mt-4 max-w-md text-graphite-400">
              Diseñamos, construimos y mantenemos tu presencia digital: desde
              una web corporativa hasta una tienda online completa.
            </p>

            <motion.ul
              variants={stagger(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3"
            >
              {items.map((i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-2 text-sm text-graphite-100"
                >
                  <span className="h-1 w-1 rounded-full bg-zoria-blueLight" />
                  {i}
                </motion.li>
              ))}
            </motion.ul>

            <a
              href="#contacto"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-zoria-blue px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform duration-400 hover:-translate-y-0.5"
            >
              Quiero una web →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
