import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "IphoneStoreBRC | Reparación de Equipos Apple en Bariloche",
    template: `%s - IphoneStoreBRC | Reparación de Equipos Apple en Bariloche`,
  },
  description: "Servicio Técnico de equipos Apple en Bariloche",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: { google: "VfeLFNPMc02yvj3OR60sAmeaDzlGUd9aLTRL2VxlM60" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        <title>IphoneStoreBRC | Reparación de Equipos Apple en Bariloche</title>
        <meta
          name="description"
          content="Servicio Técnico de equipos Apple en Bariloche"
        />
        <meta
          name="google-site-verification"
          content="VfeLFNPMc02yvj3OR60sAmeaDzlGUd9aLTRL2VxlM60"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
