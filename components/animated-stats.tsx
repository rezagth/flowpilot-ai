"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  end: number;
  label: string;
  suffix?: string;
  delay?: number;
}

export function AnimatedStat({ end, label, suffix = "", delay = 0 }: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrameId: number;
    let startTime: number;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime - delay) / 1500, 1);

      if (progress > 0 && progress <= 1) {
        const eased = easeOutCubic(progress);
        const value = Math.floor(eased * end);
        setDisplayValue(value);
        animationFrameId = requestAnimationFrame(animate);
      } else if (progress > 1) {
        setDisplayValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, end, delay]);

  return (
    <div
      ref={ref}
      className="group relative p-6 rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(99,102,241,.5)]"
      style={{
        opacity: isVisible ? 1 : 0.5,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.8s",
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
        style={{
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.05) 100%)",
        }}
      />

      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent)",
        }}
      />

      <div className="relative z-10">
        <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
          {displayValue.toLocaleString()}{suffix}
        </div>
        <div className="text-sm md:text-base text-white/60 group-hover:text-white/80 transition-colors duration-300">
          {label}
        </div>
      </div>

      {/* Border glow on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          border: "1px solid rgba(99, 102, 241, 0)",
          backgroundImage: "linear-gradient(rgba(99, 102, 241, 0.3), rgba(99, 102, 241, 0.3)), linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.8), transparent)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      />
    </div>
  );
}
