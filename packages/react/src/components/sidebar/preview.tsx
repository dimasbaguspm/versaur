"use client"

import { ChevronDownIcon, FileCodeIcon, LayoutDashboardIcon } from "@versaur/icons"
import React from "react"

import { Icon } from "../icon"
import { Sidebar } from "./sidebar"

/**
 * Example 1: Expanded Sidebar
 */
function ExpandedSidebar() {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <div style={{ border: "1px solid #e5e7eb", display: "flex", height: "400px" }}>
      <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}>
        <Sidebar.Header>
          <Sidebar.Item href="/dashboard" active icon={<Icon as={LayoutDashboardIcon} color="inherit" />}>
            Dashboard
          </Sidebar.Item>
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Group label="Navigation" icon={<Icon as={FileCodeIcon} color="inherit" />}>
            <Sidebar.Item href="/projects" icon={<Icon as={FileCodeIcon} color="inherit" />}>
              Projects
            </Sidebar.Item>
            <Sidebar.Item href="/settings" icon={<Icon as={ChevronDownIcon} color="inherit" />}>
              Settings
            </Sidebar.Item>
          </Sidebar.Group>
        </Sidebar.Body>
        <Sidebar.Footer>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              backgroundColor: "#f3f4f6",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              fontSize: "0.875rem",
              padding: "0.75rem",
              width: "100%",
            }}
          >
            {isOpen ? "Collapse" : "Expand"}
          </button>
        </Sidebar.Footer>
      </Sidebar>
      <div style={{ flex: 1, overflow: "auto", padding: "1rem" }}>
        <h3>Content Area</h3>
        <p>Toggle sidebar with button at bottom. Use arrow keys to navigate items.</p>
      </div>
    </div>
  )
}

/**
 * Example 2: Collapsed Sidebar
 */
function CollapsedSidebar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div style={{ border: "1px solid #e5e7eb", display: "flex", height: "400px" }}>
      <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}>
        <Sidebar.Header>
          <Sidebar.Item href="/dashboard" active icon={<Icon as={LayoutDashboardIcon} color="inherit" />}>
            Dashboard
          </Sidebar.Item>
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Group label="Navigation">
            <Sidebar.Item href="/projects" icon={<Icon as={FileCodeIcon} color="inherit" />}>
              Projects
            </Sidebar.Item>
            <Sidebar.Item href="/settings" icon={<Icon as={ChevronDownIcon} color="inherit" />}>
              Settings
            </Sidebar.Item>
          </Sidebar.Group>
        </Sidebar.Body>
        <Sidebar.Footer>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              backgroundColor: "#f3f4f6",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              fontSize: "0.875rem",
              padding: "0.75rem",
              width: "100%",
            }}
          >
            {isOpen ? "Collapse" : "Expand"}
          </button>
        </Sidebar.Footer>
      </Sidebar>
      <div style={{ flex: 1, overflow: "auto", padding: "1rem" }}>
        <h3>Content Area</h3>
        <p>Sidebar is collapsed (icons only). Click expand button to open.</p>
      </div>
    </div>
  )
}

/**
 * Example 3: Sidebar with multiple groups and divider
 */
function SidebarWithGroups() {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <div style={{ border: "1px solid #e5e7eb", display: "flex", height: "500px" }}>
      <Sidebar isOpen={isOpen} onOpenChange={setIsOpen}>
        <Sidebar.Header>
          <Sidebar.Item href="/dashboard" active icon={<Icon as={LayoutDashboardIcon} color="inherit" />}>
            Dashboard
          </Sidebar.Item>
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Group label="Main">
            <Sidebar.Item href="/projects" icon={<Icon as={FileCodeIcon} color="inherit" />}>
              Projects
            </Sidebar.Item>
            <Sidebar.Item href="/team" icon={<Icon as={ChevronDownIcon} color="inherit" />}>
              Team
            </Sidebar.Item>
          </Sidebar.Group>

          <Sidebar.Divider />

          <Sidebar.Group label="Tools">
            <Sidebar.Item href="/analytics" icon={<Icon as={FileCodeIcon} color="inherit" />}>
              Analytics
            </Sidebar.Item>
            <Sidebar.Item href="/settings" icon={<Icon as={ChevronDownIcon} color="inherit" />}>
              Settings
            </Sidebar.Item>
          </Sidebar.Group>
        </Sidebar.Body>
        <Sidebar.Footer>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              backgroundColor: "#f3f4f6",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              fontSize: "0.875rem",
              padding: "0.75rem",
              width: "100%",
            }}
          >
            {isOpen ? "Collapse" : "Expand"}
          </button>
        </Sidebar.Footer>
      </Sidebar>
      <div style={{ flex: 1, overflow: "auto", padding: "1rem" }}>
        <h3>Content Area</h3>
        <p>Multiple groups with divider. Use arrow keys to navigate.</p>
      </div>
    </div>
  )
}

