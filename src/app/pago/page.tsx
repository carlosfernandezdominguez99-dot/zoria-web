import type { Metadata } from "next";
import { Suspense } from "react";
import PagoCliente from "./PagoCliente";

export const metadata: Metadata = {
  title: "Datos de pago",
  robots: { index: false, follow: false },
};

export default function PagoPage() {
  return (
    <main className="min-h-screen bg-[#0B1715] px-5 py-10 text-[#EAF6F4]">
      <div className="mx-auto max-w-md">
        <a href="/" className="text-[22px] font-black leading-none tracking-tight">
          ZORIA
        </a>
        <Suspense fallback={<p className="mt-10 text-sm text-[#8EA8A2]">Cargando…</p>}>
          <PagoCliente />
        </Suspense>
      </div>
    </main>
  );
}
