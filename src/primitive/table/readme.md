# Table Component

Compound Table component for Versaur UI library. Provides accessible, styled, and composable table UI using the compound pattern.

## Usage


```tsx
<Table>
  <Table.Header>
    <Table.Column as="th" span={4} align="left">Date</Table.Column>
    <Table.Column as="th" span={4} align="center">Type</Table.Column>
    <Table.Column as="th" span={2} align="right">Amount</Table.Column>
    <Table.Column as="th" span={2}>Action</Table.Column>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Column as="td" span={4} align="left">2025-07-01</Table.Column>
      <Table.Column as="td" span={4} align="center">Income</Table.Column>
      <Table.Column as="td" span={2} align="right">$2,000</Table.Column>
      <Table.Column as="td" span={2}><button>Edit</button></Table.Column>
    </Table.Row>
    <Table.Row>
      <Table.Column as="td" span={4}>2025-07-02</Table.Column>
      <Table.Column as="td" span={4} align="center">Expense</Table.Column>
      <Table.Column as="td" span={2} align="right">-$500</Table.Column>
      <Table.Column as="td" span={2}><button>Edit</button></Table.Column>
    </Table.Row>
  </Table.Body>
  <Table.Footer>
    <Table.Column as="td" span={8} align="left">Total</Table.Column>
    <Table.Column as="td" span={2} align="right">$1,500</Table.Column>
    <Table.Column as="td" span={2}></Table.Column>
  </Table.Footer>
</Table>
```


- Use `as="th"` for header columns, `as="td"` (default) for body/footer columns.
- Use the `span` prop to control column width (1-12 grid system).
- Use the `align` prop (`left` | `center` | `right`, default: `left`) to control horizontal alignment of cell content.
- Sorting and other stateful features are managed via context.
