// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://drhaowu.github.io',
  base: '/drhaowu',
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve(root, './src/components'),
      },
    },
  },
});