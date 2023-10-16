import React from 'react';
import classnames from 'classnames';

import { ButtonPrimaryProps } from './ButtonPrimary.props';

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  view = undefined,
  variant = 'light',
  className = '',
  children,
  actionHandler,
}) => {
  const primaryBtnClass = classnames(
    {
      'py-3 bg-white font-medium text-black-dark mediaHover:hover:bg-gray-extra focus:bg-gray-extra mediaHover:hover:font-bold focus:font-bold':
        view === 'header' && variant === 'light',
    },
    {
      'py-3 bg-primary-dark-300 font-medium text-white mediaHover:hover:bg-primary-dark-400 focus:bg-primary-dark-400':
        view === 'header' && variant === 'dark',
    },
    {
      'px-6 py-2 font-medium bg-primary-dark-400 text-white':
        view !== 'header' && variant === 'dark',
    },
    {
      'px-6 py-2 font-medium bg-white-light text-black-dark mediaHover:hover:bg-gray-light focus:bg-gray-light':
        view !== 'header' && variant === 'light',
    },

    'uppercase flex items-center justify-center gap-[10px] rounded-normal text-xs leading-normal -tracking-[0.48px] mediaHover:hover:cursor-pointer',

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
