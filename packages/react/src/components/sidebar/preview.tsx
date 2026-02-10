"use client";

import React from "react";
import { Sidebar } from "./sidebar";
import { Icon } from "../icon";
import {
  ChevronDownIcon,
  LayoutDashboardIcon,
  FileCodeIcon,
} from "@versaur/icons";

/**
 * Example 1: Expanded Sidebar
 */
function ExpandedSidebar() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div
      style={{ display: "flex", height: "400px", border: "1px solid #e5e7eb" }}
    >
      <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}>
        <Sidebar.Header>
          <Sidebar.Item
            href="/dashboard"
            active
            icon={<Icon as={LayoutDashboardIcon} color="inherit" />}
          >
            Dashboard
          </Sidebar.Item>
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Group
            label="Navigation"
            icon={<Icon as={FileCodeIcon} color="inherit" />}
          >
            <Sidebar.Item
              href="/projects"
              icon={<Icon as={FileCodeIcon} color="inherit" />}
            >
              Projects
            </Sidebar.Item>
            <Sidebar.Item
              href="/settings"
              icon={<Icon as={ChevronDownIcon} color="inherit" />}
            >
              Settings
            </Sidebar.Item>
          </Sidebar.Group>
        </Sidebar.Body>
        <Sidebar.Footer>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "none",
              borderRadius: "0.375rem",
              backgroundColor: "#f3f4f6",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
          >
            {isOpen ? "Collapse" : "Expand"}
          </button>
        </Sidebar.Footer>
      </Sidebar>
      <div style={{ flex: 1, padding: "1rem", overflow: "auto" }}>
        <h3>Content Area</h3>
        <p>
          Toggle sidebar with button at bottom. Use arrow keys to navigate
          items.
        </p>
      </div>
    </div>
  );
}

/**
 * Example 2: Collapsed Sidebar
 */
function CollapsedSidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      style={{ display: "flex", height: "400px", border: "1px solid #e5e7eb" }}
    >
      <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}>
        <Sidebar.Header>
          <Sidebar.Item
            href="/dashboard"
            active
            icon={<Icon as={LayoutDashboardIcon} color="inherit" />}
          >
            Dashboard
          </Sidebar.Item>
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Group label="Navigation">
            <Sidebar.Item
              href="/projects"
              icon={<Icon as={FileCodeIcon} color="inherit" />}
            >
              Projects
            </Sidebar.Item>
            <Sidebar.Item
              href="/settings"
              icon={<Icon as={ChevronDownIcon} color="inherit" />}
            >
              Settings
            </Sidebar.Item>
          </Sidebar.Group>
        </Sidebar.Body>
        <Sidebar.Footer>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "none",
              borderRadius: "0.375rem",
              backgroundColor: "#f3f4f6",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
          >
            {isOpen ? "Collapse" : "Expand"}
          </button>
        </Sidebar.Footer>
      </Sidebar>
      <div style={{ flex: 1, padding: "1rem", overflow: "auto" }}>
        <h3>Content Area</h3>
        <p>Sidebar is collapsed (icons only). Click expand button to open.</p>
      </div>
    </div>
  );
}

/**
 * Example 3: Sidebar with multiple groups and divider
 */
function SidebarWithGroups() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div
      style={{ display: "flex", height: "500px", border: "1px solid #e5e7eb" }}
    >
      <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}>
        <Sidebar.Header>
          <Sidebar.Item
            href="/dashboard"
            active
            icon={<Icon as={LayoutDashboardIcon} color="inherit" />}
          >
            Dashboard
          </Sidebar.Item>
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Group label="Main">
            <Sidebar.Item
              href="/projects"
              icon={<Icon as={FileCodeIcon} color="inherit" />}
            >
              Projects
            </Sidebar.Item>
            <Sidebar.Item
              href="/team"
              icon={<Icon as={ChevronDownIcon} color="inherit" />}
            >
              Team
            </Sidebar.Item>
          </Sidebar.Group>

          <Sidebar.Divider />

          <Sidebar.Group label="Tools">
            <Sidebar.Item
              href="/analytics"
              icon={<Icon as={FileCodeIcon} color="inherit" />}
            >
              Analytics
            </Sidebar.Item>
            <Sidebar.Item
              href="/settings"
              icon={<Icon as={ChevronDownIcon} color="inherit" />}
            >
              Settings
            </Sidebar.Item>
          </Sidebar.Group>
        </Sidebar.Body>
        <Sidebar.Footer>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "none",
              borderRadius: "0.375rem",
              backgroundColor: "#f3f4f6",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
          >
            {isOpen ? "Collapse" : "Expand"}
          </button>
        </Sidebar.Footer>
      </Sidebar>
      <div style={{ flex: 1, padding: "1rem", overflow: "auto" }}>
        <h3>Content Area</h3>
        <p>Multiple groups with divider. Use arrow keys to navigate.</p>
      </div>
    </div>
  );
}

