import {
  topBarSections,
  topBarInstallation,
  topBarProps,
} from "@versaur/react/top-bar";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function TopBarDocPage() {
  return (
    <>
      {topBarSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>TopBar API Reference</h2>
      {topBarProps.map((component) => (
        <div key={component.name}>
          <h3>{component.name} Props</h3>
          <PropsTable props={component.props} />
        </div>
      ))}

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(topBarInstallation)} />
    </>
  );
}
