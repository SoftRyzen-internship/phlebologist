'use client';

import React from 'react';
import cn from 'classnames';

import { ButtonPrimaryProps } from './ButtonPrimary.props';

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  buttonsize = 'medium',
  type = 'button',
  disabled = false, // треба?
  className = '',
  children,
  actionHandler,
}: ButtonPrimaryProps) => {
  const primaryBtnClass = cn(
    {
      'text-xs leading-[1.33] h-8 md:h-10 xl:h-10': buttonsize === 'small',

      'text-base leading-[1.5] h-12 md:h-12 xl:h-12 xxl:h-12':
        buttonsize === 'medium',

      'xl:text-xs xl:px-6 xl:leading-[1.21] xl:-tracking-[0.48px] xl:h-[39px]':
        buttonsize === 'large',
    },
    'uppercase outline-without flex items-center justify-center rounded-lg bg-[#6D91A4] text-[#FFFFFF] font-semibold text-white-light',
    'hover:bg-grad_200 focus:border-[2px] focus:border-primary-light-500 active:border-none active:bg-grad_300',
    'active:text-primary-light-900 disabled:bg-gray-dark disabled:bg-none disabled:text-gray-medium',
    'transition-all duration-300',
    className,
  );

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={actionHandler}
      className={primaryBtnClass}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
