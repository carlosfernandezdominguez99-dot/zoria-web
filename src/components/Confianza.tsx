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
    <section className="border-t-2 border-graphite-950 bg-[#F4F6F5] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="font-mono text-xs uppercase tracking-wide text-graphite-950/50"
        >
          Cómo trabajamos contigo
        </motion.p>

        <div className="mt-6 flex flex-wrap gap-3">
          {mensajes.map((m, i) => (
            <motion.span
              key={m}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.08 }}
              className="rounded-full border-2 border-graphite-950 bg-white px-5 py-2.5 text-base font-bold tracking-tight text-graphite-950 sm:text-lg"
            >
              {m}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
