"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const mensajes = [
  "Atención cercana.",
  "Soluciones claras.",
  "Sin tecnicismos innecesarios.",
  "Un único contacto para todo.",
];

export default function Confianza() {
  return (
    <section className="border-t border-white/[0.06] bg-graphite-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-balance text-xl font-medium tracking-tight text-graphite-100 sm:text-2xl"
        >
          {mensajes.map((m, i) => (
            <span key={m} className="flex items-baseline gap-3">
              <span>{m}</span>
              {i < mensajes.length - 1 && (
                <span className="text-zoria-blueLight/50">·</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
