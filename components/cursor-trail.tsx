"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const positions = useRef<{ x: number; y: number }[]>([]);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const N = dotsRef.current.length;
    positions.current = Array.from({ length: N }, () => ({ x: 0, y: 0 }));

    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      positions.current.unshift({ x, y });
      if (positions.current.length > N) positions.current.pop();
      if (raf.current == null) raf.current = requestAnimationFrame(render);
    };

    const render = () => {
      raf.current = null;
      const ease = 0.3;
      let prev = positions.current[0];
      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i];
        if (!dot) continue;
        const target = positions.current[i] || prev;
        const dx = target.x - (prev?.x ?? target.x);
        const dy = target.y - (prev?.y ?? target.y);
        const x = (prev?.x ?? target.x) + dx * ease;
        const y = (prev?.y ?? target.y) + dy * ease;
        prev = { x, y };
        const o = 1 - i / N;
        dot.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
        dot.style.opacity = String(Math.max(0, Math.min(1, o)));
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30" aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dotsRef.current[i] = el;
          }}
          className="absolute top-0 left-0 w-3 h-3 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(99,102,241,.85), rgba(59,130,246,.65) 45%, transparent 70%)",
            filter: "blur(1px)",
            transition: "transform .08s linear, opacity .2s ease",
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
