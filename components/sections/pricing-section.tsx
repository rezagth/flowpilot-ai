"use client";

import Link from "next/link";

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "Sur devis",
    period: "",
    features: ["1 automatisation au choix", "Formation incluse", "Support par email", "Documentation complète", "Mises à jour 3 mois"],
    highlight: false,
    cta: "Démarrer",
  },
  {
    name: "Business",
    price: "Sur devis",
    period: "",
    features: [
      "3-5 automatisations",
      "Assistant IA sur mesure",
      "Formation équipes",
      "Support prioritaire",
      "Mises à jour 1 an",
      "Dashboards personnalisés",
      "Accompagnement dédié",
    ],
    highlight: true,
    cta: "Offre recommandée",
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    features: [
      "Automatisations illimitées",
      "Stratégie digitale globale",
      "Chef de projet dédié",
      "Support 24/7",
      "Mises à jour illimitées",
      "SLA garantis",
      "Audit trimestriel",
    ],
    highlight: false,
    cta: "Nous contacter",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="container-tight section">
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

        .pricing-card {
          animation: fadeInUpCard 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .pricing-card:nth-child(1) { animation-delay: 0s; }
        .pricing-card:nth-child(2) { animation-delay: 0.15s; }
        .pricing-card:nth-child(3) { animation-delay: 0.3s; }

        .pricing-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
          transition: left 0.6s;
        }

        .pricing-card:hover::before {
          left: 100%;
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          border-color: rgba(99, 102, 241, 0.8) !important;
          box-shadow: 0 0 50px rgba(99, 102, 241, 0.4), inset 0 0 20px rgba(99, 102, 241, 0.05) !important;
        }

        .pricing-highlight {
          animation: fadeInUpCard 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
          box-shadow: 0 0 80px rgba(99, 102, 241, 0.35) !important;
          border-color: rgba(99, 102, 241, 0.8) !important;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .pricing-highlight {
            transform: scale(1);
          }
        }

        .pricing-card:not(.pricing-highlight):hover {
          border-color: rgba(99, 102, 241, 0.6) !important;
        }

        .feature-item {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .pricing-card:hover .feature-item {
          color: rgba(255, 255, 255, 0.95);
        }

        .check-icon {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .pricing-card:hover .check-icon {
          transform: scale(1.2) rotate(10deg);
          color: #4ade80;
        }
      `}</style>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both",
          "@keyframes fadeInUpSlow": "0% { opacity: 0; transform: translateY(40px); filter: blur(4px); } 100% { opacity: 1; transform: translateY(0); filter: blur(0); }"
        }}>Nos Offres</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both",
          "@keyframes fadeInUpSlow": "0% { opacity: 0; transform: translateY(40px); filter: blur(4px); } 100% { opacity: 1; transform: translateY(0); filter: blur(0); }"
        }}>Des formules flexibles adaptées à la taille de votre entreprise et à vos besoins.</p>
      </div>

      <div>
        <div className="grid md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((p, i) => (
            <div
              key={p.name}
              className={`pricing-card group rounded-2xl p-7 transition-all ${
                p.highlight
                  ? "pricing-highlight glass-strong gradient-border z-10"
                  : "glass border border-white/10"
              }`}
            >
              {p.highlight && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold shadow-lg group-hover:shadow-[0_0_20px_rgba(99,102,241,.8)] transition-all duration-300">
                  Most Popular
                </div>
              )}
              <div className="text-white/80 font-medium text-sm uppercase tracking-wider group-hover:text-indigo-300 transition-colors duration-300">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold text-white group-hover:text-indigo-200 transition-colors duration-300">{p.price}</span>
                <span className="text-white/60 text-sm">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {p.features.map((f, idx) => (
                  <li key={f} className="feature-item flex items-start gap-3" style={{ animationDelay: `${idx * 50}ms` }}>
                    <svg className="check-icon size-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#cta"
                className={`mt-8 block w-full text-center rounded-xl px-4 py-3 font-semibold transition-all ${
                  p.highlight ? "btn-primary" : "btn-ghost hover:border-indigo-400/30 hover:bg-indigo-500/10"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
