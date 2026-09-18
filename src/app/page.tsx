import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Puertas from "@/components/Puertas";
import Reparaciones from "@/components/Reparaciones";
import Web from "@/components/Web";
import Redes from "@/components/Redes";
import Diferencial from "@/components/Diferencial";
import Proceso from "@/components/Proceso";
import Confianza from "@/components/Confianza";
import Local from "@/components/Local";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Puertas />
      <Reparaciones />
      <Web />
      <Redes />
      <Diferencial />
      <Proceso />
      <Confianza />
      <Local />
      <CtaFinal />
      <Footer />
      <FloatingActions />
    </main>
  );
}
