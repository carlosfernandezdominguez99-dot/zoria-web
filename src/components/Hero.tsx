"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { IconPhone, IconDesktop, IconChart } from "./icons";

const pilares = [
  {
    numero: "01",
    titulo: "Repara",
    texto: "Móviles y ordenadores",
    Icono: IconPhone,
    dark: true,
  },
  {
    numero: "02",
    titulo: "Crea",
    texto: "Webs y aplicaciones",
    Icono: IconDesktop,
    dark: false,
  },
  {
    numero: "03",
    titulo: "Crece",
    texto: "Redes y contenido",
    Icono: IconChart,
    dark: true,
  },
];

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

          {/* Tira de pilares para tablet / móvil: mismo concepto que el poster de escritorio, en formato compacto */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-3 gap-3 lg:hidden"
          >
            {pilares.map((p) => (
              <div
                key={p.titulo}
                className={`rounded-2xl border-2 border-graphite-950 p-3.5 shadow-[4px_4px_0_0_rgba(10,13,18,0.9)] sm:p-4 ${
                  p.dark ? "bg-graphite-950" : "bg-white"
                }`}
              >
                <p.Icono
                  className={`h-5 w-5 sm:h-6 sm:w-6 ${p.dark ? "text-zoria-blueLight" : "text-graphite-950"}`}
                />
                <p
                  className={`mt-3 text-sm font-black leading-tight sm:text-base ${p.dark ? "text-white" : "text-graphite-950"}`}
                >
                  {p.titulo}
                </p>
                <p
                  className={`mt-0.5 hidden text-[11px] leading-snug sm:block ${p.dark ? "text-white/50" : "text-graphite-950/50"}`}
                >
                  {p.texto}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Composición visual de escritorio: los tres pilares como bloques gráficos en pinwheel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="relative hidden h-[400px] w-full lg:block"
        >
          <span
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-graphite-950/5 blur-3xl"
            aria-hidden="true"
          />

          {/* Bloque central: Crea */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="absolute left-1/2 top-[104px] w-[230px] -translate-x-1/2 rounded-[28px] border-2 border-graphite-950 bg-white p-6 shadow-[10px_10px_0_0_rgba(10,13,18,0.9)]"
          >
            <div className="flex items-start justify-between">
              <IconDesktop className="h-8 w-8 text-graphite-950" />
              <span className="font-mono text-[10px] font-bold text-graphite-950/40">
                02
              </span>
            </div>
            <p className="mt-5 text-2xl font-black leading-none text-graphite-950">
              Crea
            </p>
            <p className="mt-1.5 text-xs font-medium text-graphite-950/60">
              Webs y aplicaciones
            </p>

            <span className="absolute -right-5 -top-6 flex h-14 w-14 rotate-[10deg] items-center justify-center rounded-full border-2 border-graphite-950 bg-zoria-blue font-hand text-base font-bold text-graphite-950 shadow-[3px_3px_0_0_rgba(10,13,18,0.9)]">
              ¡en serio!
            </span>
          </motion.div>

          {/* Bloque: Repara, asoma arriba-izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -24, y: -12, rotate: 4 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
            transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 4, y: -6 }}
            className="absolute -left-4 top-0 w-[168px] rounded-[24px] border-2 border-graphite-950 bg-graphite-950 p-5 shadow-[8px_8px_0_0_rgba(10,13,18,0.35)]"
          >
            <div className="flex items-start justify-between">
              <IconPhone className="h-6 w-6 text-zoria-blueLight" />
              <span className="font-mono text-[10px] font-bold text-white/40">01</span>
            </div>
            <p className="mt-4 text-lg font-black leading-none text-white">
              Repara
            </p>
            <p className="mt-1 text-[11px] font-medium text-white/50">
              Móviles y ordenadores
            </p>
          </motion.div>

          {/* Bloque: Crece, asoma abajo-derecha */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 12, rotate: -4 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -9 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: -4, y: -6 }}
            className="absolute bottom-0 right-0 w-[168px] rounded-[24px] border-2 border-graphite-950 bg-graphite-950 p-5 shadow-[8px_8px_0_0_rgba(10,13,18,0.35)]"
          >
            <div className="flex items-start justify-between">
              <IconChart className="h-6 w-6 text-zoria-blueLight" />
              <span className="font-mono text-[10px] font-bold text-white/40">03</span>
            </div>
            <p className="mt-4 text-lg font-black leading-none text-white">
              Crece
            </p>
            <p className="mt-1 text-[11px] font-medium text-white/50">
              Redes y contenido
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
