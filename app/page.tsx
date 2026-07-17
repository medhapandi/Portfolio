import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[var(--accent)] selection:text-white flex flex-col animate-page-enter opacity-0">
      <AmbientBackground />
      <Navbar />
      <div className="flex-1">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
