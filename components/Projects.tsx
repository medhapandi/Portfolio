"use client";

import { projects } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnimatedText from "@/components/AnimatedText";

export default function Projects() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal();

  return (
    <section 
      ref={sectionRef} 
      id="work" 
      className={`py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-reveal ${
        isVisible ? "revealed" : ""
      }`}
    >
      <div className="flex items-center mb-12">
        <AnimatedText 
          text="Selected Work"
          visible={isVisible}
          as="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--accent)] whitespace-nowrap"
        />
        <div className="ml-6 h-[1px] w-full bg-[var(--border)]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card group bg-[rgba(255,255,255,0.06)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-8 sm:p-12 flex flex-col h-full rounded-[2rem]"
          >
            <div className="flex justify-between items-start mb-8 relative z-10">
              <span className="text-sm text-[var(--text-hint)] tracking-[0.2em] font-sans">
                {project.id}
              </span>
              <span className="text-sm text-[var(--text-hint)] tracking-widest font-sans">
                {project.year}
              </span>
            </div>

            <AnimatedText 
              text={project.title}
              visible={isVisible}
              as="h3"
              className="proj-title font-serif text-3xl sm:text-[2rem] text-[var(--accent)] mb-6 leading-tight relative z-10"
              baseDelay={200 + index * 100}
              staggerDelay={20}
              wordAnimation={true}
            />

            <p className="text-base font-sans leading-[1.8] text-[var(--text-muted)] mb-10 flex-grow relative z-10">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-12 relative z-10">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="text-xs uppercase tracking-wider text-[var(--text-hint)] border border-[var(--border)] px-3 py-1 rounded-full group-hover:text-[var(--text-muted)] group-hover:border-[var(--border-hover)] transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-[var(--border)] relative z-10">
              <a 
                href={project.link} 
                className="inline-flex items-center text-sm uppercase tracking-widest text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300"
              >
                View Case Study <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
