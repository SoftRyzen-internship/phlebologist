import { Locale } from '@/i18n.config';

type SliderDataType = {
  beforeAltText: string;
  afterAltText: string;
  beforeHandleText: string;
  afterHandleText: string;
};

type StaticDataType = {
  title: string;
  secondaryTitle: string;
  buttonTextMobile: string;
  buttonText: string;
  slider: SliderDataType;
};

export interface ResultsProps {
  staticData: StaticDataType;
  iconData: any;
  lang: Locale;
}
