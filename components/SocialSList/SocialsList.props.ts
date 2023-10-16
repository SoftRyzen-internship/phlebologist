import { IIconBtnData, ISocials } from '@/types';

export interface SocialsListProps {
  variant: 'contacts' | 'footer';
  staticData: {
    iconBtnData: IIconBtnData;
    socials: ISocials;
  };
}
