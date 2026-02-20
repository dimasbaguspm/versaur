import type { Meta, StoryObj } from "@storybook/react"
import { AppLayout } from "@versaur/react/blocks"

const meta = {
  argTypes: {
    variant: {
      control: "select",
      options: ["classic", "full", "mobile", "split"],
    },
  },
  component: AppLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Blocks/AppLayout",
} satisfies Meta<typeof AppLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Classic: Story = {
  render: (args) => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout {...args} variant="classic">
        <AppLayout.Header>
          <div
            style={{
              padding: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
            }}
          >
            Header
          </div>
        </AppLayout.Header>

        <AppLayout.SideLeft>
          <div style={{ padding: "1.5rem", backgroundColor: "#e8e8e8" }}>Sidebar Left</div>
        </AppLayout.SideLeft>

        <AppLayout.Main>
          <div style={{ height: "200vh", padding: "2rem", backgroundColor: "#ffffff" }}>
            Main Content (Scrollable - 200vh)
          </div>
        </AppLayout.Main>
      </AppLayout>
    </div>
  ),
  args: {
    variant: "classic",
  },
}

export const FullWidth: Story = {
  render: (args) => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout {...args} variant="full">
        <AppLayout.Header>
          <div
            style={{
              padding: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
            }}
          >
            Header
          </div>
        </AppLayout.Header>

        <AppLayout.Main>
          <div style={{ height: "200vh", padding: "2rem", backgroundColor: "#ffffff" }}>
            Main Content (Full Width - Scrollable - 200vh)
          </div>
        </AppLayout.Main>
      </AppLayout>
    </div>
  ),
  args: {
    variant: "full",
  },
}

export const Split: Story = {
  render: (args) => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout {...args} variant="split">
        <AppLayout.Header>
          <div
            style={{
              padding: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
            }}
          >
            Header
          </div>
        </AppLayout.Header>

        <AppLayout.SideLeft>
          <div style={{ padding: "1.5rem", backgroundColor: "#e8e8e8" }}>Sidebar Left</div>
        </AppLayout.SideLeft>

        <AppLayout.Main>
          <div style={{ height: "200vh", padding: "2rem", backgroundColor: "#ffffff" }}>
            Main Content (Scrollable - 200vh)
          </div>
        </AppLayout.Main>

        <AppLayout.SideRight>
          <div style={{ padding: "1.5rem", backgroundColor: "#e8e8e8" }}>Sidebar Right</div>
        </AppLayout.SideRight>
      </AppLayout>
    </div>
  ),
  args: {
    variant: "split",
  },
}

export const Mobile: Story = {
  render: (args) => (
    <div style={{ height: "500px", maxWidth: "400px", border: "1px solid #ddd" }}>
      <AppLayout {...args} variant="mobile">
        <AppLayout.Header>
          <div
            style={{
              padding: "0 1rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
            }}
          >
            Header
          </div>
        </AppLayout.Header>

        <AppLayout.Main>
          <div style={{ height: "200vh", padding: "1rem", backgroundColor: "#ffffff" }}>
            Main Content (Scrollable - 200vh)
          </div>
        </AppLayout.Main>

        <AppLayout.Bottom>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "0.5rem",
              backgroundColor: "#e8e8e8",
              height: "100%",
            }}
          >
            Bottom Navigation
          </div>
        </AppLayout.Bottom>
      </AppLayout>
    </div>
  ),
  args: {
    variant: "mobile",
  },
}

export const Centered: Story = {
  render: (args) => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout {...args} variant="classic">
        <AppLayout.Header>
          <div
            style={{
              padding: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
            }}
          >
            Header
          </div>
        </AppLayout.Header>

        <AppLayout.Main placement="centred">
          <div style={{ height: "200vh", padding: "2rem", backgroundColor: "#ffeeee" }}>
            Centered Main Content (Scrollable - 200vh)
          </div>
        </AppLayout.Main>
      </AppLayout>
    </div>
  ),
}

export const FullPageViewport: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <div style={{ "--vers-comp-app-layout-min-height": "100vh" } as React.CSSProperties}>
      <AppLayout {...args} variant="classic">
      <AppLayout.Header>
        <div
          style={{
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            height: "100%",
            backgroundColor: "#f0f0f0",
          }}
        >
          Header - Full Page (min-height: 100vh)
        </div>
      </AppLayout.Header>

      <AppLayout.SideLeft>
        <div style={{ padding: "1.5rem", backgroundColor: "#e8e8e8" }}>
          Sidebar Left
          <br />
          <small>Fills viewport height</small>
        </div>
      </AppLayout.SideLeft>

      <AppLayout.Main>
        <div style={{ padding: "2rem", backgroundColor: "#ffffff" }}>
          <h2>Full Page Layout</h2>
          <p>
            This story demonstrates AppLayout filling the entire viewport height using the{" "}
            <code>--vers-comp-app-layout-min-height: 100vh</code> CSS custom property.
          </p>
          <p>
            Key points:
            <ul>
              <li>Set min-height to 100vh to fill the entire viewport</li>
              <li>The grid rows (header, main, bottom) distribute the available space</li>
              <li>Main content area scrolls when it exceeds available height</li>
              <li>No double scroll - only AppLayout.Main scrolls internally</li>
            </ul>
          </p>
        </div>
      </AppLayout.Main>

      <AppLayout.Bottom>
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#e8e8e8",
            textAlign: "center",
            fontSize: "0.875rem",
          }}
        >
          Footer - Stays at bottom of viewport
        </div>
      </AppLayout.Bottom>
      </AppLayout>
    </div>
  ),
  args: {
    variant: "classic",
  },
}
