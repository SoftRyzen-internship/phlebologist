import React, { FC } from 'react';
import { IconBtn } from '@/components';
import { SocialsListProps } from './SocialsList.props';

import { socials } from '@/data/socials';

const SocialsList: FC<SocialsListProps> = ({ variant, staticData }) => {
  return (
    <ul className="flex gap-3">
      {socials.map(({ name, url }, index) => (
        <li key={index}>
          <IconBtn
            icon={name}
            url={url}
            variant={variant}
            iconLabel={staticData[name].iconLabel}
            iconFunction={staticData[name].iconFunction}
          />
        </li>
      ))}
    </ul>
  );
};

export default SocialsList;
