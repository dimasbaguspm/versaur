"use client";

import React from "react";
import { BottomBar } from "./bottom-bar";
import { Icon } from "../icon";
import { HomeIcon, SearchIcon, UserIcon } from "@versaur/icons";

/**
 * Example 1: Icon-only BottomBar
 */
function IconOnlyBottomBar() {
  const [activeItem, setActiveItem] = React.useState(0);

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
  );
}

/**
 * Example 2: Icon with text BottomBar
 */
function IconWithTextBottomBar() {
  const [activeItem, setActiveItem] = React.useState(0);

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
  );
}

/**
 * Example 3: Active state demonstration
 */
function ActiveStateBottomBar() {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: "8px" }}>
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
    </div>
  );
}

/**
 * Preview sections with code examples
 */
export const bottomBarSections = [
  {
    key: "icon-only",
    title: "Icon Only",
    preview: IconOnlyBottomBar,
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
    language: "tsx",
  },
  {
    key: "icon-with-text",
    title: "Icon With Text",
    preview: IconWithTextBottomBar,
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
    language: "tsx",
  },
  {
    key: "active-state",
    title: "Active & Disabled States",
    preview: ActiveStateBottomBar,
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
    language: "tsx",
  },
];

export const bottomBarProps = [
  {
    name: "BottomBar",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "BottomBar.Item components",
        default: "-",
      },
    ],
  },
  {
    name: "BottomBar.Item",
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
        description: "Icon displayed above text",
        default: "-",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Item text label (optional)",
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
];

export const bottomBarInstallation = {
  code: `// Using npm
npm install @versaur/react @versaur/core @versaur/icons

// Using pnpm
pnpm add @versaur/react @versaur/core @versaur/icons

// Using yarn
yarn add @versaur/react @versaur/core @versaur/icons`,
  language: "bash" as const,
};

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
  );
}
