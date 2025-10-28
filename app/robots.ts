import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"]
    },
    sitemap: "https://flowpilot.ai/sitemap.xml",
    host: "https://flowpilot.ai",
  };
}
