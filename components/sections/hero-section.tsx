"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

// Composant pour animer les chiffres
function AnimatedNumber({ value, delay, decimals = 0 }: { value: number; delay: number; decimals?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString();
  });

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 3.5,
      delay,
      ease: [0.33, 1, 0.68, 1],
    });
    return controls.stop;
  }, [count, value, delay]);

  return <motion.span>{rounded}</motion.span>;
}

export default function HeroSection() {
  return (
    <section className="container-tight section relative overflow-hidden">
      <style jsx>{`
        @keyframes fadeInDownSlow {
          0% {
            opacity: 0;
            transform: translateY(-80px);
            filter: blur(20px);
          }
          15% {
            opacity: 0;
            transform: translateY(-65px);
            filter: blur(17px);
          }
          30% {
            opacity: 0.15;
            transform: translateY(-50px);
            filter: blur(14px);
          }
          45% {
            opacity: 0.35;
            transform: translateY(-35px);
            filter: blur(10px);
          }
          60% {
            opacity: 0.55;
            transform: translateY(-20px);
            filter: blur(7px);
          }
          75% {
            opacity: 0.75;
            transform: translateY(-10px);
            filter: blur(4px);
          }
          90% {
            opacity: 0.92;
            transform: translateY(-3px);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes fadeInUpSlow {
          0% {
            opacity: 0;
            transform: translateY(80px);
            filter: blur(20px);
          }
          15% {
            opacity: 0;
            transform: translateY(65px);
            filter: blur(17px);
          }
          30% {
            opacity: 0.15;
            transform: translateY(50px);
            filter: blur(14px);
          }
          45% {
            opacity: 0.35;
            transform: translateY(35px);
            filter: blur(10px);
          }
          60% {
            opacity: 0.55;
            transform: translateY(20px);
            filter: blur(7px);
          }
          75% {
            opacity: 0.75;
            transform: translateY(10px);
            filter: blur(4px);
          }
          90% {
            opacity: 0.92;
            transform: translateY(3px);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
            filter: blur(10px);
          }
          30% {
            opacity: 0.3;
            filter: blur(8px);
          }
          60% {
            opacity: 0.7;
            filter: blur(3px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
            filter: blur(10px);
          }
          30% {
            opacity: 0.3;
            filter: blur(8px);
          }
          60% {
            opacity: 0.7;
            filter: blur(3px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3), inset 0 0 20px rgba(99, 102, 241, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(99, 102, 241, 0.6), inset 0 0 30px rgba(99, 102, 241, 0.2);
          }
        }

        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes breathe {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
            filter: blur(15px);
          }
          15% {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
            filter: blur(12px);
          }
          30% {
            opacity: 0.2;
            transform: translateY(30px) scale(0.97);
            filter: blur(9px);
          }
          45% {
            opacity: 0.4;
            transform: translateY(20px) scale(0.98);
            filter: blur(6px);
          }
          60% {
            opacity: 0.6;
            transform: translateY(12px) scale(0.99);
            filter: blur(4px);
          }
          75% {
            opacity: 0.8;
            transform: translateY(6px) scale(0.995);
            filter: blur(2px);
          }
          90% {
            opacity: 0.95;
            transform: translateY(2px) scale(1);
            filter: blur(0.5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes subtitleFlow {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
            filter: blur(18px);
          }
          20% {
            opacity: 0.1;
            transform: translateY(32px) scale(0.97);
            filter: blur(14px);
          }
          35% {
            opacity: 0.3;
            transform: translateY(24px) scale(0.98);
            filter: blur(10px);
          }
          50% {
            opacity: 0.5;
            transform: translateY(16px) scale(0.99);
            filter: blur(7px);
          }
          65% {
            opacity: 0.7;
            transform: translateY(10px) scale(0.995);
            filter: blur(4px);
          }
          80% {
            opacity: 0.85;
            transform: translateY(4px) scale(1);
            filter: blur(2px);
          }
          95% {
            opacity: 0.97;
            transform: translateY(1px) scale(1);
            filter: blur(0.3px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .badge {
          animation: fadeInDownSlow 5s cubic-bezier(0.19, 1, 0.22, 1) 0.3s both;
        }

        .hero-title {
          line-height: 1.1;
        }

        .hero-subtitle {
          animation: fadeInUpSlow 5.5s cubic-bezier(0.19, 1, 0.22, 1) 0.8s both;
        }

        .btn-container {
          animation: fadeInUpSlow 5s cubic-bezier(0.19, 1, 0.22, 1) 3.5s both;
        }

        .stats-container {
          animation: fadeInUpSlow 5s cubic-bezier(0.19, 1, 0.22, 1) 4.2s both;
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.8s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 0 50px rgba(99, 102, 241, 0.5), 0 20px 40px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:active {
          transform: translateY(-2px) scale(0.98);
        }

        .btn-ghost {
          position: relative;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
        }

        .btn-ghost::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -100%;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.8), transparent);
          transition: left 0.8s;
        }

        .btn-ghost:hover::after {
          left: 100%;
        }

        .btn-ghost:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: rgba(99, 102, 241, 0.8);
          background: rgba(99, 102, 241, 0.15);
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
        }

        .stat-item {
          position: relative;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: float 5s ease-in-out infinite;
        }

        .stat-item:nth-child(1) {
          animation-delay: 0s;
        }

        .stat-item:nth-child(2) {
          animation-delay: 1s;
        }

        .stat-item:nth-child(3) {
          animation-delay: 2s;
        }

        .stat-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0), rgba(99, 102, 241, 0.1), rgba(99, 102, 241, 0));
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.6s;
        }

        .stat-item:hover::before {
          opacity: 1;
        }

        .stat-item:hover {
          transform: translateY(-8px) scale(1.08);
          background: rgba(99, 102, 241, 0.05);
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
        }

        .stat-number {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: breathe 6s ease-in-out infinite;
        }

        .stat-item:nth-child(1) .stat-number {
          animation-delay: 0s;
        }

        .stat-item:nth-child(2) .stat-number {
          animation-delay: 1s;
        }

        .stat-item:nth-child(3) .stat-number {
          animation-delay: 2s;
        }

        .stat-item:hover .stat-number {
          color: #a5b4fc;
          transform: scale(1.15);
        }
      `}</style>

      <div className="relative z-10 text-center py-0 md:py-1">
        <motion.div 
          initial={{ opacity: 0, y: -60, filter: "blur(25px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="badge inline-flex items-center gap-2 glass-strong rounded-full px-4 py-2 text-xs md:text-sm text-white/90 border border-white/15 mb-4 md:mb-6 shadow-[0_0_20px_rgba(99,102,241,.15)] hover:shadow-[0_0_40px_rgba(99,102,241,.4)] transition-all duration-500"
        >
          <span className="relative size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_4px_rgba(52,211,153,.35)]">
            <span className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse opacity-60" />
          </span>
          <span className="font-medium">Agence d&apos;Automatisation IA pour PME</span>
          <span className="hidden sm:inline text-white/50">•</span>
          <span className="hidden sm:inline text-white/70">Sur Mesure</span>
        </motion.div>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-white">
          <motion.span
            initial={{ opacity: 0, y: 80, filter: "blur(30px)", scale: 0.85 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            style={{ display: "inline-block" }}
          >
            Gagnez du temps.
          </motion.span>
          <br />
          <motion.span 
            initial={{ opacity: 0, y: 80, filter: "blur(30px)", scale: 0.85 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 1.3 }}
            className="grad-text block mt-2"
          >
            Automatisez l&apos;essentiel.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 70, filter: "blur(25px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 2 }}
        >
          <p className="hero-subtitle mt-3 md:mt-4 text-base md:text-lg text-white/75 max-w-3xl mx-auto leading-relaxed">
            Nous transformons vos processus métier en systèmes intelligents et automatisés. Plus de temps perdu sur les tâches répétitives, plus d&apos;efficacité pour votre équipe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 2.8 }}
        >
          <p className="mt-2 md:mt-3 text-sm md:text-base text-white/80 font-semibold max-w-3xl mx-auto">
            Solutions d&apos;automatisation IA sur mesure • Adaptées à votre métier • Implémentation rapide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(18px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1], delay: 3.5 }}
        >
          <p className="mt-3 md:mt-4 text-sm text-white/60 max-w-3xl mx-auto">
            Déjà +150 PME accompagnées • Gain moyen de 15h/semaine par employé • ROI garanti en 3 mois
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 4.2 }}
          className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#cta" className="btn-primary magnetic shadow-[0_0_50px_rgba(99,102,241,.4)] px-8 py-3">
            Audit Gratuit
          </Link>
          <Link href="#services" className="btn-ghost magnetic px-8 py-3">
            Découvrir nos solutions
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 5 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto py-8 border-y border-white/10"
        >
          {[
            { value: 150, suffix: "+", label: "Entreprises", decimals: 0 },
            { value: 2.4, suffix: "M+", label: "Workflows", decimals: 1 },
            { value: 15, suffix: "h+", label: "Gains/semaine", decimals: 0 },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 5.4 + i * 0.25 }}
              className="stat-item"
            >
              <div className="stat-number text-2xl md:text-3xl font-bold text-white mb-1">
                <AnimatedNumber value={item.value} delay={5.4 + i * 0.25} decimals={item.decimals} />
                {item.suffix}
              </div>
              <div className="text-xs md:text-sm text-white/60">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
