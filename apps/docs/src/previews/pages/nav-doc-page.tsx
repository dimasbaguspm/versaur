import {
  navSections,
  navInstallation,
  navProps,
  navItemProps,
} from "@versaur/react/nav";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function NavDocPage() {
  return (
    <>
      {navSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>

      <h3>Nav Props</h3>
      <PropsTable props={navProps} />

      <h3>Nav.Item Props</h3>
      <PropsTable props={navItemProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(navInstallation)} />
    </>
  );
}

NavDocPage.displayName = "NavDocPage";
