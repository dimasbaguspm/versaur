import type { Meta, StoryObj } from "@storybook/react"

import { icons } from "./index"

const meta = {
  title: "Icons",
  parameters: {
    layout: "fullscreen",
    docs: {
      page: null,
    },
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * Complete icon library grid view. Each icon shows the SVG preview with its name below.
 */
export const Icons: Story = {
  render: () => (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ margin: "0 0 0.5rem 0", fontSize: "2rem", fontWeight: "bold" }}>
          Icon Library
        </h1>
        <p style={{ margin: 0, color: "#666", fontSize: "1rem" }}>
          Total: {Object.keys(icons).length} icons
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1400px",
        }}
      >
        {Object.entries(icons).map(([key, metadata]) => {
          const IconComponent = metadata.component

          return (
            <div
              key={key}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#333",
                }}
              >
                <IconComponent width={32} height={32} />
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: "500", color: "#333" }}>
                {metadata.name}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#999", wordBreak: "break-word" }}>
                {key}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  ),
}
