"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const API = "https://tteegqzkbfttrknygdma.supabase.co/functions/v1/datos-pago";

type Datos = {
  titular: string;
  iban: string;
  importe: number;
  concepto: string;
  servicio: string;
  fecha_renovacion: string;
  pagado: boolean;
};

function Campo({
  etiqueta,
  valor,
  copiar,
  grande,
}: {
  etiqueta: string;
  valor: string;
  copiar?: string;
  grande?: boolean;
}) {
  const [hecho, setHecho] = useState(false);
  async function onCopiar() {
    const texto = copiar ?? valor;
    try {
      await navigator.clipboard.writeText(texto);
    } catch {
      const t = document.createElement("textarea");
      t.value = texto;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setHecho(true);
    setTimeout(() => setHecho(false), 2000);
  }
  return (
    <div className="rounded-xl border border-[#24403B] bg-[#12211F] p-4">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8EA8A2]">
        {etiqueta}
      </div>
      <div className="mt-2 flex items-center justify-between gap-3">
        <div
          className={`select-all break-all ${grande ? "font-mono text-[17px] font-medium" : "text-[15px]"}`}
        >
          {valor}
        </div>
        <button
          type="button"
          onClick={onCopiar}
          className="shrink-0 rounded-lg bg-[#2DE8C9] px-3.5 py-2 text-[13px] font-bold text-[#0B1715] transition active:scale-95"
        >
          {hecho ? "¡Copiado!" : "Copiar"}
        </button>
      </div>
    </div>
  );
}

export default function PagoCliente() {
  const r = useSearchParams().get("r") || "";
  const [datos, setDatos] = useState<Datos | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!r) {
      setError(true);
      return;
    }
    fetch(`${API}?r=${encodeURIComponent(r)}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(setDatos)
      .catch(() => setError(true));
  }, [r]);

  if (error)
    return (
      <p className="mt-10 text-[15px] leading-relaxed text-[#8EA8A2]">
        No hemos encontrado estos datos de pago. Abre de nuevo el enlace del
        correo o escríbenos por WhatsApp.
      </p>
    );
  if (!datos) return <p className="mt-10 text-sm text-[#8EA8A2]">Cargando…</p>;

  return (
    <div className="mt-8">
      <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2DE8C9]">
        Pago por transferencia
      </div>
      <h1 className="mt-2 text-[28px] font-extrabold leading-tight tracking-tight">
        Número de cuenta
      </h1>
      {datos.pagado ? (
        <p className="mt-3 rounded-xl border border-[#2DE8C9]/40 bg-[#2DE8C9]/10 p-4 text-[14px]">
          Esta renovación ya figura como pagada. ¡Gracias!
        </p>
      ) : (
        <p className="mt-3 text-[14px] leading-relaxed text-[#8EA8A2]">
          Pulsa «Copiar» y pégalo en la app de tu banco al hacer la
          transferencia.
        </p>
      )}
      <div className="mt-6">
        <Campo etiqueta="IBAN" valor={datos.iban} copiar={datos.iban.replace(/\s+/g, "")} grande />
      </div>
      {datos.titular && (
        <p className="mt-4 text-[13px] text-[#8EA8A2]">Titular: {datos.titular}</p>
      )}
    </div>
  );
}
