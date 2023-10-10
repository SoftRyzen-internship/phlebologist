import { ILocaleSwitcherData } from '@/types';

export interface LocaleSwitcherProps {
  variant: 'header' | 'burger-menu';
  className?: string;
  data: ILocaleSwitcherData;
}
