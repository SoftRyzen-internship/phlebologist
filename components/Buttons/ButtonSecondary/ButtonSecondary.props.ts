export interface ButtonSecondaryProps {
  linkto: string;
  view?: 'hero' | undefined;
  className?: string;
  children: string;
  actionHandler?: () => void;
}
