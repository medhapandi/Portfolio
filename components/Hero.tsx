"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const renderStaggeredText = (text: string, baseDelay: number = 0) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`inline-block transform transition-all duration-700 ease-out ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{ transitionDelay: `${baseDelay + index * 40}ms` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section id="home" className="min-h-[100vh] flex flex-col justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 scale-[1.05]"
        src="/videos/hero-video.mp4"
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[1]" 
        style={{ 
          background: 'linear-gradient(to bottom, rgba(13, 5, 20, 0.7) 0%, rgba(18, 7, 28, 0.5) 50%, rgba(13, 5, 20, 0.95) 100%)' 
        }} 
      />

      <div className="hero-orb-1 !z-[2]" />
      <div className="hero-orb-2 !z-[2]" />
      
      <div className="flex flex-col items-start space-y-8 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`transform transition-all duration-1000 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="text-sm uppercase tracking-[0.25em] text-[var(--text-hint)]">
            {personalInfo.role} — 2026
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-[5rem] leading-[1.1] max-w-4xl text-[var(--text-primary)] [text-shadow:_0_4px_24px_rgb(0_0_0_/_50%)]">
          <span className="block overflow-hidden pb-2">
            {renderStaggeredText("Designing things", 200)}
          </span>
          <span className="block overflow-hidden pb-2">
            {renderStaggeredText("people ", 800)}
            <span 
              className={`inline-block accent-word transform transition-all duration-700 ease-out ${
                mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: "1050ms" }}
            >
              love
            </span>
            {renderStaggeredText(" to use", 1100)}
          </span>
        </h1>

        <p 
          className={`text-lg font-sans leading-[1.9] text-[var(--text-muted)] max-w-[600px] transform transition-all duration-1000 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ transitionDelay: "300ms" }}
        >
          {personalInfo.bio}
        </p>

        <div 
          className={`flex flex-wrap items-center gap-4 pt-4 transform transition-all duration-1000 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ transitionDelay: "400ms" }}
        >
          <a 
            href="#work"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--text-primary)] text-[var(--bg)] text-base uppercase tracking-widest font-medium transition-colors hover:bg-[var(--accent)]"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
