import type { Metadata } from "next";

import "./globals.css";
// forcing refresh
import { personalDetails } from "./config";
import { Outfit } from "next/font/google";
import SnowParticles from "@/components/SnowParticles";

export const metadata: Metadata = {
  title: `${personalDetails.name} | ${personalDetails.title.split("|")[0].trim()}`,
  description: `${personalDetails.name} - ${personalDetails.title}. ${personalDetails.about.description.split(".")[0]}.`,
};

const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/vendors/themify-icons/css/themify-icons.css" />
      </head>
      <body className={outfit.className}>
        <SnowParticles />
        {children}
      </body>
    </html>
  );
}
