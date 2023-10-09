'use client';

import { useState, useEffect } from 'react';
import classNames from 'classnames';

import { BurgerMenuButton, Navigation, MenuActions } from '@/components';

const BurgerMenu = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false);
  const {
    linkButton,
    formButton,
    langButton: { menuBtn },
    menuButton,
  } = data.header;
  const {
    navigation,
    socials: { telegram },
  } = data;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setShowMenu(false);
        document.body.classList.remove('overflow-hidden');
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleMenuToggle = () => {
    setShowMenu(prev => !prev);
    document.body.classList.toggle('overflow-hidden');
  };

  const handleOverlayClick = ({ currentTarget, target }) => {
    if (currentTarget !== target) return;
    handleMenuToggle();
  };

  const menuBtnStyles = classNames('w-full h-auto px-6 py-2');

  const navBtnStyles = classNames(
    menuBtnStyles,
    'px-6 py-2 outline-without flex items-center justify-center',
    'uppercase font-medium text-black-dark text-xs leading-normal -tracking-[0.48px]',
    'rounded-normal bg-white-light mediaHover:hover:bg-gray-light focus:bg-gray-light mediaHover:hover:cursor-pointer',
    'transition-all duration-300',
  );

  return (
    <>
      <BurgerMenuButton onClick={handleMenuToggle}>
        {menuButton}
      </BurgerMenuButton>

      {showMenu && (
        <div
          className="modal-backdrop fixed left-0 top-0 h-[100vh] w-[100vw]"
          onClick={handleOverlayClick}
        >
          <div
            className="absolute right-0 top-6 w-full max-w-[320px] text-center md:right-[56px]
                        md:max-w-[308px] xl:right-[100px] xl:top-[28px] smOnly:px-8"
          >
            <BurgerMenuButton onClick={handleMenuToggle} isMenu={true}>
              {menuButton}
            </BurgerMenuButton>

            <Navigation
              data={navigation}
              className="flex flex-col gap-2 pb-2"
              itemClassName={navBtnStyles}
              actionHandler={handleMenuToggle}
            />

            <MenuActions
              data={{ formButton, linkButton, menuBtn, telegram }}
              actionHandler={handleMenuToggle}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
