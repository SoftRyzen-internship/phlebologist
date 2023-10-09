'use client';
import { Link } from 'react-scroll';
import classnames from 'classnames';

import React from 'react';

const HeaderLinkBtn = ({ linkTo, children, className }: any) => {
  const btnClass = classnames(
    'font-medium py-3 xl:px-12 text-white bg-primary-dark-400 hover:bg-primary-dark-300 focus:bg-primary-dark-300 outline-without flex items-center justify-center px-6 text-[12px] rounded-normal leading-normal uppercase -tracking-[0.48px]',

    'mediaHover:hover:cursor-pointer mediaHover:hover:font-bold focus:font-bold',

    'transition-all duration-300',
    className,
  );
  return (
    <Link
      to={linkTo}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className={btnClass}
    >
      {children}
    </Link>
  );
};

export default HeaderLinkBtn;
