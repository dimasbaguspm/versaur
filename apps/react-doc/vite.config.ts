import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@versaur/react": resolve(__dirname, "../../packages/react/src"),
      "@versaur/core": resolve(__dirname, "../../packages/core/src"),
      "@versaur/icons": resolve(__dirname, "../../packages/icons/src"),
    },
  },
  css: {
    modules: {
      generateScopedName: "versaur-[name]-[local]",
    },
  },
});
