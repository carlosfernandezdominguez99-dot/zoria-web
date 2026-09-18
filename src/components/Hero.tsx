"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const zY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const zOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);
  const zScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  // reacción muy sutil al puntero (paralaje de marca, no un efecto 3D)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-1, 1], [2.2, -2.2]), {
    stiffness: 60,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [-1, 1], [-2.2, 2.2]), {
    stiffness: 60,
    damping: 18,
  });
  const tiltX = useSpring(useTransform(px, [-1, 1], [-6, 6]), {
    stiffness: 60,
    damping: 20,
  });
  const tiltY = useSpring(useTransform(py, [-1, 1], [-6, 6]), {
    stiffness: 60,
    damping: 20,
  });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    py.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handlePointerLeave() {
    px.set(0);
    py.set(0);
  }

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
          className="absolute right-[-6%] top-[6%] h-[560px] w-[560px] rounded-full bg-zoria-blue/[0.07] blur-[150px]"
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
        </motion.div>

        {/* ── columna derecha: la Z, integrada en el sistema visual ── */}
        <div
          className="relative hidden h-[560px] [perspective:1200px] lg:block"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          aria-hidden="true"
        >
          {/* líneas técnicas que "conectan" con la marca */}
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ originX: 0 }}
            className="absolute left-0 top-[14%] h-px w-16 bg-zoria-blue/40"
          />
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{ originX: 0 }}
            className="absolute left-0 bottom-[18%] h-px w-10 bg-white/10"
          />

          <motion.div
            style={{
              y: zY,
              scale: zScale,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="absolute -right-16 -top-6 h-[620px] w-[620px]"
          >
            {/* halo ambiental, detrás — no sobre — el logo */}
            <div
              className="absolute inset-[12%] rounded-full bg-zoria-blue/[0.10] blur-[90px]"
              aria-hidden="true"
            />

            {/* revelado tipo "construcción": máscara que se abre */}
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              style={{ x: tiltX, y: tiltY }}
              className="relative h-full w-full"
            >
              <Image
                src="/logo.png"
                alt="Zoria"
                fill
                priority
                quality={100}
                sizes="(min-width: 1024px) 620px, 0px"
                className="object-contain"
              />
            </motion.div>

            {/* rejilla local, ligeramente superpuesta a la marca */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage:
                  "radial-gradient(ellipse 60% 50% at 50% 45%, black 0%, transparent 70%)",
              }}
            />
          </motion.div>
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
