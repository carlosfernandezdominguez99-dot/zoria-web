"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

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

        {/* Conversación en vivo: una tarjeta tipo chat que cuenta la propuesta de Zoria en lugar de repetir el titular */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.35 }}
          className="relative mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-none"
        >
          {/* Etiqueta trasera: primer contacto */}
          <motion.div
            initial={{ opacity: 0, x: -16, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-3 top-6 hidden w-[132px] rounded-2xl border-2 border-graphite-950 bg-white p-3.5 shadow-[6px_6px_0_0_rgba(10,13,18,0.85)] sm:block"
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-zoria-blueLight" />
            <p className="mt-2 text-[11px] font-black leading-snug text-graphite-950">
              Sin líos.
              <br />
              Sin esperas.
            </p>
          </motion.div>

          {/* Tarjeta principal: mini conversación */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0 }}
            className="relative ml-auto w-full rounded-[28px] border-2 border-graphite-950 bg-white p-4 shadow-[10px_10px_0_0_rgba(10,13,18,0.9)] sm:w-[280px]"
          >
            <span className="absolute -right-4 -top-5 flex h-14 w-14 rotate-[9deg] items-center justify-center rounded-full border-2 border-graphite-950 bg-zoria-blue font-hand text-base font-bold text-graphite-950 shadow-[3px_3px_0_0_rgba(10,13,18,0.9)]">
              ¡en serio!
            </span>

            <div className="flex items-center gap-2 border-b border-graphite-950/10 pb-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zoria-blue opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-zoria-blue" />
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-graphite-950/60">
                Zoria · en línea
              </span>
            </div>

            <div className="mt-3.5 flex flex-col gap-2">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="max-w-[82%] rounded-2xl rounded-bl-sm bg-graphite-100 px-3.5 py-2 text-xs font-medium text-graphite-950"
              >
                Se me ha roto la pantalla del móvil
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.4 }}
                className="ml-auto max-w-[82%] rounded-2xl rounded-br-sm bg-graphite-950 px-3.5 py-2 text-xs font-medium text-white"
              >
                Tráelo cuando quieras, te lo miramos al momento
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.4 }}
                className="max-w-[82%] rounded-2xl rounded-bl-sm bg-graphite-100 px-3.5 py-2 text-xs font-medium text-graphite-950"
              >
                ¿Podéis hacer una web?
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.4 }}
                className="ml-auto max-w-[82%] rounded-2xl rounded-br-sm bg-graphite-950 px-3.5 py-2 text-xs font-medium text-white"
              >
                Claro, a tu medida y lista para vender
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.4 }}
                className="max-w-[82%] rounded-2xl rounded-bl-sm bg-graphite-100 px-3.5 py-2 text-xs font-medium text-graphite-950"
              >
                ¿Y las redes del negocio?
              </motion.div>

              {/* Indicador de "escribiendo" superpuesto sobre la respuesta final, que ya reserva su espacio */}
              <div className="relative ml-auto w-fit max-w-[210px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.55, duration: 0.4 }}
                  className="rounded-2xl rounded-br-sm bg-zoria-blue px-3.5 py-2 text-xs font-bold leading-snug text-graphite-950"
                >
                  Con eso también. Contenido y publicaciones, sin que muevas un dedo.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ delay: 2.85, duration: 0.85, times: [0, 0.2, 0.8, 1] }}
                  className="absolute inset-0 flex items-center gap-1 rounded-2xl rounded-br-sm bg-graphite-950 px-3.5"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        delay: i * 0.15,
                        duration: 0.7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-white/60"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
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
