/**
 * SEO Geo-Targeting Configuration
 * Optimized for French market and international expansion
 */

export const geoConfig = {
  // Primary market
  primaryMarket: "FR",
  primaryCountry: "France",
  primaryLanguage: "fr-FR",
  
  // Supported regions
  supportedRegions: [
    { code: "FR", name: "France", language: "fr-FR", priority: 1 },
    { code: "BE", name: "Belgique", language: "fr-BE", priority: 0.8 },
    { code: "CH", name: "Suisse", language: "fr-CH", priority: 0.8 },
    { code: "LU", name: "Luxembourg", language: "fr-LU", priority: 0.7 },
    { code: "CA", name: "Canada", language: "fr-CA", priority: 0.7 },
    { code: "US", name: "United States", language: "en-US", priority: 0.5 },
    { code: "GB", name: "United Kingdom", language: "en-GB", priority: 0.5 },
    { code: "DE", name: "Germany", language: "de-DE", priority: 0.5 },
  ],
  
  // French cities we serve
  frenchCities: [
    { name: "Paris", lat: 48.8566, lon: 2.3522, region: "IDF" },
    { name: "Lyon", lat: 45.7640, lon: 4.8357, region: "ARA" },
    { name: "Marseille", lat: 43.2965, lon: 5.3698, region: "PAC" },
    { name: "Toulouse", lat: 43.6047, lon: 1.4422, region: "OCC" },
    { name: "Nice", lat: 43.7102, lon: 7.2620, region: "PAC" },
    { name: "Bordeaux", lat: 44.8378, lon: -0.5792, region: "NAQ" },
    { name: "Lille", lat: 50.6292, lon: 3.0573, region: "HDF" },
    { name: "Nantes", lat: 47.2184, lon: -1.5536, region: "PDL" },
  ],
  
  // SEO Keywords by region
  keywordsByRegion: {
    FR: [
      "automatisation IA France",
      "workflow automation Paris",
      "agence IA PME",
      "solution automation Paris",
      "agents IA France",
      "RPA France",
      "automatisation processus PME",
      "digitalisation entreprise Paris",
    ],
    BE: [
      "automatisation IA Belgique",
      "workflow automation Bruxelles",
      "agence IA Belgique",
    ],
    CH: [
      "automatisation IA Suisse",
      "workflow automation Genève",
      "agence IA Suisse",
    ],
    US: [
      "AI automation",
      "workflow automation",
      "business automation agency",
    ],
  },
  
  // Social media geo-targeting
  socialMedia: {
    twitter: "@flowpilotai",
    linkedin: "flowpilot-ai",
    facebook: "flowpilot.ai",
  },
  
  // Contact information by region
  contactByRegion: {
    FR: {
      phone: "+33-1-XX-XX-XX",
      email: "contact@flowpilot.ai",
      timezone: "Europe/Paris",
      languages: ["fr", "en"],
    },
    BE: {
      phone: "+32-2-XXX-XXXX",
      email: "contact@flowpilot.ai",
      timezone: "Europe/Brussels",
      languages: ["fr", "en", "nl"],
    },
    CH: {
      phone: "+41-XX-XXX-XXXX",
      email: "contact@flowpilot.ai",
      timezone: "Europe/Zurich",
      languages: ["fr", "en", "de", "it"],
    },
  },
  
  // Certification and compliance
  certifications: {
    GDPR: true,
    ISO27001: false,
    CCPA: false,
    eIDAS: true,
  },
};

// Helper function to get region config
export function getRegionConfig(regionCode: string) {
  const region = geoConfig.supportedRegions.find(r => r.code === regionCode);
  const contact = geoConfig.contactByRegion[regionCode as keyof typeof geoConfig.contactByRegion];
  const keywords = geoConfig.keywordsByRegion[regionCode as keyof typeof geoConfig.keywordsByRegion];
  
  return {
    region,
    contact,
    keywords: keywords || geoConfig.keywordsByRegion.FR,
  };
}

// Helper function to get French city info
export function getFrenchCityInfo(cityName: string) {
  return geoConfig.frenchCities.find(
    city => city.name.toLowerCase() === cityName.toLowerCase()
  );
}
