import { FC } from 'react';

import { AboutItemProps } from './AboutItem.props';

const AboutItem: FC<AboutItemProps> = ({ item }) => {
  return (
    <li className="md:flex md:items-baseline md:gap-2">
      <span className="block text-xs leading-normal -tracking-[0.48px] md:min-w-[62px] md:text-end smOnly:mb-2">
        {item.period}
      </span>
      <p className="font-medium leading-normal -tracking-[0.64px]">
        {item.institution}
      </p>
    </li>
  );
};

export default AboutItem;
