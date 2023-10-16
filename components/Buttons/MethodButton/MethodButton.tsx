import Link from 'next/link';
import classNames from 'classnames';

import { MethodButtonProps } from './MethodButton.props';

const MethodButton: React.FC<MethodButtonProps> = ({
  children,
  lang,
  id,
  className,
}) => {
  const buttonStyles = classNames(
    'cursor-pointer rounded-xl',
    'flex items-center justify-center',
    'w-[256px] py-4 px-12',
    'text-base text-black-dark tracking-[-0.64px]',
    'bg-gray-light xl:bg-white-light xl:hover:bg-gray-light',
    'transition-all duration-300',
    className,
  );

  return (
    <Link href={`${lang}/treatment/${id}`} className={buttonStyles}>
      {children}
    </Link>
  );
};

export default MethodButton;
