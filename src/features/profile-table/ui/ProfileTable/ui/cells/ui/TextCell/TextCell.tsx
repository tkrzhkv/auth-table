import React from "react";
import { Control, FieldPath } from "react-hook-form";
import { createInputList } from "@/shared/ui/Form";
import { UserTableTypes } from "@/features/profile-table/model/form-table.service.ts";

interface FormNameCellProps {
  index: number;
  control: Control<UserTableTypes>;
  name: string;
}
const { FormInput } = createInputList<UserTableTypes>();

export const TextCell = ({ index, control, name }: FormNameCellProps) => {
  const filedName = `userData.${index}.${name}` as FieldPath<UserTableTypes>;

  return <FormInput name={filedName} control={control} label="Name" />;
};
