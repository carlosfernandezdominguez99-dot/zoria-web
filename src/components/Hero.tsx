"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { drawLine, fadeUp, stagger } from "@/lib/motion";

const chips = [
  { label: "Web", top: "8%", left: "4%", delay: 0.9 },
  { label: "Instagram", top: "58%", left: "-2%", delay: 1.05 },
  { label: "Reparación", top: "78%", left: "30%", delay: 1.2 },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const zY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const zOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-graphite-950 pt-24"
    >
      {/* ── fondo: grid técnico + luz ambiental ─────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 65% 40%, black 40%, transparent 85%)",
          }}
        />
        <div
          className="absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-zoria-blue/[0.08] blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-6 lg:grid-cols-[1.05fr,0.95fr]">
        {/* ── columna izquierda: mensaje ──────────────────────────── */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          style={{ y: contentY }}
          className="relative z-10"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-graphite-400"
          >
            <span className="h-px w-8 bg-zoria-blue" />
            Zoria — Servicios digitales
          </motion.p>

          <h1 className="text-balance text-[15vw] font-semibold leading-[0.94] tracking-[-0.03em] text-white sm:text-7xl md:text-[5.5rem] lg:text-8xl">
            {["Repara.", "Crea.", "Crece."].map((word, i) => (
              <motion.span key={word} variants={fadeUp} className="block overflow-hidden">
                <span
                  className={
                    i === 1
                      ? "bg-gradient-to-r from-zoria-blueLight to-zoria-blue bg-clip-text text-transparent"
                      : ""
                  }
                >
                  {word}
                </span>
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-sm text-balance text-lg text-graphite-400"
          >
            Tu tecnología. Tu presencia digital.
            <br /> Todo en un mismo sitio.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-zoria-blue px-6 py-3.5 text-sm font-semibold text-graphite-950 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-glow"
            >
              Cuéntanos qué necesitas
              <span className="transition-transform duration-400 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#proceso"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors duration-400 hover:text-white"
            >
              Ver cómo trabajamos
              <span className="transition-transform duration-400 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* ── columna derecha: Z gráfica + composición ────────────── */}
        <div className="relative hidden h-[560px] lg:block" aria-hidden="true">
          <motion.svg
            style={{ y: zY, opacity: zOpacity }}
            viewBox="0 0 420 520"
            className="absolute -right-24 -top-8 h-[640px] w-[640px] max-w-none"
            fill="none"
          >
            <motion.path
              d="M90 70 H330 L120 450 H340"
              stroke="url(#zGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawLine}
              initial="hidden"
              animate="show"
            />
            <motion.path
              d="M90 70 H330 L120 450 H340"
              stroke="white"
              strokeOpacity="0.05"
              strokeWidth="34"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawLine}
              initial="hidden"
              animate="show"
            />
            <defs>
              <linearGradient id="zGradient" x1="90" y1="70" x2="340" y2="450" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6FF3DC" />
                <stop offset="100%" stopColor="#16E0BD" />
              </linearGradient>
            </defs>
          </motion.svg>

          {chips.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: c.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute"
              style={{ top: c.top, left: c.left }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-graphite-900/80 px-3.5 py-2.5 shadow-card backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-zoria-blueLight" />
                <span className="text-xs font-medium text-graphite-100">
                  {c.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="relative mx-auto mb-8 hidden sm:block"
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
