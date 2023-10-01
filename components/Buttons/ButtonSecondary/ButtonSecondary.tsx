import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { ButtonSecondaryProps } from './ButtonSecondary.props';

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  linkto,
  view = undefined,
  className = '',
  children,
}: ButtonSecondaryProps) => {
  const secondaryBtnClass = classnames(
    {
      'text-primary-dark-100 md:w-[262px] xl:w-[312px]': view === 'hero',
    },
    { 'text-primary-dark-200 md:w-[186px]': view !== 'hero' }, // на мобілці яка буде ширина кнопки?
    'outline-without flex items-center justify-center w-[256px] rounded-normal bg-white-light font-bold text-base px-[23px] xl:px-12 py-4 leading-normal -tracking-[0.64px]',

    'mediaHover:hover:bg-gray-light mediaHover:hover:text-black-dark focus:bg-gray-light focus:text-black-dark',

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
