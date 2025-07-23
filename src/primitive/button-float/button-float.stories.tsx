import type { Meta, StoryObj } from '@storybook/react'
import { ButtonFloat } from './button-float'
import { Icon } from '../icon'
import { Plus, MessageCircle, HelpCircle, Check, X } from 'lucide-react'

/**
 * ButtonFloat is a floating action button that stays fixed to the bottom right or left of the viewport.
 * It supports all Button variants, sizes, and accessibility features.
 *
 * > **Note:** The primary use case is to render an icon (SVG) as its child, not a string. See examples below.
 */
const meta: Meta<typeof ButtonFloat> = {
  title: 'Primitive/ButtonFloat',
  component: ButtonFloat,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `\
ButtonFloat is a floating action button that stays fixed to the bottom right or left of the viewport.\n\n- Supports all Button variants, sizes, and accessibility features\n- Use for quick actions, chat, or primary floating actions\n- Mobile-first, accessible, and customizable offset\n        `,
      },
    },
  },
  argTypes: {
    side: {
      control: { type: 'select' },
      options: ['right', 'left'],
      description: 'Which side of the viewport to float the button',
    },
    offset: {
      control: { type: 'text' },
      description: 'Offset from the edge of the viewport (e.g., 1rem, 24px)',
    },
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'primary-outline',
        'primary-ghost',
        'secondary',
        'secondary-outline',
        'secondary-ghost',
        'tertiary',
        'tertiary-outline',
        'tertiary-ghost',
        'ghost',
        'ghost-outline',
        'neutral',
        'neutral-outline',
        'neutral-ghost',
        'success',
        'success-outline',
        'success-ghost',
        'info',
        'info-outline',
        'info-ghost',
        'warning',
        'warning-outline',
        'warning-ghost',
        'danger',
        'danger-outline',
        'danger-ghost',
        'outline',
        'destructive',
      ],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
  },
  decorators: [
    Story => (
      <div
        style={{
          position: 'relative',
          height: '600px',
          background: '#f8f9fa',
          border: '1px dashed #e07a5f',
          margin: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof ButtonFloat>

/**
 * Default floating button (bottom right, with icon)
 */
export const Default: Story = {
  render(args) {
    return (
      <ButtonFloat {...args}>
        <Icon as={MessageCircle} color='neutral' />
      </ButtonFloat>
    )
  },
  args: {
    side: 'right',
    variant: 'primary',
    size: 'md',
    'aria-label': 'Chat',
  },
}

/**
 * Floating button on the left (with icon)
 */
export const LeftSide: Story = {
  args: {
    children: <Icon as={HelpCircle} color='neutral' />, // Use Icon wrapper
    side: 'left',
    variant: 'secondary',
    size: 'md',
    'aria-label': 'Help',
  },
}

/**
 * All variants demo (with icons)
 */
export const AllVariants: Story = {
  render: () => (
    <>
      <ButtonFloat
        variant='primary'
        style={{ bottom: '5rem' }}
        aria-label='Add'
        offset='5rem'
      >
        <Icon as={Plus} color='neutral' />
      </ButtonFloat>
      <ButtonFloat
        variant='secondary'
        side='left'
        style={{ bottom: '5rem' }}
        aria-label='Help'
        offset='5rem'
      >
        <Icon as={HelpCircle} color='neutral' />
      </ButtonFloat>
      <ButtonFloat
        variant='success'
        style={{ bottom: '9rem' }}
        aria-label='Success'
      >
        <Icon as={Check} color='neutral' />
      </ButtonFloat>
      <ButtonFloat
        variant='danger'
        side='left'
        style={{ bottom: '9rem' }}
        aria-label='Close'
      >
        <Icon as={X} color='neutral' />
      </ButtonFloat>
    </>
  ),
}

/**
 * Size comparison (with icons)
 */
export const SizeComparison: Story = {
  render: () => (
    <>
      <ButtonFloat size='sm' offset='10rem' aria-label='Small'>
        <Icon color='neutral' as={Plus} />
      </ButtonFloat>
      <ButtonFloat size='md' offset='5.75rem' aria-label='Medium'>
        <Icon color='neutral' as={Plus} />
      </ButtonFloat>
      <ButtonFloat size='lg' aria-label='Large'>
        <Icon color='neutral' as={Plus} />
      </ButtonFloat>
    </>
  ),
}
