'use client';

import React from 'react';
import { Link } from 'react-scroll';
import classnames from 'classnames';

import { handleOnKeyUp } from '@/utils/handleOnKeyUp';
import { ButtonSecondaryProps } from './ButtonSecondary.props';

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  linkto,
  view = undefined,
  className = '',
  children,
  actionHandler,
}) => {
  const secondaryBtnClass = classnames(
    {
      'md:w-[262px] xl:w-auto': view === 'hero',
    },
    { 'md:w-[186px]': view !== 'hero' },

    'flex items-center justify-center w-[256px] h-[51px] rounded-normal bg-white-light font-bold xl:px-12 xl:font-medium xl:bg-gray-light text-primary-dark-400 text-base leading-normal -tracking-[0.64px]',

    'mediaHover:hover:bg-white focus:bg-white mediaHover:hover:font-bold focus:font-bold mediaHover:hover:cursor-pointer',

    'transition-all duration-300',
    className,
  );

  return (
    <Link
      className={secondaryBtnClass}
      to={linkto}
      onClick={actionHandler}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      //=============
      role="button"
      tabIndex={0}
      activeClass="active"
      onKeyUp={e => handleOnKeyUp(e, linkto)}
    >
      {children}
    </Link>
  );
};

export default ButtonSecondary;
