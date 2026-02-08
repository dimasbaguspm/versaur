import { createFileRoute } from "@tanstack/react-router";
import { previewRegistry } from "../../../previews/registry";
import { FrameworkSwitcher } from "../../../components/framework-switcher";
import { PreviewFrame } from "../../../preview/preview-frame";

export const Route = createFileRoute("/docs/components/$component")({
  component: ComponentPage,
});

function ComponentPage() {
  const { component } = Route.useParams();
  const entry = previewRegistry[component];

  if (!entry) {
    return (
      <div>
        <h1>Component not found</h1>
        <p>
          No component named <strong>{component}</strong> exists. Available
          components:{" "}
          {Object.keys(previewRegistry).join(", ")}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="header">
        <h1>{entry.title}</h1>
        <p>{entry.description}</p>
      </div>

      <FrameworkSwitcher />
      <PreviewFrame component={component} />
    </>
  );
}
