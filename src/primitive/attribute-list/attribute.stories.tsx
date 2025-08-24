import type { Meta, StoryObj } from '@storybook/react'
import { AttributeList } from './attribute'

const meta: Meta<typeof AttributeList> = {
  title: 'Primitive/Attribute List',
  component: AttributeList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'AttributeList provides a grid-based layout for multiple attributes',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * AttributeList with default 4-column grid layout.
 */
export const Default: Story = {
  render: () => (
    <AttributeList>
      <AttributeList.Item title='Name'>John Doe</AttributeList.Item>
      <AttributeList.Item title='Email'>
        john.doe@example.com
      </AttributeList.Item>
      <AttributeList.Item title='Phone'>+1 (555) 123-4567</AttributeList.Item>
      <AttributeList.Item title='Location'>New York, NY</AttributeList.Item>
    </AttributeList>
  ),
}

/**
 * AttributeList with different column spans and custom column count.
 */
export const Spans: Story = {
  render: () => (
    <AttributeList columns={4}>
      <AttributeList.Item span={4} title='Full Width Description'>
        This item spans the full width of the grid, taking up all 4 columns.
        It's perfect for longer descriptions or important information that needs
        more space.
      </AttributeList.Item>
      <AttributeList.Item span={2} title='Name'>
        John Doe
      </AttributeList.Item>
      <AttributeList.Item span={2} title='Email'>
        john.doe@example.com
      </AttributeList.Item>
      <AttributeList.Item span={1} title='Age'>
        32
      </AttributeList.Item>
      <AttributeList.Item span={1} title='Status'>
        Active
      </AttributeList.Item>
      <AttributeList.Item span={2} title='Department'>
        Engineering
      </AttributeList.Item>
    </AttributeList>
  ),
}

/**
 * AttributeList with 2-column layout.
 */
export const TwoColumns: Story = {
  render: () => (
    <AttributeList columns={2}>
      <AttributeList.Item title='Name'>John Doe</AttributeList.Item>
      <AttributeList.Item title='Email'>
        john.doe@example.com
      </AttributeList.Item>
      <AttributeList.Item span={2} title='Bio'>
        Full-stack developer with 8+ years of experience building scalable web
        applications.
      </AttributeList.Item>
      <AttributeList.Item title='Location'>New York, NY</AttributeList.Item>
      <AttributeList.Item title='Phone'>+1 (555) 123-4567</AttributeList.Item>
    </AttributeList>
  ),
}

/**
 * AttributeList with 6-column layout for more granular control.
 */
export const SixColumns: Story = {
  render: () => (
    <AttributeList columns={6}>
      <AttributeList.Item span={3} title='First Name'>
        John
      </AttributeList.Item>
      <AttributeList.Item span={3} title='Last Name'>
        Doe
      </AttributeList.Item>
      <AttributeList.Item span={2} title='Age'>
        32
      </AttributeList.Item>
      <AttributeList.Item span={2} title='Status'>
        Active
      </AttributeList.Item>
      <AttributeList.Item span={2} title='Role'>
        Developer
      </AttributeList.Item>
      <AttributeList.Item span={6} title='Full Address'>
        123 Main Street, Apartment 4B, New York, NY 10001, United States
      </AttributeList.Item>
    </AttributeList>
  ),
}
