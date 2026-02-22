import type { Meta, StoryObj } from "@storybook/react"
import { MenuIcon, SettingsIcon, FilterIcon } from "@versaur/icons"
import { Menu } from "@versaur/react/blocks"
import { ButtonIcon } from "@versaur/react/primitive"
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
  args: {
    id: "menu",
    children: undefined,
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

/**
 * Showcase menu with all four placement directions.
 * Each placement is shown with an icon-only button trigger.
 * Menu stays open on item click (default behavior).
 */
export const Placements: Story = {
  render: (args) => {
    const placements: Array<[string, "top" | "bottom" | "left" | "right"]> = [
      ["Top", "top"],
      ["Bottom", "bottom"],
      ["Left", "left"],
      ["Right", "right"],
    ]

    return (
      <div
        style={{
          padding: "4rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "4rem",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {placements.map(([label, placement]) => {
          const menuId = `menu-placement-${placement}`
          const [value, setValue] = useState<string | number | undefined>()

          return (
            <div
              key={placement}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
            >
              <div style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-text-secondary)" }}>{label}</div>
              <ButtonIcon
                {...Menu.getTriggerProps({ id: menuId })}
                as={MenuIcon}
                aria-label={`Open ${label} menu`}
                variant="ghost"
              />
              <Menu {...args} id={menuId} placement={placement} value={value} onChange={setValue}>
                <Menu.Item value="edit">Edit</Menu.Item>
                <Menu.Item value="delete">Delete</Menu.Item>
                <Menu.Item value="share">Share</Menu.Item>
              </Menu>
            </div>
          )
        })}
      </div>
    )
  },
}

/**
 * Showcase different menu item states: default, selected, disabled, and click behavior.
 *
 * Demonstrates:
 * - Active/selected state (visual highlight with primary color)
 * - Disabled state (reduced opacity, not clickable)
 * - Controlled selection with onChange
 * - Menu that stays open on click (default behavior)
 * - Menu that closes on click (closeOnClick: true)
 */
export const ItemStates: Story = {
  render: (args) => {
    const [staysOpen, setStaysOpen] = useState<string | number>("settings")
    const [closesOnClick, setClosesOnClick] = useState<string | number>("preferences")

    return (
      <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "3rem" }}>
        {/* Menu that stays open on click */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <div style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", textAlign: "center" }}>
            Menu stays open on click (default)
          </div>
          <ButtonIcon
            {...Menu.getTriggerProps({ id: "stays-open-menu" })}
            as={SettingsIcon}
            aria-label="Open settings menu (stays open)"
            variant="ghost"
          />
          <Menu {...args} id="stays-open-menu" value={staysOpen} onChange={setStaysOpen}>
            <Menu.Item value="preferences">Preferences</Menu.Item>
            <Menu.Item value="settings">Settings</Menu.Item>
            <Menu.Item disabled>Advanced (Disabled)</Menu.Item>
            <Menu.Item value="reset">Reset</Menu.Item>
          </Menu>
          {staysOpen && (
            <p style={{ fontSize: "0.875rem" }}>
              Selected: <strong>{staysOpen}</strong>
            </p>
          )}
        </div>

        {/* Menu that closes on click */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <div style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", textAlign: "center" }}>
            Menu closes on click (closeOnClick: true)
          </div>
          <ButtonIcon
            {...Menu.getTriggerProps({ id: "closes-on-click-menu" })}
            as={SettingsIcon}
            aria-label="Open settings menu (closes on click)"
            variant="ghost"
          />
          <Menu {...args} id="closes-on-click-menu" value={closesOnClick} onChange={setClosesOnClick} closeOnClick>
            <Menu.Item value="preferences">Preferences</Menu.Item>
            <Menu.Item value="settings">Settings</Menu.Item>
            <Menu.Item disabled>Advanced (Disabled)</Menu.Item>
            <Menu.Item value="reset">Reset</Menu.Item>
          </Menu>
          {closesOnClick && (
            <p style={{ fontSize: "0.875rem" }}>
              Selected: <strong>{closesOnClick}</strong>
            </p>
          )}
        </div>
      </div>
    )
  },
  args: {
    placement: "bottom",
  },
}

/**
 * Showcase menu with many items and height constraint.
 *
 * Demonstrates:
 * - Menu list scrolling when content exceeds maxHeight
 * - Useful for filtering or selection from large lists
 * - closeOnClick: true for single selection use case
 */
export const WithConstraints: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>()
    const items = Array.from({ length: 12 }, (_, i) => ({
      value: `filter-${i}`,
      label: `Filter Option ${i + 1}`,
    }))

    return (
      <div style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <div style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", textAlign: "center" }}>
          Select an option - menu closes after selection
          <br />
          (Scroll inside menu to see all options)
        </div>
        <ButtonIcon
          {...Menu.getTriggerProps({ id: "constraints-menu" })}
          as={FilterIcon}
          aria-label="Open filter menu"
          variant="ghost"
        />
        <Menu {...args} id="constraints-menu" value={value} onChange={setValue} closeOnClick>
          {items.map((item) => (
            <Menu.Item key={item.value} value={item.value}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
        {value && (
          <p style={{ fontSize: "0.875rem" }}>
            Selected: <strong>{value}</strong>
          </p>
        )}
      </div>
    )
  },
  args: {
    placement: "bottom",
    maxHeight: 280,
  },
}
