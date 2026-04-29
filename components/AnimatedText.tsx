"use client";

import React from "react";

interface AnimatedTextProps {
  text: string;
  visible: boolean;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  baseDelay?: number;
  staggerDelay?: number;
  wordAnimation?: boolean;
}

export default function AnimatedText({
  text,
  visible,
  as: Component = "span",
  className = "",
  baseDelay = 0,
  staggerDelay = 40,
  wordAnimation = false,
}: AnimatedTextProps) {
  const segments = wordAnimation ? text.split(" ") : text.split("");

  return (
    <Component className={className}>
      <span className="block overflow-hidden">
        {segments.map((segment, index) => (
          <span
            key={index}
            className={`inline-block transform transition-all duration-[800ms] ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${baseDelay + index * staggerDelay}ms` }}
          >
            {segment === " " && !wordAnimation ? "\u00A0" : segment}
            {wordAnimation && index < segments.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </span>
    </Component>
  );
}
