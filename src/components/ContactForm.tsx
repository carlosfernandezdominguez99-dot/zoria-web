"use client";

import { useState, type FormEvent } from "react";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/lib/supabase";
import { WHATSAPP_NUMBER } from "@/lib/config";

const intereses = [
  "Reparación de dispositivos",
  "Venta de móviles / ordenadores",
  "Diseño y desarrollo web",
  "Redes sociales y contenido",
  "Aún no lo sé",
];

type Status = "idle" | "loading" | "success" | "error";
type Canal = "whatsapp" | "email";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [canal, setCanal] = useState<Canal>(WHATSAPP_NUMBER ? "whatsapp" : "email");
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

  function toggleInteres(valor: string) {
    setSeleccionados((prev) =>
      prev.includes(valor) ? prev.filter((v) => v !== valor) : [...prev, valor]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "");
    const mensaje = String(data.get("mensaje") || "");
    const interesTexto = seleccionados.length ? seleccionados.join(", ") : "Sin especificar";

    if (canal === "whatsapp" && WHATSAPP_NUMBER) {
      const texto = `Hola Zoria, soy ${nombre || "un cliente"}.%0AMe interesa: ${interesTexto}.${
        mensaje ? `%0A${mensaje}` : ""
      }`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
      setStatus("success");
      form.reset();
      setSeleccionados([]);
      return;
    }

    setStatus("loading");
    const payload = {
      nombre,
      email: String(data.get("email") || ""),
      telefono: String(data.get("telefono") || ""),
      servicio_interes: interesTexto,
      mensaje,
    };

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/leads_web`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(await res.text());

      setStatus("success");
      form.reset();
      setSeleccionados([]);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const labelClass = "mb-2 block font-mono text-xs font-bold uppercase tracking-wide text-graphite-400";
  const inputClass =
    "w-full rounded-2xl border-2 border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm font-medium text-white placeholder:text-graphite-400 outline-none transition-colors duration-200 focus:border-zoria-blue";

  if (status === "success") {
    return (
      <div className="rounded-[24px] border-2 border-zoria-blue bg-zoria-blue/[0.08] p-8 text-center shadow-[6px_6px_0_0_rgba(22,224,189,0.2)]">
        <p className="text-lg font-black text-white">
          {canal === "whatsapp" && WHATSAPP_NUMBER
            ? "¡Te hemos abierto WhatsApp!"
            : "¡Gracias! Hemos recibido tu solicitud."}
        </p>
        <p className="mt-2 text-sm text-graphite-400">
          {canal === "whatsapp" && WHATSAPP_NUMBER
            ? "Sigue la conversación allí — te respondemos nosotros mismos."
            : "Te contactamos nosotros mismos, sin bots ni esperas."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-[28px] border-2 border-white/15 bg-white/[0.03] p-6 shadow-[8px_8px_0_0_rgba(22,224,189,0.12)] sm:p-8"
    >
      {/* Selector de canal */}
      <div>
        <p className={labelClass}>¿Cómo prefieres que te contactemos?</p>
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => WHATSAPP_NUMBER && setCanal("whatsapp")}
            disabled={!WHATSAPP_NUMBER}
            className={`rounded-full border-2 px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${
              canal === "whatsapp"
                ? "border-zoria-blue bg-zoria-blue text-graphite-950 shadow-[3px_3px_0_0_rgba(22,224,189,0.3)]"
                : "border-white/15 text-white hover:border-white/30"
            }`}
          >
            WhatsApp{!WHATSAPP_NUMBER && " (pronto)"}
          </button>
          <button
            type="button"
            onClick={() => setCanal("email")}
            className={`rounded-full border-2 px-4 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
              canal === "email"
                ? "border-zoria-blue bg-zoria-blue text-graphite-950 shadow-[3px_3px_0_0_rgba(22,224,189,0.3)]"
                : "border-white/15 text-white hover:border-white/30"
            }`}
          >
            Correo
          </button>
        </div>
      </div>

      <div className={`grid gap-4 ${canal === "email" ? "sm:grid-cols-2" : ""}`}>
        <div>
          <label className={labelClass}>Nombre</label>
          <input required name="nombre" type="text" className={inputClass} placeholder="Tu nombre" />
        </div>
        {canal === "email" && (
          <div>
            <label className={labelClass}>Email</label>
            <input required name="email" type="email" className={inputClass} placeholder="tu@email.com" />
          </div>
        )}
      </div>

      {canal === "email" && (
        <div>
          <label className={labelClass}>Teléfono (opcional)</label>
          <input name="telefono" type="tel" className={inputClass} placeholder="600 000 000" />
        </div>
      )}

      <div>
        <p className={labelClass}>¿Qué necesitas? (marca lo que quieras)</p>
        <div className="flex flex-wrap gap-2">
          {intereses.map((i) => {
            const activo = seleccionados.includes(i);
            return (
              <label
                key={i}
                className={`flex cursor-pointer items-center gap-2 rounded-full border-2 px-3.5 py-2 text-xs font-bold transition-all duration-200 ${
                  activo
                    ? "border-zoria-blue bg-zoria-blue text-graphite-950"
                    : "border-white/15 bg-transparent text-white hover:border-white/35"
                }`}
              >
                <span
                  className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border-2 ${
                    activo ? "border-graphite-950 bg-graphite-950" : "border-white/30"
                  }`}
                >
                  {activo && (
                    <svg viewBox="0 0 12 10" className="h-2 w-2" fill="none">
                      <path d="M1 5l3.2 3.2L11 1" stroke="#16E0BD" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={activo}
                  onChange={() => toggleInteres(i)}
                />
                {i}
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <label className={labelClass}>Cuéntanos brevemente qué necesitas</label>
        <textarea name="mensaje" rows={3} className={inputClass} placeholder="Opcional" />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full border-2 border-zoria-blue bg-zoria-blue px-7 py-4 text-sm font-bold uppercase tracking-wide text-graphite-950 shadow-[5px_5px_0_0_rgba(22,224,189,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_rgba(22,224,189,0.3)] disabled:opacity-60"
      >
        {status === "loading"
          ? "Enviando..."
          : canal === "whatsapp" && WHATSAPP_NUMBER
            ? "Enviar por WhatsApp"
            : "Enviar solicitud"}
      </button>

      {status === "error" && (
        <p className="text-sm font-bold text-red-400">
          No se ha podido enviar. Inténtalo de nuevo en unos minutos.
        </p>
      )}
    </form>
  );
}
