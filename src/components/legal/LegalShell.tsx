import type { ReactNode } from "react";
import Footer from "@/components/Footer";

export default function LegalShell({
  eyebrow,
  titulo,
  actualizado,
  children,
}: {
  eyebrow: string;
  titulo: string;
  actualizado: string;
  children: ReactNode;
}) {
  return (
    <main>
      <header className="border-b-2 border-graphite-950/10 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-[22px] font-black leading-none tracking-tight text-graphite-950"
          >
            ZORIA
          </a>
          <a
            href="/"
            className="font-mono text-xs font-bold uppercase tracking-wide text-graphite-950/50 transition-colors hover:text-graphite-950"
          >
            ← Volver a inicio
          </a>
        </div>
      </header>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <span className="inline-flex items-center rounded-full border-2 border-graphite-950 bg-[#F4F6F5] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-graphite-950">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-balance text-3xl font-black tracking-tight text-graphite-950 sm:text-4xl">
            {titulo}
          </h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-wide text-graphite-950/40">
            Última actualización: {actualizado}
          </p>

          <div className="legal-prose mt-10">{children}</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
