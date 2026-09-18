"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const zY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const zOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={sectionRef}
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
          className="absolute right-[-6%] top-[6%] h-[620px] w-[620px] rounded-full bg-zoria-blue/[0.14] blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* marca en marca de agua, detrás de todo */}
      <motion.div
        style={{ y: zY, opacity: zOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[720px] w-[720px] -translate-y-1/2 lg:block"
        aria-hidden="true"
      >
        <Image
          src="/logo.png"
          alt=""
          fill
          priority
          quality={100}
          sizes="720px"
          className="object-contain opacity-[0.28]"
          style={{
            maskImage:
              "linear-gradient(120deg, black 30%, transparent 78%)",
            WebkitMaskImage:
              "linear-gradient(120deg, black 30%, transparent 78%)",
          }}
        />
      </motion.div>

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-6 lg:grid-cols-[1.1fr,0.9fr]">
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
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-graphite-400"
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

          <motion.div
            variants={fadeUp}
            className="mt-16 flex items-center gap-6 border-t border-white/[0.06] pt-6 font-mono text-xs text-graphite-400"
          >
            <span>01 Repara</span>
            <span className="text-graphite-600">/</span>
            <span>02 Crea</span>
            <span className="text-graphite-600">/</span>
            <span>03 Crece</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
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
