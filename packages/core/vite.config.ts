import { resolve } from "path"

import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
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
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
})
