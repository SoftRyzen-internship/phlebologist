'use client';

import React from 'react';
import { Link } from 'react-scroll';
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
      'xl:w-[464px] xl:bg-white xl:font-medium mediaHover:hover:font-bold focus:font-bold':
        isLink,
    },
    {
      'xl:bg-white-light xl:mediaHover:hover:font-bold xl:focus:font-bold':
        !isLink,
    },

    'outline-without flex items-center justify-center w-[256px] h-[51px] md:w-auto md:px-12 bg-gray-light text-black-dark text-base rounded-normal leading-normal -tracking-[0.64px]',

    'mediaHover:hover:bg-gray-light focus:bg-gray-light mediaHover:hover:cursor-pointer',

    'transition-all duration-300',
    className,
  );

  return (
    <>
      {isLink ? (
        <Link
          className={tertiaryBtnClass}
          to={linkto}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={actionHandler}
        >
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
