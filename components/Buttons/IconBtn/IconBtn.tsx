'use client';

import { FC } from 'react';
import classNames from 'classnames';

import getIconByName from '@/utils/getIconByName';

import { IconBtnProps } from './IconBtn.props';

const IconBtn: FC<IconBtnProps> = ({
  icon,
  onClick,
  reverse = false,
  variant,
  className,
  iconFunction,
  iconLabel,
  url,
}) => {
  const { iconRef: Icon } = getIconByName(icon);

  const iconStyles = classNames({
    'fill-current': true,
    'w-full h-full text-secondary-dark fill-transparent':
      variant.toLowerCase() === 'result' ||
      variant.toLowerCase() === 'feedback',
    'w-[24px] h-[24px]':
      variant.toLowerCase() === 'contacts' ||
      variant.toLowerCase() === 'footer',
    'w-[32px] h-[32px] text-notify-error': variant.toLowerCase() === 'location',
    'rotate-180': reverse,
  });

  const btnStyles = classNames({
    'flex justify-center items-center': true,
    'transition-colors duration-300': variant.toLowerCase() !== 'location',
    'w-[48px] h-[48px] bg-gray-light hover:bg-white-light focus:hover:bg-white-light rounded-extended overflow-hidden':
      variant.toLowerCase() === 'result',
    'w-[48px] h-[48px] bg-white-light hover:bg-white focus:hover:bg-white rounded-extended overflow-hidden':
      variant.toLowerCase() === 'feedback',
    'w-[36px] h-[36px] text-black-dark bg-gray-light hover:bg-white-light focus:hover:bg-white-light rounded-extended':
      variant.toLowerCase() === 'contacts',
    'hidden md:flex w-[36px] h-[36px] text-black-dark bg-white hover:bg-secondary focus:bg-secondary hover:text-white focus:text-white rounded-extended':
      variant.toLowerCase() === 'footer',
    'w-[32px] h-[32px]': variant.toLowerCase() === 'location',
  });

  return (
    <>
      {url ? (
        <a
          href={url}
          onClick={onClick}
          rel="noopener noreferrer nofollow"
          target="_blank"
          className={`${btnStyles} ${className && className}`}
          aria-label={iconFunction}
        >
          <Icon className={iconStyles} aria-label={iconLabel} />
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={btnStyles}
          aria-label={iconFunction}
        >
          <Icon className={iconStyles} aria-label={iconLabel} />
        </button>
      )}
    </>
  );
};

export default IconBtn;
