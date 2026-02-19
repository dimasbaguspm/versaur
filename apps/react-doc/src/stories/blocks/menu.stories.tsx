import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@versaur/react/primitive"
import { Menu } from "@versaur/react/blocks"
import { useState } from "react"

const meta = {
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
      ],
    },
  },
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/Menu",
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>()
    return (
      <div style={{ padding: "2rem" }}>
        <Button {...Menu.getTriggerProps({ id: "default-menu" })} variant="primary">
          Open Menu
        </Button>
        <Menu {...args} id="default-menu" value={value} onChange={setValue}>
          <Menu.Item value="option1">Option 1</Menu.Item>
          <Menu.Item value="option2">Option 2</Menu.Item>
          <Menu.Item value="option3">Option 3</Menu.Item>
        </Menu>
        {value && <p>Selected: {value}</p>}
      </div>
    )
  },
  args: {
    placement: "bottom",
  },
}

export const BottomPlacement: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>()
    return (
      <div style={{ padding: "2rem" }}>
        <Button {...Menu.getTriggerProps({ id: "bottom-menu" })} variant="secondary">
          Menu
        </Button>
        <Menu {...args} id="bottom-menu" value={value} onChange={setValue}>
          <Menu.Item value="edit">Edit</Menu.Item>
          <Menu.Item value="delete">Delete</Menu.Item>
          <Menu.Item value="share">Share</Menu.Item>
        </Menu>
      </div>
    )
  },
  args: {
    placement: "bottom",
  },
}

export const TopPlacement: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>()
    return (
      <div style={{ padding: "4rem 2rem 2rem" }}>
        <Button {...Menu.getTriggerProps({ id: "top-menu" })} variant="ghost">
          Options
        </Button>
        <Menu {...args} id="top-menu" value={value} onChange={setValue}>
          <Menu.Item value="save">Save</Menu.Item>
          <Menu.Item value="export">Export</Menu.Item>
          <Menu.Item value="print">Print</Menu.Item>
        </Menu>
      </div>
    )
  },
  args: {
    placement: "top",
  },
}

export const RightPlacement: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>()
    return (
      <div style={{ padding: "2rem", marginLeft: "10rem" }}>
        <Button {...Menu.getTriggerProps({ id: "right-menu" })} variant="primary">
          Actions
        </Button>
        <Menu {...args} id="right-menu" value={value} onChange={setValue}>
          <Menu.Item value="profile">Profile</Menu.Item>
          <Menu.Item value="settings">Settings</Menu.Item>
          <Menu.Item value="help">Help</Menu.Item>
          <Menu.Item value="logout">Logout</Menu.Item>
        </Menu>
      </div>
    )
  },
  args: {
    placement: "right",
  },
}

export const DisabledItems: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>()
    return (
      <div style={{ padding: "2rem" }}>
        <Button {...Menu.getTriggerProps({ id: "disabled-menu" })} variant="primary">
          Menu
        </Button>
        <Menu {...args} id="disabled-menu" value={value} onChange={setValue}>
          <Menu.Item value="active">Active Item</Menu.Item>
          <Menu.Item disabled>Disabled Item</Menu.Item>
          <Menu.Item value="another">Another Item</Menu.Item>
        </Menu>
      </div>
    )
  },
  args: {
    placement: "bottom",
  },
}

export const ManyItems: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>()
    const items = Array.from({ length: 10 }, (_, i) => ({
      value: `item-${i}`,
      label: `Item ${i + 1}`,
    }))
    return (
      <div style={{ padding: "2rem" }}>
        <Button {...Menu.getTriggerProps({ id: "many-items-menu" })} variant="primary">
          Select
        </Button>
        <Menu {...args} id="many-items-menu" value={value} onChange={setValue}>
          {items.map((item) => (
            <Menu.Item key={item.value} value={item.value}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    )
  },
  args: {
    placement: "bottom",
    maxHeight: 300,
  },
}
