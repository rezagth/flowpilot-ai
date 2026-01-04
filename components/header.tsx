"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Solutions", href: "#features" },
  { label: "Cas d'Usage", href: "#use-cases" },
  { label: "Blog", href: "#blog" },
  { label: "À Propos", href: "#about" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container-tight py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Elyrion Labs</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              size="md"
              onClick={() => window.open('https://cal.com/infracyb', '_blank')}
            >
              Réserver une Démo
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pt-4 border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="w-full mt-2"
                onClick={() => {
                  window.open('https://cal.com/infracyb', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                Réserver une Démo
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
