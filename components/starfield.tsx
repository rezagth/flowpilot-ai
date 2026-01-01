"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const stars: { x: number; y: number; z: number; s: number }[] = [];
    const MAX = 140;

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    const seed = () => {
      stars.length = 0;
      for (let i = 0; i < MAX; i++) {
        stars.push({
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
          z: Math.random(),
          s: Math.random() * 0.9 + 0.1,
        });
      }
    };

    const tick = () => {
      frame++;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const speed = 0.004;
      for (const star of stars) {
        star.z -= speed * star.s;
        if (star.z <= 0) star.z = 1;
        const sx = (star.x / star.z) * (W * 0.35) + W / 2;
        const sy = (star.y / star.z) * (H * 0.35) + H / 2;
        const r = Math.max(0.6, (1 - star.z) * 2.8) * DPR;
        const hue = 220 + Math.sin((frame + star.x * 100) * 0.003) * 20;
        const brightness = 65 - star.z * 45;
        const alpha = 0.85 - star.z * 0.7;
        
        // Glow effect
        ctx.shadowBlur = r * 3;
        ctx.shadowColor = `hsla(${hue}, 90%, ${brightness}%, ${alpha * 0.5})`;
        ctx.fillStyle = `hsla(${hue}, 90%, ${brightness}%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(tick);
    };

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(tick);
    };

    resize();
    seed();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 opacity-70"
      aria-hidden
    />
  );
}
