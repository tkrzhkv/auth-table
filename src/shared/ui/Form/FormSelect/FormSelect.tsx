import React from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionsOrGroups,
  PropsValue,
} from "react-select";
import { SelectComponents } from "react-select/dist/declarations/src/components";

export type OptionType = { label: string; value: string | number };

type StylesConfig = {
  control?: (base: CSSObjectWithLabel) => CSSObjectWithLabel;
  dropdownIndicator?: (base: CSSObjectWithLabel) => CSSObjectWithLabel;
  indicatorSeparator?: () => CSSObjectWithLabel;
};

export type FormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  control?: Control<TFieldValues>;
  required?: boolean;
  placeholder?: string;
  labelVariant?: string;
  label?: string;
  options: OptionsOrGroups<
    OptionType,
    GroupBase<OptionType> & { value?: string }
  >;
  rules?: { required: boolean };
  styles?: StylesConfig;
  onInputChange?: (val: string) => void;
  components?:
    | Partial<SelectComponents<OptionType, boolean, GroupBase<OptionType>>>
    | undefined;
  disabled?: boolean;
  value?: PropsValue<OptionType>;
  isClearable?: boolean;
  noOptionMessage?: string;
};

export const FormSelect = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormSelectProps<TFieldValues, TName>,
) => {
  const {
    control,
    name,

    placeholder,
    onMenuScrollToBottom,
    required,
    options,
    styles,
  } = props;

  const { field } = useController({
    name,
    control,
  });

  const { onBlur, onChange, ref, value } = field;

  return (
    <Select
      noOptionsMessage={() => "No option"}
      value={value}
      onMenuScrollToBottom={onMenuScrollToBottom}
      onChange={onChange}
      onBlur={onBlur}
      captureMenuScroll={false}
      placeholder={placeholder ?? "Select..."}
      options={options}
      styles={styles}
      ref={ref}
      required={required}
    />
  );
};
