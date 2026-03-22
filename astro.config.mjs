import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://trezorkaufen.ch',
  integrations: [sitemap()],
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
