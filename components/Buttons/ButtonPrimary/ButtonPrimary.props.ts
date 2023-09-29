type ButtonPrimaryVariants = 'small' | 'medium' | 'large' | undefined;

export interface ButtonPrimaryProps {
  buttonsize?: ButtonPrimaryVariants;
  type?: 'button' | 'submit' | undefined;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children: string;
  actionHandler?: () => void;
}
