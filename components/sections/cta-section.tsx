"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta" className="container-tight section">
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

        @keyframes shimmerInput {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .cta-card {
          animation: fadeInUpSlow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.08), transparent);
          transition: left 0.5s;
        }

        .cta-card:hover::before {
          left: 100%;
        }

        .cta-card:hover {
          transform: translateY(-8px);
          border-color: rgba(99, 102, 241, 0.8) !important;
          box-shadow: 0 0 60px rgba(99, 102, 241, 0.5), inset 0 0 30px rgba(99, 102, 241, 0.1) !important;
        }

        .cta-input {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cta-input:focus {
          background-color: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.8);
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.3), inset 0 0 20px rgba(99, 102, 241, 0.05);
        }
      `}</style>

      <div>
        <div className="cta-card rounded-2xl glass-strong border border-white/15 p-6 md:p-8 relative overflow-hidden">
          <div className="absolute -inset-px bg-[radial-gradient(600px_200px_at_20%_-10%,rgba(59,130,246,.25),transparent_60%)]" />
          <div className="relative z-10">
            <h3 className="text-white text-2xl md:text-3xl font-semibold">Prêt à gagner du temps ?</h3>
            <p className="text-white/70 mt-2 max-w-2xl">
              Obtenez un audit gratuit de vos processus et découvrez combien de temps vous pourriez économiser chaque semaine.
            </p>
            <form className="mt-5 flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert("Merci ! Nous reviendrons vers vous rapidement."); }}>
              <input
                type="email"
                placeholder="votre@email.fr"
                required
                className="cta-input flex-1 rounded-xl glass border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 hover:border-indigo-400/50 transition-all duration-300"
              />
              <button type="submit" className="btn-primary hover:shadow-[0_0_60px_rgba(99,102,241,.6)]">Demander un audit gratuit</button>
            </form>
            <p className="text-white/50 text-xs mt-3 animate-pulse">✅ Réponse sous 24h • 📞 Premier échange téléphonique offert • 🔒 Sans engagement</p>
          </div>
        </div>
      </div>
    </section>
  );
}
