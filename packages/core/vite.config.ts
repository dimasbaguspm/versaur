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
    cssCodeSplit: false,
  },
  css: {
    modules: {
      generateScopedName: "versaur-[hash]",
    },
  },
  plugins: [
    {
      name: "inject-tokens",
      transform(code, id) {
        // Inject tokens import at the top of every component CSS module
        if (id.includes("components/") && id.endsWith(".module.css")) {
          return `@import "./tokens/index.css";\n${code}`
        }
      },
    },
    dts({
      entryRoot: "src/components",
      copyDtsFiles: true,
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
    }),
    {
      name: "copy-tokens",
      closeBundle() {
        const srcTokens = resolve(__dirname, "src/tokens")
        const distTokens = resolve(__dirname, "dist/tokens")

        // Create dist/tokens directory
        mkdirSync(distTokens, { recursive: true })

        const files = ["index.css", "colors.css", "spacing.css", "typography.css", "effects.css"]
        files.forEach((file) => {
          copyFileSync(resolve(srcTokens, file), resolve(distTokens, file))
        })
      },
    },
  ],
})
