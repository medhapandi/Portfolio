"use client";

import { education } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnimatedText from "@/components/AnimatedText";

export default function Education() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="background"
      className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-reveal ${isVisible ? "revealed" : ""
        }`}
    >
      <div className="flex items-center mb-16">
        <div className="section-heading-box">
          <AnimatedText
            text="Background"
            visible={isVisible}
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white whitespace-nowrap"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((item, index) => (
          <div
            key={index}
            className={`edu-card transform transition-all duration-500 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-1 h-8 bg-[var(--accent)] rounded-full mr-4 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-serif text-xl md:text-2xl text-[var(--text-primary)] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-[var(--text-muted)]">
                  {item.institution}
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase bg-[var(--accent-surface)] px-3 py-1 rounded-full flex-shrink-0">
                {item.year}
              </span>
            </div>
            <p className="text-sm font-sans text-[var(--text-hint)] ml-5 pl-0 md:pl-0">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
