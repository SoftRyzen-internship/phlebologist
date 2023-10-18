import { Control, FieldErrors } from 'react-hook-form';
import { NameEnum, FormInputs } from '../Form/Form.props';

type StaticDataType = {
  label: string;
};

export type FormCheckboxOptionsType = {
  name: NameEnum;
  required: boolean;
};

export interface FormCheckboxProps {
  staticData: StaticDataType;
  errors: FieldErrors<FormInputs>;
  control: Control<FormInputs>;
  isChecked: boolean;
  options: FormCheckboxOptionsType;
}
