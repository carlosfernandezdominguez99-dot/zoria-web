import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import ComoTrabajamos from "@/components/ComoTrabajamos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Servicios />
      <ComoTrabajamos />
      <Contacto />
      <Footer />
    </main>
  );
}
