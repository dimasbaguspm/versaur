import type { Meta, StoryObj } from "@storybook/react"
import { AttributeList } from "@versaur/react/blocks"
import { Badge } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    columns: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6"],
    },
  },
  component: AttributeList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/AttributeList",
} satisfies Meta<typeof AttributeList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "900px" }}>
      <AttributeList {...args}>
        <AttributeList.Item columnSpan="2" title="Name">
          John Doe
        </AttributeList.Item>
        <AttributeList.Item columnSpan="1" title="Status">
          <Badge variant="success" size="small">
            Active
          </Badge>
        </AttributeList.Item>
        <AttributeList.Item columnSpan="1" title="Email">
          john@example.com
        </AttributeList.Item>
        <AttributeList.Item columnSpan="1" title="Phone">
          +1 (555) 123-4567
        </AttributeList.Item>
        <AttributeList.Item columnSpan="1" title="Location">
          San Francisco
        </AttributeList.Item>
      </AttributeList>
    </div>
  ),
  args: {
    columns: "3",
  },
}

export const ProfileCard: Story = {
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "800px" }}>
      <AttributeList {...args} columns="4">
        <AttributeList.Item columnSpan="4" title="Full Name">
          Margaret Ellen Johnson
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="Title">
          Senior Designer
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="Department">
          Creative Services
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="Email">
          margaret@company.com
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="Phone">
          ext. 5432
        </AttributeList.Item>
        <AttributeList.Item columnSpan="4" title="Expertise">
          UX/UI Design, Brand Strategy, User Research, Prototyping, Figma, Adobe Creative Suite
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="Years of Experience">
          12+
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="Reports To">
          Creative Director
        </AttributeList.Item>
      </AttributeList>
    </div>
  ),
  args: {
    columns: "4",
  },
}

export const WithAdvancedFeatures: Story = {
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "900px" }}>
      <AttributeList {...args} columns="6">
        <AttributeList.Item columnSpan="6" title="Project">
          Web Platform Redesign 2024
        </AttributeList.Item>
        <AttributeList.Item columnSpan="3" title="Client">
          Enterprise Corp
        </AttributeList.Item>
        <AttributeList.Item columnSpan="3" title="Budget">
          $150,000
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="Start Date">
          January 2024
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="End Date">
          April 2024
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="Status">
          <Badge variant="warning" size="small">
            In Progress
          </Badge>
        </AttributeList.Item>
        <AttributeList.Item columnSpan="4" title="Team Members">
          Sarah (Lead), Mike (Design), Alice (Development), Tom (QA)
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="Priority">
          <Badge variant="danger" size="small">
            High
          </Badge>
        </AttributeList.Item>
      </AttributeList>
    </div>
  ),
  args: {
    columns: "6",
  },
}

export const WithLineClamp: Story = {
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "900px" }}>
      <AttributeList {...args} columns="4">
        <AttributeList.Item columnSpan="4" title="Summary" contentLineClamp="1">
          This is a summary that will be clamped to a single line, with any overflow hidden behind an ellipsis.
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="Description" contentLineClamp="2">
          This is a longer description that will be limited to two lines of text before truncating with ellipsis. This
          helps keep the layout clean and consistent.
        </AttributeList.Item>
        <AttributeList.Item columnSpan="2" title="Notes" contentLineClamp="5">
          This section allows up to five lines of content. It can display longer text without being truncated too
          aggressively. This is useful for sections where you want to show more context but still maintain a reasonable
          visual footprint. The text will automatically wrap to multiple lines as needed until reaching the line limit.
        </AttributeList.Item>
      </AttributeList>
    </div>
  ),
  args: {
    columns: "4",
  },
}
