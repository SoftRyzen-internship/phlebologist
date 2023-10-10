import { Locale } from '@/i18n.config';

export interface ResultsProps {
  staticData: {
    title: string;
    secondaryTitle: string;
    buttonTextMobile: string;
    buttonText: string;
    slider: {
      beforeAltText: string;
      afterAltText: string;
      beforeHandleText: string;
      afterHandleText: string;
    };
  };
  iconData: any;
  lang: Locale;
  className?: string;
}
