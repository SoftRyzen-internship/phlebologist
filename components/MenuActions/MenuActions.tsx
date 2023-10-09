import {
  ExternalLinkButton,
  ScrollLinkButton,
  LocaleSwitcher,
} from '@/components';

import { MenuActionsProps } from './MenuActions.props';

const MenuActions: React.FC<MenuActionsProps> = ({ data, actionHandler }) => {
  const { formButton, linkButton, langButton, telegram } = data;
  return (
    <div className="flex flex-col gap-2">
      <ScrollLinkButton
        linkto="consultation"
        variant="menu"
        actionHandler={actionHandler}
      >
        {formButton}
      </ScrollLinkButton>

      <ExternalLinkButton
        linkto={telegram}
        variant="menu"
        actionHandler={actionHandler}
      >
        {linkButton}
      </ExternalLinkButton>

      <LocaleSwitcher variant="burger-menu" data={langButton} />
    </div>
  );
};

export default MenuActions;
