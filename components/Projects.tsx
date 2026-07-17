"use client";

import Image from "next/image";
import { projects } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnimatedText from "@/components/AnimatedText";

/* Image map — project preview images keyed by project id */
const projectImageMap: Record<string, string> = {
  "01": "/images/bride-splash.png",
  "02": "/images/01-cover.jpg",
};

export default function Projects() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="work"
      className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-reveal ${
        isVisible ? "revealed" : ""
      }`}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16">
        <div className="section-heading-box">
          <AnimatedText
            text="Selected Work"
            visible={isVisible}
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white whitespace-nowrap"
          />
        </div>
        <span className="hidden md:block text-sm text-[var(--text-hint)] uppercase tracking-widest">
          {projects.length} Projects
        </span>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => {
          const imageSrc = projectImageMap[project.id];
          return (
            <div
              key={project.id}
              className={`project-card group flex flex-col lg:flex-row rounded-3xl overflow-hidden transform transition-all duration-700 ease-out bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_64px_rgba(91,132,205,0.15)] hover:-translate-y-2 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Left Sidebar (Rotated Text) */}
              <div className="hidden lg:flex w-12 bg-white/5 border-r border-[var(--border)] items-center justify-center shrink-0">
                <span className="transform -rotate-90 text-[10px] uppercase tracking-[0.3em] text-[var(--text-hint)] whitespace-nowrap">
                  PROJECT • {project.id}
                </span>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col justify-between p-6 lg:p-8 z-10 relative">
                <div>
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-surface)] px-3 py-1.5 rounded-full font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] mb-4 transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {project.title}
                  </h3>
                  <p className="text-base text-[var(--text-muted)] max-w-xl leading-[1.6]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300 bg-white/10 px-5 py-3 rounded-full border border-[var(--border)] hover:border-[var(--accent-light)]"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Project
                  </a>
                  
                  {project.prototypeLink && (
                    <a
                      href={project.prototypeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[var(--bg-primary)] bg-[var(--accent)] hover:scale-105 transition-transform duration-300 px-5 py-3 rounded-full shadow-lg"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Prototype
                    </a>
                  )}
                </div>
              </div>

              {/* Visual Media Area */}
              {imageSrc && (
                <div className="lg:w-[45%] xl:w-[40%] h-[200px] sm:h-[280px] lg:h-auto relative overflow-hidden shrink-0 border-t lg:border-t-0 lg:border-l border-[var(--border)] bg-[var(--bg-surface)]">
                  <Image
                    src={imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
