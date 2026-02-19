import { resolve } from "path"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  css: {
    modules: {
      generateScopedName: "versaur-[name]-[local]",
    },
  },
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "@versaur/react": resolve(__dirname, "../../packages/react/src"),
      "@versaur/core": resolve(__dirname, "../../packages/core/src"),
      "@versaur/icons": resolve(__dirname, "../../packages/icons/src"),
    },
  },
})
