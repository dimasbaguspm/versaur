import type {
  TdHTMLAttributes,
  ThHTMLAttributes,
  TableHTMLAttributes,
  HTMLAttributes,
} from "react";
import type { TableCellVariant } from "@versaur/core";

export type TableRootProps = TableHTMLAttributes<HTMLTableElement>;

export type TableWrapperProps = HTMLAttributes<HTMLDivElement>;

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement> & {
  /**
   * Width of the column. Can be a percentage (e.g., '25%') or fixed value (e.g., '200px').
   * Converted to data-table-col-width attribute for CSS styling.
   */
  width?: string;
};

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
  variant?: TableCellVariant;
  /**
   * Width of the column. Can be a percentage (e.g., '25%') or fixed value (e.g., '200px').
   * Converted to data-table-col-width attribute for CSS styling.
   */
  width?: string;
};

export type TableComponent = {
  Header: typeof TableHeader;
  Body: typeof TableBody;
  Footer: typeof TableFooter;
  Row: typeof TableRow;
  Head: typeof TableHead;
  Cell: typeof TableCell;
};

// Component type exports for namespace declaration merging
declare const TableHeader: React.ForwardRefExoticComponent<
  TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>
>;
declare const TableBody: React.ForwardRefExoticComponent<
  TableBodyProps & React.RefAttributes<HTMLTableSectionElement>
>;
declare const TableFooter: React.ForwardRefExoticComponent<
  TableFooterProps & React.RefAttributes<HTMLTableSectionElement>
>;
declare const TableRow: React.ForwardRefExoticComponent<
  TableRowProps & React.RefAttributes<HTMLTableRowElement>
>;
declare const TableHead: React.ForwardRefExoticComponent<
  TableHeadProps & React.RefAttributes<HTMLTableCellElement>
>;
declare const TableCell: React.ForwardRefExoticComponent<
  TableCellProps & React.RefAttributes<HTMLTableCellElement>
>;
