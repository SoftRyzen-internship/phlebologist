import { HTMLAttributes } from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3';

type HeadingVariant =
  | 'main'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'privacy-policy';

export interface HeadingElementProps {
  className?: string;
  rest?: HTMLAttributes<HTMLHeadingElement>;
}

export interface HeadingComponentProps extends HeadingElementProps {
  tag?: HeadingTag;
  variant?: HeadingVariant;
  children: React.ReactNode;
}
