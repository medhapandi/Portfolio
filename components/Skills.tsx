"use client";

import { skills } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnimatedText from "@/components/AnimatedText";

export default function Skills() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal();

  /* Split skills into two rows for the dual-track train effect */
  const mid = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, mid);
  const row2 = skills.slice(mid);

  const renderTrainCars = (items: typeof skills, prefix: string) =>
    items.map((skill, index) => (
      <div
        key={`${prefix}-${index}`}
        className="skill-car"
      >
        <span className="skill-car-name">{skill.name}</span>
        <span className="skill-car-dot" />
        <span className="skill-car-category">{skill.category}</span>
      </div>
    ));

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 section-reveal ${
        isVisible ? "revealed" : ""
      }`}
    >
      <div className="flex items-center mb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="section-heading-box">
          <AnimatedText
            text="Skills & Expertise"
            visible={isVisible}
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white whitespace-nowrap"
          />
        </div>
      </div>

      {/* Train Track 1 — moves left */}
      <div className="skill-track">
        <div className="skill-train skill-train-left">
          <div className="skill-train-inner">
            {renderTrainCars(row1, "t1a")}
          </div>
          <div className="skill-train-inner" aria-hidden="true">
            {renderTrainCars(row1, "t1b")}
          </div>
        </div>
      </div>

      {/* Train Track 2 — moves right */}
      <div className="skill-track mt-4">
        <div className="skill-train skill-train-right">
          <div className="skill-train-inner">
            {renderTrainCars(row2, "t2a")}
          </div>
          <div className="skill-train-inner" aria-hidden="true">
            {renderTrainCars(row2, "t2b")}
          </div>
        </div>
      </div>
    </section>
  );
}
