'use client';

import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { ButtonTertiaryProps } from './ButtonTertiary.props';

const ButtonTertiary: React.FC<ButtonTertiaryProps> = ({
  isLink = false,
  type = 'button',
  linkto = '',
  className = '',
  children,
  actionHandler,
}: ButtonTertiaryProps) => {
  const tertiaryBtnClass = classnames(
    {
      'font-bold w-[224px] md:w-[252px] md:font-normal xl:w-[344px] xl:bg-white':
        isLink,
    },
    { 'font-normal w-[256px] md:w-auto md:px-12 xl:bg-white-light': !isLink },
    'outline-without flex items-center justify-center h-[51px] py-4 bg-gray-light text-black-dark text-base rounded-normal leading-normal -tracking-[0.64px]',

    'mediaHover:hover:bg-gray-dark focus:bg-gray-dark mediaHover:hover:cursor-pointer',

    'transition-all duration-300',
    className,
  );

  return (
    <>
      {isLink ? (
        <Link href={linkto} className={tertiaryBtnClass}>
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={actionHandler}
          className={tertiaryBtnClass}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default ButtonTertiary;
