import { FC } from 'react';

import { FormTextareaProps } from './FormTextarea.props';

const FormTextarea: FC<FormTextareaProps> = ({ staticData }) => {
  console.log(staticData);
  return <div>FORM-TEXTAREA</div>;
};

export default FormTextarea;
