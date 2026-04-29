"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const requestRef = useRef<number>();
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const updateRing = () => {
      // Lerp interpolation for the ring
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(updateRing);
    };

    window.addEventListener("mousemove", onMouseMove);
    requestRef.current = requestAnimationFrame(updateRing);

    // Only hide default cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      document.body.style.cursor = "none";
    }

    const handleHoverStart = () => {
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) scale(0)`;
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) scale(1.8)`;
        ringRef.current.style.backgroundColor = "rgba(212,165,255,0.08)";
      }
    };

    const handleHoverEnd = () => {
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) scale(1)`;
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) scale(1)`;
        ringRef.current.style.backgroundColor = "transparent";
      }
    };

    // Attach hover effect to all links and buttons
    const attachHoverEffects = () => {
      const interactables = document.querySelectorAll("a, button");
      interactables.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };
    
    attachHoverEffects();
    
    // Use MutationObserver in case new interactables are added
    const observer = new MutationObserver(() => {
      attachHoverEffects();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.body.style.cursor = "auto";
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-[6px] h-[6px] bg-[#d4a5ff] rounded-full pointer-events-none z-[10000] transition-transform duration-100 ease-out -ml-[3px] -mt-[3px]"
      />
      <div 
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 w-[24px] h-[24px] border border-[rgba(212,165,255,0.4)] rounded-full pointer-events-none z-[9999] transition-all duration-150 ease-out -ml-[12px] -mt-[12px]"
      />
    </>
  );
}
