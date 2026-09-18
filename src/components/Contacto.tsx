import ContactForm from "./ContactForm";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zoria-turquoiseDark">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zoria-ink sm:text-4xl">
            Cuéntanos tu proyecto
          </h2>
          <p className="mt-4 text-zoria-ink/60">
            Cuéntanos qué necesita tu negocio y te preparamos una propuesta
            sin compromiso.
          </p>
        </div>

        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
