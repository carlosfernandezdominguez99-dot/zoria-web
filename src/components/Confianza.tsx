"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const mensajes = [
  "Atención cercana.",
  "Soluciones claras.",
  "Sin tecnicismos innecesarios.",
  "Un único contacto para todo.",
];

export default function Confianza() {
  return (
    <section className="bg-graphite-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {mensajes.map((m) => (
            <motion.div
              key={m}
              variants={fadeUp}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <p className="text-[15px] font-medium text-graphite-100">{m}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
