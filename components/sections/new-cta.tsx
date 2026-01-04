"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import { fadeIn, slideUp, staggerContainer } from "@/components/animations";
import { Calendar, Sparkles } from "lucide-react";

export default function NewCTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      
      <motion.div 
        className="container-tight relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          {/* Badge */}
          <motion.div variants={slideUp} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Consultation Gratuite</span>
            </div>
          </motion.div>
          
          {/* Heading */}
          <motion.h2 variants={slideUp} className="text-4xl md:text-5xl font-bold mb-6">
            Commencez Votre <span className="gradient-text">Transformation IA</span>
          </motion.h2>
          
          {/* Description */}
          <motion.p variants={slideUp} className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Réservez une consultation gratuite avec nos experts IA et découvrez comment 
            nous pouvons propulser votre entreprise vers le futur.
          </motion.p>
          
          {/* CTA Button with Cal.com */}
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group"
              onClick={() => window.open('https://cal.com/infracyb', '_blank')}
            >
              <Calendar className="mr-2 w-5 h-5" />
              Réserver une Démo
            </Button>
            <Button variant="ghost" size="lg">
              Contacter l&apos;Équipe
            </Button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-slate-400"
          >
            <div>✓ Consultation Gratuite</div>
            <div>✓ Sans Engagement</div>
            <div>✓ Réponse en 24h</div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
    </section>
  );
}
