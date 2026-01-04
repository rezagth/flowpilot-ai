import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aggressive image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Disable expensive features
  compress: true,
  productionBrowserSourceMaps: false,
  
  // Optimize bundle
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  
  // Language and geo redirections
  async redirects() {
    return [
      {
        source: "/fr/:path*",
        destination: "/:path*",
        permanent: false,
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: false,
      },
    ];
  },

  // Aggressive cache control for maximum performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "X-UA-Compatible", value: "IE=edge" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Language", value: "fr-FR" },
          { key: "Permissions-Policy", value: "geolocation=(self), microphone=(), camera=()" },
          // Performance headers
          { key: "Accept-CH", value: "DPR, Viewport-Width, Width" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain" },
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml" },
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
      {
        source: "/.well-known/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600" }],
      },
    ];
  },
};

export default nextConfig;
