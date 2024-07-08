import React from "react";
import { Control, FieldPath, useWatch } from "react-hook-form";
import { UserTableTypes } from "@/features/profile-table/model/form-table.service.ts";
import { createInputList } from "@/shared/ui/Form";

interface FormNameCellProps {
  index: number;
  control: Control<UserTableTypes>;
}
const { FormInput } = createInputList<UserTableTypes>();
export const NameCell = ({ index, control }: FormNameCellProps) => {
  const name = `userData.${index}.name` as FieldPath<UserTableTypes>;

  return (
    <div>
      <FormInput name={name} control={control} label="Name" />
    </div>
  );
};
