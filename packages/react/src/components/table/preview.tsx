"use client";

import { Table } from "./table.js";

/**
 * Section Interface for table documentation
 */
export interface TableSection {
  key: string;
  title: string;
  preview: () => JSX.Element;
  code: string;
  language: string;
}

/**
 * Prop Definition Interface
 */
export interface PropGroup {
  name: string;
  props: PropDefinition[];
}

export interface PropDefinition {
  name: string;
  type: string;
  description: string;
  default: string;
}

/* ============================================================================
   Basic Table Example - Simple invoice layout
   ========================================================================= */
function BasicInvoiceTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head width="30%">Item</Table.Head>
          <Table.Head width="40%">Description</Table.Head>
          <Table.Head width="15%">Quantity</Table.Head>
          <Table.Head width="15%">Price</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell width="30%">SKU-001</Table.Cell>
          <Table.Cell width="40%">Premium Widget</Table.Cell>
          <Table.Cell width="15%">5</Table.Cell>
          <Table.Cell width="15%">$29.99</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell width="30%">SKU-002</Table.Cell>
          <Table.Cell width="40%">Standard Component</Table.Cell>
          <Table.Cell width="15%">10</Table.Cell>
          <Table.Cell width="15%">$14.99</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell width="30%">SKU-003</Table.Cell>
          <Table.Cell width="40%">Basic Item</Table.Cell>
          <Table.Cell width="15%">3</Table.Cell>
          <Table.Cell width="15%">$9.99</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3} width="85%">
            Total
          </Table.Cell>
          <Table.Cell width="15%">$249.85</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

/* ============================================================================
   Numeric Data Table - Right-aligned numeric values
   ========================================================================= */
function NumericDataTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head width="25%">Metric</Table.Head>
          <Table.Head width="18.75%">Q1</Table.Head>
          <Table.Head width="18.75%">Q2</Table.Head>
          <Table.Head width="18.75%">Q3</Table.Head>
          <Table.Head width="18.75%">Total</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell width="25%">Revenue</Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            $125,400
          </Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            $142,800
          </Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            $159,200
          </Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            $427,400
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell width="25%">Growth Rate</Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            5.2%
          </Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            6.8%
          </Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            7.3%
          </Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            6.4%
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell width="25%">Users</Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            8,250
          </Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            10,120
          </Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            12,890
          </Table.Cell>
          <Table.Cell width="18.75%" variant="numeric">
            31,260
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

/* ============================================================================
   Mixed Variant Table - Combining different cell variants
   ========================================================================= */
function MixedVariantTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head width="30%">Task</Table.Head>
          <Table.Head width="20%">Status</Table.Head>
          <Table.Head width="15%">Priority</Table.Head>
          <Table.Head width="35%">Owner</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell width="30%" variant="highlight">
            Implement API
          </Table.Cell>
          <Table.Cell width="20%">In Progress</Table.Cell>
          <Table.Cell width="15%" variant="numeric">
            1
          </Table.Cell>
          <Table.Cell width="35%">Alice Chen</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell width="30%">Design System</Table.Cell>
          <Table.Cell width="20%">Completed</Table.Cell>
          <Table.Cell width="15%" variant="numeric">
            2
          </Table.Cell>
          <Table.Cell width="35%">Bob Smith</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell width="30%" variant="highlight">
            Security Audit
          </Table.Cell>
          <Table.Cell width="20%">Pending</Table.Cell>
          <Table.Cell width="15%" variant="numeric">
            1
          </Table.Cell>
          <Table.Cell width="35%">Carol Davis</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

/* ============================================================================
   Export sections, props, and installation
   ========================================================================= */
export const tableSections: TableSection[] = [
  {
    key: "basic-invoice",
    title: "Basic Invoice Table",
    preview: BasicInvoiceTable,
    code: `import { Table } from '@versaur/react/table';

export function BasicInvoiceTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Item</Table.Head>
          <Table.Head>Description</Table.Head>
          <Table.Head>Quantity</Table.Head>
          <Table.Head>Price</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>SKU-001</Table.Cell>
          <Table.Cell>Premium Widget</Table.Cell>
          <Table.Cell>5</Table.Cell>
          <Table.Cell>$29.99</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>Total</Table.Cell>
          <Table.Cell>$249.85</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}`,
    language: "tsx",
  },
  {
    key: "numeric-data",
    title: "Numeric Data Table",
    preview: NumericDataTable,
    code: `import { Table } from '@versaur/react/table';

export function NumericDataTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Metric</Table.Head>
          <Table.Head>Q1</Table.Head>
          <Table.Head>Q2</Table.Head>
          <Table.Head>Q3</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Revenue</Table.Cell>
          <Table.Cell variant="numeric">$125,400</Table.Cell>
          <Table.Cell variant="numeric">$142,800</Table.Cell>
          <Table.Cell variant="numeric">$159,200</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}`,
    language: "tsx",
  },
  {
    key: "mixed-variant",
    title: "Mixed Variant Table",
    preview: MixedVariantTable,
    code: `import { Table } from '@versaur/react/table';

export function MixedVariantTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Task</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Priority</Table.Head>
          <Table.Head>Owner</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell variant="highlight">Implement API</Table.Cell>
          <Table.Cell>In Progress</Table.Cell>
          <Table.Cell variant="numeric">1</Table.Cell>
          <Table.Cell>Alice Chen</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}`,
    language: "tsx",
  },
];

export const tableProps: PropGroup[] = [
  {
    name: "Table",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Table structure content (Header, Body, Footer)",
        default: "-",
      },
    ],
  },
  {
    name: "Table.Header",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Header rows with head cells",
        default: "-",
      },
    ],
  },
  {
    name: "Table.Body",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Body rows with data cells",
        default: "-",
      },
    ],
  },
  {
    name: "Table.Footer",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Footer rows with summary cells",
        default: "-",
      },
    ],
  },
  {
    name: "Table.Row",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Row cells (Head or Cell)",
        default: "-",
      },
    ],
  },
  {
    name: "Table.Head",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Header cell content",
        default: "-",
      },
      {
        name: "width",
        type: "string",
        description: 'Column width (e.g., "30%", "200px")',
        default: "auto",
      },
    ],
  },
  {
    name: "Table.Cell",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Cell content",
        default: "-",
      },
      {
        name: "variant",
        type: '"basic" | "numeric" | "highlight"',
        description: "Cell styling variant (optional)",
        default: "basic",
      },
      {
        name: "width",
        type: "string",
        description: 'Column width (e.g., "30%", "200px")',
        default: "auto",
      },
    ],
  },
];

export const tableInstallation = `import { Table } from '@versaur/react/table';
import '@versaur/core/table.css';`;
