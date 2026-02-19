import type { StorybookConfig } from "@storybook/react-vite";

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
};

export default config;
