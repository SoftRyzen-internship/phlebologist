'use client';

import { FC } from 'react';

import { AdvantagesListProps } from './AdvantagesList.props';
import { useWindowWidth } from '@/hooks';

const AdvantagesList: FC<AdvantagesListProps> = ({
  advListMobile,
  advListTabletDesktop,
}) => {
  const { isScreenMobile } = useWindowWidth();

  const advList = isScreenMobile ? advListMobile : advListTabletDesktop;

  return (
    <ul className="flex flex-col gap-6">
      {advList.map(advItem => {
        return (
          <li key={advItem.id}>
            <div className="flex flex-col">
              <div className="mb-1 flex justify-between border-b border-b-black-extra">
                <p className="text-xs font-medium leading-normal -tracking-[0.48px]">
                  {advItem.title}
                </p>
                <span className="text-[28px] font-light leading-normal -tracking-[1.12px]">
                  {advItem.id}
                </span>
              </div>
              <p className="leading-normal -tracking-[0.64px]">
                {advItem.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AdvantagesList;