/**
 * Example 4: Keyboard Navigation
 */
function SidebarKeyboardNav() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState("/dashboard");

  const handleItemClick = (href: string) => {
    setActiveItem(href);
  };

  return (
    <div
      style={{ display: "flex", height: "400px", border: "1px solid #e5e7eb" }}
    >
      <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}>
        <Sidebar.Header>
          <Sidebar.Item
            as="button"
            active={activeItem === "/dashboard"}
            icon={<Icon as={LayoutDashboardIcon} color="inherit" />}
            onClick={() => handleItemClick("/dashboard")}
          >
            Dashboard
          </Sidebar.Item>
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Group label="Navigation">
            <Sidebar.Item
              as="button"
              active={activeItem === "/projects"}
              icon={<Icon as={FileCodeIcon} color="inherit" />}
              onClick={() => handleItemClick("/projects")}
            >
              Projects
            </Sidebar.Item>
            <Sidebar.Item
              as="button"
              active={activeItem === "/settings"}
              icon={<Icon as={ChevronDownIcon} color="inherit" />}
              onClick={() => handleItemClick("/settings")}
            >
              Settings
            </Sidebar.Item>
          </Sidebar.Group>
        </Sidebar.Body>
        <Sidebar.Footer>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "none",
              borderRadius: "0.375rem",
              backgroundColor: "#f3f4f6",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
          >
            {isOpen ? "Collapse" : "Expand"}
          </button>
        </Sidebar.Footer>
      </Sidebar>
      <div style={{ flex: 1, padding: "1rem", overflow: "auto" }}>
        <h3>Keyboard Navigation Demo</h3>
        <p>Focus on the sidebar and use:</p>
        <ul>
          <li>Arrow Up/Down: Navigate items</li>
          <li>Enter/Space: Activate focused item</li>
        </ul>
        <p>Active: {activeItem}</p>
      </div>
    </div>
  );
}

export const sidebarSections = [
  {
    key: "expanded",
    title: "Expanded Sidebar",
    preview: ExpandedSidebar,
    code: `import { Sidebar } from '@versaur/react/sidebar';
import { Icon } from '@versaur/react/icon';
import { LayoutDashboardIcon, FileCodeIcon } from '@versaur/icons';
import React from 'react';

export function ExpandedSidebar() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}>
      <Sidebar.Header>
        <Sidebar.Item
          href="/dashboard"
          active
          icon={<Icon as={LayoutDashboardIcon} color="inherit" />}
        >
          Dashboard
        </Sidebar.Item>
      </Sidebar.Header>
      <Sidebar.Body>
        <Sidebar.Group label="Navigation">
          <Sidebar.Item 
            href="/projects" 
            icon={<Icon as={FileCodeIcon} color="inherit" />}
          >
            Projects
          </Sidebar.Item>
        </Sidebar.Group>
      </Sidebar.Body>
      <Sidebar.Footer>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Collapse' : 'Expand'}
        </button>
      </Sidebar.Footer>
    </Sidebar>
  );
}`,
    language: "tsx",
  },
  {
    key: "collapsed",
    title: "Collapsed Sidebar",
    preview: CollapsedSidebar,
    code: `import { Sidebar } from '@versaur/react/sidebar';
import { Icon } from '@versaur/react/icon';
import { LayoutDashboardIcon } from '@versaur/icons';
import React from 'react';

export function CollapsedSidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}>
      <Sidebar.Header>
        <Sidebar.Item
          href="/dashboard"
          active
          icon={<Icon as={LayoutDashboardIcon} color="inherit" />}
        >
          Dashboard
        </Sidebar.Item>
      </Sidebar.Header>
      {/* ... rest of sidebar ... */}
    </Sidebar>
  );
}`,
    language: "tsx",
  },
  {
    key: "with-groups",
    title: "Sidebar with Groups",
    preview: SidebarWithGroups,
    code: `import { Sidebar } from '@versaur/react/sidebar';
import { Icon } from '@versaur/react/icon';
import { LayoutDashboardIcon, FileCodeIcon } from '@versaur/icons';
import React from 'react';

export function SidebarWithGroups() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}>
      <Sidebar.Header>
        <Sidebar.Item href="/dashboard" active 
          icon={<Icon as={LayoutDashboardIcon} color="inherit" />}
        >
          Dashboard
        </Sidebar.Item>
      </Sidebar.Header>
      <Sidebar.Body>
        <Sidebar.Group label="Main">
          <Sidebar.Item href="/projects" 
            icon={<Icon as={FileCodeIcon} color="inherit" />}
          >
            Projects
          </Sidebar.Item>
        </Sidebar.Group>
        <Sidebar.Divider />
        <Sidebar.Group label="Tools">
          <Sidebar.Item href="/settings" 
            icon={<Icon as={FileCodeIcon} color="inherit" />}
          >
            Settings
          </Sidebar.Item>
        </Sidebar.Group>
      </Sidebar.Body>
    </Sidebar>
  );
}`,
    language: "tsx",
  },
  {
    key: "keyboard-nav",
    title: "Keyboard Navigation",
    preview: SidebarKeyboardNav,
    code: `import { Sidebar } from '@versaur/react/sidebar';
import { Icon } from '@versaur/react/icon';
import { LayoutDashboardIcon } from '@versaur/icons';
import React from 'react';

export function SidebarKeyboardNav() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState('/dashboard');

  return (
    <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}>
      <Sidebar.Body>
        <Sidebar.Group label="Navigation">
          <Sidebar.Item
            as="button"
            active={activeItem === '/projects'}
            onClick={() => setActiveItem('/projects')}
            icon={<Icon as={LayoutDashboardIcon} color="inherit" />}
          >
            Projects
          </Sidebar.Item>
        </Sidebar.Group>
      </Sidebar.Body>
    </Sidebar>
  );
}

// Use Arrow Up/Down to navigate items
// Press Enter/Space to activate focused item`,
    language: "tsx",
  },
];

