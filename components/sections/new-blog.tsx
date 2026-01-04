"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { staggerContainer, slideUp } from "@/components/animations";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "IA et Automatisation: Le Futur du Travail",
    excerpt: "Découvrez comment l'intelligence artificielle transforme les méthodes de travail et booste la productivité des équipes modernes.",
    date: "Jan 2026",
    readTime: "5 min",
    category: "IA & Innovation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
  },
  {
    title: "5 Cas d'Usage IA pour Votre Industrie",
    excerpt: "Explorez les applications concrètes de l'IA dans différents secteurs: finance, retail, santé, logistique et manufacturing.",
    date: "Déc 2025",
    readTime: "7 min",
    category: "Cas d'Usage",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
  },
  {
    title: "Comment Mesurer le ROI de l'IA",
    excerpt: "Guide complet pour évaluer l'impact business de vos investissements en intelligence artificielle et automatisation.",
    date: "Déc 2025",
    readTime: "6 min",
    category: "Business",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }
];

export default function NewBlog() {
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
            Blog & <span className="gradient-text">Ressources</span>
          </motion.h2>
          <motion.p variants={slideUp} className="text-xl text-slate-300 max-w-2xl mx-auto">
            Insights, tendances et guides pratiques sur l&apos;IA et l&apos;automatisation
          </motion.p>
        </motion.div>
        
        {/* Articles Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {articles.map((article, index) => (
            <motion.div key={index} variants={slideUp}>
              <Card className="h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 -m-6 mb-6 rounded-t-2xl overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col gap-4">
                  <Badge variant="primary">{article.category}</Badge>
                  
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-slate-500 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full group mt-2">
                    Lire l&apos;article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button variant="ghost" size="lg">
            Voir Tous les Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
