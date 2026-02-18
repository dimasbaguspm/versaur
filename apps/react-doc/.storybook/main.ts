import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { resolve } from "path";
import { readdirSync } from "fs";
import { existsSync } from "fs";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  docs: {
    autodocs: "tag",
  },
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.ts", "../src/**/*.stories.tsx"],
  viteFinal: (config) => {
    // Generate CSS aliases for all components in core
    const cssAliases: Record<string, string> = {};
    const coreComponentPath = resolve(__dirname, "../../../packages/core/src/components");
    
    try {
      const components = readdirSync(coreComponentPath);
      components.forEach((component) => {
        const cssFile = resolve(coreComponentPath, `${component}/${component}.module.css`);
        if (existsSync(cssFile)) {
          cssAliases[`@versaur/core/${component}.css`] = cssFile;
        }
      });
    } catch (err) {
      console.warn("Failed to generate CSS aliases:", err);
    }

    return mergeConfig(config, {
      resolve: {
        alias: {
          "@versaur/react": resolve(__dirname, "../../../packages/react/src"),
          "@versaur/icons": resolve(__dirname, "../../../packages/icons/src"),
          "@versaur/core": resolve(__dirname, "../../../packages/core/src"),
          ...cssAliases,
        },
        conditions: ["source", "import"],
      },
    });
  },
};

export default config;
