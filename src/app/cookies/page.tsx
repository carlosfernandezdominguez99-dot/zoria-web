import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import { TITULAR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: `Política de cookies de ${TITULAR.nombreComercial}.`,
};

export default function CookiesPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      titulo="Política de cookies"
      actualizado="octubre de 2026"
    >
      <div className="legal-prose">
        <h2>1. Qué son las cookies</h2>
        <p>
          Las cookies son pequeños archivos que se almacenan en tu navegador
          cuando visitas una web. Se usan, entre otras cosas, para recordar
          tus preferencias, hacer que la web funcione correctamente o
          analizar cómo se usa.
        </p>

        <h2>2. Qué cookies usa esta web</h2>
        <p>
          Ahora mismo, {TITULAR.nombreComercial} <strong>no utiliza</strong>{" "}
          cookies de analítica, publicidad ni de redes sociales. No
          instalamos Google Analytics ni ningún otro servicio de medición o
          seguimiento de terceros.
        </p>
        <p>
          Esta web solo podría utilizar cookies técnicas estrictamente
          necesarias para su funcionamiento básico (por ejemplo, para
          recordar que ya has visto el aviso de cookies). Estas cookies no
          requieren consentimiento porque son imprescindibles para prestar el
          servicio que has solicitado.
        </p>
        <p>
          Si en el futuro incorporamos herramientas de analítica o marketing
          que usen cookies, actualizaremos esta política y te pediremos tu
          consentimiento antes de activarlas.
        </p>

        <h2>3. Cómo gestionar las cookies desde tu navegador</h2>
        <p>
          Aunque esta web apenas usa cookies, puedes revisar, bloquear o
          eliminar en cualquier momento las que tu navegador tenga
          almacenadas desde su configuración de privacidad (en Chrome,
          Firefox, Safari o Edge, normalmente dentro de "Privacidad y
          seguridad" o "Cookies y datos de sitios").
        </p>

        <h2>4. Más información</h2>
        <p>
          Para cualquier duda sobre esta política, puedes escribirnos a{" "}
          <a href={`mailto:${TITULAR.email}`}>{TITULAR.email}</a>. También
          puedes consultar nuestra{" "}
          <a href="/privacidad">Política de privacidad</a>.
        </p>
      </div>
    </LegalShell>
  );
}
