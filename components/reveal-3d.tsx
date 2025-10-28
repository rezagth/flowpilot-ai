"use client";

import { motion } from "framer-motion";

export default function Reveal3D({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, type: "spring", stiffness: 120, damping: 18, mass: 0.8 }}
      style={{ transformStyle: "preserve-3d", perspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
