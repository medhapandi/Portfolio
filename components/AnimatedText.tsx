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
}: AnimatedTextProps) {
  // Simplified version: just renders the text with a simple opacity fade based on the visible prop.
  return (
    <Component className={`${className} transition-opacity duration-500 ease-out ${visible ? "opacity-100" : "opacity-0"}`}>
      {text}
    </Component>
  );
}
