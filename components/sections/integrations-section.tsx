"use client";

import Marquee from "@/components/marquee";
import { 
  MessageSquare, 
  FileText, 
  Github, 
  CreditCard, 
  Zap, 
  BarChart3, 
  Database, 
  Phone, 
  Palette, 
  Mail, 
  Target, 
  Link2 
} from "lucide-react";

const INTEGRATIONS = [
  { name: "Slack", Icon: MessageSquare },
  { name: "Notion", Icon: FileText },
  { name: "GitHub", Icon: Github },
  { name: "Stripe", Icon: CreditCard },
  { name: "Zapier", Icon: Zap },
  { name: "Airtable", Icon: BarChart3 },
  { name: "PostgreSQL", Icon: Database },
  { name: "Twilio", Icon: Phone },
  { name: "Figma", Icon: Palette },
  { name: "Gmail", Icon: Mail },
  { name: "HubSpot", Icon: Target },
  { name: "Webhooks", Icon: Link2 },
  { name: "Slack", Icon: MessageSquare },
  { name: "Notion", Icon: FileText },
  { name: "GitHub", Icon: Github },
  { name: "Stripe", Icon: CreditCard },
  { name: "Zapier", Icon: Zap },
  { name: "Airtable", Icon: BarChart3 },
  { name: "PostgreSQL", Icon: Database },
  { name: "Twilio", Icon: Phone },
  { name: "Figma", Icon: Palette },
  { name: "Gmail", Icon: Mail },
  { name: "HubSpot", Icon: Target },
  { name: "Webhooks", Icon: Link2 },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="container-tight section">
      <style jsx>{`
        @keyframes fadeInUpSlow {
          0% {
            opacity: 0;
            transform: translateY(40px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .integration-badge {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-width: 140px;
          height: 140px;
          text-align: center;
        }

        .integration-icon {
          width: 48px;
          height: 48px;
          color: rgba(255, 255, 255, 0.9);
        }

        .integration-name {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .integration-badge:hover {
          transform: scale(1.15) translateY(-10px);
          border-color: rgba(99, 102, 241, 0.95);
          box-shadow: 0 0 60px rgba(99, 102, 241, 0.7), 0 20px 50px rgba(99, 102, 241, 0.5), inset 0 0 30px rgba(99, 102, 241, 0.1);
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(147, 51, 234, 0.2));
        }

        .integration-badge:hover .integration-icon {
          color: #a5b4fc;
          filter: drop-shadow(0 0 12px rgba(99, 102, 241, 0.8));
        }

        .marquee-container {
          animation: fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both;
        }
      `}</style>

      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both"
        }}>
          Intégrations avec votre stack
        </h2>
        <p className="text-white/60 text-lg" style={{
          animation: "fadeInUpSlow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.35s both"
        }}>
          Connectez tous vos outils préférés en quelques clics. Compatible avec 12+ plateformes populaires et plus.
        </p>
      </div>
      
      <div className="marquee-container">
        <div className="rounded-3xl glass border border-white/10 p-10 hover:border-indigo-400/50 transition-all duration-300">
          <Marquee speed={70} reverse={true}>
            {INTEGRATIONS.map((integration, idx) => {
              const IconComponent = integration.Icon;
              return (
                <div 
                  key={`${integration.name}-${idx}`}
                  className="integration-badge rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.1),rgba(255,255,255,.04))] backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(99,102,241,.4)]"
                >
                  <IconComponent className="integration-icon" strokeWidth={1.5} />
                  <span className="integration-name">{integration.name}</span>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>

      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "FlowPilot AI - Integration Platform",
        "description": "Connect and automate your entire workflow with integrated services",
        "integrations": INTEGRATIONS.map(i => ({
          "@type": "Product",
          "name": i.name
        }))
      })}</script>
    </section>
  );
}