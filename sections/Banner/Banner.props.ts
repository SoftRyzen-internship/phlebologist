import { Locale } from '@/i18n.config';

export interface IFetchedBannerData {
  title: string;
  description: string;
}

export interface BannerProps {
  staticData: {
    buttonText: string;
  };
  lang: Locale;
  className?: string;
}
