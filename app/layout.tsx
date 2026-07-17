import type { Metadata } from "next";
import { Space_Grotesk, Unbounded, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-heading",
});

const rubikMono = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Medha P — UI/UX Designer & AI-Driven Front-End Developer",
  description: "Portfolio of Medha P, UI/UX Designer who leverages AI tools and agents to bring designs to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${space.variable} ${unbounded.variable} ${rubikMono.variable} font-sans bg-[var(--bg)] text-[var(--text-primary)] antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
