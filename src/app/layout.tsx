import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoria — Soluciones digitales",
  description:
    "Zoria: reparación y venta de móviles, diseño y mantenimiento web, redes sociales, contenido, automatización e IA para pymes y negocios locales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
