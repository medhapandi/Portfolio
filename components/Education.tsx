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
      className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-reveal ${
        isVisible ? "revealed" : ""
      }`}
    >
      <div className="flex items-center mb-16">
        <AnimatedText 
          text="Background"
          visible={isVisible}
          as="h2"
          className="text-3xl md:text-4xl font-serif text-[var(--accent)] whitespace-nowrap"
        />
        <div className="ml-6 h-[1px] w-full bg-[var(--border)]" />
      </div>

      <div className="max-w-3xl space-y-16">
        {education.map((item, index) => (
          <div key={index} className="relative pl-8 sm:pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--border)]" />
            <div className="absolute left-0 top-2 w-[1px] h-8 bg-[var(--accent)]" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
              <AnimatedText 
                text={item.title}
                visible={isVisible}
                as="h3"
                className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-2 sm:mb-0"
                baseDelay={200 + index * 100}
                staggerDelay={20}
                wordAnimation={true}
              />
              <span className="text-sm font-sans text-[var(--text-hint)] tracking-widest uppercase">
                {item.year}
              </span>
            </div>
            
            <p className="text-base font-sans text-[var(--text-muted)] mb-2">
              {item.institution}
            </p>
            <p className="text-sm font-sans text-[var(--text-hint)] uppercase tracking-wider">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
