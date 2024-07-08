import { FormControlProps } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  MenuPlacement,
  OptionsOrGroups,
  PropsValue,
} from "react-select";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import { FormControlWrapper } from "@/components/form/FormControlWrapper";

export type OptionType = { label: string; value: string | number };

type StylesConfig = {
  control?: (base: CSSObjectWithLabel) => CSSObjectWithLabel;
  dropdownIndicator?: (base: CSSObjectWithLabel) => CSSObjectWithLabel;
  indicatorSeparator?: () => CSSObjectWithLabel;
};

export type FormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
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
  isFieldArray?: boolean;
  isMulti?: boolean;
  onMenuScrollToBottom?: (event: WheelEvent | TouchEvent) => void;
  labelColor?: string;
  priceLabel?: boolean;
  portaled?: boolean;
  priceSelect?: boolean;
  isClearable?: boolean;
  noOptionMessage?: string;
  controlProps?: FormControlProps;
};

export const FormSelect = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormSelectProps<TFieldValues, TName>
) => {
  const {
    control,
    name,
    labelColor,
    portaled,
    placeholder,
    priceLabel,
    controlProps,
    onMenuScrollToBottom,
    required,
    options,
    labelVariant,
    styles,
    onInputChange,
    priceSelect,
    components,
    disabled,
    isMulti,
    label,
    isClearable,
    // noOptionMessage,
  } = props;

  const { field, fieldState } = useController({
    name,
    control,
    rules: { required },
  });

  const { onBlur, onChange, ref, value } = field;
  const { invalid, error } = fieldState;
  const [isFixed] = useState(false);
  const [menuPlacement] = useState<MenuPlacement>("bottom");

  if (portaled) {
    return (
      <FormControlWrapper
        label={label}
        priceLabel={priceLabel}
        errorText={error?.message}
        isInvalid={invalid}
        isRequired={required}
        labelVariant={labelVariant}
        priceSelect={priceSelect}
        labelColor={labelColor}
        controlProps={controlProps}
        isDisabled={disabled}
      >
        <Select
          noOptionsMessage={() => "Žádné možnosti"}
          value={value}
          onMenuScrollToBottom={onMenuScrollToBottom}
          isMulti={isMulti}
          menuPortalTarget={document.body}
          onChange={onChange}
          onBlur={onBlur}
          menuPlacement={menuPlacement}
          menuPosition={isFixed ? "fixed" : "absolute"}
          captureMenuScroll={false}
          placeholder={placeholder ?? "Vybrat..."}
          options={options}
          menuShouldScrollIntoView={false}
          onInputChange={onInputChange}
          styles={styles}
          ref={ref}
          required={required}
          components={components}
          isDisabled={(disabled && !!value?.value) || disabled}
          isClearable={isClearable}
        />
      </FormControlWrapper>
    );
  }
  return (
    <FormControlWrapper
      label={label}
      priceLabel={priceLabel}
      errorText={error?.message}
      isInvalid={invalid}
      isRequired={required}
      labelVariant={labelVariant}
      priceSelect={priceSelect}
      labelColor={labelColor}
      controlProps={controlProps}
      isDisabled={disabled}
    >
      <Select
        noOptionsMessage={() => "Žádné možnosti"}
        value={value}
        onMenuScrollToBottom={onMenuScrollToBottom}
        isMulti={isMulti}
        onChange={onChange}
        onBlur={onBlur}
        captureMenuScroll={false}
        placeholder={placeholder ?? "Vybrat..."}
        options={options}
        onInputChange={onInputChange}
        styles={styles}
        ref={ref}
        required={required}
        components={components}
        isDisabled={(disabled && !!value?.value) || disabled}
        isClearable={isClearable}
      />
    </FormControlWrapper>
  );
};
