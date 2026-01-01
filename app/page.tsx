"use client";

import { lazy, Suspense } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/sections/hero-section";
import SectionDivider from "@/components/section-divider";
import Footer from "@/components/footer";

// Lazy load heavy sections for better initial performance
const AutomationDemo = lazy(() => import("@/components/automation-demo"));
const ServicesSection = lazy(() => import("@/components/sections/services-section"));
const FeaturesSection = lazy(() => import("@/components/sections/features-section"));
const UseCasesSection = lazy(() => import("@/components/sections/use-cases-section"));
const IntegrationsSection = lazy(() => import("@/components/sections/integrations-section"));
const CaseStudiesSection = lazy(() => import("@/components/sections/case-studies-section"));
const TestimonialsSection = lazy(() => import("@/components/sections/testimonials-section"));
const PricingSection = lazy(() => import("@/components/sections/pricing-section"));
const ResourcesSection = lazy(() => import("@/components/sections/resources-section"));
const CTASection = lazy(() => import("@/components/sections/cta-section"));
const FAQSection = lazy(() => import("@/components/sections/faq-section"));

const SectionFallback = () => (
  <div className="container-tight section py-12">
    <div className="h-96 bg-gradient-to-br from-white/5 to-transparent rounded-2xl animate-pulse" />
  </div>
);

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <HeroSection />

      {/* Live automation demo */}
      <div className="container-tight section">
        <div className="mx-auto w-full max-w-5xl aspect-[16/10] rounded-2xl glass-strong border border-white/10 overflow-hidden relative">
          <Suspense fallback={<div className="w-full h-full bg-white/5" />}>
            <AutomationDemo />
          </Suspense>
        </div>
      </div>

      <SectionDivider />
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>

      <SectionDivider />
      <Suspense fallback={<SectionFallback />}>
        <FeaturesSection />
      </Suspense>

      <SectionDivider />
      <Suspense fallback={<SectionFallback />}>
        <UseCasesSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <IntegrationsSection />
      </Suspense>

      <SectionDivider />
      <Suspense fallback={<SectionFallback />}>
        <CaseStudiesSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>

      <SectionDivider />
      <Suspense fallback={<SectionFallback />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ResourcesSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>

      <Footer />
    </main>
  );
}
