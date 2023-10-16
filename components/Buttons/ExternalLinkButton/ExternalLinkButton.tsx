import React from 'react';
import classnames from 'classnames';

import { ExternalLinkButtonProps } from './ExternalLinkButton.props';

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({
  linkto,
  className = '',
  children,
  variant = 'default',
  actionHandler,
}) => {
  const btnClass = classnames(
    'flex items-center justify-center w-[256px] h-[51px] md:px-0 bg-gray-light text-black-dark text-base rounded-normal leading-normal -tracking-[0.64px]',

    'mediaHover:hover:cursor-pointer mediaHover:hover:font-bold focus:font-bold',

    'transition-all duration-300',

    {
      'xl:bg-white-light xl:mediaHover:hover:bg-gray-light xl:focus:bg-gray-light':
        variant === 'default',
    },

    {
      'w-full h-auto px-6 py-2 font-semibold uppercase text-xs -tracking-[0.48px] bg-white-light text-black-dark mediaHover:hover:bg-gray-extra focus:bg-gray-extra mediaHover:hover:font-semibold focus:font-semibold':
        variant === 'menu',
    },

    className,
  );

  return (
    <a
      href={linkto}
      className={btnClass}
      rel="noopener noreferrer nofollow"
      target="_blank"
      onClick={actionHandler}
    >
      {children}
    </a>
  );
};

export default ExternalLinkButton;
