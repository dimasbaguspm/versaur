/**
 * Icon stories for Versaur UI
 * Demonstrates color and size variations using Lucide icons
 * Shows how to use Icon with Lucide icons and native span props
 */
import { Icon } from './icon'
import { Circle, Star } from 'lucide-react'

export default {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
}

export const Basic = {
  render: () => (
    <Icon color='primary' size='md' title='Primary Icon'>
      <Circle />
    </Icon>
  ),
  name: 'Basic usage',
  parameters: {
    docs: {
      description: {
        story:
          'A basic Icon wrapping a Lucide icon with primary color and medium size.',
      },
    },
  },
}

export const AllSizes = {
  render: () => (
    <div className='flex gap-2 items-center'>
      <Icon size='xs'>
        <Circle />
      </Icon>
      <Icon size='sm'>
        <Circle />
      </Icon>
      <Icon size='md'>
        <Circle />
      </Icon>
      <Icon size='lg'>
        <Circle />
      </Icon>
      <Icon size='xl'>
        <Circle />
      </Icon>
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
      <Icon color='primary'>
        <Star />
      </Icon>
      <Icon color='secondary'>
        <Star />
      </Icon>
      <Icon color='tertiary'>
        <Star />
      </Icon>
      <Icon color='ghost'>
        <Star />
      </Icon>
      <Icon color='neutral'>
        <Star />
      </Icon>
      <Icon color='success'>
        <Star />
      </Icon>
      <Icon color='info'>
        <Star />
      </Icon>
      <Icon color='warning'>
        <Star />
      </Icon>
      <Icon color='danger'>
        <Star />
      </Icon>
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
