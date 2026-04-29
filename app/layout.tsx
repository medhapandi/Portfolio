import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Medha P — UI/UX Designer",
  description: "Portfolio of Medha P, UI/UX Designer crafting user-centered digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${syne.variable} font-sans bg-[var(--bg)] text-[var(--text-primary)] antialiased`}>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
