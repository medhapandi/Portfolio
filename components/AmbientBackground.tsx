"use client";

import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-50] overflow-hidden pointer-events-none bg-[#1d0047] opacity-85" style={{ transform: "translateZ(0)", willChange: "transform" }}>
      
      {/* Background Diagonal Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
           <line x1="-20%" y1="-20%" x2="120%" y2="120%" stroke="#fff" strokeWidth="1.5" />
           <line x1="10%" y1="-20%" x2="150%" y2="120%" stroke="#fff" strokeWidth="1.5" />
           <line x1="-20%" y1="20%" x2="120%" y2="160%" stroke="#fff" strokeWidth="1.5" />
           <line x1="50%" y1="-20%" x2="190%" y2="120%" stroke="#fff" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Massive Circle 1 (Top Left) */}
      <div 
        className="absolute w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-gradient-to-br from-[#4a0b8a] to-[#2d0066]"
        style={{
          top: "-30%", left: "-20%",
          boxShadow: "10px 20px 50px rgba(0,0,0,0.6)"
        }}
      />
      
      {/* Massive Circle 2 (Bottom Right) */}
      <div 
        className="absolute w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] rounded-full bg-gradient-to-tr from-[#3f008f] to-[#250055]"
        style={{
          bottom: "-40%", right: "-30%",
          boxShadow: "-10px -20px 50px rgba(0,0,0,0.7)"
        }}
      />

      {/* Medium Circle (Middle Left) */}
      <div 
        className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-b from-[#6410b3] to-[#3a007a]"
        style={{
          top: "35%", left: "-15%",
          boxShadow: "15px 15px 40px rgba(0,0,0,0.5)"
        }}
      />

      {/* Medium Circle (Top Right) */}
      <div 
        className="absolute w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-gradient-to-bl from-[#761ac7] to-[#4c0d91]"
        style={{
          top: "-10%", right: "10%",
          boxShadow: "-10px 15px 30px rgba(0,0,0,0.5)"
        }}
      />

      {/* Large Thick Purple Ring (Bottom Left) */}
      <div 
        className="absolute w-[25vw] h-[25vw] max-w-[300px] max-h-[300px] rounded-full border-[30px] border-[#4a0b8a]"
        style={{
          bottom: "-5%", left: "-5%",
          boxShadow: "inset 5px 5px 20px rgba(0,0,0,0.3), 10px 10px 30px rgba(0,0,0,0.5)"
        }}
      />

      {/* Plus Sign Accent (Top Right) */}
      <div className="absolute top-[15%] right-[5%] w-10 h-10 rotate-45 opacity-90">
        <div className="absolute top-1/2 left-0 w-full h-2.5 bg-white -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 h-full w-2.5 bg-white -translate-x-1/2" />
      </div>

      {/* Plus Sign Accent (Bottom Right) */}
      <div className="absolute bottom-[20%] right-[5%] w-8 h-8 rotate-12 opacity-70">
        <div className="absolute top-1/2 left-0 w-full h-2 bg-white -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 h-full w-2 bg-white -translate-x-1/2" />
      </div>

      {/* Hollow White Ring Accent (Bottom Right) */}
      <div className="absolute bottom-[10%] right-[3%] w-16 h-16 rounded-full border-[5px] border-white opacity-80" />
      
      {/* Hollow White Ring Accent (Bottom Left) */}
      <div className="absolute bottom-[5%] left-[2%] w-20 h-20 rounded-full border-[6px] border-white opacity-90" />
      
      {/* Little Cross Accent */}
      <div className="absolute top-[30%] left-[8%] w-5 h-5 rotate-45 opacity-60">
        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-white -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 h-full w-1.5 bg-white -translate-x-1/2" />
      </div>

    </div>
  );
}
