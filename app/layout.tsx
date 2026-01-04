import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Starfield from "@/components/starfield";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://elyrion.ai"),
  title: {
    default: "Elyrion Labs — Solutions IA Intelligentes & Automatisation Avancée",
    template: "%s | Elyrion Labs"
  },
  description: "Elyrion Labs - Solutions d'IA avancée et automatisation intelligente pour transformer vos processus métier. Expertise en apprentissage automatique, agents IA et optimisation.",
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
    "digitalisation entreprise",
    "Elyrion Labs"
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
    canonical: "https://elyrion.ai",
    languages: {
      'fr-FR': 'https://elyrion.ai/fr',
      'en-US': 'https://elyrion.ai/en',
    },
  },
  category: "Technology",
  openGraph: {
    title: "Elyrion Labs — Solutions IA Intelligentes",
    description: "Plateforme d'IA avancée pour automatisation, optimisation de processus et solutions intelligentes.",
    url: "https://elyrion.ai/",
    siteName: "Elyrion Labs",
    images: [
      { 
        url: "/og.jpg", 
        width: 1200, 
        height: 630, 
        alt: "Elyrion Labs - Automatisation Intelligente",
        type: "image/jpeg"
      }
    ],
    type: "website",
    locale: "fr_FR",
    countryName: "France"
  },
  twitter: {
    card: "summary_large_image",
    site: "@elyrionlabs",
    creator: "@elyrionlabs",
    title: "Elyrion Labs — Solutions IA Avancée",
    description: "Solutions d'IA avancée et automatisation intelligente pour votre entreprise.",
    images: ["/og.jpg"]
  },
  creator: "Elyrion Labs",
  authors: [{ name: "Elyrion Labs", url: "https://elyrion.ai" }],
  publisher: "Elyrion Labs"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Starfield />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
