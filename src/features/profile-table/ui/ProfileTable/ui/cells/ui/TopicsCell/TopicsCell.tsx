import React from "react";
import { Control, FieldPath, useFormContext } from "react-hook-form";
import { createInputList } from "@/shared/ui/Form";
import { UserTableTypes } from "@/features/profile-table/model/form-table.service.ts";
import { styles } from "@/features/profile-table/ui/ProfileTable/ui/cells/ui/TopicsCell/ui/selectStyles.ts";

interface FormNameCellProps {
  index: number;
  control: Control<UserTableTypes>;
  options: {
    value: string;
    label: string;
  }[];
}
const { FormSelect } = createInputList<UserTableTypes>();
export const TopicsCell = ({ index, control, options }: FormNameCellProps) => {
  const fieldName = `userData.${index}.topics` as FieldPath<UserTableTypes>;

  return (
    <FormSelect
      name={fieldName}
      control={control}
      label="Topics"
      options={options}
      styles={styles}
    />
  );
};
