import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
  weight: ["600", "700"],
});

const SITE_URL = "https://zoria.es";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zoria - Soluciones Digitales",
    template: "%s — Zoria",
  },
  description:
    "Zoria repara móviles, portátiles, ordenadores y tablets, crea páginas web y tiendas online, y gestiona redes sociales para negocios locales. Un solo sitio para todo lo digital.",
  keywords: [
    "reparación móviles",
    "reparación ordenadores",
    "reparación portátiles",
    "páginas web",
    "tiendas online",
    "gestión redes sociales",
    "Zoria",
  ],
  openGraph: {
    title: "Zoria - Soluciones Digitales",
    description:
      "Reparamos tus dispositivos, creamos tu presencia digital y hacemos que tu negocio avance.",
    url: SITE_URL,
    siteName: "Zoria",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoria - Soluciones Digitales",
    description:
      "Reparamos tus dispositivos, creamos tu presencia digital y hacemos que tu negocio avance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zoria",
  description:
    "Reparación de dispositivos, creación de páginas web y gestión de redes sociales para negocios locales.",
  url: SITE_URL,
  areaServed: "ES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${mono.variable} ${hand.variable}`}>
      <body className="bg-graphite-950 font-sans text-graphite-100 antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
