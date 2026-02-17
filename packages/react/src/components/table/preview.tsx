"use client";

import { Table } from "./table.js";
import { useState } from "react";

/* ============================================================================
   Basic Table Example - Simple 4-column table with CSS Grid
   ========================================================================= */
function BasicInvoiceTable() {
  return (
    <Table columns="2fr 1fr 1fr 1fr">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Item</Table.HeaderCell>
          <Table.HeaderCell align="center">Qty</Table.HeaderCell>
          <Table.HeaderCell align="right">Price</Table.HeaderCell>
          <Table.HeaderCell align="right">Total</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.BodyCell>Premium Widget</Table.BodyCell>
          <Table.BodyCell align="center">5</Table.BodyCell>
          <Table.BodyCell align="right">$29.99</Table.BodyCell>
          <Table.BodyCell align="right">$149.95</Table.BodyCell>
        </Table.Row>
        <Table.Row>
          <Table.BodyCell>Standard Component</Table.BodyCell>
          <Table.BodyCell align="center">10</Table.BodyCell>
          <Table.BodyCell align="right">$14.99</Table.BodyCell>
          <Table.BodyCell align="right">$149.90</Table.BodyCell>
        </Table.Row>
        <Table.Row>
          <Table.BodyCell>Basic Item</Table.BodyCell>
          <Table.BodyCell align="center">3</Table.BodyCell>
          <Table.BodyCell align="right">$9.99</Table.BodyCell>
          <Table.BodyCell align="right">$29.97</Table.BodyCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

/* ============================================================================
   Sortable Table - Table with sortable headers
   ========================================================================= */
function SortableTable() {
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc" | null>(null);

  const handleSort = (column: string) => {
    return (direction: "asc" | "desc" | null) => {
      setSortCol(column);
      setSortDir(direction);
    };
  };

  return (
    <Table columns="2fr 1fr 1fr">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sortable
            sortDirection={sortCol === "task" ? sortDir : null}
            onSort={handleSort("task")}
          >
            Task
          </Table.HeaderCell>
          <Table.HeaderCell
            sortable
            sortDirection={sortCol === "status" ? sortDir : null}
            onSort={handleSort("status")}
            align="center"
          >
            Status
          </Table.HeaderCell>
          <Table.HeaderCell
            sortable
            sortDirection={sortCol === "priority" ? sortDir : null}
            onSort={handleSort("priority")}
            align="right"
          >
            Priority
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.BodyCell>Implement API</Table.BodyCell>
          <Table.BodyCell align="center">In Progress</Table.BodyCell>
          <Table.BodyCell align="right">High</Table.BodyCell>
        </Table.Row>
        <Table.Row>
          <Table.BodyCell>Design System</Table.BodyCell>
          <Table.BodyCell align="center">Completed</Table.BodyCell>
          <Table.BodyCell align="right">Medium</Table.BodyCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

/* ============================================================================
   Table with Built-in Column Components - Checkbox, DoubleLine, Action
   ========================================================================= */
function TableWithBuiltins() {
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(
    new Set(),
  );

  const handleRowSelect = (rowId: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(rowId);
    } else {
      newSelected.delete(rowId);
    }
    setSelectedRows(newSelected);
  };

  return (
    <Table
      columns="min-content 1fr 1fr min-content"
      selectedRows={selectedRows}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Select</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Info</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.BodyCell variant="checkbox">
            <Table.Checkbox
              rowId="user-1"
              checked={selectedRows.has("user-1")}
              onChange={(checked) => handleRowSelect("user-1", checked)}
            />
          </Table.BodyCell>
          <Table.BodyCell>
            <Table.DoubleLine
              title="Alice Chen"
              subtitle="alice@company.com"
              size="md"
            />
          </Table.BodyCell>
          <Table.BodyCell>Senior Product Designer</Table.BodyCell>
          <Table.BodyCell variant="action">
            <Table.Action onClick={() => console.log("Action clicked")} />
          </Table.BodyCell>
        </Table.Row>
        <Table.Row>
          <Table.BodyCell variant="checkbox">
            <Table.Checkbox
              rowId="user-2"
              checked={selectedRows.has("user-2")}
              onChange={(checked) => handleRowSelect("user-2", checked)}
            />
          </Table.BodyCell>
          <Table.BodyCell>
            <Table.DoubleLine
              title="Bob Smith"
              subtitle="bob@company.com"
              size="md"
            />
          </Table.BodyCell>
          <Table.BodyCell>Software Engineer</Table.BodyCell>
          <Table.BodyCell variant="action">
            <Table.Action onClick={() => console.log("Action clicked")} />
          </Table.BodyCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

/* ============================================================================
   Export sections, props, and installation
   ========================================================================= */
export const tableSections = [
  {
    key: "basic-invoice",
    title: "Basic Invoice Table",
    preview: BasicInvoiceTable,
    code: `import { Table } from '@versaur/react/table';

export function BasicInvoiceTable() {
  return (
    <Table columns="2fr 1fr 1fr 1fr">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Item</Table.HeaderCell>
          <Table.HeaderCell align="center">Qty</Table.HeaderCell>
          <Table.HeaderCell align="right">Price</Table.HeaderCell>
          <Table.HeaderCell align="right">Total</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.BodyCell>Premium Widget</Table.BodyCell>
          <Table.BodyCell align="center">5</Table.BodyCell>
          <Table.BodyCell align="right">$29.99</Table.BodyCell>
          <Table.BodyCell align="right">$149.95</Table.BodyCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}`,
    language: "tsx",
  },
  {
    key: "sortable-table",
    title: "Sortable Table",
    preview: SortableTable,
    code: `import { Table } from '@versaur/react/table';
import { useState } from 'react';

export function SortableTable() {
  const [sortCol, setSortCol] = useState<string | null>(null);

  return (
    <Table columns="2fr 1fr 1fr">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sortable
            sortDirection={sortCol === 'task' ? 'asc' : null}
            onSort={(dir) => setSortCol(dir ? 'task' : null)}
          >
            Task
          </Table.HeaderCell>
          <Table.HeaderCell align="center">Status</Table.HeaderCell>
          <Table.HeaderCell align="right">Priority</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.BodyCell>Implement API</Table.BodyCell>
          <Table.BodyCell align="center">In Progress</Table.BodyCell>
          <Table.BodyCell align="right">High</Table.BodyCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}`,
    language: "tsx",
  },
  {
    key: "table-with-builtins",
    title: "Table with Built-in Components",
    preview: TableWithBuiltins,
    code: `import { Table } from '@versaur/react/table';
import { useState } from 'react';

export function TableWithBuiltins() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  return (
    <Table columns="min-content 1fr 1fr min-content" selectedRows={selectedRows}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Select</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Info</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.BodyCell variant="checkbox">
            <Table.Checkbox
              rowId="user-1"
              checked={selectedRows.has('user-1')}
              onChange={(checked) => {
                const newSet = new Set(selectedRows);
                if (checked) newSet.add('user-1');
                else newSet.delete('user-1');
                setSelectedRows(newSet);
              }}
            />
          </Table.BodyCell>
          <Table.BodyCell>
            <Table.DoubleLine
              title="Alice Chen"
              subtitle="alice@company.com"
            />
          </Table.BodyCell>
          <Table.BodyCell>Senior Designer</Table.BodyCell>
          <Table.BodyCell variant="action">
            <Table.Action onClick={() => {}} />
          </Table.BodyCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}`,
    language: "tsx",
  },
];

export const tableProps = [
  {
    name: "Table",
    props: [
      {
        name: "columns",
        type: "string",
        description:
          'CSS Grid columns string (e.g., "2fr 1fr 1fr min-content")',
        default: "required",
      },
      {
        name: "selectedRows",
        type: "Set<string | number>",
        description: "Controlled set of selected row IDs",
        default: "undefined",
      },
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
        description: "Header rows with HeaderCell elements",
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
        description: "Body rows with BodyCell elements",
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
        description: "Footer rows with BodyCell elements",
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
        description: "Row cells (HeaderCell or BodyCell)",
        default: "-",
      },
    ],
  },
  {
    name: "Table.HeaderCell",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Header cell content",
        default: "-",
      },
      {
        name: "sortable",
        type: "boolean",
        description: "Enable sorting on this column",
        default: "false",
      },
      {
        name: "sortDirection",
        type: "'asc' | 'desc' | null",
        description: "Current sort direction (controlled)",
        default: "null",
      },
      {
        name: "onSort",
        type: "(direction: 'asc' | 'desc' | null) => void",
        description: "Sort direction change handler",
        default: "-",
      },
      {
        name: "align",
        type: "'left' | 'center' | 'right'",
        description: "Text alignment",
        default: "left",
      },
    ],
  },
  {
    name: "Table.BodyCell",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Cell content",
        default: "-",
      },
      {
        name: "variant",
        type: "'checkbox' | 'double-line' | 'action'",
        description: "Cell styling variant for built-in components",
        default: "undefined",
      },
      {
        name: "align",
        type: "'left' | 'center' | 'right'",
        description: "Text alignment",
        default: "left",
      },
    ],
  },
  {
    name: "Table.Checkbox",
    props: [
      {
        name: "rowId",
        type: "string | number",
        description: "Unique identifier for the row",
        default: "-",
      },
      {
        name: "checked",
        type: "boolean",
        description: "Checkbox checked state",
        default: "false",
      },
      {
        name: "indeterminate",
        type: "boolean",
        description: "Indeterminate state (partial selection)",
        default: "false",
      },
      {
        name: "onChange",
        type: "(checked: boolean) => void",
        description: "Change handler",
        default: "-",
      },
    ],
  },
  {
    name: "Table.DoubleLine",
    props: [
      {
        name: "title",
        type: "ReactNode",
        description: "Primary text (bold)",
        default: "-",
      },
      {
        name: "subtitle",
        type: "ReactNode",
        description: "Secondary text (gray, smaller)",
        default: "-",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        description: "Component size",
        default: "md",
      },
    ],
  },
  {
    name: "Table.Action",
    props: [
      {
        name: "icon",
        type: "React.ComponentType<SVGProps>",
        description: "Icon component from @versaur/icons",
        default: "-",
      },
      {
        name: "onClick",
        type: "() => void",
        description: "Click handler (optional, click propagation is stopped)",
        default: "-",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Disable the button",
        default: "false",
      },
    ],
  },
];

export const tableInstallation = `import { Table } from '@versaur/react/table';
import '@versaur/core/table.css';`;
