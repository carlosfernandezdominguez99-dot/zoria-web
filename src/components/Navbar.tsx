"use client";

import { useEffect, useState } from "react";
import ZoriaLogo from "./ZoriaLogo";

const links = [
  { href: "#reparaciones", label: "Reparaciones" },
  { href: "#web", label: "Web" },
  { href: "#redes", label: "Redes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled
          ? "border-b border-white/[0.06] bg-graphite-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <ZoriaLogo className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-tight text-white">
            ZORIA
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-graphite-400 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-graphite-950 transition-all duration-400 hover:bg-zoria-blue hover:text-white"
        >
          Hablamos
          <span className="transition-transform duration-400 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
