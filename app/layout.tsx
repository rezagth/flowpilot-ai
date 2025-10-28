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
    default: "FlowPilot AI — Automate Everything. Flow Intelligently.",
    template: "%s | FlowPilot AI"
  },
  description: "FlowPilot AI empowers businesses with next‑gen AI automation: agents, CRM integrations, data sync, observability, and secure workflows.",
  keywords: [
    "AI automation",
    "workflow automation",
    "AI agents",
    "CRM integration",
    "data syncing",
    "RAG",
    "Next.js SaaS",
    "automation platform"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "FlowPilot AI — Automate Everything. Flow Intelligently.",
    description: "Automate workflows, integrate your stack, and deploy AI agents with a modern, secure platform.",
    url: "https://flowpilot.ai/",
    siteName: "FlowPilot AI",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "FlowPilot AI" }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowPilot AI — Automate Everything. Flow Intelligently.",
    description: "Next‑gen AI automation for teams: agents, CRM, data sync.",
    images: ["/og.jpg"]
  },
  creator: "FlowPilot AI",
  authors: [{ name: "FlowPilot AI" }]
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
          {children}
          <script
            type="application/ld+json"
            // Note: keep small, accurate, and organization-focused
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "FlowPilot AI",
                url: "https://flowpilot.ai/",
                logo: "https://flowpilot.ai/logo.png",
                sameAs: [
                  "https://twitter.com/flowpilotai",
                  "https://www.linkedin.com/company/flowpilotai"
                ]
              })
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
