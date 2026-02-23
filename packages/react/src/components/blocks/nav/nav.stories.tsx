import type { Meta, StoryObj } from "@storybook/react"
import { HomeIcon, SettingsIcon, UserIcon } from "@versaur/icons"
import { Nav } from "../index"
import { useState } from "react"

const meta = {
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    gap: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
  component: Nav,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/Nav",
} satisfies Meta<typeof Nav>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>("home")
    return (
      <Nav {...args} value={value} onChange={setValue}>
        <Nav.Item value="home" active={value === "home"}>
          Home
        </Nav.Item>
        <Nav.Item value="about" active={value === "about"}>
          About
        </Nav.Item>
        <Nav.Item value="services" active={value === "services"}>
          Services
        </Nav.Item>
        <Nav.Item value="contact" active={value === "contact"}>
          Contact
        </Nav.Item>
      </Nav>
    )
  },
  args: {
    direction: "horizontal",
  },
}

export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>("home")
    return (
      <Nav {...args} value={value} onChange={setValue}>
        <Nav.Item value="home" active={value === "home"}>
          Home
        </Nav.Item>
        <Nav.Item value="about" active={value === "about"}>
          About
        </Nav.Item>
        <Nav.Item value="services" active={value === "services"}>
          Services
        </Nav.Item>
        <Nav.Item value="contact" active={value === "contact"}>
          Contact
        </Nav.Item>
      </Nav>
    )
  },
  args: {
    direction: "vertical",
  },
}

export const WithIcons: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>("home")
    return (
      <Nav {...args} value={value} onChange={setValue}>
        <Nav.Item value="home" leftIcon={HomeIcon} active={value === "home"}>
          Home
        </Nav.Item>
        <Nav.Item value="settings" leftIcon={SettingsIcon} active={value === "settings"}>
          Settings
        </Nav.Item>
        <Nav.Item value="user" leftIcon={UserIcon} active={value === "user"}>
          Profile
        </Nav.Item>
      </Nav>
    )
  },
  args: {
    direction: "horizontal",
  },
}

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>("home")
    return (
      <Nav {...args} value={value} onChange={setValue}>
        <Nav.Item value="home" active={value === "home"}>
          Home
        </Nav.Item>
        <Nav.Item value="disabled" disabled>
          Disabled
        </Nav.Item>
        <Nav.Item value="services" active={value === "services"}>
          Services
        </Nav.Item>
      </Nav>
    )
  },
  args: {
    direction: "horizontal",
  },
}

export const SmallGap: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>("nav1")
    return (
      <Nav {...args} value={value} onChange={setValue}>
        <Nav.Item value="nav1" active={value === "nav1"}>
          Nav 1
        </Nav.Item>
        <Nav.Item value="nav2" active={value === "nav2"}>
          Nav 2
        </Nav.Item>
        <Nav.Item value="nav3" active={value === "nav3"}>
          Nav 3
        </Nav.Item>
      </Nav>
    )
  },
  args: {
    direction: "horizontal",
    gap: "xs",
  },
}

export const LargeGap: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number>("page1")
    return (
      <Nav {...args} value={value} onChange={setValue}>
        <Nav.Item value="page1" active={value === "page1"}>
          Page 1
        </Nav.Item>
        <Nav.Item value="page2" active={value === "page2"}>
          Page 2
        </Nav.Item>
      </Nav>
    )
  },
  args: {
    direction: "horizontal",
    gap: "lg",
  },
}
