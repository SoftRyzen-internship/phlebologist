import classNames from 'classnames';

import { ButtonPrimary } from '@/components';

const BurgerMenuButton = ({ children, onClick, variant = 'header' }) => {
  const btnStyles = classNames('py-3', {
    'mb-[11px] w-full bg-white': variant === 'menu',
  });
  return (
    <ButtonPrimary className={btnStyles} actionHandler={onClick}>
      {children}
    </ButtonPrimary>
  );
};

export default BurgerMenuButton;
