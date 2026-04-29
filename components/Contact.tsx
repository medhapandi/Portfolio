"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnimatedText from "@/components/AnimatedText";

export default function Contact() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className={`py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto section-reveal ${
        isVisible ? "revealed" : ""
      }`}
    >
      <div className="flex items-center mb-16">
        <AnimatedText 
          text="Get In Touch"
          visible={isVisible}
          as="h2"
          className="text-3xl md:text-4xl font-serif text-[var(--accent)] whitespace-nowrap"
        />
        <div className="ml-6 h-[1px] w-full bg-[var(--border)]" />
      </div>

      <div className="max-w-4xl space-y-12">
        <h3 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[var(--text-primary)] leading-[1.1]">
          <AnimatedText 
            text="Have an idea?"
            visible={isVisible}
            as="span"
            className="block"
            baseDelay={200}
            wordAnimation={false}
          />
          <AnimatedText 
            text="Let's build it together."
            visible={isVisible}
            as="span"
            className="block text-[var(--text-muted)]"
            baseDelay={800}
            wordAnimation={true}
          />
        </h3>

        <p className="text-lg font-sans leading-[1.9] text-[var(--text-muted)] max-w-2xl">
          I&apos;m currently {personalInfo.availability.toLowerCase()} and actively looking for new opportunities. 
          Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
        </p>

        <div className="pt-8">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center justify-center px-8 py-5 bg-[var(--bg)] border border-[var(--accent)] text-[var(--accent)] text-lg uppercase tracking-widest font-medium overflow-hidden transition-all duration-500 hover:text-[var(--bg)]"
          >
            <span className="absolute inset-0 w-full h-full bg-[var(--accent)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center">
              Say Hello
              <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-[var(--bg)] border border-[var(--border)] p-8 sm:p-12 max-w-md w-full shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-[var(--text-hint)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h4 className="font-serif text-3xl text-[var(--text-primary)] mb-8">Connect</h4>
            
            <div className="space-y-4">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4 border border-[var(--border)] hover:border-[var(--accent)] group transition-colors duration-300"
              >
                <div className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg font-sans text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">Gmail</span>
              </a>

              <a 
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 border border-[var(--border)] hover:border-[var(--accent)] group transition-colors duration-300"
              >
                <div className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-lg font-sans text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">LinkedIn</span>
              </a>

              <a 
                href={personalInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 border border-[var(--border)] hover:border-[var(--accent)] group transition-colors duration-300"
              >
                <div className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span className="text-lg font-sans text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
