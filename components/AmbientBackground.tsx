"use client";

import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-transparent">
      {/* Animated gradient mesh */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] rounded-full opacity-[0.15] blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          animation: "mesh-blob-1 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] rounded-full opacity-[0.15] blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--accent-light) 0%, transparent 70%)",
          animation: "mesh-blob-2 25s infinite alternate-reverse cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      />
      <div 
        className="absolute top-[40%] left-[60%] w-[35vw] h-[35vw] min-w-[250px] min-h-[250px] rounded-full opacity-[0.12] blur-[90px]"
        style={{
          background: "radial-gradient(circle, var(--accent-white) 0%, transparent 70%)",
          animation: "mesh-blob-3 22s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('/images/noise.png')" }}></div>
    </div>
  );
}
