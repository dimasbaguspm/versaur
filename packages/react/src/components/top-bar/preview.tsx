"use client";

import { useState } from "react";
import { TopBar } from "./top-bar";
import { Avatar } from "../avatar";
import { Button } from "../button";
import { ButtonIcon } from "../button-icon";
import { Nav } from "../nav";
import { BellIcon, ChevronDownIcon } from "@versaur/icons";

/**
 * Example 1: TopBar with Nav navigation and trailing actions
 */
function TopBarBasic() {
  const [activeNav, setActiveNav] = useState<string>("home");

  return (
    <TopBar>
      <TopBar.Leading>
        <div style={{ fontWeight: "bold", marginRight: "1rem" }}>Logo</div>
        <Nav
          value={activeNav}
          onChange={(value) => setActiveNav(String(value))}
          direction="horizontal"
        >
          <Nav.Item value="home">Home</Nav.Item>
          <Nav.Item value="docs">Docs</Nav.Item>
          <Nav.Item value="pricing">Pricing</Nav.Item>
        </Nav>
      </TopBar.Leading>
      <TopBar.Trailing>
        <ButtonIcon variant="ghost" as={BellIcon} aria-label="Notifications" />
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Avatar size="md">DM</Avatar>
          <ButtonIcon
            variant="ghost"
            as={ChevronDownIcon}
            size="small"
            aria-label="User menu"
          />
        </div>
      </TopBar.Trailing>
    </TopBar>
  );
}

/**
 * Example 2: TopBar with Nav and centred content
 */
function TopBarWithSearch() {
  const [activeNav, setActiveNav] = useState<string>("dashboard");

  return (
    <TopBar>
      <TopBar.Leading>
        <div style={{ fontWeight: "bold", marginRight: "2rem" }}>App</div>
        <Nav
          value={activeNav}
          onChange={(value) => setActiveNav(String(value))}
          direction="horizontal"
        >
          <Nav.Item value="dashboard">Dashboard</Nav.Item>
          <Nav.Item value="analytics">Analytics</Nav.Item>
          <Nav.Item value="settings">Settings</Nav.Item>
        </Nav>
      </TopBar.Leading>
      <TopBar.Centred>
        <input
          placeholder="Search..."
          style={{
            padding: "0.5rem 0.75rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
            width: "250px",
          }}
        />
      </TopBar.Centred>
      <TopBar.Trailing>
        <Button variant="ghost">Docs</Button>
        <Button variant="ghost">Support</Button>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Avatar size="md">DM</Avatar>
          <ButtonIcon
            variant="ghost"
            as={ChevronDownIcon}
            size="small"
            aria-label="User menu"
          />
        </div>
      </TopBar.Trailing>
    </TopBar>
  );
}

/**
 * Example 3: Simple TopBar with ghost buttons only
 */
function TopBarGhost() {
  return (
    <TopBar>
      <TopBar.Leading>
        <div style={{ fontWeight: "bold" }}>Products</div>
      </TopBar.Leading>
      <TopBar.Trailing>
        <Button variant="ghost">Sign In</Button>
        <Button variant="primary">Get Started</Button>
      </TopBar.Trailing>
    </TopBar>
  );
}

export const topBarSections = [
  {
    key: "basic",
    title: "TopBar with Nav Navigation",
    preview: TopBarBasic,
    code: `import { useState } from 'react';
import { TopBar } from '@versaur/react';
import { Nav } from '@versaur/react';
import { Avatar } from '@versaur/react';
import { ButtonIcon } from '@versaur/react';
import { BellIcon, ChevronDownIcon } from '@versaur/icons';

export function TopBarBasic() {
  const [activeNav, setActiveNav] = useState<string>('home');

  return (
    <TopBar>
      <TopBar.Leading>
        <div style={{ fontWeight: 'bold', marginRight: '1rem' }}>Logo</div>
        <Nav value={activeNav} onChange={setActiveNav} direction="horizontal">
          <Nav.Item value="home">Home</Nav.Item>
          <Nav.Item value="docs">Docs</Nav.Item>
          <Nav.Item value="pricing">Pricing</Nav.Item>
        </Nav>
      </TopBar.Leading>
      <TopBar.Trailing>
        <ButtonIcon as={BellIcon} aria-label="Notifications" />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Avatar size="sm">DM</Avatar>
          <ButtonIcon as={ChevronDownIcon} aria-label="User menu" />
        </div>
      </TopBar.Trailing>
    </TopBar>
  );
}`,
    language: "tsx",
  },
  {
    key: "with-search",
    title: "TopBar with Search & Ghost Buttons",
    preview: TopBarWithSearch,
    code: `import { useState } from 'react';
import { TopBar } from '@versaur/react';
import { Nav } from '@versaur/react';
import { Avatar } from '@versaur/react';
import { Button } from '@versaur/react';
import { ButtonIcon } from '@versaur/react';
import { ChevronDownIcon } from '@versaur/icons';

export function TopBarWithSearch() {
  const [activeNav, setActiveNav] = useState<string>('dashboard');

  return (
    <TopBar>
      <TopBar.Leading>
        <div style={{ fontWeight: 'bold', marginRight: '2rem' }}>App</div>
        <Nav value={activeNav} onChange={setActiveNav} direction="horizontal">
          <Nav.Item value="dashboard">Dashboard</Nav.Item>
          <Nav.Item value="analytics">Analytics</Nav.Item>
          <Nav.Item value="settings">Settings</Nav.Item>
        </Nav>
      </TopBar.Leading>
      <TopBar.Centred>
        <input placeholder="Search..." />
      </TopBar.Centred>
      <TopBar.Trailing>
        <Button variant="ghost">Docs</Button>
        <Button variant="ghost">Support</Button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Avatar size="sm">JS</Avatar>
          <ButtonIcon as={ChevronDownIcon} aria-label="Account menu" />
        </div>
      </TopBar.Trailing>
    </TopBar>
  );
}`,
    language: "tsx",
  },
  {
    key: "ghost-buttons",
    title: "TopBar with Ghost Buttons",
    preview: TopBarGhost,
    code: `import { TopBar } from '@versaur/react';
import { Button } from '@versaur/react';

export function TopBarGhost() {
  return (
    <TopBar>
      <TopBar.Leading>
        <div style={{ fontWeight: 'bold' }}>Products</div>
      </TopBar.Leading>
      <TopBar.Trailing>
        <Button variant="ghost">Sign In</Button>
        <Button variant="primary">Get Started</Button>
      </TopBar.Trailing>
    </TopBar>
  );
}`,
    language: "tsx",
  },
];

export const topBarProps = [
  {
    name: "TopBar",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "TopBar.Leading, TopBar.Centred, and/or TopBar.Trailing",
        default: "-",
      },
    ],
  },
  {
    name: "TopBar.Leading",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Logo, brand, or left-aligned content",
        default: "-",
      },
    ],
  },
  {
    name: "TopBar.Centred",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Center-aligned content (search, title, etc)",
        default: "-",
      },
    ],
  },
  {
    name: "TopBar.Trailing",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Right-aligned content (actions, avatar, etc)",
        default: "-",
      },
    ],
  },
];

export const topBarInstallation = {
  code: `// Using npm
npm install @versaur/react @versaur/core

// Using pnpm
pnpm add @versaur/react @versaur/core

// Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};
