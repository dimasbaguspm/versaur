"use client"

import { HomeIcon, SearchIcon, UserIcon } from "@versaur/icons"
import React from "react"

import { Icon } from "../icon"
import { BottomBar } from "./bottom-bar"

/**
 * Example 1: Icon-only BottomBar
 */
function IconOnlyBottomBar() {
  const [activeItem, setActiveItem] = React.useState(0)

  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: "8px" }}>
      <BottomBar>
        <BottomBar.Item
          as="button"
          active={activeItem === 0}
          icon={<Icon as={HomeIcon} color="inherit" />}
          onClick={() => setActiveItem(0)}
        />
        <BottomBar.Item
          as="button"
          active={activeItem === 1}
          icon={<Icon as={SearchIcon} color="inherit" />}
          onClick={() => setActiveItem(1)}
        />
        <BottomBar.Item
          as="button"
          active={activeItem === 2}
          icon={<Icon as={UserIcon} color="inherit" />}
          onClick={() => setActiveItem(2)}
        />
      </BottomBar>
    </div>
  )
}

/**
 * Example 2: Icon with text BottomBar
 */
function IconWithTextBottomBar() {
  const [activeItem, setActiveItem] = React.useState(0)

  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: "8px" }}>
      <BottomBar>
        <BottomBar.Item
          as="button"
          active={activeItem === 0}
          icon={<Icon as={HomeIcon} color="inherit" />}
          onClick={() => setActiveItem(0)}
        >
          Home
        </BottomBar.Item>
        <BottomBar.Item
          as="button"
          active={activeItem === 1}
          icon={<Icon as={SearchIcon} color="inherit" />}
          onClick={() => setActiveItem(1)}
        >
          Search
        </BottomBar.Item>
        <BottomBar.Item
          as="button"
          active={activeItem === 2}
          icon={<Icon as={UserIcon} color="inherit" />}
          onClick={() => setActiveItem(2)}
        >
          Profile
        </BottomBar.Item>
      </BottomBar>
    </div>
  )
}

/**
 * Example 3: Active state demonstration
 */
function ActiveStateBottomBar() {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: "8px" }}>
      <BottomBar>
        <BottomBar.Item as="button" active={true} icon={<Icon as={HomeIcon} color="inherit" />}>
          Home
        </BottomBar.Item>
        <BottomBar.Item as="button" icon={<Icon as={SearchIcon} color="inherit" />}>
          Search
        </BottomBar.Item>
        <BottomBar.Item as="button" disabled={true} icon={<Icon as={UserIcon} color="inherit" />}>
          Profile
        </BottomBar.Item>
      </BottomBar>
    </div>
  )
}

/**
 * Preview sections with code examples
 */
export const bottomBarSections = [
  {
    code: `import { BottomBar } from '@versaur/react/bottom-bar';
import { Icon } from '@versaur/react/icon';
import { HomeIcon, SearchIcon, UserIcon } from '@versaur/icons';
import React from 'react';

export function IconOnlyBottomBar() {
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <BottomBar>
      <BottomBar.Item
        as="button"
        active={activeItem === 0}
        icon={<Icon as={HomeIcon} color="inherit" />}
        onClick={() => setActiveItem(0)}
      />
      <BottomBar.Item
        as="button"
        active={activeItem === 1}
        icon={<Icon as={SearchIcon} color="inherit" />}
        onClick={() => setActiveItem(1)}
      />
      <BottomBar.Item
        as="button"
        active={activeItem === 2}
        icon={<Icon as={UserIcon} color="inherit" />}
        onClick={() => setActiveItem(2)}
      />
    </BottomBar>
  );
}`,
    key: "icon-only",
    language: "tsx",
    preview: IconOnlyBottomBar,
    title: "Icon Only",
  },
  {
    code: `import { BottomBar } from '@versaur/react/bottom-bar';
import { Icon } from '@versaur/react/icon';
import { HomeIcon, SearchIcon, UserIcon } from '@versaur/icons';
import React from 'react';

export function IconWithTextBottomBar() {
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <BottomBar>
      <BottomBar.Item
        as="button"
        active={activeItem === 0}
        icon={<Icon as={HomeIcon} color="inherit" />}
        onClick={() => setActiveItem(0)}
      >
        Home
      </BottomBar.Item>
      <BottomBar.Item
        as="button"
        active={activeItem === 1}
        icon={<Icon as={SearchIcon} color="inherit" />}
        onClick={() => setActiveItem(1)}
      >
        Search
      </BottomBar.Item>
      <BottomBar.Item
        as="button"
        active={activeItem === 2}
        icon={<Icon as={UserIcon} color="inherit" />}
        onClick={() => setActiveItem(2)}
      >
        Profile
      </BottomBar.Item>
    </BottomBar>
  );
}`,
    key: "icon-with-text",
    language: "tsx",
    preview: IconWithTextBottomBar,
    title: "Icon With Text",
  },
  {
    code: `import { BottomBar } from '@versaur/react/bottom-bar';
import { Icon } from '@versaur/react/icon';
import { HomeIcon, SearchIcon, UserIcon } from '@versaur/icons';

export function ActiveStateBottomBar() {
  return (
    <BottomBar>
      <BottomBar.Item
        as="button"
        active={true}
        icon={<Icon as={HomeIcon} color="inherit" />}
      >
        Home
      </BottomBar.Item>
      <BottomBar.Item
        as="button"
        icon={<Icon as={SearchIcon} color="inherit" />}
      >
        Search
      </BottomBar.Item>
      <BottomBar.Item
        as="button"
        disabled={true}
        icon={<Icon as={UserIcon} color="inherit" />}
      >
        Profile
      </BottomBar.Item>
    </BottomBar>
  );
}`,
    key: "active-state",
    language: "tsx",
    preview: ActiveStateBottomBar,
    title: "Active & Disabled States",
  },
]

export const bottomBarProps = [
  {
    name: "BottomBar",
    props: [
      {
        default: "-",
        description: "BottomBar.Item components",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
  {
    name: "BottomBar.Item",
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
        description: "Icon displayed above text",
        name: "icon",
        type: "ReactNode",
      },
      {
        default: "-",
        description: "Item text label (optional)",
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
]

export const bottomBarInstallation = {
  code: `// Using npm
npm install @versaur/react @versaur/core @versaur/icons

// Using pnpm
pnpm add @versaur/react @versaur/core @versaur/icons

// Using yarn
yarn add @versaur/react @versaur/core @versaur/icons`,
  language: "bash" as const,
}

export function BottomBarPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {bottomBarSections.map((section) => (
        <section key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
        </section>
      ))}
    </div>
  )
}
