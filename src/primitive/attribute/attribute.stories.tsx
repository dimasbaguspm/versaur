import type { Meta, StoryObj } from '@storybook/react'
import { Attribute } from './attribute'

const meta: Meta<typeof Attribute> = {
  title: 'Primitive/Attribute',
  component: Attribute,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Attribute components for displaying structured information. The Attribute component displays a title-content pair, while AttributeList provides a grid-based layout for multiple attributes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The attribute title displayed as an h4 element',
    },
    children: {
      control: 'text',
      description: 'The attribute content displayed as a p element',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic usage of the Attribute component with a simple title and content.
 */
export const Default: Story = {
  args: {
    title: 'Name',
    children: 'John Doe',
  },
}

/**
 * Attribute with longer content to demonstrate text wrapping.
 */
export const LongContent: Story = {
  args: {
    title: 'Description',
    children:
      'This is a longer description that demonstrates how the attribute component handles text wrapping and multiple lines of content.',
  },
}
