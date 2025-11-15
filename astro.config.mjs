import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://developer.johandercampos.com',

  output: 'server',

  vite: {
    plugins: [
      tailwindcss()
    ],
    build: {
      chunkSizeWarningLimit: 6000,
      rollupOptions: {
      }
    }
  },

  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.sanity.io' }
    ],
  },

  integrations: [
    react(),
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'hismgx2i',
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: true,
      apiVersion: '2024-01-18',
      studioBasePath: '/admin',
    }),
  ],

  adapter: vercel(),
});