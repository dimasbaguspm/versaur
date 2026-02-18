import type { StorybookConfig } from "@storybook/react-vite";
import { existsSync, readdirSync } from "fs";
import { resolve } from "path";
import { mergeConfig } from "vite";

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
    } catch {
      // Silently ignore errors in CSS alias generation
    }

    return mergeConfig(config, {
      resolve: {
        alias: {
          "@versaur/core": resolve(__dirname, "../../../packages/core/src"),
          "@versaur/icons": resolve(__dirname, "../../../packages/icons/src"),
          "@versaur/react": resolve(__dirname, "../../../packages/react/src"),
          ...cssAliases,
        },
        conditions: ["source", "import"],
      },
    });
  },
};

export default config;
