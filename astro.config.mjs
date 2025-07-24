// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://casperwu.github.io',
  base: '/250723Website',
  vite: {
    plugins: [tailwindcss()]
  }
});