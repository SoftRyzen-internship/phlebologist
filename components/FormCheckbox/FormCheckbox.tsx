import { FC } from 'react';

import { FormCheckboxProps } from './FormCheckbox.props';
import { Controller, Control } from 'react-hook-form';

const FormCheckbox: FC<FormCheckboxProps> = ({
  staticData,
  register,
  errors,
  control,
  isChecked,
  setIsChecked,
  handleInputChange,
}) => {
  return <div>FORM-CHECKBOX</div>;
};

export default FormCheckbox;
