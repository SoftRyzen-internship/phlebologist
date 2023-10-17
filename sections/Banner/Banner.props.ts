import { Locale } from '@/i18n.config';

export interface IFetchedBannerData {
  title: string;
  description: string;
}

type StaticDataType = { buttonText: string };

export interface BannerProps {
  staticData: StaticDataType;
  lang: Locale;
  className?: string;
}
