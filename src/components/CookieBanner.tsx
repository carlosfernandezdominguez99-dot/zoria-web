"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 700);
    return () => clearTimeout(t);
  }, []);

  // De momento cualquier botón hace lo mismo: cerrar. Cuando tengamos la
  // política de cookies/legal definitiva, aquí se diferenciará cada opción.
  function cerrar() {
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-4 bottom-5 z-50 mx-auto max-w-sm rounded-[24px] border-2 border-graphite-950 bg-white p-5 shadow-[8px_8px_0_0_rgba(10,13,18,0.9)] sm:inset-x-auto sm:bottom-7 sm:left-7"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-graphite-950 bg-zoria-blue px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-graphite-950">
            Aviso de cookies
          </span>

          <p className="mt-3 text-base font-black leading-snug text-graphite-950">
            Aquí reparamos móviles, no tu privacidad.
          </p>
          <p className="mt-2 text-sm text-graphite-950/60">
            Usamos alguna cookie para que la web funcione como toca. La
            política legal en condiciones está al caer — mientras tanto, ya
            sabes.
          </p>

          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              onClick={cerrar}
              className="rounded-full border-2 border-graphite-950 bg-graphite-950 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Aceptar todo
            </button>
            <button
              onClick={cerrar}
              className="rounded-full border-2 border-graphite-950 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-graphite-950 transition-colors duration-200 hover:bg-graphite-950 hover:text-white"
            >
              Solo lo necesario
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
