"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import AnimatedCounter from "@/components/animated-counter";
import { fadeIn, slideUp, staggerContainer } from "@/components/animations";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function NewHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-deep">
        <div className="grid-bg" />
      </div>
      
      {/* Content */}
      <motion.div 
        className="container-tight relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={slideUp} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Solutions IA de Nouvelle Génération</span>
          </div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          variants={slideUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Transformez Votre Entreprise
          <br />
          <span className="gradient-text">Avec l&apos;Intelligence Artificielle</span>
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          variants={slideUp}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12"
        >
          Elyrion Labs vous accompagne dans votre transformation digitale avec des solutions IA avancées, 
          automatisation intelligente et expertise de pointe pour accélérer votre croissance.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          variants={slideUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="md" className="group">
            Réserver une Démo
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="ghost" size="md" className="group">
            <Zap className="mr-2 w-4 h-4" />
            Découvrir Nos Solutions
          </Button>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          variants={fadeIn}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <AnimatedCounter target={500} suffix="+" duration={2000} className="text-3xl md:text-4xl font-bold gradient-text mb-2" />
            <div className="text-slate-400 mt-2">Entreprises Accompagnées</div>
          </div>
          <div className="text-center">
            <AnimatedCounter target={98} suffix="%" duration={2000} className="text-3xl md:text-4xl font-bold gradient-text mb-2" />
            <div className="text-slate-400 mt-2">Taux de Satisfaction</div>
          </div>
          <div className="text-center">
            <AnimatedCounter target={40} prefix="+" suffix="%" duration={2000} className="text-3xl md:text-4xl font-bold gradient-text mb-2" />
            <div className="text-slate-400 mt-2">Gain de Productivité</div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
    </section>
  );
}
