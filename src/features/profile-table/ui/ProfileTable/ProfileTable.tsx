import { Table } from "@/shared/Table/Table.tsx";
import { Button } from "@/shared/ui/Button";
import {
  UserTableTypes,
  useTableService,
} from "@/features/profile-table/model/form-table.service.ts";
import { FieldArrayWithId, SubmitHandler } from "react-hook-form";
import React, { useMemo, useRef } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { TextCell } from "@/features/profile-table/ui/ProfileTable/ui/cells/ui/TextCell";
import { TopicsCell } from "@/features/profile-table/ui/ProfileTable/ui/cells/ui/TopicsCell";
import { useSetRecoilState } from "recoil";
import { userFormDataPersistAtom } from "@/entities/table/model.ts";

const topicsOptions = [
  {
    value: "books",
    label: "Books",
  },
  {
    value: "movies",
    label: "Movies",
  },
];
export const ProfileTable = () => {
  const {
    fields,
    handleAddPriceItem,
    handleSubmit,
    handleDeletePriceItem,
    control,
  } = useTableService();

  const tableContainerRef = useRef<HTMLDivElement | null>(null);

  const columns = useMemo<ColumnDef<FieldArrayWithId>[]>(
    () => [
      {
        accessorKey: "name",
        header: () => (
          <div className="flex w-full justify-start">
            <span>Name</span>
          </div>
        ),
        cell: ({ row }) => {
          return <TextCell index={row.index} control={control} name="name" />;
        },
        size: 100,
      },
      {
        accessorKey: "age",
        header: () => (
          <div className="flex w-full justify-start">
            <span>Age</span>
          </div>
        ),
        cell: ({ row }) => {
          return <TextCell index={row.index} control={control} name="age" />;
        },
        size: 100,
      },
      {
        accessorKey: "topics",
        header: () => (
          <div className="flex w-full justify-start">
            <span>Topics</span>
          </div>
        ),
        cell: ({ row }) => (
          <TopicsCell
            control={control}
            options={topicsOptions}
            index={row.index}
          />
        ),
        size: 100,
      },
      {
        accessorKey: "delete",
        header: () => null,
        cell: ({ row }) => (
          <Button
            title="Delete"
            color="red"
            type="button"
            onClick={() => handleDeletePriceItem(row.index)}
          />
        ),
        size: 50,
      },
    ],
    [control, handleDeletePriceItem],
  );

  //If need verify what was changed
  // const findChanges = (initialData: IUsers[], formData: IUsers[]) => {
  //   return initialData?.filter(
  //     (initItem, index) =>
  //       initItem.name !== formData[index]?.name ||
  //       initItem.age !== formData[index]?.age ||
  //       initItem.topics.value !== formData[index]?.topics.value,
  //   );
  // };

  const setUserFormData = useSetRecoilState(userFormDataPersistAtom);
  const onSubmit: SubmitHandler<UserTableTypes> = async (data) => {
    const userData = data.userData.map((item, index) => ({
      ...item,
      //assign custom id
      id: index + 1,
    }));

    //save data to ls
    await setUserFormData(userData);
  };

  return (
    <div className="w-full max-w-[800px]">
      <form>
        {fields.length > 0 ? (
          <Table<FieldArrayWithId>
            columns={columns}
            data={fields}
            tableContainerRef={tableContainerRef}
          />
        ) : (
          <div className="flex w-full justify-center">
            <p>No results</p>
          </div>
        )}

        <div className="flex justify-between px-8 pt-8">
          <Button
            mt={12}
            type="button"
            title="Add users"
            color="green"
            onClick={handleAddPriceItem}
          />
          <Button
            title="Save"
            color="blue"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
};
