"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { IconReel, IconPost, IconStory, IconHeart } from "./icons";

const conceptos = ["Contenido", "Estrategia", "Edición", "Publicación", "Crecimiento"];

const casillas = [
  { bg: "bg-zoria-blue" },
  { bg: "bg-graphite-950", Icono: IconReel, iconClass: "text-zoria-blueLight" },
  { bg: "bg-[#F4F6F5] border-2 border-graphite-950" },
  { bg: "bg-graphite-950" },
  { bg: "bg-zoria-blue", Icono: IconHeart, iconClass: "text-graphite-950" },
  { bg: "bg-[#F4F6F5] border-2 border-graphite-950", Icono: IconPost, iconClass: "text-graphite-950" },
  { bg: "bg-[#F4F6F5] border-2 border-graphite-950", Icono: IconStory, iconClass: "text-graphite-950" },
  { bg: "bg-graphite-950" },
  { bg: "bg-zoria-blue" },
];

export default function Redes() {
  return (
    <section id="redes" className="border-t-2 border-graphite-950 bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <span className="font-mono text-xs text-graphite-950/40">03</span>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-graphite-950 sm:text-4xl">
              Que te vean.
              <br /> Que te recuerden.
            </h2>
            <p className="mt-4 max-w-md text-graphite-950/60">
              Creamos contenido y gestionamos Instagram, TikTok y Facebook
              para que tu negocio tenga presencia constante.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {conceptos.map((c) => (
                <span
                  key={c}
                  className="rounded-full border-2 border-graphite-950 bg-[#F4F6F5] px-3.5 py-1.5 text-xs font-bold text-graphite-950"
                >
                  {c}
                </span>
              ))}
            </div>

            <a
              href="#contacto"
              className="mt-10 inline-flex items-center gap-2 rounded-full border-2 border-graphite-950 bg-graphite-950 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[5px_5px_0_0_rgba(10,13,18,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_rgba(10,13,18,0.25)]"
            >
              Potenciar mis redes →
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mx-auto w-full max-w-[300px] rounded-[28px] border-2 border-graphite-950 bg-white p-4 shadow-[10px_10px_0_0_rgba(10,13,18,0.9)]"
          >
            <div className="flex items-center gap-2.5 px-1 pb-3.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-graphite-950 bg-zoria-blue font-mono text-[10px] font-bold text-graphite-950">
                Z
              </span>
              <span className="font-mono text-xs font-bold text-graphite-950">
                @tunegocio
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {casillas.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewport}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex aspect-square items-center justify-center rounded-lg ${c.bg}`}
                >
                  {c.Icono && <c.Icono className={`h-5 w-5 ${c.iconClass}`} />}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
