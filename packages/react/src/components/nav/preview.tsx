"use client";

import React from "react";
import { Nav } from ".";
import {
  HomeIcon,
  FileCodeIcon,
  SettingsIcon,
  ChevronDownIcon,
} from "@versaur/icons";

/**
 * Example 1: Horizontal Nav with controlled value/onChange (recommended)
 */
function HorizontalNav() {
  const [active, setActive] = React.useState<string | number>("home");

  return (
    <Nav direction="horizontal" gap="sm" value={active} onChange={setActive}>
      <Nav.Item value="home" leftIcon={HomeIcon}>
        Home
      </Nav.Item>
      <Nav.Item value="docs" leftIcon={FileCodeIcon}>
        Docs
      </Nav.Item>
      <Nav.Item value="settings" leftIcon={SettingsIcon}>
        Settings
      </Nav.Item>
    </Nav>
  );
}

/**
 * Example 2: Vertical Nav with controlled value/onChange (SideBar style)
 */
function VerticalNav() {
  const [active, setActive] = React.useState<string | number>("dashboard");

  return (
    <Nav direction="vertical" gap="md" value={active} onChange={setActive}>
      <Nav.Item value="dashboard" leftIcon={HomeIcon}>
        Dashboard
      </Nav.Item>
      <Nav.Item value="docs" leftIcon={FileCodeIcon}>
        Documentation
      </Nav.Item>
      <Nav.Item value="settings" leftIcon={SettingsIcon}>
        Settings
      </Nav.Item>
    </Nav>
  );
}

/**
 * Example 3: NavItem with right icon (dropdown indicator)
 */
function NavWithRightIcon() {
  const [active, setActive] = React.useState<string | number>("products");

  return (
    <Nav direction="horizontal" gap="sm" value={active} onChange={setActive}>
      <Nav.Item value="products">Products</Nav.Item>
      <Nav.Item value="more" rightIcon={ChevronDownIcon}>
        More
      </Nav.Item>
    </Nav>
  );
}

/**
 * Example 4: NavItem as anchor links (uncontrolled)
 */
function NavAsLinks() {
  return (
    <Nav direction="horizontal" gap="sm">
      <Nav.Item as="a" href="/" active leftIcon={HomeIcon}>
        Home
      </Nav.Item>
      <Nav.Item as="a" href="/docs" leftIcon={FileCodeIcon}>
        Docs
      </Nav.Item>
      <Nav.Item as="a" href="/settings" leftIcon={SettingsIcon}>
        Settings
      </Nav.Item>
    </Nav>
  );
}

/**
 * Example 5: Disabled and Loading states
 */
