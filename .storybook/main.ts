import type { StorybookConfig } from '@storybook/react-vite'
import { resolve } from 'path'
import { mergeConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

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
      plugins: [tailwindcss(), svgr()],
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
          '@/primitive': resolve(__dirname, '../src/primitive'),
          '@/forms': resolve(__dirname, '../src/forms'),
          '@/overlays': resolve(__dirname, '../src/overlays'),
          '@/navigation': resolve(__dirname, '../src/navigation'),
          '@/feedbacks': resolve(__dirname, '../src/feedbacks'),
          '@/layouts': resolve(__dirname, '../src/layouts'),
          '@/utils': resolve(__dirname, '../src/utils'),
          '@/templates': resolve(__dirname, '../src/templates'),
          '@/providers': resolve(__dirname, '../src/providers'),
          '@/helpers': resolve(__dirname, '../src/helpers'),
        },
      },
    })
  },
}

export default config
