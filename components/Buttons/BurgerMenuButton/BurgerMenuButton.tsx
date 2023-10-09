import classNames from 'classnames';

import CloseIcon from '@/public/icons/close-icon.svg';
import { ButtonPrimary } from '@/components';

const BurgerMenuButton = ({ children, onClick, isMenu = false }) => {
  const btnStyles = classNames('px-6', {
    'mb-[11px] w-full bg-white flex justify-between': isMenu,
  });
  return (
    <ButtonPrimary className={btnStyles} actionHandler={onClick} view="header">
      {children}
      {isMenu && <CloseIcon width={16} height={16} />}
    </ButtonPrimary>
  );
};

export default BurgerMenuButton;
