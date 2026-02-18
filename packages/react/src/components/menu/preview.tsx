"use client";

import { useState } from "react";
import { AlertCircleIcon, CheckCircleIcon, ChevronRightIcon } from "@versaur/icons";
import { Icon } from "../icon";
import { Menu } from "./index.js";
import type { ComponentType } from "react";

/**
 * Controlled menu with onChange
 */
function ControlledMenuPreview() {
  const [selected, setSelected] = useState<string | number>();

  return (
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <button {...Menu.getTriggerProps({ id: "controlled-menu" })}>Actions</button>
      <Menu id="controlled-menu" value={selected} onChange={setSelected}>
        <Menu.Item value="save">Save</Menu.Item>
        <Menu.Item value="export">Export</Menu.Item>
        <Menu.Item value="share">Share</Menu.Item>
      </Menu>

      {selected && (
        <div style={{ color: "#666", fontSize: "14px" }}>
          Selected: <strong>{selected}</strong>
        </div>
      )}
    </div>
  );
}

/**
 * Menu with custom onClick handlers
 */
function MenuWithClickHandlersPreview() {
  const [action, setAction] = useState<string>();

  return (
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <button {...Menu.getTriggerProps({ id: "handlers-menu" })}>File</button>
      <Menu id="handlers-menu">
        <Menu.Item
          value="new"
          onClick={() => {
            setAction("Creating new file...");
            setTimeout(() => setAction(""), 2000);
          }}
        >
          New
        </Menu.Item>
        <Menu.Item
          value="open"
          onClick={() => {
            setAction("Opening file...");
            setTimeout(() => setAction(""), 2000);
          }}
        >
          Open
        </Menu.Item>
        <Menu.Item value="save">Save</Menu.Item>
      </Menu>

      {action && <div style={{ color: "#666", fontSize: "14px" }}>{action}</div>}
    </div>
  );
}

/**
 * Menu with left/right icons
 */
function MenuWithIconsPreview() {
  return (
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <button {...Menu.getTriggerProps({ id: "icons-menu" })}>Status</button>
      <Menu id="icons-menu" minWidth={180}>
        <Menu.Item
          value="complete"
          leftIcon={<Icon as={CheckCircleIcon} color="inherit" />}
          rightIcon={<Icon as={ChevronRightIcon} color="inherit" />}
        >
          Complete
        </Menu.Item>
        <Menu.Item value="warning" leftIcon={<Icon as={AlertCircleIcon} color="inherit" />}>
          Warning
        </Menu.Item>
      </Menu>
    </div>
  );
}

/**
 * Menu with different placements
 */
function PlacementsMenuPreview() {
  const placements = ["top", "bottom", "left", "right"] as const;

  return (
    <div
      style={{
        display: "grid",
        gap: "3rem",
        gridTemplateColumns: "repeat(2, 1fr)",
        padding: "3rem",
        placeItems: "center",
      }}
    >
      {placements.map((placement) => (
        <div key={placement}>
          <button {...Menu.getTriggerProps({ id: `menu-${placement}` })}>{placement}</button>
          <Menu id={`menu-${placement}`} placement={placement}>
            <Menu.Item value={`${placement}-1`}>Option 1</Menu.Item>
            <Menu.Item value={`${placement}-2`}>Option 2</Menu.Item>
            <Menu.Item value={`${placement}-3`}>Option 3</Menu.Item>
          </Menu>
        </div>
      ))}
    </div>
  );
}

/**
 * Menu with custom max-height and scrolling
 */
function ScrollableMenuPreview() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <button {...Menu.getTriggerProps({ id: "scrollable-menu" })}>Long List</button>
      <Menu id="scrollable-menu" maxHeight={150}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Menu.Item key={i} value={`item-${i}`}>
            List Item {i + 1}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}

/**
 * Menu with programmatic close
 */
