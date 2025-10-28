"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 400);
          ticking.current = false;
        });
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          onClick={onClick}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 glass border border-white/15 rounded-full p-3 shadow-[0_8px_40px_-12px_rgba(99,102,241,.35)] hover:border-white/25"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-white">
            <path fill="currentColor" d="M12 4l7 7-2.1 2.1L13 9.2V20h-2V9.2L7.1 13.1 5 11z" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
