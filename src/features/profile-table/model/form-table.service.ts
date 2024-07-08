import { Control, useFieldArray } from "react-hook-form";
import { useCallback } from "react";
import { z } from "zod";

export const topicsSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const userSchema = z.object({
  name: z.string(),
  age: z.string(),
  topics: z.array(topicsSchema),
});

export const UserTableSchema = z.object({
  userData: z.array(userSchema),
});

export type UserTableTypes = z.infer<typeof UserTableSchema>;

export const useTableService = (control: Control<UserTableTypes>) => {
  const { fields, append, remove } = useFieldArray<
    UserTableTypes,
    "id",
    "userData"
  >({
    control: control,
    name: "userData",
  });

  const handleDeletePriceItem = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  const handleAddPriceItem = useCallback(() => {
    append({
      userData: [
        {
          name: "",
          age: "",
          topics: [
            {
              value: "",
              label: "",
            },
          ],
        },
      ],
    });
  }, [append]);

  return {
    fields,
    handleDeletePriceItem,
    handleAddPriceItem,
    remove,
  };
};
