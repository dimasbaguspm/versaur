import type { TabsSection } from "@versaur/react/tabs";
import { tabsSections, tabsProps, tabsItemProps } from "@versaur/react/tabs";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function TabsDocPage() {
  return (
    <>
      {tabsSections.map((section: TabsSection) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
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
