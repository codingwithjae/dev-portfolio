// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://developer.johandercampos.com',

  // SSR generation for Vercel deployment
  output: 'server',

  vite: {
    plugins: [
      // @ts-ignore
      tailwindcss()
    ],
    build: {
      chunkSizeWarningLimit: 6000,
      rollupOptions: {
        // We let Astro handle chunking automatically to avoid circular dependencies.
        // The large Sanity Studio bundle is isolated from the main site and only loads on /admin.
      }
    }
  },

  integrations: [
    react(),
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'hismgx2i',
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: true,
      apiVersion: '2024-01-18',
      // Studio is integrated into /admin
      studioBasePath: '/admin',
    }),
  ],

  adapter: vercel(),
});