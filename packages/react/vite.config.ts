import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

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
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        button: resolve(__dirname, "src/components/button/index.ts"),
        "button-icon": resolve(
          __dirname,
          "src/components/button-icon/index.ts",
        ),
        "button-group": resolve(
          __dirname,
          "src/components/button-group/index.ts",
        ),
        heading: resolve(__dirname, "src/components/heading/index.ts"),
        text: resolve(__dirname, "src/components/text/index.ts"),
        avatar: resolve(__dirname, "src/components/avatar/index.ts"),
        "avatar-group": resolve(
          __dirname,
          "src/components/avatar-group/index.ts",
        ),
        hr: resolve(__dirname, "src/components/hr/index.ts"),
        tabs: resolve(__dirname, "src/components/tabs/index.ts"),
        "no-results": resolve(__dirname, "src/components/no-results/index.ts"),
        "page-loader": resolve(
          __dirname,
          "src/components/page-loader/index.ts",
        ),
        "attribute-list": resolve(
          __dirname,
          "src/components/attribute-list/index.ts",
        ),
        badge: resolve(__dirname, "src/components/badge/index.ts"),
        "badge-group": resolve(
          __dirname,
          "src/components/badge-group/index.ts",
        ),
        card: resolve(__dirname, "src/components/card/index.ts"),
      },
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
