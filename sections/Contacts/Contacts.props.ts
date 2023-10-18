import { ISocials, IIconBtnData, ContactData } from '@/types';

export interface ContactsProps {
  staticData: {
    pageData: { contacts: ContactData; iconBtnData: IIconBtnData };
    socialData: ISocials;
  };
}
