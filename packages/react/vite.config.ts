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
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external,
    },
  },
  plugins: [react(), dts()],
})
