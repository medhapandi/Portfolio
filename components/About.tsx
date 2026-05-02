"use client";

import { personalInfo } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnimatedText from "@/components/AnimatedText";

export default function About() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-reveal ${isVisible ? "revealed" : ""
        }`}
    >
      <div className="flex items-center mb-10">
        <AnimatedText
          text="About Me"
          visible={isVisible}
          as="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--accent)] whitespace-nowrap"
        />
        <div className="ml-6 h-[1px] w-full bg-[var(--border)]" />
      </div>

      <div className="max-w-5xl space-y-8">
        {personalInfo.about?.map((paragraph, index) => (
          <AnimatedText
            key={index}
            text={paragraph}
            visible={isVisible}
            as="p"
            className="text-xl md:text-2xl lg:text-[1.75rem] font-sans leading-[1.8] text-[var(--text-primary)]"
            wordAnimation={true}
            baseDelay={200 + index * 100}
            staggerDelay={20}
          />
        ))}
      </div>
    </section>
  );
}
