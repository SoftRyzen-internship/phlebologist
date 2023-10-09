import { ILocaleSwitcherData } from '@/types';

export interface MenuActionsProps {
  data: MenuActionData;
  actionHandler: () => void;
}

type MenuActionData = {
  formButton: string;
  linkButton: string;
  langButton: ILocaleSwitcherData;
  telegram: string;
};
