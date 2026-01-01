"use client";

const CASE_STUDIES = [
  {
    company: "Cabinet d'expertise",
    logo: "💼",
    metric: "20h",
    label: "Gagnées par semaine",
    copy: "Automatisation de la saisie comptable et génération de rapports. L'équipe se concentre sur le conseil plutôt que l'administratif.",
    size: "15 collaborateurs",
  },
  {
    company: "Agence immobilière",
    logo: "🏠",
    metric: "+45%",
    label: "Conversions prospects",
    copy: "Assistant IA qualifie les leads 24/7, matching automatique biens/clients. Taux de conversion multiplié par 1.5 en 4 mois.",
    size: "8 agents",
  },
  {
    company: "E-shop mode",
    logo: "🛍️",
    metric: "85%",
    label: "SAV automatisé",
    copy: "Chatbot IA gère les questions courantes, suivi colis automatique. L'équipe traite 3x plus de commandes avec le même effectif.",
    size: "12 personnes",
  },
  {
    company: "Service à domicile",
    logo: "👨‍🔧",
    metric: "30%",
    label: "Km économisés",
    copy: "Optimisation des tournées, planning intelligent, facturation auto. Meilleure rentabilité et satisfaction client en hausse.",
    size: "25 intervenants",
  },
  {
    company: "Restaurant & Traiteur",
    logo: "🍴",
    metric: "+60%",
    label: "Réservations en ligne",
    copy: "Booking intelligent, relances SMS auto, gestion stocks optimisée. Taux de remplissage et CA en forte hausse.",
    size: "2 établissements",
  },
  {
    company: "Centre de formation",
    logo: "🏫",
    metric: "95%",
    label: "Admin automatisée",
    copy: "Inscription en ligne, génération certificats, envoi convocations. L'équipe se concentre sur la pédagogie.",
    size: "40 formateurs",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="container-tight section">
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

        .case-card {
          animation: fadeInUpCard 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .case-card:nth-child(1) { animation-delay: 0s; }
        .case-card:nth-child(2) { animation-delay: 0.1s; }
        .case-card:nth-child(3) { animation-delay: 0.2s; }
        .case-card:nth-child(4) { animation-delay: 0.3s; }
        .case-card:nth-child(5) { animation-delay: 0.4s; }
        .case-card:nth-child(6) { animation-delay: 0.5s; }

        .case-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
          transition: left 0.6s;
        }

        .case-card:hover::before {
          left: 100%;
        }

        .case-card:hover {
          transform: translateY(-8px);
          border-color: rgba(99, 102, 241, 0.8) !important;
          box-shadow: 0 0 50px rgba(99, 102, 241, 0.4), inset 0 0 20px rgba(99, 102, 241, 0.05) !important;
        }

        .metric-value {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .case-card:hover .metric-value {
          transform: scale(1.08);
        }
      `}</style>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both",
          "@keyframes fadeInUpSlow": "0% { opacity: 0; transform: translateY(40px); filter: blur(4px); } 100% { opacity: 1; transform: translateY(0); filter: blur(0); }"
        }}>Ils nous font confiance</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both",
          "@keyframes fadeInUpSlow": "0% { opacity: 0; transform: translateY(40px); filter: blur(4px); } 100% { opacity: 1; transform: translateY(0); filter: blur(0); }"
        }}>Découvrez comment nos clients PME ont transformé leur quotidien.</p>
      </div>

      <div>
        <div className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c, i) => (
            <div key={c.company} className="case-card rounded-2xl glass border border-white/10 p-6 hover:border-indigo-400/30 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">{c.logo}</div>
                  <div className="text-white font-semibold text-lg group-hover:text-indigo-200 transition-colors duration-300">{c.company}</div>
                  <div className="text-white/50 text-xs mt-0.5 group-hover:text-white/70 transition-colors duration-300">{c.size}</div>
                </div>
              </div>
              <div className="my-5 py-4 border-y border-white/10 group-hover:border-indigo-400/30 transition-colors duration-300">
                <div className="metric-value text-4xl font-bold text-white group-hover:text-indigo-300 transition-colors">{c.metric}</div>
                <div className="text-white/70 text-sm font-medium mt-1 group-hover:text-white/85 transition-colors duration-300">{c.label}</div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors duration-300">{c.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
