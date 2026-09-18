"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { WHATSAPP_NUMBER } from "@/lib/config";

// ── Configuración editable ──────────────────────────────────────────────
// Rellena estos datos en cuanto los tengas definidos.
const DIRECCION = "Pendiente de definir";
const HORARIO = "Pendiente de definir";
const INSTAGRAM_URL = "";
const TIKTOK_URL = "";
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
              Con un lugar al que acudir.
            </h2>
            <p className="mt-4 max-w-md text-graphite-950/60">
              No somos una multinacional impersonal. Detrás de Zoria hay un
              equipo local al que puedes venir a ver en persona.
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
            {(WHATSAPP_NUMBER || INSTAGRAM_URL) && (
              <div className="flex gap-3.5">
                {WHATSAPP_NUMBER && (
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-2xl border-2 border-graphite-950 bg-zoria-blue p-5 text-[15px] font-bold text-graphite-950 shadow-[6px_6px_0_0_rgba(10,13,18,0.9)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    WhatsApp →
                  </a>
                )}
                {INSTAGRAM_URL && (
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-2xl border-2 border-graphite-950 bg-zoria-blue p-5 text-[15px] font-bold text-graphite-950 shadow-[6px_6px_0_0_rgba(10,13,18,0.9)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Instagram →
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
