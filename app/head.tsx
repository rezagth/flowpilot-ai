export default function Head() {
  return (
    <>
      {/* Geo-targeting Meta Tags */}
      <meta httpEquiv="content-language" content="fr-FR" />
      <meta name="geo.position" content="48.8566;2.3522" />
      <meta name="geo.placename" content="Paris, France" />
      <meta name="geo.region" content="FR-75" />
      <meta name="ICBM" content="48.8566, 2.3522" />
      
      {/* Language Declaration */}
      <meta name="language" content="French" />
      <meta name="content-language" content="fr-FR" />
      
      {/* Additional SEO Tags */}
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      
      {/* Preload critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for external services */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Structured data for Contact */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "FlowPilot AI",
          url: "https://flowpilot.ai",
          inLanguage: "fr-FR",
          searchAction: {
            "@type": "SearchAction",
            target: "https://flowpilot.ai/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </>
  );
}
