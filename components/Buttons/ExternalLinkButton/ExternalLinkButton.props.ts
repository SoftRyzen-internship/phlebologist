export interface ExternalLinkButtonProps {
  linkto: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'menu';
  actionHandler?: () => void;
}
