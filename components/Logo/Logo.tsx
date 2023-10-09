import React, { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import data from '@/data/logo.json';
import { LogoProps } from './Logo.props';

const Logo: FC<LogoProps> = ({ className }) => {
  const logoClass = classnames(
    'block text-[16px] xl:text-[20px] leading-[1.19] xl:tracking-[-0.8px] -tracking-[0.64px] uppercase font-semibold text-black-dark focus:font-bold hover:font-bold hover:text-primary-dark-300 focus:text-primary-dark-300',
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
