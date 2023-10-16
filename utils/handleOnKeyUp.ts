import React from 'react';
import { scroller } from 'react-scroll';

export const handleOnKeyUp = (
  e: React.KeyboardEvent<HTMLButtonElement>,
  to: string,
) => {
  if (e.key == 'Enter' || e.key === ' ') {
    console.log('key pressed');
    scroller.scrollTo(to, { smooth: true });
  }
};
