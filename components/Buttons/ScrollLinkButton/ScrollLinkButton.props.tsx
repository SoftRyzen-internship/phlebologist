export interface ScrollLinkButtonProps {
  linkto: string;
  variant?: 'light' | 'dark' | 'menu';
  className?: string;
  children: string;
  actionHandler?: () => void;
}
