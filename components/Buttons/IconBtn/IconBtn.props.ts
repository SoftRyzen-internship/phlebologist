import { IconBtnName } from '@/types';

export interface IconBtnProps {
  icon: IconBtnName;
  variant: 'result' | 'feedback' | 'contacts' | 'footer' | 'location' | 'close';
  reverse?: boolean | undefined;
  onClick?: () => void;
  className?: string | undefined;
  iconFunction: string;
  iconLabel: string;
  url?: string | undefined;
}
