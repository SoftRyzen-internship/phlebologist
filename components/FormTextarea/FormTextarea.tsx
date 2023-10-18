import { FC } from 'react';

import { FormTextareaProps } from './FormTextarea.props';
import classnames from 'classnames';

const FormTextarea: FC<FormTextareaProps> = ({
  staticData,
  register,
  errors,
  options,
}) => {
  const { label, placeholder, error } = staticData;
  const { name } = options;

  const hasError = errors[name];

  const textareaClass = classnames(
    'h-[182px] p-4 text-base rounded-extended resize-none placeholder-gray-dark transition-all duration-300',

    'outline-none outline-1 outline-offset-1 outline-gray-dark hover:outline-gray-dim focus:outline-gray-dim',
    {
      'outline-notify-error hover:outline-notify-error focus:outline-notify-error':
        hasError,
    },
  );

  return (
    <label className="relative mb-8 flex flex-col text-black-dark">
      <span className="mb-2 text-xs leading-normal -tracking-[0.48px]">
        {label}
      </span>
      <textarea
        className={textareaClass}
        placeholder={placeholder}
        {...register(name, options)}
      />

      {hasError ? (
        <span className="absolute top-full mt-1 text-xs leading-[1.21] -tracking-[0.48px] text-notify-error">
          {error}
        </span>
      ) : null}
    </label>
  );
};

export default FormTextarea;
