import type { Metadata } from "next";
import "./globals.css";
import ClientToaster from "./components/ClientToaster";

export const metadata: Metadata = {
  title: "Convite de Casamento",
  description: "Casamento de Gabriel e Laura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
      >
        {children}
        <ClientToaster />
      </body>
    </html>
  );
}
