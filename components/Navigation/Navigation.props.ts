import { Locale } from '@/i18n.config';
import { INavigationItemData } from '@/types';

export interface NavigationProps {
  data: INavigationItemData;
  lang: Locale;
  variant?: 'header' | 'footer';
  className?: string;
  itemClassName?: string;
  actionHandler?: () => void;
}