/**
 * Example 4: Keyboard Navigation
 */
function SidebarKeyboardNav() {
  const [isOpen, setIsOpen] = React.useState(true)
  const [activeItem, setActiveItem] = React.useState("/dashboard")

  const handleItemClick = (href: string) => {
    setActiveItem(href)
  }

  return (
    <div style={{ border: "1px solid #e5e7eb", display: "flex", height: "400px" }}>
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
              backgroundColor: "#f3f4f6",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              fontSize: "0.875rem",
              padding: "0.75rem",
              width: "100%",
            }}
          >
            {isOpen ? "Collapse" : "Expand"}
          </button>
        </Sidebar.Footer>
      </Sidebar>
      <div style={{ flex: 1, overflow: "auto", padding: "1rem" }}>
        <h3>Keyboard Navigation Demo</h3>
        <p>Focus on the sidebar and use:</p>
        <ul>
          <li>Arrow Up/Down: Navigate items</li>
          <li>Enter/Space: Activate focused item</li>
        </ul>
        <p>Active: {activeItem}</p>
      </div>
    </div>
  )
}

export const sidebarSections = [
  {
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
    key: "expanded",
    language: "tsx",
    preview: ExpandedSidebar,
    title: "Expanded Sidebar",
  },
  {
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
    key: "collapsed",
    language: "tsx",
    preview: CollapsedSidebar,
    title: "Collapsed Sidebar",
  },
  {
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
    key: "with-groups",
    language: "tsx",
    preview: SidebarWithGroups,
    title: "Sidebar with Groups",
  },
  {
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
    key: "keyboard-nav",
    language: "tsx",
    preview: SidebarKeyboardNav,
    title: "Keyboard Navigation",
  },
]

export const sidebarProps = [
  {
    name: "Sidebar",
    props: [
      {
        default: "-",
        description: "Whether sidebar is expanded (required, controlled)",
        name: "isOpen",
        type: "boolean",
      },
      {
        default: "-",
        description: "Callback when sidebar open state changes",
        name: "onOpenChange",
        type: "(isOpen: boolean) => void",
      },
      {
        default: "-",
        description: "Sidebar.Header, Sidebar.Body, Sidebar.Footer",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
  {
    name: "Sidebar.Header",
    props: [
      {
        default: "-",
        description: "Header content (typically Sidebar.Item)",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
  {
    name: "Sidebar.Body",
    props: [
      {
        default: "-",
        description: "Main content (Sidebar.Group, Sidebar.Item, Sidebar.Divider)",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
  {
    name: "Sidebar.Footer",
    props: [
      {
        default: "-",
        description: "Footer content (typically buttons or info)",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
  {
    name: "Sidebar.Group",
    props: [
      {
        default: "-",
        description: "Group label/heading",
        name: "label",
        type: "ReactNode",
      },
      {
        default: "-",
        description: "Icon displayed next to label",
        name: "icon",
        type: "ReactNode",
      },
      {
        default: "-",
        description: "Sidebar.Item components in group",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
  {
    name: "Sidebar.Item",
    props: [
      {
        default: '"button"',
        description: "Polymorphic component (button, anchor, or Link)",
        name: "as",
        type: '"button" | "a" | ElementType',
      },
      {
        default: "-",
        description: "URL for link items (when as='a')",
        name: "href",
        type: "string",
      },
      {
        default: "false",
        description: "Indicates current/active item",
        name: "active",
        type: "boolean",
      },
      {
        default: "false",
        description: "Disables item interaction",
        name: "disabled",
        type: "boolean",
      },
      {
        default: "-",
        description: "Icon displayed left of label",
        name: "icon",
        type: "ReactNode",
      },
      {
        default: "-",
        description: "Item label/content",
        name: "children",
        type: "ReactNode",
      },
      {
        default: "-",
        description: "Click handler for buttons",
        name: "onClick",
        type: "(e: React.MouseEvent) => void",
      },
    ],
  },
  {
    name: "Sidebar.Divider",
    props: [
      {
        default: "-",
        description: "Visual divider (renders Hr component)",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
]

export const sidebarInstallation = {
  code: `// Using npm
npm install @versaur/react @versaur/core @versaur/icons

// Using pnpm
pnpm add @versaur/react @versaur/core @versaur/icons

// Using yarn
yarn add @versaur/react @versaur/core @versaur/icons`,
  language: "bash" as const,
}

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
  )
}
