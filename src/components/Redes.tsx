"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { IconReel, IconPost, IconStory } from "./icons";

const conceptos = ["Contenido", "Estrategia", "Edición", "Publicación", "Crecimiento"];

const posts = [
  { tag: "Reel", h: "h-24", Icono: IconReel },
  { tag: "Post", h: "h-32", Icono: IconPost },
  { tag: "Story", h: "h-20", Icono: IconStory },
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
            className="mx-auto w-full max-w-[240px]"
          >
            <div className="rounded-[2rem] border-2 border-graphite-950 bg-graphite-950 p-2.5 shadow-[10px_10px_0_0_rgba(10,13,18,0.2)]">
              <div className="flex items-center justify-between px-2 pb-2 pt-1">
                <span className="h-1.5 w-10 rounded-full bg-white/10" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
              </div>
              <div className="space-y-2.5 rounded-[1.5rem] bg-graphite-900 p-3">
                {posts.map((p, i) => (
                  <motion.div
                    key={p.tag}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ delay: 0.12 * i, duration: 0.5 }}
                    className={`relative ${p.h} overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-graphite-800 to-graphite-950`}
                  >
                    <p.Icono className="absolute left-2.5 top-2.5 h-4 w-4 text-graphite-600" />
                    <span className="absolute bottom-2 left-2.5 font-mono text-[10px] uppercase tracking-wide text-graphite-400">
                      {p.tag}
                    </span>
                    <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-zoria-blueLight/70" />
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
