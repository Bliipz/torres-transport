// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://torrestransport.fr',
  trailingSlash: 'ignore',
  // Mode hybride : pages statiques par défaut, API routes en serverless
  output: 'static',
  // Prefetch des liens internes au survol/visible, navigation perçue ~instantanée
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  // Inline les feuilles CSS pour éliminer le render-blocking
  // (économie ~150ms LCP/FCP selon PageSpeed Insights)
  build: {
    inlineStylesheets: 'always',
  },
  adapter: vercel({
    // Vercel Web Analytics désactivé : on utilise GA4 via GTM.
    // Activé sans le package @vercel/analytics, ça génère un 404 sur
    // /_vercel/insights/script.js et un warning CSP côté client.
    webAnalytics: { enabled: false },
  }),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR' },
      },
      filter: (page) => !page.includes('/mentions-legales') && !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});