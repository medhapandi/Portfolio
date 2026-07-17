"use client";

import { personalInfo } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnimatedText from "@/components/AnimatedText";


export default function Contact() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative py-32 flex flex-col justify-center bg-[var(--bg-surface)] text-white overflow-hidden section-reveal ${isVisible ? "revealed" : ""}`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-white bg-white/10 px-4 py-2 border border-white/20 font-bold backdrop-blur-sm -rotate-1 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
              Available for work
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-8xl text-white leading-[1.1] mb-6 drop-shadow-lg">
            <AnimatedText
              text="Have an idea?"
              visible={isVisible}
              as="span"
              className="block"
              baseDelay={200}
              wordAnimation={false}
            />
            <AnimatedText
              text="Let's build it."
              visible={isVisible}
              as="span"
              className="block text-[var(--accent-light)] mt-2 drop-shadow-md"
              baseDelay={600}
              wordAnimation={true}
            />
          </h2>

          <p className="text-lg font-sans leading-[1.8] text-white/90 max-w-xl mx-auto mb-12 drop-shadow-md">
            Whether you have a project proposal, a design challenge, or just want to say hello — I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center px-10 h-[84px] bg-[var(--accent)] text-white transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 shadow-[6px_6px_0px_0px_white] hover:shadow-[0px_0px_0px_0px_white]"
            >
              <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="flex flex-col items-start text-left">
                <span className="text-base uppercase tracking-widest font-bold leading-tight mb-1">Mail To</span>
                <span className="text-xs font-medium tracking-wider opacity-80 leading-none lowercase">{personalInfo.email}</span>
              </div>
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 h-[84px] border-2 border-[var(--border)] bg-transparent text-white text-base uppercase tracking-widest font-bold transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 shadow-[6px_6px_0px_0px_var(--accent-light)] hover:shadow-[0px_0px_0px_0px_var(--accent-light)] backdrop-blur-sm"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
          

        </div>
      </div>
    </section>
  );
}
