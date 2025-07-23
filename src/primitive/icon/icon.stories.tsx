/**
 * Icon stories for Versaur UI
 * Demonstrates color and size variations using Lucide icons
 * Shows how to use Icon with Lucide icons and native span props
 */
import { Icon } from './icon'
import { Circle, Star } from 'lucide-react'

export default {
  title: 'Primitive/Icon',
  component: Icon,
  tags: ['autodocs'],
}

export const Basic = {
  render: () => (
    <Icon as={Circle} color='primary' size='md' aria-label='Primary Icon' />
  ),
  name: 'Basic usage',
  parameters: {
    docs: {
      description: {
        story:
          'A basic Icon rendering a Lucide icon with primary color and medium size.',
      },
    },
  },
}

export const AllSizes = {
  render: () => (
    <div className='flex gap-2 items-center'>
      <Icon size='xs' as={Circle} />
      <Icon size='sm' as={Circle} />
      <Icon size='md' as={Circle} />
      <Icon size='lg' as={Circle} />
      <Icon size='xl' as={Circle} />
    </div>
  ),
  name: 'All sizes',
  parameters: {
    docs: {
      description: {
        story: 'Showcases all available icon sizes.',
      },
    },
  },
}

export const AllColors = {
  render: () => (
    <div className='flex gap-2 items-center'>
      <Icon as={Star} color='primary' />
      <Icon as={Star} color='secondary' />
      <Icon as={Star} color='tertiary' />
      <Icon as={Star} color='ghost' />
      <Icon as={Star} color='neutral' />
      <Icon as={Star} color='success' />
      <Icon as={Star} color='info' />
      <Icon as={Star} color='warning' />
      <Icon as={Star} color='danger' />
    </div>
  ),
  name: 'All colors',
  parameters: {
    docs: {
      description: {
        story: 'Showcases all available color variants.',
      },
    },
  },
}
