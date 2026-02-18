import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "VersaurIcons",
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [svgr(), dts({ insertTypesEntry: true })],
})
