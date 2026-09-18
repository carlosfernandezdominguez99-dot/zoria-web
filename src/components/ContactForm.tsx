"use client";

import { useState, type FormEvent } from "react";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/lib/supabase";

const servicios = [
  "Reparación de móviles",
  "Reparación de portátiles / ordenadores",
  "Reparación de tablets",
  "Venta de móviles",
  "Venta de ordenadores / portátiles",
  "Diseño y creación de webs",
  "Tienda online",
  "Mantenimiento web",
  "Redes sociales",
  "Aún no lo sé / varios",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      nombre: String(data.get("nombre") || ""),
      email: String(data.get("email") || ""),
      telefono: String(data.get("telefono") || ""),
      servicio_interes: String(data.get("servicio_interes") || ""),
      mensaje: String(data.get("mensaje") || ""),
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
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-graphite-400 outline-none transition-colors duration-400 focus:border-zoria-blue";

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-zoria-blue/30 bg-zoria-blue/[0.06] p-8 text-center">
        <p className="text-lg font-semibold text-white">
          ¡Gracias! Hemos recibido tu solicitud.
        </p>
        <p className="mt-2 text-sm text-graphite-400">
          Te contactaremos en breve para hablar de tu proyecto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-graphite-400">
            Nombre
          </label>
          <input required name="nombre" type="text" className={inputClass} placeholder="Tu nombre" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-graphite-400">
            Email
          </label>
          <input required name="email" type="email" className={inputClass} placeholder="tu@email.com" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-graphite-400">
            Teléfono (opcional)
          </label>
          <input name="telefono" type="tel" className={inputClass} placeholder="600 000 000" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-graphite-400">
            Servicio que te interesa
          </label>
          <select
            required
            name="servicio_interes"
            defaultValue=""
            className={`${inputClass} appearance-none`}
          >
            <option value="" disabled className="bg-graphite-900">
              Selecciona una opción
            </option>
            {servicios.map((s) => (
              <option key={s} value={s} className="bg-graphite-900">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-graphite-400">
          Cuéntanos tu proyecto
        </label>
        <textarea name="mensaje" rows={4} className={inputClass} placeholder="¿Qué necesitas?" />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-zoria-blue bg-zoria-blue px-7 py-4 text-sm font-bold uppercase tracking-wide text-graphite-950 shadow-[5px_5px_0_0_rgba(22,224,189,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_rgba(22,224,189,0.3)] disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Hablamos"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          No se ha podido enviar. Inténtalo de nuevo en unos minutos.
        </p>
      )}
    </form>
  );
}
