/**
 * DescriptionList stories for Versaur UI
 *
 * Demonstrates semantic usage, span prop, and styled terms/details
 */
import type { Meta, StoryObj } from '@storybook/react'
import { DescriptionList } from './description-list'

const meta: Meta<typeof DescriptionList> = {
  title: 'Primitive/DescriptionList',
  component: DescriptionList,
}
export default meta

type Story = StoryObj<typeof DescriptionList>

export const Basic: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionList.Item>
        <DescriptionList.Term>Name</DescriptionList.Term>
        <DescriptionList.Details>Jane Doe</DescriptionList.Details>
      </DescriptionList.Item>
      <DescriptionList.Item>
        <DescriptionList.Term>Email</DescriptionList.Term>
        <DescriptionList.Details>jane@example.com</DescriptionList.Details>
      </DescriptionList.Item>
      <DescriptionList.Item>
        <DescriptionList.Term>Role</DescriptionList.Term>
        <DescriptionList.Details>Administrator</DescriptionList.Details>
      </DescriptionList.Item>
    </DescriptionList>
  ),
}

export const WithSpan: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionList.Item span={6}>
        <DescriptionList.Term>Project</DescriptionList.Term>
        <DescriptionList.Details>Versaur UI</DescriptionList.Details>
      </DescriptionList.Item>
      <DescriptionList.Item span={3}>
        <DescriptionList.Term>Status</DescriptionList.Term>
        <DescriptionList.Details>Active</DescriptionList.Details>
      </DescriptionList.Item>
      <DescriptionList.Item span={3}>
        <DescriptionList.Term>Contributors</DescriptionList.Term>
        <DescriptionList.Details>5</DescriptionList.Details>
      </DescriptionList.Item>
    </DescriptionList>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionList.Item>
        <DescriptionList.Term>Primary</DescriptionList.Term>
        <DescriptionList.Details color='primary'>Coral</DescriptionList.Details>
      </DescriptionList.Item>
      <DescriptionList.Item>
        <DescriptionList.Term>Secondary</DescriptionList.Term>
        <DescriptionList.Details color='secondary'>
          Sage
        </DescriptionList.Details>
      </DescriptionList.Item>
      <DescriptionList.Item>
        <DescriptionList.Term>Tertiary</DescriptionList.Term>
        <DescriptionList.Details color='tertiary'>Mist</DescriptionList.Details>
      </DescriptionList.Item>
    </DescriptionList>
  ),
}
