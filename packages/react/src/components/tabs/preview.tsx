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
 * Disabled Items Example
 */
function DisabledItemsPreview() {
  const [value, setValue] = useState("enabled1");

  return (
    <Tabs value={value} onChange={setValue}>
      <Tabs.Item value="enabled1">Enabled 1</Tabs.Item>
      <Tabs.Item value="disabled" disabled>
        Disabled
      </Tabs.Item>
      <Tabs.Item value="enabled2">Enabled 2</Tabs.Item>
    </Tabs>
  );
}

/**
 * With Tab Panels Example
 */
function WithPanelsPreview() {
  const [value, setValue] = useState("tab1");

  return (
    <div>
      <Tabs value={value} onChange={setValue}>
        <Tabs.Item value="tab1">Tab 1</Tabs.Item>
        <Tabs.Item value="tab2">Tab 2</Tabs.Item>
        <Tabs.Item value="tab3">Tab 3</Tabs.Item>
      </Tabs>

      <div {...Tabs.getPanelAttribute("tab1")} style={{ marginTop: "1rem" }}>
        {value === "tab1" && <p>Content for Tab 1</p>}
      </div>
      <div {...Tabs.getPanelAttribute("tab2")} style={{ marginTop: "1rem" }}>
        {value === "tab2" && <p>Content for Tab 2</p>}
      </div>
      <div {...Tabs.getPanelAttribute("tab3")} style={{ marginTop: "1rem" }}>
        {value === "tab3" && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
}

export const tabsSections: TabsSection[] = [
  {
    key: "with-panels",
    title: "With Panels",
    preview: WithPanelsPreview,
    code: `import { useState } from "react";
import { Tabs } from "@versaur/react";

export function TabbedContent() {
  const [value, setValue] = useState("tab1");

  return (
    <div>
      <Tabs value={value} onChange={setValue}>
        <Tabs.Item value="tab1">Tab 1</Tabs.Item>
        <Tabs.Item value="tab2">Tab 2</Tabs.Item>
        <Tabs.Item value="tab3">Tab 3</Tabs.Item>
      </Tabs>

      <div {...Tabs.getPanelAttribute("tab1")} style={{ marginTop: "1rem" }}>
        {value === "tab1" && <p>Content for Tab 1</p>}
      </div>
      <div {...Tabs.getPanelAttribute("tab2")} style={{ marginTop: "1rem" }}>
        {value === "tab2" && <p>Content for Tab 2</p>}
      </div>
      <div {...Tabs.getPanelAttribute("tab3")} style={{ marginTop: "1rem" }}>
        {value === "tab3" && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
}`,
    language: "tsx",
  },
  {
    key: "disabled-items",
    title: "Disabled Items",
    preview: DisabledItemsPreview,
    code: `import { useState } from "react";
import { Tabs } from "@versaur/react";

export function MyTabs() {
  const [value, setValue] = useState("enabled1");

  return (
    <Tabs value={value} onChange={setValue}>
      <Tabs.Item value="enabled1">Enabled 1</Tabs.Item>
      <Tabs.Item value="disabled" disabled>
        Disabled
      </Tabs.Item>
      <Tabs.Item value="enabled2">Enabled 2</Tabs.Item>
    </Tabs>
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
    description: "Callback fired when a tab item is clicked. Required.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Tab item elements. Required.",
  },
];

export const tabsItemProps = [
  {
    name: "value",
    type: "string",
    default: "—",
    description: "The unique identifier for this tab item. Required.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the tab item is disabled.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "The label or content of the tab item. Required.",
  },
];

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