function NavWithStates() {
  const [loading, setLoading] = React.useState(false);

  return (
    <Nav direction="horizontal" gap="sm">
      <Nav.Item value="home" active leftIcon={HomeIcon}>
        Home
      </Nav.Item>
      <Nav.Item value="archived" disabled leftIcon={FileCodeIcon}>
        Archived
      </Nav.Item>
      <Nav.Item
        value="settings"
        loading={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
        leftIcon={SettingsIcon}
      >
        {loading ? "Saving..." : "Settings"}
      </Nav.Item>
    </Nav>
  );
}

/**
 * Example 6: Compact spacing (TopBar style with xs gap)
 */
function CompactNav() {
  const [active, setActive] = React.useState<string | number>("home");

  return (
    <Nav direction="horizontal" gap="xs" value={active} onChange={setActive}>
      <Nav.Item value="home">Home</Nav.Item>
      <Nav.Item value="docs">Docs</Nav.Item>
      <Nav.Item value="api">API</Nav.Item>
    </Nav>
  );
}

export const navSections = [
  {
    key: "horizontal",
    title: "Horizontal Navigation",
    preview: HorizontalNav,
    code: `const [active, setActive] = useState('home');

<Nav direction="horizontal" gap="sm" value={active} onChange={setActive}>
  <Nav.Item value="home" leftIcon={HomeIcon}>
    Home
  </Nav.Item>
  <Nav.Item value="docs" leftIcon={FileCodeIcon}>
    Docs
  </Nav.Item>
  <Nav.Item value="settings" leftIcon={SettingsIcon}>
    Settings
  </Nav.Item>
</Nav>`,
    language: "tsx",
  },
  {
    key: "vertical",
    title: "Vertical Navigation",
    preview: VerticalNav,
    code: `const [active, setActive] = useState('dashboard');

<Nav direction="vertical" gap="md" value={active} onChange={setActive}>
  <Nav.Item value="dashboard" leftIcon={HomeIcon}>
    Dashboard
  </Nav.Item>
  <Nav.Item value="docs" leftIcon={FileCodeIcon}>
    Documentation
  </Nav.Item>
  <Nav.Item value="settings" leftIcon={SettingsIcon}>
    Settings
  </Nav.Item>
</Nav>`,
    language: "tsx",
  },
  {
    key: "right-icon",
    title: "With Right Icon",
    preview: NavWithRightIcon,
    code: `const [active, setActive] = useState('products');

<Nav direction="horizontal" gap="sm" value={active} onChange={setActive}>
  <Nav.Item value="products">Products</Nav.Item>
  <Nav.Item value="more" rightIcon={ChevronDownIcon}>
    More
  </Nav.Item>
</Nav>`,
    language: "tsx",
  },
  {
    key: "links",
    title: "As Anchor Links",
    preview: NavAsLinks,
    code: `<Nav direction="horizontal" gap="sm">
  <Nav.Item as="a" href="/" active leftIcon={HomeIcon}>
    Home
  </Nav.Item>
  <Nav.Item as="a" href="/docs" leftIcon={FileCodeIcon}>
    Docs
  </Nav.Item>
  <Nav.Item as="a" href="/settings" leftIcon={SettingsIcon}>
    Settings
  </Nav.Item>
</Nav>`,
    language: "tsx",
  },
  {
    key: "states",
    title: "Disabled and Loading States",
    preview: NavWithStates,
    code: `const [loading, setLoading] = useState(false);

<Nav direction="horizontal" gap="sm">
  <Nav.Item value="home" active leftIcon={HomeIcon}>
    Home
  </Nav.Item>
  <Nav.Item value="archived" disabled leftIcon={FileCodeIcon}>
    Archived
  </Nav.Item>
  <Nav.Item value="settings" loading={loading} leftIcon={SettingsIcon}>
    {loading ? "Saving..." : "Settings"}
  </Nav.Item>
</Nav>`,
    language: "tsx",
  },
  {
    key: "compact",
    title: "Compact Spacing",
    preview: CompactNav,
    code: `const [active, setActive] = useState('home');

<Nav direction="horizontal" gap="xs" value={active} onChange={setActive}>
  <Nav.Item value="home">Home</Nav.Item>
  <Nav.Item value="docs">Docs</Nav.Item>
  <Nav.Item value="api">API</Nav.Item>
</Nav>`,
    language: "tsx",
  },
];

export const navInstallation = {
  code: `import { Nav } from "@versaur/react/nav";
import { HomeIcon, FileCodeIcon } from "@versaur/icons";
import { useState } from "react";

export function MyNav() {
  const [active, setActive] = useState('home');

  return (
    <Nav direction="horizontal" gap="sm" value={active} onChange={setActive}>
      <Nav.Item value="home" leftIcon={HomeIcon}>Home</Nav.Item>
      <Nav.Item value="docs" leftIcon={FileCodeIcon}>Docs</Nav.Item>
    </Nav>
  );
}`,
  language: "tsx",
};

export const navProps = [
  {
    name: "direction",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Layout direction for the nav container",
  },
  {
    name: "gap",
    type: '"xs" | "sm" | "md" | "lg"',
    default: "undefined",
    description: "Space between nav items using Versaur spacing scale",
  },
  {
    name: "value",
    type: "string | number",
    default: "undefined",
    description: "Controlled value - which nav item is currently active",
  },
  {
    name: "onChange",
    type: "(value: string | number) => void",
    default: "undefined",
    description:
      "Callback when a nav item is selected (enables controlled mode)",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "undefined",
    description: "Nav.Item elements or other content",
  },
];

export const navItemProps = [
  {
    name: "as",
    type: "ElementType",
    default: '"button"',
    description:
      'Render as different element: "a", Link component, or custom component',
  },
  {
    name: "value",
    type: "string | number",
    default: "undefined",
    description: "Unique identifier for this item in controlled Nav mode",
  },
  {
    name: "active",
    type: "boolean",
    default: "false",
    description:
      "Whether this item is active (uncontrolled mode only, ignored if Nav has value/onChange)",
  },
  {
    name: "leftIcon",
    type: "ComponentType<SVGProps>",
    default: "undefined",
    description: "Icon to render on the left side of text",
  },
  {
    name: "rightIcon",
    type: "ComponentType<SVGProps>",
    default: "undefined",
    description: "Icon to render on the right side of text",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Loading state - disables interaction with visual indicator",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disabled state - prevents all interactions",
  },
];
