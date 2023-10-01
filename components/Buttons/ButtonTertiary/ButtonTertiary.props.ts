export interface ButtonTertiaryProps {
  isLink?: boolean;
  type?: 'button' | 'submit';
  linkto?: string;
  className?: string;
  children: string;
  actionHandler?: () => void;
}
