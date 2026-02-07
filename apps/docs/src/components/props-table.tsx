export interface PropDefinition {
  name: string;
  type: string;
  default: string;
  description: string;
}

export function PropsTable({ props }: { props: PropDefinition[] }) {
  return (
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
        {props.map((p) => (
          <tr key={p.name}>
            <td>
              <code>{p.name}</code>
            </td>
            <td>
              <code>{p.type}</code>
            </td>
            <td>
              <code>{p.default}</code>
            </td>
            <td>{p.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
