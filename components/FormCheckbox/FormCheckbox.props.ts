import { Control } from 'react-hook-form';
import { FormInputs } from '../Form/Form.props';

type StaticDataType = {
  label: string;
};

export interface FormCheckboxProps {
  staticData: StaticDataType;
  errors: any;
  control: Control<FormInputs | any>;
  isChecked: boolean;
  options: { name: string; required: boolean };
}
