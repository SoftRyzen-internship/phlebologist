// 'use client';

// import React, { useState, useEffect } from 'react';
import React from 'react';
import classnames from 'classnames';

import { ButtonPrimaryProps } from './ButtonPrimary.props';
// import { SCREEN_TABLET, SCREEN_DESKTOP } from '@/constants';
// import SvgButtonArrow from '@/public/icons/list-chevron.svg';

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  view = undefined,
  variant = 'light',
  className = '',
  children,
  actionHandler,
}) => {
  // const [width, setWidth] = useState<number | null>(null);

  // useEffect(() => {
  //   if (!width) {
  //     setWidth(window.innerWidth);
  //   }

  //   const handleResize = (event: Event): void => {
  //     if (event.target instanceof Window) {
  //       setWidth(event.target.innerWidth);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [width]);

  // const isScreenTablet = width! >= SCREEN_TABLET && width! < SCREEN_DESKTOP;

  const primaryBtnClass = classnames(
    {
      'py-3 bg-white font-medium text-black-dark mediaHover:hover:bg-gray-extra focus:bg-gray-extra mediaHover:hover:font-bold focus:font-bold':
        view === 'header' && variant === 'light',
    },
    {
      'py-3 bg-primary-dark-300 font-medium text-white mediaHover:hover:bg-primary-dark-400 focus:bg-primary-dark-400':
        view === 'header' && variant === 'dark',
    },
    {
      'px-6 py-2 font-medium bg-primary-dark-300 text-white':
        view !== 'header' && variant === 'dark',
    },
    {
      'px-6 py-2 font-medium bg-white-light text-black-dark mediaHover:hover:bg-gray-light focus:bg-gray-light':
        view !== 'header' && variant === 'light',
    },

    'uppercase outline-without flex items-center justify-center gap-[10px] rounded-normal text-xs leading-normal -tracking-[0.48px]',

    'transition-all duration-300',
    className,
  );

  return (
    <button type="button" onClick={actionHandler} className={primaryBtnClass}>
      {children}
      {/* {isScreenTablet && <SvgButtonArrow width={16} aria-hidden />} */}
    </button>
  );
};

export default ButtonPrimary;
