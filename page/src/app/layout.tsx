import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ciszu Network — Innovación Digital",
  description: "Ciszu Network desarrolla soluciones digitales de alto rendimiento. Liderados por Ciszuko Antony, CEO. Proyectos: MuzicMania, Shigamens Network y más.",
  icons: {
    icon: "/logos/imagen/outline/isotipo/monocroma/ciszuko_logo_isotipo_outline_zblack_cwhite.svg",
    shortcut: "/logos/imagen/outline/isotipo/monocroma/ciszuko_logo_isotipo_outline_zblack_cwhite.svg",
    apple: "/logos/imagen/outline/isotipo/monocroma/ciszuko_logo_isotipo_outline_zblack_cwhite.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className="bg-black text-white min-h-screen font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}