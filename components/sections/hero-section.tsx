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
            transform: translateY(-50px);
            filter: blur(12px);
          }
          20% {
            opacity: 0;
            transform: translateY(-40px);
            filter: blur(10px);
          }
          40% {
            opacity: 0.3;
            transform: translateY(-30px);
            filter: blur(8px);
          }
          60% {
            opacity: 0.7;
            transform: translateY(-15px);
            filter: blur(4px);
          }
          80% {
            opacity: 0.9;
            transform: translateY(-5px);
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
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.25), inset 0 0 15px rgba(59, 130, 246, 0.08);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.15);
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
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 0 40px rgba(59, 130, 246, 0.4), 0 15px 30px rgba(59, 130, 246, 0.2);
        }

        .btn-primary:active {
          transform: translateY(-2px) scale(0.98);
        }

        .btn-ghost {
          position: relative;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
        }

        .btn-ghost::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -100%;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent);
          transition: left 0.6s;
        }

        .btn-ghost:hover::after {
          left: 100%;
        }

        .btn-ghost:hover {
          transform: translateY(-2px) scale(1.01);
          border-color: rgba(59, 130, 246, 0.6);
          background: rgba(59, 130, 246, 0.08);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
        }

        .stat-item {
          position: relative;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: float 4s ease-in-out infinite;
        }

        .stat-item:nth-child(1) {
          animation-delay: 0s;
        }

        .stat-item:nth-child(2) {
          animation-delay: 0.8s;
        }

        .stat-item:nth-child(3) {
          animation-delay: 1.6s;
        }

        .stat-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0));
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .stat-item:hover::before {
          opacity: 1;
        }

        .stat-item:hover {
          transform: translateY(-4px) scale(1.04);
          background: rgba(59, 130, 246, 0.04);
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.25);
        }

        .stat-number {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: breathe 5s ease-in-out infinite;
        }

        .stat-item:nth-child(1) .stat-number {
          animation-delay: 0s;
        }

        .stat-item:nth-child(2) .stat-number {
          animation-delay: 0.8s;
        }

        .stat-item:nth-child(3) .stat-number {
          animation-delay: 1.6s;
        }

        .stat-item:hover .stat-number {
          color: #60a5fa;
          transform: scale(1.1);
        }
      `}</style>

      <div className="relative z-10 text-center py-0 md:py-1">
        <motion.div 
          initial={{ opacity: 0, y: -40, filter: "blur(15px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          className="badge inline-flex items-center gap-2 glass-strong rounded-full px-4 py-2 text-xs md:text-sm text-white/85 border border-blue-400/20 mb-4 md:mb-6 shadow-[0_0_15px_rgba(59,130,246,.1)] hover:shadow-[0_0_30px_rgba(59,130,246,.25)] transition-all duration-500"
        >
          <span className="relative size-2 rounded-full bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,.25)]">
            <span className="absolute inset-0 bg-blue-400 rounded-full animate-pulse opacity-50" />
          </span>
          <span className="font-medium">Elyron Labs - Solutions IA Avancée</span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="hidden sm:inline text-white/60">Transformation Intelligente</span>
        </motion.div>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
          <motion.span
            initial={{ opacity: 0, y: 60, filter: "blur(20px)", scale: 0.92 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
            style={{ display: "inline-block" }}
          >
            Transformez votre
          </motion.span>
          <br />
          <motion.span 
            initial={{ opacity: 0, y: 60, filter: "blur(20px)", scale: 0.92 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.1 }}
            className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent block mt-2"
          >
            Entreprise avec l&apos;IA
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(18px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.6 }}
        >
          <p className="hero-subtitle mt-4 md:mt-5 text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Solutions d&apos;IA avancée et automatisation intelligente. Optimisez vos processus, réduisez les coûts, et accélérez votre croissance avec les technologies de demain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 2.1 }}
        >
          <p className="mt-3 md:mt-4 text-xs md:text-sm text-white/65 font-medium max-w-3xl mx-auto tracking-wide">
            Plateforme de ML avancée • Intégration système • Support dédié
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94], delay: 2.5 }}
        >
          <p className="mt-2 md:mt-3 text-xs md:text-sm text-white/55 max-w-3xl mx-auto">
            Déployé dans des organisations Fortune 500 • Réduction de 40% des coûts opérationnels • Déploiement en 2-4 semaines
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 45, filter: "blur(15px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 3 }}
          className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#cta" className="btn-primary magnetic shadow-[0_0_30px_rgba(59,130,246,.3)] px-8 py-3 hover:shadow-[0_0_45px_rgba(59,130,246,.5)]">
            Commencer Gratuitement
          </Link>
          <Link href="#services" className="btn-ghost magnetic px-8 py-3">
            En savoir plus
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 3.5 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto py-8 border-y border-white/10"
        >
          {[
            { value: 500, suffix: "+", label: "Clients", decimals: 0 },
            { value: 98, suffix: "%", label: "Satisfaction", decimals: 0 },
            { value: 40, suffix: "%", label: "Économies", decimals: 0 },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.8, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94], delay: 4 + i * 0.2 }}
              className="stat-item"
            >
              <div className="stat-number text-2xl md:text-3xl font-bold text-white mb-1">
                <AnimatedNumber value={item.value} delay={4 + i * 0.2} decimals={item.decimals} />
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
