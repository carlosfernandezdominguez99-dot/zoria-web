"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewport } from "@/lib/motion";
import { IconDesktop, IconChart, IconChat, IconImage } from "./icons";

const items = [
  "Web corporativa",
  "Tienda online",
  "Aplicaciones a medida",
  "Reservas",
  "Mantenimiento",
  "Automatizaciones",
];

const secciones = [
  { Icono: IconDesktop, label: "Catálogo" },
  { Icono: IconChart, label: "Reservas" },
  { Icono: IconChat, label: "Contacto" },
];

export default function Web() {
  return (
    <section id="web" className="border-t-2 border-graphite-950 bg-zoria-blue py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="order-2 md:order-1"
          >
            <div className="overflow-hidden rounded-[28px] border-2 border-graphite-950 bg-white shadow-[10px_10px_0_0_rgba(10,13,18,0.9)]">
              <div className="flex items-center gap-2 border-b-2 border-graphite-950 bg-[#F4F6F5] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full border border-graphite-950/30" />
                <span className="h-2.5 w-2.5 rounded-full border border-graphite-950/30" />
                <span className="h-2.5 w-2.5 rounded-full border border-graphite-950/30" />
                <div className="ml-2 flex h-5 flex-1 items-center rounded-full border border-graphite-950/15 bg-white px-3">
                  <span className="font-mono text-[10px] text-graphite-950/40">
                    tunegocio.es
                  </span>
                </div>
              </div>
              <div className="p-6">
                {/* barra de navegación */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-zoria-blue" />
                    <span className="text-xs font-black tracking-tight text-graphite-950">
                      Tu Negocio
                    </span>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="h-1.5 w-6 rounded-full bg-graphite-950/10" />
                    <span className="h-1.5 w-6 rounded-full bg-graphite-950/10" />
                    <span className="h-1.5 w-6 rounded-full bg-zoria-blue" />
                  </div>
                </div>

                {/* hero: texto + imagen */}
                <div className="mt-6 grid grid-cols-[1.1fr,0.9fr] items-center gap-4">
                  <div>
                    <div className="h-2.5 w-full rounded-full bg-graphite-950/10" />
                    <div className="mt-2 h-2.5 w-4/5 rounded-full bg-graphite-950/10" />
                    <div className="mt-3 h-2 w-3/5 rounded-full bg-graphite-950/[0.06]" />

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "auto" }}
                      viewport={viewport}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mt-5 inline-flex items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full border-2 border-graphite-950 bg-zoria-blue px-4 py-2 text-[11px] font-bold text-graphite-950"
                    >
                      Reservar ahora
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border-2 border-graphite-950 bg-[#F4F6F5]"
                  >
                    <IconImage className="h-8 w-8 text-graphite-950/25" />
                  </motion.div>
                </div>

                {/* secciones del sitio */}
                <div className="mt-6 grid grid-cols-3 gap-2.5">
                  {secciones.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className="rounded-xl border-2 border-graphite-950 bg-white p-2.5"
                    >
                      <s.Icono className="h-4 w-4 text-graphite-950" />
                      <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-graphite-950/60">
                        {s.label}
                      </p>
                    </motion.div>
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
            <span className="font-mono text-xs text-graphite-950/50">02</span>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-graphite-950 sm:text-4xl">
              Tu negocio también
              <br /> merece una buena web.
            </h2>
            <p className="mt-4 max-w-md text-graphite-950/70">
              Diseñamos, construimos y mantenemos tu presencia digital: desde
              una web corporativa hasta una tienda online completa.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {items.map((i) => (
                <span
                  key={i}
                  className="rounded-full border-2 border-graphite-950 bg-white px-3.5 py-1.5 text-xs font-bold text-graphite-950"
                >
                  {i}
                </span>
              ))}
            </div>

            <a
              href="#contacto"
              className="mt-10 inline-flex items-center gap-2 rounded-full border-2 border-graphite-950 bg-graphite-950 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[5px_5px_0_0_rgba(10,13,18,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_rgba(10,13,18,0.25)]"
            >
              Quiero una web →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
