"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

const RING_TEXT =
  "ZORIA · REPARA · CREA · CRECE · ZORIA · REPARA · CREA · CRECE · ";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-zoria-blue pb-16 pt-28 sm:pb-10"
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

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr,0.85fr] lg:gap-8">
        <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
          <motion.h1
            variants={fadeUp}
            className="text-balance text-[16vw] font-black leading-[0.88] tracking-[-0.02em] text-graphite-950 sm:text-8xl md:text-8xl lg:text-9xl"
          >
            Repara.
            <br />
            Crea.
            <br />
            Crece.
          </motion.h1>

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

        {/* Sello circular giratorio: un único elemento gráfico que escala de móvil a escritorio sin cambiar de forma */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.35 }}
          className="relative mx-auto flex h-[240px] w-[240px] items-center justify-center sm:h-[300px] sm:w-[300px] lg:mx-0 lg:h-[380px] lg:w-[380px]"
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-full bg-graphite-950/5 blur-3xl"
            aria-hidden="true"
          />

          {/* Anillo de texto girando sin parar */}
          <motion.svg
            viewBox="0 0 300 300"
            className="absolute inset-0 h-full w-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "150px 150px" }}
          >
            <defs>
              <path
                id="heroRing"
                d="M150,150 m -132,0 a132,132 0 1,1 264,0 a132,132 0 1,1 -264,0"
              />
            </defs>
            <text
              fill="#0A0D12"
              fontSize="13.5"
              fontWeight="700"
              letterSpacing="2.5"
              className="font-mono uppercase"
            >
              <textPath href="#heroRing" startOffset="0%">
                {RING_TEXT}
              </textPath>
            </text>
          </motion.svg>

          {/* Sello central, fijo, sin girar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "backOut" }}
            className="relative flex h-[128px] w-[128px] flex-col items-center justify-center rounded-full border-2 border-graphite-950 bg-graphite-950 shadow-[8px_8px_0_0_rgba(10,13,18,0.35)] sm:h-[160px] sm:w-[160px] lg:h-[200px] lg:w-[200px]"
          >
            <motion.svg
              viewBox="0 0 100 100"
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
              animate={{ scale: [1, 1.12, 1], rotate: [0, 8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M50 0 C52 35 65 48 100 50 C65 52 52 65 50 100 C48 65 35 52 0 50 C35 48 48 35 50 0 Z"
                fill="#16E0BD"
              />
            </motion.svg>
            <p className="mt-2 px-2 text-center font-mono text-[8px] font-bold uppercase leading-tight tracking-wide text-white/70 sm:text-[9px] lg:text-[10px]">
              Todo lo digital
              <br />
              en un sitio
            </p>
          </motion.div>

          {/* Etiqueta rotulador, clavada en el borde del sello */}
          <motion.span
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
            className="absolute -bottom-2 -right-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-graphite-950 bg-white font-hand text-xs font-bold text-graphite-950 shadow-[3px_3px_0_0_rgba(10,13,18,0.9)] sm:h-14 sm:w-14 sm:text-sm lg:h-16 lg:w-16 lg:text-base"
          >
            ¡en serio!
          </motion.span>
        </motion.div>
      </div>

      <motion.a
        href="#reparaciones"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="group relative mx-auto mb-2 mt-14 hidden h-11 w-11 items-center justify-center rounded-full border-2 border-graphite-950 sm:flex"
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
