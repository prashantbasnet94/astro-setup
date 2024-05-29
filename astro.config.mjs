import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import astroIcon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  server:{port:1234},
  renderers: [react()],
  integrations: [react(),  astroIcon()]
});