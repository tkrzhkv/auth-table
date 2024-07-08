import React from "react";
import {
  ColumnDef,
  ExpandedState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowData,
  RowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { VirtualGroup } from "@/shared/Table/ui/VirtualGroup";

import { TableHeader } from "@/shared/Table/ui/TableHeader";
import { SetterOrUpdater } from "recoil";
import { Spinner } from "@material-tailwind/react";

export type TableProps<TData extends RowData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  setGlobalFilter?: React.Dispatch<React.SetStateAction<string>>;
  globalFilter?: string;
  isLoading?: boolean;
  minRowHeight?: number;
  enableExpanding?: boolean;
  sorting?: SortingState;
  expanded?: ExpandedState;
  setExpanded?: React.Dispatch<React.SetStateAction<ExpandedState>>;
  setSorting?: React.Dispatch<React.SetStateAction<SortingState>>;
  isPaginating?: boolean;
  minH?: string;
  customHeight?: string;
  handleRowClick?: (item: number) => void;
  isTransaction?: boolean;
  simulateLoading?: VoidFunction;
  headerHeight?: string;
};

export const Table = <TData extends RowData>(props: TableProps<TData>) => {
  const {
    data,
    columns,
    rowPadding,
    globalFilter,
    sorting,
    headerHeight,
    expanded,
    setExpanded,
    setSorting,
    setGlobalFilter,
    handleRowClick,
    isTransaction,
    isLoading,
  } = props;

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      expanded,
      globalFilter,
    },
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: false,
    onSortingChange: setSorting,
    manualSorting: true,
    onExpandedChange: setExpanded,
    onGlobalFilterChange: setGlobalFilter,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  const { rows }: RowModel<TData & { is_disabled?: boolean }> =
    table.getRowModel();

  const renderVirtualGroup = () => {
    if (rows.length === 0) {
      return (
        <tr className="flex justify-center">
          <th className="text-md">Add something to the table...</th>
        </tr>
      );
    } else {
      return (
        <VirtualGroup
          rows={rows}
          handleRowClick={handleRowClick}
          rowPadding={rowPadding}
        />
      );
    }
  };

  return (
    <div>
      <table className="w-full relative">
        {rows.length >= 1 && (
          <TableHeader
            table={table}
            isTransaction={isTransaction}
            isLoading={isLoading}
            headerHeight={headerHeight}
          />
        )}
        <tbody>{isLoading ? <Spinner /> : renderVirtualGroup()}</tbody>
      </table>
    </div>
  );
};
