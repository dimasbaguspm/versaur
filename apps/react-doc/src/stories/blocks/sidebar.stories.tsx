import type { Meta, StoryObj } from "@storybook/react"
import { HomeIcon, SettingsIcon, UserIcon, TrashIcon } from "@versaur/icons"
import { Button, Text } from "@versaur/react/primitive"
import { Sidebar } from "@versaur/react/blocks"
import { useState } from "react"

const meta = {
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Blocks/Sidebar",
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true)
    return (
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
          <Sidebar.Header>
            <Text weight="bold" size="lg">
              Menu
            </Text>
          </Sidebar.Header>
          <Sidebar.Body>
            <Sidebar.Item active icon={<HomeIcon width={20} height={20} />}>
              Home
            </Sidebar.Item>
            <Sidebar.Item icon={<UserIcon width={20} height={20} />}>Profile</Sidebar.Item>
            <Sidebar.Item icon={<SettingsIcon width={20} height={20} />}>Settings</Sidebar.Item>
          </Sidebar.Body>
          <Sidebar.Footer>
            <Sidebar.Item icon={<TrashIcon width={20} height={20} />}>Delete</Sidebar.Item>
          </Sidebar.Footer>
        </Sidebar>
        <div style={{ flex: 1, padding: "2rem" }}>
          <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Open"} Sidebar</Button>
          <Text>Main content here</Text>
        </div>
      </div>
    )
  },
}

export const WithGroups: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true)
    return (
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
          <Sidebar.Header>
            <Text weight="bold">Dashboard</Text>
          </Sidebar.Header>
          <Sidebar.Body>
            <Sidebar.Group label="Main">
              <Sidebar.Item active icon={<HomeIcon width={20} height={20} />}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item icon={<UserIcon width={20} height={20} />}>Users</Sidebar.Item>
            </Sidebar.Group>
            <Sidebar.Divider />
            <Sidebar.Group label="Settings">
              <Sidebar.Item icon={<SettingsIcon width={20} height={20} />}>Configuration</Sidebar.Item>
              <Sidebar.Item>Preferences</Sidebar.Item>
            </Sidebar.Group>
          </Sidebar.Body>
        </Sidebar>
        <div style={{ flex: 1, padding: "2rem" }}>
          <Text>Content area</Text>
        </div>
      </div>
    )
  },
}

export const Collapsed: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
          <Sidebar.Header>
            <Text weight="bold">App</Text>
          </Sidebar.Header>
          <Sidebar.Body>
            <Sidebar.Item active icon={<HomeIcon width={20} height={20} />}>
              Home
            </Sidebar.Item>
            <Sidebar.Item icon={<SettingsIcon width={20} height={20} />}>Settings</Sidebar.Item>
          </Sidebar.Body>
        </Sidebar>
        <div style={{ flex: 1, padding: "2rem" }}>
          <Button onClick={() => setIsOpen(!isOpen)}>Toggle Sidebar</Button>
        </div>
      </div>
    )
  },
}

export const Simple: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true)
    return (
      <div style={{ display: "flex" }}>
        <Sidebar {...args} isOpen={isOpen}>
          <Sidebar.Body>
            <Sidebar.Item active>Home</Sidebar.Item>
            <Sidebar.Item>About</Sidebar.Item>
            <Sidebar.Item>Contact</Sidebar.Item>
          </Sidebar.Body>
        </Sidebar>
        <div style={{ flex: 1, padding: "1rem" }}>
          <Text>Main content</Text>
        </div>
      </div>
    )
  },
}
