// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.SITE_URL || 'https://kozachokaddv.github.io';
const BASE = process.env.BASE_PATH || '/aok';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
