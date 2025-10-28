"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="glass border-white/10 hover:border-white/20 rounded-xl px-3 py-2 text-sm text-white/80 inline-flex items-center gap-2"
    >
      <span
        className={`size-2 rounded-full ${
          isDark ? "bg-indigo-400 shadow-[0_0_12px_2px_rgba(99,102,241,.75)]" : "bg-amber-300 shadow-[0_0_12px_2px_rgba(253,224,71,.6)]"
        }`}
      />
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
