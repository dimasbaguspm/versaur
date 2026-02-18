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
          <Table.HeaderCell>Qty</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Total</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.BodyCell>Premium Widget</Table.BodyCell>
          <Table.BodyCell>5</Table.BodyCell>
          <Table.BodyCell>$29.99</Table.BodyCell>
          <Table.BodyCell>$149.95</Table.BodyCell>
        </Table.Row>
        <Table.Row>
          <Table.BodyCell>Standard Component</Table.BodyCell>
          <Table.BodyCell>10</Table.BodyCell>
          <Table.BodyCell>$14.99</Table.BodyCell>
          <Table.BodyCell>$149.90</Table.BodyCell>
        </Table.Row>
        <Table.Row>
          <Table.BodyCell>Basic Item</Table.BodyCell>
          <Table.BodyCell>3</Table.BodyCell>
          <Table.BodyCell>$9.99</Table.BodyCell>
          <Table.BodyCell>$29.97</Table.BodyCell>
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

  const handleSort = (column: string) => (direction: "asc" | "desc" | null) => {
    setSortCol(column);
    setSortDir(direction);
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
          >
            Status
          </Table.HeaderCell>
          <Table.HeaderCell
            sortable
            sortDirection={sortCol === "priority" ? sortDir : null}
            onSort={handleSort("priority")}
          >
            Priority
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.BodyCell>Implement API</Table.BodyCell>
          <Table.BodyCell>In Progress</Table.BodyCell>
          <Table.BodyCell>High</Table.BodyCell>
        </Table.Row>
        <Table.Row>
          <Table.BodyCell>Design System</Table.BodyCell>
          <Table.BodyCell>Completed</Table.BodyCell>
          <Table.BodyCell>Medium</Table.BodyCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

/* ============================================================================
   Table with Built-in Column Components - Checkbox, DoubleLine, Action
   ========================================================================= */
function TableWithBuiltins() {
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());

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
              checked={selectedRows.has("user-1")}
              onChange={(checked) => handleRowSelect("user-1", checked)}
            />
          </Table.BodyCell>
          <Table.BodyCell>
            <Table.DoubleLine title="Alice Chen" subtitle="alice@company.com" size="md" />
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
            <Table.DoubleLine title="Bob Smith" subtitle="bob@company.com" size="md" />
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
    code: `import { Table } from '@versaur/react/table';

export function BasicInvoiceTable() {
  return (
    <Table columns="2fr 1fr 1fr 1fr">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Item</Table.HeaderCell>
          <Table.HeaderCell>Qty</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Total</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.BodyCell>Premium Widget</Table.BodyCell>
          <Table.BodyCell>5</Table.BodyCell>
          <Table.BodyCell>$29.99</Table.BodyCell>
          <Table.BodyCell>$149.95</Table.BodyCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}`,
    key: "basic-invoice",
    language: "tsx",
    preview: BasicInvoiceTable,
    title: "Basic Invoice Table",
  },
  {
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
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Priority</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.BodyCell>Implement API</Table.BodyCell>
          <Table.BodyCell>In Progress</Table.BodyCell>
          <Table.BodyCell>High</Table.BodyCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}`,
    key: "sortable-table",
    language: "tsx",
    preview: SortableTable,
    title: "Sortable Table",
  },
  {
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
    key: "table-with-builtins",
    language: "tsx",
    preview: TableWithBuiltins,
    title: "Table with Built-in Components",
  },
];

export const tableProps = [
  {
    name: "Table",
    props: [
      {
        default: "required",
        description: 'CSS Grid columns string (e.g., "2fr 1fr 1fr min-content")',
        name: "columns",
        type: "string",
      },
      {
        default: "undefined",
        description: "Controlled set of selected row IDs",
        name: "selectedRows",
        type: "Set<string | number>",
      },
      {
        default: "-",
        description: "Table structure content (Header, Body, Footer)",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
  {
    name: "Table.Header",
    props: [
      {
        default: "-",
        description: "Header rows with HeaderCell elements",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
  {
    name: "Table.Body",
    props: [
      {
        default: "-",
        description: "Body rows with BodyCell elements",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
  {
    name: "Table.Footer",
    props: [
      {
        default: "-",
        description: "Footer rows with BodyCell elements",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
  {
    name: "Table.Row",
    props: [
      {
        default: "-",
        description: "Row cells (HeaderCell or BodyCell)",
        name: "children",
        type: "ReactNode",
      },
    ],
  },
  {
    name: "Table.HeaderCell",
    props: [
      {
        default: "-",
        description: "Header cell content",
        name: "children",
        type: "ReactNode",
      },
      {
        default: "false",
        description: "Enable sorting on this column",
        name: "sortable",
        type: "boolean",
      },
      {
        default: "null",
        description: "Current sort direction (controlled)",
        name: "sortDirection",
        type: "'asc' | 'desc' | null",
      },
      {
        default: "-",
        description: "Sort direction change handler",
        name: "onSort",
        type: "(direction: 'asc' | 'desc' | null) => void",
      },
      {
        default: "left",
        description: "Text alignment",
        name: "align",
        type: "'left' | 'center' | 'right'",
      },
    ],
  },
  {
    name: "Table.BodyCell",
    props: [
      {
        default: "-",
        description: "Cell content",
        name: "children",
        type: "ReactNode",
      },
      {
        default: "undefined",
        description: "Cell styling variant for built-in components",
        name: "variant",
        type: "'checkbox' | 'double-line' | 'action'",
      },
      {
        default: "left",
        description: "Text alignment",
        name: "align",
        type: "'left' | 'center' | 'right'",
      },
    ],
  },
  {
    name: "Table.Checkbox",
    props: [
      {
        default: "-",
        description: "Unique identifier for the row",
        name: "rowId",
        type: "string | number",
      },
      {
        default: "false",
        description: "Checkbox checked state",
        name: "checked",
        type: "boolean",
      },
      {
        default: "false",
        description: "Indeterminate state (partial selection)",
        name: "indeterminate",
        type: "boolean",
      },
      {
        default: "-",
        description: "Change handler",
        name: "onChange",
        type: "(checked: boolean) => void",
      },
    ],
  },
  {
    name: "Table.DoubleLine",
    props: [
      {
        default: "-",
        description: "Primary text (bold)",
        name: "title",
        type: "ReactNode",
      },
      {
        default: "-",
        description: "Secondary text (gray, smaller)",
        name: "subtitle",
        type: "ReactNode",
      },
      {
        default: "md",
        description: "Component size",
        name: "size",
        type: "'sm' | 'md' | 'lg'",
      },
    ],
  },
  {
    name: "Table.Action",
    props: [
      {
        default: "-",
        description: "Icon component from @versaur/icons",
        name: "icon",
        type: "React.ComponentType<SVGProps>",
      },
      {
        default: "-",
        description: "Click handler (optional, click propagation is stopped)",
        name: "onClick",
        type: "() => void",
      },
      {
        default: "false",
        description: "Disable the button",
        name: "disabled",
        type: "boolean",
      },
    ],
  },
];

export const tableInstallation = `import { Table } from '@versaur/react/table';
import '@versaur/core/table.css';`;
