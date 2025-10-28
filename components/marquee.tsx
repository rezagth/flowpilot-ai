"use client";

import React from "react";

export default function Marquee({ children, speed = 40, reverse = false, className = "" }: { children: React.ReactNode; speed?: number; reverse?: boolean; className?: string }) {
  const style: React.CSSProperties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--marquee-duration' as any]: `${speed}s`,
  };
  return (
    <div className={`marquee overflow-hidden ${className}`} style={style}>
      <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden>{children}</div>
      </div>
    </div>
  );
}
