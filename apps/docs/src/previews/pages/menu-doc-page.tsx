import { SectionBlock } from "../../components/section-block.js";
import { PropsTable } from "../../components/props-table.js";
import { menuSections, menuProps, menuItemProps } from "@versaur/react/menu";

export function MenuDocPage() {
  return (
    <>
      {menuSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>

      <h3>Menu Props</h3>
      <PropsTable props={menuProps} />

      <h3>Menu.Item Props</h3>
      <PropsTable props={menuItemProps} />
    </>
  );
}
