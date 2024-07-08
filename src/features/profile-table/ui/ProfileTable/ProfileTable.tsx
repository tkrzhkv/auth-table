import {
  FieldArrayWithId,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserTableSchema,
  UserTableTypes,
  useTableService,
} from "@/features/profile-table/model/form-table.service.ts";
import { GenerateColumns } from "@/features/profile-table/ui/ProfileTable/ui/generateColumns.tsx";
import { Table } from "@/shared/Table/Table.tsx";
import { Button } from "@/shared/ui/Button";
import { createInputList } from "@/shared/ui/Form";
import { NameCell } from "@/features/profile-table/ui/ProfileTable/ui/cells/ui/NameCell";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

const { FormInput } = createInputList<UserTableTypes>();
export const ProfileTable = () => {
  const methods = useForm<UserTableTypes>({
    resolver: zodResolver(UserTableSchema),
    defaultValues: {
      userData: {
        name: "",
        age: "",
        topics: [
          {
            value: "",
            label: "",
          },
        ],
      },
    },
    mode: "onChange",
  });

  const { fields, remove, append } = useFieldArray<
    UserTableTypes,
    "userData",
    "id"
  >({
    control: methods.control,
    name: "userData",
  });

  // const { handleDeletePriceItem, handleAddPriceItem, remove, fields } =
  //   useTableService(methods.control);

  const columns = useMemo<ColumnDef<FieldArrayWithId>[]>(
    () => [
      {
        accessorKey: "name",
        header: () => <p>Name</p>,
        cell: ({ row }) => {
          console.log(row.index);
          return <NameCell index={row.index} control={methods.control} />;
        },
        size: 82,
      },
    ],
    [methods],
  );

  const handleAddPriceItem = () => {
    append({
      name: "",
      topics: "",
      age: "",
    });
  };

  return (
    <FormProvider {...methods}>
      <form>
        {/*<NameCell index={1} control={methods.control} />;*/}
        <Table columns={columns} data={fields} />
      </form>
      <Button title="Add users" color="green" onClick={handleAddPriceItem} />
    </FormProvider>
  );
};
