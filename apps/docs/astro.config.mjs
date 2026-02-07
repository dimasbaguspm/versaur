import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  output: "static",
  outDir: "./dist",
  build: {
    inlineStylesheets: "never",
  },
  vite: {
    css: {
      modules: {
        generateScopedName: 'versaur-[name]-[local]',
      },
    },
    resolve: {
      conditions: ['source'],
    },
    ssr: {
      resolve: {
        conditions: ['source'],
      },
    },
  },
});
