import type { Meta, StoryObj } from "@storybook/react"
import { MobileOrTabletBreakpoint } from "./mobile-or-tablet-breakpoint"

const meta = {
  title: "Utils/Breakpoints/MobileOrTabletBreakpoint",
  component: MobileOrTabletBreakpoint,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Renders children only when viewport is mobile or tablet (< 1024px). Hides on desktop. Resize the browser to test.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MobileOrTabletBreakpoint>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#fce7f3",
          borderRadius: "0.5rem",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem 0" }}>📱 Mobile & Tablet View</h3>
        <p style={{ margin: 0, fontSize: "0.875rem", color: "#831843" }}>
          This content is visible on mobile and tablet (viewport &lt; 1024px)
        </p>
      </div>
    ),
  },
}

export const CompactLayout: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#f3e8ff",
          borderRadius: "0.5rem",
          border: "2px solid #7c3aed",
        }}
      >
        <h2 style={{ margin: 0, color: "#7c3aed" }}>Compact Navigation</h2>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.875rem" }}>
          Single column layout for smaller screens
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
          backgroundColor: "#fce7f3",
          borderRadius: "0.5rem",
          maxWidth: "400px",
        }}
      >
        <h4 style={{ margin: "0 0 0.5rem 0" }}>useMobileOrTabletBreakpoint Hook</h4>
        <p style={{ margin: 0, fontSize: "0.875rem" }}>
          This component uses the <code>useMobileOrTabletBreakpoint()</code> hook internally, which evaluates
          the media query <code>(max-width: 1023px)</code>.
        </p>
        <hr style={{ margin: "0.75rem 0", border: "1px solid #be185d" }} />
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.75rem", color: "#be185d" }}>
          Use this when you want to show content on small and medium screens, but hide it on desktop.
        </p>
      </div>
    ),
  },
}
