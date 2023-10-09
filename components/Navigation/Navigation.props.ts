import { INavigationItemData } from '@/types';

export interface NavigationProps {
  data: INavigationItemData[];
  variant?: 'header' | 'footer';
  className?: string;
  itemClassName?: string;
  actionHandler?: () => void;
}
