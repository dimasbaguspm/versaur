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
      "@versaur/react/primitive": resolve(__dirname, "../../packages/react/src/components/primitive"),
      "@versaur/react/forms": resolve(__dirname, "../../packages/react/src/components/forms"),
      "@versaur/react/blocks": resolve(__dirname, "../../packages/react/src/components/blocks"),
      "@versaur/react/utils": resolve(__dirname, "../../packages/react/src/components/utils"),
      "@versaur/core/primitive": resolve(__dirname, "../../packages/core/src/components/primitive"),
      "@versaur/core/forms": resolve(__dirname, "../../packages/core/src/components/forms"),
      "@versaur/core/blocks": resolve(__dirname, "../../packages/core/src/components/blocks"),
      "@versaur/core/utils": resolve(__dirname, "../../packages/core/src/components/utils"),
      "@versaur/core": resolve(__dirname, "../../packages/core/src"),
      "@versaur/react": resolve(__dirname, "../../packages/react/src"),
      "@versaur/icons": resolve(__dirname, "../../packages/icons/src"),
    },
    conditions: ["source"],
  },
})
