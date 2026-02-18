import { resolve } from "path"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  css: {
    modules: {
      generateScopedName: "versaur-[name]-[local]",
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@versaur/react": resolve(__dirname, "../../packages/react/src"),
      "@versaur/core": resolve(__dirname, "../../packages/core/src"),
      "@versaur/icons": resolve(__dirname, "../../packages/icons/src"),
    },
  },
})
