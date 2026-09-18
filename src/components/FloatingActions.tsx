"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconChat } from "./icons";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#top"
            initial={{ opacity: 0, y: 12, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.85 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            aria-label="Volver arriba"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-graphite-950 bg-white text-graphite-950 shadow-[4px_4px_0_0_rgba(10,13,18,0.9)] transition-shadow duration-200 hover:shadow-[6px_6px_0_0_rgba(10,13,18,0.9)]"
          >
            ↑
          </motion.a>
        )}
      </AnimatePresence>

      <motion.a
        href="#"
        aria-label="WhatsApp — próximamente"
        title="WhatsApp — próximamente"
        onClick={(e) => e.preventDefault()}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "backOut" }}
        whileHover={{ y: -3, rotate: -3 }}
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-graphite-950 bg-zoria-blue text-graphite-950 shadow-[5px_5px_0_0_rgba(10,13,18,0.9)] transition-shadow duration-200 hover:shadow-[7px_7px_0_0_rgba(10,13,18,0.9)]"
      >
        <IconChat className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
