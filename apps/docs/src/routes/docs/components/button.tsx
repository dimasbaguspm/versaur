import { createFileRoute, Link } from "@tanstack/react-router";
import { FrameworkSwitcher } from "../../../components/framework-switcher";
import { ComponentPreview } from "../../../components/component-preview";
import { buttonExamples } from "@versaur/react/button";

function makeExamples(key: "variants" | "sizes" | "states" | "combined") {
  const example = buttonExamples[key];
  return {
    react: { code: example.code, language: example.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

const installationExamples: Record<
  string,
  { code: string; language: string }
> = {
  react: { code: buttonExamples.installation.code, language: buttonExamples.installation.language },
  vue: { code: buttonExamples.installation.code, language: buttonExamples.installation.language },
  angular: { code: buttonExamples.installation.code, language: buttonExamples.installation.language },
};

export const Route = createFileRoute("/docs/components/button")({
  component: ButtonPage,
  validateSearch: (search: Record<string, unknown>) => ({
    framework: search.framework as string | undefined,
  }),
});

function ButtonPage() {
  return (
    <>
      <div className="header">
        <h1>Button</h1>
        <p>
          A versatile button component with multiple variants, sizes, and states
        </p>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link
          to="/docs/components/button"
          search={{ framework: undefined }}
          activeProps={{ className: "active" }}
        >
          Button
        </Link>
      </nav>

      <div className="component-showcase">
        <FrameworkSwitcher />

        <div className="section-group">
          <h3>Variants</h3>
          <ComponentPreview
            component="button"
            exampleKey="variants"
            examples={makeExamples("variants")}
          />
        </div>

        <div className="section-group">
          <h3>Sizes</h3>
          <ComponentPreview
            component="button"
            exampleKey="sizes"
            examples={makeExamples("sizes")}
          />
        </div>

        <div className="section-group">
          <h3>States</h3>
          <ComponentPreview
            component="button"
            exampleKey="states"
            examples={makeExamples("states")}
          />
        </div>

        <div className="section-group">
          <h3>Combined Examples</h3>
          <ComponentPreview
            component="button"
            exampleKey="combined"
            examples={makeExamples("combined")}
          />
        </div>
      </div>

      <div className="component-showcase">
        <h2>API Reference</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>
                <code>'primary' | 'secondary' | 'danger'</code>
              </td>
              <td>
                <code>'primary'</code>
              </td>
              <td>Visual variant of the button</td>
            </tr>
            <tr>
              <td>
                <code>size</code>
              </td>
              <td>
                <code>'small' | 'medium' | 'large'</code>
              </td>
              <td>
                <code>'medium'</code>
              </td>
              <td>Size of the button</td>
            </tr>
            <tr>
              <td>
                <code>loading</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
              <td>Shows a spinner and disables interaction</td>
            </tr>
            <tr>
              <td>
                <code>disabled</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
              <td>Whether the button is disabled</td>
            </tr>
            <tr>
              <td>
                <code>pressed</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
              <td>
                Whether the button is in a pressed state (for toggle buttons)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="component-showcase">
        <h2>Installation</h2>
        <ComponentPreview
          exampleKey="installation"
          examples={installationExamples}
        />
      </div>
    </>
  );
}
