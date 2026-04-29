"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";

const tickerText = `${personalInfo.name.split('').join(' · ')} · — · ${personalInfo.role.split('').join(' · ')} · — · ${personalInfo.location.split('').join(' · ')}`;

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
      setTime(`${istTime} IST (GMT+5:30)`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="glass-nav flex items-center h-10 px-4 sm:px-6 lg:px-8 text-sm overflow-hidden sticky top-16 z-40">
      <div className="flex-shrink-0 w-[180px] text-[var(--text-muted)] hidden sm:block">
        {time || "Loading..."}
      </div>

      <div className="flex-1 overflow-hidden relative flex items-center h-full mx-4 hidden sm:flex mask-image-edges">
        <div className="flex whitespace-nowrap animate-ticker group-hover:[animation-play-state:paused]">
          <span className="tracking-[0.3em] text-[var(--text-hint)] pr-8 uppercase">
            {tickerText}
          </span>
          <span className="tracking-[0.3em] text-[var(--text-hint)] pr-8 uppercase">
            {tickerText}
          </span>
        </div>
      </div>

      <div className="flex-shrink-0 w-full sm:w-[180px] flex items-center sm:justify-end justify-between">
        <span className="sm:hidden text-[var(--text-muted)]">{time || "Loading..."}</span>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse-dot" />
          <span className="text-[var(--text-muted)] uppercase tracking-wider">{personalInfo.availability}</span>
        </div>
      </div>
    </div>
  );
}
