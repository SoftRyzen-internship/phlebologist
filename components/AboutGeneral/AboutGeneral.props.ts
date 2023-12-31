import { Locale } from '@/i18n.config';
import { AboutGeneralDataType } from '@/types';

type GeneralStaticDataType = {
  firstSubtitle: string;
  secondSubtitle: string;
};

export interface AboutGeneralProps {
  data: AboutGeneralDataType;
  staticData: GeneralStaticDataType;
  lang: Locale;
}
