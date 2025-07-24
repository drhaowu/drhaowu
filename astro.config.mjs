// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://drhaowu.com', // 您的自定义域名
  vite: {
    plugins: [tailwindcss()]
  }
});