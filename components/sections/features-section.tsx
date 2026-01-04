"use client";

const FEATURES = [
  ["Audit Gratuit", "Analyse de vos processus et identification des gains potentiels.", "🔍 100% gratuit"],
  ["Stratégie Personnalisée", "Définition d'un plan d'action adapté à votre budget.", "🎯 Sur mesure"],
  ["Développement", "Création de vos outils d'automatisation et IA.", "⚙️ Agile"],
  ["Formation & Handover", "Formation de vos équipes pour une prise en main facile.", "🎓 Accompagnement"],
  ["Déploiement", "Mise en production progressive avec tests et validations.", "🚀 Sécurisé"],
  ["Support Continu", "Maintenance, optimisations et évolutions incluses.", "👥 Réactif"],
  ["Mesure des Résultats", "Suivi des KPIs et reporting mensuel.", "📊 Transparent"],
  ["Amélioration Continue", "Optimisations régulières basées sur l'usage.", "🔄 Évolutif"],
  ["Documentation Complète", "Guides, tutoriels vidéo et base de connaissance.", "📖 Détaillé"],
];

export default function FeaturesSection() {
  return (
    <section id="features" className="container-tight section">
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

        .feature-card {
          animation: fadeInUpCard 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .feature-card:nth-child(1) { animation-delay: 0s; }
        .feature-card:nth-child(2) { animation-delay: 0.08s; }
        .feature-card:nth-child(3) { animation-delay: 0.16s; }
        .feature-card:nth-child(4) { animation-delay: 0.24s; }
        .feature-card:nth-child(5) { animation-delay: 0.32s; }
        .feature-card:nth-child(6) { animation-delay: 0.4s; }
        .feature-card:nth-child(7) { animation-delay: 0.48s; }
        .feature-card:nth-child(8) { animation-delay: 0.56s; }
        .feature-card:nth-child(9) { animation-delay: 0.64s; }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.08), transparent);
          transition: left 0.5s;
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          border-color: rgba(59, 130, 246, 0.6) !important;
          box-shadow: 0 0 35px rgba(59, 130, 246, 0.3), inset 0 0 15px rgba(59, 130, 246, 0.03) !important;
        }

        .feature-badge {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .feature-card:hover .feature-badge {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
        }

        @keyframes fadeInUpSlow {
          0% { opacity: 0; transform: translateY(40px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both",
        }}>Notre Méthode</h2>
        <p className="text-white/70 max-w-3xl mx-auto text-lg" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both",
        }}>
          Une approche sur mesure pour garantir le succès de votre transformation digitale.
        </p>
      </div>

      <div>
        <div className="grid md:grid-cols-3 gap-5">
          {FEATURES.map(([t, d, badge], i) => (
            <div key={t as string} className="feature-card group rounded-2xl glass border border-white/10 p-6 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="text-white font-semibold text-lg group-hover:text-indigo-200 transition-colors duration-300">{(t as string).replace(/"/g, "&quot;")}</div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-300">{d}</p>
              <div className="mt-4">
                <span className="feature-badge inline-block px-2.5 py-1 text-[11px] rounded-md bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 font-medium group-hover:bg-indigo-500/20 group-hover:border-indigo-400/50 transition-all duration-300">
                  {badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
