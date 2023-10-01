import React from 'react';

import { ButtonSocialProps } from './ButtonSocial.props';

const ButtonSocial: React.FC<ButtonSocialProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default ButtonSocial;
