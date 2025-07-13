import type { Preview } from '@storybook/react'
import '../src/styles.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'background',
      values: [
        {
          name: 'background',
          value: '#ffffff',
        },
        {
          name: 'cream',
          value: 'var(--color-cream)',
        },
        {
          name: 'primary',
          value: 'var(--color-primary)',
        },
        {
          name: 'secondary',
          value: 'var(--color-secondary)',
        },
        {
          name: 'foreground',
          value: 'var(--color-foreground)',
        },
      ],
    },
  },
}

export default preview
