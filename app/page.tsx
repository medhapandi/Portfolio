import Navbar from "@/components/Navbar";
import TickerBar from "@/components/TickerBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[var(--accent)] selection:text-[var(--bg)] flex flex-col">
      <AmbientBackground />
      <LoadingScreen />
      <Navbar />
      <TickerBar />
      <div className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
