import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import icons from 'astro-icon';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 1234
  },
  renderers: [ react() ],
  integrations: [
    react(),
    icons({
      collections: {
        // Ensure 'lucide' is included here
        lucide: '@iconify-json/lucide'
      }
    }),
    tailwind({applyBaseStyles: false}),
    sitemap() ],
  output: "hybrid",
  site: "https://unisala.com",
});

