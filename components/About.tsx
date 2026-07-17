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
      className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-reveal ${isVisible ? "revealed" : ""
        }`}
    >
      <div className="flex items-center mb-16">
        <div className="section-heading-box">
          <AnimatedText
            text="About Me"
            visible={isVisible}
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white whitespace-nowrap"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-16 items-start">
        {/* Bio with accent line */}
        <div className="relative pl-6 border-l-2 border-[var(--accent)]">
          {personalInfo.about?.map((paragraph, index) => (
            <AnimatedText
              key={index}
              text={paragraph}
              visible={isVisible}
              as="p"
              className="text-xl md:text-2xl lg:text-[1.75rem] font-sans leading-[1.8] text-white"
              wordAnimation={true}
              baseDelay={200 + index * 100}
              staggerDelay={20}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
