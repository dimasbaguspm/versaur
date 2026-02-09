"use client";

import { forwardRef } from "react";
import { tableStyles } from "@versaur/core";
import "@versaur/core/table.css";
import { useDataAttrs } from "../../hooks/use-data-attrs.js";
import type {
  TableRootProps,
  TableWrapperProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
  TableComponent,
} from "./table.types.js";

/**
 * TableRoot - The semantic table element
 * Usually wrapped by Table component which provides overflow handling
 */
const TableRoot = forwardRef<HTMLTableElement, TableRootProps>((props, ref) => {
  return <table ref={ref} className={tableStyles.table} {...props} />;
});

TableRoot.displayName = "Table";

/**
 * TableWrapper - Div wrapper for overflow handling
 * The Table compound component uses this internally
 */
const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(
  (props, ref) => {
    return <div ref={ref} className={tableStyles.table} {...props} />;
  },
);

TableWrapper.displayName = "TableWrapper";

/**
 * TableHeader - thead wrapper
 */
const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  (props, ref) => {
    return (
      <thead ref={ref} className={tableStyles["table-header"]} {...props} />
    );
  },
);

TableHeader.displayName = "Table.Header";

/**
 * TableBody - tbody wrapper
 */
const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    return <tbody ref={ref} className={tableStyles["table-body"]} {...props} />;
  },
);

TableBody.displayName = "Table.Body";

/**
 * TableFooter - tfoot wrapper
 */
const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  (props, ref) => {
    return (
      <tfoot ref={ref} className={tableStyles["table-footer"]} {...props} />
    );
  },
);

TableFooter.displayName = "Table.Footer";

/**
 * TableRow - tr wrapper
 */
const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => {
    return <tr ref={ref} className={tableStyles["table-row"]} {...props} />;
  },
);

TableRow.displayName = "Table.Row";

/**
 * TableHead - th wrapper (for header cells)
 */
const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ width, ...props }, ref) => {
    const dataAttrs = useDataAttrs({
      tableColWidth: width,
    });

    return (
      <th
        ref={ref}
        className={tableStyles["table-head"]}
        {...dataAttrs}
        {...props}
      />
    );
  },
);

TableHead.displayName = "Table.Head";

/**
 * TableCell - td wrapper with optional variant and width support
 */
const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ variant, width, ...props }, ref) => {
    const dataAttrs = useDataAttrs({
      tableCellVariant: variant,
      tableColWidth: width,
    });

    return (
      <td
        ref={ref}
        className={tableStyles["table-cell"]}
        {...dataAttrs}
        {...props}
      />
    );
  },
);

TableCell.displayName = "Table.Cell";

/**
 * Table - Compound component for semantic table with overflow handling
 * Root renders a div wrapper containing the table element
 */
const TableComponent = forwardRef<
  HTMLDivElement,
  TableWrapperProps & { children?: React.ReactNode }
>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div ref={ref} className={tableStyles.table}>
      <table {...rest}>{children}</table>
    </div>
  );
});

TableComponent.displayName = "Table";

const Table = Object.assign(TableComponent, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
}) as React.ForwardRefExoticComponent<
  TableWrapperProps & React.RefAttributes<HTMLDivElement>
> & {
  Header: typeof TableHeader;
  Body: typeof TableBody;
  Footer: typeof TableFooter;
  Row: typeof TableRow;
  Head: typeof TableHead;
  Cell: typeof TableCell;
};

export {
  Table,
  TableRoot,
  TableWrapper,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
};
