import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import pkg from "./package.json";

// Get external dependencies from peerDependencies + additional externals
const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  "react/jsx-runtime",
];

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external,
    },
  },
});
