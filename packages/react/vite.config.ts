import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { readFileSync } from "fs";

// Read package.json and extract entry points from exports
const packageJson = JSON.parse(
  readFileSync(resolve(__dirname, "package.json"), "utf-8"),
);

const entry: Record<string, string> = {};

// Build entry object from package.json exports
for (const [exportPath, config] of Object.entries(packageJson.exports)) {
  // Convert export path to entry key (e.g., "." -> "index", "./button" -> "button")
  const entryKey = exportPath === "." ? "index" : exportPath.slice(2);

  // Get source path from export config
  const sourceFile = (config as Record<string, string>).source;
  if (sourceFile) {
    entry[entryKey] = resolve(__dirname, sourceFile);
  }
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  resolve: {
    conditions: ["source"],
  },
  build: {
    lib: {
      entry,
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@versaur/core",
        /^@versaur\/core\//,
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
