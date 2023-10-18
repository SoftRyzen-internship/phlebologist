'use client';

import { FC } from 'react';

import classnames from 'classnames';
import { Controller } from 'react-hook-form';

import SvgCheck from '@/public/icons/check-icon.svg';
import { FormCheckboxProps } from './FormCheckbox.props';

const FormCheckbox: FC<FormCheckboxProps> = ({
  staticData,
  options,
  errors,
  control,
  isChecked,
}) => {
  const { label } = staticData;
  const { name, required } = options;

  const hasError = errors[name];

  const checkboxClass = classnames(
    'custom-checkbox absolute -ml-6 flex h-4 w-4 items-center justify-center rounded border hover:border-gray-dim focus:border-gray-dim transition-all duration-300',
    { 'border-gray-dark': !isChecked && !hasError },
    {
      'border-gray-dim': isChecked,
    },
    {
      '!border-notify-error': hasError,
    },
  );

  return (
    <label className="relative mb-4 flex max-w-fit pl-6 text-black-dark hover:cursor-pointer">
      <Controller
        shouldUnregister
        name={name}
        rules={{ required }}
        control={control}
        render={({ field }) => (
          <input {...field} className="hidden-checkbox" type="checkbox" />
        )}
      />
      <span className={checkboxClass} aria-label="Confirmation checkbox">
        {isChecked && <SvgCheck aria-hidden />}
      </span>
      <span className="block text-xs leading-normal -tracking-[0.48px]">
        {label}
      </span>
    </label>
  );
};

export default FormCheckbox;
