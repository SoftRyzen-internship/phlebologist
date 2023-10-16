export interface ButtonPrimaryProps {
  view?: 'header' | undefined;
  variant?: 'light' | 'dark';
  className?: string;
  children: React.ReactNode;
  actionHandler?: () => void;
}
