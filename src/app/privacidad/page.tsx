import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import { TITULAR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Política de privacidad de ${TITULAR.nombreComercial}, conforme al RGPD y la LOPDGDD.`,
};

export default function PrivacidadPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      titulo="Política de privacidad"
      actualizado="octubre de 2026"
    >
      <div className="legal-prose">
        <h2>1. Responsable del tratamiento</h2>
        <p>
          <strong>{TITULAR.nombre}</strong>, con NIF {TITULAR.nif} y domicilio
          en {TITULAR.domicilio}, actuando bajo el nombre comercial{" "}
          <strong>{TITULAR.nombreComercial}</strong>, es el responsable del
          tratamiento de los datos personales que se recaban a través de este
          sitio web. Puedes contactar en{" "}
          <a href={`mailto:${TITULAR.email}`}>{TITULAR.email}</a>.
        </p>

        <h2>2. Qué datos recogemos</h2>
        <p>
          Esta web solo recoge datos personales a través del formulario de
          contacto. Según el canal que elijas al enviarlo, se recogen:
        </p>
        <ul>
          <li>Nombre.</li>
          <li>Email y/o teléfono (según el canal de contacto elegido).</li>
          <li>El servicio o servicios en los que estás interesado/a.</li>
          <li>El mensaje que nos escribas, si lo incluyes.</li>
        </ul>
        <p>
          Actualmente esta web no utiliza cookies de analítica, publicidad ni
          de redes sociales, y no instala ningún servicio de medición de
          terceros (como Google Analytics). Puedes consultar más detalle en
          la <a href="/cookies">Política de cookies</a>.
        </p>

        <h2>3. Con qué finalidad tratamos tus datos</h2>
        <p>
          Los datos que nos facilitas a través del formulario se utilizan
          exclusivamente para responder a tu solicitud de información o
          presupuesto, y para gestionar la relación comercial que, en su
          caso, se derive de ella.
        </p>

        <h2>4. Legitimación</h2>
        <p>
          La base legal para el tratamiento de tus datos es el{" "}
          <strong>consentimiento</strong> que prestas al rellenar y enviar
          voluntariamente el formulario de contacto.
        </p>

        <h2>5. Destinatarios y encargados de tratamiento</h2>
        <p>
          Tus datos no se ceden a terceros ajenos a la prestación del
          servicio. Para el funcionamiento técnico de la web se utilizan los
          siguientes proveedores, que actúan como encargados de tratamiento
          con las garantías exigidas por el RGPD:
        </p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong> — alojamiento (hosting) de la página
            web.
          </li>
          <li>
            <strong>Supabase</strong> — almacenamiento de los datos enviados
            a través del formulario de contacto.
          </li>
        </ul>

        <h2>6. Plazo de conservación</h2>
        <p>
          Tus datos se conservarán mientras sean necesarios para gestionar tu
          solicitud y, en caso de iniciarse una relación comercial, durante
          el tiempo exigido por la legislación aplicable. Puedes solicitar su
          supresión en cualquier momento.
        </p>

        <h2>7. Tus derechos</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad escribiendo a{" "}
          <a href={`mailto:${TITULAR.email}`}>{TITULAR.email}</a>, indicando
          el derecho que deseas ejercer y adjuntando copia de tu DNI o
          documento equivalente. Si consideras que no hemos atendido
          correctamente tu solicitud, puedes presentar una reclamación ante
          la Agencia Española de Protección de Datos (
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
            www.aepd.es
          </a>
          ).
        </p>
      </div>
    </LegalShell>
  );
}
