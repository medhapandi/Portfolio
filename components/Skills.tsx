"use client";

import { skills } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* Train hook connector between skill tiles */
function TrainHook() {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-8 h-56 md:h-64 relative">
      {/* Left arm */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-[2px] bg-[rgba(255,255,255,0.18)]" />
      {/* Center ring */}
      <div className="w-3 h-3 rounded-full border-[2px] border-[rgba(255,255,255,0.22)] bg-transparent" />
      {/* Right arm */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-[2px] bg-[rgba(255,255,255,0.18)]" />
    </div>
  );
}

export default function Skills() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal();

  const renderTiles = (prefix: string) =>
    skills.map((skill, index) => (
      <div key={`${prefix}-${index}`} className="flex items-center">
        {/* Tile */}
        <div
          className="group relative p-8 flex flex-col justify-between w-56 h-56 md:w-64 md:h-64 flex-shrink-0 skill-tile visible"
        >
          <h3 className="text-xl md:text-2xl text-[var(--text-primary)] transition-colors duration-150 leading-relaxed font-sans relative z-10">
            {skill.name}
          </h3>
          <span className="text-sm md:text-base uppercase tracking-widest text-[var(--text-muted)] transition-colors duration-150 mt-4 block relative z-10">
            {skill.category}
          </span>
        </div>
        {/* Hook connector after every tile */}
        <TrainHook />
      </div>
    ));

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-reveal ${isVisible ? "revealed" : ""
        }`}
    >
      <div className="flex items-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--accent)] whitespace-nowrap">
          Skills &amp; Expertise
        </h2>
        <div className="ml-6 h-[1px] w-full bg-[var(--border)]" />
      </div>

      <div className="overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
          <div className="flex items-center">
            {renderTiles("a")}
          </div>
          <div className="flex items-center">
            {renderTiles("b")}
          </div>
        </div>
      </div>
    </section>
  );
}
