import { copyFileSync, mkdirSync } from "fs"
import { resolve } from "path"

import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

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
    cssCodeSplit: true,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            // Strip .module from CSS filenames so downstream consumers
            // don't re-process them as CSS modules
            return assetInfo.name.replace(".module.css", ".css")
          }
          return "assets/[name]-[hash][extname]"
        },
      },
    },
  },
  css: {
    modules: {
      generateScopedName: "versaur-[name]-[local]",
    },
  },
  plugins: [
    dts({
      entryRoot: "src/components",
      copyDtsFiles: true,
    }),
    {
      name: "copy-tokens",
      closeBundle() {
        const srcTokens = resolve(__dirname, "src/tokens")
        const distTokens = resolve(__dirname, "dist/tokens")

        // Create dist/tokens directory
        mkdirSync(distTokens, { recursive: true })

        // Copy all CSS files from src/tokens to dist/tokens
        const files = ["index.css", "colors.css", "spacing.css", "typography.css", "effects.css"]
        files.forEach((file) => {
          copyFileSync(
            resolve(srcTokens, file),
            resolve(distTokens, file)
          )
        })
      },
    },
  ],
})
