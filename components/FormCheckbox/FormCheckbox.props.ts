import { Control } from 'react-hook-form';

export interface FormCheckboxProps {
  staticData: {
    label: string;
  };
  register: any;
  errors: any;
  control: Control<any>;
  isChecked: boolean;
  setIsChecked: (b: boolean) => void;
}
