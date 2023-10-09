export interface MenuActionsProps {
  data: MenuActionData;
  actionHandler: () => void;
}

type MenuActionData = {
  formButton: string;
  linkButton: string;
  menuBtn: string;
  telegram: string;
};
