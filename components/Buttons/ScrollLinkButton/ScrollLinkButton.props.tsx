export interface ScrollLinkButtonProps {
  linkto: string;
  variant?: 'light' | 'dark' | 'menu';
  className?: string;
  children: React.ReactNode;
  actionHandler?: () => void;
}