export const sidebarProps = [
  {
    name: "Sidebar",
    props: [
      {
        name: "isOpen",
        type: "boolean",
        description: "Whether sidebar is expanded (required, controlled)",
        default: "-",
      },
      {
        name: "onOpenChange",
        type: "(isOpen: boolean) => void",
        description: "Callback when sidebar open state changes",
        default: "-",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Sidebar.Header, Sidebar.Body, Sidebar.Footer",
        default: "-",
      },
    ],
  },
  {
    name: "Sidebar.Header",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Header content (typically Sidebar.Item)",
        default: "-",
      },
    ],
  },
  {
    name: "Sidebar.Body",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description:
          "Main content (Sidebar.Group, Sidebar.Item, Sidebar.Divider)",
        default: "-",
      },
    ],
  },
  {
    name: "Sidebar.Footer",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Footer content (typically buttons or info)",
        default: "-",
      },
    ],
  },
  {
    name: "Sidebar.Group",
    props: [
      {
        name: "label",
        type: "ReactNode",
        description: "Group label/heading",
        default: "-",
      },
      {
        name: "icon",
        type: "ReactNode",
        description: "Icon displayed next to label",
        default: "-",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Sidebar.Item components in group",
        default: "-",
      },
    ],
  },
  {
    name: "Sidebar.Item",
    props: [
      {
        name: "as",
        type: '"button" | "a" | ElementType',
        description: "Polymorphic component (button, anchor, or Link)",
        default: '"button"',
      },
      {
        name: "href",
        type: "string",
        description: "URL for link items (when as='a')",
        default: "-",
      },
      {
        name: "active",
        type: "boolean",
        description: "Indicates current/active item",
        default: "false",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Disables item interaction",
        default: "false",
      },
      {
        name: "icon",
        type: "ReactNode",
        description: "Icon displayed left of label",
        default: "-",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Item label/content",
        default: "-",
      },
      {
        name: "onClick",
        type: "(e: React.MouseEvent) => void",
        description: "Click handler for buttons",
        default: "-",
      },
    ],
  },
  {
    name: "Sidebar.Divider",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Visual divider (renders Hr component)",
        default: "-",
      },
    ],
  },
];

export const sidebarInstallation = {
  code: `// Using npm
npm install @versaur/react @versaur/core @versaur/icons

// Using pnpm
pnpm add @versaur/react @versaur/core @versaur/icons

// Using yarn
yarn add @versaur/react @versaur/core @versaur/icons`,
  language: "bash" as const,
};

export function SidebarPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <section>
        <h3>Expanded Sidebar</h3>
        <ExpandedSidebar />
      </section>
      <section>
        <h3>Collapsed Sidebar</h3>
        <CollapsedSidebar />
      </section>
      <section>
        <h3>With Groups and Dividers</h3>
        <SidebarWithGroups />
      </section>
      <section>
        <h3>Keyboard Navigation</h3>
        <SidebarKeyboardNav />
      </section>
    </div>
  );
}
