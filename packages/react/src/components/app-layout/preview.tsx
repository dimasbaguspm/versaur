import { AppLayout } from "./app-layout";
import { Button } from "../button";
import { Text } from "../text";
import { Heading } from "../heading";
import { LayoutDashboardIcon, UserIcon, HomeIcon } from "@versaur/icons";

function ClassicLayoutPreview() {
  return (
    <div style={{ height: "400px", border: "1px solid #e5e5e5" }}>
      <AppLayout variant="classic">
        <AppLayout.Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0 1.5rem",
              height: "100%",
            }}
          >
            <Heading as="h4" style={{ margin: 0 }}>
              Dashboard
            </Heading>
            <div style={{ marginLeft: "auto" }}>
              <Button variant="ghost" size="small">
                <UserIcon size="1.25rem" />
              </Button>
            </div>
          </div>
        </AppLayout.Header>

        <AppLayout.SideLeft>
          <div style={{ padding: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Button
                variant="ghost"
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                <LayoutDashboardIcon size="1.25rem" />
                <span>Dashboard</span>
              </Button>
              <Button
                variant="ghost"
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                <HomeIcon size="1.25rem" />
                <span>Home</span>
              </Button>
            </div>
          </div>
        </AppLayout.SideLeft>

        <AppLayout.Main placement="centred">
          <div style={{ padding: "2rem" }}>
            <Heading as="h2" style={{ marginBottom: "1rem" }}>
              Main Content
            </Heading>
            <Text>
              This is the main content area that scrolls independently from the
              header and sidebar. Content is centered with a constrained
              max-width.
            </Text>
          </div>
        </AppLayout.Main>

        <AppLayout.Bottom>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "0.5rem",
            }}
          >
            <Button variant="ghost" size="small">
              <LayoutDashboardIcon size="1.5rem" />
            </Button>
            <Button variant="ghost" size="small">
              <HomeIcon size="1.5rem" />
            </Button>
            <Button variant="ghost" size="small">
              <UserIcon size="1.5rem" />
            </Button>
          </div>
        </AppLayout.Bottom>
      </AppLayout>
    </div>
  );
}

function MobileLayoutPreview() {
  return (
    <div style={{ height: "400px", border: "1px solid #e5e5e5" }}>
      <AppLayout variant="mobile">
        <AppLayout.Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0 1.5rem",
              height: "100%",
            }}
          >
            <Heading as="h4" style={{ margin: 0 }}>
              App
            </Heading>
            <div style={{ marginLeft: "auto" }}>
              <Button variant="ghost" size="small">
                <UserIcon size="1.25rem" />
              </Button>
            </div>
          </div>
        </AppLayout.Header>

        <AppLayout.Main>
          <div style={{ padding: "2rem" }}>
            <Heading as="h2" style={{ marginBottom: "1rem" }}>
              Mobile Content
            </Heading>
            <Text>
              Full width content area with bottom navigation for primary
              actions.
            </Text>
          </div>
        </AppLayout.Main>

        <AppLayout.Bottom>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "0.5rem",
            }}
          >
            <Button variant="ghost" size="small">
              <LayoutDashboardIcon size="1.5rem" />
            </Button>
            <Button variant="ghost" size="small">
              <HomeIcon size="1.5rem" />
            </Button>
            <Button variant="ghost" size="small">
              <UserIcon size="1.5rem" />
            </Button>
          </div>
        </AppLayout.Bottom>
      </AppLayout>
    </div>
  );
}

function SplitLayoutPreview() {
  return (
    <div style={{ height: "400px", border: "1px solid #e5e5e5" }}>
      <AppLayout variant="split">
        <AppLayout.Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0 1.5rem",
              height: "100%",
            }}
          >
            <Heading as="h4" style={{ margin: 0 }}>
              Dashboard
            </Heading>
          </div>
        </AppLayout.Header>

        <AppLayout.SideLeft>
          <div style={{ padding: "1.5rem" }}>
            <Heading as="h5">Navigation</Heading>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              <Button
                variant="ghost"
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                Dashboard
              </Button>
              <Button
                variant="ghost"
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                Reports
              </Button>
            </div>
          </div>
        </AppLayout.SideLeft>

        <AppLayout.Main>
          <div style={{ padding: "2rem" }}>
            <Heading as="h2" style={{ marginBottom: "1rem" }}>
              Center Content
            </Heading>
            <Text>Main area with both sidebar panels available.</Text>
          </div>
        </AppLayout.Main>

        <AppLayout.SideRight>
          <div style={{ padding: "1.5rem" }}>
            <Heading as="h5">Properties</Heading>
            <Text color="secondary" style={{ marginTop: "1rem" }}>
              Right sidebar content
            </Text>
          </div>
        </AppLayout.SideRight>

        <AppLayout.Bottom>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "0.5rem",
            }}
          >
            <Button variant="ghost" size="small">
              <LayoutDashboardIcon size="1.5rem" />
            </Button>
            <Button variant="ghost" size="small">
              <HomeIcon size="1.5rem" />
            </Button>
          </div>
        </AppLayout.Bottom>
      </AppLayout>
    </div>
  );
}

