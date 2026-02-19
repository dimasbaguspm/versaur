import { resolve } from "path"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

import pkg from "./package.json"

// Get external dependencies from peerDependencies + additional externals
const external = [...Object.keys(pkg.peerDependencies || {}), "react/jsx-runtime"]

export default defineConfig({
  build: {
    lib: {
      entry: {
        primitive: resolve(__dirname, "src/components/primitive/index.ts"),
        forms: resolve(__dirname, "src/components/forms/index.ts"),
        blocks: resolve(__dirname, "src/components/blocks/index.ts"),
        utils: resolve(__dirname, "src/components/utils/index.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external,
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
  resolve: {
    alias: {
      "@versaur/core": resolve(__dirname, "../core/src"),
      "@versaur/icons": resolve(__dirname, "../icons/src"),
    },
    conditions: ["source"],
  },
  plugins: [react(), dts({ entryRoot: "src/components" })],
})
