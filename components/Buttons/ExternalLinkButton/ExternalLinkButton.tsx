import React from 'react';
import classnames from 'classnames';

import { ExternalLinkButtonProps } from './ExternalLinkButton.props';

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({
  linkto,
  className = '',
  children,
}) => {
  const btnClass = classnames(
    'xl:bg-white-light xl:mediaHover:hover:bg-gray-light xl:focus:bg-gray-light',

    'outline-without flex items-center justify-center w-[256px] h-[51px] md:px-12 bg-gray-light text-black-dark text-base rounded-normal leading-normal -tracking-[0.64px]',

    'mediaHover:hover:cursor-pointer mediaHover:hover:font-bold focus:font-bold',

    'transition-all duration-300',
    className,
  );

  return (
    <a
      href={linkto}
      className={btnClass}
      rel="noopener noreferrer nofollow"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default ExternalLinkButton;
