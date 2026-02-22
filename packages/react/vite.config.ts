import { resolve } from "path"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

import pkg from "./package.json"

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      rollupTypes: true,
      compilerOptions: { sourceMap: false },
    }),
  ],
  build: {
    sourcemap: false,
    lib: {
      entry: {
        tokens: resolve(__dirname, "src/tokens/index.ts"),
        primitive: resolve(__dirname, "src/components/primitive/index.ts"),
        forms: resolve(__dirname, "src/components/forms/index.ts"),
        blocks: resolve(__dirname, "src/components/blocks/index.ts"),
        utils: resolve(__dirname, "src/components/utils/index.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: (id: string) => {
        const deps = Object.keys(pkg.peerDependencies || {})

        if (deps.includes(id)) return true
        for (const dep of deps) {
          if (id.startsWith(`${dep}/`)) return true
        }

        return false
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.some((name) => name.endsWith(".css"))) {
            return "versaur-react.css"
          }
          return "[name]-[hash][extname]"
        },
      },
    },
  },
  resolve: {
    alias: {
      "@versaur/core": resolve(__dirname, "../core/src/components"),
    },
    conditions: ["source"],
  },
})
