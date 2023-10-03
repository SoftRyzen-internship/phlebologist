import { Locale } from '@/i18n.config';

export type AboutMenuType = {
  item: string;
  collection: string;
};

type AboutStaticDataType = {
  title: string;
  menu: AboutMenuType[];
};

export interface AboutProps {
  lang: Locale;
  staticData: AboutStaticDataType;
}