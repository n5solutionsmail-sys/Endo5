import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Endo5 | Energiekosten senken – bis zu 15% sparen mit EndoTherm® & EndoCool®",
  description: "Reduzieren Sie Ihre Heiz- und Kühlkosten sofort und ohne Umbau. Bis zu 15% Einsparung mit EndoTherm® (Heizung) und EndoCool® (Kühlung) – die smarten Lösungen von N5 Solutions. Jetzt kostenlos beraten lassen!",
  keywords: "Heizkosten senken, Kühlkosten senken, EndoTherm, EndoCool, Heizungsoptimierung, Kühlsystem optimieren, Energiekosten reduzieren, HVAC Effizienz",
  openGraph: {
    title: "Endo5 | Energiekosten senken – bis zu 15% sparen",
    description: "Reduzieren Sie Ihre Heiz- und Kühlkosten sofort und ohne Umbau. Bis zu 15% Einsparung mit EndoTherm® & EndoCool®.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Endo5 | Energiekosten senken – bis zu 15% sparen",
    description: "Reduzieren Sie Ihre Heiz- und Kühlkosten sofort und ohne Umbau. Bis zu 15% Einsparung mit EndoTherm® & EndoCool®.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