function ProgrammaticClosePreview() {
  const [lastAction, setLastAction] = useState<string>();

  const handleItemClick = (action: string) => {
    setLastAction(action);
    // Menu stays open - user must click outside or use close button
  };

  return (
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <button
          onMouseEnter={() => Menu.close({ id: "close-menu" })}
          style={{
            backgroundColor: "#f5f5f5",
            border: "1px solid #ddd",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
            padding: "0.5rem 1rem",
          }}
        >
          Hover me to close the Menu
        </button>
        <button {...Menu.getTriggerProps({ id: "close-menu" })}>Actions</button>
        <Menu id="close-menu">
          <Menu.Item value="view" onClick={() => handleItemClick("Viewing")}>
            View
          </Menu.Item>
          <Menu.Item value="edit" onClick={() => handleItemClick("Editing")}>
            Edit
          </Menu.Item>
          <Menu.Item value="delete" onClick={() => handleItemClick("Deleting")}>
            Delete
          </Menu.Item>
        </Menu>
      </div>

      {lastAction && (
        <div style={{ color: "#666", fontSize: "14px" }}>
          Last action: <strong>{lastAction}</strong>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
   Preview Sections Configuration
   ========================================================================= */

export interface MenuSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

export const menuSections: MenuSection[] = [
  {
    code: `const [selected, setSelected] = useState<string | number>();
const triggerProps = Menu.getTriggerProps({ id: "controlled-menu" });

<button {...triggerProps}>Actions</button>
<Menu id="controlled-menu" value={selected} onChange={setSelected}>
  <Menu.Item value="save">Save</Menu.Item>
  <Menu.Item value="export">Export</Menu.Item>
  <Menu.Item value="share">Share</Menu.Item>
</Menu>`,
    key: "controlled",
    language: "tsx",
    preview: ControlledMenuPreview,
    title: "Controlled Menu",
  },
  {
    code: `const triggerProps = Menu.getTriggerProps({ id: "handlers-menu" });

<button {...triggerProps}>File</button>
<Menu id="handlers-menu">
  <Menu.Item value="new" onClick={() => console.log('new')}>New</Menu.Item>
  <Menu.Item value="open" onClick={() => console.log('open')}>Open</Menu.Item>
  <Menu.Item value="save">Save</Menu.Item>
</Menu>`,
    key: "click-handlers",
    language: "tsx",
    preview: MenuWithClickHandlersPreview,
    title: "Menu with Click Handlers",
  },
  {
    code: `<button {...Menu.getTriggerProps({ id: "icons-menu" })}>Status</button>
<Menu id="icons-menu" minWidth={180}>
  <Menu.Item
    value="complete"
    leftIcon={<Icon as={CheckCircleIcon} color="inherit" />}
    rightIcon={<Icon as={ChevronRightIcon} color="inherit" />}
  >
    Complete
  </Menu.Item>
  <Menu.Item
    value="warning"
    leftIcon={<Icon as={AlertCircleIcon} color="inherit" />}
  >
    Warning
  </Menu.Item>
</Menu>`,
    key: "icons",
    language: "tsx",
    preview: MenuWithIconsPreview,
    title: "Menu with Icons",
  },
  {
    code: `<button {...Menu.getTriggerProps({ id: "menu-top" })}>Top</button>
<Menu id="menu-top" placement="top">
  <Menu.Item value="1">Option 1</Menu.Item>
  <Menu.Item value="2">Option 2</Menu.Item>
</Menu>

<button {...Menu.getTriggerProps({ id: "menu-bottom" })}>Bottom</button>
<Menu id="menu-bottom" placement="bottom">
  <Menu.Item value="1">Option 1</Menu.Item>
  <Menu.Item value="2">Option 2</Menu.Item>
</Menu>

<button {...Menu.getTriggerProps({ id: "menu-left" })}>Left</button>
<Menu id="menu-left" placement="left">
  <Menu.Item value="1">Option 1</Menu.Item>
  <Menu.Item value="2">Option 2</Menu.Item>
</Menu>

<button {...Menu.getTriggerProps({ id: "menu-right" })}>Right</button>
<Menu id="menu-right" placement="right">
  <Menu.Item value="1">Option 1</Menu.Item>
  <Menu.Item value="2">Option 2</Menu.Item>
</Menu>`,
    key: "placements",
    language: "tsx",
    preview: PlacementsMenuPreview,
    title: "Menu Placements",
  },
  {
    code: `<button {...Menu.getTriggerProps({ id: "scrollable-menu" })}>Long List</button>
<Menu id="scrollable-menu" maxHeight={150}>
  {Array.from({ length: 10 }).map((_, i) => (
    <Menu.Item key={i} value={\`item-\${i}\`}>
      List Item {i + 1}
    </Menu.Item>
  ))}
</Menu>`,
    key: "scrollable",
    language: "tsx",
    preview: ScrollableMenuPreview,
    title: "Scrollable Menu",
  },
  {
    code: `<button {...Menu.getTriggerProps({ id: "close-menu" })}>Actions</button>
<Menu id="close-menu">
  <Menu.Item value="view">View</Menu.Item>
  <Menu.Item value="edit">Edit</Menu.Item>
  <Menu.Item value="delete">Delete</Menu.Item>
</Menu>

<button onClick={() => Menu.close({ id: "close-menu" })}>
  Close Menu
</button>`,
    key: "programmatic-close",
    language: "tsx",
    preview: ProgrammaticClosePreview,
    title: "Programmatic Close",
  },
];

/**
 * Props metadata for API reference table
 */
export const menuProps = [
  {
    description: "Unique identifier for the menu (used with Menu.close())",
    name: "id",
    required: true,
    type: "string",
  },
  {
    description: "Menu content (Menu.Item components)",
    name: "children",
    required: true,
    type: "ReactNode",
  },
  {
    defaultValue: '"bottom"',
    description: "Placement relative to trigger (top, bottom, left, right, or start/end variants)",
    name: "placement",
    required: false,
    type: "Menu.Placement",
  },
  {
    defaultValue: "400",
    description: "Maximum height of the menu list in pixels (enables scrolling)",
    name: "maxHeight",
    required: false,
    type: "number",
  },
  {
    defaultValue: "160",
    description: "Minimum width of the menu list in pixels",
    name: "minWidth",
    required: false,
    type: "number",
  },
  {
    defaultValue: "320",
    description: "Maximum width of the menu list in pixels",
    name: "maxWidth",
    required: false,
    type: "number",
  },
  {
    defaultValue: "8",
    description: "Gap between trigger button and menu in pixels",
    name: "gap",
    required: false,
    type: "number",
  },
  {
    description: "Controlled value - which menu item is currently selected",
    name: "value",
    required: false,
    type: "string | number",
  },
  {
    description: "Callback when a menu item is selected",
    name: "onChange",
    required: false,
    type: "(value: string | number) => void",
  },
  {
    description: "Helper for wiring external trigger elements to a menu",
    name: "Menu.getTriggerProps",
    required: false,
    type: "(options: { id: string }) => Record<string, string>",
  },
];

export const menuItemProps = [
  {
    description: "Unique identifier for this item (used in controlled mode)",
    name: "value",
    required: false,
    type: "string | number",
  },
  {
    description: "Item label/content",
    name: "children",
    required: true,
    type: "ReactNode",
  },
  {
    description: "Optional left icon/content (e.g. Icon component)",
    name: "leftIcon",
    required: false,
    type: "ReactNode",
  },
  {
    description: "Optional right icon/content (e.g. Icon component)",
    name: "rightIcon",
    required: false,
    type: "ReactNode",
  },
  {
    defaultValue: "false",
    description: "Whether this item is disabled",
    name: "disabled",
    required: false,
    type: "boolean",
  },
  {
    description: "Click handler - fired in addition to Menu onChange",
    name: "onClick",
    required: false,
    type: "(e: React.MouseEvent) => void",
  },
];
