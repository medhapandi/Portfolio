"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState<"loading" | "sliding" | "done">("loading");

  useEffect(() => {
    setMounted(true);
    
    // Start sliding up after 1500ms
    const slideTimer = setTimeout(() => {
      setStage("sliding");
    }, 1500);

    // Completely remove from DOM after 2500ms
    const doneTimer = setTimeout(() => {
      setStage("done");
      document.body.style.overflow = "unset";
    }, 2500);

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    return () => {
      clearTimeout(slideTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div 
      className={`fixed inset-0 z-[999] bg-[var(--bg)] flex items-center justify-center transition-transform duration-[1000ms] ${
        stage === "sliding" ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)" }}
    >
      <div className="overflow-hidden pb-2">
        <h1 
          className={`font-serif text-4xl sm:text-5xl md:text-6xl text-[var(--accent)] tracking-wide transform transition-all duration-[1000ms] ease-out ${
            !mounted ? "translate-y-full opacity-0" : stage === "sliding" ? "opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          {personalInfo.name}
        </h1>
      </div>
    </div>
  );
}
