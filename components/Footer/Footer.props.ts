import { Locale } from '@/i18n.config';

import {
  ISocials,
  IIconBtnData,
  INavigationItemData,
  IFooterData,
} from '@/types';

export interface FooterProps {
  staticData: {
    socials: ISocials;
    iconBtnData: IIconBtnData;
    footerData: IFooterData;
    navigation: INavigationItemData;
  };
  lang: Locale;
}
