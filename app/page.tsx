"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import NewHero from "@/components/sections/new-hero";
import NewFeatures from "@/components/sections/new-features";
import NewUseCases from "@/components/sections/new-use-cases";
import NewBlog from "@/components/sections/new-blog";
import NewCTA from "@/components/sections/new-cta";
import ScrollProgress from "@/components/scroll-progress";
import ScrollToTop from "@/components/scroll-to-top";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="relative overflow-x-hidden">
        <NewHero />
        <div id="features">
          <NewFeatures />
        </div>
        <div id="use-cases">
          <NewUseCases />
        </div>
        <div id="blog">
          <NewBlog />
        </div>
        <NewCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
