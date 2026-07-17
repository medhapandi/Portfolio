"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";

const tickerText = `${personalInfo.name} · ${personalInfo.role} · ${personalInfo.location}`;

export default function TickerBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const istTime = new Intl.DateTimeFormat("en-US", options).format(now);
      setTime(`${istTime} IST`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="glass-nav flex items-center h-10 px-4 sm:px-6 lg:px-8 text-xs overflow-hidden sticky top-16 z-40">
      <div className="flex-shrink-0 w-[140px] text-[var(--text-hint)] hidden sm:block font-mono">
        {time || "—"}
      </div>

      <div className="flex-1 overflow-hidden relative flex items-center h-full mx-4 hidden sm:flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex whitespace-nowrap animate-ticker">
          <span className="tracking-[0.2em] text-[var(--text-hint)] pr-12 uppercase">
            {tickerText} &nbsp;&nbsp;·&nbsp;&nbsp; {tickerText}
          </span>
          <span className="tracking-[0.2em] text-[var(--text-hint)] pr-12 uppercase">
            {tickerText} &nbsp;&nbsp;·&nbsp;&nbsp; {tickerText}
          </span>
        </div>
      </div>

      <div className="flex-shrink-0 w-full sm:w-[180px] flex items-center sm:justify-end justify-between">
        <span className="sm:hidden text-[var(--text-hint)] font-mono text-xs">{time || "—"}</span>
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse-dot" />
          <span className="text-[var(--text-hint)] uppercase tracking-wider">{personalInfo.availability}</span>
        </div>
      </div>
    </div>
  );
}
