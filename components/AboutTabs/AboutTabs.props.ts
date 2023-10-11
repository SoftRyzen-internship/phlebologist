import { AboutDataType } from '@/types';
import { AboutMenuType } from '@/sections/About/About.props';

type AboutTabsDataType = {
  menu: AboutMenuType[];
  firstSubtitle: string;
  secondSubtitle: string;
};

export interface AboutTabsProps {
  staticData: AboutTabsDataType;
  data: AboutDataType;
  iconData: any;
}
