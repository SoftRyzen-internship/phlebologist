import { Locale } from '@/i18n.config';
import { ISocials, INavigationItemData, IHeaderButtonsData } from '@/types';

export interface BurgerMenuProps {
  staticData: BurgerMenuData;
  lang: Locale;
}

type BurgerMenuData = {
  navigation: INavigationItemData;
  header: IHeaderButtonsData;
  socials: ISocials;
};
