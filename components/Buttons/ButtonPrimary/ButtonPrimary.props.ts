export interface ButtonPrimaryProps {
  view?: 'header' | undefined;
  active?: boolean;
  className?: string;
  children: string;
  actionHandler?: () => void;
}
