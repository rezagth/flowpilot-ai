"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Solutions: [
    { label: "Automatisation IA", href: "#" },
    { label: "Agents Intelligents", href: "#" },
    { label: "Intégrations", href: "#" },
    { label: "Analytics", href: "#" }
  ],
  Resources: [
    { label: "Blog", href: "#blog" },
    { label: "Documentation", href: "#" },
    { label: "Cas d'Usage", href: "#use-cases" },
    { label: "Support", href: "#" }
  ],
  Entreprise: [
    { label: "À Propos", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Partenaires", href: "#" }
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Elyrion Labs</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Solutions IA avancées et automatisation intelligente pour transformer 
              votre entreprise et accélérer votre croissance.
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@elyrion.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div>
            © {new Date().getFullYear()} Elyrion Labs. Tous droits réservés.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Conditions d&apos;Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
