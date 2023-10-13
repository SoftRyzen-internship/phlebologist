'use client';

import React from 'react';
import { Link } from 'react-scroll';
import classnames from 'classnames';

import { handleOnKeyUp } from '@/utils/handleOnKeyUp';
import { ScrollLinkButtonProps } from './ScrollLinkButton.props';

const ScrollLinkButton: React.FC<ScrollLinkButtonProps> = ({
  linkto = '',
  variant = 'light',
  className = '',
  children,
  actionHandler,
}) => {
  const btnClass = classnames(
    'flex items-center justify-center text-black-dark text-base rounded-normal leading-normal -tracking-[0.64px]',

    'mediaHover:hover:cursor-pointer mediaHover:hover:font-bold focus:font-bold',

    'transition-all duration-300',

    {
      'w-[256px] h-[51px] md:w-auto md:px-12 bg-white': variant === 'light',
    },

    {
      'w-[224px] h-[51px] md:w-[448px] bg-gray-light xl:bg-white mediaHover:hover:bg-gray-light focus:bg-gray-light':
        variant === 'dark',
    },

    {
      'w-full h-auto px-6 py-2 font-semibold uppercase text-xs leading-normal -tracking-[0.48px] text-white bg-primary-dark-400 mediaHover:hover:bg-primary-dark-300 focus:bg-primary-dark-300 mediaHover:hover:font-semibold focus:font-semibold':
        variant === 'menu',
    },

    className,
  );

  return (
    <Link
      className={btnClass}
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

export default ScrollLinkButton;
