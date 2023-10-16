import React, { FC } from 'react';
import { IconBtn } from '@/components';
import { socialsList } from '@/data/socials';
import { SocialsListProps } from './SocialsList.props';

const SocialsList: FC<SocialsListProps> = ({ variant, staticData }) => {
  const { socials, iconBtnData } = staticData;
  return (
    <ul className="flex gap-3">
      {socialsList.map((name, index) => (
        <li key={index}>
          <IconBtn
            icon={name}
            url={socials[name]}
            variant={variant}
            iconLabel={iconBtnData[name].iconLabel}
            iconFunction={iconBtnData[name].iconFunction}
          />
        </li>
      ))}
    </ul>
  );
};

export default SocialsList;
