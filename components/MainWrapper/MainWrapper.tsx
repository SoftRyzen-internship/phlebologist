'use client';

import React, { useEffect, FC } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { MainWrapperProps } from './MainWrapper.props';

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 1500 });
    }, 100);
  }, []);

  return <main>{children}</main>;
};

export default MainWrapper;
