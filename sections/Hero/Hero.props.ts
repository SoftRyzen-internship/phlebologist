import { Locale } from '@/i18n.config';

type StaticDataType = {
  title: string;
  topText: string;
  middleText: string;
  bottomText: string;
  buttonText: string;
};

export interface HeroProps {
  staticData: StaticDataType;
  lang: Locale;
  className?: string;
}
