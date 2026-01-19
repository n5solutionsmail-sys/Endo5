import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridContainer from "@/components/layout/GridContainer";
import GridOverlay from "@/components/layout/GridOverlay";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "Endo5 | Heizkosten senken – bis zu 15% sparen mit EndoTherm®",
  description: "Reduzieren Sie Ihre Heizkosten sofort und ohne Umbau. Bis zu 15% Einsparung mit EndoTherm® – der smarten Lösung für Ihr Heizsystem. Jetzt kostenlos beraten lassen!",
  keywords: "Heizkosten senken, Heizkosten sparen, EndoTherm, Heizungsoptimierung, Energiekosten reduzieren, Heizung optimieren",
  openGraph: {
    title: "Endo5 | Heizkosten senken – bis zu 15% sparen",
    description: "Reduzieren Sie Ihre Heizkosten sofort und ohne Umbau. Bis zu 15% Einsparung mit EndoTherm®.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Endo5 | Heizkosten senken – bis zu 15% sparen",
    description: "Reduzieren Sie Ihre Heizkosten sofort und ohne Umbau. Bis zu 15% Einsparung mit EndoTherm®.",
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
        <GridContainer>
          <Header />
          <main>{children}</main>
          <Footer />
        </GridContainer>
        <GridOverlay />
      </body>
    </html>
  );
}
