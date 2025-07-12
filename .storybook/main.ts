import type { StorybookConfig } from '@storybook/react-vite'
import { resolve } from 'path'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async config => {
    config.plugins = config.plugins || []
    const { default: tailwindcss } = await import('@tailwindcss/vite')

    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
          '@/components': resolve(__dirname, '../src/components'),
          '@/utils': resolve(__dirname, '../src/utils'),
          '@/types': resolve(__dirname, '../src/types'),
          '@/styles': resolve(__dirname, '../src/styles'),
          '@/hooks': resolve(__dirname, '../src/hooks'),
        },
      },
    })
  },
}

export default config
