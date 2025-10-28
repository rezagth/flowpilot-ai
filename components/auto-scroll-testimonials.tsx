"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AutoScrollTestimonialsProps {
  children: React.ReactNode;
  className?: string;
}

export default function AutoScrollTestimonials({ children, className = "" }: AutoScrollTestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  useEffect(() => {
    if (!containerRef.current || isDragging) return;

    const startAutoScroll = () => {
      controls.start({
        x: [0, -100],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    startAutoScroll();
  }, [controls, isDragging]);

  const handleDragStart = (event: any, info: any) => {
    setIsDragging(true);
    setDragStart(info.point.x);
    setScrollStart(containerRef.current?.scrollLeft || 0);
    controls.stop();
  };

  const handleDrag = (event: any, info: any) => {
    if (!containerRef.current) return;
    const deltaX = info.point.x - dragStart;
    containerRef.current.scrollLeft = scrollStart - deltaX;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Redémarrer le mouvement automatique après un délai
    setTimeout(() => {
      if (!isDragging) {
        controls.start({
          x: [0, -100],
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      }
    }, 2000);
  };

  return (
    <motion.div
      ref={containerRef}
      className={className}
      drag="x"
      dragConstraints={{ left: -200, right: 0 }}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      animate={controls}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {children}
    </motion.div>
  );
}
