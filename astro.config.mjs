// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    vite: {
      plugins: [tailwindcss()],
    },
      output: 'static',
      site: 'Laser-Theboy017.github.io',
  });