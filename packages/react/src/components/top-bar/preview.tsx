"use client";

import React from "react";
import { TopBar } from "./top-bar";
import { Avatar } from "../avatar";
import { ButtonIcon } from "../button-icon";
import { LoaderIcon, UserIcon } from "@versaur/icons";

/**
 * Example 1: Basic TopBar with nav and actions
 */
function BasicTopBar() {
  return (
    <TopBar variant="primary">
      <TopBar.Leading>
        <div style={{ fontWeight: "bold" }}>Logo</div>
        <TopBar.Nav>
          <TopBar.NavItem active>Home</TopBar.NavItem>
          <TopBar.NavItem>Docs</TopBar.NavItem>
          <TopBar.NavItem>Pricing</TopBar.NavItem>
        </TopBar.Nav>
      </TopBar.Leading>
      <TopBar.Trailing>
        <TopBar.Actions>
          <ButtonIcon as={UserIcon} aria-label="User Profile" />
          <ButtonIcon as={LoaderIcon} aria-label="Settings" />
        </TopBar.Actions>
        <Avatar size="sm">DM</Avatar>
      </TopBar.Trailing>
    </TopBar>
  );
}

/**
 * Example 2: TopBar with NavItem as anchor links
 */
function TopBarWithLinks() {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <TopBar variant="secondary">
      <TopBar.Leading>
        <div style={{ fontWeight: "bold" }}>Brand</div>
        <TopBar.Nav>
          {/* NavItem works with button (default) - use onClick for navigation */}
          <TopBar.NavItem active onClick={() => handleNavigation("/")}>
            Home
          </TopBar.NavItem>
          <TopBar.NavItem onClick={() => handleNavigation("/docs")}>
            Docs
          </TopBar.NavItem>
          <TopBar.NavItem onClick={() => handleNavigation("/pricing")}>
            Pricing
          </TopBar.NavItem>
        </TopBar.Nav>
      </TopBar.Leading>
      <TopBar.Trailing>
        <TopBar.Actions>
          <Avatar size="sm">AB</Avatar>
        </TopBar.Actions>
      </TopBar.Trailing>
    </TopBar>
  );
}

/**
 * Example 3: TopBar with mobile menu toggle
 */
function TopBarWithMobileToggle() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <TopBar variant="primary">
      <TopBar.Leading>
        <div style={{ fontWeight: "bold" }}>Logo</div>
        <TopBar.Nav>
          <TopBar.NavItem active>Home</TopBar.NavItem>
          <TopBar.NavItem>Docs</TopBar.NavItem>
        </TopBar.Nav>
      </TopBar.Leading>
      <TopBar.Trailing>
        <TopBar.Actions>
          <ButtonIcon as={UserIcon} aria-label="User Profile" />
        </TopBar.Actions>
        <TopBar.MobileToggle
          icon={LoaderIcon}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        />
      </TopBar.Trailing>
    </TopBar>
  );
}

export const topBarSections = [
  {
    key: "basic",
    title: "Basic TopBar",
    preview: BasicTopBar,
    code: `import { TopBar } from '@versaur/react';
import { Avatar } from '@versaur/react';
import { ButtonIcon } from '@versaur/react';
import { BellIcon, SettingsIcon } from '@versaur/icons';

export function BasicTopBar() {
  return (
    <TopBar variant="primary">
      <TopBar.Leading>
        <div>Logo</div>
        <TopBar.Nav>
          <TopBar.NavItem active>Home</TopBar.NavItem>
          <TopBar.NavItem>Docs</TopBar.NavItem>
          <TopBar.NavItem>Pricing</TopBar.NavItem>
        </TopBar.Nav>
      </TopBar.Leading>
      <TopBar.Trailing>
        <TopBar.Actions>
          <ButtonIcon as={BellIcon} aria-label="Notifications" />
          <ButtonIcon as={SettingsIcon} aria-label="Settings" />
        </TopBar.Actions>
        <Avatar size="sm">DM</Avatar>
      </TopBar.Trailing>
    </TopBar>
  );
}`,
    language: "tsx",
  },
  {
    key: "with-links",
    title: "TopBar with Links",
    preview: TopBarWithLinks,
    code: `import { TopBar } from '@versaur/react';
import { Avatar } from '@versaur/react';

export function TopBarWithLinks() {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <TopBar variant="secondary">
      <TopBar.Leading>
        <div>Brand</div>
        <TopBar.Nav>
          {/* NavItem with onClick for navigation */}
          <TopBar.NavItem active onClick={() => handleNavigation("/")}>
            Home
          </TopBar.NavItem>
          <TopBar.NavItem onClick={() => handleNavigation("/docs")}>
            Docs
          </TopBar.NavItem>
          <TopBar.NavItem onClick={() => handleNavigation("/pricing")}>
            Pricing
          </TopBar.NavItem>
        </TopBar.Nav>
      </TopBar.Leading>
      <TopBar.Trailing>
        <TopBar.Actions>
          <Avatar size="sm">AB</Avatar>
        </TopBar.Actions>
      </TopBar.Trailing>
    </TopBar>
  );
}`,
    language: "tsx",
  },
  {
    key: "with-mobile-toggle",
    title: "TopBar with Mobile Toggle",
    preview: TopBarWithMobileToggle,
    code: `import { TopBar } from '@versaur/react';
import { ButtonIcon } from '@versaur/react';
import { BellIcon, MenuIcon } from '@versaur/icons';
import React from 'react';

export function TopBarWithMobileToggle() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <TopBar variant="primary">
      <TopBar.Leading>
        <div>Logo</div>
      </TopBar.Leading>
      <TopBar.Trailing>
        <TopBar.Actions>
          <ButtonIcon as={BellIcon} aria-label="Notifications" />
        </TopBar.Actions>
        <TopBar.MobileToggle
          icon={MenuIcon}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
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
        name: "variant",
        type: '"primary" | "secondary"',
        description: "Background and text color variant",
        default: "primary",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "TopBar.Leading and TopBar.Trailing components",
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
        description: "Logo, brand, TopBar.Nav navigation content",
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
        description: "TopBar.Actions, Avatar, TopBar.MobileToggle",
        default: "-",
      },
    ],
  },
  {
    name: "TopBar.Nav",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "TopBar.NavItem components",
        default: "-",
      },
    ],
  },
  {
    name: "TopBar.NavItem",
    props: [
      {
        name: "as",
        type: 'ElementType | "button" | "a"',
        description: "Polymorphic element (button, a, Link, custom)",
        default: "button",
      },
      {
        name: "active",
        type: "boolean",
        description: 'Indicates current page (sets aria-current="page")',
        default: "false",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Nav item label or content",
        default: "-",
      },
    ],
  },
  {
    name: "TopBar.Actions",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Icon buttons (ButtonIcon), Avatar, etc",
        default: "-",
      },
    ],
  },
  {
    name: "TopBar.MobileToggle",
    props: [
      {
        name: "icon",
        type: "ComponentType<SVGProps>",
        description: "Icon component (MenuIcon, HamburgerIcon, etc)",
        default: "-",
      },
      {
        name: "isOpen",
        type: "boolean",
        description: "Whether mobile menu is open (sets aria-expanded)",
        default: "false",
      },
      {
        name: "aria-label",
        type: "string",
        description: "Accessibility label for the toggle button",
        default: '"Toggle menu"',
      },
    ],
  },
];

export const topBarInstallation = `import { TopBar } from '@versaur/react';
import '@versaur/core/top-bar.css';`;
