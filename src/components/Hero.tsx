"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import ZoriaLogo from "./ZoriaLogo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-zoria-blue pt-24"
    >
      {/* textura de puntos muy sutil, como respiro sobre el color plano */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#0A0D12 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-6"
      >
        <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
          <ZoriaLogo className="h-9 w-9" />
          <span className="rounded-full border-2 border-graphite-950 bg-graphite-950 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-zoria-blue">
            Reparación · Web · Redes
          </span>
        </motion.div>

        <div className="relative">
          <motion.h1
            variants={fadeUp}
            className="text-balance text-[16vw] font-black leading-[0.88] tracking-[-0.02em] text-graphite-950 sm:text-8xl md:text-9xl"
          >
            Repara.
            <br />
            Crea.
            <br />
            Crece.
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -8, scale: 1 }}
            transition={{ delay: 0.75, duration: 0.5, ease: "backOut" }}
            className="absolute -right-2 top-2 hidden select-none font-hand text-3xl font-bold text-graphite-950 sm:block sm:text-4xl"
          >
            ¡en serio!
          </motion.span>
        </div>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-lg text-balance text-xl font-medium text-graphite-950/80"
        >
          Tu tecnología. Tu presencia digital. Todo en un mismo sitio — sin
          rodeos.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border-2 border-graphite-950 bg-graphite-950 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[5px_5px_0_0_rgba(10,13,18,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_rgba(10,13,18,0.25)]"
          >
            Cuéntanos qué necesitas
          </a>
          <a
            href="#proceso"
            className="inline-flex items-center gap-2 rounded-full border-2 border-graphite-950 px-7 py-4 text-sm font-bold uppercase tracking-wide text-graphite-950 transition-colors duration-200 hover:bg-graphite-950 hover:text-white"
          >
            Ver cómo trabajamos
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#reparaciones"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="group relative mx-auto mb-8 mt-14 hidden h-11 w-11 items-center justify-center rounded-full border-2 border-graphite-950 sm:flex"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-graphite-950"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
