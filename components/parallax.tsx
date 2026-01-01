"use client";

import { useRef } from "react";

export default function Parallax({
  children,
  strength = 30,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number; // px offset range
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
