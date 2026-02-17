import {
  buttonIconSections,
  buttonIconProps,
} from "@versaur/react/button-icon";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function ButtonIconDocPage() {
  return (
    <>
      {buttonIconSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={buttonIconProps} />
    </>
  );
}
