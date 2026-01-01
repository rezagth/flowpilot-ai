"use client";

import Link from "next/link";

const USE_CASES = [
  {
    title: "Cabinet Comptable",
    desc: "Automatisation de la saisie comptable, extraction de données des factures, et reporting client automatisé.",
    bullets: ["OCR factures et reçus", "Saisie automatique en compta", "Envoi rapports mensuels clients"],
  },
  {
    title: "Agence Immobilière",
    desc: "Gestion des leads, suivi prospects, génération de biens personnalisés et relances automatiques.",
    bullets: ["Qualification automatique leads", "Matching biens/clients IA", "Visites virtuelles auto"],
  },
  {
    title: "E-commerce & Retail",
    desc: "Gestion stocks, commandes, SAV client avec chatbot, et marketing automatisé.",
    bullets: ["Alertes stock bas", "Réponses SAV instantanées", "Campagnes personnalisées"],
  },
  {
    title: "Services à la Personne",
    desc: "Planning automatisé, facturation récurrente, et gestion des interventions.",
    bullets: ["Optimisation tournees", "Facturation automatique", "Rappels rendez-vous"],
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="container-tight section">
      <style jsx>{`
        @keyframes fadeInUpCard {
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

        .usecase-card {
          animation: fadeInUpCard 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .usecase-card:nth-child(1) { animation-delay: 0s; }
        .usecase-card:nth-child(2) { animation-delay: 0.1s; }
        .usecase-card:nth-child(3) { animation-delay: 0.2s; }
        .usecase-card:nth-child(4) { animation-delay: 0.3s; }

        .usecase-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
          transition: left 0.6s;
        }

        .usecase-card:hover::before {
          left: 100%;
        }

        .usecase-card:hover {
          transform: translateY(-8px);
          border-color: rgba(99, 102, 241, 0.8) !important;
          box-shadow: 0 0 50px rgba(99, 102, 241, 0.4), inset 0 0 20px rgba(99, 102, 241, 0.05) !important;
        }

        .usecase-bullet {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .usecase-card:hover .usecase-bullet {
          transform: translateX(4px);
          color: rgba(255, 255, 255, 0.95);
        }
      `}</style>

      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6" style={{
        animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both"
      }}>Cas d&apos;Usage Concrets</h2>
      <div>
        <div className="grid md:grid-cols-2 gap-5">
          {USE_CASES.map((u, i) => (
            <div key={u.title} className="usecase-card group rounded-2xl glass border border-white/10 p-5 hover:border-indigo-400/30">
              <div className="text-white font-semibold group-hover:text-indigo-200 transition-colors duration-300">{u.title}</div>
              <p className="text-sm text-white/70 mt-1.5 group-hover:text-white/85 transition-colors duration-300">{u.desc}</p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {u.bullets.map((b) => (
                  <li key={b} className="usecase-bullet flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-indigo-400 group-hover:bg-emerald-400 transition-colors duration-300 shadow-[0_0_8px_rgba(99,102,241,.5)] group-hover:shadow-[0_0_12px_rgba(52,211,153,.8)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6" style={{
        animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both"
      }}>
        <Link href="#cta" className="btn-primary">
          Discutons de votre projet
        </Link>
      </div>
    </section>
  );
}
