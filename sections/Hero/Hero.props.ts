import { Locale } from '@/i18n.config';

export interface HeroProps {
  staticData: {
    title: string;
    topText: string;
    middleText: string;
    bottomText: string;
    buttonText: string;
  };
  lang: Locale;
  className?: string;
}
