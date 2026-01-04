"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container-tight py-12 md:py-16 border-t border-white/10">
      <div className="grid md:grid-cols-5 gap-8 mb-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="size-8 rounded-lg bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 border border-blue-500/20" />
            <div className="flex flex-col">
              <span className="font-bold text-white text-base leading-none">Elyron</span>
              <span className="font-semibold text-blue-400 text-xs leading-none">Labs</span>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Solutions d&apos;IA avancée et automatisation intelligente. Transformez vos processus métier avec des technologies de pointe et expertise en machine learning.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white/70">🇫🇷 Entreprise française</span>
            <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white/70">🔒 RGPD</span>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-3 text-sm">Solutions</div>
          <div className="space-y-2.5 text-sm">
            <Link href="#services" className="block text-white/60 hover:text-white transition">
              Nos Services
            </Link>
            <Link href="#use-cases" className="block text-white/60 hover:text-white transition">
              Cas d&apos;usage
            </Link>
            <Link href="#pricing" className="block text-white/60 hover:text-white transition">
              Nos Offres
            </Link>
            <Link href="#" className="block text-white/60 hover:text-white transition">
              Secteurs
            </Link>
            <Link href="#" className="block text-white/60 hover:text-white transition">
              Ressources
            </Link>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-3 text-sm">Entreprise</div>
          <div className="space-y-2.5 text-sm">
            <Link href="#" className="block text-white/60 hover:text-white transition">
              À propos
            </Link>
            <Link href="#case-studies" className="block text-white/60 hover:text-white transition">
              Témoignages
            </Link>
            <Link href="#" className="block text-white/60 hover:text-white transition">
              Blog
            </Link>
            <Link href="#cta" className="block text-white/60 hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold mb-3 text-sm">Légal</div>
          <div className="space-y-2.5 text-sm">
            <Link href="#" className="block text-white/60 hover:text-white transition">
              Mentions légales
            </Link>
            <Link href="#" className="block text-white/60 hover:text-white transition">
              Confidentialité
            </Link>
            <Link href="#" className="block text-white/60 hover:text-white transition">
              CGV
            </Link>
            <Link href="#" className="block text-white/60 hover:text-white transition">
              RGPD
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/50 text-sm">© {new Date().getFullYear()} Elyron Labs. All rights reserved.</div>
        <div className="flex items-center gap-5">
          <Link href="#" className="text-white/50 hover:text-white transition">
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.25c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.35 8.35 0 0022 5.92a8.19 8.19 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.22 8.22 0 01-2.6 1 4.1 4.1 0 00-7 3.74A11.65 11.65 0 013.16 4.86a4.1 4.1 0 001.27 5.47 4.07 4.07 0 01-1.86-.51v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 012 18.4a11.62 11.62 0 006.29 1.84" />
            </svg>
          </Link>
          <Link href="#" className="text-white/50 hover:text-white transition">
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.79 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-3.37-4-3.12-4 0v5.6h-3v-10h3v1.77c1.4-2.59 7-2.78 7 2.48v5.75z" />
            </svg>
          </Link>
          <Link href="#" className="text-white/50 hover:text-white transition">
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 19.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm.75-13.5h-1.5v6.75h6v-1.5h-4.5z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
