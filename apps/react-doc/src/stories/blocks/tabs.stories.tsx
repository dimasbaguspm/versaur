import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "@versaur/react/blocks"
import { useState } from "react"

const meta = {
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/Tabs",
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("tab1")
    return (
      <div>
        <Tabs {...args} value={value} onChange={setValue}>
          <Tabs.Item value="tab1">Tab 1</Tabs.Item>
          <Tabs.Item value="tab2">Tab 2</Tabs.Item>
          <Tabs.Item value="tab3">Tab 3</Tabs.Item>
        </Tabs>
        <div style={{ padding: "2rem", border: "1px solid #ddd", marginTop: "1rem" }}>
          {value === "tab1" && <p>Content for Tab 1</p>}
          {value === "tab2" && <p>Content for Tab 2</p>}
          {value === "tab3" && <p>Content for Tab 3</p>}
        </div>
      </div>
    )
  },
}

export const FourTabs: Story = {
  render: (args) => {
    const [value, setValue] = useState("overview")
    return (
      <div>
        <Tabs {...args} value={value} onChange={setValue}>
          <Tabs.Item value="overview">Overview</Tabs.Item>
          <Tabs.Item value="details">Details</Tabs.Item>
          <Tabs.Item value="settings">Settings</Tabs.Item>
          <Tabs.Item value="logs">Logs</Tabs.Item>
        </Tabs>
        <div style={{ padding: "1.5rem" }}>
          {value === "overview" && <p>Overview content here</p>}
          {value === "details" && <p>Details content here</p>}
          {value === "settings" && <p>Settings content here</p>}
          {value === "logs" && <p>Logs content here</p>}
        </div>
      </div>
    )
  },
}

export const WithDisabled: Story = {
  render: (args) => {
    const [value, setValue] = useState("enabled1")
    return (
      <div>
        <Tabs {...args} value={value} onChange={setValue}>
          <Tabs.Item value="enabled1">Enabled 1</Tabs.Item>
          <Tabs.Item value="disabled" disabled>
            Disabled
          </Tabs.Item>
          <Tabs.Item value="enabled2">Enabled 2</Tabs.Item>
        </Tabs>
        <div style={{ padding: "1.5rem" }}>
          {value === "enabled1" && <p>First enabled tab</p>}
          {value === "enabled2" && <p>Second enabled tab</p>}
        </div>
      </div>
    )
  },
}

export const TwoTabs: Story = {
  render: (args) => {
    const [value, setValue] = useState("signin")
    return (
      <div>
        <Tabs {...args} value={value} onChange={setValue}>
          <Tabs.Item value="signin">Sign In</Tabs.Item>
          <Tabs.Item value="signup">Sign Up</Tabs.Item>
        </Tabs>
        <div style={{ padding: "2rem" }}>
          {value === "signin" && <p>Sign in form here</p>}
          {value === "signup" && <p>Sign up form here</p>}
        </div>
      </div>
    )
  },
}

export const ManyTabs: Story = {
  render: (args) => {
    const [value, setValue] = useState("tab-0")
    const tabs = Array.from({ length: 8 }, (_, i) => ({
      value: `tab-${i}`,
      label: `Tab ${i + 1}`,
    }))

    return (
      <div>
        <Tabs {...args} value={value} onChange={setValue}>
          {tabs.map((tab) => (
            <Tabs.Item key={tab.value} value={tab.value}>
              {tab.label}
            </Tabs.Item>
          ))}
        </Tabs>
        <div style={{ padding: "1.5rem" }}>
          <p>Content for {tabs.find((t) => t.value === value)?.label}</p>
        </div>
      </div>
    )
  },
}
