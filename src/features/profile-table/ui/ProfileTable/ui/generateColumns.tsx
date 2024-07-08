import React, { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Control, FieldArrayWithId } from "react-hook-form";
import { UserTableTypes } from "@/features/profile-table/model/form-table.service.ts";
import { NameCell } from "@/features/profile-table/ui/ProfileTable/ui/cells/ui/NameCell";

export const GenerateColumns = (control: Control<UserTableTypes>) => {
  const commonColumns: ColumnDef<FieldArrayWithId>[] = [
    // {
    //   accessorKey: "name",
    //   header: () => <p>Name</p>,
    //   cell: ({ row }) => {
    //     return <NameCell index={row.index} control={control} />;
    //   },
    //   size: 82,
    // },
    // {
    //   accessorKey: "productName",
    //   header: () => <Text variant="tableTitle">Název produktu</Text>,
    //   cell: ({ row }) => {
    //     return <AgeCell index={row.index} control={control} />;
    //   },
    //   size: 109,
    // },
    // {
    //   accessorKey: "tags",
    //   header: () => <Text variant="tableTitle">Tagy</Text>,
    //   cell: ({ row }) => (
    //     <TopicsSelectCell index={row.index} control={control} />
    //   ),
    //   size: 50,
    // },
  ];
  return { commonColumns };
};
