import { FC } from "react";

import { FieldValues } from "react-hook-form";

// import { FormSelect, FormSelectProps } from "./FormSelect";
import {
  FormInput,
  InputFormProps,
} from "@/shared/ui/Form/FormInput/FormInput.tsx";

export const createInputList = <FV extends FieldValues>() => ({
  FormInput: FormInput as FC<InputFormProps<FV>>,
  // FormSelect: FormSelect as FC<FormSelectProps<FV>>,
});
