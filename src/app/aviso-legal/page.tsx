import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import { TITULAR, SITE_URL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${TITULAR.nombreComercial}, conforme a la Ley de Servicios de la Sociedad de la Información (LSSI-CE).`,
};

export default function AvisoLegalPage() {
  return (
    <LegalShell eyebrow="Legal" titulo="Aviso legal" actualizado="octubre de 2026">
      <div className="legal-prose">
        <h2>1. Datos del titular</h2>
        <p>
          En cumplimiento del deber de información recogido en el artículo 10
          de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
          la Información y de Comercio Electrónico (LSSI-CE), se informa de
          los siguientes datos: el titular de este sitio web es{" "}
          <strong>{TITULAR.nombre}</strong>, con NIF{" "}
          <strong>{TITULAR.nif}</strong>, actuando bajo el nombre comercial{" "}
          <strong>{TITULAR.nombreComercial}</strong>, con domicilio en{" "}
          {TITULAR.domicilio}, dirección de contacto{" "}
          <a href={`mailto:${TITULAR.email}`}>{TITULAR.email}</a> y teléfono
          de contacto {TITULAR.telefono}.
        </p>
        <p>
          Actividad: {TITULAR.actividad}, dado de alta como trabajador
          autónomo desde el {TITULAR.fechaAlta}.
        </p>

        <h2>2. Objeto</h2>
        <p>
          Este sitio web ({SITE_URL}) tiene como finalidad informar sobre los
          servicios ofrecidos por {TITULAR.nombreComercial} (reparación de
          dispositivos, venta de equipos, diseño y mantenimiento web, y
          gestión de redes sociales) y permitir que los usuarios se pongan en
          contacto a través del formulario disponible en la web.
        </p>

        <h2>3. Condiciones de uso</h2>
        <p>
          El acceso y uso de esta web atribuye la condición de usuario e
          implica la aceptación plena de las condiciones incluidas en este
          Aviso Legal. El usuario se compromete a hacer un uso adecuado de
          los contenidos y servicios que {TITULAR.nombreComercial} ofrece a
          través de su web y a no emplearlos para incurrir en actividades
          ilícitas o contrarias a la buena fe y al ordenamiento legal.
        </p>

        <h2>4. Propiedad intelectual e industrial</h2>
        <p>
          Los textos, imágenes, marca "{TITULAR.nombreComercial}", logotipos
          y demás contenidos de este sitio web son propiedad de{" "}
          {TITULAR.nombre} o se utilizan con la correspondiente autorización,
          y están protegidos por la normativa de propiedad intelectual e
          industrial. Queda prohibida su reproducción, distribución o
          comunicación pública sin autorización expresa del titular.
        </p>

        <h2>5. Responsabilidad</h2>
        <p>
          {TITULAR.nombreComercial} no se hace responsable de los daños y
          perjuicios que pudieran derivarse de interferencias, interrupciones,
          virus informáticos o averías en el sistema, ni de los que pudieran
          derivarse del uso indebido de la web por parte del usuario. Se
          reserva el derecho a modificar, en cualquier momento y sin previo
          aviso, el contenido de la web.
        </p>

        <h2>6. Legislación aplicable y jurisdicción</h2>
        <p>
          Las presentes condiciones se rigen por la legislación española.
          Para cualquier controversia que pudiera derivarse del acceso o uso
          de este sitio web, las partes se someten a los juzgados y
          tribunales que correspondan conforme a derecho.
        </p>
      </div>
    </LegalShell>
  );
}
