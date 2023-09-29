import { FC, createElement } from 'react';
import classnames from 'classnames';

import { HeadingComponentProps, HeadingElementProps } from './Heading.props';

const Heading: FC<HeadingComponentProps> = ({
  tag = 'h2',
  variant = 'primary',
  children,
  className = '',
  ...rest
}) => {
  const headingClass = classnames(
    {
      'font-medium md:text-[32px] md:leading-[1.21] md:-tracking-[2.56px] xl:text-[40px] xl:-tracking-[1.6px]':
        variant === 'main',

      'font-medium md:text-[40px] md:leading-[1.21] md:-tracking-[3.2px] xl:text-[64px] xl:-tracking-[2.56px]':
        variant === 'primary',

      'font-medium md:text-base md:leading-[1.21] md:-tracking-[0.64px] xl:text-xl xl:-tracking-[0.8px]':
        variant === 'secondary',

      'font-semibold md:text-xl md:leading-[1.21] md:-tracking-[0.8px]':
        variant === 'tertiary',
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
