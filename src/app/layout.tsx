import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Otel WhatsApp AI Asistanı | SER HOLDING",
  description:
    "Bodrum otelleri için yapay zeka destekli WhatsApp misafir asistanı. 7/24 çok dilli destek, anlık personel bildirim.",
  openGraph: {
    title: "Otel WhatsApp AI Asistanı | SER HOLDING",
    description: "Misafirlerinize 7/24 yanıt veren dijital resepsiyonist.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${plusJakarta.variable} ${inter.variable} ${libreBaskerville.variable}`}>
      <body>{children}</body>
    </html>
  );
}
