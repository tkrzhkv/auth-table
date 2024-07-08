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
  const { control, name, label, type = "text", placeholder } = props;

  const { field } = useController({
    name,
    control,
  });

  return (
    <input
      className="w-[200px] h-[60px] border border-blue-900 rounded-md"
      {...field}
      type={type}
      placeholder={placeholder}
    />
  );
};
