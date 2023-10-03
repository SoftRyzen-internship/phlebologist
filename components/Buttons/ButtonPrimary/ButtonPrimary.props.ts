export interface ButtonPrimaryProps {
  view?: 'header' | undefined;
  variant?: 'light' | 'dark';
  className?: string;
  children: string;
  actionHandler?: () => void;
}
