import { Locale } from '@/i18n.config';
import { AboutDataType, IIconBtnData } from '@/types';
import {
  AboutMenuType,
  AboutEducationBtnType,
  AboutCareerBtnType,
} from '@/sections/About/About.props';

type AboutTabsDataType = {
  menu: AboutMenuType[];
  firstSubtitle: string;
  secondSubtitle: string;
  educationBtns: AboutEducationBtnType;
  careerBtns: AboutCareerBtnType;
};

export interface AboutTabsProps {
  staticData: AboutTabsDataType;
  data: AboutDataType;
  iconData: IIconBtnData;
  lang: Locale;
}
