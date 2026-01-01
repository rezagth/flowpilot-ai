"use client";

import { lazy, Suspense } from "react";

const AutoScrollTestimonials = lazy(() => import("@/components/auto-scroll-testimonials"));

function initials(name: string) {
  const n = name.split(",")[0].trim();
  const parts = n.split(" ");
  const letters = (parts[0]?.[0] || "") + (parts[1]?.[0] || "");
  return letters.toUpperCase();
}

const TESTIMONIALS = [
  ["Marie, Gérante", "FlowPilot a automatiser notre facturation. On gagne 10h par semaine, c'est incroyable."],
  ["Thomas, Directeur", "L'assistant IA répond à 80% des questions clients. Notre équipe respire enfin."],
  ["Sophie, Comptable", "Plus de saisie manuelle ! L'OCR extrait tout automatiquement. Un vrai gain de temps."],
  ["Lucas, Entrepreneur", "J'aurais dû le faire avant. ROI en 2 mois, je recommande à tous mes collègues."],
  ["Emma, RH", "L'onboarding automatisé nous a fait gagner une semaine par nouvelle recrue."],
  ["Pierre, Commercial", "Le CRM se remplit tout seul, je passe plus de temps à vendre qu'à saisir des données."],
  ["Marie, Gérante", "FlowPilot a automatiser notre facturation. On gagne 10h par semaine, c'est incroyable."],
  ["Thomas, Directeur", "L'assistant IA répond à 80% des questions clients. Notre équipe respire enfin."],
  ["Sophie, Comptable", "Plus de saisie manuelle ! L'OCR extrait tout automatiquement. Un vrai gain de temps."],
  ["Lucas, Entrepreneur", "J'aurais dû le faire avant. ROI en 2 mois, je recommande à tous mes collègues."],
  ["Emma, RH", "L'onboarding automatisé nous a fait gagner une semaine par nouvelle recrue."],
  ["Pierre, Commercial", "Le CRM se remplit tout seul, je passe plus de temps à vendre qu'à saisir des données."],
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="container-tight section">
      <style jsx>{`
        @keyframes fadeInUpSlow {
          0% {
            opacity: 0;
            transform: translateY(40px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes cardSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-40px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        .testimonial-card {
          animation: cardSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .testimonial-card:nth-child(1) { animation-delay: 0s; }
        .testimonial-card:nth-child(2) { animation-delay: 0.1s; }
        .testimonial-card:nth-child(3) { animation-delay: 0.2s; }
        .testimonial-card:nth-child(4) { animation-delay: 0.3s; }
        .testimonial-card:nth-child(5) { animation-delay: 0.4s; }
        .testimonial-card:nth-child(6) { animation-delay: 0.5s; }

        .testimonial-card {
          opacity: 0;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.3);
        }

        .testimonial-avatar {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .testimonial-card:hover .testimonial-avatar {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.6);
          transform: scale(1.1);
        }
      `}</style>

      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6" style={{
        animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both"
      }}>Ce qu&apos;ils en pensent</h2>
      <div>
        <div className="mb-2 text-xs text-white/50 flex items-center gap-2 pl-1" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both"
        }}>
          <span className="size-1.5 rounded-full bg-white/30" />
          Faites défiler pour en voir plus →
        </div>
        <Suspense fallback={<div className="w-full h-[300px] glass border border-white/10 rounded-2xl p-4 animate-pulse" />}>
          <AutoScrollTestimonials className="glass border border-white/10 rounded-2xl p-4 overflow-hidden">
            <div className="flex gap-4 min-w-max">
              {TESTIMONIALS.map(([name, quote], i) => (
                <div
                  key={i}
                  className="testimonial-card shrink-0 w-[360px] rounded-2xl p-5 bg-[linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.03))] border border-white/10 shadow-[0_10px_50px_-20px_rgba(99,102,241,.35)] relative overflow-hidden"
                >
                  <div className="absolute -inset-px opacity-30 pointer-events-none bg-[radial-gradient(500px_200px_at_0%_0%,rgba(99,102,241,.25),transparent_60%)]" />
                  <div className="relative flex items-center gap-3">
                    <div className="testimonial-avatar size-9 rounded-full bg-white/10 border border-white/15 grid place-items-center text-[11px] text-white/90">
                      {initials(name as string)}
                    </div>
                    <div className="text-white font-medium hover:text-indigo-200 transition-colors duration-300">{name}</div>
                    <div className="ml-auto text-amber-300">★★★★★</div>
                  </div>
                  <p className="relative text-white/80 text-sm mt-3 leading-6 hover:text-white/90 transition-colors duration-300">
                    <span className="text-white/40 mr-1">"</span>
                    {quote}
                    <span className="text-white/40 ml-1">"</span>
                  </p>
                </div>
              ))}
            </div>
          </AutoScrollTestimonials>
        </Suspense>
      </div>
    </section>
  );
}
