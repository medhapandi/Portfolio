import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) setVisible(true); 
      },
      { 
        threshold,
        rootMargin: "0px 0px -150px 0px" // Forces element to be 150px into viewport before triggering
      }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  
  return { ref, visible };
}
