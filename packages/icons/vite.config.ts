import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [svgr(), dts({ insertTypesEntry: true })],
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
});
