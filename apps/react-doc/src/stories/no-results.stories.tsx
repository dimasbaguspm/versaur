import type { Meta, StoryObj } from "@storybook/react"
import { SearchIcon } from "@versaur/icons"
import { Button, NoResults } from "@versaur/react"

const meta = {
  component: NoResults,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Feedback/NoResults",
} satisfies Meta<typeof NoResults>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: SearchIcon,
    title: "No Results Found",
  },
}

export const WithSubtitle: Story = {
  args: {
    icon: SearchIcon,
    title: "No Results Found",
    subtitle: "Try adjusting your search filters or keywords",
  },
}

export const WithAction: Story = {
  render: (args) => <NoResults {...args} action={<Button variant="primary">Create New Item</Button>} />,
  args: {
    icon: SearchIcon,
    title: "No Items",
    subtitle: "Start by creating your first item",
  },
}

export const SearchEmpty: Story = {
  render: (args) => <NoResults {...args} action={<Button variant="secondary">Clear Filters</Button>} />,
  args: {
    icon: SearchIcon,
    title: "No Search Results",
    subtitle: "We couldn't find any items matching your search query",
  },
}

export const DataEmpty: Story = {
  render: (args) => <NoResults {...args} action={<Button variant="primary">Load Data</Button>} />,
  args: {
    icon: SearchIcon,
    title: "No Data Available",
    subtitle: "Check back later or try refreshing the page",
  },
}

export const ListEmpty: Story = {
  render: (args) => <NoResults {...args} action={<Button variant="primary">Add Item</Button>} />,
  args: {
    icon: SearchIcon,
    title: "Your List is Empty",
    subtitle: "Nothing to show here yet",
  },
}
