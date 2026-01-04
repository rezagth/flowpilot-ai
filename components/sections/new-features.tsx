"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/card";
import { staggerContainer, slideUp } from "@/components/animations";
import { Brain, Workflow, Plug, TrendingUp, Headphones } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Avancée",
    description: "Algorithmes d'apprentissage automatique de pointe pour des insights précis et des prédictions intelligentes."
  },
  {
    icon: Workflow,
    title: "Automatisation Sans Code",
    description: "Créez des workflows complexes sans écrire une ligne de code grâce à notre interface intuitive."
  },
  {
    icon: Plug,
    title: "Intégrations Seamless",
    description: "Connectez vos outils existants (CRM, ERP, Analytics) en quelques clics pour un écosystème unifié."
  },
  {
    icon: TrendingUp,
    title: "Scalabilité Illimitée",
    description: "Infrastructure cloud évolutive qui s'adapte à votre croissance sans interruption de service."
  },
  {
    icon: Headphones,
    title: "Support Expert 24/7",
    description: "Équipe dédiée disponible 24/7 pour vous accompagner à chaque étape de votre transformation."
  }
];

export default function NewFeatures() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-tight relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={slideUp} className="text-4xl md:text-5xl font-bold mb-4">
            Fonctionnalités <span className="gradient-text">Puissantes</span>
          </motion.h2>
          <motion.p variants={slideUp} className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour transformer votre entreprise avec l&apos;IA
          </motion.p>
        </motion.div>
        
        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={slideUp}>
                <Card>
                  <div className="flex flex-col items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
