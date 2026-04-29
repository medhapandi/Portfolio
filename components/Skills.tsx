"use client";

import { skills } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Skills() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal();

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className={`py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-reveal ${
        isVisible ? "revealed" : ""
      }`}
    >
      <div className="flex items-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--accent)] whitespace-nowrap">
          Skills & Expertise
        </h2>
        <div className="ml-6 h-[1px] w-full bg-[var(--border)]" />
      </div>

      <div className="overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
          <div className="flex">
            {skills.map((skill, index) => (
              <div 
                key={`a-${index}`} 
                className="group relative p-8 flex flex-col justify-between w-56 h-56 md:w-64 md:h-64 flex-shrink-0 skill-tile visible mr-1"
              >
                <h3 className="text-xl md:text-2xl text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors duration-150 leading-relaxed font-sans relative z-10">
                  {skill.name}
                </h3>
                <span className="text-sm md:text-base uppercase tracking-widest text-[var(--text-hint)] group-hover:text-[var(--text-muted)] transition-colors duration-150 mt-4 block relative z-10">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            {skills.map((skill, index) => (
              <div 
                key={`b-${index}`} 
                className="group relative p-8 flex flex-col justify-between w-56 h-56 md:w-64 md:h-64 flex-shrink-0 skill-tile visible mr-1"
              >
                <h3 className="text-xl md:text-2xl text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors duration-150 leading-relaxed font-sans relative z-10">
                  {skill.name}
                </h3>
                <span className="text-sm md:text-base uppercase tracking-widest text-[var(--text-hint)] group-hover:text-[var(--text-muted)] transition-colors duration-150 mt-4 block relative z-10">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
