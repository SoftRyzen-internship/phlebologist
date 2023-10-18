import { UseFormRegister, FieldErrors } from 'react-hook-form';

import { NameEnum, FormInputs } from '../Form/Form.props';

type StaticDataType = {
  label: string;
  placeholder: string;
  error: string;
};

export type FormInputOptionsType = {
  name: NameEnum;
  required: boolean;
  pattern: string;
  minLength: number;
  maxLength: number;
};

export interface FormInputProps {
  staticData: StaticDataType;
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  options: FormInputOptionsType;
}
