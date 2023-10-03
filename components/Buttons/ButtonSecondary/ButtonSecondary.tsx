import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { ButtonSecondaryProps } from './ButtonSecondary.props';

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  linkto,
  view = undefined,
  className = '',
  children,
}) => {
  const secondaryBtnClass = classnames(
    {
      'md:w-[262px] xl:w-auto': view === 'hero',
    },
    { 'md:w-[186px] xl:w-auto': view !== 'hero' },

    'outline-without flex items-center justify-center w-[256px] h-[51px] rounded-normal bg-white-light font-bold xl:px-12 xl:font-medium xl:bg-gray-light text-primary-dark-400 text-base leading-normal -tracking-[0.64px]',

    'mediaHover:hover:bg-white focus:bg-white mediaHover:hover:font-bold focus:font-bold',

    'transition-all duration-300',
    className,
  );

  return (
    <Link href={linkto} className={secondaryBtnClass}>
      {children}
    </Link>
  );
};

export default ButtonSecondary;
