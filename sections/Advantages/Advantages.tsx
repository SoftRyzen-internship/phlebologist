'use client';

import { FC } from 'react';

import { AdvantagesProps } from './Advantages.props';
import { Heading, AdvantagesList } from '@/components';

const Advantages: FC<AdvantagesProps> = ({ staticData, className = '' }) => {
  const {
    title,
    mainQuestion,
    mainAnswer,
    advListMobile,
    advListTabletDesktop,
  } = staticData;

  return (
    <section className={className}>
      <div className="main-container">
        <div className="wrapper rounded-t-medium bg-gray-light pb-[132px] pt-8">
          <Heading tag="h2" className="mb-6">
            {title}
          </Heading>
          <p className="mb-3 whitespace-pre-wrap font-medium leading-normal -tracking-[0.64px]">
            {mainQuestion}
          </p>
          <p className="mb-9 ml-auto whitespace-pre-wrap text-end text-xs leading-normal -tracking-[0.48px]">
            {mainAnswer}
          </p>
          <AdvantagesList
            advListMobile={advListMobile}
            advListTabletDesktop={advListTabletDesktop}
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
