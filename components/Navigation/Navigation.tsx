'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { Link as LinkScroll } from 'react-scroll';

import { NavigationProps } from './Navigation.props';

const Navigation: FC<NavigationProps> = ({
  data,
  variant = 'header',
  className = '',
  itemClassName = '',
}) => {
  const itemClass = classnames(
    {
      'font-medium focus:font-bold hover:font-bold hover:text-primary-dark-300 focus:text-primary-dark-300':
        variant === 'footer',
    },
    { 'font-semibold': variant === 'header' },
    'text-[12px] uppercase leading-normal -tracking-[0.48px] text-black-dark ',
    'transition-all duration-300',
    itemClassName,
  );

  return (
    <ul className={className}>
      {data.map(({ title, linkTo }) => {
        if (linkTo.includes('/')) {
          return (
            <li className={itemClass} key={linkTo}>
              <Link href={linkTo}>{title}</Link>
            </li>
          );
        }

        return (
          <li className={itemClass} key={linkTo}>
            <LinkScroll
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to={linkTo}
              href={`#${linkTo}`}
            >
              {title}
            </LinkScroll>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
