"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left"
    >
      <div className="h-full w-full bg-[linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)] shadow-[0_0_24px_2px_rgba(99,102,241,.45)]" />
    </motion.div>
  );
}
