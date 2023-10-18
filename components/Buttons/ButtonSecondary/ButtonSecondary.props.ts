export interface ButtonSecondaryProps {
  linkto: string;
  view?: 'hero' | undefined;
  className?: string;
  children: React.ReactNode;
  actionHandler?: () => void;
}
