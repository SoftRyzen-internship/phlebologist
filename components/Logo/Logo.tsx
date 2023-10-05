import React, { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import data from '@/data/logo.json';

interface LogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

const Logo: FC<LogoProps> = ({ variant = 'header', className }) => {
  const logoClass = classnames(
    {
      'text-[16px] leading-[1.19] -tracking-[0.64px] ': variant === 'footer',
    },
    'uppercase font-semibold text-black-dark focus:font-bold hover:font-bold hover:text-primary-dark-300 focus:text-primary-dark-300',
    'transition-all duration-300',
    className,
  );

  return (
    <Link className={logoClass} href="/">
      {data.logo}
    </Link>
  );
};

export default Logo;
