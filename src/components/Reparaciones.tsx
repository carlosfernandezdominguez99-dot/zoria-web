"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/motion";

const dispositivos = [
  { icono: "📱", label: "Móviles" },
  { icono: "💻", label: "Portátiles" },
  { icono: "🖥️", label: "Ordenadores" },
  { icono: "📟", label: "Tablets" },
];

const pasos = [
  { n: "01", t: "Diagnóstico" },
  { n: "02", t: "Reparación" },
  { n: "03", t: "Optimización" },
  { n: "04", t: "Entrega" },
];

export default function Reparaciones() {
  return (
    <section id="reparaciones" className="relative overflow-hidden bg-graphite-900 py-28">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-zoria-blue/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="text-sm font-medium text-zoria-blueLight">
              Reparaciones y venta
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Déjalo en nuestras manos.
            </h2>
            <p className="mt-4 max-w-md text-graphite-400">
              Reparamos, configuramos y ponemos a punto tus dispositivos.
              También vendemos equipos nuevos y reacondicionados, con
              accesorios y periféricos.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {dispositivos.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                >
                  <span className="text-xl">{d.icono}</span>
                  <span className="text-sm font-medium text-graphite-100">
                    {d.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-graphite-950 transition-all duration-400 hover:-translate-y-0.5 hover:bg-zoria-blue hover:text-white"
            >
              Quiero reparar mi dispositivo →
            </a>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative mx-auto flex h-[420px] w-full max-w-sm items-center justify-center"
          >
            {/* móvil central */}
            <div className="relative z-10 h-72 w-40 rounded-[2rem] border border-white/10 bg-graphite-800 p-2 shadow-card">
              <div className="h-full w-full rounded-[1.5rem] bg-gradient-to-b from-zoria-blue/25 via-graphite-900 to-graphite-950" />
              <div className="absolute left-1/2 top-3 h-1 w-8 -translate-x-1/2 rounded-full bg-white/20" />
            </div>

            {/* pasos orbitando */}
            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="absolute inset-0"
            >
              {pasos.map((p, i) => {
                const positions = [
                  "left-0 top-6",
                  "right-0 top-16",
                  "left-2 bottom-10",
                  "right-2 bottom-0",
                ];
                return (
                  <motion.div
                    key={p.n}
                    variants={fadeUp}
                    className={`absolute ${positions[i]} rounded-xl border border-white/10 bg-graphite-900/90 px-3.5 py-2.5 backdrop-blur`}
                  >
                    <span className="block text-[10px] font-medium text-zoria-blueLight">
                      {p.n}
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {p.t}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
