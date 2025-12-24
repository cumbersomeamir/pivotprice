import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PivotPrice | AI-Powered Pricing Intelligence",
  description: "Price smarter, grow faster, unlock revenue. PivotPrice is the first AI-powered growth platform for experience and attraction providers.",
  keywords: "pricing intelligence, AI pricing, competitive analysis, market insights, dynamic pricing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${outfit.variable} antialiased font-[family-name:var(--font-sora)]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
