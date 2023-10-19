import { Locale } from '@/i18n.config';
import { IBannerData } from '@/types';

export interface BannerProps {
  staticData: IBannerData;
  lang: Locale;
  className?: string;
}
