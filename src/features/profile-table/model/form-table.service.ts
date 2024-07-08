import { useFieldArray, useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRecoilValue } from "recoil";
import { userFormDataPersistAtom } from "@/entities/table/model.ts";

export const topicsSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const userSchema = z.object({
  name: z.string(),
  age: z.string(),
  topics: topicsSchema,
  id: z.number().optional(),
  is_post: z.boolean().optional(),
});

export const UserTableSchema = z.object({
  userData: z.array(userSchema),
});

export type UserTableTypes = z.infer<typeof UserTableSchema>;

export const useTableService = () => {
  const usersFormData = useRecoilValue(userFormDataPersistAtom);
  const methods = useForm<UserTableTypes>({
    resolver: zodResolver(UserTableSchema),
    defaultValues: {
      userData: [],
    },
    mode: "onChange",
  });

  const { control, handleSubmit, reset } = methods;

  const { fields, remove, append } = useFieldArray<UserTableTypes, "userData">({
    control,
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
      name: "",
      age: "",
      topics: {
        label: "",
        value: "",
      },
      is_post: true,
    });
  }, [append]);

  //setUsersFromLS
  useEffect(() => {
    if (usersFormData.length > 0) {
      reset({
        userData: usersFormData,
      });
    }
  }, [reset, usersFormData]);

  return {
    fields,
    handleDeletePriceItem,
    handleAddPriceItem,
    remove,
    methods,
    handleSubmit,
    control,
  };
};
