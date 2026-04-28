// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.SITE_URL || 'https://kozachokaddv.github.io';
const RAW_BASE = process.env.BASE_PATH || '/aok';
// Ensure trailing slash so `${import.meta.env.BASE_URL}foo.png` doesn't merge into `/aokfoo.png`
const BASE = RAW_BASE === '/' ? '/' : (RAW_BASE.endsWith('/') ? RAW_BASE : RAW_BASE + '/');

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
