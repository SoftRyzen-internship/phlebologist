export interface ExternalLinkButtonProps {
  linkto: string;
  className?: string;
  children: string;
  variant?: 'default' | 'menu';
  actionHandler?: () => void;
}
