import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { RoutingLinkButtonProps } from './RoutingLinkButton.props';

const RoutingLinkButton: React.FC<RoutingLinkButtonProps> = ({
  linkto,
  className = '',
  children,
}) => {
  const btnClass = classnames(
    'xl:w-[245px] xl:bg-white-light xl:mediaHover:hover:bg-gray-light xl:focus:bg-gray-light',

    'flex items-center justify-center w-[256px] h-[51px] md:w-auto mdOnly:px-12 bg-gray-light text-black-dark text-base rounded-normal leading-normal -tracking-[0.64px]',

    'mediaHover:hover:cursor-pointer mediaHover:hover:font-bold focus:font-bold',

    'transition-all duration-300',
    className,
  );

  return (
    <Link href={linkto} className={btnClass}>
      {children}
    </Link>
  );
};

export default RoutingLinkButton;
