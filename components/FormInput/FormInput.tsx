import { FC } from 'react';

import { FormInputProps } from './FormInput.props';

const FormInput: FC<FormInputProps> = ({ staticData, register, errors }) => {
  const { label, placeholder, error } = staticData;

  return <label>FORM-INPUT</label>;
};

export default FormInput;
