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

  const checkboxTextClass = classnames(
    'block text-xs leading-normal -tracking-[0.48px]',
    {
      'text-notify-error': hasError,
    },
  );

  const checkboxClass = classnames(
    'custom-checkbox absolute -ml-6 flex h-4 w-4 items-center justify-center rounded border border-gray-dark hover:border-gray-dim focus:border-gray-dim transition-all duration-300',
    {
      'border-gray-dim': isChecked,
    },
  );

  return (
    <label className="relative mb-4 flex pl-6 text-black-dark hover:cursor-pointer">
      <Controller
        name={name}
        rules={{
          required,
        }}
        control={control}
        render={({ field }) => (
          <input {...field} className="hidden-checkbox" type="checkbox" />
        )}
      />
      <span className={checkboxClass} aria-label="Confirmation checkbox">
        {isChecked && <SvgCheck aria-hidden />}
      </span>
      <span className={checkboxTextClass}>{label}</span>
    </label>
  );
};

export default FormCheckbox;
