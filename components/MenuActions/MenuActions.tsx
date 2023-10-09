import {
  ButtonPrimary,
  ExternalLinkButton,
  ScrollLinkButton,
} from '@/components';

const MenuActions = ({ data, actionHandler }) => {
  const { formButton, linkButton, menuBtn, telegram } = data;
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

      {/* replace with lang switcher */}
      <ButtonPrimary
        className={'h-auto w-full px-6 py-2'}
        actionHandler={actionHandler}
      >
        {menuBtn}
      </ButtonPrimary>
    </div>
  );
};

export default MenuActions;
