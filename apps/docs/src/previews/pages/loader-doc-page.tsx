import { loaderSections, loaderProps } from "@versaur/react/loader";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function LoaderDocPage() {
  return (
    <>
      {loaderSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>
      <PropsTable props={loaderProps} />
    </>
  );
}
