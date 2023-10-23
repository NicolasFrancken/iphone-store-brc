import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IphoneStoreBRC | Reparación de Equipos Apple en Bariloche",
  description: "Servicio Técnico de equipos Apple en Bariloche",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>IphoneStoreBRC | Reparación de Equipos Apple en Bariloche</title>
        <meta
          name="description"
          content="Servicio Técnico de equipos Apple en Bariloche"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
