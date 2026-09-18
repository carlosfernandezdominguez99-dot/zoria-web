"use client";

import { useState, type FormEvent } from "react";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/lib/supabase";

const servicios = [
  "Reparación de móviles",
  "Compra/venta de móviles",
  "Diseño y creación de webs",
  "Mantenimiento web",
  "Redes sociales",
  "Creación de contenido",
  "Automatización de procesos",
  "IA aplicada a negocios",
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

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-zoria-turquoise/30 bg-zoria-mist p-8 text-center">
        <p className="text-lg font-semibold text-zoria-ink">
          ¡Gracias! Hemos recibido tu solicitud.
        </p>
        <p className="mt-2 text-sm text-zoria-ink/60">
          Te contactaremos en breve para hablar de tu proyecto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zoria-ink">
            Nombre
          </label>
          <input
            required
            name="nombre"
            type="text"
            className="w-full rounded-xl border border-zoria-ink/10 bg-white px-4 py-3 text-sm text-zoria-ink outline-none transition focus:border-zoria-turquoise"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zoria-ink">
            Email
          </label>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-xl border border-zoria-ink/10 bg-white px-4 py-3 text-sm text-zoria-ink outline-none transition focus:border-zoria-turquoise"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zoria-ink">
            Teléfono (opcional)
          </label>
          <input
            name="telefono"
            type="tel"
            className="w-full rounded-xl border border-zoria-ink/10 bg-white px-4 py-3 text-sm text-zoria-ink outline-none transition focus:border-zoria-turquoise"
            placeholder="600 000 000"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zoria-ink">
            Servicio que te interesa
          </label>
          <select
            required
            name="servicio_interes"
            defaultValue=""
            className="w-full rounded-xl border border-zoria-ink/10 bg-white px-4 py-3 text-sm text-zoria-ink outline-none transition focus:border-zoria-turquoise"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {servicios.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-zoria-ink">
          Cuéntanos tu proyecto
        </label>
        <textarea
          name="mensaje"
          rows={4}
          className="w-full rounded-xl border border-zoria-ink/10 bg-white px-4 py-3 text-sm text-zoria-ink outline-none transition focus:border-zoria-turquoise"
          placeholder="¿Qué necesitas?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-full bg-zoria-turquoise px-7 py-3.5 text-sm font-semibold text-zoria-ink transition hover:bg-zoria-turquoiseDark disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar solicitud"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500">
          No se ha podido enviar. Inténtalo de nuevo en unos minutos.
        </p>
      )}
    </form>
  );
}
