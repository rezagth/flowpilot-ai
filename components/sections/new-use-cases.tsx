"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/card";
import { staggerContainer, slideUp } from "@/components/animations";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Directrice Digital",
    company: "TechStart Paris",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    content: "Elyrion Labs a transformé notre façon de travailler. L'automatisation IA a augmenté notre productivité de 45% en 3 mois.",
    rating: 5
  },
  {
    name: "Jean-Pierre Leclerc",
    role: "CTO",
    company: "Finance Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    content: "Solutions IA de pointe et support exceptionnel. Notre ROI a dépassé toutes nos attentes. Une équipe vraiment professionnelle.",
    rating: 5
  },
  {
    name: "Sophie Bernard",
    role: "CEO",
    company: "Digital Ventures",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    content: "Intégration seamless avec nos outils existants. L'équipe Elyrion comprend vraiment les besoins des entreprises modernes.",
    rating: 5
  },
  {
    name: "Marc Antoine",
    role: "Operations Manager",
    company: "LogistiCorp",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    content: "Automatisation intelligente qui a révolutionné notre supply chain. Support réactif et expertise technique impressionnante.",
    rating: 5
  }
];

export default function NewUseCases() {
  return (
    <section className="section relative overflow-hidden bg-slate-900/50">
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
            Ils Nous Font <span className="gradient-text">Confiance</span>
          </motion.h2>
          <motion.p variants={slideUp} className="text-xl text-slate-300 max-w-2xl mx-auto">
            Découvrez comment nos clients transforment leur business avec Elyrion Labs
          </motion.p>
        </motion.div>
        
        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={slideUp}>
              <Card>
                <div className="flex flex-col gap-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-slate-300 text-lg leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
