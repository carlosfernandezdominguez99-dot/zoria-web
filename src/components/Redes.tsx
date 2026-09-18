"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { IconHeart, IconUsers, IconChart, IconPost } from "./icons";

const conceptos = ["Contenido", "Estrategia", "Edición", "Publicación", "Crecimiento"];

const notificaciones = [
  {
    Icono: IconHeart,
    texto: "48 me gusta en tu última publicación",
    tiempo: "Ahora",
    chip: "bg-zoria-blue",
    iconClass: "text-graphite-950",
  },
  {
    Icono: IconUsers,
    texto: "+120 seguidores nuevos esta semana",
    tiempo: "2h",
    chip: "bg-graphite-950",
    iconClass: "text-zoria-blueLight",
  },
  {
    Icono: IconChart,
    texto: "Alcance +65% este mes",
    tiempo: "Ayer",
    chip: "bg-zoria-blue",
    iconClass: "text-graphite-950",
  },
  {
    Icono: IconPost,
    texto: "3 publicaciones listas para esta semana",
    tiempo: "Ayer",
    chip: "bg-[#F4F6F5] border-2 border-graphite-950",
    iconClass: "text-graphite-950",
  },
];

export default function Redes() {
  return (
    <section id="redes" className="border-t-2 border-graphite-950 bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
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
            className="relative mx-auto w-full max-w-[320px]"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
              viewport={viewport}
              transition={{ delay: 1.5, duration: 0.5, ease: "backOut" }}
              className="absolute -right-3 -top-5 z-10 rounded-full border-2 border-graphite-950 bg-zoria-blue px-4 py-1.5 font-hand text-xl font-bold text-graphite-950 shadow-[4px_4px_0_0_rgba(10,13,18,0.9)]"
            >
              ¡en racha!
            </motion.span>

            <div className="rounded-[28px] border-2 border-graphite-950 bg-white p-4 shadow-[10px_10px_0_0_rgba(10,13,18,0.9)]">
              <div className="flex items-center gap-2.5 border-b-2 border-graphite-950/[0.06] px-1 pb-3.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-graphite-950 bg-zoria-blue font-mono text-[10px] font-bold text-graphite-950">
                  Z
                </span>
                <span className="font-mono text-xs font-bold text-graphite-950">
                  ZORIA · Redes
                </span>
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="ml-auto h-2 w-2 rounded-full bg-zoria-blueDim"
                />
              </div>

              <div className="mt-3.5 flex flex-col gap-2.5">
                {notificaciones.map((n, i) => (
                  <motion.div
                    key={n.texto}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ delay: 0.35 + i * 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 rounded-2xl border-2 border-graphite-950 bg-white p-2.5 shadow-[3px_3px_0_0_rgba(10,13,18,0.9)]"
                  >
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${n.chip}`}>
                      <n.Icono className={`h-4 w-4 ${n.iconClass}`} />
                    </span>
                    <p className="flex-1 text-[12.5px] font-bold leading-snug text-graphite-950">
                      {n.texto}
                    </p>
                    <span className="shrink-0 font-mono text-[9px] uppercase tracking-wide text-graphite-950/35">
                      {n.tiempo}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
