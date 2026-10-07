import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import { TITULAR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo trata ${TITULAR.nombreComercial} los datos personales de quienes visitan la web, piden información o son clientes.`,
};

export default function PrivacidadPage() {
  const correo = <a href={`mailto:${TITULAR.email}`}>{TITULAR.email}</a>;

  return (
    <LegalShell
      eyebrow="Legal"
      titulo="Política de privacidad"
      actualizado="7 de octubre de 2026"
    >
      <div className="legal-prose">
        <p>
          Esta política explica qué datos personales trata{" "}
          {TITULAR.nombreComercial}, para qué, durante cuánto tiempo y qué
          puedes hacer al respecto. Se aplica a esta web y a las herramientas
          que usamos con nuestros clientes: el cuestionario inicial (ZORIA
          Brief) y el portal de clientes.
        </p>

        <h2>1. Quién es el responsable</h2>
        <ul>
          <li>
            <strong>Titular:</strong> {TITULAR.nombre}, que actúa bajo el
            nombre comercial {TITULAR.nombreComercial}.
          </li>
          <li>
            <strong>NIF:</strong> {TITULAR.nif}
          </li>
          <li>
            <strong>Domicilio:</strong> {TITULAR.domicilio}
          </li>
          <li>
            <strong>Correo de contacto:</strong> {correo}
          </li>
          <li>
            <strong>Teléfono:</strong> {TITULAR.telefono}
          </li>
        </ul>

        <h2>2. Qué datos tratamos y de dónde salen</h2>
        <p>Solo tratamos los datos que tú nos das o que genera el propio servicio:</p>
        <ul>
          <li>
            <strong>Si nos escribes</strong> (formulario de la web, WhatsApp,
            correo o redes sociales): tu nombre, tu correo o teléfono, el
            servicio que te interesa y lo que nos cuentes en el mensaje.
          </li>
          <li>
            <strong>Si nos pides un presupuesto o rellenas el cuestionario
            inicial:</strong> datos de contacto, datos de tu negocio y la
            información que aportes sobre el proyecto.
          </li>
          <li>
            <strong>Si eres cliente de reparaciones:</strong> datos de
            contacto, marca y modelo del dispositivo, avería, fotografías
            del estado del equipo al recibirlo, tu firma en la hoja de
            encargo y, solo cuando es imprescindible para probar la
            reparación, el código o patrón de desbloqueo.
          </li>
          <li>
            <strong>Si eres cliente de web o redes sociales:</strong> datos
            de contacto, materiales que nos envíes (textos, imágenes,
            vídeos), contenidos que preparamos para ti y tus revisiones o
            comentarios en el portal de clientes.
          </li>
          <li>
            <strong>Datos de facturación:</strong> nombre o razón social,
            NIF, dirección y los datos de las facturas emitidas.
          </li>
          <li>
            <strong>Datos de acceso al portal de clientes:</strong> correo
            electrónico y contraseña (guardada cifrada; nosotros no podemos
            verla).
          </li>
          <li>
            <strong>Datos técnicos:</strong> al visitar la web, el proveedor
            de alojamiento registra de forma automática la dirección IP y
            datos básicos del navegador, por motivos de seguridad y
            funcionamiento.
          </li>
        </ul>
        <p>
          No pedimos datos especialmente protegidos (salud, ideología,
          religión, etc.). Te pedimos que no los incluyas en tus mensajes.
        </p>
        <p>
          <strong>Sobre el contenido de tu dispositivo:</strong> durante una
          reparación solo accedemos a lo necesario para diagnosticar y
          comprobar que funciona. No consultamos, copiamos ni conservamos
          tus fotos, mensajes u otros archivos. El código o patrón de
          desbloqueo se elimina cuando te devolvemos el equipo. Te
          recomendamos hacer una copia de seguridad antes de entregarlo.
        </p>

        <h2>3. Para qué los usamos y con qué base legal</h2>
        <ul>
          <li>
            <strong>Responder a tu consulta o prepararte un presupuesto.</strong>{" "}
            Base legal: tu consentimiento al escribirnos y la aplicación de
            medidas previas a un contrato que tú solicitas (art. 6.1.a y
            6.1.b RGPD).
          </li>
          <li>
            <strong>Prestarte el servicio contratado</strong> (reparación,
            web, redes sociales), incluido avisarte del estado de tu encargo
            y darte acceso al portal de clientes. Base legal: la ejecución
            del contrato (art. 6.1.b RGPD).
          </li>
          <li>
            <strong>Facturar y cumplir obligaciones fiscales y contables.</strong>{" "}
            Base legal: obligación legal (art. 6.1.c RGPD).
          </li>
          <li>
            <strong>Mantener la seguridad</strong> de la web y de nuestras
            herramientas, y atender posibles reclamaciones. Base legal:
            interés legítimo (art. 6.1.f RGPD).
          </li>
        </ul>
        <p>
          No enviamos publicidad a quien no la ha pedido, no elaboramos
          perfiles y no tomamos decisiones automatizadas sobre ti.
        </p>

        <h2>4. Cuánto tiempo los conservamos</h2>
        <ul>
          <li>
            <strong>Consultas y presupuestos que no llegan a contratarse:</strong>{" "}
            como máximo 12 meses desde el último contacto.
          </li>
          <li>
            <strong>Datos de clientes:</strong> mientras dure la relación y,
            después, bloqueados durante los plazos en que puedan surgir
            responsabilidades (con carácter general, hasta 5 años).
          </li>
          <li>
            <strong>Facturas y documentación contable y fiscal:</strong> 6
            años, como exige la normativa mercantil y tributaria.
          </li>
          <li>
            <strong>Códigos o patrones de desbloqueo:</strong> se eliminan al
            entregar el dispositivo.
          </li>
          <li>
            <strong>Cuenta del portal de clientes:</strong> hasta que termine
            el servicio o nos pidas darla de baja.
          </li>
        </ul>

        <h2>5. Con quién los compartimos</h2>
        <p>
          No vendemos ni cedemos tus datos. Solo acceden a ellos los
          proveedores que necesitamos para trabajar, que actúan como
          encargados del tratamiento siguiendo nuestras instrucciones:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> — base de datos y almacenamiento de
            archivos, en servidores de la Unión Europea.
          </li>
          <li>
            <strong>Vercel</strong> — alojamiento de la web y de nuestras
            aplicaciones.
          </li>
          <li>
            <strong>Resend</strong> — envío de los correos de aviso.
          </li>
          <li>
            <strong>Google (Gmail)</strong> — correo electrónico con el que
            te atendemos.
          </li>
          <li>
            <strong>IONOS</strong> — registro del dominio.
          </li>
        </ul>
        <p>
          Si nos escribes por WhatsApp, Instagram o TikTok, esas plataformas
          tratan tus datos según sus propias políticas de privacidad.
        </p>
        <p>
          También podremos comunicar datos a la Administración tributaria, a
          juzgados o a otras autoridades cuando una ley nos obligue.
        </p>

        <h2>6. Transferencias fuera de la Unión Europea</h2>
        <p>
          Algunos de estos proveedores (Vercel, Resend, Google, Supabase)
          son empresas de Estados Unidos o pueden tratar datos desde allí.
          En esos casos la transferencia se ampara en el Marco de Privacidad
          de Datos UE‑EE. UU. o en las cláusulas contractuales tipo aprobadas
          por la Comisión Europea. Puedes pedirnos más información en{" "}
          {correo}.
        </p>

        <h2>7. Tus derechos</h2>
        <p>Puedes, en cualquier momento y sin coste:</p>
        <ul>
          <li>Saber qué datos tuyos tenemos y obtener una copia (acceso).</li>
          <li>Corregir los que sean incorrectos (rectificación).</li>
          <li>Pedir que los borremos (supresión).</li>
          <li>Oponerte a un tratamiento o pedir que lo limitemos.</li>
          <li>Recibir tus datos en un formato reutilizable (portabilidad).</li>
          <li>
            Retirar tu consentimiento, sin que ello afecte a lo ya hecho
            hasta ese momento.
          </li>
        </ul>
        <p>
          Para ejercerlos, escribe a {correo} indicando qué derecho quieres
          ejercer. Te responderemos en el plazo máximo de un mes. Solo te
          pediremos que acredites tu identidad si tenemos dudas razonables
          sobre quién hace la solicitud.
        </p>
        <p>
          Si crees que no hemos tratado bien tus datos, puedes reclamar ante
          la Agencia Española de Protección de Datos (
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
            www.aepd.es
          </a>
          ).
        </p>

        <h2>8. Cómo protegemos tus datos</h2>
        <p>
          Aplicamos medidas razonables para protegerlos: conexiones
          cifradas, acceso restringido con contraseña y verificación en dos
          pasos a nuestras herramientas y separación de la información de
          cada cliente. Ningún sistema es infalible;
          si se produjera una brecha que te afectara de forma relevante, te
          avisaríamos y lo comunicaríamos a la autoridad de control cuando
          proceda.
        </p>

        <h2>9. Menores de edad</h2>
        <p>
          Nuestros servicios no están dirigidos a menores de 14 años. Si
          eres menor de esa edad, no nos envíes tus datos sin el permiso de
          tu padre, madre o tutor.
        </p>

        <h2>10. Cookies</h2>
        <p>
          Esta web no usa cookies de analítica ni de publicidad. Tienes el
          detalle en la <a href="/cookies">Política de cookies</a>.
        </p>

        <h2>11. Cambios en esta política</h2>
        <p>
          Si cambiamos la forma de tratar los datos, actualizaremos esta
          página y la fecha que aparece arriba. Si el cambio es importante y
          eres cliente, te avisaremos directamente.
        </p>
      </div>
    </LegalShell>
  );
}
