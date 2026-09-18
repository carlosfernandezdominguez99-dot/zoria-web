"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import ContactForm from "./ContactForm";

export default function CtaFinal() {
  return (
    <section id="contacto" className="relative overflow-hidden border-t-2 border-graphite-950 bg-zoria-blue py-28">
      <span
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none whitespace-nowrap font-black tracking-tight text-[18vw] text-graphite-950/[0.05] sm:text-[11vw]"
        aria-hidden="true"
      >
        ZORIA
      </span>

      <div className="relative mx-auto max-w-2xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-graphite-950 bg-white px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-graphite-950">
            <span className="h-1.5 w-1.5 rounded-full bg-zoria-blue" />
            Atención rápida y personalizada
          </span>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-tight text-graphite-950 sm:text-5xl">
            ¿Qué podemos hacer por ti?
          </h2>
          <p className="mt-4 text-balance text-graphite-950/70">
            Te contestamos nosotros mismos — sin bots ni esperas — y adaptamos
            la respuesta a lo que de verdad necesitas.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
