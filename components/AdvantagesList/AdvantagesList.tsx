import { FC } from 'react';

import { AdvantagesListProps } from './AdvantagesList.props';

const AdvantagesList: FC<AdvantagesListProps> = ({ advList }) => {
  return (
    <ul className="mb-12 flex flex-col gap-6 md:mb-0">
      {advList.map(advItem => {
        return (
          <li key={advItem.id} className="md:relative">
            <div className="flex flex-col md:w-[316px] xl:w-[514px]">
              <div className="mb-1 flex justify-between border-b border-b-black-extra">
                <p className="text-xs font-medium leading-normal -tracking-[0.48px] md:absolute md:right-[106%] md:top-1 md:whitespace-nowrap xl:right-[108%] xl:text-sm xl:-tracking-[0.56px]">
                  {advItem.title}
                </p>
                <span className="text-[28px] font-light leading-normal -tracking-[1.12px] xl:text-[32px] xl:-tracking-[1.28px]">
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
