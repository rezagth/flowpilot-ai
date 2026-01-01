"use client";

import Link from "next/link";

const RESOURCES = [
  {
    t: "Playbook: Automate RevOps in a day",
    d: "Templates pour scorer, router et enrichir avec auditabilité end-to-end.",
    k: ["revops", "crm", "scoring"],
    url: "https://www.hubspot.com/revops",
  },
  {
    t: "Guide: Agent guardrails that work",
    d: "Concevez des agents sûrs avec outils, mémoire, validations et approvals.",
    k: ["agents", "guardrails", "approvals"],
    url: "https://docs.anthropic.com/en/docs/build-with-claude/guardrails",
  },
  {
    t: "Checklist: Integration hygiene",
    d: "Mapping champs, idempotence, backfills et plans de rollback.",
    k: ["integrations", "data", "reliability"],
    url: "https://stripe.com/docs/api/idempotent_requests",
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="container-tight section">
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

        .resource-card {
          animation: fadeInUpCard 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .resource-card:nth-child(1) { animation-delay: 0s; }
        .resource-card:nth-child(2) { animation-delay: 0.1s; }
        .resource-card:nth-child(3) { animation-delay: 0.2s; }

        .resource-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
          transition: left 0.6s;
        }

        .resource-card:hover::before {
          left: 100%;
        }

        .resource-card:hover {
          transform: translateY(-8px);
          border-color: rgba(99, 102, 241, 0.8) !important;
          box-shadow: 0 0 50px rgba(99, 102, 241, 0.4), inset 0 0 20px rgba(99, 102, 241, 0.05) !important;
        }
      `}</style>

      <div className="flex items-center gap-3 mb-3">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-indigo-200 border border-white/10" style={{
          animation: "fadeInUpSlow 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both"
        }}>Guides · Playbooks · Checklists</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3" style={{
        animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both"
      }}>Ressources</h2>
      <p className="text-white/70 mb-6 max-w-2xl" style={{
        animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both"
      }}>3 assets clés pour démarrer vite, sécuriser vos agents et fiabiliser vos intégrations.</p>
      <div>
        <div className="grid md:grid-cols-3 gap-5">
          {RESOURCES.map((p, i) => (
            <div
              key={p.t}
              className="resource-card group rounded-2xl glass border border-white/10 p-5 hover:border-indigo-400/40 bg-gradient-to-br from-white/3 via-white/2 to-transparent"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-white font-semibold group-hover:text-indigo-100 transition-colors duration-300 leading-tight">{p.t}</div>
                <span className="px-2 py-1 rounded-full text-[11px] uppercase tracking-wide bg-indigo-500/15 text-indigo-200 border border-indigo-400/20">PDF</span>
              </div>
              <p className="text-white/70 text-sm mt-2 group-hover:text-white/85 transition-colors duration-300 leading-relaxed">{p.d}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.k.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] text-white/75 bg-white/5 border border-white/10 group-hover:border-indigo-300/30 group-hover:text-white/85 transition-colors duration-300">{tag}</span>
                ))}
              </div>
              <Link
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-indigo-200 text-sm font-semibold group-hover:text-indigo-100 transition-all duration-300"
              >
                Ouvrir
                <span className="inline-block translate-x-0 group-hover:translate-x-0.5 transition-transform duration-300">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
