import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "../../primitive/index"
import { AttributeList } from "../index"

const meta = {
  argTypes: {
    layout: {
      control: "select",
      options: ["stacked", "tabular"],
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
        <AttributeList.Item area="span 2" title="Name">
          John Doe
        </AttributeList.Item>
        <AttributeList.Item title="Status">
          <Badge variant="success" size="small">
            Active
          </Badge>
        </AttributeList.Item>
        <AttributeList.Item title="Email">john@example.com</AttributeList.Item>
        <AttributeList.Item title="Phone">+1 (555) 123-4567</AttributeList.Item>
        <AttributeList.Item title="Location">San Francisco</AttributeList.Item>
      </AttributeList>
    </div>
  ),
  args: {
    columns: "repeat(3, 1fr)",
  },
}

export const ProfileCard: Story = {
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "800px" }}>
      <AttributeList {...args} columns="repeat(4, 1fr)">
        <AttributeList.Item area="span 4" title="Full Name">
          Margaret Ellen Johnson
        </AttributeList.Item>
        <AttributeList.Item area="span 2" title="Title">
          Senior Designer
        </AttributeList.Item>
        <AttributeList.Item area="span 2" title="Department">
          Creative Services
        </AttributeList.Item>
        <AttributeList.Item area="span 2" title="Email">
          margaret@company.com
        </AttributeList.Item>
        <AttributeList.Item area="span 2" title="Phone">
          ext. 5432
        </AttributeList.Item>
        <AttributeList.Item area="span 4" title="Expertise">
          UX/UI Design, Brand Strategy, User Research, Prototyping, Figma, Adobe Creative Suite
        </AttributeList.Item>
        <AttributeList.Item area="span 2" title="Years of Experience">
          12+
        </AttributeList.Item>
        <AttributeList.Item area="span 2" title="Reports To">
          Creative Director
        </AttributeList.Item>
      </AttributeList>
    </div>
  ),
  args: {
    columns: "repeat(4, 1fr)",
  },
}

export const WithAdvancedFeatures: Story = {
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "900px" }}>
      <AttributeList {...args} columns="repeat(6, 1fr)">
        <AttributeList.Item area="span 6" title="Project">
          Web Platform Redesign 2024
        </AttributeList.Item>
        <AttributeList.Item area="span 3" title="Client">
          Enterprise Corp
        </AttributeList.Item>
        <AttributeList.Item area="span 3" title="Budget">
          $150,000
        </AttributeList.Item>
        <AttributeList.Item area="span 2" title="Start Date">
          January 2024
        </AttributeList.Item>
        <AttributeList.Item area="span 2" title="End Date">
          April 2024
        </AttributeList.Item>
        <AttributeList.Item area="span 2" title="Status">
          <Badge variant="warning" size="small">
            In Progress
          </Badge>
        </AttributeList.Item>
        <AttributeList.Item area="span 4" title="Team Members">
          Sarah (Lead), Mike (Design), Alice (Development), Tom (QA)
        </AttributeList.Item>
        <AttributeList.Item area="span 2" title="Priority">
          <Badge variant="danger" size="small">
            High
          </Badge>
        </AttributeList.Item>
      </AttributeList>
    </div>
  ),
  args: {
    columns: "repeat(6, 1fr)",
  },
}

export const Tabular: Story = {
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <AttributeList {...args} layout="tabular" columns="1fr">
        <AttributeList.Item title="Full Name">Margaret Ellen Johnson</AttributeList.Item>
        <AttributeList.Item title="Email">margaret@company.com</AttributeList.Item>
        <AttributeList.Item title="Title">Senior Designer</AttributeList.Item>
        <AttributeList.Item title="Department">Creative Services</AttributeList.Item>
        <AttributeList.Item title="Years of Experience">12+</AttributeList.Item>
      </AttributeList>
    </div>
  ),
  args: {
    layout: "tabular",
  },
}
