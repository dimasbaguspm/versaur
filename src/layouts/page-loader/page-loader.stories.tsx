import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './page-loader'

/**
 * PageLoader centers a loading indicator within a flexible container,
 * perfect for full-page loading states and section loading.
 */
const meta: Meta<typeof PageLoader> = {
  title: 'Layouts/PageLoader',
  component: PageLoader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'PageLoader wraps the LoadingIndicator component with layout styling to center it within the available container space. Ideal for full-page loading states, section loading, or any scenario where you need a centered loading indicator.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['spinner', 'bar'],
      description: 'Type of loading indicator',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the loading indicator',
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'ghost',
        'neutral',
        'success',
        'info',
        'warning',
        'danger',
      ],
      description: 'Color variant',
    },
    message: {
      control: 'text',
      description: 'Optional loading message',
    },
    minimal: {
      control: 'boolean',
      description: 'Use minimal height for inline loading states',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default PageLoader with spinner indicator
 */
export const Default: Story = {
  args: {
    type: 'spinner',
    size: 'md',
    color: 'primary',
    ariaLabel: 'Loading page',
  },
  decorators: [
    Story => (
      <div style={{ height: '400px', border: '1px dashed #ccc' }}>
        <Story />
      </div>
    ),
  ],
}

/**
 * PageLoader with loading message
 */
export const WithMessage: Story = {
  args: {
    type: 'spinner',
    size: 'lg',
    color: 'primary',
    message: 'Loading your dashboard...',
    ariaLabel: 'Loading dashboard',
  },
  decorators: [
    Story => (
      <div style={{ height: '400px', border: '1px dashed #ccc' }}>
        <Story />
      </div>
    ),
  ],
}

/**
 * Bar type loading indicator
 */
export const BarType: Story = {
  args: {
    type: 'bar',
    color: 'secondary',
    message: 'Processing your request...',
  },
  decorators: [
    Story => (
      <div style={{ height: '300px', border: '1px dashed #ccc' }}>
        <Story />
      </div>
    ),
  ],
}

/**
 * Minimal height for inline loading states
 */
export const Minimal: Story = {
  args: {
    type: 'spinner',
    size: 'sm',
    color: 'tertiary',
    message: 'Loading...',
    minimal: true,
  },
  decorators: [
    Story => (
      <div style={{ border: '1px dashed #ccc' }}>
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
          <h3>Section Title</h3>
          <Story />
        </div>
      </div>
    ),
  ],
}

/**
 * Different color variants
 */
export const ColorVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        height: '600px',
      }}
    >
      <div style={{ border: '1px dashed #ccc' }}>
        <PageLoader color='primary' message='Primary' minimal />
      </div>
      <div style={{ border: '1px dashed #ccc' }}>
        <PageLoader color='secondary' message='Secondary' minimal />
      </div>
      <div style={{ border: '1px dashed #ccc' }}>
        <PageLoader color='success' message='Success' minimal />
      </div>
      <div style={{ border: '1px dashed #ccc' }}>
        <PageLoader color='warning' message='Warning' minimal />
      </div>
      <div style={{ border: '1px dashed #ccc' }}>
        <PageLoader color='danger' message='Danger' minimal />
      </div>
      <div style={{ border: '1px dashed #ccc' }}>
        <PageLoader color='info' message='Info' minimal />
      </div>
    </div>
  ),
}

/**
 * Different sizes comparison
 */
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        height: '400px',
      }}
    >
      <div style={{ border: '1px dashed #ccc' }}>
        <PageLoader size='sm' message='Small' minimal />
      </div>
      <div style={{ border: '1px dashed #ccc' }}>
        <PageLoader size='md' message='Medium' minimal />
      </div>
      <div style={{ border: '1px dashed #ccc' }}>
        <PageLoader size='lg' message='Large' minimal />
      </div>
    </div>
  ),
}

/**
 * Full page loading simulation
 */
export const FullPage: Story = {
  args: {
    type: 'spinner',
    size: 'lg',
    color: 'primary',
    message: 'Loading application...',
  },
  decorators: [
    Story => (
      <div style={{ height: '100vh', backgroundColor: '#ffffff' }}>
        <Story />
      </div>
    ),
  ],
}

/** * Fullscreen overlay loading state
 */
export const Fullscreen: Story = {
  args: {
    message: 'Hang on there...',
    fullscreen: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
}
