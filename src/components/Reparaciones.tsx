"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { IconPhone, IconLaptop, IconDesktop, IconTablet } from "./icons";

const dispositivos = [
  { Icono: IconPhone, label: "Móviles", nota: "Pantallas, baterías, venta" },
  { Icono: IconLaptop, label: "Portátiles", nota: "Reparación y puesta a punto" },
  { Icono: IconDesktop, label: "Ordenadores", nota: "Montaje, venta y soporte" },
  { Icono: IconTablet, label: "Tablets", nota: "Diagnóstico y reparación" },
];

const pasos = ["Diagnóstico", "Reparación", "Optimización", "Entrega"];

export default function Reparaciones() {
  return (
    <section id="reparaciones" className="border-t-2 border-graphite-950 bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[0.85fr,1.15fr] md:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <span className="font-mono text-xs text-graphite-950/40">01</span>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-graphite-950 sm:text-4xl">
              Déjalo en nuestras manos.
            </h2>
            <p className="mt-4 max-w-sm text-graphite-950/60">
              Reparamos, configuramos y ponemos a punto tus dispositivos.
              También vendemos equipos nuevos y reacondicionados, con
              accesorios y periféricos.
            </p>

            <a
              href="#contacto"
              className="mt-9 inline-flex items-center gap-2 rounded-full border-2 border-graphite-950 bg-zoria-blue px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-graphite-950 shadow-[5px_5px_0_0_rgba(10,13,18,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_rgba(10,13,18,0.9)]"
            >
              Quiero reparar mi dispositivo →
            </a>

            <div className="mt-10 hidden flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wide text-graphite-950/40 sm:flex">
              {pasos.map((p, i) => (
                <span key={p} className="flex items-center gap-3">
                  <span className={i === 0 ? "text-zoria-blueDim" : ""}>{p}</span>
                  {i < pasos.length - 1 && <span className="text-graphite-950/20">→</span>}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-2 gap-4"
          >
            {dispositivos.map((d, i) => (
              <motion.div
                key={d.label}
                variants={fadeUp}
                transition={{ delay: i * 0.07 }}
                whileHover={{ rotate: i % 2 === 0 ? -1.5 : 1.5, y: -4 }}
                className="flex flex-col justify-between rounded-2xl border-2 border-graphite-950 bg-[#F4F6F5] p-5 shadow-[5px_5px_0_0_rgba(10,13,18,0.9)] transition-shadow duration-200 hover:shadow-[7px_7px_0_0_rgba(10,13,18,0.9)]"
              >
                <div className="flex items-start justify-between">
                  <d.Icono className="h-6 w-6 text-graphite-950" />
                  <span className="font-mono text-[10px] text-graphite-950/40">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-base font-black text-graphite-950">{d.label}</p>
                  <p className="mt-1 text-xs text-graphite-950/50">{d.nota}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
