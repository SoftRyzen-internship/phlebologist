import { Locale } from '@/i18n.config';
import { IIconBtnData } from '@/types';

export type AboutMenuType = {
  item: string;
  collection: string;
};

export type AboutEducationBtnType = {
  btnShow: string;
  btnHide: string;
};

export type AboutCareerBtnType = {
  btnShow: string;
  btnHide: string;
};

type AboutStaticDataType = {
  title: string;
  firstSubtitle: string;
  secondSubtitle: string;
  menu: AboutMenuType[];
  educationBtns: AboutEducationBtnType;
  careerBtns: AboutCareerBtnType;
};

export interface AboutProps {
  lang: Locale;
  staticData: {
    about: AboutStaticDataType;
    iconData: IIconBtnData;
  };
}
