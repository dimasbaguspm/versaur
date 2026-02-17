import { tabsSections, tabsProps, tabsItemProps } from "@versaur/react/tabs";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function TabsDocPage() {
  return (
    <>
      {tabsSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>

      <h3>Tabs (Root)</h3>
      <PropsTable props={tabsProps} />

      <h3>Tabs.Item</h3>
      <PropsTable props={tabsItemProps} />

      <h3>Helper Functions</h3>
      <p>
        <code>Tabs.getPanelAttribute(value: string): TabsPanelAttributes</code>
      </p>
      <p>
        Returns an object with <code>id</code>, <code>role</code>, and{" "}
        <code>aria-labelledby</code> attributes for creating accessible tabpanel
        elements. Use this on the container that holds your tab panel content.
      </p>
    </>
  );
}
