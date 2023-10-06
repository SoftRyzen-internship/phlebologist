import classNames from 'classnames';

import CloseIcon from '@/public/icons/close-icon.svg';
import { ButtonPrimary } from '@/components';

const BurgerMenuButton = ({ children, onClick, isMenu = false }) => {
  const btnStyles = classNames('py-3', {
    'mb-[11px] w-full bg-white flex justify-between': isMenu,
  });
  return (
    <ButtonPrimary className={btnStyles} actionHandler={onClick}>
      {children}
      {isMenu && <CloseIcon width={16} height={16} />}
    </ButtonPrimary>
  );
};

export default BurgerMenuButton;
