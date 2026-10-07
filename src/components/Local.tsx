"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

// ── Configuración editable ──────────────────────────────────────────────
// Rellena estos datos en cuanto los tengas definidos.
const DIRECCION = "Próximamente";
const HORARIO = "Próximamente";
// ─────────────────────────────────────────────────────────────────────────

export default function Local() {
  return (
    <section className="border-t-2 border-graphite-950 bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="text-sm font-bold text-zoria-blueDim">
              Tecnología cercana
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-graphite-950 sm:text-4xl">
              Muy pronto, un lugar al que acudir.
            </h2>
            <p className="mt-4 max-w-md text-graphite-950/60">
              No somos una multinacional impersonal. Estamos buscando el local
              perfecto para recibirte en persona; mientras tanto, te atendemos
              igual de cerca.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-3.5"
          >
            <div className="rounded-2xl border-2 border-graphite-950 bg-[#F4F6F5] p-5 shadow-[6px_6px_0_0_rgba(10,13,18,0.9)]">
              <p className="font-mono text-xs uppercase tracking-wide text-graphite-950/40">Ubicación</p>
              <p className="mt-1 text-[15px] font-bold text-graphite-950">
                {DIRECCION}
              </p>
            </div>
            <div className="rounded-2xl border-2 border-graphite-950 bg-[#F4F6F5] p-5 shadow-[6px_6px_0_0_rgba(10,13,18,0.9)]">
              <p className="font-mono text-xs uppercase tracking-wide text-graphite-950/40">Horario</p>
              <p className="mt-1 text-[15px] font-bold text-graphite-950">
                {HORARIO}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
