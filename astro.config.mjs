// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://drhaowu.github.io',
  base: '/drhaowu',
  vite: {
    plugins: [tailwindcss()]
  }
});