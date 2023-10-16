import { ISocials, INavigationItemData, IHeaderButtonsData } from '@/types';

export interface BurgerMenuProps {
  staticData: BurgerMenuData;
}

type BurgerMenuData = {
  navigation: INavigationItemData[];
  header: IHeaderButtonsData;
  socials: ISocials;
};
