import React from "react";
import { flexRender, Table } from "@tanstack/react-table";
import { v4 as uuidv4 } from "uuid";

interface ITable<TData> {
  table: Table<TData>;
  isTransaction?: boolean;
}

export const TableHeader = <TData,>({
  table,
  isTransaction,
}: ITable<TData>): JSX.Element => {
  return (
    <thead className="bg-transparent">
      {table.getHeaderGroups().map((headerGroup) => (
        <React.Fragment key={headerGroup.id + uuidv4()}>
          <tr
            style={{
              borderBottom: "1px solid #B8694E",
              height: "100%",
            }}
          >
            {headerGroup.headers.map((header) => {
              return (
                <th
                  key={header.id + uuidv4()}
                  colSpan={header.colSpan}
                  className="h-full"
                  style={{
                    width: header.getSize(),
                    textAlign: "start",
                    paddingBottom: isTransaction ? "23px" : "",
                    borderBottom: 0,
                  }}
                  {...{
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {header.isPlaceholder ? null : (
                    <div className="flex cursor-pointer h-full justify-start items-start">
                      <p className="text-gray-500 transform-none">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </p>
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        </React.Fragment>
      ))}
    </thead>
  );
};
