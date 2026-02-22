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
    conditions: ["source"],
  },
})
