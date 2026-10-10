// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hopesocietypakistan.org',
  // Fully static output: every page is pre-built to plain HTML.
  output: 'static',
  integrations: [sitemap()],
});
