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
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon-16x16.png",
    apple: "/images/apple-touch-icon.png",
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
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
