import { FC } from "react";

import { FieldValues } from "react-hook-form";

import {
  FormInput,
  InputFormProps,
} from "@/shared/ui/Form/FormInput/FormInput.tsx";
import { FormSelect } from "@/shared/ui/Form/FormSelect";
import { FormSelectProps } from "@/shared/ui/Form/FormSelect/FormSelect.tsx";

export const createInputList = <FV extends FieldValues>() => ({
  FormInput: FormInput as FC<InputFormProps<FV>>,
  FormSelect: FormSelect as FC<FormSelectProps<FV>>,
});
