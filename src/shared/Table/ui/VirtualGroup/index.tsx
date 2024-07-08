import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { Cell, flexRender, Row, RowData } from "@tanstack/react-table";

import "./index.css";

interface IGroup<TData extends RowData> {
  rows: Row<TData & { is_disabled?: boolean }>[];
  rowPadding?: string;
  handleRowClick?: (item: number) => void;
}

interface CellContentProps<TData> {
  row: Row<TData & { is_disabled?: boolean }>;
  cell: Cell<TData, object>;
}

const CellContent = <TData extends RowData>({
  row,
  cell,
}: CellContentProps<TData>) => {
  const isSelected = row.getIsSelected();

  const style = useMemo(() => {
    return {
      display: "flex",
      alignItems: "start",
      paddingLeft: 0,
      color: "black.500",
    };
  }, [cell, isSelected]);

  const context = cell.getContext();
  const cellContent = useMemo(
    () => flexRender(cell.column.columnDef.cell, context),
    [cell, context, isSelected],
  );

  return <div style={style}>{cellContent}</div>;
};

export const VirtualGroup = <TData extends RowData>({
  rows,
  handleRowClick,
  rowPadding,
}: IGroup<TData>) => {
  const memoizedRows = rows.map((row) => {
    const isDisabled = row.original?.is_disabled;

    return (
      <React.Fragment key={uuidv4()}>
        <tr
          style={{
            borderBottom: "1px solid #DDDDDD",
            cursor: !isDisabled ? "not-allowed" : "pointer",
            pointerEvents: !isDisabled ? "none" : "auto",
          }}
        >
          {row?.getVisibleCells()?.map((cell) => (
            <td
              onClick={() =>
                !isDisabled || cell.column.id === "download"
                  ? null
                  : handleRowClick &&
                    handleRowClick(row.id as unknown as number)
              }
              key={uuidv4()}
              style={{
                height: "35px",
                padding: rowPadding ?? "6px 0 2px 0",
              }}
            >
              <CellContent row={row} cell={cell as Cell<TData, object>} />
            </td>
          ))}
        </tr>
      </React.Fragment>
    );
  });

  return <React.Fragment>{memoizedRows}</React.Fragment>;
};

export default VirtualGroup;
