"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { IconReel, IconPost, IconStory, IconHeart } from "./icons";

const conceptos = ["Contenido", "Estrategia", "Edición", "Publicación", "Crecimiento"];

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
            className="relative mx-auto h-[300px] w-full max-w-[280px]"
          >
            {/* Story, detrás a la izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10, rotate: 4 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: -9 }}
              viewport={viewport}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotate: -4, y: -4 }}
              className="absolute left-0 top-6 w-[128px] rounded-2xl border-2 border-graphite-950 bg-zoria-blue p-4 shadow-[6px_6px_0_0_rgba(10,13,18,0.9)]"
            >
              <div className="flex items-start justify-between">
                <IconStory className="h-6 w-6 text-graphite-950" />
                <IconHeart className="h-3.5 w-3.5 text-graphite-950/40" />
              </div>
              <p className="mt-6 text-sm font-black text-graphite-950">Story</p>
            </motion.div>

            {/* Reel, detrás a la derecha */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10, rotate: -4 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 10 }}
              viewport={viewport}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotate: 4, y: -4 }}
              className="absolute right-0 top-2 w-[128px] rounded-2xl border-2 border-graphite-950 bg-graphite-950 p-4 shadow-[6px_6px_0_0_rgba(10,13,18,0.35)]"
            >
              <div className="flex items-start justify-between">
                <IconReel className="h-6 w-6 text-zoria-blueLight" />
                <IconHeart className="h-3.5 w-3.5 text-white/40" />
              </div>
              <p className="mt-6 text-sm font-black text-white">Reel</p>
            </motion.div>

            {/* Post, delante y centrado */}
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3, scale: 1 }}
              viewport={viewport}
              transition={{ delay: 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotate: 0 }}
              className="absolute bottom-2 left-1/2 w-[172px] -translate-x-1/2 rounded-2xl border-2 border-graphite-950 bg-white p-5 shadow-[9px_9px_0_0_rgba(10,13,18,0.9)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-graphite-950 bg-[#F4F6F5]">
                  <IconPost className="h-[18px] w-[18px] text-graphite-950" />
                </span>
                <IconHeart className="h-4 w-4 text-graphite-950/50" />
              </div>
              <p className="mt-4 text-base font-black text-graphite-950">Post</p>
              <p className="mt-1 text-xs text-graphite-950/50">
                Diseñado, editado y publicado
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
