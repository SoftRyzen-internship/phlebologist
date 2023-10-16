import { Control } from 'react-hook-form';
import { FormInputs } from '../Form/Form.props';

export interface FormCheckboxProps {
  staticData: {
    label: string;
  };
  errors: any;
  control: Control<FormInputs | any>;
  isChecked: boolean;
  options: { name: string; required: boolean };
}
