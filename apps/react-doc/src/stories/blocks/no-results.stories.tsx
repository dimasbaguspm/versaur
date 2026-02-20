import type { Meta, StoryObj } from "@storybook/react"
import { SearchIcon } from "@versaur/icons"
import { NoResults } from "@versaur/react/blocks"
import { Button } from "@versaur/react/primitive"

const meta = {
  component: NoResults,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/NoResults",
} satisfies Meta<typeof NoResults>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: SearchIcon,
    title: "No Results Found",
  },
}

export const WithAction: Story = {
  args: {
    icon: SearchIcon,
    title: "No Items",
    subtitle: "Try adjusting your search criteria or create a new item to get started",
    action: <Button variant="outline">Create New</Button>,
  },
}
