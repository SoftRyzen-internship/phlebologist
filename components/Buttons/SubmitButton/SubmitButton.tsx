'use client';

import React from 'react';
import classnames from 'classnames';

import { SubmitButtonProps } from './SubmitButton.props';

const SubmitButton: React.FC<SubmitButtonProps> = ({
  className = '',
  children,
  actionHandler,
}) => {
  const btnClass = classnames(
    'xl:bg-white-light xl:mediaHover:hover:bg-gray-light xl:focus:bg-gray-light',

    'outline-without flex items-center justify-center w-[224px] h-[51px] bg-gray-light md:w-auto md:px-12 text-black-dark text-base rounded-normal leading-extended -tracking-[0.64px]',

    'mediaHover:hover:cursor-pointer mediaHover:hover:font-bold focus:font-bold',

    'transition-all duration-300',
    className,
  );

  return (
    <button type="submit" onClick={actionHandler} className={btnClass}>
      {children}
    </button>
  );
};

export default SubmitButton;
