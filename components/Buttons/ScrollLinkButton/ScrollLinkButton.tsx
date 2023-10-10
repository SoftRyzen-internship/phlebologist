'use client';

import React from 'react';
import { Link } from 'react-scroll';
import classnames from 'classnames';

import { ScrollLinkButtonProps } from './ScrollLinkButton.props';

const ScrollLinkButton: React.FC<ScrollLinkButtonProps> = ({
  linkto = '',
  variant = 'light',
  className = '',
  children,
}) => {
  const btnClass = classnames(
    {
      'w-[256px] md:w-auto md:px-12 bg-white': variant === 'light',
    },

    {
      'w-[224px] md:w-full bg-gray-light xl:bg-white mediaHover:hover:bg-gray-light focus:bg-gray-light':
        variant === 'dark',
    },

    'outline-without flex items-center justify-center h-[51px] md:w-auto text-black-dark text-base rounded-normal leading-normal -tracking-[0.64px]',

    'mediaHover:hover:cursor-pointer mediaHover:hover:font-bold focus:font-bold',

    'transition-all duration-300',
    className,
  );

  return (
    <Link
      className={btnClass}
      to={linkto}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      {children}
    </Link>
  );
};

export default ScrollLinkButton;
