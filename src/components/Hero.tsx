"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-graphite-950 pt-24"
    >
      {/* fondo: rejilla + luz azul */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fade" />
        <div
          className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-zoria-blue/20 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-6"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium tracking-wide text-graphite-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-zoria-blue" />
          Reparación · Web · Redes sociales
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-balance max-w-4xl text-[13vw] font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Tecnología que
          <br />
          funciona.{" "}
          <span className="bg-gradient-to-r from-zoria-blueLight to-zoria-blue bg-clip-text text-transparent">
            Digital
          </span>
          <br />
          que crece.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-xl text-balance text-lg text-graphite-400"
        >
          Reparamos tus dispositivos, creamos tu presencia digital y hacemos
          que tu negocio avance. Todo en un mismo sitio.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-zoria-blue px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform duration-400 hover:-translate-y-0.5"
          >
            Cuéntanos qué necesitas
            <span className="transition-transform duration-400 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#reparaciones"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-400 hover:border-white/30 hover:bg-white/[0.04]"
          >
            Ver reparaciones
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-zoria-blueLight"
          />
        </div>
      </motion.div>
    </section>
  );
}
