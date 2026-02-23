import type { Meta, StoryObj } from "@storybook/react"
import { AlertTriangleIcon, CheckCircleIcon, HelpCircleIcon, StarIcon } from "@versaur/icons"

import { Icon } from "../../primitive"
import { Features } from "../index"

const meta = {
  component: Features,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["column", "row"],
    },
  },
  tags: ["autodocs"],
  title: "Blocks/Features",
} satisfies Meta<typeof Features>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default column layout with stacked features
 */
export const Default: Story = {
  render: (args) => (
    <Features {...args}>
      <Features.Item icon={<Icon as={CheckCircleIcon} />}>Launch your project faster</Features.Item>
      <Features.Item icon={<Icon as={StarIcon} />}>First-class developer experience</Features.Item>
      <Features.Item icon={<Icon as={AlertTriangleIcon} />}>Production-ready components</Features.Item>
    </Features>
  ),
}

/**
 * Row layout with inline features
 */
export const Row: Story = {
  render: (args) => (
    <Features {...args} direction="row">
      <Features.Item icon={<Icon as={HelpCircleIcon} />}>Smart defaults</Features.Item>
      <Features.Item icon={<Icon as={StarIcon} />}>Highly customizable</Features.Item>
      <Features.Item icon={<Icon as={CheckCircleIcon} />}>Easy to scale</Features.Item>
    </Features>
  ),
}

/**
 * Features with tooltips on hover
 */
export const WithTooltip: Story = {
  render: (args) => (
    <Features {...args}>
      <Features.Item icon={<Icon as={CheckCircleIcon} />} aria-label="Deploy with a single click">
        One-click deployment
      </Features.Item>
      <Features.Item icon={<Icon as={HelpCircleIcon} />} aria-label="AI-powered code suggestions">
        AI assistance
      </Features.Item>
      <Features.Item icon={<Icon as={StarIcon} />}>Reliable and tested</Features.Item>
    </Features>
  ),
}

/**
 * Row layout with tooltips
 */
export const RowWithTooltip: Story = {
  render: (args) => (
    <Features {...args} direction="row">
      <Features.Item icon={<Icon as={CheckCircleIcon} />} aria-label="99.9% uptime guarantee">
        Reliable
      </Features.Item>
      <Features.Item icon={<Icon as={AlertTriangleIcon} />} aria-label="Built with modern technologies">
        Modern stack
      </Features.Item>
      <Features.Item icon={<Icon as={StarIcon} />} aria-label="5-star rated by developers">
        Highly rated
      </Features.Item>
    </Features>
  ),
}
