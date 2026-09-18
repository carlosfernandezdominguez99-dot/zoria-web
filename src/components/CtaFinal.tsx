"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import ContactForm from "./ContactForm";

export default function CtaFinal() {
  return (
    <section id="contacto" className="relative overflow-hidden border-t border-white/[0.06] bg-graphite-950 py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[1000px] -translate-x-1/2 rounded-full bg-zoria-blue/25 blur-[140px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center"
        >
          <h2 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
            ¿Qué podemos hacer por ti?
          </h2>
          <p className="mt-4 text-balance text-graphite-400">
            Desde reparar un móvil hasta crear la presencia digital completa
            de tu negocio.
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
