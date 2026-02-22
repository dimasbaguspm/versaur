import { resolve } from "path"

import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  css: {
    modules: {
      generateScopedName: "versaur-[name]-[local]",
    },
  },
  plugins: [svgr()],
  resolve: {
    alias: {
      "@versaur/core": resolve(__dirname, "../../packages/core/src/components"),
    },
    conditions: ["source"],
  },
})
