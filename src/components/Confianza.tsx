"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const mensajes = [
  "Atención cercana",
  "Soluciones claras",
  "Sin tecnicismos innecesarios",
  "Un único contacto para todo",
];

export default function Confianza() {
  return (
    <section className="border-t-2 border-graphite-950 bg-[#F4F6F5] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="inline-flex items-center rounded-full border-2 border-graphite-950 bg-white px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-graphite-950"
        >
          Cómo trabajamos contigo
        </motion.span>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {mensajes.map((m, i) => (
            <motion.div
              key={m}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.09 }}
              whileHover={{ rotate: i % 2 === 0 ? -1.2 : 1.2, y: -4 }}
              className="flex items-center gap-4 rounded-2xl border-2 border-graphite-950 bg-white p-5 shadow-[5px_5px_0_0_rgba(10,13,18,0.9)] transition-shadow duration-200 hover:shadow-[7px_7px_0_0_rgba(10,13,18,0.9)]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-graphite-950 bg-zoria-blue font-mono text-xs font-bold text-graphite-950">
                0{i + 1}
              </span>
              <p className="text-lg font-black tracking-tight text-graphite-950 sm:text-xl">
                {m}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
