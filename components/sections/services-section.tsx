"use client";

import Link from "next/link";
import Reveal3D from "@/components/reveal-3d";
import { BoltIcon, GridIcon, BrainIcon, SyncIcon } from "@/components/icons";

const cardAnimationStyle = `
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

  @keyframes fadeInUpSlow {
    0% { opacity: 0; transform: translateY(40px); filter: blur(4px); }
    100% { opacity: 1; transform: translateY(0); filter: blur(0); }
  }

  .service-card {
    animation: fadeInUpCard 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .service-card:nth-child(1) { animation-delay: 0s; }
  .service-card:nth-child(2) { animation-delay: 0.1s; }
  .service-card:nth-child(3) { animation-delay: 0.2s; }
  .service-card:nth-child(4) { animation-delay: 0.3s; }
  .service-card:nth-child(5) { animation-delay: 0.4s; }
  .service-card:nth-child(6) { animation-delay: 0.5s; }
  .service-card:nth-child(7) { animation-delay: 0.6s; }
  .service-card:nth-child(8) { animation-delay: 0.7s; }

  .service-card {
    opacity: 0;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
    transition: left 0.6s;
  }

  .service-card:hover::before {
    left: 100%;
  }

  .service-card:hover {
    transform: translateY(-8px);
    border-color: rgba(99, 102, 241, 0.8) !important;
    box-shadow: 0 0 50px rgba(99, 102, 241, 0.4), inset 0 0 30px rgba(99, 102, 241, 0.05) !important;
  }

  .service-tag {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(99, 102, 241, 0.1));
    border: 1px solid rgba(99, 102, 241, 0.5);
  }
`;

const SERVICES = [
  {
    title: "Automatisation Administrative",
    desc: "Factures, devis, relances, saisie de données... on automatise.",
    bullets: ["Génération automatique de documents", "Relances clients intelligentes", "Synchronisation comptable", "Extraction de données"],
    icon: BoltIcon,
    tag: "Best-seller",
  },
  {
    title: "Assistant IA Sur Mesure",
    desc: "Un chatbot ou assistant intelligent adapté à votre métier.",
    bullets: ["Formé sur vos documents", "Réponses automatiques qualifiées", "Support client 24/7", "Intégration site web/app"],
    icon: BrainIcon,
    tag: "Populaire",
  },
  {
    title: "Gestion de la Relation Client",
    desc: "CRM automatisé, suivi prospects, emails personnalisés.",
    bullets: ["Scoring automatique des leads", "Séquences d'emails intelligentes", "Synchronisation multi-canaux", "Rappels et tâches auto"],
    icon: GridIcon,
    tag: null,
  },
  {
    title: "Workflow Métier",
    desc: "Processus sur mesure pour votre secteur d'activité.",
    bullets: ["Validation multi-niveaux", "Notifications intelligentes", "Gestion documentaire", "Traçabilité complète"],
    icon: SyncIcon,
    tag: null,
  },
  {
    title: "Automatisation Marketing",
    desc: "Campagnes, réseaux sociaux, contenus générés par IA.",
    bullets: ["Planification contenus", "Publication multi-plateformes", "Génération de visuels IA", "Analytics automatisés"],
    icon: GridIcon,
    tag: null,
  },
  {
    title: "Gestion RH & Onboarding",
    desc: "Recrutement, formation, gestion administrative du personnel.",
    bullets: ["Automatisation des candidatures", "Onboarding collaborateurs", "Suivi des congés", "Fiches de paie simplifiées"],
    icon: BoltIcon,
    tag: null,
  },
  {
    title: "Reporting & Tableaux de Bord",
    desc: "Dashboards temps réel connectés à vos outils.",
    bullets: ["KPIs en temps réel", "Alertes personnalisées", "Rapports automatisés", "Intégration multi-sources"],
    icon: SyncIcon,
    tag: null,
  },
  {
    title: "Accompagnement & Formation",
    desc: "On vous forme, on vous accompagne, on reste disponibles.",
    bullets: ["Formation de vos équipes", "Documentation complète", "Support réactif", "Mises à jour incluses"],
    icon: BrainIcon,
    tag: "Inclus",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="container-tight section">
      <style jsx>{cardAnimationStyle}</style>
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both",
        }}>Nos Services sur Mesure</h2>
        <p className="text-white/70 max-w-3xl mx-auto text-lg" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both",
        }}>
          Solutions d&apos;automatisation intelligente adaptées à vos besoins spécifiques. Nous analysons vos processus et créons des outils qui s&apos;intègrent parfaitement à votre façon de travailler.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 flex-wrap" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both",
        }}>
          <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white/70 hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-all duration-300">👥 Accompagnement personnalisé</span>
          <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white/70 hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-all duration-300">⚙️ Sur mesure</span>
          <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white/70 hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-all duration-300">🚀 Clé en main</span>
        </div>
      </div>

      <div>
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((c, i) => (
            <div
              key={c.title}
              className="service-card group rounded-2xl glass border border-white/10 p-6 hover:border-indigo-400/30 transition-all relative overflow-hidden magnetic hover:shadow-[0_0_40px_rgba(99,102,241,.2)]"
            >
              <div
                onMouseMove={(e) => {
                  const t = e.currentTarget as HTMLDivElement;
                  const r = t.getBoundingClientRect();
                  const x = ((e.clientX - r.left) / r.width) * 100;
                  t.style.setProperty("--mx", `${x}%`);
                }}
              >
                <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_200px_at_var(--mx,50%)_-10%,rgba(99,102,241,.28),transparent_60%)]" />
                {c.tag && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 group-hover:shadow-[0_0_20px_rgba(99,102,241,.4)] transition-all duration-300">
                    {c.tag}
                  </div>
                )}
                <c.icon className="size-10 text-indigo-300 mb-4 group-hover:scale-110 group-hover:text-indigo-200 transition-transform duration-300" />
                <div className="font-semibold text-white text-lg group-hover:text-indigo-200 transition-colors duration-300">{c.title}</div>
                <p className="text-sm text-white/70 mt-2 leading-relaxed group-hover:text-white/85 transition-colors duration-300">{c.desc}</p>
                <ul className="text-xs mt-4 space-y-2 text-white/70">
                  {c.bullets.map((b: string) => (
                    <li key={b} className="flex items-center gap-2 group-hover:text-white/85 transition-colors duration-300">
                      <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.5)] group-hover:shadow-[0_0_12px_rgba(52,211,153,.8)] transition-all duration-300" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s both",
        }}>
          <Link href="#cta" className="btn-primary">
            Demander un audit gratuit
          </Link>
          <Link href="#pricing" className="btn-ghost">
            Voir nos offres
          </Link>
        </div>
      </div>
    </section>
  );
}
