"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function DragRow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setLeft(-Math.max(0, max));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <motion.div ref={ref} className={className} drag="x" dragConstraints={{ left, right: 0 }}>
      {children}
    </motion.div>
  );
}
