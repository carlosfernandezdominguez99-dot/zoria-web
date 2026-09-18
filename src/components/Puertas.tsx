"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

const puertas = [
  {
    numero: "01",
    titulo: "Reparar / Comprar",
    texto: "Móviles, ordenadores, portátiles, tablets y mucho más.",
    href: "#reparaciones",
    bg: "bg-zoria-blue",
    text: "text-graphite-950",
    border: "border-graphite-950",
  },
  {
    numero: "02",
    titulo: "Crear",
    texto: "Tu web. Tu tienda online. Tu presencia digital.",
    href: "#web",
    bg: "bg-graphite-950",
    text: "text-white",
    border: "border-graphite-950",
  },
  {
    numero: "03",
    titulo: "Crecer",
    texto: "Contenido y redes sociales para que tu negocio no pase desapercibido.",
    href: "#redes",
    bg: "bg-white",
    text: "text-graphite-950",
    border: "border-graphite-950",
  },
];

export default function Puertas() {
  return (
    <section className="border-t-2 border-graphite-950 bg-[#F4F6F5] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-lg text-balance text-4xl font-black tracking-tight text-graphite-950 sm:text-5xl"
        >
          ¿Qué necesitas?
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {puertas.map((p, i) => (
            <motion.a
              key={p.numero}
              variants={fadeUp}
              initial="hidden"
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={viewport}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              whileHover={{ rotate: i % 2 === 0 ? -1.5 : 1.5, y: -6 }}
              href={p.href}
              className={`flex min-h-[260px] flex-col justify-between rounded-2xl border-2 p-7 shadow-[6px_6px_0_0_rgba(10,13,18,0.9)] transition-shadow duration-200 hover:shadow-[9px_9px_0_0_rgba(10,13,18,0.9)] ${p.bg} ${p.text} ${p.border}`}
            >
              <span className="font-mono text-xs font-bold opacity-60">
                {p.numero}
              </span>
              <div>
                <h3 className="text-2xl font-black tracking-tight">
                  {p.titulo}
                </h3>
                <p className="mt-2.5 text-sm font-medium leading-relaxed opacity-70">
                  {p.texto}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold">
                  Descubrir →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
