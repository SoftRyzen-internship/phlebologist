'use client';

import { useState, useEffect } from 'react';
import classNames from 'classnames';

import { BurgerMenuButton, ButtonPrimary } from '@/components';

const BurgerMenu = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false);
  const {
    linkButton,
    formButton,
    langButton: { menuBtn },
    menuButton,
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

  //   const handleOverlayClick = ({ currentTarget, target }: MouseEvent) => {
  //     if (currentTarget !== target) return;
  //     handleMenuToggle();
  //   };

  const menuBtnStyles = classNames('w-full');

  return (
    <>
      <BurgerMenuButton onClick={handleMenuToggle} variant="header">
        {menuButton}
      </BurgerMenuButton>

      {showMenu && (
        <div
          className="modal-backdrop fixed left-0 top-0  h-[100vh] w-[100vw]"
          // onClick={handleOverlayClick}
        >
          <div
            className="absolute right-3 top-[28px]
                        w-full max-w-[308px] text-center md:right-[100px]"
          >
            <BurgerMenuButton onClick={handleMenuToggle} variant="menu">
              {menuButton}
            </BurgerMenuButton>

            <div className="flex flex-col gap-2">
              <ButtonPrimary className={menuBtnStyles} variant="dark">
                {formButton}
              </ButtonPrimary>

              <ButtonPrimary className={menuBtnStyles}>
                {linkButton}
              </ButtonPrimary>

              <ButtonPrimary className={menuBtnStyles}>{menuBtn}</ButtonPrimary>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
