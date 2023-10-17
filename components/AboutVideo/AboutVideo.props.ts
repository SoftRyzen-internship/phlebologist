import { Locale } from '@/i18n.config';
import { IIconBtnData } from '@/types';

interface IAboutVideoData {
  image: string;
  video: string;
}

export interface AboutVideoProps {
  data: IAboutVideoData;
  lang: Locale;
  staticData: IIconBtnData;
}
