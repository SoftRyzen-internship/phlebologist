import classNames from 'classnames';

import CloseIcon from '@/public/icons/close-icon.svg';
import { ButtonPrimary } from '@/components';

import { BurgerMenuButtonProps } from './BurgerMenuButton.props';

const BurgerMenuButton: React.FC<BurgerMenuButtonProps> = ({
  children,
  onClick,
  isMenu = false,
}) => {
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
