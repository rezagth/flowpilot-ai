import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Starfield from "@/components/starfield";
import ScrollProgress from "@/components/scroll-progress";
import ScrollToTop from "@/components/scroll-to-top";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://flowpilot.ai"),
  title: {
    default: "FlowPilot AI — Automatisation IA & Workflows Intelligents | France",
    template: "%s | FlowPilot AI"
  },
  description: "Automatisation IA pour PME en France. Déployez des workflows intelligents, agents IA, et solutions d'automatisation sur mesure. Expert en IA appliquée pour votre croissance.",
  keywords: [
    "automatisation IA France",
    "workflow automation",
    "agents IA",
    "intégration CRM",
    "automatisation processus",
    "IA entreprise",
    "RPA",
    "automatisation intelligente",
    "agence IA",
    "solution automation",
    "PME automatisation",
    "digitalisation entreprise"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: { 
    canonical: "https://flowpilot.ai",
    languages: {
      'fr-FR': 'https://flowpilot.ai/fr',
      'en-US': 'https://flowpilot.ai/en',
    },
  },
  category: "Technology",
  openGraph: {
    title: "FlowPilot AI — Automatisation IA & Solutions Intelligentes",
    description: "Agence d'automatisation IA pour PME. Workflows, agents IA, et solutions sur mesure pour transformer vos processus.",
    url: "https://flowpilot.ai/",
    siteName: "FlowPilot AI",
    images: [
      { 
        url: "/og.jpg", 
        width: 1200, 
        height: 630, 
        alt: "FlowPilot AI - Automatisation Intelligente",
        type: "image/jpeg"
      }
    ],
    type: "website",
    locale: "fr_FR",
    countryName: "France"
  },
  twitter: {
    card: "summary_large_image",
    site: "@flowpilotai",
    creator: "@flowpilotai",
    title: "FlowPilot AI — Solutions IA & Automatisation",
    description: "Automatisation intelligente pour transformer vos processus métier.",
    images: ["/og.jpg"]
  },
  creator: "FlowPilot AI",
  authors: [{ name: "FlowPilot AI", url: "https://flowpilot.ai" }],
  publisher: "FlowPilot AI",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    interactiveWidget: "resizes-content"
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "FlowPilot AI"
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    date: true,
    url: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh bg-deep relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress />
          <ScrollToTop />
          <Starfield />
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="aurora" />
          <div className="noise" />
          {/* Vignette effect */}
          <div className="fixed inset-0 pointer-events-none z-50" style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, rgba(2,6,23,0.4) 100%)'
          }} />
          {children}
          {/* Structured Data - Organization with Geo Targeting */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://flowpilot.ai",
                name: "FlowPilot AI",
                url: "https://flowpilot.ai",
                logo: "https://flowpilot.ai/logo.png",
                description: "Agence d'automatisation IA pour PME en France. Solutions intelligentes de workflows et agents IA.",
                sameAs: [
                  "https://twitter.com/flowpilotai",
                  "https://www.linkedin.com/company/flowpilotai"
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Service",
                  telephone: "+33-1-XX-XX-XX",
                  areaServed: "FR",
                  email: "contact@flowpilot.ai",
                  availableLanguage: ["fr", "en"]
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Paris, France",
                  addressCountry: "FR",
                  addressLocality: "Paris"
                },
                areaServed: {
                  "@type": "Country",
                  name: "France"
                },
                knowsAbout: ["Artificial Intelligence", "Workflow Automation", "CRM Integration", "Business Automation"],
                jobTitle: "AI Automation Agency for SMEs"
              })
            }}
          />
          
          {/* Local Business Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "ProfessionalService"],
                name: "FlowPilot AI",
                image: "https://flowpilot.ai/logo.png",
                url: "https://flowpilot.ai",
                telephone: "+33-1-XX-XX-XX",
                email: "contact@flowpilot.ai",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Paris",
                  addressCountry: "FR",
                  addressLocality: "Paris",
                  postalCode: "75000"
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 48.8566,
                  longitude: 2.3522
                },
                areaServed: [
                  {
                    "@type": "Country",
                    name: "France"
                  },
                  {
                    "@type": "City",
                    name: "Paris"
                  },
                  {
                    "@type": "City",
                    name: "Lyon"
                  },
                  {
                    "@type": "City",
                    name: "Marseille"
                  }
                ],
                serviceType: "AI Automation Solutions",
                priceRange: "Devis sur demande"
              })
            }}
          />
          
          {/* BreadcrumbList for Navigation SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: "https://flowpilot.ai"
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Solutions",
                    item: "https://flowpilot.ai/#services"
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Cas d'usage",
                    item: "https://flowpilot.ai/#use-cases"
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Tarifs",
                    item: "https://flowpilot.ai/#pricing"
                  }
                ]
              })
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
