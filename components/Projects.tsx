"use client";

import { projects } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* Image map — all project images keyed by project id */
const projectImageMap: Record<string, { front: string; back: string }> = {
  "01": { front: "/images/bride-splash.png", back: "/images/bride-roles.png" },
  "02": { front: "/images/local-home.png",   back: "/images/local-browse.png" },
};

export default function Projects() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal();

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  /* Keep a ref so the last-hovered images stay visible during fade-out */
  const lastHovered = useRef<string>("01");

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs — front leads (faster), back lags (slower)
  const springXFront = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springYFront = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const springXBack  = useSpring(mouseX, { stiffness: 80,  damping: 15 });
  const springYBack  = useSpring(mouseY, { stiffness: 80,  damping: 15 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const handleMouseEnter = (id: string) => {
    lastHovered.current = id;
    setHoveredProject(id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  /* Determine which images to show — use lastHovered so they persist during fade-out */
  const displayId = hoveredProject ?? lastHovered.current;
  const images = projectImageMap[displayId] ?? { front: "", back: "" };

  return (
    <section
      ref={sectionRef}
      id="work"
      className={`py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-reveal ${
        isVisible ? "revealed" : ""
      }`}
    >
      <div className="flex items-center mb-16">
        <AnimatedText
          text="Selected Work"
          visible={isVisible}
          as="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--accent)] whitespace-nowrap"
        />
        <div className="ml-6 h-[1px] w-full bg-[var(--border)]" />
      </div>

      <div className="flex flex-col w-full">
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1;
          const isHovered = hoveredProject === project.id;

          return (
            <a
              href={project.link}
              key={project.id}
              data-project-row="true"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              className={`group flex items-center w-full py-[1.8rem] border-t border-[rgba(255,255,255,0.06)] ${
                isLast ? "border-b" : ""
              } transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] md:cursor-none`}
              style={{ paddingLeft: isHovered ? "12px" : "0px" }}
            >
              {/* Layout: 55px (number) | 1fr (title) | auto (tags + arrow) */}
              <div className="grid grid-cols-[55px_1fr_auto] items-center w-full gap-4">
                {/* Number */}
                <span
                  className="text-sm tracking-widest font-sans transition-colors duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ color: isHovered ? "#9b5de5" : "rgba(200,190,255,0.2)" }}
                >
                  {project.id}
                </span>

                {/* Title */}
                <h3
                  className="font-serif text-3xl sm:text-4xl md:text-5xl m-0 transition-colors duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ color: isHovered ? "#c084fc" : "#f0eeff" }}
                >
                  {project.title}
                </h3>

                {/* Tags and Arrow */}
                <div className="flex items-center gap-6">
                  <div className="hidden md:flex gap-3">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs uppercase tracking-wider text-[var(--text-hint)] border border-[var(--border)] px-4 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className="text-2xl transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center w-8 h-8"
                    style={{
                      color: isHovered ? "#9b5de5" : "rgba(255,255,255,0.4)",
                      transform: isHovered ? "rotate(0deg)" : "rotate(-45deg)",
                    }}
                  >
                    ↗
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* ── Floating Images (desktop only) ── */}
      {!isMobile && (
        <>
          {/* Back Image Tracker */}
          <motion.div
            className="fixed top-0 left-0 z-[49] pointer-events-none"
            style={{ x: springXBack, y: springYBack }}
          >
            <motion.div
              className="w-[240px] h-[300px] rounded-[18px] border border-[rgba(255,255,255,0.08)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden origin-center"
              style={{ filter: "brightness(0.6)" }}
              initial={{ opacity: 0, scale: 0.82, rotate: 8, y: 30, x: 55 }}
              animate={{
                opacity: hoveredProject ? 1 : 0,
                scale: hoveredProject ? 0.88 : 0.82,
                y: hoveredProject ? 28 : 58,
                x: 55,
                rotate: 8,
              }}
              transition={{
                opacity: { duration: 0.45, delay: 0.06 },
                scale: { duration: 0.45, delay: 0.06 },
                y: { duration: 0.45, delay: 0.06 },
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.back}
                alt="Project back view"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </motion.div>
          </motion.div>

          {/* Front Image Tracker */}
          <motion.div
            className="fixed top-0 left-0 z-[50] pointer-events-none"
            style={{ x: springXFront, y: springYFront }}
          >
            <motion.div
              className="w-[240px] h-[300px] rounded-[18px] border border-[rgba(255,255,255,0.18)] shadow-[0_30px_70px_rgba(0,0,0,0.6)] overflow-hidden origin-center"
              initial={{ opacity: 0, scale: 0.85, rotate: -4, y: 30 }}
              animate={{
                opacity: hoveredProject ? 1 : 0,
                scale: hoveredProject ? 1 : 0.85,
                y: hoveredProject ? 0 : 30,
                rotate: -4,
              }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                y: { duration: 0.4 },
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.front}
                alt="Project front view"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </section>
  );
}
