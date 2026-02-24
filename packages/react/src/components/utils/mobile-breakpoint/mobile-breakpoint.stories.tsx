import type { Meta, StoryObj } from "@storybook/react"
import { MobileBreakpoint } from "./mobile-breakpoint"

const meta = {
  title: "Utils/Breakpoints/MobileBreakpoint",
  component: MobileBreakpoint,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Renders children only when viewport is at mobile breakpoint (< 640px). Resize the browser to test.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MobileBreakpoint>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#f0f4f8",
          borderRadius: "0.5rem",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem 0" }}>📱 Mobile View</h3>
        <p style={{ margin: 0, fontSize: "0.875rem", color: "#4a5568" }}>
          This content is only visible on mobile devices (viewport &lt; 640px)
        </p>
      </div>
    ),
  },
}

export const WithDifferentContent: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#fed7d7",
          borderRadius: "0.5rem",
          border: "2px solid #c53030",
        }}
      >
        <h2 style={{ margin: 0, color: "#c53030" }}>Mobile-Only Navigation</h2>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.875rem" }}>
          Hamburger menu appears here on mobile
        </p>
      </div>
    ),
  },
}

export const Documentation: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#e0e7ff",
          borderRadius: "0.5rem",
          maxWidth: "400px",
        }}
      >
        <h4 style={{ margin: "0 0 0.5rem 0" }}>useMatchMedia Hook</h4>
        <p style={{ margin: 0, fontSize: "0.875rem" }}>
          This component uses the <code>useMobileBreakpoint()</code> hook internally, which evaluates
          the media query <code>(max-width: 639px)</code>.
        </p>
        <hr style={{ margin: "0.75rem 0", border: "1px solid #4c51bf" }} />
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.75rem", color: "#4c51bf" }}>
          Try resizing your browser window or opening DevTools to test different breakpoints.
        </p>
      </div>
    ),
  },
}
