import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://trezorkaufen.ch',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
