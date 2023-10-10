import { FC, createElement } from 'react';
import classnames from 'classnames';

import { HeadingComponentProps, HeadingElementProps } from './Heading.props';

const Heading: FC<HeadingComponentProps> = ({
  tag = 'h2',
  view = undefined,
  variant = 'primary',
  children,
  className = '',
  ...rest
}) => {
  const headingClass = classnames(
    {
      'font-medium text-[32px] text-white -tracking-[1.28px] md:text-[56px] md:-tracking-[2.24px] xl:text-[100px] xl:leading-[1] xl:-tracking-[4px]':
        variant === 'main',
    },
    {
      'leading-[1.21]': variant === 'main' && view === 'hero',
      'leading-[1]': variant === 'main' && view !== 'hero',

      'font-medium text-[32px] md:text-[40px] xl:text-[64px] text-black-dark leading-[1.21] -tracking-[1.28px] md:-tracking-[1.6px] xl:-tracking-[2.56px]':
        variant === 'primary',

      'font-medium text-[28px] md:text-[32px] xl:text-[40px] text-black-dark leading-[1.21] -tracking-[2.24px] md:-tracking-[2.56px] xl:-tracking-[1.6px]':
        variant === 'secondary',
    },
    className,
  );

  const getHeadingProps = () => {
    const props: HeadingElementProps = { className: headingClass, ...rest };
    return props;
  };

  return createElement(tag, getHeadingProps(), children);
};

export default Heading;
