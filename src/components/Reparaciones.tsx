"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { IconPhone, IconLaptop, IconDesktop, IconTablet } from "./icons";

const dispositivos = [
  { Icono: IconPhone, label: "Móviles" },
  { Icono: IconLaptop, label: "Portátiles" },
  { Icono: IconDesktop, label: "Ordenadores" },
  { Icono: IconTablet, label: "Tablets" },
];

const pasos = ["Diagnóstico", "Reparación", "Optimización", "Entrega"];

export default function Reparaciones() {
  return (
    <section id="reparaciones" className="border-t border-white/[0.06] bg-graphite-800 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <span className="font-mono text-xs text-graphite-400">01</span>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
              Déjalo en nuestras manos.
            </h2>
            <p className="mt-4 max-w-sm text-graphite-400">
              Reparamos, configuramos y ponemos a punto tus dispositivos.
              También vendemos equipos nuevos y reacondicionados, con
              accesorios y periféricos.
            </p>

            <a
              href="#contacto"
              className="mt-9 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white underline decoration-zoria-blue decoration-2 underline-offset-4 transition-colors duration-200 hover:text-zoria-blueLight"
            >
              Quiero reparar mi dispositivo →
            </a>
          </motion.div>

          <div>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="divide-y divide-white/[0.06] border-y border-white/[0.06]"
            >
              {dispositivos.map((d, i) => (
                <motion.li
                  key={d.label}
                  variants={fadeUp}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between py-5"
                >
                  <div className="flex items-center gap-4">
                    <d.Icono className="h-5 w-5 text-graphite-400" />
                    <span className="text-base font-medium text-graphite-100">
                      {d.label}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-graphite-400">
                    0{i + 1}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wide text-graphite-400"
            >
              {pasos.map((p, i) => (
                <span key={p} className="flex items-center gap-3">
                  <span className={i === 0 ? "text-zoria-blueLight" : ""}>
                    {p}
                  </span>
                  {i < pasos.length - 1 && <span className="text-graphite-600">→</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
