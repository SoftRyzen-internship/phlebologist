export interface SubmitButtonProps {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  actionHandler?: () => void;
}
