"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Fraunces, Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import AmbientBackground from "@/components/AmbientBackground";

/* ── Fonts (scoped to this page only) ── */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm",
});

/* ── Section Data ── */
const sections = [
  { id: "01", label: "Cover",                   file: "01-cover.jpg" },
  { id: "02", label: "Problem & Goal",          file: "02-problem.jpg" },
  { id: "03", label: "User Persona",            file: "03-persona.jpg" },
  { id: "04", label: "User Flow",               file: "04-userflow.jpg" },
  { id: "05", label: "Low-Fidelity Wireframes", file: "05-wireframes.jpg" },
  { id: "06", label: "UI Design",               file: "06-ui-design.jpg" },
  { id: "07", label: "Key Features",            file: "07-features.jpg" },
  { id: "08", label: "Key Learnings",           file: "08-learnings.jpg" },
  { id: "09", label: "Thank You",               file: "09-thankyou.jpg" },
];

const IMG_BASE = "/images/case-studies/local-service";

/* ── Fade-up animation variant ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const heroScale = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
};

/* ── Component ── */
export default function LocalServiceCaseStudy() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Progress bar */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  /* IntersectionObserver for active section tracking */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(i);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className={`${fraunces.variable} ${jakarta.variable} ${dmSans.variable} min-h-screen bg-[var(--bg)]`}
    >
      {/* ── Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left"
        style={{ scaleX, background: "#9b5de5" }}
      />

      {/* ── Ambient Background (same as main site) ── */}
      <AmbientBackground />

      {/* ── Sticky Navbar ── */}
      <nav className="fixed top-[2px] left-0 right-0 z-[150] glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/#work"
              className="text-sm tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
              style={{ fontFamily: "var(--font-dm), sans-serif" }}
            >
              <span>←</span> Back to Work
            </Link>

            <Link
              href="/"
              className="text-sm uppercase tracking-[0.15em] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Med Designs
            </Link>

            <Link
              href="/case-study/brideease"
              className="text-sm tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
              style={{ fontFamily: "var(--font-dm), sans-serif" }}
            >
              <span>←</span> Previous Case Study
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Floating Side Nav (desktop) ── */}
      <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-end gap-4">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollToSection(i)}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label={`Go to ${s.label}`}
          >
            <span
              className="text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
              style={{
                fontFamily: "var(--font-dm), sans-serif",
                color: activeSection === i ? "#9b5de5" : "rgba(255,255,255,0.5)",
              }}
            >
              {s.label}
            </span>
            <span
              className="rounded-full transition-all duration-300"
              style={{
                width: activeSection === i ? "10px" : "6px",
                height: activeSection === i ? "10px" : "6px",
                background: activeSection === i ? "#9b5de5" : "rgba(255,255,255,0.2)",
                boxShadow: activeSection === i ? "0 0 8px rgba(155,93,229,0.5)" : "none",
              }}
            />
          </button>
        ))}
      </aside>



      {/* ── Main Content ── */}
      <main className="relative z-10 pt-24">
        {sections.map((section, index) => {
          const isHero = index === 0;
          const isEnd = index === sections.length - 1;
          const isMiddle = !isHero && !isEnd;

          return (
            <div key={section.id}>
              <section
                ref={(el) => { sectionRefs.current[index] = el; }}
                id={`section-${section.id}`}
                className="px-4 sm:px-6 lg:px-8"
                style={{ padding: isHero ? "0 1rem" : undefined }}
              >
                {/* ── HERO SECTION ── */}
                {isHero && (
                  <div
                    className="min-h-screen flex flex-col items-center justify-center"
                    style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
                  >
                    <motion.div
                      className="w-full"
                      style={{ maxWidth: "1100px" }}
                      variants={heroScale}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div
                        className="relative w-full overflow-hidden"
                        style={{ borderRadius: "20px" }}
                      >
                        <Image
                          src={`${IMG_BASE}/${section.file}`}
                          alt="Local Service — Cover"
                          width={1100}
                          height={700}
                          quality={90}
                          priority
                          className="w-full h-auto block"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>
                    </motion.div>

                    {/* Meta Row */}
                    <motion.div
                      className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {["UI/UX Designer", "1 Week", "Figma", "2026"].map(
                        (item, i, arr) => (
                          <span key={i} className="flex items-center gap-4">
                            <span
                              className="text-sm tracking-wider"
                              style={{
                                fontFamily: "var(--font-dm), sans-serif",
                                color: "rgba(200,190,255,0.5)",
                              }}
                            >
                              {item}
                            </span>
                            {i < arr.length - 1 && (
                              <span style={{ color: "rgba(200,190,255,0.25)" }}>·</span>
                            )}
                          </span>
                        )
                      )}
                    </motion.div>
                  </div>
                )}

                {/* ── MIDDLE SECTIONS (02–08) ── */}
                {isMiddle && (
                  <div
                    className="mx-auto"
                    style={{
                      maxWidth: "1100px",
                      paddingTop: "clamp(3rem, 5vw, 5rem)",
                      paddingBottom: "clamp(3rem, 5vw, 5rem)",
                    }}
                  >
                    {/* Section Label */}
                    <motion.div
                      className="mb-6 flex items-center gap-4"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <span
                        className="text-xs tracking-[0.2em] uppercase"
                        style={{
                          fontFamily: "var(--font-dm), sans-serif",
                          color: "rgba(200,190,255,0.3)",
                        }}
                      >
                        {section.id}
                      </span>
                      <span
                        className="text-sm tracking-wider"
                        style={{
                          fontFamily: "var(--font-dm), sans-serif",
                          color: "rgba(200,190,255,0.5)",
                        }}
                      >
                        {section.label}
                      </span>
                    </motion.div>

                    {/* Section Image */}
                    <motion.div
                      className="relative w-full overflow-hidden"
                      style={{
                        borderRadius: "clamp(12px, 2vw, 16px)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.15 }}
                    >
                      <Image
                        src={`${IMG_BASE}/${section.file}`}
                        alt={`Local Service — ${section.label}`}
                        width={1100}
                        height={700}
                        quality={90}
                        priority={false}
                        className="w-full h-auto block"
                      />
                    </motion.div>
                  </div>
                )}

                {/* ── END SECTION (09) ── */}
                {isEnd && (
                  <div
                    className="mx-auto flex flex-col items-center"
                    style={{
                      maxWidth: "800px",
                      paddingTop: "clamp(3rem, 5vw, 5rem)",
                      paddingBottom: "clamp(3rem, 5vw, 5rem)",
                    }}
                  >
                    <motion.div
                      className="relative w-full overflow-hidden"
                      style={{
                        borderRadius: "clamp(12px, 2vw, 16px)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <Image
                        src={`${IMG_BASE}/${section.file}`}
                        alt="Local Service — Thank You"
                        width={800}
                        height={500}
                        quality={90}
                        priority={false}
                        className="w-full h-auto block"
                      />
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                      className="mt-12 flex flex-col sm:flex-row items-center gap-4"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Link
                        href="/case-study/brideease"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm tracking-wider transition-all duration-300 hover:scale-[1.03]"
                        style={{
                          fontFamily: "var(--font-dm), sans-serif",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: "rgba(255,255,255,0.7)",
                          background: "transparent",
                        }}
                      >
                        <span>←</span> BrideEase Case Study
                      </Link>
                      <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm tracking-wider transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                        style={{
                          fontFamily: "var(--font-dm), sans-serif",
                          background: "#9b5de5",
                          color: "#fff",
                          boxShadow: "0 4px 20px rgba(155,93,229,0.3)",
                        }}
                      >
                        <span>←</span> Back to Work
                      </Link>
                    </motion.div>
                  </div>
                )}
              </section>

              {/* ── Divider ── */}
              {index < sections.length - 1 && (
                <div
                  className="mx-auto"
                  style={{
                    maxWidth: "1100px",
                    height: "1px",
                    background: "rgba(255,255,255,0.05)",
                  }}
                />
              )}
            </div>
          );
        })}

        {/* Bottom spacer */}
        <div style={{ height: "4rem" }} />
      </main>
    </div>
  );
}
