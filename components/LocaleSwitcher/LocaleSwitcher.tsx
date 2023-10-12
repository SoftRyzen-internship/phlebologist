'use client';

import { useEffect, useState, FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

import { i18n } from '@/i18n.config';
import { LocaleSwitcherProps } from './LocaleSwitcher.props';

const LocaleSwitcher: FC<LocaleSwitcherProps> = ({
  variant = 'header',
  className = '',
  data,
}) => {
  const { headerBtn, menuBtn } = data;
  const [localeToToggle, setLocaleToToggle] = useState('en');
  const pathName = usePathname();

  useEffect(() => {
    const getCurrentLocale = () => {
      if (!pathName) return i18n.defaultLocale;
      const segments = pathName.split('/');
      return segments[1] || i18n.defaultLocale;
    };

    const locale = getCurrentLocale();
    setLocaleToToggle(locale === 'en' ? 'uk' : 'en');
  }, [pathName]);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const linkClass = classnames(
    ' px-10 w-auto',
    'outline-without flex text-[12px] uppercase -tracking-[0.48px] items-center justify-center text-black-dark rounded-normal leading-normal ',
    'mediaHover:hover:cursor-pointer mediaHover:hover:bg-gray-extra focus:bg-gray-extra',
    'transition-all duration-300',
    {
      'font-medium py-3 mediaHover:hover:font-bold focus:font-bold bg-white flex items-center justify-center':
        variant === 'header',
    },
    {
      'bg-white-light font-semibold py-2 w-full': variant === 'burger-menu',
    },
    className,
  );

  let text = variant === 'header' ? headerBtn : menuBtn;

  return (
    <Link href={redirectedPathName(localeToToggle)} className={linkClass}>
      {text}
    </Link>
  );
};

export default LocaleSwitcher;
