import { useState, type ComponentType } from "react";
import { Tabs } from "./tabs";

export interface TabsSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

/**
 * Basic Tabs Example
 */
function BasicPreview() {
  const [value, setValue] = useState("tab1");

  return (
    <Tabs value={value} onChange={setValue}>
      <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
      <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
    </Tabs>
  );
}

/**
 * Full Width Tabs Example
 */
function FullWidthPreview() {
  const [value, setValue] = useState("home");

  return (
    <Tabs value={value} onChange={setValue} fullWidth>
      <Tabs.Trigger value="home">Home</Tabs.Trigger>
      <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
      <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
    </Tabs>
  );
}

/**
 * Disabled Triggers Example
 */
function DisabledPreview() {
  const [value, setValue] = useState("enabled1");

  return (
    <Tabs value={value} onChange={setValue}>
      <Tabs.Trigger value="enabled1">Enabled 1</Tabs.Trigger>
      <Tabs.Trigger value="disabled" disabled>
        Disabled
      </Tabs.Trigger>
      <Tabs.Trigger value="enabled2">Enabled 2</Tabs.Trigger>
    </Tabs>
  );
}

/**
 * With Tabpanel Example
 */
function WithPanelPreview() {
  const [value, setValue] = useState("tab1");

  return (
    <div>
      <Tabs value={value} onChange={setValue}>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs>

      <div {...Tabs.getPanelAttribute("tab1")}>
        {value === "tab1" && <p>Content for Tab 1</p>}
      </div>
      <div {...Tabs.getPanelAttribute("tab2")}>
        {value === "tab2" && <p>Content for Tab 2</p>}
      </div>
      <div {...Tabs.getPanelAttribute("tab3")}>
        {value === "tab3" && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
}

export const tabsSections: TabsSection[] = [
  {
    key: "basic",
    title: "Basic Usage",
    preview: BasicPreview,
    code: `import { useState } from "react";
import { Tabs } from "@versaur/react";

export function MyTabs() {
  const [value, setValue] = useState("tab1");

  return (
    <Tabs value={value} onChange={setValue}>
      <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
      <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
    </Tabs>
  );
}`,
    language: "tsx",
  },
  {
    key: "full-width",
    title: "Full Width",
    preview: FullWidthPreview,
    code: `<Tabs value={value} onChange={setValue} fullWidth>
  <Tabs.Trigger value="home">Home</Tabs.Trigger>
  <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
  <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
</Tabs>`,
    language: "tsx",
  },
  {
    key: "disabled",
    title: "Disabled Triggers",
    preview: DisabledPreview,
    code: `<Tabs value={value} onChange={setValue}>
  <Tabs.Trigger value="enabled1">Enabled 1</Tabs.Trigger>
  <Tabs.Trigger value="disabled" disabled>
    Disabled
  </Tabs.Trigger>
  <Tabs.Trigger value="enabled2">Enabled 2</Tabs.Trigger>
</Tabs>`,
    language: "tsx",
  },
  {
    key: "with-panel",
    title: "With Tab Panels",
    preview: WithPanelPreview,
    code: `import { useState } from "react";
import { Tabs } from "@versaur/react";

export function TabbedContent() {
  const [value, setValue] = useState("tab1");

  return (
    <div>
      <Tabs value={value} onChange={setValue}>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs>

      <div {...Tabs.getPanelAttribute("tab1")}>
        {value === "tab1" && <p>Content for Tab 1</p>}
      </div>
      <div {...Tabs.getPanelAttribute("tab2")}>
        {value === "tab2" && <p>Content for Tab 2</p>}
      </div>
      <div {...Tabs.getPanelAttribute("tab3")}>
        {value === "tab3" && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
}`,
    language: "tsx",
  },
];

export const tabsProps = [
  {
    name: "value",
    type: "string",
    default: "—",
    description: "The currently active tab value. Required.",
  },
  {
    name: "onChange",
    type: "(value: string) => void",
    default: "—",
    description: "Callback fired when a tab trigger is clicked. Required.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "false",
    description: "Whether tab triggers should stretch to fill available width.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Tab trigger elements. Required.",
  },
];

export const tabsTriggerProps = [
  {
    name: "value",
    type: "string",
    default: "—",
    description: "The unique identifier for this tab trigger. Required.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the tab trigger is disabled.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "The label or content of the tab trigger. Required.",
  },
];

export const tabsInstallation = {
  code: `npm install @versaur/react @versaur/core`,
  language: "bash" as const,
};

export function TabsPreview() {
  return (
    <>
      {tabsSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
        </div>
      ))}
    </>
  );
}
