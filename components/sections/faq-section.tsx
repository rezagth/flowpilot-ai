"use client";

import Link from "next/link";

const FAQ_ITEMS = [
  {
    q: "Combien de temps prend un projet ?",
    a: "Entre 2 et 8 semaines selon la complexité. Nous commençons toujours par un audit gratuit pour évaluer précisément la durée et le budget nécessaires.",
  },
  {
    q: "C'est adapté à ma petite entreprise ?",
    a: "Absolument ! Nous travaillons principalement avec des PME de 5 à 50 personnes. Nos solutions sont évolutives et s'adaptent à votre taille et votre budget.",
  },
  {
    q: "Que se passe-t-il après la mise en place ?",
    a: "Nous formons vos équipes, fournissons une documentation complète et assurons le support. Les mises à jour et l'assistance sont incluses selon votre formule.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "Oui, nous appliquons les standards de sécurité les plus stricts. Vos données restent les vôtres, hébergées en France ou en Europe selon vos besoins.",
  },
  {
    q: "Puis-je commencer petit et évoluer ?",
    a: "C'est même notre approche recommandée ! Commencez avec une automatisation, mesurez les résultats, puis ajoutez progressivement d'autres processus.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="container-tight section">
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

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            max-height: 500px;
          }
        }

        .faq-section-title {
          animation: fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
        }

        .faq-container {
          animation: fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both;
        }

        .faq-item {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .faq-item:hover {
          background: rgba(99, 102, 241, 0.05);
          border-radius: 8px;
          padding-left: 8px;
          padding-right: 8px;
          margin-left: -8px;
          margin-right: -8px;
        }

        .faq-summary {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .faq-item:hover .faq-summary {
          color: #a5b4fc;
        }

        .faq-icon {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .faq-item[open] .faq-icon {
          transform: rotate(45deg) scale(1.2);
          color: #a5b4fc;
          background: rgba(99, 102, 241, 0.2) !important;
          border-color: rgba(99, 102, 241, 0.5) !important;
        }

        .faq-answer {
          animation: slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      <h2 className="faq-section-title text-2xl md:text-3xl font-semibold text-white mb-6">Questions fréquentes</h2>
      <div>
        <div className="faq-container rounded-2xl glass border border-white/10 p-5 hover:border-indigo-400/30 transition-all duration-300">
          {FAQ_ITEMS.map((f, i) => (
            <details key={f.q} className="faq-item group border-b border-white/10 py-4 last:border-0">
              <summary className="faq-summary cursor-pointer list-none text-white font-medium flex items-center gap-3 hover:text-indigo-200 transition-colors">
                <span className="faq-icon size-5 rounded-md bg-white/5 border border-white/10 grid place-items-center text-white/70">+</span>
                {f.q}
              </summary>
              <p className="faq-answer mt-2 text-white/70 text-sm ml-8 group-open:text-white/85 transition-colors">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-3" style={{
        animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both"
      }}>
        <Link href="#cta" className="btn-primary">
          Parlons de votre projet
        </Link>
        <Link href="#pricing" className="btn-ghost">
          Voir les offres
        </Link>
      </div>
    </section>
  );
}
