import React from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

export type InputFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  control: Control<TFieldValues>;
  label?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  readonly?: boolean;
};

export const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: InputFormProps<TFieldValues, TName>,
) => {
  const { control, name, placeholder } = props;

  const { field } = useController({
    name,
    control,
  });

  return (
    <input
      className="pl-4 w-full h-[40px] border border-gray-300 rounded-md focus:border-blue-500 outline-0"
      {...field}
      placeholder={placeholder}
    />
  );
};
