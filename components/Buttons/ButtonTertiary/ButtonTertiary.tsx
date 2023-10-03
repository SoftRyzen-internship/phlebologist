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
}) => {
  const tertiaryBtnClass = classnames(
    {
      'font-bold w-[224px] md:w-[252px] md:font-normal xl:w-[464px] xl:bg-white xl:font-medium mediaHover:hover:font-bold focus:font-bold':
        isLink,
    },
    {
      'font-normal w-[256px] md:w-auto md:px-12 xl:bg-white-light xl:mediaHover:hover:font-bold xl:focus:font-bold':
        !isLink,
    },

    'outline-without flex items-center justify-center h-[51px] bg-gray-light text-black-dark text-base rounded-normal leading-normal -tracking-[0.64px]',

    'mediaHover:hover:bg-gray-light focus:bg-gray-light mediaHover:hover:cursor-pointer',

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
