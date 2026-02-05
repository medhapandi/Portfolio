"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-gray-800 font-sans">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <HireMe />
      <Contact />
      <Footer />
    </main>
  );
}
