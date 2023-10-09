'use client';

import { useState, useEffect } from 'react';
import classNames from 'classnames';

import {
  BurgerMenuButton,
  ButtonPrimary,
  Navigation,
  ExternalLinkButton,
  ScrollLinkButton,
} from '@/components';

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

  const externalBtnStyles = classNames(
    menuBtnStyles,
    'font-medium bg-white-light text-black-dark mediaHover:hover:bg-gray-light focus:bg-gray-light',
    'uppercase outline-without flex items-center justify-center gap-[10px] rounded-normal text-xs leading-normal -tracking-[0.48px]',
    'mediaHover:hover:cursor-pointer mediaHover:hover:font-medium focus:font-medium',
  );

  const scrollBtnStyles = classNames(
    menuBtnStyles,
    'font-semibold uppercase text-xs leading-normal -tracking-[0.48px] text-white bg-primary-dark-400 xl:bg-primary-dark-400',
    'flex items-center justify-center',
    'mediaHover:hover:bg-primary-dark-300 focus:bg-primary-dark-300',
    'mediaHover:hover:cursor-pointer mediaHover:hover:font-semibold focus:font-semibold',
  );

  const navBtnStyles = classNames(
    menuBtnStyles,
    'px-6 py-2 font-medium bg-white-light text-black-dark mediaHover:hover:bg-gray-light focus:bg-gray-light',
    'uppercase outline-without flex items-center justify-center gap-[10px] rounded-normal text-black-dark text-xs leading-normal -tracking-[0.48px] mediaHover:hover:cursor-pointer',
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
            className="absolute right-3 top-[28px]
                        w-full max-w-[308px] text-center md:right-[100px]"
          >
            <BurgerMenuButton onClick={handleMenuToggle} isMenu={true}>
              {menuButton}
            </BurgerMenuButton>

            <Navigation
              data={navigation}
              className="flex flex-col gap-2 pb-2"
              itemClassName={navBtnStyles}
            />

            <div className="flex flex-col gap-2">
              <ScrollLinkButton
                className={scrollBtnStyles}
                linkto="consultation"
              >
                {formButton}
              </ScrollLinkButton>

              <ExternalLinkButton
                linkto={telegram}
                className={externalBtnStyles}
              >
                {linkButton}
              </ExternalLinkButton>

              <ButtonPrimary className={menuBtnStyles}>{menuBtn}</ButtonPrimary>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
