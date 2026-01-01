"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 transition-all duration-300">
      <div className="container-tight">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Left: Logo & Badge */}
          <div className="flex items-center gap-6">
            <Link href="#" className="flex items-center gap-2.5 group">
              <div className="size-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-[0_0_30px_rgba(99,102,241,.4)] flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(99,102,241,.6)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-white relative z-10">
                  <path fill="currentColor" d="M12 2l3.5 6H20l-5 5 2 8-5-4-5 4 2-8-5-5h4.5z" />
                </svg>
              </div>
              <span className="font-bold tracking-tight text-white text-lg hidden sm:inline">FlowPilot AI</span>
            </Link>

            <div className="hidden xl:flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors duration-300 group">
              <span className="relative size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.6)]">
                <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-pulse" />
              </span>
              <span className="text-xs text-emerald-300 font-medium">2.4M+ workflows today</span>
            </div>
          </div>

          {/* Right: Nav Links & Actions */}
          <div className="flex items-center gap-1 md:gap-2">
            <nav className="hidden md:flex items-center gap-1">
              <Link href="#use-cases" className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
                Use Cases
              </Link>
              <Link href="#pricing" className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
                Pricing
              </Link>
            </nav>

            <Link href="#cta" className="hidden sm:flex btn-primary text-sm py-2.5 px-5 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,.3)]">
              Get Started
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
