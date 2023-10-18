'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';
import { Link as LinkScroll } from 'react-scroll';

import { NavigationProps } from './Navigation.props';

const Navigation: FC<NavigationProps> = ({
  data,
  lang,
  variant = 'header',
  className = '',
  itemClassName = '',
  actionHandler,
}) => {
  const pathname = usePathname();
  const { navigation_home, navigation_treatment } = data;

  const itemClass = classnames(
    {
      'font-medium focus:font-bold hover:font-bold hover:text-primary-dark-300 focus:text-primary-dark-300':
        variant === 'footer',
    },
    {
      'font-semibold !p-0 !h-[31px]': variant === 'header',
    },
    'text-[12px] uppercase leading-normal -tracking-[0.48px] text-black-dark ',
    'transition-all duration-300',
    itemClassName,
  );

  const linkClass = classnames(
    'flex justify-center items-center w-full h-full',
  );

  return pathname.includes('treatment') ? (
    <nav>
      <ul className={className}>
        {navigation_treatment.map(({ title, linkTo }) => {
          if (linkTo.includes('/')) {
            return (
              <li className={itemClass} key={linkTo} onClick={actionHandler}>
                <Link href={`${linkTo}${lang}`} className={linkClass}>
                  {title}
                </Link>
              </li>
            );
          }

          if (
            !linkTo.includes('consultation') &&
            !linkTo.includes('contacts')
          ) {
            return (
              <li className={itemClass} key={linkTo} onClick={actionHandler}>
                <Link href={linkTo} className={linkClass}>
                  {title}
                </Link>
              </li>
            );
          }

          return (
            <li className={itemClass} key={linkTo} onClick={actionHandler}>
              <LinkScroll
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to={linkTo}
                href={`${linkTo}`}
                onClick={actionHandler}
                className={linkClass}
              >
                {title}
              </LinkScroll>
            </li>
          );
        })}
      </ul>
    </nav>
  ) : (
    <nav>
      <ul className={className}>
        {navigation_home.map(({ title, linkTo }) => {
          if (linkTo.includes('/')) {
            return (
              <li className={itemClass} key={linkTo} onClick={actionHandler}>
                <Link href={`${linkTo}${lang}`} className={linkClass}>
                  {title}
                </Link>
              </li>
            );
          }
          return (
            <li className={itemClass} key={linkTo} onClick={actionHandler}>
              <LinkScroll
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to={linkTo}
                href={`#${linkTo}`}
                onClick={actionHandler}
                className={linkClass}
              >
                {title}
              </LinkScroll>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
