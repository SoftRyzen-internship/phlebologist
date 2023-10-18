import { UseFormRegister, FieldErrors } from 'react-hook-form';

import { NameEnum, FormInputs } from '../Form/Form.props';

type StaticDataType = {
  label: string;
  placeholder: string;
  error: string;
};

export type FormTextareaOptionsType = {
  name: NameEnum;
  required: boolean;
  maxLength: number;
};

export interface FormTextareaProps {
  staticData: StaticDataType;
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  options: FormTextareaOptionsType;
}
