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
              <div className="size-9 rounded-lg bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 shadow-[0_0_20px_rgba(30,58,138,.5)] flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(30,58,138,.7)] transition-all duration-300 border border-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-300 relative z-10">
                  <path fill="currentColor" d="M12 2c-5.33 4-8 6.5-8 11 0 4.41 3.59 8 8 8s8-3.59 8-8c0-4.5-2.67-7-8-11zm0 15c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
              </div>
              <div className="flex flex-col hidden sm:flex">
                <span className="font-bold tracking-tight text-white text-sm leading-none">Elyron</span>
                <span className="font-semibold text-blue-400 text-xs leading-none">Labs</span>
              </div>
            </Link>

            <div className="hidden xl:flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors duration-300 group">
              <span className="relative size-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,.6)]">
                <span className="absolute inset-0 rounded-full bg-blue-400/40 animate-pulse" />
              </span>
              <span className="text-xs text-blue-300 font-medium">Plateforme Active</span>
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
