"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { IconPhone, IconChart } from "./icons";

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

        {/* Composición visual: pila de tarjetas ancladas a la derecha, con línea de conexión */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="relative hidden h-[360px] w-full lg:block"
        >
          <span
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-graphite-950/5 blur-3xl"
            aria-hidden="true"
          />

          {/* Chip flotante superior, conectado por línea */}
          <motion.div
            initial={{ opacity: 0, y: -12, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0, y: -3 }}
            className="absolute left-2 top-2 flex w-[172px] items-center gap-3 rounded-2xl border-2 border-graphite-950 bg-graphite-950 p-3.5 shadow-[6px_6px_0_0_rgba(10,13,18,0.3)]"
          >
            <IconChart className="h-5 w-5 shrink-0 text-zoria-blue" />
            <p className="text-xs font-black leading-tight text-white">
              Más visibilidad
              <br />
              <span className="font-mono text-[9px] font-normal text-white/40">
                redes · contenido
              </span>
            </p>
          </motion.div>

          {/* Línea discontinua conectora */}
          <svg
            className="pointer-events-none absolute left-[86px] top-[70px] h-[110px] w-[90px]"
            viewBox="0 0 90 110"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M4 4 C 4 60, 60 40, 82 100"
              stroke="#0A0D12"
              strokeWidth="2"
              strokeDasharray="1 8"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.35 }}
              transition={{ delay: 0.9, duration: 0.9, ease: "easeOut" }}
            />
          </svg>

          {/* Tarjeta principal: mockup tipo web, con badge rotulador clavado en la esquina */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -5 }}
            animate={{ opacity: 1, y: [0, -8, 0], rotate: -3 }}
            transition={{
              opacity: { delay: 0.45, duration: 0.6 },
              rotate: { delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              y: { delay: 1.1, duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ rotate: 0 }}
            className="absolute right-2 top-6 w-[270px] rounded-2xl border-2 border-graphite-950 bg-graphite-950 p-4 shadow-[9px_9px_0_0_rgba(10,13,18,0.35)]"
          >
            <span className="absolute -right-4 -top-5 flex h-14 w-14 rotate-[10deg] items-center justify-center rounded-full border-2 border-graphite-950 bg-zoria-blue font-hand text-base font-bold text-graphite-950 shadow-[3px_3px_0_0_rgba(10,13,18,0.9)]">
              ¡en serio!
            </span>

            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              <span className="ml-1.5 font-mono text-[9px] text-white/40">
                tunegocio.es
              </span>
            </div>
            <div className="mt-4 h-2.5 w-4/5 rounded-full bg-white/[0.16]" />
            <div className="mt-2 h-2.5 w-3/5 rounded-full bg-white/[0.16]" />
            <div className="mt-4 inline-flex items-center rounded-full bg-zoria-blue px-3 py-1.5 font-mono text-[9px] font-bold text-graphite-950">
              Reservar ahora
            </div>
          </motion.div>

          {/* Tarjeta apilada: reparación, semi-oculta bajo la principal */}
          <motion.div
            initial={{ opacity: 0, y: 16, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 8 }}
            transition={{ delay: 0.75, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 4, y: -6 }}
            className="absolute bottom-8 right-28 w-[184px] rounded-2xl border-2 border-graphite-950 bg-white p-4 shadow-[7px_7px_0_0_rgba(10,13,18,0.85)]"
          >
            <div className="flex items-center justify-between">
              <IconPhone className="h-6 w-6 text-graphite-950" />
              <span className="font-mono text-[10px] text-graphite-950/40">01</span>
            </div>
            <p className="mt-3 text-sm font-black leading-tight text-graphite-950">
              Reparación
              <br />
              en el día
            </p>
          </motion.div>
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