function FullWidthLayoutPreview() {
  return (
    <div style={{ height: "400px", border: "1px solid #e5e5e5" }}>
      <AppLayout variant="full">
        <AppLayout.Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0 1.5rem",
              height: "100%",
            }}
          >
            <Heading as="h4" style={{ margin: 0 }}>
              Full Width
            </Heading>
          </div>
        </AppLayout.Header>

        <AppLayout.Main>
          <div style={{ padding: "2rem" }}>
            <Heading as="h2" style={{ marginBottom: "1rem" }}>
              Maximized Content
            </Heading>
            <Text>
              This layout provides maximum space for content by hiding all
              sidebars and bottom navigation.
            </Text>
          </div>
        </AppLayout.Main>
      </AppLayout>
    </div>
  );
}

export const appLayoutSections = [
  {
    title: "Classic Layout",
    description:
      "Header with left sidebar and main content area. The classic three-pane layout for desktop applications.",
    preview: ClassicLayoutPreview,
    code: `<AppLayout variant="classic">
  <AppLayout.Header>{/* Header content */}</AppLayout.Header>
  <AppLayout.SideLeft>{/* Navigation */}</AppLayout.SideLeft>
  <AppLayout.Main>{/* Main content */}</AppLayout.Main>
  <AppLayout.Bottom>{/* Mobile nav */}</AppLayout.Bottom>
</AppLayout>`,
    language: "tsx",
  },
  {
    title: "Mobile Layout",
    description:
      "Single column layout optimized for mobile with bottom navigation for primary actions.",
    preview: MobileLayoutPreview,
    code: `<AppLayout variant="mobile">
  <AppLayout.Header>{/* Compact header */}</AppLayout.Header>
  <AppLayout.Main>{/* Full width content */}</AppLayout.Main>
  <AppLayout.Bottom>{/* Bottom navigation */}</AppLayout.Bottom>
</AppLayout>`,
    language: "tsx",
  },
  {
    title: "Split Layout",
    description:
      "Header with both left and right sidebars for complex dashboards with multiple panels.",
    preview: SplitLayoutPreview,
    code: `<AppLayout variant="split" showSideRight>
  <AppLayout.Header>{/* Header */}</AppLayout.Header>
  <AppLayout.SideLeft>{/* Left nav */}</AppLayout.SideLeft>
  <AppLayout.Main>{/* Center content */}</AppLayout.Main>
  <AppLayout.SideRight>{/* Right panel */}</AppLayout.SideRight>
  <AppLayout.Bottom>{/* Bottom nav */}</AppLayout.Bottom>
</AppLayout>`,
    language: "tsx",
  },
  {
    title: "Full Width Layout",
    description:
      "Maximizes content area by hiding all sidebars and bottom navigation.",
    preview: FullWidthLayoutPreview,
    code: `<AppLayout variant="full">
  <AppLayout.Header>{/* Header */}</AppLayout.Header>
  <AppLayout.Main>{/* Full width content */}</AppLayout.Main>
</AppLayout>`,
    language: "tsx",
  },
];

export const appLayoutProps = [
  {
    name: "variant",
    type: '"classic" | "mobile" | "split" | "full"',
    default: '"classic"',
    description:
      "Layout template variant controlling region arrangement. Classic has left sidebar, mobile has bottom nav, split has both sidebars, full maximizes content.",
  },
  {
    name: "showHeader",
    type: "boolean",
    default: "true",
    description: "Show or hide the header region",
  },
  {
    name: "showSideLeft",
    type: "boolean",
    default: "true",
    description: "Show or hide the left sidebar region",
  },
  {
    name: "showSideRight",
    type: "boolean",
    default: "false",
    description: "Show or hide the right sidebar region",
  },
  {
    name: "showBottom",
    type: "boolean",
    default: "true",
    description: "Show or hide the bottom navigation region",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description: "Additional CSS class names for the root element",
  },
];

export const appLayoutMainProps = [
  {
    name: "placement",
    type: '"full-width" | "centred"',
    default: '"full-width"',
    description:
      "Content width constraint and alignment. full-width uses the entire main area; centred constrains width and centers the content",
  },
];

export const appLayoutInstallation = {
  code: `import { AppLayout } from '@versaur/react';

export function Dashboard() {
  return (
    <AppLayout variant="classic" showSideRight>
      <AppLayout.Header>
        {/* Header content */}
      </AppLayout.Header>
      <AppLayout.SideLeft>
        {/* Left sidebar */}
      </AppLayout.SideLeft>
      <AppLayout.Main>
        {/* Main content - scrolls independently */}
      </AppLayout.Main>
      <AppLayout.SideRight>
        {/* Right sidebar */}
      </AppLayout.SideRight>
      <AppLayout.Bottom>
        {/* Bottom navigation */}
      </AppLayout.Bottom>
    </AppLayout>
  );
}`,
  language: "tsx",
};
