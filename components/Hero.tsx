import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center pt-24 pb-16 relative bg-[var(--bg)] overflow-hidden">
      
      <div className="absolute inset-0 z-0 bg-[var(--bg)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
        
        {/* Text Content */}
        <div className="flex flex-col items-start space-y-8 w-full lg:w-3/5">
          {/* Role Tag */}
          <div className="bg-[var(--bg-surface)] border-2 border-[var(--text-primary)] px-4 py-2 shadow-[4px_4px_0px_0px_var(--text-hint)] -rotate-1">
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[var(--text-primary)] font-bold">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              {personalInfo.role}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] leading-[1.2] text-[var(--text-primary)] max-w-5xl">
            Hi, I am <br />
            <span className="accent-word inline-block bg-[var(--accent)] !text-white px-6 py-2 mt-2 -rotate-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
              {personalInfo.name.split(' ')[0]}
            </span>
          </h1>

          {/* Bio */}
          <p className="text-xl md:text-2xl font-sans leading-[1.6] text-[var(--text-muted)] max-w-3xl bg-[var(--bg-card)]/50 backdrop-blur-sm p-4 border border-[var(--border)] rounded-xl shadow-sm">
            {personalInfo.bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a 
              href="/Resume/Medha CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--text-primary)] text-[var(--bg)] text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 shadow-[6px_6px_0px_0px_var(--accent)] hover:shadow-[0px_0px_0px_0px_var(--accent)]"
            >
              Resume
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--text-primary)] bg-transparent text-[var(--text-primary)] text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 shadow-[6px_6px_0px_0px_var(--text-hint)] hover:shadow-[0px_0px_0px_0px_var(--text-hint)]"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Side Image (Jigsaw Puzzle Treatment) */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end relative mt-16 lg:mt-0 z-10">
          
          {/* Main Puzzle Container */}
          <div className="relative w-[260px] h-[360px] sm:w-[300px] sm:h-[420px] md:w-[340px] md:h-[480px] lg:w-[360px] lg:h-[500px] group cursor-pointer">
            
            {/* Hidden SVG for Jigsaw Clip Paths */}
            <svg className="absolute w-0 h-0">
              <defs>
                <clipPath id="puzzle-piece-1" clipPathUnits="objectBoundingBox"><path d="M 0 0.06 Q 0 0, 0.06 0 L 0.333 0 L 0.333 0.137 C 0.413 0.107, 0.413 0.227, 0.333 0.197 L 0.333 0.333 L 0.197 0.333 C 0.227 0.253, 0.107 0.253, 0.137 0.333 L 0 0.333 L 0 0.06 Z" /></clipPath>
                <clipPath id="puzzle-piece-2" clipPathUnits="objectBoundingBox"><path d="M 0.333 0.000 L 0.667 0 L 0.667 0.137 C 0.587 0.107, 0.587 0.227, 0.667 0.197 L 0.667 0.333L 0.530 0.333 C 0.560 0.413, 0.440 0.413, 0.470 0.333 L 0.333 0.333L 0.333 0.197 C 0.413 0.227, 0.413 0.107, 0.333 0.137 L 0.333 0.000 Z" /></clipPath>
                <clipPath id="puzzle-piece-3" clipPathUnits="objectBoundingBox"><path d="M 0.667 0 L 0.94 0 Q 1 0, 1 0.06 L 1 0.333 L 0.864 0.333 C 0.893 0.253, 0.774 0.253, 0.803 0.333 L 0.667 0.333 L 0.667 0.197 C 0.587 0.227, 0.587 0.107, 0.667 0.137 L 0.667 0 Z" /></clipPath>
                <clipPath id="puzzle-piece-4" clipPathUnits="objectBoundingBox"><path d="M 0.000 0.333 L 0.137 0.333 C 0.107 0.253, 0.227 0.253, 0.197 0.333 L 0.333 0.333L 0.333 0.470 C 0.253 0.440, 0.253 0.560, 0.333 0.530 L 0.333 0.667L 0.197 0.667 C 0.227 0.747, 0.107 0.747, 0.137 0.667 L 0.000 0.667L 0.000 0.333 Z" /></clipPath>
                <clipPath id="puzzle-piece-5" clipPathUnits="objectBoundingBox"><path d="M 0.333 0.333 L 0.470 0.333 C 0.440 0.413, 0.560 0.413, 0.530 0.333 L 0.667 0.333L 0.667 0.470 C 0.747 0.440, 0.747 0.560, 0.667 0.530 L 0.667 0.667L 0.530 0.667 C 0.560 0.587, 0.440 0.587, 0.470 0.667 L 0.333 0.667L 0.333 0.530 C 0.253 0.560, 0.253 0.440, 0.333 0.470 L 0.333 0.333 Z" /></clipPath>
                <clipPath id="puzzle-piece-6" clipPathUnits="objectBoundingBox"><path d="M 0.667 0.333 L 0.803 0.333 C 0.774 0.253, 0.893 0.253, 0.864 0.333 L 1.000 0.333L 1.000 0.667 L 0.864 0.667 C 0.893 0.747, 0.774 0.747, 0.803 0.667 L 0.667 0.667L 0.667 0.530 C 0.747 0.560, 0.747 0.440, 0.667 0.470 L 0.667 0.333 Z" /></clipPath>
                <clipPath id="puzzle-piece-7" clipPathUnits="objectBoundingBox"><path d="M 0 0.667 L 0.137 0.667 C 0.107 0.747, 0.227 0.747, 0.197 0.667 L 0.333 0.667 L 0.333 0.803 C 0.413 0.774, 0.413 0.893, 0.333 0.864 L 0.333 1 L 0.06 1 Q 0 1, 0 0.94 L 0 0.667 Z" /></clipPath>
                <clipPath id="puzzle-piece-8" clipPathUnits="objectBoundingBox"><path d="M 0.333 0.667 L 0.470 0.667 C 0.440 0.587, 0.560 0.587, 0.530 0.667 L 0.667 0.667L 0.667 0.803 C 0.587 0.774, 0.587 0.893, 0.667 0.864 L 0.667 1.000L 0.333 1.000 L 0.333 0.864 C 0.413 0.893, 0.413 0.774, 0.333 0.803 L 0.333 0.667 Z" /></clipPath>
                <clipPath id="puzzle-piece-9" clipPathUnits="objectBoundingBox"><path d="M 0.667 0.667 L 0.803 0.667 C 0.774 0.747, 0.893 0.747, 0.864 0.667 L 1 0.667 L 1 0.94 Q 1 1, 0.94 1 L 0.667 1 L 0.667 0.864 C 0.587 0.893, 0.587 0.774, 0.667 0.803 L 0.667 0.667 Z" /></clipPath>
              </defs>
            </svg>

            {/* Background glow to show through gaps when hovered */}
            <div className="absolute inset-0 bg-[var(--accent)] opacity-0 blur-2xl group-hover:opacity-50 transition-opacity duration-700 rounded-3xl transform group-hover:scale-105" />

            {/* Piece 1: Top Left */}
            <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:-rotate-3" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
              <div className="absolute inset-0" style={{ clipPath: 'url(#puzzle-piece-1)' }}>
                <Image src="/images/personal.jpg" alt={personalInfo.name} fill className="object-cover object-top filter contrast-110 saturate-110" priority sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 360px" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Piece 2: Top Middle */}
            <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform group-hover:-translate-y-8 group-hover:rotate-2" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
              <div className="absolute inset-0" style={{ clipPath: 'url(#puzzle-piece-2)' }}>
                <Image src="/images/personal.jpg" alt={personalInfo.name} fill className="object-cover object-top filter contrast-110 saturate-110" priority sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 360px" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Piece 3: Top Right */}
            <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:rotate-3" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
              <div className="absolute inset-0" style={{ clipPath: 'url(#puzzle-piece-3)' }}>
                <Image src="/images/personal.jpg" alt={personalInfo.name} fill className="object-cover object-top filter contrast-110 saturate-110" priority sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 360px" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Piece 4: Middle Left */}
            <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform group-hover:-translate-x-8 group-hover:-rotate-2" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
              <div className="absolute inset-0" style={{ clipPath: 'url(#puzzle-piece-4)' }}>
                <Image src="/images/personal.jpg" alt={personalInfo.name} fill className="object-cover object-top filter contrast-110 saturate-110" priority sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 360px" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Piece 5: Center */}
            <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform group-hover:scale-110 group-hover:rotate-6 z-10" style={{ filter: 'drop-shadow(0 12px 16px rgba(0,0,0,0.6))' }}>
              <div className="absolute inset-0" style={{ clipPath: 'url(#puzzle-piece-5)' }}>
                <Image src="/images/personal.jpg" alt={personalInfo.name} fill className="object-cover object-top filter contrast-110 saturate-110" priority sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 360px" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Piece 6: Middle Right */}
            <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform group-hover:translate-x-8 group-hover:rotate-2" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
              <div className="absolute inset-0" style={{ clipPath: 'url(#puzzle-piece-6)' }}>
                <Image src="/images/personal.jpg" alt={personalInfo.name} fill className="object-cover object-top filter contrast-110 saturate-110" priority sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 360px" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Piece 7: Bottom Left */}
            <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:rotate-3" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
              <div className="absolute inset-0" style={{ clipPath: 'url(#puzzle-piece-7)' }}>
                <Image src="/images/personal.jpg" alt={personalInfo.name} fill className="object-cover object-top filter contrast-110 saturate-110" priority sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 360px" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Piece 8: Bottom Middle */}
            <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform group-hover:translate-y-8 group-hover:-rotate-2" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
              <div className="absolute inset-0" style={{ clipPath: 'url(#puzzle-piece-8)' }}>
                <Image src="/images/personal.jpg" alt={personalInfo.name} fill className="object-cover object-top filter contrast-110 saturate-110" priority sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 360px" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Piece 9: Bottom Right */}
            <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform group-hover:translate-x-6 group-hover:translate-y-6 group-hover:-rotate-3" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
              <div className="absolute inset-0" style={{ clipPath: 'url(#puzzle-piece-9)' }}>
                <Image src="/images/personal.jpg" alt={personalInfo.name} fill className="object-cover object-top filter contrast-110 saturate-110" priority sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 360px" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
