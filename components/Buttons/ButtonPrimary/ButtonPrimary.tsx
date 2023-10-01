import React from 'react';
import classnames from 'classnames';

import { ButtonPrimaryProps } from './ButtonPrimary.props';

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  view = undefined,
  active = false,
  className = '',
  children,
  actionHandler,
}: ButtonPrimaryProps) => {
  const primaryBtnClass = classnames(
    { 'py-3': view === 'header' },
    { 'py-2': view !== 'header' },
    { 'bg-black-dark': active === true },
    { 'bg-primary-dark-100': active === false },
    'uppercase outline-without flex items-center justify-center rounded-normal text-white font-medium text-white-light text-xs px-6 leading-normal -tracking-[0.48px]',

    'mediaHover:hover:bg-gray-light mediaHover:hover:text-black-dark focus:bg-gray-light focus:text-black-dark',

    'transition-all duration-300',
    className,
  );

  return (
    <button type="button" onClick={actionHandler} className={primaryBtnClass}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
